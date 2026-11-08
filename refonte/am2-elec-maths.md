# Refonte « par étapes » — AM2 électronique + AM2 mathématiques

Session dédiée aux dossiers `aem2-electronique/` et `aem2-mathematiques/`.
Modèles suivis : `aem2-electronique/ch6-electronique-numerique.html#td6-ex6` et `aem2-electronique/ch1-filtres-passifs.html#ex5`.

## État des pages

| Page | État |
|---|---|
| aem2-electronique/ch1-filtres-passifs.html | fait (Q1–Q5 du cours, TP P1.1–P2.2, Ex 1–4 et 6 ; Ex 5 = modèle) |
| aem2-electronique/ch2-filtrage-fourier.html | fait (Q1–Q2 du cours, Ex 1–5) |
| aem2-electronique/ch3-ali-regime-lineaire.html | à faire |
| aem2-electronique/ch4-ali-regime-sature.html | à faire |
| aem2-electronique/ch5-oscillateurs.html | à faire |
| aem2-electronique/ch6-electronique-numerique.html | à faire (td6-ex6 déjà fait) |
| aem2-mathematiques/ch1-analyse-asymptotique.html | à faire |
| aem2-mathematiques/ch2-applications-lineaires.html | à faire |
| aem2-mathematiques/ch3-matrices-applications-lineaires.html | à faire |
| aem2-mathematiques/ch4-courbes-parametrees.html | à faire |
| aem2-mathematiques/methodes-par-exercice.html | à faire |

## Choix de mise en forme

- Les blocs « Le montage » placés avant la première question sont passés en `.enonce` (ils décrivent l'énoncé et doivent rester visibles en mode examen).
- Graphes SVG des corrections retracés avec un petit générateur Python (viewBox 760, textes 20, titres 22, étiquettes hors des courbes), valeurs recalculées.
- Cartes à une seule question : un seul `.q` (sans numéro) suivi des étapes.

- Les cartes dont l'énoncé n'était que dans le titre (`.exo-head`) reçoivent un court `.enonce` en tête de `.exo-body`, pour que le mode examen ne masque que la réponse.

## Erreurs corrigées

- Ch1 élec, Ex 2 Q3 : formule de phase \(\varphi = 90^\circ - \arg(\dots)\) fausse (donnait 0° en x = 1) ; remplacée par \(180^\circ - \arg(1 - x^2 + jx/Q)\). Tableau inchangé (il était juste).
- Ch1 élec, Ex 2 : le Bode de phase tracé plafonnait à +90° en BF (il doit partir de +180°) ; retracé.
- Ch1 élec, Ex 6 : le schéma dessinait C en dérivation entre R₂ et R₁ ; redessiné en série (R₂, R₁, C), s aux bornes de R₁ et C.

## Points incertains
