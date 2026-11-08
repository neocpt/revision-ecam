# Refonte « par étapes » — AM2 SI

Format : modèles `aem2-electronique/ch6-electronique-numerique.html#td6-ex6` et `aem2-electronique/ch1-filtres-passifs.html#ex5`.
Chaque exercice : `.exo-card#id` > `.exo-head` + `.exo-body` (énoncé en tête, puis `p.q`, `p.etape`, `.rappel`, `.res`, `.warnbox`).

## État des pages

| Page | État | Source des résultats |
|---|---|---|
| `aem2-si/ch4-cotations-gps.html` | fait | pas de TD ni de corrigé : 3 exercices créés, correction rédigée par nous |
| `aem2-si/c02-theorie-mecanismes.html` | fait | Bigeard : `theorie-des-mecanismes_association-de-liaisons/TDM-PT-TD-association_de_liaisons-prof.pdf`, `theorie-des-mecanismes_pompe-a-piston-radial/TDM-PT-TD-pompe_a_piston_radial-prof.pdf` |
| `aem2-si/c03-dynamique-solide.html` | fait | Bigeard (5 PDF `principe-fondamental-de-la-dynamique_*`), éolienne rédigée par nous |
| `aem2-si/c04-energetique-solide.html` | fait | Bigeard (4 PDF `energetique_*`) pour 1.1 à 4.1 ; 4.2, 5.1, 5.2 rédigés par nous |
| `aem2-si/c05-capteurs.html` | à faire | |

## Journal

### ch4-cotations-gps
- Exercices A, B, C réécrits par étapes, ids `exo-a`, `exo-b`, `exo-c` ajoutés. Énoncé en `.enonce` (texte) en tête.
- Recalculs : J_min = 9 µm, J_max = 45 µm ; écart maxi 0,04 mm ; θ_max = arctan(0,002) = 0,1146° = 6,88'.
- Ajout d'une vérification J_max − J_min = IT_alésage + IT_arbre = 36 µm. Aucune erreur trouvée.
- PDF utilisé : aucun. Recherche dans `documents/si-bigeard/` : seuls `specification-et-controle-des-produits_*` existent (caisson Airbus, mémento GPS), sans exercice correspondant. Mention « Correction rédigée par nous, pas de corrigé Bigeard » ajoutée dans la page.

### c02-theorie-mecanismes
- Seule la Partie 2 (TD) est réécrite ; cours, fiches mémo et « Documents donnés » intacts. Ids de sections `td`, `td-1`, `td-2` gardés.
- Exercices → PDF :
  - 1.1 Articulation, 1.2 Double guidage, 1.3 Goupille v1/v2/conclusion, 1.4 Manchon (réalisations 1 et 2, Q26) → `TDM-PT-TD-association_de_liaisons-prof.pdf`.
  - 2 Pompe à piston radial (Q1–Q11) → `TDM-PT-TD-pompe_a_piston_radial-prof.pdf`.
