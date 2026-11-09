# Refonte « par étapes » — AM2 électronique + AM2 mathématiques

Session dédiée aux dossiers `aem2-electronique/` et `aem2-mathematiques/`.
Modèles suivis : `aem2-electronique/ch6-electronique-numerique.html#td6-ex6` et `aem2-electronique/ch1-filtres-passifs.html#ex5`.

## État des pages

| Page | État |
|---|---|
| aem2-electronique/ch1-filtres-passifs.html | fait (Q1–Q5 du cours, TP P1.1–P2.2, Ex 1–4 et 6 ; Ex 5 = modèle) |
| aem2-electronique/ch2-filtrage-fourier.html | fait (Q1–Q2 du cours, Ex 1–5) |
| aem2-electronique/ch3-ali-regime-lineaire.html | fait (Q1–Q14 du cours, Ex 1–6, graphes retracés) |
| aem2-electronique/ch4-ali-regime-sature.html | fait (Questions 1–4 du cours, exercices créés 1–3, activité Ex 1–3, graphes retracés) |
| aem2-electronique/ch5-oscillateurs.html | fait (TD5 Ex 1–4, TP5a, TP5b, exercices A–C ; graphes : polices relevées et viewBox élargis) |
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
- Ch3 élec : une balise `.res` de l'Ex 2 était fermée par `</p>` (div déséquilibrée) ; corrigé. Deux `<s` bruts dans des formules du cours (`-V_{sat}<s<+V_{sat}`) étaient lus comme une balise de texte barré ; remplacés par `&lt;` (aucun autre changement dans le cours).
- Ch3 élec : schémas du dérivateur (Q12), du pseudo-intégrateur (Ex 2) et du gyrateur (Ex 6) mal reliés ou illisibles ; redessinés. Ex 2 : l'énoncé (image td3-img/ex2.jpg) manquait dans la carte ; ajouté.
- Ch4 élec, exercice créé 2 c) : « α diminue quand V_réf (donc R_var) augmente » était faux pour R_var : V_réf = V_CC·R/(R+R_var) diminue quand R_var augmente, donc α augmente.
- Ch4 élec, Question 4 : la phrase sur l'effet de l'hystérésis sur une sinusoïde (« instants décalés, pas de symétrie ») était vague ; remplacée par : créneau symétrique à 50 %, retardé de t₀ = (T/2π)·arcsin(β′Vsat/Em). Diagrammes entrée-sortie : dates t = 0, T/4… ajoutées comme demandé par l'énoncé.
- Ch5 élec : valeurs recalculées (simulation Python de l'oscillateur de Wien : T = 297 / 569 µs, harmoniques 3 %/1 % puis 35 %/17 %/10 %) ; aucune erreur trouvée. Pour la réponse à l'Ex 2 du TD5, R₄ = 1 kΩ et C = 1 µF sont lus sur l'énoncé.

## Points incertains

- Ch5 élec : les 27 graphes SVG n'ont pas été retracés un par un ; leurs polices ont été relevées (≥ 19 dans un viewBox de 760 là où c'était possible) et leur viewBox élargi pour ne rien rogner. Quelques libellés se chevauchent encore légèrement (ex. « V₂ (triangle) » sur l'axe, Ex 2 du TD5 : « t₁ = 2 »).
