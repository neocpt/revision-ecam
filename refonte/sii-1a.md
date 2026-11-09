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
| c06-slci | fait | 2 créés + 5 ex. du TD ; tout revérifié (simulation de l'indicielle PTZ). Aucun corrigé Bigeard applicable. |
| c07-performances | fait | 2 créés + 3 cartes du TD. **Erreur corrigée** : RAMSES n'est pas insensible au débit sortant. Q2, Q5, Q6 de RAMSES ajoutées. |
| c08-statique | fait | 2 créés + 3 ex. du TD. **2 erreurs corrigées** (signe du couple Ex A, moment de liaison du lève-malade). Torseurs de liaison complets ajoutés (SPRAT, lève-malade, console). |
| c09-statique-transmetteurs | fait | 2 créés + 2 ex. du TD ; tous les résultats justes. Aucun corrigé Bigeard applicable. |
| c10-liaisons | fait | 2 créés + 4 cartes du TD. Bigeard utilisé (guidage en rotation, pompe hydraulique). **2 erreurs corrigées** (biellette = sphère-plan, pas sphère-cylindre). |
| c11-transmetteurs-non-lineaires | fait | Section `#app` (bielle-manivelle A1-A3 + vitesse) + 5 exercices créés. Graphe SVG redessiné (textes 20/22, viewBox 760). Résultats justes. |
| c12-bode | fait | 2 créés + 4 ex. du TD. Corrigé officiel ECAM (TDcorr) utilisé pour 2.1 et A320. **1 erreur corrigée** (F3 : 2e ordre, pas « inverse »). |
| c13-actions-internes | fait | Section `#app` (vérin A1-A2, pieuvre A3) + 6 exercices créés. 2 graphes SVG redessinés (textes 20/22). Résultats justes. |
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
| c06 | Ex A, B (créés), 1.1, 1.2 Four, 1.3 RAMSES, 2.1 Hémodialyse, 3.1 Caméra PTZ | aucun dossier correspondant (`analyse-et-modelisation-des-systemes_camera-speedcam` = autre caméra, sujet SysML/chaîne) | correction actuelle, revérifiée |
| c07 | Ex A, B (créés), réduction de schéma-bloc, 2.4 MCC, 2.1 RAMSES | aucun dossier correspondant | correction actuelle, revérifiée (RAMSES refait) |
| c08 | Ex A, B (créés), 1.1 SPRAT, 1.2 Lève-malade, 1.3 Console de bateau | aucun dossier correspondant | correction actuelle, revérifiée avec l'énoncé ECAM |
| c09 | Ex A, B (créés), 1.1 EPAS, 1.2 Grue de chantier | aucun dossier correspondant (`transmission-de-puissance_joint-de-oldham-du-maxpid` traite l'Oldham, pas le vis-écrou ; `camion-grue`, `moteur-de-levage-dune-grue` = autres sujets) | correction actuelle, revérifiée |
| c10 | Ex A, B (créés), 1.4 Liaisons équivalentes, 2.4 Biellette | aucun corrigé Bigeard de ces questions (`mecanisme-dinclinaison-des-pales-dun-helicoptere` ne traite pas la biellette ; `liaisons-equivalentes_liaisons-equivalentes*` = autres cas) | correction refaite (erreur corrigée) |
| c10 | Ex 2.2 Guidage en rotation | `liaisons-equivalentes_guidage-en-rotation/LEQ-MPSI-TD-guidage_en_rotation-prof.pdf` | utilisé : même exercice (même texte) ; méthode « 4 arrêts → sphérique, 2 arrêts → sphère-cylindre » et égalisation des torseurs par Varignon ; lettres A/B inversées chez Bigeard (dessin différent) → `.warnbox` |
| c10 | Ex 2.3 Pompe hydraulique (Hydro-Leduc) | `liaisons-equivalentes_pompe-hydraulique/LEQ-MPSI-TD-pompe_hydraulique-prof.pdf` | utilisé : appui-plan + sphérique en série → sphère-plan de normale y (Q4 Bigeard) ; rôle des plots/patins (Q6 Bigeard) |
| c11 | Application bielle-manivelle (CM), Ex A à E (créés) | aucun corrigé Bigeard de ces questions (`transmission-de-puissance_joint-de-cardan-de-la-dae` : autre cardan, autres données) | correction actuelle, revérifiée |
| c12 | Ex A, B (créés), 1.2, 1.3, 2.1, 3.1 A320 | aucun corrigé Bigeard de ces fonctions (`analyse-harmonique-des-slci_diagrammes-de-bode-trace-et-identification-de-ft-td` = autres fonctions) ; corrigé ECAM `S2I-C12-TDcorr` consulté pour F1, F3 et l'A320 | correction actuelle, revérifiée |
| c13 | Applications 1 et 2 (CM), Ex A à F (créés) | aucun corrigé Bigeard de ces questions (`modelisation-des-actions-mecaniques_*`, `principe-fondamental-de-la-statique_*` : autres systèmes) | correction actuelle, revérifiée |

- **c01 revu avec la règle Bigeard** : aucun corrigé Bigeard ne traite ces questions (voir tableau) ; page inchangée.
- **c02** : TD 1 (3 ex.) + TD 2 (3 ex.) + 2 créés. Recalculs : \(D_1\%=3/19=15{,}8\%\), \(e_r\%=10/40=25\%\), \(D_1\%=9/50=18\%\), \(\eta=0{,}83\) : justes. Ajout de pièges (division par \(\Delta s\) et non par \(s(\infty)\), unités incompatibles du four). Aucun corrigé Bigeard applicable.
- **c03** : vitesses/accélérations rederivées à la main (Bour, Varignon, composition) ; \(\dot\alpha=\sqrt{9g/a}=5{,}42\) rad/s = 51,8 tr/min (Python) : juste. EPAS Q4 : le corrigé officiel écrit « X et Y constants, Z variable » alors qu'il impose X = L et Z = 0 → `.warnbox` « Coquille du corrigé officiel » (Y vertical est la grandeur variable). Expression tronquée « dy1/dt = α̇ z1… » de l'ancienne version (savons) réécrite proprement.
- **c04** : recalculs Python : 744/4108 = 0,181 (1/5,52) ; a12 = 62,25 mm ; m2 = 124,5/103 = 1,21 mm ; p/(4π) = 0,796 mm/rad ; ωg = 1270 tr/min : justes. Ex A : l'ancienne version donnait un signe au rapport roue-vis (axes orthogonaux) → `.warnbox` Piège. Différentiel : Q2 de l'énoncé n'avait pas de réponse, ajoutée d'après Bigeard.
- **c05** : formats A et surface A4 recalculés (√2, 62 370 mm²) : justes. Les affirmations (Ex D), situations (Ex E) et questions (Ex C, F) qui étaient mêlées aux réponses sont passées dans un `.enonce` en tête. Petite précision : en coupe, pas de trait interrompu dans une zone hachurée ; « arbre plein coupé suivant son axe » au lieu de « axe qui traverse un alésage ».
- **c06** : recalculs Python : ω0 = 16,90 rad/s, z = 0,507, ωa = 14,57 rad/s, Ta = 0,431 s, D1 = 15,7 %, D2 = 2,5 %, D3 = 0,39 %, tr5% simulé = 0,313 s (abaque 5,3/ω0 = 0,31 s) : justes. Ex 1.1-D : « instable (classe ≠ 0) » reformulé en « non stable (pôle nul) ». **Hors périmètre, non corrigé** : la fiche mémo (`#memo`, lignes ~45-50) contient `0<z<1` et `\(<0\)` bruts ; le navigateur lit `<z` comme une balise et casse l'affichage de la fiche (à remplacer par `&lt;`).
- **c07** : recalculs Python MCC (29,6 / 9,4 / −20,2 rad/s) et forme canonique du schéma-bloc (16 qui se simplifie) : justes. **RAMSES (Ex 2.1)** : l'ancienne version affirmait Δh(∞) = 0 pour un échelon de débit sortant ; faux, car le dérivateur du correcteur annule l'intégration de la vanne et il n'y a plus d'intégrateur en amont de q_s. Refait : F1 = aG/(aG + Sp + Sτp²) (précis en poursuite), F2 = −(1+τp)/(aG + Sp + Sτp²), erreur de régulation q0/(aG) → `.warnbox` « Correction d'une erreur de l'ancienne version ». Hypothèses explicitées : limnimètre de même gain a que le potentiomètre, chaîne régulateur-moteur-réducteur-vanne de C06 Ex 1.3.
- **c08** : Ex A : l'ancienne version donnait C = −a·mg·cos α (signe du moment du poids faux, x1∧y0 = cos α z mais la force est −mg y0) → C = +a·mg·cos α, `.warnbox` « Correction d'une erreur ». Lève-malade Q5 : l'ancienne version oubliait le moment du vérin (OA = −b x0 + c y0) → N01 = (a+b)mg + bk(y−y0), `.warnbox`. SPRAT : torseur complet X01 = −F sin α, Y01 = mg + F cos α ; AN F = 1,16 MN, R = 1,42 MN (Python) : justes. Console : C01 = 90 kN·m juste ; L01 = −60 kN·m, M01 = −235 kN·m, Y01 = 15 kN, Z01 = 39,2 kN ajoutés (Q4 demande aussi la liaison).
- **c09** : recalculs Python : 0,113 N·m, 177 N, 0,0707 N·m, 4,42 N·m, 3,31 N·m, 104,2 N·m, 2452 N·m, 3562 N·m : justes. Énoncé ajouté à l'Ex A (les données étaient dans les questions).
- **c10** : 1.4 (sphérique + sphérique en série) et 2.4 (biellette) : l'ancienne version donnait « sphère-cylindre de direction AB » ; le calcul par Varignon donne v selon AB nulle et les deux autres libres → **sphère-plan de normale (AB)**, `.warnbox` « Correction d'une erreur ». Pompe Q3 : l'ancienne réponse (« appui-plan en série avec les liaisons du piston ») ne donnait pas l'équivalent ; remplacée par la sphère-plan de Bigeard. Guidage : modèle A sphérique / B sphère-cylindre vérifié sur la figure de l'énoncé ECAM (arrêts axiaux de chaque bague).
- **c11** : recalculs Python : √38125 = 195,26 ; x = 220,26 mm ; β = 12,50° ; f' = −48,85 mm/rad ; ẋ = −511 mm/s ; F = 409,5 N et 368,5 N ; |f'|max = 51,54 mm/rad ; cardan 2819 / 3193 tr/min ; came 50,3 mm/s : justes. Le graphe x(α), f'(α) (police 11-13 dans un viewBox 640) a été régénéré en Python : viewBox 760 × 760, textes 20, titres 22, étiquettes hors des courbes. Ex E : situations passées dans un `.enonce`, une `.q` par cas.
- **c12** : recalculs Python : ωc(F1) = 14,85 rad/s, ωr = 9,35, Q = 2,07 (6,3 dB), ωr(Ex B) = 90,6, Q = 1,75 (4,9 dB), φ(1000) réel = −84,4° : justes. Erreur : F3 de 2.1 décrit comme « inverse d'un 2e ordre » alors que le trinôme est au dénominateur (corrigé officiel) → `.warnbox`. Ajouts : bande passante de F1 (Q2 du corrigé officiel), phase exacte de 1.2-4. A320 : pas de valeur numérique lisible sans les figures, réponses qualitatives conservées.
- **c13** : recalculs Python : tableau bielle-manivelle (30,5 / 48,8 / 50,0 / 37,8 N·m), max 1,031 à 76,7°, F piston 1178 N, Fp = 784,8 N, p1 = 2,52 et 3,42 bar, hélicoïdale 0,637 N·m : justes. Signe de C = −aF sin(α+β)/cos β vérifié par la puissance. Les deux SVG (viewBox 640, polices 11-15) sont refaits en Python (viewBox 760, textes 20/22). Ex A, B, F : énoncés regroupés en `.enonce`, une `.q` par cas ; ajout du rappel « DDL + inconnues statiques = 6 ».