- Une carte par image d'énoncé (13 cartes) pour que l'énoncé reste en tête et jamais dans une réponse. Ordre du TD respecté (2.3 avant 2.4, l'ancienne page les inversait).
- Tous les h recalculés par rang de la matrice de fermeture (Python) : 1.2 → 3 ; 1.3 v1 → 2 ; v2 → 1 ; 1.4 → 5 ; r1 → 3 ; r2 → 1 ; combinaison r1+r2 → 0 ; pompe → 1 ; pompe avec ponctuelle → 0.
- Erreurs du corrigé signalées en `.warnbox` :
  - Q14 : torseur du pivot glissant équivalent écrit avec ω_y, V_x au lieu de ω_z, V_z.
  - Q16 : L/D = 10/80 au lieu de 10/20 = 0,5.
  - Q20 : « glissière » au lieu de pivot glissant ; M32 au lieu de M_O.
  - Q25 : I_c = 2×1 + 1×4 écrit « = 4 » (vaut 6, ce qui donne bien h = 1) ; liaison nommée Sph./Cyl. alors que c'est une linéaire rectiligne (normale x, direction z).
  - Pompe Q8 : signes mélangés (T2→1 utilisé comme action sur 2 ; N = −eF_P cos α dans le tableau contre +eF_P cos α dans l'équation 18). Résultats utiles inchangés.
- Ajouts rédigés par nous (indiqués dans la page) : Q2 cas rotule + sphère-cylindre (γ = 2) ; Q26 vérification h = 0 ; remarque 1.2 (PG + ponctuelle → h = 0) ; Q10 vérification h = 0.

### c03-dynamique-solide
- Seule la Partie 2 (TD) est réécrite (le bandeau « TD corrigé » en double et l'ancien chapeau sont remplacés). Cours intact, y compris les deux cartes « cas particuliers » du cours (sans id, hors TD).
- Exercices → PDF (dans `documents/si-bigeard/`) :
  - 1.1 à 1.5 Matrices d'inertie → `principe-fondamental-de-la-dynamique_calcul-de-matrices-dinertie/PFD-PT-TD-calcul_de_matrices_d_inertie-prof.pdf`
  - 2 Lecteur de DVD → `principe-fondamental-de-la-dynamique_lecteur-de-dvd/PFD-PT-TD-lecteur_de_dvd-prof.pdf`
  - 3 Arbre de navire → `principe-fondamental-de-la-dynamique_arbre-de-navire-phenomenes-gyroscopiques/PFD-PT-TD-arbre_de_navire_phenomenes_gyroscopiques-prof.pdf`
  - 4 Éolienne bipale → aucun (le dossier `analyse-des-slci_eolienne` est un TD d'asservissement ; `cinematique-du-solide_aerogenerateur` n'a pas de -prof et traite autre chose). Correction rédigée par nous, mention dans la page.
  - 5 Régulateur centrifuge → `principe-fondamental-de-la-dynamique_regulateur-centrifuge/PFD-PT-TD-regulateur_centrifuge-prof.pdf`
  - 6 Équilibreuse → `principe-fondamental-de-la-dynamique_equilibreuse/PFD-PT-TD-equilibreuse-prof.pdf`
- Une carte par exercice (5 cartes pour l'exercice 1) ; toutes les images d'énoncé en tête (l'image du DVD « question 1 » était seule sur sa page, les questions 2 à 11 sont dans l'image suivante).
- Vérifications Python / sympy : σ et δ·z1 du régulateur, σ_K et δ_K·z de l'éolienne, σ_K du balourd, Huygens du quart de disque, toutes les AN.
- Erreurs du corrigé signalées :
  - Matrices : m_c = 2πρhr² (coquille) ; cas 2 B = 302,6 et C = 386,58 alors que ses formules donnent 302,9 et 386,9.
  - DVD : « t = 12,5 s » au lieu de ms ; 1,67 N·mm ≈ 17 g·cm (16,7 avec g ≈ 10).
  - Arbre de navire : **résultat faux** — A = ma²/2 dans le calcul littéral alors que a est un rayon de giration (A = ma² = 180 kg·m², valeur qu'il écrit lui-même). Corrigé : Z_A ≈ 14 337 N, Z_B ≈ 5 283 N (au lieu de 13 706,7 et 5 913).
  - Régulateur : V_{G∈3/0} au lieu de V_{G∈2/0}.
  - Équilibreuse : σ_B noté au lieu de δ_B ; « F = 1,5e-3 » est E ; **équation (10) fausse** (F + m4 cr cos β4) → F − m4 cr sin β4 = 0 ; β4 ≈ 217°, β3 ≈ 116° (216°/115° avec E, F arrondis).
- Ancienne page : la masse de l'hélice (M dans l'énoncé) était notée m ; le doute sur les signes du quart de disque est levé (résultat Bigeard exact) ; l'ancienne forme « F + m4 cr sin β4 » était fausse.

### c04-energetique-solide
- Partie 2 (TD) réécrite ; sections `td-1` (gardée) à `td-5` ; une carte par exercice (10 cartes).
- Exercices → PDF (dans `documents/si-bigeard/`) :
  - 1.1 Cylindre, 1.2 Toupie → `energetique_calcul-denergie-cinetique/ENE-PT-TD-calcul_d_energie_cinetique-prof.pdf`
  - 2.1 Réducteur, 2.2 Translation → `energetique_calcul-dinertie-equivalente/ENE-PT-TD-calcul_d_inertie_equivalente-prof.pdf`
  - 3.1 Solides en contact, 3.2 Pivot glissant → `energetique_calcul-de-puissance/ENE-PT-TD-calcul_de_puissance-prof.pdf`
  - 4.1 Cylindre TEC + PFD → `energetique_application-du-theoreme-de-lenergie-cinetique/ENE-PT-TD-application_du_theoreme_de_l_energie_cinetique-prof.pdf`
  - 4.2 Pendule double, 5.1 Duo Voyageur Concept, 5.2 Embrayage assisté → aucun PDF (recherche par titre et plein texte dans tous les PDF : rien ; `modelisation-des-actions-mecaniques_embrayage` est un autre exercice). Rédigés par nous, mention dans la page.
- Aucune erreur de résultat dans les corrigés Bigeard ; précisions : toupie, Ω est exprimé dans (u, w, z1) et non (x1, y1, z1) (l'ancienne page le disait) ; 4.1 ajout f = tan α / 3.
- **Erreur de l'ancienne page corrigée** (5.1 Duo) : la puissance moteur vaut C·ω_m = 2C·ω10 ; ω̇10 = 2C/I_eq ≈ 0,296 rad/s² (et non 0,148) ; durée d'accélération ≈ 1,06 s (et non 2,1 s), critère > 1 s respecté de justesse. Expression de I_eq ajoutée.
- 4.2 : ancienne réponse « 1 sur 2 dans le mouvement 1/0 » supprimée (non demandée) ; Q4 répond d'abord à la question posée (non, inconnue de liaison), le TEC sur {1+2} reste en complément.
- 5.2 : conventions d'angle lues sur la figure et explicitées ; le schéma-bloc de la p. 36 du TD (absent des énoncés) a été ajouté en image `img/c04-ex5-2-embrayage-d.png` ; β = (K_R − m_P g r_G cos(θ0 − α_G))/r_T, signes cohérents avec les « + » du schéma-bloc (l'ancienne page avait K_R + … cos α_G).
