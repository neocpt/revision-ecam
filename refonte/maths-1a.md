# Refonte « par étapes » — Maths 1A (M01 + M02)

Session chargée de réécrire toutes les corrections (exercices créés `#exos` et correction de TD `#td`) des 22 pages de `maths/` au format « par étapes » (modèles : `aem2-electronique/ch6-electronique-numerique.html#td6-ex6` et `aem2-electronique/ch1-filtres-passifs.html#ex5`).

Format appliqué : `.q` « n) titre » → `.etape` « Étape k : … » → `<p>` courts, un calcul par `\[ … \]`, `.rappel` avant chaque théorème/formule, cas en `<ul><li>`, `.res` final, `.warnbox` « Piège ». Énoncé (`figure` / `.enonce`) en tête de `.exo-body`, jamais dans la réponse.

Conventions retenues :
- Exercice à question unique : un seul `.q` « 1) … » pour que le mode examen masque la réponse.
- Exercice de TD sans énoncé : l'énoncé de chaque question reste dans le `.q` (titre) ; on ajoute un `.enonce` court quand la consigne générale manquait.
- Tout `<` dans les formules est écrit `&lt;`.
- `<p class="res">` remplacés par `<div class="res">`.

## État des pages

| Page | État | Remarques / erreurs corrigées |
|---|---|---|
| logique-raisonnement | fait | 3 créés + 16 TD. Aucune erreur de résultat. Ajout de `.q` « 1) » pour Ex 10, 11, 13 et exos créés ; Ex 8 restructuré en 2 questions (ou inclusif / exclusif) ; pièges ajoutés (ordre des quantificateurs, synthèse, initialisation au rang 4). |
| theorie-ensembles | fait | 3 créés + 16 TD. Aucune erreur de résultat. Ex 9 et 11 : les `.q` contenaient le calcul (réponse visible en mode examen), déplacé dans la réponse. Ex 8 d) : preuve directe par l'absurde (plus d'appel à l'associativité de Δ). Ex 11 e) : vraie preuve de l'égalité des deux définitions. Ex 11 f) : preuve par « nombre impair d'ensembles ». Ex 16 : `.q` ajouté. |
| applications | fait | 3 créés + 14 TD. Aucune erreur de résultat. Exo C : le `.q` révélait la formule, remplacé ; Ex 13 c) : branche \(x<-1\) traitée explicitement ; Ex 14 a) : ajout de \(f^{-1}\) explicite (vérifiée). |
| nombres-reels | à faire | |
| sommes-produits | à faire | |
| trigonometrie-fonctions | à faire | |
| suites-reelles | à faire | |
| limites-fonctions | à faire | |
| continuite | à faire | |
| derivabilite | à faire | |
| fonctions-usuelles | à faire | |
| nombres-complexes | à faire | |
| calcul-matriciel | à faire | |
| systemes-determinants | à faire | |
| espaces-vectoriels | à faire | |
| polynomes | à faire | |
| primitives-integrales | à faire | |
| integration-techniques | à faire | |
| integration-riemann | à faire | |
| equations-differentielles | à faire | |
| geometrie-plane | à faire | |
| geometrie-espace | à faire | |
