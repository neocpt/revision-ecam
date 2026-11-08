/* Catalogue du site : SEUL fichier à modifier pour ajouter un chapitre ou des annales.
   url = chemin depuis la racine du site (ex. "maths/derivabilite.html").
   n = numéro affiché ; l'ordre du tableau = ordre d'affichage. */
window.CATALOGUE = {
  matieres: [
    {
      id: "phys", nom: "Physique-Chimie",
      annees: [
        { id: "1", label: "1re année (ECAM 1)", chapitres: [
          { n: "1", titre: "Cinématique du point", url: "physique-chimie/cinematique.html" },
          { n: "2", titre: "Dynamique du point", url: "physique-chimie/dynamique.html" },
          { n: "3", titre: "Électrocinétique — régime stationnaire", url: "physique-chimie/electro-stationnaire.html" },
          { n: "4", titre: "Électrocinétique — régime transitoire", url: "physique-chimie/electro-transitoire.html" },
          { n: "5", titre: "Électrocinétique — régimes du 2ᵉ ordre", url: "physique-chimie/electro-2nd-ordre.html" },
          { n: "6", titre: "Électrocinétique 2 — filtrage et Bode", url: "physique-chimie/filtrage.html" },
          { n: "6bis", titre: "RSF, résonance et filtrage", url: "physique-chimie/rsf-resonance-filtrage.html" },
          { n: "7", titre: "Chimie — acides et bases", url: "physique-chimie/acides-bases.html" },
          { n: "8", titre: "Chimie — oxydoréduction", url: "physique-chimie/oxydoreduction.html" },
          { n: "9", titre: "Chimie — atomistique", url: "physique-chimie/atomistique.html" },
          { n: "10", titre: "Cristallographie", url: "physique-chimie/cristallographie.html" },
          { n: "11", titre: "Thermodynamique 1", url: "physique-chimie/thermodynamique-1.html" }
        ] },
        { id: "2", label: "2e année (AM2)", chapitres: [
          { n: "Ch1", titre: "Filtres analogiques passifs", url: "aem2-electronique/ch1-filtres-passifs.html" },
          { n: "Ch2", titre: "Filtrage d'un signal périodique et stabilité", url: "aem2-electronique/ch2-filtrage-fourier.html" },
          { n: "Ch3", titre: "ALI en régime linéaire", url: "aem2-electronique/ch3-ali-regime-lineaire.html" },
          { n: "Ch4", titre: "ALI en régime saturé", url: "aem2-electronique/ch4-ali-regime-sature.html" },
          { n: "Ch5", titre: "Oscillateurs auto-entretenus", url: "aem2-electronique/ch5-oscillateurs.html" },
          { n: "Ch6", titre: "Électronique numérique", url: "aem2-electronique/ch6-electronique-numerique.html" }
        ] }
      ],
      annales: [
        { annee: "2026-2027", niveau: "1", docs: 2, url: "annales/2026-2027/am1-physique/index.html" },
        { annee: "2025-2026", niveau: "1", docs: 115, url: "annales/2025-2026/am1-physique/index.html" },
        { annee: "2024-2025", niveau: "1", docs: 30, url: "annales/2024-2025/am1-physique/index.html" },
        { annee: "2023-2024", niveau: "1", docs: 2, url: "annales/2023-2024/am1-physique/index.html" },
        { annee: "2022-2023", niveau: "1", docs: 14, url: "annales/2022-2023/am1-physique/index.html" },
        { annee: "Sans date", niveau: "1", docs: 63, url: "annales/non-date/am1-physique/index.html" },
        { annee: "2026-2027", niveau: "2", docs: 7, url: "annales/2026-2027/am2-physique/index.html" },
        { annee: "2025-2026", niveau: "2", docs: 2, url: "annales/2025-2026/am2-physique/index.html" }
      ]
    },
    {
      id: "math", nom: "Mathématiques",
      annees: [
        { id: "1", label: "1re année (ECAM 1)", chapitres: [
          { n: "M01-1", titre: "Logique et raisonnement", url: "maths/logique-raisonnement.html" },
          { n: "M01-2", titre: "Théorie des ensembles", url: "maths/theorie-ensembles.html" },
          { n: "M01-3", titre: "Applications", url: "maths/applications.html" },
          { n: "M01-4", titre: "Les nombres réels", url: "maths/nombres-reels.html" },
          { n: "M01-5", titre: "Sommes et produits", url: "maths/sommes-produits.html" },
          { n: "M01-6", titre: "Trigonométrie et fonctions", url: "maths/trigonometrie-fonctions.html" },
          { n: "M01-7", titre: "Les suites réelles", url: "maths/suites-reelles.html" },
          { n: "M01-8", titre: "Limites de fonctions", url: "maths/limites-fonctions.html" },
          { n: "M01-9", titre: "Continuité", url: "maths/continuite.html" },
          { n: "M01-10", titre: "Dérivabilité", url: "maths/derivabilite.html" },
          { n: "M01-11", titre: "Fonctions usuelles", url: "maths/fonctions-usuelles.html" },
          { n: "M01-12", titre: "Nombres complexes", url: "maths/nombres-complexes.html" },
          { n: "M02-1", titre: "Calcul matriciel", url: "maths/calcul-matriciel.html" },
          { n: "M02-2", titre: "Systèmes linéaires et déterminants", url: "maths/systemes-determinants.html" },
          { n: "M02-3", titre: "Espaces vectoriels et dimension", url: "maths/espaces-vectoriels.html" },
          { n: "M02-4", titre: "Polynômes et fractions rationnelles", url: "maths/polynomes.html" },
          { n: "M02-5", titre: "Primitives et intégrales", url: "maths/primitives-integrales.html" },
          { n: "M02-6", titre: "Intégration : techniques", url: "maths/integration-techniques.html" },
          { n: "M02-7", titre: "Intégration et sommes de Riemann", url: "maths/integration-riemann.html" },
          { n: "M02-8", titre: "Équations différentielles", url: "maths/equations-differentielles.html" },
          { n: "M02-9", titre: "Géométrie plane", url: "maths/geometrie-plane.html" },
          { n: "M02-10", titre: "Géométrie de l'espace", url: "maths/geometrie-espace.html" }
        ] },
        { id: "2", label: "2e année (AM2)", chapitres: [
          { n: "Ch1", titre: "Analyse asymptotique", url: "aem2-mathematiques/ch1-analyse-asymptotique.html" },
          { n: "Ch2", titre: "Applications linéaires", url: "aem2-mathematiques/ch2-applications-lineaires.html" },
          { n: "Ch3", titre: "Matrices et applications linéaires", url: "aem2-mathematiques/ch3-matrices-applications-lineaires.html" },
          { n: "Ch4", titre: "Courbes paramétrées", url: "aem2-mathematiques/ch4-courbes-parametrees.html" },
          { n: "Méth.", titre: "Fiches méthodes par exercice", url: "aem2-mathematiques/methodes-par-exercice.html" }
        ] }
      ],
      annales: [
        { annee: "2025-2026", niveau: "1", docs: 3, url: "annales/2025-2026/am1-maths/index.html" },
        { annee: "Sans date", niveau: "1", docs: 3, url: "annales/non-date/am1-maths/index.html" },
        { annee: "2026-2027", niveau: "2", docs: 4, url: "annales/2026-2027/am2-maths/index.html" },
        { annee: "2025-2026", niveau: "2", docs: 4, url: "annales/2025-2026/am2-maths/index.html" }
      ]
    },
    {
      id: "sii", nom: "Sciences de l'ingénieur",
      annees: [
        { id: "1", label: "1re année · SII", chapitres: [
          { n: "C01", titre: "Modélisation SysML", url: "sii/c01-sysml.html" },
          { n: "C02", titre: "Systèmes asservis : structure et performances", url: "sii/c02-systeme-asservi.html" },
          { n: "C03", titre: "Lois de pilotage en mouvement (cinématique)", url: "sii/c03-cinematique.html" },
          { n: "C04", titre: "Transmetteurs et trains d'engrenages", url: "sii/c04-transmetteurs.html" },
          { n: "C05", titre: "Initiation au dessin technique", url: "sii/c05-dessin-technique.html" },
          { n: "C06", titre: "SLCI, Laplace et identification", url: "sii/c06-slci.html" },
          { n: "C07", titre: "Schéma-bloc et performances des asservis", url: "sii/c07-performances.html" },
          { n: "C08", titre: "Statique et PFS", url: "sii/c08-statique.html" },
          { n: "C09", titre: "Statique des transmetteurs", url: "sii/c09-statique-transmetteurs.html" },
          { n: "C10", titre: "Liaisons usuelles et schéma cinématique", url: "sii/c10-liaisons.html" },
          { n: "C11", titre: "Transmetteurs non linéaires", url: "sii/c11-transmetteurs-non-lineaires.html" },
          { n: "C12", titre: "Comportement fréquentiel (Bode)", url: "sii/c12-bode.html" },
          { n: "C13", titre: "Actions internes de structures fermées", url: "sii/c13-actions-internes.html" },
          { n: "C14", titre: "Frottement et actions locales", url: "sii/c14-resistances-actions-locales.html" }
        ] },
        { id: "2", label: "2e année · SI (AM2)", chapitres: [
          { n: "C01", titre: "Cotations GPS", url: "aem2-si/ch4-cotations-gps.html" },
          { n: "C02", titre: "Théorie des mécanismes", url: "aem2-si/c02-theorie-mecanismes.html" },
          { n: "C03", titre: "Dynamique du solide", url: "aem2-si/c03-dynamique-solide.html" },
          { n: "C04", titre: "Énergétique du solide", url: "aem2-si/c04-energetique-solide.html" },
          { n: "C05", titre: "Capteurs et chaîne de mesures", url: "aem2-si/c05-capteurs.html" }
        ] }
      ],
      annales: [
        { annee: "2025-2026", niveau: "1", docs: 5, url: "annales/2025-2026/am1-si/index.html" },
        { annee: "Sans date", niveau: "1", docs: 6, url: "annales/non-date/am1-si/index.html" },
        { annee: "2026-2027", niveau: "2", docs: 1, url: "annales/2026-2027/am2-si/index.html" },
        { annee: "2023-2024", niveau: "2", docs: 1, url: "annales/2023-2024/am2-si/index.html" },
        { annee: "2022-2023", niveau: "2", docs: 3, url: "annales/2022-2023/am2-si/index.html" }
      ]
    }
  ],
  pages: [
    { titre: "Toutes les annales", url: "annales/index.html" },
    { titre: "Corrections exo (Bigeard, SI)", url: "corrections-exo/index.html" }
  ]
};
