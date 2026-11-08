/* Barre commune : matière > année > chapitre, annales, recherche.
   Lit assets/catalogue.js. Fonctionne depuis n'importe quel dossier (chemins calculés à partir de ce script). */
(function () {
  "use strict";
  var C = window.CATALOGUE;
  if (!C) return;

  var ROOT = document.currentScript ? new URL("../", document.currentScript.src).href : "/";
  function url(p) { return ROOT + p; }
  function norm(s) { return String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase(); }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function niveauLabel(n) { return n === "1" ? "1re année" : "2e année"; }
  function matiere(id) { return C.matieres.find(function (m) { return m.id === id; }); }
  function annee(m, id) { return m.annees.find(function (a) { return a.id === id; }); }

  // ---- index de recherche (titres, matières, années, annales) ----
  var IDX = [];
  C.matieres.forEach(function (m) {
    m.annees.forEach(function (a) {
      a.chapitres.forEach(function (ch) {
        IDX.push({
          label: m.nom + " · " + a.label + " · " + ch.n + " " + ch.titre,
          url: url(ch.url),
          hay: norm(m.nom + " " + a.label + " " + ch.n + " " + ch.titre + " chapitre cours")
        });
      });
    });
    m.annales.forEach(function (an) {
      IDX.push({
        label: m.nom + " · annales " + an.annee + " (" + niveauLabel(an.niveau) + ")",
        url: url(an.url),
        hay: norm(m.nom + " annales ds interro partiel " + an.annee + " " + niveauLabel(an.niveau))
      });
    });
  });
  C.pages.forEach(function (p) {
    IDX.push({ label: p.titre, url: url(p.url), hay: norm(p.titre + " annales corrections exo") });
  });

  function chercher(q) {
    var mots = norm(q).split(/\s+/).filter(Boolean);
    if (!mots.length) return [];
    return IDX.filter(function (e) {
      return mots.every(function (w) { return e.hay.indexOf(w) !== -1; });
    }).slice(0, 12);
  }

  // ---- barre du haut ----
  function bloc(html) {
    var d = document.createElement("div");
    d.innerHTML = html;
    return d.firstElementChild;
  }

  function construireBarre() {
    var opts = '<option value="">Matière…</option>' + C.matieres.map(function (m) {
      return '<option value="' + m.id + '">' + esc(m.nom) + "</option>";
    }).join("");
    return bloc(
      '<div class="topbar nav-main">' +
        '<a class="brand" href="' + url("index.html") + '">📚 Révision ECAM</a>' +
        '<select id="nav-m" aria-label="Matière">' + opts + "</select>" +
        '<select id="nav-a" aria-label="Année" disabled><option value="">Année…</option></select>' +
        '<select id="nav-c" aria-label="Chapitre" disabled><option value="">Chapitre…</option></select>' +
        '<a id="nav-annales" class="nav-btn" href="#" hidden>📂 Annales</a>' +
        '<div class="nav-search">' +
          '<input id="nav-q" type="search" placeholder="Rechercher un chapitre ou des annales…" autocomplete="off" aria-label="Rechercher">' +
          '<div id="nav-res" class="nav-res" hidden></div>' +
        "</div>" +
      "</div>"
    );
  }

  var barre = construireBarre();
  var cible = document.getElementById("site-nav");
  if (cible) cible.replaceWith(barre);
  else document.body.insertBefore(barre, document.body.firstChild);

  var selM = document.getElementById("nav-m");
  var selA = document.getElementById("nav-a");
  var selC = document.getElementById("nav-c");
  var lienAnn = document.getElementById("nav-annales");
  var q = document.getElementById("nav-q");
  var res = document.getElementById("nav-res");

  function remplirAnnees(m) {
    selA.innerHTML = '<option value="">Année…</option>' + m.annees.map(function (a) {
      return '<option value="' + a.id + '">' + esc(a.label) + "</option>";
    }).join("");
    selA.disabled = false;
  }
  function remplirChapitres(m, a) {
    selC.innerHTML = '<option value="">Chapitre…</option><option value="__liste">Voir toute l\'année</option>' +
      a.chapitres.map(function (ch, i) {
        return '<option value="' + i + '">' + esc(ch.n + " · " + ch.titre) + "</option>";
      }).join("");
    selC.disabled = false;
  }
  function choisirMatiere(id) {
    var m = matiere(id);
    selA.disabled = true; selC.disabled = true;
    selA.innerHTML = '<option value="">Année…</option>';
    selC.innerHTML = '<option value="">Chapitre…</option>';
    if (!m) { lienAnn.hidden = true; return; }
    remplirAnnees(m);
    lienAnn.href = url("annales.html?m=" + m.id);
    lienAnn.hidden = false;
  }

  // Chaque choix affiche tout de suite : matière seule = toute la matière, année = cette année,
  // aucun choix = tout le site. Le chapitre, lui, ouvre directement la page.
  var surAnnales = !!document.getElementById("page-annales");
  function aller(params) {
    var page = surAnnales ? "annales.html" : "matiere.html";
    location.href = url(page + (params ? "?" + params : ""));
  }
  selM.addEventListener("change", function () {
    aller(selM.value ? "m=" + selM.value : "");
  });
  selA.addEventListener("change", function () {
    if (!selM.value) return;
    aller("m=" + selM.value + (!surAnnales && selA.value ? "&a=" + selA.value : ""));
  });
  selC.addEventListener("change", function () {
    var m = matiere(selM.value), a = m && annee(m, selA.value);
    if (!a) return;
    if (selC.value === "__liste") { location.href = url("matiere.html?m=" + m.id + "&a=" + a.id); return; }
    var ch = a.chapitres[selC.value];
    if (ch) location.href = url(ch.url);
  });

  // préselection : page de chapitre ou paramètres de la page matière
  (function preselection() {
    var p = new URLSearchParams(location.search);
    var mid = p.get("m"), aid = p.get("a");
    if (mid) {
      selM.value = mid; choisirMatiere(mid);
      var m = matiere(mid);
      if (m && aid && annee(m, aid)) { selA.value = aid; remplirChapitres(m, annee(m, aid)); }
      return;
    }
    var chemin = location.pathname;
    for (var i = 0; i < C.matieres.length; i++) {
      var m2 = C.matieres[i];
      for (var j = 0; j < m2.annees.length; j++) {
        var a2 = m2.annees[j];
        for (var k = 0; k < a2.chapitres.length; k++) {
          if (chemin.slice(-a2.chapitres[k].url.length) === a2.chapitres[k].url) {
            selM.value = m2.id; choisirMatiere(m2.id);
            selA.value = a2.id; remplirChapitres(m2, a2);
            selC.value = String(k);
            return;
          }
        }
      }
    }
  })();

  // recherche
  function afficher() {
    var liste = chercher(q.value);
    if (!q.value.trim()) { res.hidden = true; res.innerHTML = ""; return; }
    res.innerHTML = liste.length
      ? liste.map(function (e) { return '<a href="' + e.url + '">' + esc(e.label) + "</a>"; }).join("")
      : '<div class="nav-vide">Rien trouvé</div>';
    res.hidden = false;
  }
  q.addEventListener("input", afficher);
  q.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      var liste = chercher(q.value);
      if (liste.length) location.href = liste[0].url;
    } else if (e.key === "Escape") {
      q.value = ""; afficher(); q.blur();
    }
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav-search")) res.hidden = true;
  });

  // ---- pages générées : matière et annales ----
  var page = document.getElementById("page-matiere");
  var pageAn = document.getElementById("page-annales");
  var p0 = new URLSearchParams(location.search);

  function rendreMatiere(m, anneeId) {
    return m.annees.filter(function (a) { return !anneeId || a.id === anneeId; }).map(function (a) {
      return '<section class="cat-annee"><h2>' + esc(a.label) + '</h2><ol class="cat-liste">' +
        a.chapitres.map(function (ch) {
          return '<li><a href="' + url(ch.url) + '"><span class="num">' + esc(ch.n) + '</span> ' + esc(ch.titre) + '</a></li>';
        }).join('') + '</ol></section>';
    }).join('');
  }
  if (page) {
    var mm = matiere(p0.get("m"));
    var html;
    if (!mm) {
      // rien de choisi : tout voir
      document.title = "Toutes les matières — Révision ECAM";
      document.getElementById("titre-page").textContent = "Toutes les matières";
      html = C.matieres.map(function (m) {
        return '<h2 class="cat-matiere">' + esc(m.nom) + '</h2>' + rendreMatiere(m, null) +
          '<p><a class="nav-btn" href="' + url("annales.html?m=" + m.id) + '">📂 Annales de ' + esc(m.nom) + '</a></p>';
      }).join('');
    } else {
      var aid = p0.get("a") && annee(mm, p0.get("a")) ? p0.get("a") : null;
      document.title = mm.nom + " — Révision ECAM";
      document.getElementById("titre-page").textContent = mm.nom + (aid ? " · " + annee(mm, aid).label : "");
      html = rendreMatiere(mm, aid) +
        '<p><a class="nav-btn" href="' + url("annales.html?m=" + mm.id) + '">📂 Annales de ' + esc(mm.nom) + '</a></p>';
    }
    page.innerHTML = html;
  }

  if (pageAn) {
    var ma = matiere(p0.get("m"));
    var lst = ma ? [ma] : C.matieres;
    document.title = (ma ? "Annales — " + ma.nom : "Annales") + " — Révision ECAM";
    document.getElementById("titre-page").textContent = ma ? "Annales — " + ma.nom : "Annales";
    pageAn.innerHTML = lst.map(function (m) {
      var groupes = ["1", "2"].map(function (niv) {
        var items = m.annales.filter(function (an) { return an.niveau === niv; });
        if (!items.length) return "";
        items.sort(function (x, y) {
          if (x.annee === "Sans date") return 1;
          if (y.annee === "Sans date") return -1;
          return y.annee.localeCompare(x.annee);
        });
        return '<section class="cat-annee"><h2>' + esc(niveauLabel(niv)) + "</h2><ul class=\"cat-liste\">" +
          items.map(function (an) {
            return '<li><a href="' + url(an.url) + '"><span class="num">' + esc(an.annee) + "</span> " +
              esc(an.docs + " document" + (an.docs > 1 ? "s" : "")) + "</a></li>";
          }).join("") + "</ul></section>";
      }).join("");
      return (ma ? "" : "<h2 class=\"cat-matiere\">" + esc(m.nom) + "</h2>") + groupes;
    }).join("");
  }
})();
