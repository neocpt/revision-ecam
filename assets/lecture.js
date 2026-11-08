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
  // bouton flottant en bas à droite : accessible partout dans la page
  var lab = document.createElement("label");
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
  var secs = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var som = null;
  if (secs.length > 1) {
    som = document.createElement("nav");
    som.className = "lecture-sommaire";
    var html = '<div class="ls-titre">Sommaire</div>';
    secs.forEach(function (s) {
      var t = s.querySelector("h2, .memo-head");
      if (!t) return;
      html += '<a href="#' + s.id + '" data-id="' + s.id + '">' + esc(t.textContent.trim()) + "</a>";
      s.querySelectorAll(".exo-card[id]").forEach(function (c) {
        var h = c.querySelector(".exo-head");
        if (!h) return;
        var txt = (h.firstChild && h.firstChild.nodeType === 3 ? h.firstChild.textContent : h.textContent).trim();
        html += '<a class="ls-sous" href="#' + c.id + '">' + esc(txt) + "</a>";
      });
    });
    som.innerHTML = html;
    body.appendChild(som);
  }
  function majSommaire() {
    if (!som) return;
    var y = innerHeight * 0.3, actif = null;
    secs.forEach(function (s) { if (s.getBoundingClientRect().top < y) actif = s.id; });
    som.querySelectorAll("a[data-id]").forEach(function (a) { a.classList.toggle("actif", a.getAttribute("data-id") === actif); });
  }

  addEventListener("scroll", function () { majProg(); majSommaire(); }, { passive: true });
  addEventListener("resize", majProg);
  majProg(); majSommaire();
})();
