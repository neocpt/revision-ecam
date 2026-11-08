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
| c03-cinematique | à faire | |
| c04-transmetteurs | à faire | |
| c05-dessin-technique | à faire | |
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

- **c01 revu avec la règle Bigeard** : aucun corrigé Bigeard ne traite ces questions (voir tableau) ; page inchangée.
- **c02** : TD 1 (3 ex.) + TD 2 (3 ex.) + 2 créés. Recalculs : \(D_1\%=3/19=15{,}8\%\), \(e_r\%=10/40=25\%\), \(D_1\%=9/50=18\%\), \(\eta=0{,}83\) : justes. Ajout de pièges (division par \(\Delta s\) et non par \(s(\infty)\), unités incompatibles du four). Aucun corrigé Bigeard applicable.
