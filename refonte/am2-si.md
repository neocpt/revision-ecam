# Refonte « par étapes » — AM2 SI

Format : modèles `aem2-electronique/ch6-electronique-numerique.html#td6-ex6` et `aem2-electronique/ch1-filtres-passifs.html#ex5`.
Chaque exercice : `.exo-card#id` > `.exo-head` + `.exo-body` (énoncé en tête, puis `p.q`, `p.etape`, `.rappel`, `.res`, `.warnbox`).

## État des pages

| Page | État | Source des résultats |
|---|---|---|
| `aem2-si/ch4-cotations-gps.html` | fait | pas de TD ni de corrigé : 3 exercices créés, correction rédigée par nous |
| `aem2-si/c02-theorie-mecanismes.html` | fait | Bigeard : `theorie-des-mecanismes_association-de-liaisons/TDM-PT-TD-association_de_liaisons-prof.pdf`, `theorie-des-mecanismes_pompe-a-piston-radial/TDM-PT-TD-pompe_a_piston_radial-prof.pdf` |
| `aem2-si/c03-dynamique-solide.html` | à faire | |
| `aem2-si/c04-energetique-solide.html` | à faire | |
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
