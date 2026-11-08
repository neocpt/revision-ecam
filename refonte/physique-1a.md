# Refonte « par étapes » — Physique-chimie 1re année

Format de référence : `aem2-electronique/ch6-electronique-numerique.html#td6-ex6` et `aem2-electronique/ch1-filtres-passifs.html#ex5`.
Chaque `.exo-body` : énoncé inchangé en tête, puis `.q` → `.etape` → `.rappel` → formules `\[ \]` → `.res` / `.warnbox`.

## État des pages

| Page | Cartes | État |
|---|---|---|
| cinematique.html | 39 | fait |
| dynamique.html | 46 | fait |
| electro-stationnaire.html | 35 | fait |
| electro-transitoire.html | 18 | fait |
| electro-2nd-ordre.html | 19 | fait |
| filtrage.html | 38 | en cours |
| rsf-resonance-filtrage.html | 11 | à faire |
| acides-bases.html | 29 | à faire |
| oxydoreduction.html | 29 | à faire |
| atomistique.html | 24 | à faire |
| cristallographie.html | 18 | à faire |
| thermodynamique-1.html | 38 | à faire |

## Journal par page

### cinematique.html — fait
- 39 cartes réécrites (3 exercices créés + 36 TD). Les ✏️ des titres des exercices créés sont retirés.
- Énoncés conservés tels quels ; pour Ex 1, Ex 15, Ex 17, Ex 18 et EC 18, le texte qui suivait l'énoncé est devenu des questions numérotées.
- Erreur corrigée : Ex 2, distance sur [0 ; 2] = 5/3 m (calcul intermédiaire faux), donc D ≈ 5,17 m (au lieu de 5,1 m) → warnbox.
- Arrondis repris : Ex 4 (110 km/h : 77,2 m), Ex 8 (v ≈ 225 m/s ≈ 808 km/h), EC 11 (a ≈ 0,49 m/s², θ̈ ≈ −7,9·10⁻³), Ex 16 (130 km/h : 109 m et 145 m).
- Coquilles du corrigé papier signalées et conservées (EC 9, Ex 7, EC 11).
- `t<t_I` brut dans une formule (EC 16) supprimé.

### dynamique.html — fait
- 46 cartes réécrites (3 créés + 43 TD) ; ✏️ retirés des titres.
- Erreur corrigée : EC 4, pour m3 = 40 kg, sin α1 = 1475/800 ≈ 1,84 (et non 2,2) → warnbox ; conclusion inchangée.
- Ajouts : EC 15, valeur numérique L_eq = 1,1 m ; EC 23, Q ≈ 8,86 (au lieu de 8,88, arrondi).
- Cartes sans questions numérotées (EC 13, EC 16, Ex 12 à 16, Ex 18) : questions numérotées ajoutées après l'énoncé.

### electro-stationnaire.html — fait
- 35 cartes réécrites (3 créées + 32 TD, numérotation du fichier TD_Elec_regime_stationnaire.pdf).
- 24 cartes n'avaient pas d'énoncé : énoncé reconstitué à partir du TD (en précisant « schéma du TD » quand le circuit n'est qu'en figure).
- Erreur corrigée : Ex 12, R = 1,5 V / 0,1 A = 15 Ω (et non 150 Ω) → warnbox.
- Ex 7 : signalé que les données de l'énoncé (e = 9 V, I3 = 200 mA) sont incohérentes avec la maille de gauche (11 V) ; on garde les valeurs demandées.
- Ex 10 Q5 : puissance réécrite P = e²/R_eq. Ex 21 : I4 ≈ 19 mA (au lieu de 20) pour x = 0.

### electro-transitoire.html — fait
- 18 cartes réécrites (3 créées + 15 TD) ; énoncés tous présents.
- Erreur corrigée : Ex 11, constante A = −E/R (et non +E/R, sinon i(0+) = 2E/R) ; B et l'instant du maximum recalculés : t_m = (π − arctan(τ1·Ω))/Ω ; vérifié par intégration numérique → warnbox.
- Erreur corrigée : Ex 14, expression du courant (il manquait le facteur C/τ : l'ancienne formule était homogène à une tension) → warnbox.
- Exercice B : 3τ ≈ 1,4 ms (au lieu de 1,3 ms, arrondi).
- Ex 15 (Wien, hors corrigé officiel) : équation re-démontrée pas à pas (RC v'' + 3v' + v/RC = 0), résultats inchangés.

### electro-2nd-ordre.html — fait
- 19 cartes réécrites (3 créées + 16 TD). EC 6 n'avait pas d'énoncé : énoncé reconstitué.
- Erreur corrigée : Ex 9, période idéale T = 2π√(LC) ≈ 0,14 ms (et non 0,25 ms) → warnbox.
- Erreur corrigée : Ex 8, L ≈ 13 mH n'était pas arrondi à 10 mH avant le calcul de C : C ≈ 4 nF (et non 5 nF) ; signalé que le montage est probablement 10 mH / 5 nF et que l'écart vient de la lecture graphique → warnbox.
- Ex 7 : amplitude initiale η/(CΩ) ≈ 2,3 V ajoutée. Ex 10 : pseudo-période ≈ 13 µs ajoutée.
