# Journal des mises à jour automatiques

Une entrée par document traité (date, source, pages créées ou modifiées, erreurs trouvées, points incertains).

## 2026-11-10 — AM2 Physique · Systèmes tournants · Ch7 Moment cinétique (D. Courtois)
- Source : Moodle « Systèmes tournants / Ch7 Moment cinétique » synchronisé dans OneDrive (Cours7.pdf daté 03/11/2026, Exos7.pdf = TD7). Copies dans `documents/aem2-physique/ch7-moment-cinetique/`.
- Pages créées : `aem2-physique/ch7-moment-cinetique.html` (fiche mémo, résumé de cours, Q1 à Q8 du cours, TD7 Ex 1 à 5 au format par étapes) ; images des énoncés dans `aem2-physique/ch7-img/`. Entrée ajoutée dans `assets/catalogue.js` (AM2 physique, Ch7).
- Points incertains : (1) Ex 1 : la direction de R (verticale, passant par A) est lue sur la figure ; bras de levier OA·sin α. (2) Ex 5 : le texte « fléau tourne de 2θ = 8,38·10⁻³ rad » est interprété comme θ_eq = 4,19·10⁻³ rad. (3) Ex 3 : frottement négligé (non mentionné). (4) Q8 du cours (barre ABC) : pas de valeurs chiffrées sur la figure, non traité. (5) Pas de corrigé officiel du TD7 : corrections rédigées par nous, signalées comme telles.
- Non fait : Ch8 « Forces centrales » et Ch9 « Rotation des solides » figurent sur Moodle mais ne sont pas encore dans OneDrive (dossier « Systèmes tournants » ne contient que Ch7). À récupérer puis traiter.

## 2026-11-10 — AM2 Physique · Systèmes tournants · Ch8 Mouvement à force centrale (D. Courtois)
- Source : Cours8.pdf et Ch8_Formulaire_coordonnées.pdf (déposés par l'utilisateur depuis Downloads, datés 10/11/2026). Copies dans `documents/aem2-physique/ch8-forces-centrales/`.
- Pages créées : `aem2-physique/ch8-forces-centrales.html` (fiche mémo, résumé de cours, Q1 à Q21 du cours) ; figures recadrées dans `aem2-physique/ch8-img/`. Entrée Ch8 ajoutée dans `assets/catalogue.js`.
- Pas de TD8 fourni : seules les questions du cours sont corrigées.
- Points incertains : Q6 (identification des coniques) lue sur la figure ; Q1 utilise la convention du formulaire (θ depuis Oz). Résultats numériques (Q13, Q16 à Q21) recalculés en Python.
- Ch9 « Rotation des solides » : toujours à récupérer.

## 2026-11-11 — Fiches ALI et filtres RLC (AM2 électronique)
- Source : chapitres AM2 électronique ch1, ch3, ch4, ch5, ch6 (et ch2 pour le contexte).
- Pages créées : aem2-electronique/fiche-ali.html (14 montages : suiveur, inverseur, non inverseur, intégrateur, pseudo-intégrateur, dérivateur, sommateur CNA, comparateur, trigger à seuil E0, trigger non inverseur, trigger inverseur, MVA compact, MVA 2 ALI, oscillateur de Wien) et aem2-electronique/fiche-filtres-rlc.html (9 filtres : RC et RL 1er ordre, RLC série passe-bande/passe-bas/passe-haut, bouchon R + L∥C, pont de Wien).
- Principe : Nom, Montage, Formules masqués, affichage à la demande (boutons par partie et modes Noms seuls / Montages seuls / Formules seules). Style : assets/fiche.css (nouveau fichier, style.css inchangé).
- Schémas dessinés en SVG (même gabarit que ch3). Vérifiés visuellement en local.
- Non inclus : oscillateur à NIC (ch5) et oscillateur sinus-cosinus (ch5), schéma non reconstitué de façon fiable ; dent de scie (générateur de balayage) non incluse.
- Points incertains : les noms de résistances du MVA 2 ALI sont ceux du schéma de la fiche (R1, R2, R3), à vérifier face au TP5a.
