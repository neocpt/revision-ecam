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
| aem2-electronique/ch6-electronique-numerique.html | fait (Q1–Q10, exercices créés 1–4, TD6 Ex 1–5 ; td6-ex6 inchangé) |
| aem2-mathematiques/ch1-analyse-asymptotique.html | fait (exercices créés A–B, TD Ex 1–15 ; les 2 fiches « Feuille complémentaire » sont de simples catalogues sans énoncé : laissées telles quelles) |
| aem2-mathematiques/ch2-applications-lineaires.html | fait (exercices créés A–B, TD Ex 1–10) |
| aem2-mathematiques/ch3-matrices-applications-lineaires.html | fait (exemples 1–14 du cours, exercices créés A–C, TD Ex 1–13) |
| aem2-mathematiques/ch4-courbes-parametrees.html | fait (exemples 2–7 du cours, TD Ex 1–8 ; graphes : police des figures relevée à 15/14 px dans la feuille de style locale) |
| aem2-mathematiques/methodes-par-exercice.html | laissée telle quelle (voir choix ci-dessous) |

## Choix de mise en forme

- Les blocs « Le montage » placés avant la première question sont passés en `.enonce` (ils décrivent l'énoncé et doivent rester visibles en mode examen).
- Graphes SVG des corrections retracés avec un petit générateur Python (viewBox 760, textes 20, titres 22, étiquettes hors des courbes), valeurs recalculées.
- Cartes à une seule question : un seul `.q` (sans numéro) suivi des étapes.

- Les cartes dont l'énoncé n'était que dans le titre (`.exo-head`) reçoivent un court `.enonce` en tête de `.exo-body`, pour que le mode examen ne masque que la réponse.
- Maths : les rappels généraux placés avant la première question d'une carte sont déplacés juste après elle (le mode examen masque tout ce qui suit un `.q`). Script réutilisable : `fixpre.py` (hors dépôt).

- `methodes-par-exercice.html` : les 63 cartes sont des fiches de méthode (A1–M10) et des index « fiche de chaque exercice » avec renvoi vers la correction détaillée des chapitres ; elles ne contiennent aucune correction par questions. Rien à réécrire ; vérifié que les liens vers `ch1/ch2/ch3…#td` existent toujours.
- Les « Feuilles complémentaires » du Ch1 maths sont des catalogues sans énoncé ni corrigé : non réécrites.

## Erreurs corrigées

- Ch1 élec, Ex 2 Q3 : formule de phase \(\varphi = 90^\circ - \arg(\dots)\) fausse (donnait 0° en x = 1) ; remplacée par \(180^\circ - \arg(1 - x^2 + jx/Q)\). Tableau inchangé (il était juste).
- Ch1 élec, Ex 2 : le Bode de phase tracé plafonnait à +90° en BF (il doit partir de +180°) ; retracé.
- Ch1 élec, Ex 6 : le schéma dessinait C en dérivation entre R₂ et R₁ ; redessiné en série (R₂, R₁, C), s aux bornes de R₁ et C.
- Ch3 élec : une balise `.res` de l'Ex 2 était fermée par `</p>` (div déséquilibrée) ; corrigé. Deux `<s` bruts dans des formules du cours (`-V_{sat}<s<+V_{sat}`) étaient lus comme une balise de texte barré ; remplacés par `&lt;` (aucun autre changement dans le cours).
- Ch3 élec : schémas du dérivateur (Q12), du pseudo-intégrateur (Ex 2) et du gyrateur (Ex 6) mal reliés ou illisibles ; redessinés. Ex 2 : l'énoncé (image td3-img/ex2.jpg) manquait dans la carte ; ajouté.
- Ch4 élec, exercice créé 2 c) : « α diminue quand V_réf (donc R_var) augmente » était faux pour R_var : V_réf = V_CC·R/(R+R_var) diminue quand R_var augmente, donc α augmente.
- Ch4 élec, Question 4 : la phrase sur l'effet de l'hystérésis sur une sinusoïde (« instants décalés, pas de symétrie ») était vague ; remplacée par : créneau symétrique à 50 %, retardé de t₀ = (T/2π)·arcsin(β′Vsat/Em). Diagrammes entrée-sortie : dates t = 0, T/4… ajoutées comme demandé par l'énoncé.
- Ch5 élec : valeurs recalculées (simulation Python de l'oscillateur de Wien : T = 297 / 569 µs, harmoniques 3 %/1 % puis 35 %/17 %/10 %) ; aucune erreur trouvée. Pour la réponse à l'Ex 2 du TD5, R₄ = 1 kΩ et C = 1 µF sont lus sur l'énoncé.
- Ch6 élec : valeurs recalculées à la main (codes binaires 110001 et 10101000, bits nécessaires 15 et 13, tailles 14,4 / 42,3 / 635 Mo, alias du créneau à 1,5 kHz) ; aucune erreur trouvée.
- Ch1 maths : tous les DL, équivalents et limites recalculés avec sympy (seize DL de l'Ex 8, DL en un point, dix limites, asymptotes, suite implicite) ; aucune erreur trouvée.
- Ch2 maths, Ex 1 Q4 : les égalités « \(X^3-7X+6=X(X-1)(X-2)\) » et « \(X^4-15X+14=X^2(X-1)(X-2)\) » étaient fausses (les générateurs étaient bons) ; remplacées par \((X-1)(X-2)(X+3)\) et \((X-1)(X-2)(X^2+3X+7)\), avec un avertissement dans la carte. Autres résultats recalculés à la main : inchangés.
- Ch2 maths, Ex 7 Q2 : fragment de phrase tronqué (« doit vérifier \(2x-y-z\)… ») supprimé.
- Ch3 maths : tous les rangs, noyaux, matrices de passage, changements de base, puissances \(A^n\) et projecteurs/symétries recalculés avec sympy ; aucune erreur trouvée.
- Ch4 maths, Ex 8 (asymptote oblique) : la ligne « \(y-\frac x3=2+\dots\to0\) » oubliait de retrancher le 2 (la conclusion \(y=\frac x3+2\) était juste) ; corrigée avec un avertissement. Tous les autres résultats (points doubles, tangentes, rebroussements, asymptotes) recalculés avec sympy : inchangés.

## Points incertains

- Ch2 maths, Ex 6 : les images de \(e_1,e_2,e_3\) sont lues sur la correction existante (l'image de l'énoncé n'a pas été revérifiée) ; les deux vecteurs \((-1,1,8)\) et \((-2,1,3)\) n'ont alors aucun antécédent.

- Ch6 élec, TD6 Ex 3 : l'absence de raie à 50 Hz sur le spectre 2 imprimé reste inexpliquée (avertissement conservé).

- Ch5 élec : les 27 graphes SVG n'ont pas été retracés un par un ; leurs polices ont été relevées (≥ 19 dans un viewBox de 760 là où c'était possible) et leur viewBox élargi pour ne rien rogner. Quelques libellés se chevauchent encore légèrement (ex. « V₂ (triangle) » sur l'axe, Ex 2 du TD5 : « t₁ = 2 »).

## Résumé final

**Pages réécrites par étapes** (énoncé en tête, étapes, rappels de formule, résultats encadrés) :
- Électronique : Ch1, Ch2, Ch3, Ch4, Ch5, Ch6 (td6-ex6 et Ch1 Ex 5 conservés tels quels).
- Maths : Ch1 (analyse asymptotique), Ch2 (applications linéaires), Ch3 (matrices), Ch4 (courbes paramétrées).

**Erreurs trouvées dans les anciennes corrections** (corrigées, avec avertissement dans la page quand utile) :
- Ch1 élec Ex 2 : formule de phase fausse (90° au lieu de 180°) ; Bode de phase et schéma de l'Ex 6 faux.
- Ch4 élec, exercice créé 2 c) : sens de variation de α avec R_var inversé.
- Ch2 maths Ex 1 Q4 : factorisations fausses sous les accolades ; Ex 7 : phrase tronquée.
- Ch4 maths Ex 8 : constante 2 oubliée dans une ligne de calcul.
- Ch3 élec : balise `.res` mal fermée (div déséquilibrée) et deux « < » bruts dans le cours.

**Points incertains** :
- Ch5 élec : les 27 graphes ne sont pas tous retracés ; polices relevées et viewBox élargis, mais quelques libellés se chevauchent légèrement.
- Ch6 élec TD6 Ex 3 : absence de raie à 50 Hz sur le spectre 2 imprimé, inexpliquée (conservée, signalée).
- Ch2 maths Ex 6 : images de e1, e2, e3 lues sur l'ancienne correction, non revérifiées sur l'énoncé.
- Graphes de l'électronique Ch1–Ch4 : retracés à partir de modèles (valeurs recalculées) ; revérifier visuellement sur le site publié.
- Mode examen : les rappels généraux placés avant la première question sont déplacés après elle (script hors dépôt).
