/* =========================================================
   CND — Fiches de cours (résumé structuré des 102 diapos)
   ========================================================= */

const COURSE = {

c1: [
 {t:"À quoi servent les END ?", h:`
  <p>Deux domaines d'application principaux :</p>
  <ul><li><b>Détecter, positionner, identifier, dimensionner</b> les défauts dans les pièces, structures ou assemblages.</li>
  <li><b>Mesurer de façon indirecte</b> des caractéristiques des matériaux.</li></ul>
  <div class="grid2">
   <div class="box"><h5>En fabrication</h5><ul><li>Contrôle matière</li><li>Suivi de process</li><li>Recette</li></ul></div>
   <div class="box"><h5>En utilisation</h5><ul><li>Suivi réglementaire</li><li>Expertise</li><li>Maintenance</li></ul></div>
  </div>
  <p class="tip">Intérêts économiques : <b>réduction des coûts de fabrication</b>, <b>gain de productivité</b>, <b>meilleure image de marque</b>. Logigramme : contrôle → conforme ? <b>oui</b> = pièce validée ; <b>non</b> → correction possible ? <b>oui</b> = action corrective, <b>non</b> = <b>rebut</b>.</p>`},

 {t:"Principe fondamental", img:'principe-fondamental', h:`
  <p class="formula">sollicitation → pièce ou structure → <b>perturbation due à la présence d'un défaut</b> → réponse → capteur</p>
  <p>Toutes les méthodes du cours sont des déclinaisons de ce schéma :</p>
  <table><tr><th>Sollicitation</th><th>Capteur / révélation</th></tr>
  <tr><td>Vibration mécanique</td><td>Capteur piézoélectrique (énergie mécanique → signal électrique)</td></tr>
  <tr><td>Champ magnétique</td><td>Révélateur optique des lignes de champ, ou bobine dont on mesure l'impédance</td></tr>
  <tr><td>Rayonnement électromagnétique</td><td>Film convertissant le rayonnement en image ; caméra IR</td></tr>
  <tr><td>Contrainte mécanique</td><td>Optique, particules colorées ou fluorescentes</td></tr></table>`},

 {t:"Défauts recherchés selon le produit", img:'soudure-defauts', h:`
  <h5>Pièces moulées</h5>
  <table><tr><th>Défaut</th><th>Origine</th></tr>
  <tr><td>Retassures</td><td>Retrait de solidification</td></tr>
  <tr><td>Poches d'air</td><td>Gaz</td></tr><tr><td>Soufflures</td><td>Gaz</td></tr>
  <tr><td>Criques et tapures</td><td>Contraintes thermiques de solidification</td></tr></table>
  <h5>Produits laminés</h5>
  <table><tr><th>Défaut</th><th>Origine</th></tr>
  <tr><td>Retassures</td><td>Retrait de solidification</td></tr>
  <tr><td>Inclusions</td><td>Calamine</td></tr><tr><td>Soufflures</td><td>Gaz</td></tr>
  <tr><td>Fissures</td><td>Contraintes thermiques + friction des rouleaux</td></tr>
  <tr><td>Délaminages</td><td>Soufflures aplanies au laminage</td></tr></table>
  <h5>Assemblages — soudures</h5>
  <table><tr><th>Défaut</th><th>Origine</th></tr>
  <tr><td>Fissures</td><td>Contraintes de refroidissement</td></tr>
  <tr><td>Collages (manque de liaison)</td><td>Mauvaise température de fusion</td></tr>
  <tr><td>Manque de pénétration</td><td>Préparation des chanfreins</td></tr>
  <tr><td>Cavités</td><td>Retraits ou gaz</td></tr>
  <tr><td>Inclusions</td><td>Laitier</td></tr>
  <tr><td>Défauts de forme</td><td>Soudage irrégulier, mauvaise préparation</td></tr></table>
  <h5>Rivetage &amp; collage</h5>
  <ul><li><b>Rivetage</b> — fissures ← serrage trop important, mauvais positionnement des outillages.</li>
  <li><b>Collage</b> — adhérence ← états de surface, polymérisation, absence d'adhésif ; inclusions ← impuretés.</li></ul>
  <h5>En service</h5>
  <ul><li><b>Criques de fatigue</b> ← efforts cycliques + concentrations de contraintes (défauts de fabrication, forme des pièces).</li>
  <li><b>Criques de corrosion</b> ← efforts cycliques et corrosion (corrosion sous contrainte).</li></ul>`},

 {t:"Normes des défauts de soudure", h:`
  <p>Deux normes : <b>NF A89-230</b> et <b>NF A89-240</b>. Six groupes :</p>
  <table><tr><th>Groupe</th><th>Famille</th></tr>
  <tr><td>1</td><td>Fissures</td></tr><tr><td>2</td><td>Cavités</td></tr><tr><td>3</td><td>Inclusions</td></tr>
  <tr><td>4</td><td>Manque de fusion (collage)</td></tr><tr><td>5</td><td>Défauts de forme</td></tr>
  <tr><td>6</td><td>Défauts divers</td></tr></table>
  <p class="tip">Vocabulaire des figures : <b>retassure</b>, <b>morsure</b>, <b>caniveau</b>, <b>fissure sous cordon</b>, <b>fissure à la racine</b>, <b>manque de pénétration</b>, <b>collage</b>, <b>soufflures</b>, <b>inclusions</b>.</p>`},

 {t:"Tableau méthodes / défauts (1.5)", img:'tableau-methodes1', h:`
  <table class="small"><tr><th>Méthode</th><th>Principe</th><th>Défauts</th><th>Point fort</th><th>Point faible</th></tr>
  <tr><td>Examen visuel</td><td>Vision, perturbation d'une réflexion</td><td>Débouchants, fissures, criques, trous</td><td>Souplesse</td><td>Productivité, fiabilité</td></tr>
  <tr><td>Contrôle laser</td><td>idem</td><td>idem</td><td>Productivité</td><td>Taux de fausses alarmes</td></tr>
  <tr><td>Contrôle TV</td><td>Formation d'une image</td><td>Défauts d'aspect, taches</td><td>Productivité</td><td>Défauts fins</td></tr>
  <tr><td>Interférométrie holographique</td><td>Micro-déformations provoquées</td><td>Délaminations, décollements</td><td>Contrôle des composites</td><td>Interprétation, productivité</td></tr>
  <tr><td>Thermographie IR</td><td>Cartographie de perturbations thermiques</td><td>Délaminations, hétérogénéités</td><td>Cartographie</td><td>Caractérisation des défauts</td></tr>
  <tr><td>Ressuage</td><td>Effet de capillarité</td><td>Défauts débouchants</td><td>Simplicité, faible coût</td><td>Productivité, peu quantitatif</td></tr>
  <tr><td>Magnétoscopie</td><td>Accumulation de poudre</td><td>Fins débouchants <b>et sous-cutanés</b></td><td>Sensibilité</td><td>Réservé aux aciers, peu quantitatif</td></tr>
  <tr><td>Détection de flux de fuite</td><td>Distorsion d'un flux magnétique</td><td>Débouchants</td><td>Sensibilité, automatisation</td><td>Fragilité des sondes</td></tr>
  <tr><td>Courants de Foucault</td><td>Perturbations d'un courant</td><td>Défauts fins débouchants</td><td>Sensibilité, automatisation</td><td>Matériaux non conducteurs, interprétation</td></tr>
  <tr><td>Potentiel électrique</td><td>Perturbations d'un courant</td><td>Mesure de profondeur</td><td>Simplicité, faible coût</td><td>Contrôle manuel, lent</td></tr>
  <tr><td>Hyperfréquences</td><td>Transmission ou réflexion radar</td><td>Hétérogénéités</td><td>Contrôle sans contact</td><td>Interprétation du signal</td></tr>
  <tr><td>Radiographie X / γ, radioscopie, tomographie</td><td>Atténuation d'un flux</td><td>Défauts internes</td><td>Cartographie, fortes épaisseurs</td><td>Protection, fissures, coût</td></tr>
  <tr><td>Neutronographie</td><td>Atténuation d'un flux</td><td>Corps hydrogénés</td><td>—</td><td>Équipement</td></tr>
  <tr><td>Diffusion Compton</td><td>Rétrodiffusion</td><td>Délaminations</td><td>Complète la radiographie</td><td>Équipement, conditions d'emploi</td></tr>
  <tr><td>Ultrasons</td><td>Perturbation d'une onde, échographie</td><td>Internes + débouchants</td><td>Grande sensibilité</td><td>Conditions d'essai, interprétation, couplage</td></tr>
  <tr><td>Émission acoustique</td><td>Émission provoquée par sollicitation</td><td>Criques, fissures</td><td>Contrôle global avec localisation</td><td>Bruits parasites</td></tr>
  <tr><td>Essais dynamiques</td><td>Perturbation d'un amortissement</td><td>Criques, fissures</td><td>Productivité</td><td>Qualitatif</td></tr>
  <tr><td>Tests d'étanchéité</td><td>Bulles, chimie, bruit acoustique</td><td>Débouchants, joints, parois</td><td>Grande étendue</td><td>Contingences selon la méthode</td></tr>
  </table>`}
],

c2: [
 {t:"Procédure (NF A 09.120)", img:'ressuage-procedure', h:`
  <p><b>Limitations :</b> 1°) défauts <b>débouchants</b> uniquement — 2°) <b>compatibilité chimique</b> pénétrant / matériau de la pièce.</p>
  <ol class="steps">
   <li>Préparation des surfaces</li><li>Application du pénétrant</li><li>Temps de pénétration</li>
   <li>Élimination du pénétrant (rinçage)</li><li>Séchage de la pièce</li><li>Application du révélateur</li>
   <li>Temps de révélation (capillarité)</li><li>Observation sous lumière adéquate (blanche ou UV)</li>
  </ol>
  <p class="tip">Schéma en 6 vignettes : 1 Nettoyage · 2 Application du pénétrant · 3 Nettoyage · 4 Application du révélateur · 5 Révélation du défaut · 6 Nettoyage.</p>`},

 {t:"Préparation des surfaces", h:`
  <ul><li>La pièce doit être <b>propre</b>.</li>
  <li>La <b>sensibilité de détection</b> est souvent déterminée par le mode de préparation des surfaces.</li>
  <li>La rigueur du nettoyage préliminaire <b>favorise grandement</b> les résultats de l'examen.</li></ul>
  <div class="grid2">
   <div class="box"><h5>À éliminer</h5><ul><li>Peinture</li><li>Oxydation</li><li>Graisse</li><li>Calamine / résidus</li></ul></div>
   <div class="box"><h5>Techniques</h5><ul><li>Traitements mécaniques</li><li>Traitements chimiques</li><li>Traitements électrochimiques</li><li>Nettoyage par ultrasons</li></ul></div>
  </div>`},

 {t:"Choix du pénétrant & sensibilité", h:`
  <table><tr><th>Type de pièce</th><th>Pénétrant</th></tr>
  <tr><td>Pièces usinées très sollicitées : aubes de turbines, compresseurs, disques</td><td>Fluorescent à <b>post-émulsion, émulsifiant hydrophile</b></td></tr>
  <tr><td>Pièces de sécurité coulées ou forgées : roues, blocs cylindres, culasses, tubes d'échangeurs</td><td>Fluorescents <b>pré-émulsionnés</b> ou <b>post-émulsion lipophile</b></td></tr>
  <tr><td>Ensembles mécano-soudés, pièces de fonderie</td><td>Pénétrant <b>coloré pré-émulsionné</b></td></tr></table>
  <h5>Échelle de sensibilité</h5>
  <table><tr><th>Pénétrant</th><th>Sensibilité</th></tr>
  <tr><td>Coloré pré-émulsionné</td><td>Faible</td></tr>
  <tr><td>Fluorescent pré-émulsionné</td><td>Moyenne</td></tr>
  <tr><td>Post-émulsion, émulsifiant <b>lipophile</b></td><td>Haute</td></tr>
  <tr><td>Post-émulsion, émulsifiant <b>hydrophile</b></td><td>Très haute</td></tr></table>
  <p class="tip">À retenir : <b>fluorescent &gt; coloré</b> et <b>post-émulsion &gt; pré-émulsionné</b>.</p>`},

 {t:"Étalons (NF A 09.123)", img:'etalons-ressuage', h:`
  <ul><li><b>Plaquettes jumelles Nichrome TESCO</b> — 100 mm × 35 mm ; défauts de rapport <b>largeur/profondeur = 1/20</b> ; profondeurs 10, 20, 30, 50.</li>
  <li><b>Cale européenne ISO 3452-3 type 2.</b></li>
  <li><b>Plaque PSM5</b> — une partie <b>sablée</b> de rugosité précise (test du rinçage) et une partie <b>chromée</b> avec des étoiles de tailles différentes dues à des impacts (test de détectabilité).</li></ul>
  <p>Observation : <b>lumière blanche</b> pour un pénétrant coloré, <b>lumière UV</b> pour un fluorescent. Le ressuage s'applique aussi aux <b>matériaux composites</b>.</p>`}
],

c3: [
 {t:"Types d'ondes et vitesses", img:'polarisation', h:`
  <div class="box"><h5>Onde longitudinale (compression)</h5>
   <span class="formula">V<sub>OL</sub> = √[ (E/ρ) · (1−ν) / ((1+ν)(1−2ν)) ]</span></div>
  <div class="box" style="margin-top:8px"><h5>Onde transversale (cisaillement)</h5>
   <span class="formula">V<sub>OT</sub> = √[ (E/ρ) · 1/(2(1+ν)) ] = √(G/ρ)</span></div>
  <div class="box" style="margin-top:8px"><h5>Onde de surface (Rayleigh)</h5>
   <span class="formula">V<sub>OS</sub> = V<sub>OT</sub> · (0,87 + 1,12ν) / (1+ν)</span></div>
  <p><b>Propagation</b> = direction de déplacement des particules. <b>Polarisation</b> = direction de vibration des particules.<br>
  Ordre : <b>V<sub>OL</sub> &gt; V<sub>OT</sub> &gt; V<sub>OS</sub></b>.</p>
  <p class="formula">λ = V / f</p>`},

 {t:"Absorption et atténuation", img:'regimes-diffusion', h:`
  <p>Système mécanique associé : <span class="formula">m·d²x/dt² + r·dx/dt + k·x = 0</span> (m masse, k raideur, r amortissement).</p>
  <p><b>Loi de Lambert :</b> <span class="formula">P(x) = P₀ · exp(−a·x)</span> — a = constante d'affaiblissement du milieu en <b>dB/m</b>, x en m.<br>
  En décibels : <span class="formula">dB = −20·log₁₀(P/P₀)</span>. Pour l'acier : <b>5 &lt; a &lt; 50 dB/m</b> ; pour l'eau, a = 1 dB/m.</p>
  <h5>Origines de l'atténuation</h5>
  <p>Champ proche : <span class="formula">N ≈ d²/(4λ)</span> (d = diamètre du transducteur).</p>
  <table><tr><th>Régime</th><th>Condition</th><th>Loi</th></tr>
  <tr><td>Rayleigh</td><td>λ ≫ 2πd</td><td>α ∝ d³·f⁴</td></tr>
  <tr><td>Stochastique</td><td>λ ≈ 2πd</td><td>α ∝ d·f²</td></tr>
  <tr><td>Diffusion</td><td>λ ≪ 2πd</td><td>α ∝ d⁻¹</td></tr></table>
  <p>Phénomènes d'absorption : <b>viscosité, dislocation, magnétoélasticité</b>.</p>`},

 {t:"Transmission entre deux milieux", img:'snell', h:`
  <p><b>Loi de Snell :</b> <span class="formula">sin α₁/V<sub>OL1</sub> = sin α₂/V<sub>OL2</sub> = sin α₃/V<sub>OT3</sub></span></p>
  <p>Angles limites interface <b>eau / acier</b> : <b>18°</b> avec onde incidente OL, <b>28°</b> avec onde incidente OT.</p>
  <p>À incidence normale (α₁ = 0°) : <span class="formula">I<sub>R</sub>/I<sub>x</sub> = (Z1 − Z2)² / (Z1 + Z2)²</span> avec <span class="formula">Z = ρ·V</span> (kg/m²·s).</p>
  <h5>Exemple du cours — contrôle par immersion</h5>
  <ul><li>Eau : V = 1483 m/s, ρ = 1000 kg/m³ → Z = 1,483·10⁶</li>
  <li>Acier : V = 5900 m/s, ρ = 7900 kg/m³ → Z = 46,61·10⁶</li>
  <li>100 mm d'eau, a = 1 dB/m → I<sub>x</sub> = 90,48 % — puis <b>I<sub>R</sub> = 79,6 %</b> et <b>I<sub>T</sub> = 10,89 %</b></li></ul>`},

 {t:"Champ, méthodes et affichages", img:'abc-scan', h:`
  <p>Champ de pression sur l'axe : <span class="formula">P(x)/P₀ = 2·sin[(D²/4λ)·(π/2)·(1/x)]</span> — <b>champ proche = Fresnel</b>, <b>champ éloigné = Fraunhofer</b>.</p>
  <div class="grid2">
   <div class="box"><h5>Réflexion (écho)</h5><p class="formula">2d = V · t</p><p>Une seule sonde émet et reçoit. Donne la <b>profondeur</b>.</p></div>
   <div class="box"><h5>Transmission (tandem)</h5><p>Émetteur et récepteur de part et d'autre.<br>Défaut &gt; Ø sonde → <b>perte de signal</b>.<br>Défaut &lt; Ø sonde → <b>diminution d'amplitude</b>.</p></div>
  </div>
  <table><tr><th>Affichage</th><th>Représentation</th></tr>
  <tr><td>A-Scan</td><td>Amplitude en fonction de la distance (profondeur)</td></tr>
  <tr><td>B-Scan</td><td>Coupe : distance en fonction de la position latérale</td></tr>
  <tr><td>C-Scan</td><td>Vue de dessus, cartographie par balayage X-Y</td></tr></table>
  <p><b>Capteur :</b> un <b>élément piézoélectrique</b> convertit l'énergie électrique en vibration mécanique et inversement. Le transducteur peut <b>à la fois transmettre et recevoir</b>. Éléments : case, epoxy potting, backing material, électrodes, wear plate, connecteur coaxial.</p>`}
],

c4: [
 {t:"Principe", img:'magneto-principe', h:`
  <ol class="steps"><li>Application d'un champ d'excitation <b>H</b> (A/m)</li>
  <li>Perturbation puis <b>polarisation des deux bords du défaut</b> → <b>champ de fuite</b></li>
  <li>Révélation par <b>encre magnétique</b> : attraction des particules magnétiques</li></ol>
  <p><b>Restriction :</b> matériaux <b>ferromagnétiques</b>. <b>Orientation du défaut attendue : perpendiculaire aux lignes de champ</b> → deux aimantations croisées.</p>
  <table><tr><th>Matériau</th><th>Susceptibilité χ</th></tr>
  <tr><td>Fer pur</td><td>100 000</td></tr><tr><td>Acier à 1 % C</td><td>350</td></tr>
  <tr><td>Acier trempé</td><td>100</td></tr><tr><td>Aluminium (paramagnétique)</td><td>2,1·10⁻⁵</td></tr>
  <tr><td>Cuivre (diamagnétique)</td><td>−0,94·10⁻⁵</td></tr></table>`},

 {t:"Éléments de théorie", h:`
  <ul><li>Aimantation : <span class="formula">M = χ·H</span></li>
  <li>Champ résultant : <span class="formula">H = H₀ + M</span></li>
  <li>Induction : <span class="formula">B = µ₀·µ<sub>r</sub>·H</span> avec <b>µ₀ = 4π·10⁻⁷ H/m</b> — <b>µ<sub>r</sub> est fonction de H</b></li>
  <li><span class="formula">µ<sub>r</sub> = 1 + χ</span> d'où <span class="formula">B = µ₀·(M + H)</span></li></ul>
  <p><b>Domaine magnétique :</b> région à l'intérieur de laquelle tous les champs magnétiques atomiques sont orientés dans la même direction. Chaque atome ferromagnétique est un petit aimant permanent créé par la rotation et le <b>spin</b> des électrons.</p>`},

 {t:"Méthodes d'aimantation", img:'aimantation-bobine', h:`
  <table><tr><th>Méthode</th><th>Formule</th></tr>
  <tr><td>Directe — électroaimant portatif, banc fixe</td><td class="formula">H = N·I / [(1/µ<sub>r</sub>)(L−e) + e]</td></tr>
  <tr><td>Directe — câble ou conducteur central</td><td class="formula">H = I / (2πR)</td></tr>
  <tr><td>Indirecte — bobine encerclante (N spires, Ø D)</td><td class="formula">H = N·I / D</td></tr>
  <tr><td>Indirecte — système à électrodes</td><td>passage de courant dans la pièce</td></tr></table>
  <p>N·I = ampères-tours, L = longueur du circuit, <b>e = entrefer</b>.</p>
  <h5>Types de courants</h5>
  <div class="grid2">
   <div class="box"><h5>Alternatif</h5><p>Échauffement de surface par courants de Foucault. Le flux reste <b>en surface</b> → bonne détectabilité des défauts <b>débouchants ou très faiblement sous-cutanés</b>.</p></div>
   <div class="box"><h5>Continu / pseudo-continu</h5><p>(redressé triphasé une, deux alternances ou trihexaphasé.) Adapté aux <b>formes simples</b>, permet de détecter des défauts <b>en profondeur</b>.</p></div>
  </div>`},

 {t:"Révélateurs, témoins, démagnétisation", img:'temoins-aimantation', h:`
  <ul><li>Révélateurs <b>noirs</b> → employer avec <b>fond clair</b> (contraste). Révélateurs <b>fluorescents</b> → <b>lumière noire UV</b>.</li>
  <li>Formes : aérosols · poudres à diluer (9 à 0,5 g/l, dans l'eau ou le pétrole) · poudres sèches (noir, bleu, jaune, rouge).</li>
  <li><b>Contrôle par sédimentation</b> = vérification de la concentration du bain.</li></ul>
  <h5>Témoins d'aimantation</h5>
  <ul><li><b>Témoin AFNOR n°1</b> — carré de 20 mm de côté, surface en <b>Sn (étain)</b>, jeu de <b>0,1 mm</b>.</li>
  <li><b>Indicateur de champ.</b></li>
  <li><b>Témoin ASME</b> — revêtement en <b>Cu</b>, défauts artificiels dans un support en acier.</li></ul>
  <p><b>Démagnétisation après contrôle</b> : cycles d'hystérésis d'amplitude décroissante (flux curve / current curve) jusqu'au retour à zéro.</p>`}
],

c5: [
 {t:"Principe", img:'cf-fissure', h:`
  <p>Une bobine alimentée en courant crée un <b>champ primaire B<sub>p</sub></b> → des <b>courants de Foucault</b> (eddy currents) sont induits dans la pièce conductrice → ils créent un <b>champ secondaire B<sub>s</sub></b> → le champ résultant modifie l'<b>impédance de la sonde</b>. Une <b>fissure</b> perturbe les courants induits et déplace le point de mesure.</p>
  <p class="formula">Z = √(L²ω² + R²) — X = Lω (réactance) — R (résistance)</p>`},

 {t:"Plan d'impédance", img:'plan-impedance', h:`
  <p><b>Z₀</b> = impédance de la sonde <b>dans l'air</b> — <b>Z₁</b> = impédance de la sonde <b>sur le matériau conducteur</b>. Axes normés : <b>(R−R₀)/X₀</b> en abscisse, <b>X/X₀</b> en ordonnée.</p>
  <div class="grid2">
   <div class="box"><h5>Matériaux « amagnétiques »</h5><ol><li>B<sub>s</sub> provoque une <b>décroissance de la partie inductive</b> de Z.</li><li>La dissipation d'énergie provoque un <b>fort accroissement de R</b>.</li></ol></div>
   <div class="box"><h5>Matériaux ferromagnétiques</h5><ol><li>µ<sub>r</sub> &gt; 1 augmente l'énergie magnétique → <b>X = Lω augmente</b>.</li><li>Augmentation <b>plus faible de R</b>, plus les <b>pertes par hystérésis</b>.</li></ol></div>
  </div>
  <p>Conductivité : <span class="formula">σ = 1/ρ (S/m)</span>, ρ résistivité en Ω·m. Sur la courbe du cours (µ<sub>r</sub> = 1), conductivité <b>croissante</b> : titane → acier fortement allié (inox) → plomb → aluminium et alliages → laiton → <b>cuivre</b>.</p>`},

 {t:"Profondeur de pénétration", img:'cf-penetration', h:`
  <p class="formula">J = J₀ · exp(−z·√(π·f·σ·µ))  —  δ = 1 / √(π·f·σ·µ)  —  µ = µ₀·µ<sub>r</sub></p>
  <p>Formes pratiques du cours : <span class="formula">δ = 500/√(f·σ·µ<sub>r</sub>)</span> et <span class="formula">f = 250 000/(δ²·σ·µ<sub>r</sub>)</span></p>
  <p>À z = δ, la densité de courant ne vaut plus que <b>1/e ≈ 37 %</b> de sa valeur en surface.</p>
  <p class="tip"><b>f ↑ ⇒ δ ↓</b> · <b>σ ↑ ⇒ δ ↓</b> · <b>µ<sub>r</sub> ↑ ⇒ δ ↓</b>. Pour aller plus profond : <b>baisser la fréquence</b>.</p>`}
],

c6: [
 {t:"Les trois transferts et le rayonnement", img:'ir-rayonnement', h:`
  <ul><li><b>Conduction</b> — contact entre deux corps, ou parties d'un même corps à températures différentes. Homogénéisation par diffusion.</li>
  <li><b>Convection</b> — par un milieu fluide en mouvement. Paramètres : Reynolds, Nusselt, Prandtl.</li>
  <li><b>Rayonnement</b> — émission, absorption et réflexion d'ondes électromagnétiques ; propagation à la vitesse de la lumière ; <b>existe dans le vide</b>.</li></ul>
  <p><b>Loi de Kirchhoff (1860)</b> : un <b>bon absorbeur est aussi un bon émetteur</b>.</p>
  <p class="formula">τ (transmission) + α (absorption) + ρ (réflexion) = 1  et  α = ε</p>`},

 {t:"Corps noir, Planck, Wien, Stefan-Boltzmann", img:'planck', h:`
  <p><b>Corps noir</b> : objet idéal qui absorbe <b>tous</b> les rayonnements incidents, quels que soient la longueur d'onde et l'angle d'incidence. En théorie une cavité fermée isotherme ; en pratique un four très bien isolé, stabilisé, avec un <b>trou de visée de très petite dimension</b>. Il émet donc aussi de façon <b>maximale</b>.</p>
  <p>Constantes : <b>h = 6,6·10⁻³⁴ J·s</b> (Planck) · <b>k = 1,4·10⁻²³ J/K</b> (Boltzmann) · <b>σ = 5,7·10⁻⁸ SI</b> (Stefan-Boltzmann) · <b>T toujours en kelvins</b>.</p>
  <p class="formula">Wien : λmax = 2898 / T  (λ en µm, T en K)</p>
  <ul><li>Peau humaine, 305 K → pic à <b>9,5 µm</b> (IR moyen)</li><li>Azote liquide, 77 K → pic à <b>37,6 µm</b> (IR lointain)</li></ul>
  <p class="formula">Stefan-Boltzmann : W<sub>CN</sub> = σ·T⁴ (W/m²)</p>
  <p>L'énergie comprise entre λ = 0 et λ = λmax ne représente que <b>25 %</b> du total.</p>
  <p>Bandes de travail : <b>ondes courtes 2 à 5,5 µm</b> — <b>ondes longues 7 à 13/14 µm</b>.</p>`},

 {t:"Pièces réelles et émissivité", img:'emissivite-courbes', h:`
  <p>Un corps réel n'émet qu'une fraction de ce qu'émettrait un corps noir à la même température : c'est l'<b>émissivité ε</b>. <span class="formula">W = ε·σ·T⁴</span>. La plupart des matériaux étant opaques en IR : <span class="formula">ÉMISSION + RÉFLEXION = 1</span></p>
  <table><tr><th>Type de corps</th><th>Définition</th></tr>
  <tr><td>Opaque</td><td>Transmission = 0 → réflexion + émission = 1</td></tr>
  <tr><td>Brillant</td><td>Réflexion élevée, émission faible</td></tr>
  <tr><td>Gris</td><td>Émission constante sur une bande de longueur d'onde</td></tr>
  <tr><td>Sélectif</td><td>Émission, réflexion et transmission varient avec λ</td></tr></table>
  <h5>Quelques émissivités du cours</h5>
  <table class="small"><tr><th>Matière</th><th>T</th><th>ε</th></tr>
  <tr><td>Aluminium brillant</td><td>20 °C</td><td>0,04</td></tr><tr><td>Aluminium traité</td><td>20 °C</td><td>0,83 – 0,94</td></tr>
  <tr><td>Cuivre poli</td><td>100 °C</td><td>0,05</td></tr><tr><td>Cuivre très oxydé</td><td>20 °C</td><td>0,75 – 0,8</td></tr>
  <tr><td>Fonte oxydée</td><td>100 °C</td><td>0,65</td></tr><tr><td>Feuillard de fer rouillé</td><td>20 °C</td><td>0,7 – 0,95</td></tr>
  <tr><td>Nickel électrolytique poli</td><td>20 °C</td><td>0,05</td></tr><tr><td>Acier inox 18/8 poli</td><td>20 °C</td><td>0,16</td></tr>
  <tr><td>Acier inox oxydé</td><td>60 °C</td><td>0,85</td></tr><tr><td>Brique rouge</td><td>20 °C</td><td>0,93</td></tr>
  <tr><td>Suie de charbon</td><td>20 °C</td><td>0,95</td></tr><tr><td>Ciment sec</td><td>35 °C</td><td>0,95</td></tr>
  <tr><td>Verre (au-delà de 4,5 µm)</td><td>35 °C</td><td>0,96</td></tr><tr><td>Film huile 30 µm</td><td>20 °C</td><td>0,27</td></tr>
  <tr><td>Film huile 130 µm</td><td>20 °C</td><td>0,72</td></tr><tr><td>Film huile épais</td><td>20 °C</td><td>0,82</td></tr>
  <tr><td>Plâtre blanc</td><td>20 °C</td><td>0,85 – 0,9</td></tr><tr><td>Peau humaine</td><td>32 °C</td><td>0,98</td></tr>
  <tr><td>Eau liquide</td><td>20 °C</td><td>0,96</td></tr><tr><td>Cristaux de glace</td><td>−10 °C</td><td>0,98</td></tr>
  <tr><td>Neige</td><td>−10 °C</td><td>0,85</td></tr></table>
  <p>L'émissivité d'un <b>métal poli</b> chute fortement aux <b>grands angles</b> d'observation (au-delà de ~60°).</p>
  <p>Comment connaître ε : expérience · tableau récapitulatif · peinture de référence · thermocouple à contact · sonde PT100 de référence · laboratoire équipé.</p>`},

 {t:"Caméras industrielles", img:'camera-champ', h:`
  <p class="formula">Rayonnement mesuré = rayonnement objet + rayonnement réfléchi sur l'objet + rayonnement atmosphérique</p>
  <p>Largeur de champ : <span class="formula">L = 2·D·tan(α/2)</span></p>
  <table><tr><th>Objectif</th><th>Distance</th><th>Champ</th><th>Taille min. d'objet</th></tr>
  <tr><td rowspan="3">24°</td><td>500 mm</td><td>212 mm</td><td>2 mm</td></tr>
  <tr><td>1 m</td><td>415 mm</td><td>3,87 mm</td></tr><tr><td>5 m</td><td>2,075 m</td><td>19,35 mm</td></tr>
  <tr><td rowspan="3">45°</td><td>500 mm</td><td>414 mm</td><td>3,87 mm</td></tr>
  <tr><td>1 m</td><td>830 mm</td><td>7,74 mm</td></tr><tr><td>5 m</td><td>4,14 m</td><td>38,71 mm</td></tr></table>
  <p><b>Spot Size Ratio :</b> <span class="formula">1/SSR = taille d'objet / distance maximum garantissant une mesure correcte</span><br>
  24° → 500:2 soit <b>250:1</b> · 45° → 500:3,87 soit <b>130:1</b> · 12° → 2000:3,92 soit <b>510:1</b>.<br>
  <b>Grand angle : SSR baisse. Faible angle : SSR monte.</b></p>
  <h5>Matériaux utilisés en infrarouge</h5>
  <table><tr><th>Matériau</th><th>Transparence</th></tr>
  <tr><td>Fluorine (CaF₂)</td><td>0,13 à 12 µm — T &lt; 600 °C</td></tr>
  <tr><td>Germanium (Ge)</td><td>1,8 à 23 µm — T &lt; 150 °C ; traitement SiO₂ en OC, ZnSe en OL</td></tr>
  <tr><td>Silicium (Si)</td><td>1,2 à 15 µm — transmission diminuant avec T ; traitement ZnSe</td></tr>
  <tr><td>Saphir (Al₂O₃)</td><td>0,17 à 6,5 µm — produit de synthèse</td></tr></table>
  <p class="tip">Ne pas oublier : le <b>film plastique alimentaire</b> est transparent en IR et protège des projections ; l'aluminium, le cuivre, l'argent et l'or polis avec dépôt d'oxyde de silicium sont de <b>bons miroirs</b>.</p>`}
],

c7: [
 {t:"Avantages et inconvénients, méthode par méthode", h:`
  <div class="box"><h5>💧 Ressuage</h5>
   <p><b>Principe :</b> capillarité. <b>Détecte :</b> défauts débouchants uniquement. <b>Matériaux :</b> tous (métaux, composites), sous réserve de compatibilité chimique.</p>
   <p><b>✅ Avantages</b> — simplicité, faible coût, aucune contrainte sur la nature du matériau, tous produits à surface accessible même de forme complexe, mise en œuvre possible en aérosols sur chantier.</p>
   <p><b>❌ Inconvénients</b> — défauts <b>débouchants seulement</b>, faible productivité (tout est manuel, deux temps d'attente), <b>peu quantitatif</b> (pas de profondeur, indication élargie), préparation de surface déterminante, consommables.</p></div>

  <div class="box" style="margin-top:9px"><h5>🧲 Magnétoscopie</h5>
   <p><b>Principe :</b> accumulation de poudre sur le champ de fuite. <b>Détecte :</b> défauts fins débouchants <b>et sous-cutanés</b>. <b>Matériaux :</b> ferromagnétiques (aciers).</p>
   <p><b>✅ Avantages</b> — grande <b>sensibilité</b>, voit le <b>sous-cutané</b> (contrairement au ressuage), rapide, peu coûteuse, portative.</p>
   <p><b>❌ Inconvénients</b> — <b>réservée aux aciers</b>, peu quantitative, dépend de l'<b>orientation</b> du défaut (deux aimantations croisées obligatoires), impose une <b>démagnétisation</b> après contrôle.</p></div>

  <div class="box" style="margin-top:9px"><h5>📡 Ultrasons</h5>
   <p><b>Principe :</b> perturbation d'une onde, échographie. <b>Détecte :</b> défauts <b>internes</b> et débouchants. <b>Matériaux :</b> la majorité.</p>
   <p><b>✅ Avantages</b> — <b>grande sensibilité</b>, nombreuses méthodes d'auscultation, seule méthode du cours à donner la <b>profondeur</b> (2d = V·t) et une <b>coupe</b> (B-Scan) ou une cartographie (C-Scan), accès à une seule face en réflexion.</p>
   <p><b>❌ Inconvénients</b> — <b>couplage</b> obligatoire, <b>interprétation des échos</b> délicate, conditions d'essai exigeantes, très sensible à l'<b>orientation</b> du défaut plan et à la <b>taille de grain</b> (diffusion α ∝ d³f⁴).</p></div>

  <div class="box" style="margin-top:9px"><h5>⚡ Courants de Foucault</h5>
   <p><b>Principe :</b> perturbation d'un courant induit. <b>Détecte :</b> défauts fins débouchants. <b>Matériaux :</b> conducteurs.</p>
   <p><b>✅ Avantages</b> — <b>sensibilité</b> et <b>automatisation</b>, contrôle en ligne à grande cadence, pas de couplant ni de consommable, résultat immédiat, fonctionne à travers une fine couche isolante.</p>
   <p><b>❌ Inconvénients</b> — inopérants sur les <b>non-conducteurs</b>, <b>interprétation</b> du plan d'impédance, profondeur limitée par l'<b>effet de peau</b> (δ = 1/√(πfσµ)), sensibles au <b>lift-off</b> et aux variations de perméabilité des aciers.</p></div>

  <div class="box" style="margin-top:9px"><h5>🌡️ Thermographie infrarouge</h5>
   <p><b>Principe :</b> cartographie de perturbations thermiques. <b>Détecte :</b> délaminations, hétérogénéités diverses. <b>Matériaux :</b> tous.</p>
   <p><b>✅ Avantages</b> — <b>cartographie</b> d'une grande surface d'un seul coup, totalement <b>sans contact</b>, à distance, sur installation <b>en fonctionnement</b>, contrôle sur site.</p>
   <p><b>❌ Inconvénients</b> — <b>caractérisation</b> des défauts difficile, mesure très dépendante de l'<b>émissivité</b> (métal poli ε ≈ 0,04 = miroir IR), rayonnement mesuré = objet + réfléchi + atmosphérique, taille minimale d'objet croissant avec la distance (<b>SSR</b>).</p></div>

  <div class="box" style="margin-top:9px"><h5>☢️ Rayonnements ionisants (radiographie X / γ, tomographie)</h5>
   <p><b>Principe :</b> atténuation d'un flux. <b>Détecte :</b> défauts <b>internes volumiques</b>. <b>Matériaux :</b> tous.</p>
   <p><b>✅ Avantages</b> — cartographie, souplesse de réglage, <b>fortes épaisseurs</b> (γ), imagerie en coupe (tomographie), document d'archive.</p>
   <p><b>❌ Inconvénients</b> — <b>protection</b> radiologique lourde, <b>détection médiocre des fissures</b> fines mal orientées, pas d'information de profondeur, résolution limitée en radioscopie, coût et productivité pour la tomographie.</p></div>

  <p class="tip">Chaque inconvénient découle du <b>principe physique</b> : pas de capillarité sans ouverture · pas de flux de fuite sans ferromagnétisme · pas d'onde sans couplage · pas de courant induit sans conducteur · pas de mesure IR sans émissivité connue · pas de contraste radio sans variation d'épaisseur traversée.</p>`},

 {t:"Méthode de choix — le réflexe d'examen", h:`
  <ol class="steps"><li><b>Matériau ?</b> Ferromagnétique → magnétoscopie possible. Conducteur → courants de Foucault possibles. Isolant → ni l'un ni l'autre.</li>
  <li><b>Où est le défaut ?</b> Débouchant → ressuage, visuel. Sous-cutané → magnétoscopie. Interne → ultrasons, radiographie.</li>
  <li><b>Orientation ?</b> Magnétoscopie : perpendiculaire aux lignes de champ. Ultrasons : perpendiculaire au faisceau.</li>
  <li><b>Contraintes industrielles ?</b> Accès, cadence, coût, sécurité, chantier ou atelier.</li></ol>`},

 {t:"Contraintes et particularités à retenir", h:`
  <table><tr><th>Contrainte</th><th>Méthode concernée</th></tr>
  <tr><td>Matériau ferromagnétique obligatoire</td><td>Magnétoscopie</td></tr>
  <tr><td>Matériau conducteur obligatoire</td><td>Courants de Foucault</td></tr>
  <tr><td>Défaut débouchant obligatoire</td><td>Ressuage, examen visuel</td></tr>
  <tr><td>Couplant obligatoire</td><td>Ultrasons</td></tr>
  <tr><td>Démagnétisation après contrôle</td><td>Magnétoscopie</td></tr>
  <tr><td>Sans contact</td><td>Thermographie IR, hyperfréquences</td></tr>
  <tr><td>Donne la profondeur</td><td>Ultrasons (2d = V·t), potentiel électrique</td></tr></table>`},

 {t:"Normes et étalons du cours", h:`
  <table><tr><th>Référence</th><th>Objet</th></tr>
  <tr><td>NF A 09.120</td><td>Procédure du contrôle par ressuage</td></tr>
  <tr><td>NF A 09.123</td><td>Étalons de ressuage / sensibilité des pénétrants</td></tr>
  <tr><td>ISO 3452-3 type 2</td><td>Cale européenne de ressuage</td></tr>
  <tr><td>NF A89-230 / NF A89-240</td><td>Défauts de soudure (6 groupes)</td></tr></table>
  <p><b>Ressuage</b> → plaquettes jumelles Nichrome TESCO, plaque PSM5, cale européenne.<br>
  <b>Magnétoscopie</b> → témoin AFNOR n°1, indicateur de champ, témoin ASME.</p>`},

 {t:"Pièges de notation", h:`
  <table><tr><th>Symbole</th><th>Chapitre 3 — US</th><th>Chapitre 5 — CF</th><th>Chapitre 6 — IR</th></tr>
  <tr><td><b>ρ</b></td><td>masse volumique (Z = ρV)</td><td>résistivité (σ = 1/ρ)</td><td>réflexion (τ+α+ρ=1)</td></tr>
  <tr><td><b>σ</b></td><td>—</td><td>conductivité (S/m)</td><td>Stefan-Boltzmann (5,7·10⁻⁸)</td></tr>
  <tr><td><b>λ</b></td><td>longueur d'onde acoustique</td><td>—</td><td>longueur d'onde du rayonnement</td></tr>
  <tr><td><b>α</b></td><td>angle / atténuation</td><td>—</td><td>absorption</td></tr>
  <tr><td><b>Z</b></td><td>impédance acoustique (ρV)</td><td>impédance électrique (√(L²ω²+R²))</td><td>—</td></tr></table>
  <p class="tip">Principe transversal le plus rentable du cours : <b>plus la fréquence monte, plus on reste en surface et plus on voit fin</b> — vrai en ultrasons (λ = V/f), en courants de Foucault (δ = 1/√(πfσµ)) et en magnétoscopie (alternatif vs continu).</p>`}
]
};
