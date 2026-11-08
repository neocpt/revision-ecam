# Refonte « par étapes » — SII 1re année (`sii/c01` à `sii/c14`)

Modèles imités : `#td6-ex6` (`aem2-electronique/ch6-electronique-numerique.html`) et `#ex5` (`aem2-electronique/ch1-filtres-passifs.html`).

Zone réécrite sur chaque page : sections `#app` (si présente), `#exos` et `#td`. Le reste (`#memo`, `#cours`, `#docs`) n'est pas touché.

Conventions retenues :
- Cartes du TD sans énoncé dans le corps : la question est reprise en `<p class="q">` en tête du `.exo-body` (rien d'autre avant), pour que le mode examen masque bien toute la réponse.
- Résultats numériques recalculés en Python avant réécriture.
- **Règle Bigeard (consigne prioritaire)** : avant chaque exercice, on cherche son titre dans les dossiers `documents/si-bigeard/<thème>_<titre>/` et on ouvre le `…-prof.pdf`. S'il traite **le même exercice** (mêmes questions), on reprend ses résultats et sa méthode et on signale ses erreurs en `.warnbox`. Si le dossier porte le même système mais un sujet différent (autre problématique, autres questions), on ne l'utilise pas et on le note. Sans corrigé Bigeard : correction actuelle conservée, résultats revérifiés.
- Index texte de tous les `-prof.pdf` (192) fait avec `pdftotext` pour chercher les noms de systèmes.

## État des pages

| Page | État | Remarques |
|---|---|---|
| c01-sysml | fait | Chapitre sans calcul. Q du TD ajoutées en `.q` en tête de carte ; flexibilités recalculées (+20 %, +50 %) : justes. |
| c02-systeme-asservi | fait | 6 exercices du TD + 2 créés ; tous les résultats revérifiés, justes. |
| c03-cinematique | fait | 3 créés + 6 ex. du TD. Coquille du corrigé officiel (EPAS Q4) signalée. Aucun corrigé Bigeard applicable. |
| c04-transmetteurs | fait | 2 créés + 5 cartes du TD. Bigeard utilisé pour Prius (Q11) et différentiel (Q4, Q7-Q10). Q2 du différentiel ajoutée (manquait). |
| c05-dessin-technique | fait | Pas de TD ni de section `#app` : les 8 exercices créés (`#exos`) sont réécrits. Énoncés regroupés en `.enonce`, une `.q` par item. |
| c06-slci | à faire | |
| c07-performances | à faire | |
| c08-statique | à faire | |
| c09-statique-transmetteurs | à faire | |
| c10-liaisons | à faire | |
| c11-transmetteurs-non-lineaires | à faire | |
| c12-bode | à faire | |
| c13-actions-internes | à faire | |
| c14-resistances-actions-locales | à faire | |

## Journal

- **c01** : 2 exercices créés + 11 questions du TD. Rappels ajoutés (critère/niveau/flexibilité, uc/req/bdd/ibd, frontière d'étude, natures de puissance). Aucune erreur trouvée. Valeur « 0,5 dB » du corrigé officiel conservée telle quelle.

### PDF Bigeard utilisés, par exercice

| Page | Exercice | PDF Bigeard | Décision |
|---|---|---|---|
| c01 | Ex A, Ex B (créés) | aucun | correction actuelle |
| c01 | Ex 1.1 Segway (SysML) | `cinematique-du-solide_vehicule-auto-balance-de-type-segway/` : pas de `-prof.pdf`, et sujet de cinématique | non utilisé |
| c01 | Ex 1.2 Appontage Charles de Gaulle (SysML) | `principe-fondamental-de-la-dynamique_appontage-sur-le-charles-de-gaulle/PFD-PT-TD-appontage_sur_le_charles_de_gaulle-prof.pdf` | non utilisé : sujet de dynamique (PFD), aucune des questions SysML du TD ECAM |
| c01 | (cours SysML) | `analyse-et-modelisation-des-systemes_les-diagrammes-sysml/` : pas de `-prof.pdf` | — |
| c02 | Ex A, Ex B (créés) | aucun | correction actuelle |
| c02 | Ex 1.1 Prothèse transtibiale, 1.3 Clipflow, 2.1 Axe de machine-outil, 2.2 Ramses, 2.3 Four | aucun dossier correspondant | correction actuelle, revérifiée |
| c02 | Ex 1.2 Sécateur Pellenc (chaînes fonctionnelles) | `transmission-de-puissance_secateur-pellenc/TDP-MPSI-TD-secateur_pellenc-prof.pdf` | non utilisé : sujet différent (dimensionnement du train épicycloïdal) |
| c03 | Ex A, B, C (créés) | aucun | correction actuelle |
| c03 | Ex 1.2 ERICC 3, 2.1 EPAS, 2.3 Robot de manutention, 3.2 Savons, 3.3 Peinture | aucun dossier correspondant | correction actuelle, revérifiée avec le corrigé LECONTE |
| c03 | Ex 3.1 Centrifugeuse (a = 3 m, b = 1 m, 9 g) | `cinematique-du-solide_acceleration-dans-une-centrifugeuse-humaine/…-prof.pdf` | non utilisé : autre sujet (3 rotations lacet/roulis/tangage, R = 7,62 m, condition de colinéarité) |
| c04 | Ex A, Ex B (créés), Ex 1.1, 1.4, Méthode Willis 2.1 | aucun dossier correspondant | correction actuelle, revérifiée |
| c04 | Ex 2.6 Prius (CVT) | `transmission-de-puissance_prius-vehicule-hybride/TDP-PT-TD-prius_vehicule_hybride-prof.pdf` | même train (30/23/78) mais autres questions : convention de raison de Bigeard (Q11, λ' = −30/78 = 1/λ) ajoutée en encadré ; Q4-Q5 ECAM non traitées par Bigeard |
| c04 | Ex 2.4 Différentiel | `transmission-de-puissance_etude-dun-differentiel-automobile/TDP-PT-TD-etude_d_un_differentiel_automobile-prof.pdf` | utilisé pour la méthode de Q2 (RSG des roues en virage, Q4/Q8 de Bigeard), λ = −1 (Q7) et le piège roue qui patine (Q9-Q10) |
| c05 | Ex A à H (créés) | aucun : `representation-graphique-du-reel_dessin-2d-niveau-*` n'ont pas de `-prof.pdf` (et ce sont des exercices de tracé) | correction actuelle |

- **c01 revu avec la règle Bigeard** : aucun corrigé Bigeard ne traite ces questions (voir tableau) ; page inchangée.
- **c02** : TD 1 (3 ex.) + TD 2 (3 ex.) + 2 créés. Recalculs : \(D_1\%=3/19=15{,}8\%\), \(e_r\%=10/40=25\%\), \(D_1\%=9/50=18\%\), \(\eta=0{,}83\) : justes. Ajout de pièges (division par \(\Delta s\) et non par \(s(\infty)\), unités incompatibles du four). Aucun corrigé Bigeard applicable.
- **c03** : vitesses/accélérations rederivées à la main (Bour, Varignon, composition) ; \(\dot\alpha=\sqrt{9g/a}=5{,}42\) rad/s = 51,8 tr/min (Python) : juste. EPAS Q4 : le corrigé officiel écrit « X et Y constants, Z variable » alors qu'il impose X = L et Z = 0 → `.warnbox` « Coquille du corrigé officiel » (Y vertical est la grandeur variable). Expression tronquée « dy1/dt = α̇ z1… » de l'ancienne version (savons) réécrite proprement.
- **c04** : recalculs Python : 744/4108 = 0,181 (1/5,52) ; a12 = 62,25 mm ; m2 = 124,5/103 = 1,21 mm ; p/(4π) = 0,796 mm/rad ; ωg = 1270 tr/min : justes. Ex A : l'ancienne version donnait un signe au rapport roue-vis (axes orthogonaux) → `.warnbox` Piège. Différentiel : Q2 de l'énoncé n'avait pas de réponse, ajoutée d'après Bigeard.
- **c05** : formats A et surface A4 recalculés (√2, 62 370 mm²) : justes. Les affirmations (Ex D), situations (Ex E) et questions (Ex C, F) qui étaient mêlées aux réponses sont passées dans un `.enonce` en tête. Petite précision : en coupe, pas de trait interrompu dans une zone hachurée ; « arbre plein coupé suivant son axe » au lieu de « axe qui traverse un alésage ».
