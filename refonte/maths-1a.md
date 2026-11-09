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
| nombres-reels | fait | 3 créés + 15 TD. Aucune erreur de résultat (systèmes Ex 14 et tableau Ex 13 revérifiés). Ex 6, 9, 15 : `.q` ajouté. Ex 12-13 : justification par étapes avant le tableau. Remarque : déséquilibre `<p>` préexistant dans la fiche mémo / le cours (non touchés). |
| sommes-produits | fait | 3 créés + 12 TD, toutes les formules fermées revérifiées (SymPy, n = 1..8) : aucune erreur. Plusieurs `.q` (Ex 4, 7, 8, 10, 11) contenaient le calcul ou le résultat : énoncé seul gardé dans le `.q`. `.enonce` court ajouté (consigne générale) aux exercices de TD qui n'en avaient pas. Ex 6 b) : preuve par regroupement de paires (plus de formule admise). |
| trigonometrie-fonctions | fait | 3 créés + 12 TD. Aucune erreur de résultat (équations Ex 1 et inéquations Ex 2 revérifiées). `.q` qui contenaient la formule ou la valeur (Ex 1 b-c, 3, 4) nettoyés. Ex 9 a) : cas « f impaire, g quelconque » ajouté. `.enonce` court ajouté aux exercices sans énoncé. |
| suites-reelles | fait | 3 créés + 12 TD. Aucune erreur de résultat. Ex 2 et 3 : les `.q` donnaient la limite ou l'équivalent, retirés. Ex 6 b) : majoration de l'écart justifiée. Ex 8 d) : choix de \(n_1\) explicité. Ex 11 : remarque \(u_0=1\) point fixe (suite constante). Ex 12 d) : signe de \(f(x)-x\) démontré (était affirmé sur un exemple). Exo A : valeur numérique \(u_3\) précisée. |
| limites-fonctions | fait | 3 créés + 7 TD (énoncés relus dans le PDF du TD08). **Erreurs corrigées** : Ex 4 k) « à gauche \(+\infty\) » faux (\(\lfloor x+1\rfloor=0\) exactement, expression non définie) ; Ex 4 l) encadrement faux pour \(x<0\) (limite 1 inchangée). Ex 3 a) : contre-exemples clarifiés (limite 4 ou 5 possible). `.q` des Ex 1, 4, 5 nettoyés (ils contenaient le calcul) et point de limite précisé (\(\pm\infty\)). |
| continuite | fait | 3 créés + 9 TD. Aucune erreur de résultat (Ex 4 d : conditions n=0 et n=1 revérifiées). Ex 3 c) : encadrement avec les deux signes de x. Ex 5 a) : bijectivité justifiée. Ex 6 : exemple de non-borné ajouté en note. Ex 7 c) : détail du TVI sur g. `.q` titres sans résultat. |
| derivabilite | fait | 3 créés + 10 TD (énoncés relus dans le PDF TD10). Limites Ex 3 et formules de Leibniz Ex 10 revérifiées (SymPy, n = 1..6) ; rang Ex 9 e) vérifié numériquement (n = 11). Aucune erreur. Ex 3 c-d) : refaits avec L'Hôpital comme demandé par le TD (l'ancienne version utilisait des équivalents). Ex 5 c) : la condition (iii) rédigée avec \(\delta=\beta\). |
| fonctions-usuelles | fait | 3 créés + 6 TD (énoncés relus dans le PDF TD11). Aucune erreur de résultat. Ex 3 e-f) : condition de signe et vérification des solutions ajoutées. Ex 4 b) et d) : dérivées calculées en détail (l'ancienne version les affirmait) ; Ex 4 a) : continuité aux bornes précisée ; Ex 4 d) : valeur en 1 par continuité. Exo B : piège \(x<0\). |
| nombres-complexes | fait | 3 créés + 21 TD (énoncés relus dans le PDF TD12, tous les résultats revérifiés avec SymPy/mpmath). **Erreurs corrigées** : Ex 5 (l'ancienne version lisait \((2\bar z+3)/(iz)\) au lieu de \(2\bar z+3/(iz)\) et concluait « aucune solution » ; la solution est \(z=\sqrt{15}(2-i)/5\)) ; Ex 11 l) module faux \(2^{-2029/2}\), correct \(2^{-4055/2}\). Ex 13 : méthode des racines carrées rappelée ; Ex 15 f) : calcul de \(-i\cot(\alpha/2)\) détaillé ; Ex 19 i) : justification de l'angle droit. |
| calcul-matriciel | fait | 3 créés + 17 TD (énoncés relus dans le PDF du TD). Tous les produits, inverses, puissances revérifiés avec SymPy. **Erreur corrigée** : Ex 4, l'ancienne version utilisait \(A\in M_{2,3}\), \(B\in M_{3,2}\) au lieu des matrices de l'énoncé (\(A\in M_{3,2}\), \(B\in M_{2,3}\)) ; tous les résultats sont recalculés. Exo A : l'énoncé suggère \(A=I+N\), ce qui ne s'applique pas à cette matrice ; la correction l'explique et fait une récurrence. Remarque de forme : \(A\) 2×2 non diagonalisable en \(I+N\). |
| systemes-determinants | à faire | |
| espaces-vectoriels | à faire | |
| polynomes | à faire | |
| primitives-integrales | à faire | |
| integration-techniques | à faire | |
| integration-riemann | à faire | |
| equations-differentielles | à faire | |
| geometrie-plane | à faire | |
| geometrie-espace | à faire | |
