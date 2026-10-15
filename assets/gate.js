/* Lien « Documents donnés » : la page (images chargées tardivement) change de hauteur
   pendant le scroll lisse, qui s'arrête trop haut. On recale jusqu'à stabilisation. */
(function () {
  "use strict";
  function goDocs() {
    var el = document.getElementById("docs");
    if (!el) return;
    var tries = 0;
    function fix() {
      var de = document.documentElement;
      var top = el.getBoundingClientRect().top + window.pageYOffset - 70;
      var max = de.scrollHeight - window.innerHeight;
      de.style.scrollBehavior = "auto";
      window.scrollTo(0, Math.max(0, Math.min(top, max)));
      de.style.scrollBehavior = "";
      if (++tries < 12) setTimeout(fix, 150);
    }
    fix();
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href="#docs"]');
    if (!a) return;
    e.preventDefault();
    if (history.replaceState) history.replaceState(null, "", "#docs");
    goDocs();
  });
  if (location.hash === "#docs") window.addEventListener("load", goDocs);
})();

(function () {
  "use strict";
  var STORAGE_KEY = "revecam_unlocked_v1";
  var HASH = "eb19f36706215dd9a753ac08fe013ebc84c56130848f0d9f599f258363a660eb";

  function reveal() {
    document.body.style.visibility = "visible";
  }

  if (localStorage.getItem(STORAGE_KEY) === "1") {
    reveal();
    return;
  }

  function sha256Hex(str) {
    var enc = new TextEncoder().encode(str);
    return crypto.subtle.digest("SHA-256", enc).then(function (buf) {
      return Array.prototype.map
        .call(new Uint8Array(buf), function (b) {
          return b.toString(16).padStart(2, "0");
        })
        .join("");
    });
  }

  var overlay = document.createElement("div");
  overlay.id = "gate-overlay";
  overlay.innerHTML =
    '<div class="gate-box">' +
    '<div class="gate-icon">🔒</div>' +
    "<h2>Accès protégé</h2>" +
    "<p>Ce site est réservé aux personnes ayant acheté l’accès.</p>" +
    '<input type="password" id="gate-pw" placeholder="Mot de passe" autocomplete="off">' +
    '<button id="gate-btn" type="button">Déverrouiller</button>' +
    '<p id="gate-err" class="gate-err"></p>' +
    "</div>";
  document.body.appendChild(overlay);
  reveal();

  var pwInput = document.getElementById("gate-pw");
  var err = document.getElementById("gate-err");

  function tryUnlock() {
    var val = pwInput.value;
    err.textContent = "";
    if (!val) return;
    sha256Hex(val).then(function (h) {
      if (h === HASH) {
        localStorage.setItem(STORAGE_KEY, "1");
        overlay.remove();
      } else {
        err.textContent = "Mot de passe incorrect.";
        pwInput.value = "";
        pwInput.focus();
      }
    });
  }

  document.getElementById("gate-btn").addEventListener("click", tryUnlock);
  pwInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") tryUnlock();
  });
  pwInput.focus();
})();
