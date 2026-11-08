/* Lecture confortable + mode examen (optionnel).
   Une page l'active en chargeant ce script APRÈS nav.js. Rien d'autre à modifier dans la page.
   - sommaire fixe à gauche (grand écran), barre de progression en haut ;
   - case « Mode examen » : cache chaque réponse (tout ce qui suit une question .q), un clic l'affiche. */
(function () {
  "use strict";
  var body = document.body;
  body.classList.add("lecture");
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  // 1) Regrouper chaque réponse dans un bloc .reponse
  function blanc(n) { return n.nodeType === 8 || (n.nodeType === 3 && !n.textContent.trim()); }
  function enonce(n) { return n.nodeType === 1 && n.matches("figure, .enonce, .enonce-img"); }
  document.querySelectorAll(".exo-body").forEach(function (corps) {
    var groupe = null, debut = true;
    Array.prototype.slice.call(corps.childNodes).forEach(function (n) {
      if (n.nodeType === 1 && n.classList.contains("q")) { groupe = null; debut = false; return; }
      if (debut) {
        if (blanc(n) || enonce(n)) return;   // l'énoncé reste toujours visible
        debut = false;                        // exercice sans question numérotée
      }
      if (!groupe) {
        if (blanc(n)) return;
        groupe = document.createElement("div");
        groupe.className = "reponse";
        corps.insertBefore(groupe, n);
      }
      groupe.appendChild(n);
    });
  });

  // 2) Case « Mode examen » (mémorisée sur cet appareil)
  var CLE = "revecam_examen";
  function lire() { try { return localStorage.getItem(CLE) === "1"; } catch (e) { return false; } }
  function ecrire(v) { try { localStorage.setItem(CLE, v ? "1" : "0"); } catch (e) {} }
  // bouton flottant en bas à droite : accessible partout dans la page (seulement s'il y a des réponses)
  var aDesReponses = !!document.querySelector(".reponse");
  var lab = document.createElement("label");
  if (!aDesReponses) lab.hidden = true;
  lab.className = "examen-toggle";
  lab.innerHTML = '<input type="checkbox"> Mode examen';
  body.appendChild(lab);
  var box = lab.querySelector("input");
  function appliquer(v) {
    body.classList.toggle("examen", v);
    if (!v) document.querySelectorAll(".reponse.vue").forEach(function (r) { r.classList.remove("vue"); });
  }
  box.checked = lire();
  appliquer(box.checked);
  box.addEventListener("change", function () { ecrire(box.checked); appliquer(box.checked); });
  document.addEventListener("click", function (e) {
    if (!body.classList.contains("examen")) return;
    var r = e.target.closest(".reponse");
    if (r && !r.classList.contains("vue")) { r.classList.add("vue"); e.preventDefault(); }
  });

  // 3) Barre de progression de lecture
  var prog = document.createElement("div");
  prog.className = "lecture-progres";
  body.appendChild(prog);
  function majProg() {
    var h = document.documentElement, max = h.scrollHeight - h.clientHeight;
    prog.style.width = (max > 0 ? Math.min(100, h.scrollTop / max * 100) : 0) + "%";
  }

  // 4) Sommaire fixe (sections + exercices)
  // Toujours accessible : barre fixe sur grand écran, tiroir + bouton « Sommaire » sinon.
  var secs = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var som = null, compteur = 0;
  if (secs.length > 1) {
    som = document.createElement("nav");
    som.className = "lecture-sommaire";
    var html = '<div class="ls-titre">Sommaire</div>';
    secs.forEach(function (s) {
      var t = s.querySelector("h2, .memo-head");
      if (!t) return;
      html += '<a href="#' + s.id + '" data-id="' + s.id + '">' + esc(t.textContent.trim()) + "</a>";
      // sous-parties : titres du cours (h3) et exercices, dans l'ordre de la page
      s.querySelectorAll("h3, .exo-card").forEach(function (el) {
        if (el.tagName === "H3" && el.closest(".exo-card, .memo-sheet")) return;
        var txt;
        if (el.classList.contains("exo-card")) {
          var h = el.querySelector(".exo-head");
          if (!h) return;
          txt = h.firstChild && h.firstChild.nodeType === 3 ? h.firstChild.textContent : h.textContent;
        } else {
          txt = el.textContent;
        }
        if (!el.id) el.id = "som-" + (++compteur);
        html += '<a class="ls-sous" href="#' + el.id + '">' + esc(txt.trim()) + "</a>";
      });
    });
    som.innerHTML = html;
    body.appendChild(som);
    body.classList.add("avec-sommaire");
    var btnSom = document.createElement("button");
    btnSom.type = "button";
    btnSom.className = "sommaire-btn";
    btnSom.textContent = "☰ Sommaire";
    body.appendChild(btnSom);
    btnSom.addEventListener("click", function (e) { e.stopPropagation(); som.classList.toggle("ouvert"); });
    som.addEventListener("click", function (e) { if (e.target.closest("a")) som.classList.remove("ouvert"); });
    document.addEventListener("click", function (e) {
      if (som.classList.contains("ouvert") && !e.target.closest(".lecture-sommaire")) som.classList.remove("ouvert");
    });
  }
  function majSommaire() {
    if (!som) return;
    var y = innerHeight * 0.3, actif = null;
    secs.forEach(function (s) { if (s.getBoundingClientRect().top < y) actif = s.id; });
    som.querySelectorAll("a[data-id]").forEach(function (a) {
      var on = a.getAttribute("data-id") === actif;
      if (on && !a.classList.contains("actif")) som.scrollTop = Math.max(0, a.offsetTop - 60);  // garde la partie en cours visible
      a.classList.toggle("actif", on);
    });
  }

  addEventListener("scroll", function () { majProg(); majSommaire(); }, { passive: true });
  addEventListener("resize", majProg);
  majProg(); majSommaire();
})();
