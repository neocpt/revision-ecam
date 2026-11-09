# Révision ECAM : consignes pour Claude (sessions locales et cloud)

Site statique de révision (cours + exercices + corrections de TD) pour un étudiant d'ECAM Lyon, publié par GitHub Pages
(https://neocpt.github.io/revision-ecam/). Matières traitées : UNIQUEMENT maths, physique(-chimie/électronique) et SI.
Ne jamais écrire de mot de passe ou de code d'accès dans ce dépôt (il est public).

## Quand un nouveau document arrive
Un document (PDF, photo, scan, Office) envoyé par l'utilisateur ou déposé dans `inbox/` déclenche toujours la même démarche,
en autonomie complète, sans poser de question sauf ambiguïté réelle :
1. Identifier la matière, l'année (1re = ECAM 1, 2e = AM2) et le type (cours, TD, TP, corrigé, examen).
2. Ranger la source dans `documents/<matière>/<chapitre>/` (matières : `aem2-electronique`, `aem2-mathematiques`, `aem2-si`,
   `maths`, `physique-chimie`, `sii`). Annales : `documents/<matière>/annales/<année>/<type>/`.
3. Créer ou compléter la page du chapitre dans `<matière>/` (gabarit ci-dessous) : résumé de cours, fiche mémo, exercices,
   correction intégrale du TD au format « par étapes ». Énoncés en image recadrée, graphes toujours tracés en SVG.
4. Déclarer un nouveau chapitre dans `assets/catalogue.js` (matière, année, numéro, titre, url) : il apparaît alors dans la barre
   du haut, la recherche et la page de la matière. `index.html` ne liste pas les chapitres.
5. Contrôler (balises équilibrées, liens relatifs existants, `&lt;` dans les formules, rendu), puis `git pull --rebase`, commit,
   `git push origin main` (push direct autorisé par le propriétaire).
6. Noter ce qui a été fait dans `notes/journal.md` (date, source, pages créées, erreurs trouvées, points incertains).

## Gabarit d'une page de chapitre
- `<link rel="stylesheet" href="../assets/style.css?v=4">` ; MathJax v3 (`\( \)` et `\[ \]`).
- Couleur par `<body class="theme-phys|theme-math|theme-sii|theme-am2">` : physique bleu, maths rouge, SII jaune,
  toute matière AM2 = vert sarcelle (`theme-am2`). Jamais de CSS inline ni de thème maison.
- En haut : `<div id="site-nav"></div>` puis `<nav class="subnav">` avec les ancres de la page (Cours, Exercices, Correction TD, Documents).
- Sections `<section class="block" id="…">` : `#memo` (fiche mémo), `#cours`, `#exos`, `#td`, `#docs`.
- Avant `</body>`, dans cet ordre : `../assets/gate.js`, `../assets/catalogue.js?v=2`, `../assets/nav.js?v=2`, `../assets/lecture.js?v=3`.
  Sans `gate.js`, la page contourne le mot de passe du site. Exception : `aem2-si/si-bigeard/` et `corrections-exo/` (code chiffré).
- « Documents donnés » : `<a class="doc-item" href="../assets/pdf.html?f=../documents/<matière>/<chap>/<fichier>.pdf" target="_blank" rel="noopener">`
  (`f=` relatif à `assets/`, encodé en pourcentage). Jamais de lien direct vers un PDF.
- Après une modification de `assets/style.css` ou d'un script, augmenter le `?v=` dans toutes les pages.

## Format des corrections « par étapes » (obligatoire)
Modèles : `aem2-electronique/ch1-filtres-passifs.html#ex5` et `aem2-electronique/ch6-electronique-numerique.html#td6-ex6`.
- Chaque exercice : `.exo-card` > `.exo-head` (titre) + `.exo-body`. Dans `.exo-body`, l'énoncé en image (`<figure>`) ou `.enonce` en premier.
- Chaque question : `<p class="q">n) titre</p>`, puis `<p class="etape">Étape k : titre court</p>`, des phrases courtes,
  une formule par ligne en `\[ … \]`.
- Avant d'appliquer une formule : `<div class="rappel"><span class="lab">Rappel · nom</span>\[ formule générale \]</div>`.
- Cas multiples et résultats en `<ul><li>` ; résultat final en `<div class="res">` ; pièges en `<div class="warnbox"><span class="lab">Piège</span> …</div>`.
- Tout ce qui suit un `.q` jusqu'au `.q` suivant est la réponse (le mode examen la masque) : jamais de morceau d'énoncé dedans.
- Ordre des exercices = ordre du TD vierge. Un corrigé du professeur fait référence : reprendre ses résultats, réexpliquer la démarche,
  signaler ses erreurs dans un `.warnbox`.
- SI (1re et 2e année) : dès qu'un corrigé Bigeard existe, il fait référence. Chercher le titre de l'exercice dans les dossiers
  `documents/si-bigeard/<thème>_<titre>/` et ouvrir le `…-prof.pdf`. Sans corrigé : correction rédigée par nous, signalée comme telle.
- Physique : un « T » dans le titre d'un exo = Thibierge (https://www.etienne-thibierge.fr/), un « H » = Horemans
  (https://sites.google.com/view/jphoremans/accueil) ; y chercher l'énoncé et le corrigé seulement dans ce cas.

## Style d'écriture
Français, ton pédagogique, on s'adresse à l'étudiant avec « on ». Aucune étape sautée (« il est évident », « de même » interdits).
Unités et application numérique séparées. Revérifier chaque résultat numérique (Python). Pas d'emoji dans les corrections.
Graphes SVG : textes ≥ 19-20 dans un viewBox d'environ 760 de large, titres 22, étiquettes hors des courbes, pas de MathJax dans un SVG.
HTML : écrire `&lt;` pour tout « < » suivi d'une lettre, y compris dans les formules.

## Dossier `inbox/`
Les nouveaux documents Moodle de maths, physique et SI (2e année) y arrivent automatiquement chaque jour.
Traiter chaque fichier avec la démarche ci-dessus, puis le retirer d'`inbox/` (il est rangé dans `documents/`).
Si `inbox/` est vide (hors `README.md`), ne rien faire d'autre et s'arrêter tout de suite.
Ignorer les doublons d'un document déjà présent dans `documents/` et les fichiers hors sujet (anglais, informatique, projet…).
