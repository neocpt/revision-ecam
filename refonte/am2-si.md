# Refonte « par étapes » — AM2 SI

Format : modèles `aem2-electronique/ch6-electronique-numerique.html#td6-ex6` et `aem2-electronique/ch1-filtres-passifs.html#ex5`.
Chaque exercice : `.exo-card#id` > `.exo-head` + `.exo-body` (énoncé en tête, puis `p.q`, `p.etape`, `.rappel`, `.res`, `.warnbox`).

## État des pages

| Page | État | Source des résultats |
|---|---|---|
| `aem2-si/ch4-cotations-gps.html` | fait | pas de TD ni de corrigé : 3 exercices créés, correction rédigée par nous |
| `aem2-si/c02-theorie-mecanismes.html` | à faire | Bigeard : association de liaisons, pompe à piston radial |
| `aem2-si/c03-dynamique-solide.html` | à faire | |
| `aem2-si/c04-energetique-solide.html` | à faire | |
| `aem2-si/c05-capteurs.html` | à faire | |

## Journal

### ch4-cotations-gps
- Exercices A, B, C réécrits par étapes, ids `exo-a`, `exo-b`, `exo-c` ajoutés. Énoncé en `.enonce` (texte) en tête.
- Recalculs : J_min = 9 µm, J_max = 45 µm ; écart maxi 0,04 mm ; θ_max = arctan(0,002) = 0,1146° = 6,88'.
- Ajout d'une vérification J_max − J_min = IT_alésage + IT_arbre = 36 µm. Aucune erreur trouvée.
