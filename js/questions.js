/* =========================================================
   CND — Banque de questions
   Source : « Introduction aux Contrôles Non Destructifs »
   A. SOVEJA — IUT Génie Industriel & Maintenance, Toulouse
   102 diapositives — GIM2
   ---------------------------------------------------------
   Types : qcm (1 bonne rép.) | multi (plusieurs) | vf
           match (associations) | order (remise en ordre)
   Champs : c=chapitre, d=difficulté 1..3, i=image, e=explication
   ========================================================= */

const CHAPTERS = [
  { id:'c1', n:'1', t:'Introduction & défauts',   short:'Intro',      ic:'🔍', col:'#38bdf8',
    sub:'À quoi servent les CND, principe fondamental, familles de défauts, tableau méthodes/défauts' },
  { id:'c2', n:'2', t:'Ressuage',                 short:'Ressuage',   ic:'💧', col:'#f472b6',
    sub:'Procédure NF A 09.120, pénétrants, sensibilités, étalons' },
  { id:'c3', n:'3', t:'Ultrasons',                short:'Ultrasons',  ic:'📡', col:'#a78bfa',
    sub:'Ondes, atténuation, Snell, impédance acoustique, A/B/C-Scan, capteur piézo' },
  { id:'c4', n:'4', t:'Magnétoscopie',            short:'Magnéto',    ic:'🧲', col:'#fbbf24',
    sub:'Champ de fuite, aimantation, révélateurs, témoins, démagnétisation' },
  { id:'c5', n:'5', t:'Courants de Foucault',     short:'Foucault',   ic:'⚡', col:'#34d399',
    sub:'Champ induit, plan d’impédance, conductivité, profondeur de pénétration' },
  { id:'c6', n:'6', t:'Thermographie infrarouge', short:'Thermo IR',  ic:'🌡️', col:'#fb7185',
    sub:'Transferts thermiques, corps noir, Planck, Wien, Stefan-Boltzmann, émissivité, caméras' },
  { id:'c7', n:'7', t:'Synthèse & comparaison',   short:'Synthèse',   ic:'🧠', col:'#60a5fa',
    sub:'Choisir la bonne méthode, normes, pièges classiques de l’examen' }
];

const QUESTIONS = [

/* ══════════════════════════════════════════════════════════
   CHAPITRE 1 — INTRODUCTION & DÉFAUTS
   ══════════════════════════════════════════════════════════ */

{c:'c1',t:'multi',d:1,q:"Quels sont les <b>deux domaines d'application principaux</b> des Essais Non Destructifs ?",
 o:["Détecter, positionner, identifier et dimensionner les défauts dans les pièces, structures ou assemblages",
    "Mesurer de façon indirecte des caractéristiques des matériaux",
    "Déterminer la limite à la rupture d'une pièce par essai de traction",
    "Calculer le coût de revient d'une pièce"],
 a:[0,1],
 e:"Le cours annonce exactement deux domaines : (1) <b>détecter / positionner / identifier / dimensionner les défauts</b>, (2) <b>mesurer indirectement des caractéristiques des matériaux</b>. Un essai de traction est <i>destructif</i> : la pièce est détruite, c'est l'opposé d'un END."},

{c:'c1',t:'qcm',d:1,q:"« Non Destructif » signifie que&nbsp;:",
 o:["la pièce reste utilisable après le contrôle","le contrôle ne détecte aucun défaut","on détruit un échantillon sur 100","la pièce est forcément conforme"],
 a:0,
 e:"Tout l'intérêt : on obtient l'information <b>sans altérer l'aptitude au service</b> de la pièce. On peut donc contrôler 100 % de la production, et re-contrôler la même pièce plus tard en maintenance."},

{c:'c1',t:'multi',d:2,q:"En <b>fabrication</b>, quand utilise-t-on les END ? (cours 1.1)",
 o:["Contrôle matière","Suivi de process","Recette","Suivi réglementaire"],
 a:[0,1,2],
 e:"Le cours sépare nettement deux moments : <b>En fabrication</b> → contrôle matière, suivi de process, recette. <b>En utilisation</b> → suivi réglementaire, expertise, maintenance. Le « suivi réglementaire » appartient donc à l'utilisation."},

{c:'c1',t:'multi',d:2,q:"En <b>utilisation</b> (pièce déjà en service), quand utilise-t-on les END ?",
 o:["Suivi réglementaire","Expertise","Maintenance","Contrôle matière"],
 a:[0,1,2],
 e:"Le contrôle matière se fait en amont, <b>en fabrication</b>. En service on parle de suivi réglementaire (appareils sous pression, aéronautique…), d'expertise (après incident) et de maintenance."},

{c:'c1',t:'multi',d:1,q:"Quels bénéfices le cours associe-t-il aux CND ? (1.2 Intérêts économiques)",
 o:["Réduction des coûts de fabrication","Gain de productivité","Meilleure image de marque","Suppression totale des rebuts"],
 a:[0,1,2],
 e:"Le cours cite trois gains : <b>réduction des coûts de fabrication</b>, <b>gain de productivité</b>, <b>meilleure image de marque</b>. Les CND ne suppriment pas les rebuts : ils permettent de les <i>détecter tôt</i>, avant d'avoir ajouté de la valeur à une pièce mauvaise."},

{c:'c1',t:'qcm',d:2,i:'logigramme',q:"Sur ce logigramme, que devient une pièce <b>non conforme</b> dont la correction est <b>impossible</b> ?",
 o:["Elle part au rebut","Elle est validée quand même","Elle repart en action corrective","Elle est recontrôlée indéfiniment"],
 a:0,
 e:"Chaîne du logigramme : contrôle → conformité ? <b>OUI</b> → pièce validée. <b>NON</b> → correction possible ? <b>OUI</b> → action corrective puis nouveau contrôle. <b>NON</b> → <b>rebut</b>."},

{c:'c1',t:'qcm',d:2,i:'principe-fondamental',q:"Quel est le <b>principe fondamental</b> commun à toutes les méthodes de CND ?",
 o:["On envoie une sollicitation dans la pièce ; le défaut perturbe la réponse, qu'un capteur mesure",
    "On chauffe la pièce jusqu'à rupture pour localiser le point faible",
    "On compare la masse de la pièce à celle d'une pièce saine",
    "On mesure la dureté en surface"],
 a:0,
 e:"Schéma universel du cours : <b>sollicitation → pièce → perturbation due à la présence d'un défaut → réponse → capteur</b>. Toutes les méthodes du cours ne sont que des déclinaisons de ce schéma, avec une sollicitation et un capteur différents."},

{c:'c1',t:'multi',d:2,q:"Parmi ces <b>sollicitations</b>, lesquelles sont citées au 1.3 comme entrées possibles d'un CND ?",
 o:["Vibration mécanique","Champ magnétique","Rayonnement électromagnétique","Contrainte mécanique"],
 a:[0,1,2,3],
 e:"Les quatre sont dans le tableau du 1.3 : vibration mécanique (ultrasons), champ magnétique (magnétoscopie), rayonnement électromagnétique (courants de Foucault, radio, IR) et contrainte mécanique (émission acoustique, interférométrie)."},

{c:'c1',t:'match',d:2,q:"Associe chaque <b>sollicitation</b> au <b>capteur / mode de révélation</b> correspondant (cours 1.3).",
 p:[["Vibration mécanique","Capteur piézoélectrique (énergie mécanique → signal électrique)"],
    ["Champ magnétique","Révélateur optique des lignes de champ, ou bobine dont on mesure l'impédance"],
    ["Rayonnement infrarouge","Caméra IR"],
    ["Rayonnement électromagnétique ionisant","Film convertissant le rayonnement en image"]],
 e:"Retiens la logique : à chaque sollicitation son <b>convertisseur</b>. Le piézoélectrique fait le lien mécanique ↔ électrique (US) ; la bobine fait le lien magnétique ↔ électrique (courants de Foucault) ; le film et la caméra font le lien rayonnement ↔ image."},

{c:'c1',t:'qcm',d:1,i:'moule',q:"Une <b>retassure</b> dans une pièce moulée a pour origine&nbsp;:",
 o:["Le retrait de solidification","Un gaz emprisonné","Les contraintes thermiques","Le laitier"],
 a:0,
 e:"<b>Retassure = retrait de solidification.</b> Le métal se contracte en se solidifiant ; si l'alimentation en métal liquide (masselotte) ne suit pas, il manque de la matière et une cavité se forme, souvent dans la dernière zone à se solidifier (point chaud)."},

{c:'c1',t:'qcm',d:1,q:"Une <b>soufflure</b> ou une <b>poche d'air</b> dans une pièce moulée provient&nbsp;:",
 o:["D'un gaz","D'un retrait de solidification","De contraintes thermiques","D'une friction des rouleaux"],
 a:0,
 e:"Soufflure / poche d'air = <b>gaz</b> (air emprisonné, dégazage du moule ou du métal). À ne surtout pas confondre avec la retassure, qui vient du <i>retrait</i>. Les deux font une cavité, mais l'origine — donc l'action corrective — est différente."},

{c:'c1',t:'qcm',d:2,q:"<b>Criques</b> et <b>tapures</b> dans une pièce moulée sont dues&nbsp;:",
 o:["Aux contraintes thermiques de solidification","Au retrait de solidification","À des gaz","Au laitier"],
 a:0,
 e:"Criques et tapures = fissures provoquées par les <b>contraintes thermiques de solidification</b> (le refroidissement n'est pas homogène, la pièce se bride sur le moule). Le mot <i>tapure</i> revient aussi pour les fissures de trempe."},

{c:'c1',t:'match',d:3,q:"<b>Pièces moulées</b> — associe chaque défaut à son origine (tableau 1.4).",
 p:[["Retassures","Retrait de solidification"],["Poches d'air","Gaz"],["Soufflures","Gaz"],["Criques et tapures","Contraintes thermiques de solidification"]],
 e:"Le tableau 1.4 du cours est très souvent tombé en QCM : apprends-le ligne par ligne. Retiens la règle : <b>cavité + retrait = retassure</b> ; <b>cavité + gaz = soufflure</b> ; <b>fissure + thermique = crique/tapure</b>."},

{c:'c1',t:'qcm',d:2,q:"Dans un produit <b>laminé</b>, l'origine d'un <b>délaminage</b> est&nbsp;:",
 o:["Des soufflures aplanies au laminage","Du laitier","Un retrait de solidification","Un serrage trop important"],
 a:0,
 e:"Une soufflure présente dans le brut est <b>écrasée et étirée</b> par les passes de laminage : elle devient une lame de vide parallèle à la surface, le <b>délaminage</b>. C'est typiquement un défaut interne plan, très mal vu en ultrasons quand le faisceau arrive dessus par la tranche."},

{c:'c1',t:'qcm',d:2,q:"Dans un produit laminé, une <b>inclusion</b> a le plus souvent pour origine&nbsp;:",
 o:["La calamine","Le laitier","Un gaz","Une polymérisation incomplète"],
 a:0,
 e:"Pour les <b>laminés</b> le cours indique <b>calamine</b> (l'oxyde de surface enfoncé dans le métal par les cylindres). Attention au piège : pour les <b>soudures</b>, l'inclusion vient du <b>laitier</b>. Même mot, deux origines selon le procédé."},

{c:'c1',t:'match',d:3,q:"<b>Produits laminés</b> — associe chaque défaut à son origine.",
 p:[["Retassures","Retrait de solidification"],["Inclusions","Calamine"],["Soufflures","Gaz"],
    ["Fissures","Contraintes thermiques de solidification + friction des rouleaux"],["Délaminages","Soufflures aplanies au laminage"]],
 e:"Noter la nuance pour les fissures des laminés : le cours ajoute la <b>friction des rouleaux</b> aux contraintes thermiques. Le laminage apporte sa propre mécanique de dégradation."},

{c:'c1',t:'qcm',d:2,q:"Dans une <b>soudure</b>, une <b>inclusion</b> provient&nbsp;:",
 o:["Du laitier","De la calamine","D'un gaz","D'un défaut de chanfrein"],
 a:0,
 e:"<b>Inclusion en soudure = laitier</b> piégé entre deux passes (mauvais dérochage entre passes). La cavité, elle, vient des retraits ou des gaz."},

{c:'c1',t:'qcm',d:2,q:"Dans une soudure, un <b>collage</b> (manque de liaison / manque de fusion) est dû&nbsp;:",
 o:["À une mauvaise température de fusion","Au laitier","Au retrait","À un serrage trop important"],
 a:0,
 e:"<b>Collage = mauvaise température de fusion</b> : le métal d'apport s'est posé sur des bords pas assez chauds, il n'y a pas eu de liaison métallurgique. C'est un défaut <b>plan</b>, très dangereux mécaniquement et très difficile à voir en radiographie s'il est bien fermé."},

{c:'c1',t:'qcm',d:2,q:"Dans une soudure, un <b>manque de pénétration</b> est attribué&nbsp;:",
 o:["À la préparation des chanfreins","Au laitier","Aux gaz","Aux contraintes de refroidissement"],
 a:0,
 e:"<b>Manque de pénétration ← préparation des chanfreins</b> (angle, talon, écartement mal réalisés). Le bain ne descend pas jusqu'à la racine : il reste un manque de matière au fond du joint."},

{c:'c1',t:'qcm',d:2,q:"Dans une soudure, les <b>fissures</b> sont attribuées par le cours&nbsp;:",
 o:["Aux contraintes de refroidissement","Au laitier","Aux gaz","Aux états de surface"],
 a:0,
 e:"<b>Fissure de soudure ← contraintes de refroidissement.</b> Le cordon se contracte en refroidissant tandis que les pièces sont bridées : les contraintes résiduelles fissurent le cordon ou la zone affectée thermiquement (fissure sous cordon, fissure à la racine)."},

{c:'c1',t:'match',d:3,q:"<b>Assemblages soudés</b> — associe chaque défaut à son origine (tableau 1.4).",
 p:[["Fissures","Contraintes de refroidissement"],["Collages","Mauvaise température de fusion"],
    ["Manque de pénétration","Préparation des chanfreins"],["Cavités","Retraits ou gaz"],
    ["Inclusions","Laitier"],["Défauts de forme","Soudage irrégulier / mauvaise préparation"]],
 e:"Ce tableau est le cœur du chapitre 1. Astuce mnémo : <b>thermique → fissure</b>, <b>température trop basse → collage</b>, <b>géométrie du joint → manque de pénétration</b>, <b>propreté → inclusion</b>, <b>geste du soudeur → défaut de forme</b>."},

{c:'c1',t:'qcm',d:2,q:"En <b>rivetage</b>, une fissure est provoquée par&nbsp;:",
 o:["Un serrage trop important ou un mauvais positionnement des outillages","Du laitier","Un gaz","La polymérisation"],
 a:0,
 e:"Le rivetage déforme la matière à froid : un <b>serrage excessif</b> ou un outillage mal positionné dépasse la capacité de déformation locale et amorce une fissure."},

{c:'c1',t:'multi',d:2,q:"En <b>collage</b> (assemblage collé), quelles sont les origines d'un défaut d'<b>adhérence</b> ?",
 o:["États de surface","Polymérisation","Absence d'adhésif","Laitier"],
 a:[0,1,2],
 e:"Trois causes selon le cours : <b>états de surface</b> (mal dégraissés, mal préparés), <b>polymérisation</b> (mal conduite : temps, température), <b>absence d'adhésif</b>. Les <i>inclusions</i> dans un collage viennent des <b>impuretés</b>. Le laitier, lui, est un défaut de soudure."},

{c:'c1',t:'qcm',d:3,q:"Les défauts de soudure font l'objet de <b>deux normes</b> citées dans le cours&nbsp;:",
 o:["NF A89-230 et NF A89-240","NF A 09.120 et NF A 09.123","ISO 3452-3 et ISO 9712","NF EN 1714 et NF EN 1435"],
 a:0,
 e:"<b>NF A89-230</b> et <b>NF A89-240</b> classent les défauts de soudure. Attention au piège : <b>NF A 09.120</b> (procédure de ressuage) et <b>NF A 09.123</b> (étalons de ressuage) appartiennent au chapitre 2."},

{c:'c1',t:'match',d:3,q:"Classement normalisé des défauts de soudure — associe chaque <b>groupe</b> à sa famille.",
 p:[["Groupe 1","Fissures"],["Groupe 2","Cavités"],["Groupe 3","Inclusions"],
    ["Groupe 4","Manque de fusion (collage)"],["Groupe 5","Défauts de forme"],["Groupe 6","Défauts divers"]],
 e:"Ordre à connaître par cœur : <b>1 fissures, 2 cavités, 3 inclusions, 4 manque de fusion, 5 forme, 6 divers</b>. Moyen mnémotechnique : on va du plus grave et du plus fin (fissure) vers le plus anecdotique (divers)."},

{c:'c1',t:'qcm',d:2,q:"Le groupe <b>4</b> du classement des défauts de soudure correspond à&nbsp;:",
 o:["Manque de fusion (collage)","Cavités","Inclusions","Défauts de forme"],
 a:0,
 e:"Groupe 4 = <b>manque de fusion (collage)</b>. Ne pas le confondre avec le groupe 5 (défauts de forme : morsure, caniveau, surépaisseur…)."},

{c:'c1',t:'qcm',d:2,i:'soudure-defauts',q:"Sur ce schéma de défauts de soudure, une <b>morsure</b> ou un <b>caniveau</b> appartient au groupe&nbsp;:",
 o:["Groupe 5 — défauts de forme","Groupe 1 — fissures","Groupe 2 — cavités","Groupe 3 — inclusions"],
 a:0,
 e:"Morsure et caniveau sont des <b>entailles en pied de cordon</b> : la géométrie du joint n'est pas correcte, donc <b>groupe 5, défauts de forme</b>. Mécaniquement ils sont graves car ils concentrent les contraintes et amorcent la fatigue."},

{c:'c1',t:'multi',d:2,q:"Quels défauts le cours cite-t-il pour une pièce <b>EN SERVICE</b> ?",
 o:["Criques de fatigue","Criques de corrosion","Retassures","Délaminages de laminage"],
 a:[0,1],
 e:"En service on ne crée plus de retassures ni de délaminages (ce sont des défauts de <i>fabrication</i>). On voit apparaître les <b>criques de fatigue</b> (efforts cycliques) et les <b>criques de corrosion</b> (efforts cycliques + corrosion)."},

{c:'c1',t:'qcm',d:2,i:'fatigue-corrosion',q:"Les <b>criques de fatigue</b> sont dues aux efforts cycliques, aggravés par&nbsp;:",
 o:["Les concentrations de contraintes dues aux défauts de fabrication et à la forme des pièces",
    "L'absence d'adhésif","La calamine","Une mauvaise température de fusion"],
 a:0,
 e:"Le cours précise : efforts cycliques + <b>concentrations de contraintes</b> dues (a) aux défauts de fabrication et (b) à la forme des pièces (congés, angles vifs, perçages). C'est pour cela qu'un petit défaut de fonderie toléré peut devenir l'amorce d'une rupture après quelques millions de cycles."},

{c:'c1',t:'qcm',d:2,q:"La <b>corrosion sous contrainte</b> combine&nbsp;:",
 o:["Efforts cycliques et corrosion","Gaz et retrait","Laitier et calamine","Polymérisation et état de surface"],
 a:0,
 e:"Le cours l'associe aux criques de corrosion : <b>efforts cycliques ET milieu corrosif</b> agissant ensemble. L'effet combiné est bien pire que la somme des deux pris séparément."},

{c:'c1',t:'qcm',d:2,i:'tableau-methodes1',q:"Selon le tableau 1.5, le <b>principe physique</b> du ressuage est&nbsp;:",
 o:["L'effet de capillarité","La perturbation d'une réflexion","L'accumulation de poudre","La perturbation d'un courant"],
 a:0,
 e:"<b>Ressuage = capillarité.</b> Le pénétrant est aspiré dans la fissure par capillarité, puis ressort (il « ressue ») dans le révélateur par le même phénomène. L'accumulation de poudre, c'est la magnétoscopie ; la perturbation d'un courant, les courants de Foucault."},

{c:'c1',t:'qcm',d:2,i:'tableau-methodes1',q:"Toujours selon le tableau 1.5, quels sont les <b>points forts</b> du ressuage ?",
 o:["Simplicité et faible coût","Productivité et automatisation","Cartographie","Fortes épaisseurs"],
 a:0,
 e:"Ressuage : points forts <b>simplicité, faible coût</b> ; points faibles <b>productivité, peu quantitatif</b> (on voit l'indication, on mesure mal la profondeur). Beaucoup d'étapes manuelles, donc peu productif."},

{c:'c1',t:'qcm',d:2,i:'tableau-methodes1',q:"Selon le tableau 1.5, la <b>magnétoscopie</b> détecte&nbsp;:",
 o:["Les défauts fins débouchants ET sous-cutanés","Uniquement les défauts débouchants","Uniquement les défauts internes profonds","Uniquement les délaminations"],
 a:0,
 e:"C'est LA différence avec le ressuage : la magnétoscopie voit aussi les défauts <b>sous-cutanés</b> (juste sous la peau), parce que le champ de fuite sort de la matière même si la fissure n'affleure pas. Son domaine : <b>produits ferromagnétiques (aciers)</b>."},

{c:'c1',t:'qcm',d:2,i:'tableau-methodes1',q:"Quel est le <b>point faible</b> majeur de la magnétoscopie d'après le tableau 1.5 ?",
 o:["Réservée aux aciers et peu quantitative","Coût élevé","Interprétation du signal radar","Nécessite un couplant"],
 a:0,
 e:"Point fort : <b>sensibilité</b>. Points faibles : <b>réservé aux aciers</b> (matériaux ferromagnétiques) et <b>peu quantitatif</b>. Le couplant, c'est un problème d'ultrasons."},

{c:'c1',t:'qcm',d:2,i:'tableau-methodes1',q:"Les <b>courants de Foucault</b> ont pour points faibles (tableau 1.5)&nbsp;:",
 o:["Matériaux non conducteurs et interprétation","Protection et détection des fissures","Couplage","Fragilité des sondes"],
 a:0,
 e:"Les CF exigent un <b>matériau conducteur</b> : sur un composite isolant ou une céramique, il n'y a rien à induire. Et le signal (plan d'impédance) demande de l'<b>interprétation</b>. La fragilité des sondes est le point faible de la détection de flux de fuite ; la protection, celui de la radiographie X."},

{c:'c1',t:'qcm',d:3,i:'tableau-methodes2',q:"D'après le tableau 1.5, le principe physique des <b>rayonnements ionisants</b> (radiographie X, γ, tomographie) est&nbsp;:",
 o:["L'atténuation d'un flux","La rétrodiffusion","L'échographie","La distorsion d'un flux magnétique"],
 a:0,
 e:"Radiographie = <b>atténuation d'un flux</b> de rayonnement par la matière : là où il y a moins de matière (cavité), il passe plus de rayonnement et le film noircit. La <b>rétrodiffusion</b>, c'est la <b>diffusion Compton</b>, une autre ligne du tableau."},

{c:'c1',t:'qcm',d:3,i:'tableau-methodes2',q:"Quelle méthode du tableau 1.5 est fondée sur la <b>rétrodiffusion</b> et sert à contrôler les <b>composites</b> ?",
 o:["La diffusion Compton","La neutronographie","La tomographie X","L'émission acoustique"],
 a:0,
 e:"<b>Diffusion Compton</b> : principe rétrodiffusion, détecte les <b>délaminations</b>, domaine « contrôle des composites », point fort « complète la radiographie », point faible « équipement / conditions d'emploi ». La <b>neutronographie</b>, elle, vise les <b>corps hydrogénés</b>."},

{c:'c1',t:'qcm',d:3,i:'tableau-methodes2',q:"Quelle méthode est particulièrement adaptée aux <b>corps hydrogénés</b> ?",
 o:["La neutronographie","La radiographie γ","Les ultrasons","Le ressuage"],
 a:0,
 e:"Les neutrons interagissent fortement avec l'hydrogène : la <b>neutronographie</b> voit donc très bien plastiques, colles, explosifs, eau — tout ce que les rayons X traversent sans contraste."},

{c:'c1',t:'multi',d:3,i:'tableau-methodes2',q:"Quels sont les <b>points faibles</b> des ultrasons listés dans le tableau 1.5 ?",
 o:["Conditions d'essai","Interprétation des échos","Couplage","Protection radiologique"],
 a:[0,1,2],
 e:"Ultrasons : points forts <b>grande sensibilité</b> et <b>nombreuses méthodes d'auscultation</b> ; points faibles <b>conditions d'essai, interprétation des échos, couplage</b>. La protection est un problème de <b>radiographie X</b> (rayonnement ionisant)."},

{c:'c1',t:'qcm',d:3,i:'tableau-methodes2',q:"L'<b>émission acoustique</b> repose sur&nbsp;:",
 o:["Une émission provoquée par sollicitation mécanique","L'atténuation d'un flux","L'effet de capillarité","La formation d'une image"],
 a:0,
 e:"On met la structure <b>sous contrainte</b> et on écoute : une fissure qui progresse émet une salve acoustique. Point fort : <b>contrôle global avec localisation des défauts</b> (gros récipients). Point faible : <b>bruits parasites</b>."},

{c:'c1',t:'match',d:3,q:"Tableau 1.5 — associe chaque méthode à son <b>principe physique</b>.",
 p:[["Ressuage","Effet de capillarité"],["Magnétoscopie","Accumulation de poudre"],
    ["Courants de Foucault","Perturbation d'un courant"],["Radiographie X","Atténuation d'un flux"],
    ["Ultrasons","Perturbation d'une onde / échographie"],["Thermographie infrarouge","Cartographie de perturbations thermiques"]],
 e:"Cette association tombe très souvent. Un mot-clé par méthode : <b>capillarité</b>, <b>poudre</b>, <b>courant</b>, <b>flux atténué</b>, <b>onde</b>, <b>thermique</b>."},

{c:'c1',t:'match',d:3,q:"Tableau 1.5 — associe chaque méthode à son <b>point faible</b> caractéristique.",
 p:[["Contrôle laser","Taux de fausses alarmes"],["Contrôle TV","Défauts fins"],
    ["Détection de flux de fuite","Fragilité des sondes"],["Radiographie X","Protection / détection des fissures"],
    ["Tomographie X","Coût et productivité"],["Émission acoustique","Bruits parasites"]],
 e:"Chaque méthode a sa faiblesse « signature ». Pour la radiographie, retenir les deux : <b>protection</b> (rayonnement ionisant) et <b>détection des fissures</b> (une fissure fine perpendiculaire au faisceau ne crée presque pas de contraste)."},

{c:'c1',t:'qcm',d:2,i:'tableau-methodes1',q:"Quelle méthode optique du tableau 1.5 détecte <b>délaminations et décollements</b> par « détection de micro-déformations provoquées » ?",
 o:["L'interférométrie holographique","Le contrôle TV","Le contrôle laser","L'examen visuel direct"],
 a:0,
 e:"<b>Interférométrie holographique</b> (shearographie) : on sollicite légèrement la pièce (dépression, chauffage) et on compare les figures d'interférence. Domaine : <b>contrôle en atelier de parois non métalliques</b>, point fort <b>contrôle des composites</b>."},

{c:'c1',t:'qcm',d:2,i:'tableau-methodes1',q:"D'après le tableau 1.5, le point fort de la <b>thermographie infrarouge</b> est&nbsp;:",
 o:["La cartographie","La souplesse","Le faible coût","Les fortes épaisseurs"],
 a:0,
 e:"La thermographie donne une <b>image complète</b> de la répartition thermique : elle <b>cartographie</b>. Son point faible : la <b>caractérisation des défauts</b> — on voit qu'il y a une anomalie, on peine à dire exactement quoi et à quelle profondeur."},

{c:'c1',t:'multi',d:3,q:"Quels essais le tableau 1.5 range-t-il dans les <b>tests d'étanchéité</b> ?",
 o:["Essais hydrostatiques (détection de bulles)","Tests avec gaz traceurs (halogènes, hélium)","Détection sonore (bruit acoustique)","Essais dynamiques"],
 a:[0,1,2],
 e:"Les trois premiers. Les <b>essais dynamiques</b> appartiennent aux <b>vibrations mécaniques</b> : perturbation d'un amortissement et mesure de vitesse, sur pièces moulées, résultat <i>qualitatif</i>."},

{c:'c1',t:'vf',d:2,q:"Le <b>contrôle laser</b> a pour point fort la productivité et pour point faible le taux de fausses alarmes.",
 a:0,
 e:"Vrai. Tableau 1.5, famille « optiques » : contrôle laser → domaine <b>contrôles automatiques de bandes et tôles</b>, point fort <b>productivité</b>, point faible <b>taux de fausses alarmes</b>."},

{c:'c1',t:'vf',d:2,q:"L'<b>examen visuel</b> direct ou assisté a pour point fort la productivité.",
 a:1,
 e:"Faux — c'est l'inverse. Point fort de l'examen visuel : la <b>souplesse</b>. Points faibles : <b>productivité et fiabilité</b> (ça dépend de l'opérateur, de sa fatigue, de l'éclairage)."},

{c:'c1',t:'qcm',d:1,q:"Un défaut <b>débouchant</b>, c'est un défaut&nbsp;:",
 o:["Qui affleure la surface de la pièce","Situé au cœur de la pièce","Toujours plus grand que 1 mm","Uniquement présent dans les soudures"],
 a:0,
 e:"Vocabulaire à maîtriser absolument, il conditionne le choix de la méthode : <b>débouchant</b> = ouvert sur la surface (ressuage OK) ; <b>sous-cutané</b> = juste sous la peau, non ouvert (magnétoscopie OK, ressuage aveugle) ; <b>interne</b> = au cœur (ultrasons, radiographie)."},

{c:'c1',t:'match',d:2,q:"Associe chaque <b>famille de défaut</b> aux méthodes capables de le voir (d'après le tableau 1.5).",
 p:[["Défaut débouchant en surface","Ressuage, examen visuel"],
    ["Défaut fin débouchant ou sous-cutané dans un acier","Magnétoscopie"],
    ["Défaut interne dans une forte épaisseur","Radiographie γ, ultrasons"],
    ["Délamination dans un composite","Interférométrie holographique, thermographie, diffusion Compton"]],
 e:"C'est la question de synthèse type examen. La logique : <b>où est le défaut</b> (surface / sous-peau / cœur) et <b>de quoi est faite la pièce</b> (acier ferromagnétique / conducteur / isolant) — ces deux réponses suffisent presque toujours à choisir la méthode."},

{c:'c1',t:'qcm',d:2,q:"Pourquoi un CND en <b>début</b> de gamme de fabrication est-il économiquement intéressant ?",
 o:["On élimine la pièce mauvaise avant d'y ajouter de la valeur","Il coûte moins cher qu'un CND en fin de gamme","Il supprime le besoin de contrôle final","Il augmente la cadence de production"],
 a:0,
 e:"C'est le sens du logigramme du 1.2 : détecter tôt évite d'usiner, traiter et assembler une pièce qui finira au rebut. Le gain n'est pas sur le prix du contrôle lui-même, mais sur la <b>valeur ajoutée non gaspillée</b>."},

{c:'c1',t:'vf',d:1,q:"Les CND permettent de mesurer <b>directement</b> les caractéristiques d'un matériau (dureté, limite élastique).",
 a:1,
 e:"Faux. Le cours écrit « mesurer de façon <b>indirecte</b> des caractéristiques des matériaux ». On mesure une grandeur physique (vitesse d'une onde, conductivité, perméabilité) et on en <i>déduit</i> la caractéristique recherchée."},

/* ══════════════════════════════════════════════════════════
   CHAPITRE 2 — CND PAR RESSUAGE
   ══════════════════════════════════════════════════════════ */

{c:'c2',t:'qcm',d:1,q:"Quelle norme donne la <b>procédure</b> du contrôle par ressuage ?",
 o:["NF A 09.120","NF A 09.123","NF A89-230","ISO 3452-3"],
 a:0,
 e:"<b>NF A 09.120 = procédure de ressuage.</b> À ne pas confondre avec <b>NF A 09.123 = étalons</b> (tests de sensibilité des pénétrants). Truc mnémo : 120 vient avant 123, comme la procédure vient avant la vérification."},

{c:'c2',t:'multi',d:1,q:"Quelles sont les <b>deux limitations</b> de la méthode par ressuage énoncées dans le cours ?",
 o:["Seuls les défauts débouchants sont détectables",
    "Il faut une compatibilité chimique entre le pénétrant et le matériau de la pièce",
    "La pièce doit être ferromagnétique",
    "La pièce doit être électriquement conductrice"],
 a:[0,1],
 e:"Les deux limitations du 2.1 : <b>1°) défauts débouchants</b> uniquement — si la fissure n'affleure pas, le pénétrant ne peut pas y entrer ; <b>2°) compatibilité chimique pénétrant/matériau</b> — certains pénétrants attaquent les plastiques, ou sont interdits sur l'inox (soufre, halogènes). Ferromagnétisme et conductivité ne concernent pas le ressuage : il marche sur presque tout, métal ou composite."},

{c:'c2',t:'order',d:2,q:"Remets dans l'ordre la <b>procédure de ressuage</b> (NF A 09.120).",
 s:["Préparation des surfaces","Application du pénétrant","Temps de pénétration",
    "Élimination du pénétrant (rinçage)","Séchage de la pièce","Application du révélateur",
    "Temps de révélation (capillarité)","Observation sous lumière adéquate (blanche ou UV)"],
 e:"Huit étapes dans cet ordre exact. Les deux <b>temps d'attente</b> (pénétration puis révélation) sont ce qui rend la méthode lente et peu productive. Le <b>séchage</b> se place entre le rinçage et le révélateur : appliquer le révélateur sur une pièce mouillée ruine le contrôle."},

{c:'c2',t:'qcm',d:2,i:'ressuage-procedure',q:"Sur ce schéma de la procédure, quelle est l'étape n°<b>3</b> ?",
 o:["Nettoyage (élimination de l'excès de pénétrant)","Application du pénétrant","Application du révélateur","Révélation du défaut"],
 a:0,
 e:"Le schéma 2.2 se lit : 1 Nettoyage → 2 Application du pénétrant → 3 <b>Nettoyage</b> (on enlève l'excès en surface, le pénétrant reste piégé dans la fissure) → 4 Application du révélateur → 5 Révélation du défaut → 6 Nettoyage final."},

{c:'c2',t:'qcm',d:2,i:'ressuage-procedure',q:"Sur ce schéma, que se passe-t-il à l'étape n°<b>5</b> ?",
 o:["Le pénétrant ressort de la fissure et s'étale dans le révélateur : l'indication devient visible et élargie",
    "On applique le pénétrant coloré","On rince la pièce","On sèche la pièce"],
 a:0,
 e:"Étape 5 = <b>révélation du défaut</b>. Le révélateur (poudre blanche) « pompe » par capillarité le pénétrant resté dans la fissure. L'indication qui apparaît est <b>plus large que la fissure réelle</b> : c'est ce grossissement qui rend visible à l'œil une fissure de quelques micromètres."},

{c:'c2',t:'qcm',d:2,q:"Pourquoi le ressuage est-il qualifié de « <b>peu quantitatif</b> » ?",
 o:["L'indication révélée est élargie et ne donne pas la profondeur du défaut",
    "Le pénétrant s'évapore trop vite","La lumière UV fausse les couleurs","Le révélateur est opaque aux rayons X"],
 a:0,
 e:"On voit <b>où</b> est le défaut et sa longueur approximative, mais l'indication est étalée par le révélateur et on n'a <b>aucune information de profondeur</b>. Pour dimensionner, il faut passer aux ultrasons ou aux courants de Foucault."},

{c:'c2',t:'multi',d:2,q:"Le cours insiste sur la <b>préparation des surfaces</b>. Que retenir ?",
 o:["La pièce doit être propre",
    "La sensibilité de détection est souvent déterminée par le mode de préparation des surfaces",
    "La rigueur du nettoyage préliminaire favorise grandement les résultats",
    "Un sablage grossier améliore toujours la détection"],
 a:[0,1,2],
 e:"Les trois premières phrases sont textuellement dans le cours. Attention au piège du sablage : un traitement mécanique trop agressif peut <b>écraser et refermer</b> les lèvres de la fissure, donc empêcher le pénétrant d'entrer. La préparation conditionne la sensibilité — dans les deux sens."},

{c:'c2',t:'multi',d:2,q:"Quels <b>contaminants</b> le cours cite-t-il comme devant être éliminés avant ressuage ?",
 o:["Peinture","Oxydation","Graisse","Calamine et résidus"],
 a:[0,1,2,3],
 e:"Les quatre : <b>peinture, oxydation, graisse, calamine/résidus</b>. Tout ce qui bouche l'ouverture de la fissure ou masque la surface. Une simple couche de peinture rend le contrôle totalement aveugle."},

{c:'c2',t:'multi',d:2,q:"Quelles <b>techniques de nettoyage</b> sont citées au 2.3 ?",
 o:["Traitements mécaniques","Traitements chimiques","Traitements électrochimiques","Nettoyage par ultrasons"],
 a:[0,1,2,3],
 e:"Les quatre figurent dans le cours. Le <b>nettoyage par ultrasons</b> (bac à ultrasons) est particulièrement efficace car la cavitation va chercher les souillures <i>dans</i> les cavités, sans agresser la géométrie."},

{c:'c2',t:'qcm',d:3,q:"Pour des <b>aubes de turbines, compresseurs et disques</b> (pièces usinées très sollicitées), le cours recommande&nbsp;:",
 o:["Un pénétrant fluorescent à post-émulsion avec émulsifiant hydrophile",
    "Un pénétrant coloré pré-émulsionné",
    "Un pénétrant fluorescent pré-émulsionné",
    "Un pénétrant à post-émulsion avec émulsifiant lipophile"],
 a:0,
 e:"Pièces critiques = sensibilité maximale = <b>fluorescent à post-émulsion avec émulsifiant hydrophile</b>, qui est justement la <b>très haute sensibilité</b> du tableau 2.5. Logique à retenir : <b>plus la pièce est critique, plus le pénétrant est sensible</b>."},

{c:'c2',t:'qcm',d:3,q:"Pour des <b>roues, blocs cylindres, culasses, tubes d'échangeurs</b> (pièces de sécurité coulées ou forgées), le cours recommande&nbsp;:",
 o:["Des pénétrants fluorescents pré-émulsionnés, ou à post-émulsion avec émulsifiant lipophile",
    "Un pénétrant coloré pré-émulsionné",
    "Un pénétrant fluorescent à post-émulsion hydrophile",
    "Aucun pénétrant, on utilise la magnétoscopie"],
 a:0,
 e:"Niveau intermédiaire : <b>fluorescents pré-émulsionnés</b> (sensibilité moyenne) <b>ou post-émulsion lipophile</b> (haute sensibilité). On réserve l'hydrophile aux pièces les plus sollicitées."},

{c:'c2',t:'qcm',d:2,q:"Pour des <b>ensembles mécano-soudés</b> ou des <b>pièces de fonderie</b> courantes, le pénétrant conseillé est&nbsp;:",
 o:["Un pénétrant coloré pré-émulsionné","Un fluorescent post-émulsion hydrophile","Un fluorescent post-émulsion lipophile","Un pénétrant fluorescent pré-émulsionné"],
 a:0,
 e:"<b>Coloré pré-émulsionné</b> = le plus simple, le moins cher, de <b>faible sensibilité</b> — suffisant pour des pièces peu sollicitées, et utilisable sur chantier en aérosols sous lumière blanche, sans cabine UV."},

{c:'c2',t:'match',d:3,q:"<b>Sensibilité des pénétrants</b> (tableau 2.5) — associe chaque type à son niveau.",
 p:[["Pénétrant coloré pré-émulsionné","Faible sensibilité"],
    ["Pénétrant fluorescent pré-émulsionné","Sensibilité moyenne"],
    ["Post-émulsion avec émulsifiant lipophile","Haute sensibilité"],
    ["Post-émulsion avec émulsifiant hydrophile","Très haute sensibilité"]],
 e:"Échelle à connaître par cœur, du plus faible au plus fort : <b>coloré pré-émulsionné → fluorescent pré-émulsionné → post-émulsion lipophile → post-émulsion hydrophile</b>. Deux clés : <b>fluorescent bat coloré</b>, et <b>post-émulsion bat pré-émulsionné</b>."},

{c:'c2',t:'qcm',d:3,q:"Quel type de pénétrant offre la <b>plus haute sensibilité</b> ?",
 o:["Post-émulsion avec émulsifiant hydrophile","Post-émulsion avec émulsifiant lipophile","Fluorescent pré-émulsionné","Coloré pré-émulsionné"],
 a:0,
 e:"<b>Post-émulsion hydrophile = très haute sensibilité</b>, le sommet du tableau 2.5. Le principe du post-émulsionnement : le pénétrant n'est pas rinçable tel quel ; on applique séparément un émulsifiant qui ne « mord » que la couche superficielle, donc on enlève l'excès sans risquer de vider les fissures fines."},

{c:'c2',t:'qcm',d:2,q:"Quelle est la sensibilité d'un pénétrant <b>coloré pré-émulsionné</b> ?",
 o:["Faible","Moyenne","Haute","Très haute"],
 a:0,
 e:"<b>Faible sensibilité.</b> C'est le pénétrant « rouge » classique en bombe, observé en lumière blanche : pratique et économique, mais il ne révélera pas les fissures les plus fines."},

{c:'c2',t:'qcm',d:2,q:"Quelle norme fixe les <b>étalons de ressuage</b> servant aux tests de sensibilité des pénétrants ?",
 o:["NF A 09.123","NF A 09.120","NF A89-240","ISO 9712"],
 a:0,
 e:"<b>NF A 09.123</b> — étalons de ressuage. C'est la norme des <b>plaquettes jumelles Nichrome TESCO</b>, de la <b>cale européenne ISO 3452-3 type 2</b> et de la <b>plaque PSM5</b> cités au 2.6."},

{c:'c2',t:'qcm',d:3,q:"Sur les <b>plaquettes jumelles Nichrome TESCO</b>, quel est le rapport largeur/profondeur des défauts artificiels ?",
 o:["1/20","1/2","1/5","1/100"],
 a:0,
 e:"<b>largeur / profondeur = 1/20</b>. Des défauts calibrés très étroits et profonds, c'est-à-dire le cas <i>difficile</i> : on vérifie ainsi la capacité du pénétrant à entrer dans une fissure fine et à en ressortir."},

{c:'c2',t:'qcm',d:3,q:"Quelles sont les <b>dimensions</b> des plaquettes jumelles Nichrome TESCO données dans le cours ?",
 o:["100 mm × 35 mm","50 mm × 20 mm","200 mm × 70 mm","20 mm × 20 mm"],
 a:0,
 e:"<b>100 mm de long × 35 mm de large</b>, avec des défauts de profondeurs croissantes. On les appelle « jumelles » parce qu'elles vont par paire : une plaquette pour le pénétrant de référence, l'autre pour le pénétrant à qualifier, contrôlées en même temps et comparées."},

{c:'c2',t:'qcm',d:2,q:"Pourquoi les plaquettes étalons sont-elles utilisées par <b>paires</b> (« jumelles ») ?",
 o:["Pour comparer dans les mêmes conditions le pénétrant de référence et le pénétrant à qualifier",
    "Pour doubler la surface contrôlée","Pour tester deux températures","Parce que la norme impose deux opérateurs"],
 a:0,
 e:"La sensibilité d'un pénétrant n'a de sens que <b>par comparaison</b>, et dans des conditions rigoureusement identiques (même opérateur, même temps, même lumière). D'où les plaquettes jumelles."},

{c:'c2',t:'qcm',d:3,i:'etalons-ressuage',q:"La <b>plaque PSM5</b> comporte deux zones. Lesquelles ?",
 o:["Une partie sablée de rugosité précise, et une partie chromée avec des étoiles de tailles différentes dues à des impacts",
    "Une partie peinte et une partie nue",
    "Une partie ferromagnétique et une partie amagnétique",
    "Une partie chauffée et une partie refroidie"],
 a:0,
 e:"La <b>partie sablée</b> (rugosité calibrée) teste l'aptitude au <b>rinçage</b> : un pénétrant qui se rince mal laissera un fond coloré. La <b>partie chromée avec étoiles</b> (fissures en étoile créées par impacts, de tailles croissantes) teste la <b>détectabilité</b>. Une seule plaque évalue donc les deux qualités opposées d'un pénétrant."},

{c:'c2',t:'qcm',d:2,i:'etalons-ressuage',q:"La <b>cale européenne</b> utilisée en ressuage est définie par&nbsp;:",
 o:["ISO 3452-3 type 2","NF A89-230","ISO 9712","NF EN 1714"],
 a:0,
 e:"<b>ISO 3452-3 type 2</b>. La série ISO 3452 est la série normative du ressuage ; la partie 3 traite des <b>blocs d'essai de référence</b>."},

{c:'c2',t:'qcm',d:1,q:"Sous quelle lumière observe-t-on un pénétrant <b>fluorescent</b> ?",
 o:["Lumière UV (lumière noire)","Lumière blanche","Lumière rouge","Lumière infrarouge"],
 a:0,
 e:"Fluorescent → <b>UV</b>, en cabine obscurcie : le contraste est énorme (indication jaune-vert éclatante sur fond noir), ce qui explique la meilleure sensibilité. Pénétrant coloré → <b>lumière blanche</b> (rouge sur fond blanc du révélateur)."},

{c:'c2',t:'qcm',d:2,q:"Le phénomène physique qui fait <b>ressortir</b> le pénétrant dans le révélateur est&nbsp;:",
 o:["La capillarité","La convection","L'induction magnétique","L'effet piézoélectrique"],
 a:0,
 e:"<b>Capillarité</b>, dans les deux sens : elle fait <i>entrer</i> le pénétrant dans la fissure pendant le temps de pénétration, puis le fait <i>ressortir</i> dans la couche poreuse du révélateur pendant le temps de révélation. D'où le nom « ressuage » : la pièce « ressue »."},

{c:'c2',t:'qcm',d:2,q:"À quoi sert précisément le <b>révélateur</b> ?",
 o:["Il aspire le pénétrant resté dans le défaut et étale l'indication pour la rendre visible",
    "Il dissout le pénétrant en excès","Il magnétise la pièce","Il sèche la pièce"],
 a:0,
 e:"Le révélateur est une poudre blanche très fine et poreuse. Il joue deux rôles : <b>pompe capillaire</b> (il extrait le pénétrant du défaut) et <b>fond contrasté</b> (blanc, pour faire ressortir le rouge ou le fluorescent). Il <b>élargit</b> aussi l'indication, ce qui la rend visible."},

{c:'c2',t:'vf',d:2,q:"Le ressuage permet de détecter des défauts <b>sous-cutanés</b> (non débouchants).",
 a:1,
 e:"Faux — c'est la limitation n°1 du chapitre. <b>Seuls les défauts débouchants</b> sont détectables : si la fissure n'est pas ouverte en surface, le pénétrant ne peut pas y entrer. Pour du sous-cutané sur acier, il faut la <b>magnétoscopie</b>."},

{c:'c2',t:'vf',d:2,q:"Le ressuage n'est applicable qu'aux matériaux métalliques.",
 a:1,
 e:"Faux. Le cours montre au 2.9 des exemples d'images obtenues <b>sur pièces en matériaux composites</b>, en pénétrant coloré sous lumière blanche et en fluorescent sous UV. La seule contrainte est la <b>compatibilité chimique</b> et le fait que le matériau ne soit pas poreux (sinon tout ressue)."},

{c:'c2',t:'vf',d:1,q:"Il faut <b>sécher la pièce</b> entre le rinçage et l'application du révélateur.",
 a:0,
 e:"Vrai : dans la procédure, <b>séchage pièce</b> vient juste après l'élimination du pénétrant et avant l'application du révélateur. De l'eau résiduelle diluerait le révélateur et l'empêcherait de jouer son rôle de pompe capillaire."},

{c:'c2',t:'qcm',d:3,q:"Si on <b>rince trop énergiquement</b> après le temps de pénétration, que risque-t-on ?",
 o:["Vider le pénétrant des fissures fines et ne plus les détecter","Élargir les fissures","Magnétiser la pièce","Rendre le révélateur fluorescent"],
 a:0,
 e:"C'est LE geste critique du ressuage : le rinçage doit enlever l'excès <b>de surface</b> sans extraire le pénétrant piégé dans le défaut. Un rinçage trop violent (jet direct, trop long, eau trop chaude) fait disparaître les indications fines. C'est exactement le problème que le <b>post-émulsionnement</b> résout."},

{c:'c2',t:'qcm',d:3,q:"Quel est l'intérêt d'un pénétrant à <b>post-émulsion</b> par rapport à un pré-émulsionné ?",
 o:["Le pénétrant n'est pas rinçable tant qu'on n'a pas appliqué l'émulsifiant : on contrôle finement l'élimination de l'excès, donc la sensibilité",
    "Il sèche plus vite","Il est moins cher","Il ne nécessite pas de révélateur"],
 a:0,
 e:"Pré-émulsionné = l'émulsifiant est déjà dans le pénétrant, il part à l'eau directement (simple mais on risque de sur-rincer). Post-émulsion = on ajoute l'émulsifiant en étape séparée et <b>chronométrée</b> : il n'attaque que la couche superficielle. D'où les deux niveaux hauts du tableau de sensibilité."},

{c:'c2',t:'qcm',d:2,q:"Quel est le <b>domaine d'application</b> du ressuage selon le tableau 1.5 ?",
 o:["Contrôle manuel de tous produits à surface accessible","Contrôle automatique de bandes et tôles","Produits ferromagnétiques uniquement","Tubes et enceintes"],
 a:0,
 e:"<b>Contrôle manuel de tous produits à surface accessible</b> — d'où les points forts (simplicité, faible coût, pas de restriction de matériau) et le point faible (productivité : tout est manuel et il faut attendre)."},

{c:'c2',t:'multi',d:2,q:"Quelles conditions doit remplir une pièce pour être contrôlable par <b>ressuage</b> ?",
 o:["Surface accessible","Défaut débouchant","Pénétrant chimiquement compatible avec le matériau","Matériau ferromagnétique"],
 a:[0,1,2],
 e:"Trois conditions. Le <b>ferromagnétisme n'a rien à voir</b> : c'est la contrainte de la magnétoscopie. Le ressuage est justement la méthode qu'on utilise <i>quand</i> la pièce n'est pas ferromagnétique (aluminium, inox austénitique, composites)."},
/* ══════════════════════════════════════════════════════════
   CHAPITRE 3 — CND PAR ULTRASONS
   ══════════════════════════════════════════════════════════ */

{c:'c3',t:'multi',d:1,q:"Quels <b>types d'ondes</b> le cours distingue-t-il pour la propagation du son dans un milieu continu ?",
 o:["Ondes de compression (longitudinales, OL)","Ondes transversales ou de cisaillement (OT)","Ondes de surface (ondes de Rayleigh, OS)","Ondes de choc supersoniques"],
 a:[0,1,2],
 e:"Trois familles au programme : <b>longitudinale (compression)</b>, <b>transversale (cisaillement)</b> et <b>de surface (Rayleigh)</b>. Leurs vitesses sont différentes dans un même matériau, et c'est justement ce qui permet la conversion de mode à une interface."},

{c:'c3',t:'qcm',d:2,i:'onde-longitudinale',q:"Dans une <b>onde longitudinale</b> (de compression), l'oscillation des particules se fait&nbsp;:",
 o:["Parallèlement à la direction de propagation","Perpendiculairement à la direction de propagation","En cercle autour de l'axe","Uniquement en surface"],
 a:0,
 e:"Longitudinale = <b>oscillation parallèle</b> à la propagation (compressions/dilatations successives, comme un ressort qu'on pousse). Transversale = <b>oscillation perpendiculaire</b> (comme une corde qu'on secoue)."},

{c:'c3',t:'qcm',d:2,i:'ondes-transversales',q:"Dans une <b>onde transversale</b> (de cisaillement), l'oscillation se fait&nbsp;:",
 o:["Perpendiculairement à la direction de propagation","Parallèlement à la direction de propagation","Dans le sens du champ magnétique","Uniquement dans les liquides"],
 a:0,
 e:"<b>Perpendiculairement.</b> Conséquence importante hors programme mais utile : les ondes transversales exigent une rigidité au cisaillement, donc elles ne se propagent pas dans les liquides — c'est pourquoi en immersion on envoie une OL qui se convertit en OT dans l'acier."},

{c:'c3',t:'qcm',d:3,q:"Quelle expression correspond à la vitesse des <b>ondes longitudinales</b> V<sub>OL</sub> ?",
 o:["√[ E/ρ · (1−ν) / ((1+ν)(1−2ν)) ]","√[ E/ρ · 1/(2(1+ν)) ]","√(G/ρ) uniquement","V<sub>OT</sub> · (0,87+1,12ν)/(1+ν)"],
 a:0,
 e:"<b>V<sub>OL</sub> = √[ (E/ρ) · (1−ν) / ((1+ν)(1−2ν)) ]</b>. Le second choix est V<sub>OT</sub>, le quatrième est V<sub>OS</sub>. On te demande de <i>reconnaître</i> la formule, pas de l'appliquer : repère le bloc <b>(1−ν)/((1+ν)(1−2ν))</b>, il n'existe que pour l'onde longitudinale."},

{c:'c3',t:'qcm',d:3,q:"Quelle expression correspond à la vitesse des <b>ondes transversales</b> V<sub>OT</sub> ?",
 o:["√[ E/ρ · 1/(2(1+ν)) ] = √(G/ρ)","√[ E/ρ · (1−ν)/((1+ν)(1−2ν)) ]","λ·f","1/√(πfσµ)"],
 a:0,
 e:"<b>V<sub>OT</sub> = √[ (E/ρ)·1/(2(1+ν)) ] = √(G/ρ)</b>, avec G le module de cisaillement. C'est cohérent : l'onde transversale cisaille la matière, donc elle est gouvernée par le module de <b>cisaillement</b> G, pas par E seul."},

{c:'c3',t:'qcm',d:3,q:"Dans la formule V<sub>OT</sub> = √(G/ρ), que représente <b>G</b> ?",
 o:["Le module de cisaillement","Le module d'Young","Le coefficient de Poisson","La masse volumique"],
 a:0,
 e:"<b>G = module de cisaillement</b> (aussi appelé module de Coulomb ou de rigidité). Dans les formules du cours : <b>E</b> = module d'Young, <b>ν</b> = coefficient de Poisson, <b>ρ</b> = masse volumique."},

{c:'c3',t:'qcm',d:3,q:"Quelle relation donne la vitesse des <b>ondes de surface</b> (Rayleigh) ?",
 o:["V<sub>OS</sub> = V<sub>OT</sub> · (0,87 + 1,12ν)/(1+ν)","V<sub>OS</sub> = V<sub>OL</sub> · (1+ν)","V<sub>OS</sub> = λ·f","V<sub>OS</sub> = √(E/ρ)"],
 a:0,
 e:"<b>V<sub>OS</sub> = V<sub>OT</sub> · (0,87 + 1,12ν)/(1+ν)</b>. Le facteur vaut à peu près 0,9 pour les métaux courants : les ondes de surface sont donc <b>un peu plus lentes que les transversales</b>. Retiens l'ordre général : <b>V<sub>OL</sub> &gt; V<sub>OT</sub> &gt; V<sub>OS</sub></b>."},

{c:'c3',t:'qcm',d:2,q:"Classe les vitesses par ordre <b>décroissant</b> dans un même matériau&nbsp;:",
 o:["V longitudinale > V transversale > V de surface","V de surface > V transversale > V longitudinale","V transversale > V longitudinale > V de surface","Les trois vitesses sont égales"],
 a:0,
 e:"<b>V<sub>OL</sub> &gt; V<sub>OT</sub> &gt; V<sub>OS</sub></b>. Ordre de grandeur pour l'acier : environ 5900 m/s en longitudinal, ~3200 m/s en transversal, ~2900 m/s en surface. Cette hiérarchie explique l'ordre des échos et la conversion de mode."},

{c:'c3',t:'qcm',d:2,i:'polarisation',q:"Dans le cours, la <b>polarisation</b> d'une onde désigne&nbsp;:",
 o:["La direction de vibration des particules","La direction de déplacement des particules (propagation)","L'amplitude du signal","La fréquence de l'onde"],
 a:0,
 e:"Deux définitions à ne pas inverser : <b>propagation</b> = direction de <i>déplacement</i> de l'onde ; <b>polarisation</b> = direction de <i>vibration</i> des particules. Quand les deux coïncident → onde L ; quand elles sont perpendiculaires → onde T."},

{c:'c3',t:'qcm',d:1,q:"La relation entre <b>longueur d'onde</b>, vitesse et fréquence est&nbsp;:",
 o:["λ = V / f","λ = V · f","λ = f / V","λ = V² / f"],
 a:0,
 e:"<b>λ = V/f</b>. Conséquence pratique majeure en CND : à vitesse fixée par le matériau, <b>augmenter la fréquence diminue la longueur d'onde</b>, donc améliore la résolution (on détecte des défauts plus petits) — mais l'atténuation augmente et on pénètre moins profond. Tout le compromis du contrôle US tient là-dedans."},

{c:'c3',t:'qcm',d:2,q:"Si on <b>augmente la fréquence</b> d'un contrôle par ultrasons, à vitesse constante&nbsp;:",
 o:["La longueur d'onde diminue : meilleure résolution, mais plus forte atténuation","La longueur d'onde augmente","La vitesse augmente","Rien ne change"],
 a:0,
 e:"λ = V/f : f ↑ ⇒ λ ↓. On voit des défauts plus fins (la résolution est de l'ordre de λ/2) mais on <b>perd en pénétration</b> car l'atténuation par diffusion croît très vite avec f (en régime de Rayleigh, α ∝ f⁴ !). D'où : <b>pièce épaisse ou atténuante → basse fréquence</b> ; <b>défauts fins près de la surface → haute fréquence</b>."},

{c:'c3',t:'qcm',d:2,q:"Le système mécanique associé à l'amortissement d'une onde est modélisé par&nbsp;:",
 o:["m·d²x/dt² + r·dx/dt + k·x = 0","F = m·a uniquement","P = P₀·exp(−a·x)","Z = ρ·V"],
 a:0,
 e:"C'est l'équation d'un <b>oscillateur amorti</b> : masse m, raideur k du ressort, taux d'amortissement r. Sa solution x(t) = x₀·exp(−ω₀t)·cos(ω₀√(1−ξ²)·t) décrit une <b>oscillation dont l'amplitude décroît exponentiellement</b> — exactement ce qu'on observe sur un signal ultrasonore."},

{c:'c3',t:'qcm',d:2,q:"Dans le modèle masse-ressort-amortisseur, <b>r</b> représente&nbsp;:",
 o:["Le taux d'amortissement de l'amortisseur","La raideur du ressort","La masse suspendue","La fréquence propre"],
 a:0,
 e:"<b>m</b> = masse suspendue, <b>k</b> = constante de raideur du ressort, <b>r</b> = taux d'amortissement. C'est r qui « mange » l'énergie et fait décroître l'amplitude."},

{c:'c3',t:'qcm',d:2,q:"La <b>loi de Lambert</b> pour l'absorption acoustique s'écrit&nbsp;:",
 o:["P(x) = P₀ · exp(−a·x)","P(x) = P₀ · a · x","P(x) = P₀ / (a·x)","P(x) = P₀ · x²"],
 a:0,
 e:"<b>P(x) = P₀·exp(−a·x)</b> : décroissance <b>exponentielle</b> de l'intensité sonore avec la distance parcourue. P₀ = intensité émise, a = constante d'affaiblissement du milieu (dB/m), x = trajet en mètres."},

{c:'c3',t:'qcm',d:2,q:"Dans la loi de Lambert P(x) = P₀·exp(−a·x), que représente <b>a</b> et en quelle unité ?",
 o:["La constante d'affaiblissement du milieu, en dB/m","La distance parcourue, en m","L'amplitude initiale, en volts","L'impédance acoustique, en kg/m²·s"],
 a:0,
 e:"<b>a = constante d'affaiblissement du milieu de propagation, en dB/m.</b> Elle dépend du matériau, de sa microstructure (taille de grain !) et de la fréquence. Le cours donne pour l'acier : <b>5 &lt; a &lt; 50 dB/m</b>."},

{c:'c3',t:'qcm',d:3,i:'attenuation-distance',q:"Quelle plage de constante d'affaiblissement <b>a</b> le cours donne-t-il pour l'<b>acier</b> ?",
 o:["5 < a < 50 dB/m","0,1 < a < 1 dB/m","100 < a < 500 dB/m","a = 1 dB/m"],
 a:0,
 e:"<b>5 &lt; a &lt; 50 dB/m</b> pour l'acier — la fourchette est large car elle dépend beaucoup de la <b>taille de grain</b> et du traitement thermique. Pour comparaison, le cours utilise <b>a = 1 dB/m pour l'eau</b> dans l'exemple du contrôle par immersion : l'eau atténue très peu, c'est ce qui rend l'immersion intéressante."},

{c:'c3',t:'qcm',d:2,q:"L'atténuation exprimée en <b>décibels</b> s'écrit&nbsp;:",
 o:["dB = −20·log₁₀(P/P₀)","dB = −10·log₁₀(P/P₀)","dB = P/P₀ × 100","dB = exp(−P/P₀)"],
 a:0,
 e:"<b>dB = −20·log₁₀(P/P₀)</b> dans le cours. Repères utiles : −6 dB ≈ moitié de l'amplitude, −20 dB = 1/10, −40 dB = 1/100. Le cours rappelle qu'on peut aussi exprimer l'atténuation en % : 100·(P/P₀)."},

{c:'c3',t:'qcm',d:3,i:'champ-proche',q:"La longueur du <b>champ proche</b> N d'une sonde de diamètre d est donnée par&nbsp;:",
 o:["N ≈ d²/(4λ)","N ≈ 4λ/d²","N ≈ d/(4λ)","N ≈ λ²/(4d)"],
 a:0,
 e:"<b>N ≈ d²/4λ.</b> Dans le champ proche (zone de <b>Fresnel</b>), le champ de pression oscille violemment : une même cible y donne des amplitudes très variables, l'interprétation est donc <b>peu fiable</b>. Au-delà de N c'est le champ lointain (<b>Fraunhofer</b>), où l'amplitude décroît régulièrement. On essaie toujours de placer le défaut <b>au-delà</b> du champ proche."},

{c:'c3',t:'qcm',d:3,i:'champ-proche',q:"Dans N ≈ d²/4λ, si on <b>augmente le diamètre</b> du transducteur, la longueur du champ proche&nbsp;:",
 o:["Augmente (proportionnellement au carré du diamètre)","Diminue","Ne change pas","Devient nulle"],
 a:0,
 e:"N ∝ <b>d²</b> : doubler le diamètre <b>quadruple</b> la longueur de champ proche. Une grosse sonde donne un faisceau plus directif mais une zone morte de proximité beaucoup plus longue. Même effet en augmentant la fréquence (λ ↓ ⇒ N ↑)."},

{c:'c3',t:'qcm',d:2,i:'champ-pression',q:"Comment appelle-t-on les deux zones du champ de pression d'une sonde US ?",
 o:["Champ proche (Fresnel) et champ éloigné (Fraunhofer)","Champ direct et champ réfléchi","Zone A et zone B","Champ magnétique et champ électrique"],
 a:0,
 e:"<b>Champ proche = zone de Fresnel</b> (oscillations de la pression, dernier maximum à x = N) ; <b>champ éloigné = zone de Fraunhofer</b> (décroissance régulière, faisceau divergent). Nom à retenir dans les deux sens."},

{c:'c3',t:'qcm',d:3,i:'champ-pression',q:"Le champ de pression sur l'axe d'une sonde de diamètre D suit&nbsp;:",
 o:["P(x)/P₀ = 2·sin[(D²/4λ)·(π/2)·(1/x)]","P(x)/P₀ = exp(−a·x)","P(x)/P₀ = (Z1−Z2)²/(Z1+Z2)²","P(x)/P₀ = λ/f"],
 a:0,
 e:"<b>P(x)/P₀ = 2·sin[(D²/4λ)·(π/2)·(1/x)]</b>. On y retrouve le terme <b>D²/4λ</b>, c'est-à-dire N, la longueur du champ proche : le sinus explique les maxima et minima successifs observés avant N."},

{c:'c3',t:'qcm',d:3,i:'regimes-diffusion',q:"En régime de <b>Rayleigh</b> (λ ≫ 2πd), comment varie le coefficient d'atténuation α ?",
 o:["α ∝ d³·f⁴","α ∝ d·f²","α ∝ d⁻¹","α est constant"],
 a:0,
 e:"<b>Rayleigh : α ∝ d³·f⁴.</b> La dépendance en <b>f⁴</b> est brutale : doubler la fréquence multiplie l'atténuation par 16. C'est pour cela qu'on ne peut pas monter indéfiniment en fréquence pour gagner en résolution. (d = diamètre moyen des discontinuités, typiquement la taille de grain.)"},

{c:'c3',t:'match',d:3,q:"Diffusion des ultrasons — associe chaque <b>régime</b> à sa condition et sa loi.",
 p:[["Rayleigh","λ ≫ 2πd  ⇒  α ∝ d³·f⁴"],["Stochastique","λ ≈ 2πd  ⇒  α ∝ d·f²"],["Diffusion","λ ≪ 2πd  ⇒  α ∝ d⁻¹"]],
 e:"Trois régimes selon la comparaison entre la <b>longueur d'onde λ</b> et la <b>taille des discontinuités d</b> (grains). Plus λ se rapproche de la taille de grain, plus la diffusion devient catastrophique — c'est le problème des aciers austénitiques à gros grains, très difficiles à contrôler aux ultrasons."},

{c:'c3',t:'multi',d:3,i:'signal-attenue',q:"Quels <b>phénomènes physiques</b> le cours cite-t-il comme responsables de l'atténuation (hors diffusion) ?",
 o:["Viscosité","Dislocation","Magnétoélasticité","Capillarité"],
 a:[0,1,2],
 e:"Trois mécanismes d'<b>absorption</b> : <b>viscosité</b>, <b>dislocation</b> (mouvement des dislocations du réseau cristallin) et <b>magnétoélasticité</b>. À cela s'ajoute la <b>diffusion</b> sur les discontinuités. La capillarité, c'est le ressuage."},

{c:'c3',t:'qcm',d:2,q:"Quelle est la différence entre <b>absorption</b> et <b>diffusion</b> dans l'atténuation d'un faisceau US ?",
 o:["L'absorption convertit l'énergie acoustique en chaleur ; la diffusion la renvoie dans d'autres directions",
    "L'absorption ne dépend pas du matériau","La diffusion n'existe que dans les liquides","Ce sont deux mots pour le même phénomène"],
 a:0,
 e:"<b>Absorption</b> = l'énergie est <i>perdue</i>, dissipée en chaleur (viscosité, dislocations, magnétoélasticité). <b>Diffusion</b> = l'énergie est <i>détournée</i> par les hétérogénéités (grains) : elle ne revient pas au capteur et crée en plus du <b>bruit de structure</b> qui noie les petits échos."},

{c:'c3',t:'qcm',d:2,i:'snell',q:"La <b>loi de Snell</b> appliquée aux ultrasons s'écrit&nbsp;:",
 o:["sin α₁/V<sub>OL1</sub> = sin α₂/V<sub>OL2</sub> = sin α₃/V<sub>OT3</sub>","α₁ = α₂ = α₃","V₁·sin α₁ = V₂·sin α₂","sin α₁ · sin α₂ = V₁/V₂"],
 a:0,
 e:"<b>sin α / V = constante</b> pour tous les rayons réfléchis et réfractés à une interface. La conséquence essentielle : une <b>seule</b> onde incidente donne à la fois des ondes réfléchies et réfractées, <b>longitudinales ET transversales</b>, chacune à son propre angle. C'est la <b>conversion de mode</b>."},

{c:'c3',t:'qcm',d:3,i:'snell',q:"Pour une interface <b>eau / acier</b>, quel angle limite le cours donne-t-il pour une <b>onde incidente longitudinale</b> ?",
 o:["18°","28°","45°","90°"],
 a:0,
 e:"Le cours donne deux angles limites pour eau/acier : <b>α₁ = 18° avec onde incidente OL</b> et <b>α₁ = 28° avec onde incidente OT</b>. Au-delà du premier angle limite, l'onde longitudinale réfractée disparaît : il ne reste dans l'acier que l'onde <b>transversale</b> — c'est le principe du <b>traducteur d'angle</b>."},

{c:'c3',t:'qcm',d:3,i:'snell',q:"Pour l'interface eau/acier, l'angle limite avec <b>onde incidente transversale</b> est&nbsp;:",
 o:["28°","18°","38°","58°"],
 a:0,
 e:"<b>28°.</b> Retiens le couple <b>18° / 28°</b> : 18° pour OL incidente, 28° pour OT incidente. Entre ces deux angles, on travaille en <b>onde transversale pure</b> dans l'acier, ce qui est la configuration normale du contrôle de soudures au traducteur d'angle."},

{c:'c3',t:'qcm',d:2,i:'reflexion-interface',q:"À incidence <b>normale</b> (α = 0°), le pouvoir de réflexion d'une interface vaut&nbsp;:",
 o:["I<sub>R</sub>/I<sub>x</sub> = (Z1 − Z2)² / (Z1 + Z2)²","(Z1 + Z2)²/(Z1 − Z2)²","Z1/Z2","(Z1 − Z2)/(Z1 + Z2)"],
 a:0,
 e:"<b>R = (Z1−Z2)²/(Z1+Z2)²</b>. Tout le contrôle US repose là-dessus : plus les deux impédances sont <b>différentes</b>, plus on renvoie d'énergie — donc plus l'écho est fort. Deux milieux d'impédances voisines ne donnent presque pas d'écho (c'est pourquoi un collage « intime » est quasi invisible)."},

{c:'c3',t:'qcm',d:2,q:"L'<b>impédance acoustique</b> d'un milieu, dans le cas d'une onde plane, vaut&nbsp;:",
 o:["Z = ρ · V","Z = ρ / V","Z = V / ρ","Z = ρ · V²"],
 a:0,
 e:"<b>Z = ρ·V</b> (masse volumique × vitesse de l'onde), en kg/m²·s. C'est la grandeur qui gouverne <b>combien d'énergie se réfléchit</b> à une interface — l'analogue acoustique de l'impédance électrique."},

{c:'c3',t:'qcm',d:2,q:"Quelle est l'<b>unité</b> de l'impédance acoustique Z = ρ·V ?",
 o:["kg/m²·s","kg/m³","m/s","dB/m"],
 a:0,
 e:"ρ en <b>kg/m³</b> × V en <b>m/s</b> = <b>kg/(m²·s)</b>. Valeurs du cours : Z<sub>eau</sub> = 1,483·10⁶ et Z<sub>acier</sub> = 46,61·10⁶ kg/m²·s — un facteur ~31 entre les deux, d'où un énorme écho à l'interface eau/acier."},

{c:'c3',t:'qcm',d:3,q:"Dans l'exemple d'application du cours (contrôle par <b>immersion</b>), quelles valeurs sont données pour l'eau ?",
 o:["V<sub>OL</sub> = 1483 m/s et ρ = 1000 kg/m³","V<sub>OL</sub> = 5900 m/s et ρ = 7900 kg/m³","V = 340 m/s et ρ = 1,2 kg/m³","V = 3200 m/s et ρ = 2700 kg/m³"],
 a:0,
 e:"<b>Eau : 1483 m/s, 1000 kg/m³ → Z = 1,483·10⁶.</b> <b>Acier : 5900 m/s, 7900 kg/m³ → Z = 46,61·10⁶.</b> Ces quatre nombres sont ceux de l'exemple chiffré du cours, ils valent la peine d'être mémorisés."},

{c:'c3',t:'qcm',d:3,q:"Dans l'exemple du cours (immersion, 100 mm d'eau, a = 1 dB/m), quelle part de l'énergie est <b>réfléchie</b> à l'interface eau/acier ?",
 o:["Environ 79,6 %","Environ 10,9 %","Environ 50 %","Environ 90,5 %"],
 a:0,
 e:"Déroulé de l'exemple : atténuation dans l'eau → I<sub>x</sub> = 90,48 % ; réflexion à l'interface → <b>I<sub>R</sub> = 79,6 %</b> ; transmis dans l'acier → <b>I<sub>T</sub> = I<sub>x</sub> − I<sub>R</sub> = 10,89 %</b>. Moralité : <b>seulement ~11 % de l'énergie entre réellement dans la pièce</b> — d'où l'importance du couplant et des gains élevés."},

{c:'c3',t:'qcm',d:3,q:"Toujours dans cet exemple, combien d'énergie est finalement <b>transmise</b> dans l'acier ?",
 o:["10,89 %","79,6 %","90,48 %","100 %"],
 a:0,
 e:"<b>I<sub>T</sub> = 10,89 %.</b> Le rapport énorme entre Z<sub>eau</sub> et Z<sub>acier</sub> fait que l'interface se comporte presque comme un miroir. C'est exactement pour cela qu'on ne contrôle <b>jamais</b> aux ultrasons sans couplant : avec de l'air entre la sonde et la pièce, la réflexion serait de ~100 % et rien n'entrerait."},

{c:'c3',t:'qcm',d:2,q:"Pourquoi faut-il un <b>couplant</b> (gel, eau, huile) entre la sonde et la pièce ?",
 o:["Parce que l'énorme écart d'impédance acoustique entre l'air et le métal réfléchirait la quasi-totalité de l'énergie",
    "Pour refroidir la sonde","Pour éviter de rayer la pièce","Pour polariser l'onde"],
 a:0,
 e:"Une lame d'air, même très fine, a une impédance ridiculement faible devant celle de l'acier : avec (Z1−Z2)²/(Z1+Z2)² ≈ 1, la réflexion est quasi totale. Le couplant remplace l'air par un milieu d'impédance intermédiaire. Le cours liste d'ailleurs le <b>couplage</b> comme point faible des ultrasons."},

{c:'c3',t:'qcm',d:2,i:'us-reflexion',q:"En méthode par <b>réflexion</b> (écho), la relation entre la profondeur d du défaut, la vitesse V et le temps t est&nbsp;:",
 o:["2d = V · t","d = V · t","d = V / t","d = 2V · t"],
 a:0,
 e:"<b>2d = V·t</b> : le facteur 2 vient de l'<b>aller-retour</b> de l'onde (sonde → défaut → sonde). Oublier ce 2 est l'erreur classique — on trouve alors une profondeur double de la réalité."},

{c:'c3',t:'qcm',d:2,i:'us-transmission',q:"Dans la méthode par <b>transmission</b> (montage tandem), que se passe-t-il si le défaut est <b>plus grand</b> que le diamètre de la sonde ?",
 o:["Perte totale du signal","Simple diminution de l'amplitude","Le signal double","Aucun effet"],
 a:0,
 e:"Le cours l'écrit explicitement : <b>perte de signal si défaut &gt; Ø sonde</b> (l'ombre acoustique couvre tout le récepteur) ; <b>diminution d'amplitude si défaut &lt; Ø sonde</b> (une partie du faisceau passe encore à côté)."},

{c:'c3',t:'qcm',d:2,i:'us-transmission',q:"Dans un montage en <b>transmission</b>&nbsp;:",
 o:["L'émetteur et le récepteur sont deux sondes distinctes placées de part et d'autre de la pièce",
    "Une seule sonde émet et reçoit","On mesure le temps de vol aller-retour","On n'a pas besoin de couplant"],
 a:0,
 e:"Transmission (<b>montage tandem</b>) = <b>émetteur d'un côté, récepteur de l'autre</b>. Avantage : on ne dépend pas de l'orientation du défaut, on mesure juste ce qui manque. Inconvénients : il faut <b>accéder aux deux faces</b>, et on n'a <b>aucune information de profondeur</b> — contrairement à la méthode par réflexion."},

{c:'c3',t:'qcm',d:2,i:'scan-a',q:"Quel mode d'affichage correspond à cette courbe — <b>amplitude en fonction de la distance (profondeur)</b> ?",
 o:["A-Scan","B-Scan","C-Scan","D-Scan"],
 a:0,
 e:"<b>A-Scan</b> : la représentation de base, <b>amplitude vs distance/temps de vol</b>. C'est ce qu'on lit sur un appareil de chantier : écho d'entrée, écho de défaut, écho de fond."},

{c:'c3',t:'qcm',d:2,i:'scan-b',q:"Quel mode d'affichage correspond à cette image — <b>distance (profondeur) en fonction de la position latérale</b> ?",
 o:["B-Scan","A-Scan","C-Scan","Plan d'impédance"],
 a:0,
 e:"<b>B-Scan</b> : une <b>coupe</b> de la pièce, comme une échographie médicale. On y lit directement la profondeur ET l'extension latérale du défaut."},

{c:'c3',t:'qcm',d:2,i:'scan-c',q:"Quel mode d'affichage correspond à cette cartographie — <b>vue de dessus obtenue par balayage de la surface</b> ?",
 o:["C-Scan","A-Scan","B-Scan","Thermogramme"],
 a:0,
 e:"<b>C-Scan</b> : vue en plan (de dessus) obtenue en balayant la sonde en X-Y, chaque pixel codant l'amplitude. C'est la représentation idéale pour <b>dimensionner la surface</b> d'un délaminage."},

{c:'c3',t:'match',d:2,q:"Associe chaque <b>mode d'affichage</b> US à ce qu'il représente.",
 p:[["A-Scan","Amplitude en fonction de la distance (profondeur)"],
    ["B-Scan","Coupe : profondeur en fonction de la position latérale"],
    ["C-Scan","Vue de dessus (cartographie) obtenue par balayage X-Y"]],
 e:"Mnémo simple : <b>A</b> comme <b>Amplitude</b> (une ligne), <b>B</b> comme <b>coupe verticale</b> (une tranche), <b>C</b> comme <b>Cartographie</b> (vue de dessus)."},

{c:'c3',t:'qcm',d:1,i:'capteur-us',q:"Quel élément du capteur US convertit l'énergie électrique en vibration mécanique (et inversement) ?",
 o:["L'élément piézoélectrique","Le backing material","La wear plate","Le connecteur coaxial"],
 a:0,
 e:"L'<b>élément piézoélectrique</b> : soumis à une tension il se déforme (émission), déformé il génère une tension (réception). Le cours souligne que le transducteur peut <b>à la fois transmettre et recevoir</b> de l'énergie acoustique."},

{c:'c3',t:'multi',d:3,i:'capteur-us-full',q:"Quels éléments composent un capteur ultrasons selon le schéma 3.5 ?",
 o:["Élément piézoélectrique et électrodes","Backing material (amortisseur) et epoxy potting","Wear plate (semelle d'usure) et boîtier","Bobine encerclante"],
 a:[0,1,2],
 e:"Le schéma montre : <b>case</b> (boîtier), <b>epoxy potting</b>, <b>backing material</b>, <b>électrodes</b>, <b>élément piézoélectrique</b>, <b>wear plate</b>, <b>signal wire / ground wire</b> et <b>connecteur coaxial</b>. La <b>bobine encerclante</b> appartient à la magnétoscopie."},

{c:'c3',t:'qcm',d:3,q:"À quoi sert le <b>backing material</b> (matériau d'amortissement) derrière le cristal ?",
 o:["Amortir les vibrations pour raccourcir l'impulsion et améliorer la résolution","Protéger la sonde des rayures","Assurer le couplage acoustique","Produire le champ magnétique"],
 a:0,
 e:"Sans amortisseur, le cristal continuerait à « sonner » longtemps après l'excitation : l'impulsion serait longue et les échos proches se chevaucheraient. Le <b>backing</b> absorbe l'énergie arrière et raccourcit le train d'ondes → meilleure <b>résolution axiale</b>. La <b>wear plate</b>, elle, protège l'usure et participe à l'adaptation d'impédance."},

{c:'c3',t:'vf',d:2,q:"Une même sonde ultrasons peut à la fois émettre et recevoir.",
 a:0,
 e:"Vrai — le cours l'écrit : « <b>le transducteur peut, à la fois, transmettre et recevoir de l'énergie acoustique</b> ». C'est ce qui rend possible le contrôle par <b>réflexion</b> avec une seule sonde (mode pulse-écho)."},

{c:'c3',t:'qcm',d:2,q:"Quel est le principal <b>avantage</b> des ultrasons d'après le tableau 1.5 ?",
 o:["Grande sensibilité et nombreuses méthodes d'auscultation","Faible coût","Absence de couplant","Simplicité d'interprétation"],
 a:0,
 e:"Points forts : <b>grande sensibilité, nombreuses méthodes d'auscultation</b>, et surtout l'accès aux <b>défauts internes</b> avec information de <b>profondeur</b> — ce qu'aucune méthode de surface ne donne. Points faibles : conditions d'essai, interprétation des échos, couplage."},

{c:'c3',t:'multi',d:2,q:"Quels types de défauts les ultrasons détectent-ils (tableau 1.5) ?",
 o:["Défauts internes","Défauts débouchants","Uniquement les défauts de surface","Uniquement dans les matériaux ferromagnétiques"],
 a:[0,1],
 e:"Le tableau indique <b>« défauts internes + défauts débouchants »</b>, sur la « majorité des matériaux », en contrôle manuel ou automatique. C'est la grande polyvalence des US : ils ne sont limités ni au ferromagnétique ni au conducteur."},

{c:'c3',t:'qcm',d:3,q:"Pourquoi un défaut <b>plan</b> (fissure, collage) mal orienté peut-il être manqué en réflexion ?",
 o:["Parce qu'il renvoie l'écho ailleurs que vers la sonde au lieu de le réfléchir vers elle",
    "Parce qu'il n'a pas d'impédance acoustique","Parce qu'il absorbe tous les ultrasons","Parce qu'il est trop grand"],
 a:0,
 e:"Un défaut plan se comporte comme un <b>miroir</b> : s'il n'est pas à peu près perpendiculaire au faisceau, l'énergie repart dans une autre direction et la sonde ne reçoit rien. D'où l'usage des <b>traducteurs d'angle</b> et des contrôles sous plusieurs incidences : on cherche à « éclairer » le défaut de face."},
/* ══════════════════════════════════════════════════════════
   CHAPITRE 4 — CND PAR MAGNÉTOSCOPIE
   ══════════════════════════════════════════════════════════ */

{c:'c4',t:'order',d:2,q:"Remets dans l'ordre les <b>trois étapes du principe</b> de la magnétoscopie (cours 4.1).",
 s:["Application d'un champ d'excitation H","Perturbation du flux et polarisation des deux bords du défaut (champ de fuite)","Révélation du défaut par l'encre magnétique"],
 e:"1° On <b>aimante</b> la pièce. 2° Le défaut, moins perméable que l'acier, <b>dévie les lignes de champ</b> qui sortent de la matière : c'est le <b>champ de fuite</b>, et les deux bords du défaut se comportent comme les pôles d'un petit aimant. 3° Les particules magnétiques de l'encre sont <b>attirées</b> et s'accumulent, dessinant le défaut."},

{c:'c4',t:'qcm',d:1,q:"Quelle est la <b>restriction fondamentale</b> de la magnétoscopie ?",
 o:["La pièce doit être en matériau ferromagnétique","La pièce doit être conductrice","Le défaut doit être interne","La pièce doit être non peinte uniquement"],
 a:0,
 e:"<b>Matériaux ferromagnétiques uniquement</b> — en pratique les aciers (et fontes, nickel, cobalt). On ne peut pas contrôler par magnétoscopie l'aluminium, le cuivre, le titane, les inox austénitiques ni les composites : il n'y a pas de flux à faire fuir."},

{c:'c4',t:'qcm',d:2,i:'magneto-principe',q:"Comment s'appelle le champ qui sort de la matière au droit d'une fissure et qui permet la détection ?",
 o:["Le champ de fuite","Le champ rémanent","Le champ coercitif","Le champ primaire"],
 a:0,
 e:"<b>Champ de fuite</b> : les lignes de champ, gênées par la fissure (qui a une perméabilité quasi nulle, comme l'air), sont obligées de <b>sortir de la pièce</b> et d'y rentrer, créant deux pôles locaux qui attirent la poudre."},

{c:'c4',t:'qcm',d:2,i:'magneto-orientation',q:"Quelle doit être l'<b>orientation du défaut</b> pour être bien détecté en magnétoscopie ?",
 o:["Perpendiculaire aux lignes de champ","Parallèle aux lignes de champ","À 45° des lignes de champ","L'orientation n'a aucune importance"],
 a:0,
 e:"<b>Perpendiculaire aux lignes de champ</b> — c'est écrit tel quel dans le cours. Une fissure <i>parallèle</i> au champ ne le gêne pas, ne crée pas de fuite, et passe inaperçue. Conséquence pratique majeure : on fait toujours <b>deux passes dans deux directions perpendiculaires</b> (aimantation longitudinale puis transversale)."},

{c:'c4',t:'qcm',d:3,q:"Pourquoi faut-il réaliser <b>deux aimantations croisées</b> sur une même pièce ?",
 o:["Parce qu'un défaut parallèle aux lignes de champ ne crée pas de champ de fuite et reste invisible",
    "Pour doubler l'intensité du champ","Pour démagnétiser la pièce","Pour chauffer la pièce uniformément"],
 a:0,
 e:"La détection dépend de l'orientation. Une seule direction d'aimantation laisse donc une <b>famille entière de défauts invisibles</b>. D'où la règle : aimantation <b>longitudinale</b> (bobine, électroaimant) puis <b>transversale/circulaire</b> (passage de courant, conducteur central)."},

{c:'c4',t:'qcm',d:2,i:'magneto-revelation',q:"Par quoi le défaut est-il finalement <b>révélé</b> en magnétoscopie ?",
 o:["L'accumulation de particules magnétiques (encre magnétique) attirées par le champ de fuite",
    "Un pénétrant coloré","Un rayonnement infrarouge","Une variation d'impédance"],
 a:0,
 e:"Par l'<b>attraction de particules magnétiques</b> — le tableau 1.5 résume d'ailleurs le principe de la magnétoscopie par « <b>accumulation de poudre</b> »."},

{c:'c4',t:'qcm',d:3,q:"Parmi ces matériaux, lequel a la <b>susceptibilité magnétique χ la plus élevée</b> d'après le cours ?",
 o:["Fer pur (χ = 100 000)","Acier à 1 % de C (χ = 350)","Acier trempé (χ = 100)","Aluminium (χ = 2,1·10⁻⁵)"],
 a:0,
 e:"Valeurs du cours : <b>fer pur 100 000</b> ≫ <b>acier 1 %C 350</b> &gt; <b>acier trempé 100</b> ≫ <b>aluminium 2,1·10⁻⁵</b> &gt; <b>cuivre −0,94·10⁻⁵</b>. Retiens surtout l'<b>écart d'échelle colossal</b> entre ferromagnétiques et non-ferromagnétiques : c'est la raison physique de la restriction de la méthode."},

{c:'c4',t:'qcm',d:3,q:"Le <b>cuivre</b> a une susceptibilité χ = −0,94·10⁻⁵ (négative). Il est donc&nbsp;:",
 o:["Diamagnétique","Paramagnétique","Ferromagnétique","Antiferromagnétique"],
 a:0,
 e:"χ <b>négatif ⇒ diamagnétique</b> : le matériau s'oppose légèrement au champ appliqué. Le cours le rappelle au 4.2 : « si le matériau testé n'est ni <b>diamagnétique (cuivre)</b>, ni <b>paramagnétique (aluminium)</b>, on a B = µ₀µ<sub>r</sub>H »."},

{c:'c4',t:'qcm',d:3,q:"L'<b>aluminium</b> (χ = +2,1·10⁻⁵) est cité dans le cours comme exemple de matériau&nbsp;:",
 o:["Paramagnétique","Diamagnétique","Ferromagnétique","Supraconducteur"],
 a:0,
 e:"χ <b>positif mais minuscule ⇒ paramagnétique</b>. En pratique, para- et diamagnétiques sont tous deux qualifiés d'« <b>amagnétiques</b> » dans le chapitre 5 : ils ne sont pas contrôlables en magnétoscopie."},

{c:'c4',t:'qcm',d:2,q:"L'<b>aimantation</b> d'une pièce s'écrit&nbsp;:",
 o:["M = χ · H","M = µ₀ · H","M = B / H","M = H₀ − H"],
 a:0,
 e:"<b>M = χ·H</b>, où χ est la susceptibilité magnétique. Le champ résultant dans la pièce est ensuite <b>H = H₀ + M</b> (champ externe + aimantation)."},

{c:'c4',t:'qcm',d:3,q:"Le <b>champ résultant</b> dans une pièce placée dans un champ d'excitation externe vaut&nbsp;:",
 o:["H = H₀ + M","H = H₀ − M","H = H₀ · M","H = M / H₀"],
 a:0,
 e:"<b>H = H₀ + M</b> : le champ externe H₀ (en A/m) est <b>renforcé</b> par l'aimantation M de la pièce. Dans un ferromagnétique, M est énorme devant H₀ — c'est ce qui permet d'obtenir un flux intense avec des ampères-tours raisonnables."},

{c:'c4',t:'qcm',d:2,q:"La relation entre <b>induction B</b> et champ H (matériau ni dia- ni paramagnétique) est&nbsp;:",
 o:["B = µ₀ · µ<sub>r</sub> · H","B = µ₀ / (µ<sub>r</sub>·H)","B = χ · H","B = H₀ + M"],
 a:0,
 e:"<b>B = µ₀·µ<sub>r</sub>·H</b>, avec <b>µ₀ = 4π·10⁻⁷ H/m</b>. Le cours insiste : <b>µ<sub>r</sub> est une fonction de H</b> — la relation n'est pas linéaire, d'où le cycle d'hystérésis et la saturation."},

{c:'c4',t:'qcm',d:2,q:"Quelle est la valeur de la <b>perméabilité du vide</b> µ₀ ?",
 o:["4π·10⁻⁷ H/m","5,7·10⁻⁸ SI","6,6·10⁻³⁴ J·s","1,4·10⁻²³ J/K"],
 a:0,
 e:"<b>µ₀ = 4π·10⁻⁷ Henry/m.</b> Ne pas confondre avec les autres constantes du cours : <b>5,7·10⁻⁸</b> = Stefan-Boltzmann (thermo), <b>6,6·10⁻³⁴</b> = Planck, <b>1,4·10⁻²³</b> = Boltzmann."},

{c:'c4',t:'qcm',d:2,q:"Le lien entre <b>perméabilité relative</b> et <b>susceptibilité</b> est&nbsp;:",
 o:["µ<sub>r</sub> = 1 + χ","µ<sub>r</sub> = χ − 1","µ<sub>r</sub> = χ/µ₀","µ<sub>r</sub> = µ₀·χ"],
 a:0,
 e:"<b>µ<sub>r</sub> = 1 + χ</b>. On en déduit l'autre écriture du cours : <b>B = µ₀·(M + H)</b>. Pour un matériau amagnétique χ ≈ 0 donc µ<sub>r</sub> ≈ 1 — valeur qu'on retrouvera dans le plan d'impédance normé des courants de Foucault."},

{c:'c4',t:'vf',d:3,q:"Dans la relation B = µ₀·µ<sub>r</sub>·H, la perméabilité relative µ<sub>r</sub> est une <b>constante</b> du matériau.",
 a:1,
 e:"Faux : le cours note explicitement que « <b>µ<sub>r</sub> est une fonction de H</b> ». C'est toute la difficulté du magnétisme des ferromagnétiques : non-linéarité, saturation, et <b>hystérésis</b> (le matériau garde la mémoire de son histoire magnétique — d'où la nécessité de démagnétiser après contrôle)."},

{c:'c4',t:'qcm',d:2,i:'domaines-magnetiques',q:"Qu'appelle-t-on un <b>domaine magnétique</b> ?",
 o:["Une région dans laquelle tous les champs magnétiques atomiques sont orientés dans la même direction",
    "La zone de la pièce touchée par l'électroaimant","L'entrefer du circuit magnétique","La zone où se trouve le défaut"],
 a:0,
 e:"Cours 4.2 : chaque atome ferromagnétique est un petit aimant permanent (créé par la <b>rotation et le spin des électrons</b>) ; les atomes voisins s'influencent et s'alignent ; la région où tous sont alignés est le <b>domaine magnétique</b>. Aimanter la pièce, c'est faire grossir les domaines orientés favorablement."},

{c:'c4',t:'qcm',d:3,i:'aimantation-directe',q:"Pour une aimantation par <b>électroaimant</b> ou banc fixe, le cours donne H = (B/µ₀) = N·I / [(1/µ<sub>r</sub>)·(L−e) + e]. Que désigne <b>e</b> ?",
 o:["L'entrefer","L'épaisseur de la pièce","L'énergie du champ","Le nombre de spires"],
 a:0,
 e:"<b>N·I</b> = ampères-tours, <b>L</b> = longueur du circuit magnétique, <b>e</b> = <b>entrefer</b>. L'entrefer (l'air entre les pôles et la pièce) est au dénominateur <b>sans</b> être divisé par µ<sub>r</sub> : il pénalise donc très fortement le champ obtenu. En pratique : <b>bien plaquer les pôles sur la pièce</b>."},

{c:'c4',t:'qcm',d:3,i:'aimantation-conducteur',q:"Pour une aimantation par <b>conducteur central</b> traversé par un courant I, à la distance R&nbsp;:",
 o:["H = I / (2πR)","H = N·I / D","H = I · 2πR","H = N·I / [(1/µ<sub>r</sub>)(L−e)+e]"],
 a:0,
 e:"<b>H = I/(2πR)</b> — c'est le champ créé par un fil rectiligne infini (théorème d'Ampère). Le champ est <b>circulaire</b> autour du conducteur : cette configuration révèle donc les défauts <b>longitudinaux</b>, parallèles à l'axe du tube."},

{c:'c4',t:'qcm',d:3,i:'aimantation-bobine',q:"Pour une <b>bobine encerclante</b> de N spires et de diamètre D&nbsp;:",
 o:["H = N·I / D","H = I/(2πR)","H = B·µ₀","H = N·I·D"],
 a:0,
 e:"<b>H = N·I/D.</b> La bobine crée un champ <b>longitudinal</b> (le long de l'axe de la pièce), donc elle révèle les défauts <b>transversaux</b>. Combinée au conducteur central (champ circulaire), on couvre les deux orientations."},

{c:'c4',t:'match',d:3,q:"Associe chaque <b>méthode d'aimantation</b> à sa formule (cours 4.3).",
 p:[["Électroaimant portatif / banc fixe","H = N·I / [(1/µᵣ)(L−e) + e]"],
    ["Conducteur central ou câble conducteur","H = I / (2πR)"],
    ["Bobine encerclante à N spires","H = N·I / D"]],
 e:"Trois formules, trois configurations. Repère le <b>2π</b> : il signale toujours un champ <b>circulaire</b> autour d'un conducteur. Le <b>D</b> au dénominateur signale la <b>bobine</b>. L'<b>entrefer e</b> signale le <b>circuit magnétique fermé</b> (électroaimant)."},

{c:'c4',t:'multi',d:2,q:"Quelles méthodes d'aimantation le cours classe-t-il comme <b>directes</b> ?",
 o:["Aimantation par champ magnétique (électroaimant, banc fixe)","Génération de champ H par conducteur électrique",
    "Aimantation par passage de courant électrique dans la pièce","Contrôle par sédimentation"],
 a:[0,1],
 e:"Le cours classe en <b>4.3.1 directe par champ magnétique</b> (électroaimant, banc fixe), <b>4.3.2 directe par conducteur électrique</b> (câble, conducteur central), <b>4.3.3 indirecte par passage de courant</b> (bobine encerclante, système à électrodes). Le <b>contrôle par sédimentation</b> concerne les révélateurs (4.5)."},

{c:'c4',t:'qcm',d:3,q:"Avec un courant <b>alternatif</b> en magnétoscopie, quel est le comportement décrit par le cours ?",
 o:["Le flux reste en surface : bonne détectabilité des défauts débouchants ou très faiblement sous-cutanés, avec échauffement de la pièce par courants de Foucault",
    "Le flux pénètre profondément, idéal pour les défauts internes",
    "Aucun échauffement n'est constaté",
    "Il est réservé aux pièces de formes complexes"],
 a:0,
 e:"En alternatif, l'<b>effet de peau</b> confine le flux près de la surface (les courants de Foucault induits s'y opposent en profondeur). Conséquences : <b>échauffement de surface</b> et détection limitée aux défauts <b>débouchants ou très faiblement sous-cutanés</b>. C'est exactement le même phénomène que la profondeur de pénétration δ du chapitre 5."},

{c:'c4',t:'qcm',d:3,q:"Avec un courant <b>continu ou pseudo-continu</b> (redressé triphasé), la magnétoscopie&nbsp;:",
 o:["Est bien adaptée aux pièces de formes simples et permet de détecter des défauts en profondeur",
    "Ne détecte que les défauts débouchants","Provoque un fort échauffement de surface","Est réservée aux pièces composites"],
 a:0,
 e:"Le continu ne subit pas l'effet de peau : le flux pénètre, donc on atteint des <b>défauts en profondeur</b>. Le cours précise qu'il est « bien adapté aux pièces de <b>formes simples</b> » — sur une géométrie tourmentée, le flux continu se répartit mal."},

{c:'c4',t:'match',d:3,q:"Associe chaque <b>type de courant</b> d'aimantation à sa caractéristique.",
 p:[["Courant alternatif","Flux en surface : défauts débouchants ou très faiblement sous-cutanés, échauffement par courants de Foucault"],
    ["Courant continu / pseudo-continu","Pièces de formes simples, détection de défauts en profondeur"]],
 e:"Règle simple : <b>alternatif → surface</b>, <b>continu → profondeur</b>. C'est le même raisonnement qu'en courants de Foucault, où <b>δ diminue quand f augmente</b>."},

{c:'c4',t:'qcm',d:2,i:'revelateurs-magnetiques',q:"Avec quel fond doit-on employer un <b>révélateur noir</b> ?",
 o:["Un fond clair, pour le contraste","Un fond noir","Un fond fluorescent","Sans fond particulier"],
 a:0,
 e:"« Révélateurs <b>noirs</b> à employer avec <b>fond clair</b> (pour contraste) ». On applique souvent une fine couche de peinture blanche contrastante. Les révélateurs <b>fluorescents</b>, eux, s'observent sous <b>lumière noire UV</b>."},

{c:'c4',t:'multi',d:2,q:"Sous quelles <b>formes commerciales</b> trouve-t-on les révélateurs magnétiques ?",
 o:["En aérosols","En poudres à diluer (0,5 à 9 g/l) dans de l'eau ou du pétrole","En poudres sèches (noir, bleu, jaune, rouge)","En gel piézoélectrique"],
 a:[0,1,2],
 e:"Trois formes selon le cours : <b>aérosols</b>, <b>poudres à diluer</b> (concentration variable entre 9 et 0,5 g/l, dans l'eau ou le pétrole selon les produits) et <b>poudres sèches</b> en plusieurs couleurs pour s'adapter au contraste de la pièce."},

{c:'c4',t:'qcm',d:3,q:"À quoi sert le « <b>contrôle par sédimentation</b> » cité au 4.5 ?",
 o:["À vérifier la concentration en particules magnétiques de l'encre","À mesurer le champ rémanent","À contrôler la température du bain","À vérifier l'entrefer"],
 a:0,
 e:"On laisse décanter un volume connu d'encre dans une éprouvette graduée (poire ASTM) et on lit le volume de dépôt : c'est le contrôle de la <b>concentration du bain</b>. Trop peu de particules = indications faibles ; trop = fond sale qui masque les indications."},

{c:'c4',t:'qcm',d:3,i:'temoins-aimantation',q:"Le <b>témoin AFNOR n°1</b> est décrit dans le cours comme&nbsp;:",
 o:["Un carré de 20 mm de côté, avec une surface en étain (Sn) et un jeu de 0,1 mm","Un revêtement en cuivre sur support acier","Une plaque chromée avec des étoiles","Une cale ISO 3452-3"],
 a:0,
 e:"<b>Témoin AFNOR n°1</b> : carré de <b>20 mm de côté</b>, <b>surface en Sn (étain)</b>, <b>jeu de 0,1 mm</b> qui simule un défaut. Le <b>témoin ASME</b>, lui, est un <b>revêtement en cuivre</b> avec des <b>défauts artificiels dans un support en acier</b>. La plaque à étoiles (PSM5) et la cale ISO 3452-3 sont des étalons de <b>ressuage</b>."},

{c:'c4',t:'qcm',d:3,i:'temoins-aimantation',q:"Le <b>témoin ASME</b> se caractérise par&nbsp;:",
 o:["Un revêtement en cuivre et des défauts artificiels dans un support en acier","Une surface en étain avec jeu de 0,1 mm","Une partie sablée et une partie chromée","Des plaquettes jumelles Nichrome"],
 a:0,
 e:"<b>ASME = revêtement Cu + défauts artificiels dans support acier.</b> Les témoins servent à vérifier <i>in situ</i> que le champ est <b>suffisant et bien orienté</b> au point contrôlé — on les pose sur la pièce pendant l'aimantation."},

{c:'c4',t:'qcm',d:2,q:"À quoi sert un <b>indicateur de champ</b> ou un témoin d'aimantation ?",
 o:["Vérifier que l'aimantation est suffisante et correctement orientée à l'endroit contrôlé",
    "Mesurer la profondeur du défaut","Démagnétiser la pièce","Doser l'encre magnétique"],
 a:0,
 e:"On ne « voit » pas le champ : le témoin donne une <b>preuve visuelle</b> que le niveau et la direction d'aimantation permettent bien de révéler un défaut à cet endroit. Sans témoin, un contrôle négatif peut simplement signifier « champ insuffisant »."},

{c:'c4',t:'qcm',d:2,i:'demagnetisation',q:"Comment procède-t-on à la <b>démagnétisation</b> après contrôle ?",
 o:["En appliquant un champ alternatif d'amplitude progressivement décroissante (cycles d'hystérésis de plus en plus petits)",
    "En chauffant la pièce au rouge","En appliquant un champ continu maximal","En plongeant la pièce dans l'eau"],
 a:0,
 e:"Le graphe 4.8 montre des <b>cycles d'hystérésis spiralant vers zéro</b> : on inverse le champ un grand nombre de fois en réduisant l'amplitude à chaque cycle, ce qui ramène B et H à l'origine. En pratique : on fait passer la pièce lentement dans une bobine alimentée en alternatif, ou on décroît le courant par paliers alternés."},

{c:'c4',t:'qcm',d:3,q:"Pourquoi faut-il <b>démagnétiser</b> une pièce après un contrôle par magnétoscopie ?",
 o:["Le magnétisme rémanent attire les particules métalliques et perturbe usinage, soudage, instruments et roulements",
    "Pour effacer les indications de défauts","Pour refroidir la pièce","Pour améliorer la conductivité"],
 a:0,
 e:"Une pièce restée aimantée <b>colle les copeaux et les limailles</b> (usure des roulements, grippage), <b>dévie l'arc</b> en soudage (soufflage magnétique) et <b>perturbe</b> les instruments embarqués. La démagnétisation fait partie intégrante de la procédure."},

{c:'c4',t:'vf',d:2,q:"La magnétoscopie permet de détecter des défauts <b>sous-cutanés</b>.",
 a:0,
 e:"Vrai. C'est sa supériorité sur le ressuage : le tableau 1.5 indique « <b>défauts fins débouchants ET sous-cutanés</b> ». Le champ de fuite peut sortir de la pièce même si la fissure n'affleure pas — à condition qu'elle ne soit pas trop profonde."},

{c:'c4',t:'vf',d:1,q:"On peut contrôler une pièce en <b>aluminium</b> par magnétoscopie.",
 a:1,
 e:"Faux. L'aluminium est <b>paramagnétique</b> (χ = 2,1·10⁻⁵, pratiquement nul) : il ne canalise pas le flux, donc aucun champ de fuite exploitable. Pour une pièce en alu, on passera au <b>ressuage</b> (défaut débouchant) ou aux <b>courants de Foucault</b> (l'alu est un excellent conducteur)."},

{c:'c4',t:'qcm',d:2,q:"Quelles pièces le cours illustre-t-il au 4.7 « exemples <b>sans imagerie</b> » ?",
 o:["Le contrôle de câbles / torons par flux de fuite (téléphériques, remontées mécaniques)",
    "Des aubes de turbine au ressuage","Des tubes d'échangeur aux ultrasons","Des connexions électriques en thermographie"],
 a:0,
 e:"Le cours montre une tête de contrôle magnétique enserrant un <b>câble</b> : les ruptures de fils internes créent un champ de fuite détecté par des capteurs, <b>sans image</b> — on lit un signal. C'est la méthode « <b>détection de flux de fuite</b> » du tableau 1.5 (point faible : fragilité des sondes)."},

{c:'c4',t:'qcm',d:3,q:"Quelle est la différence entre <b>magnétoscopie</b> et <b>détection de flux de fuite</b> (tableau 1.5) ?",
 o:["La magnétoscopie révèle par accumulation de poudre (image) ; la détection de flux de fuite mesure la distorsion du flux avec un capteur (signal)",
    "Ce sont deux noms de la même méthode","La première s'applique à l'aluminium","La seconde utilise un pénétrant"],
 a:0,
 e:"Même physique (le champ de fuite), deux <b>révélations</b> différentes : <b>poudre</b> → on voit un dessin ; <b>capteur magnétique</b> (sonde à effet Hall, bobine) → on lit un signal, automatisable. D'où les points forts « sensibilité, automatisation » pour la seconde."},

{c:'c4',t:'qcm',d:3,q:"Quelle est l'unité du champ d'excitation <b>H</b> ?",
 o:["A/m (ampère par mètre)","Tesla","Henry","Weber"],
 a:0,
 e:"<b>H en A/m</b> (le cours l'écrit : « champ d'excitation externe à la pièce : H₀ (A/m) »). L'<b>induction B</b> est en <b>tesla</b>, la perméabilité µ₀ en <b>H/m</b> (henry par mètre)."},
/* ══════════════════════════════════════════════════════════
   CHAPITRE 5 — CND PAR COURANTS DE FOUCAULT
   ══════════════════════════════════════════════════════════ */

{c:'c5',t:'qcm',d:1,q:"Comment dit-on « courants de Foucault » en anglais (terme utilisé dans le cours) ?",
 o:["Eddy currents","Leakage flux","Penetrant testing","Acoustic emission"],
 a:0,
 e:"<b>Eddy currents</b> — littéralement « courants tourbillonnaires », ce qui décrit bien leur allure : ils tournent en boucle sous la sonde. Abréviation normalisée : <b>ET</b> (Eddy current Testing), ou <b>CF</b> en français."},

{c:'c5',t:'order',d:2,i:'cf-principe',q:"Remets dans l'ordre la <b>chaîne physique</b> du contrôle par courants de Foucault.",
 s:["Une bobine alimentée en courant alternatif crée un champ magnétique primaire",
    "Ce champ primaire induit des courants de Foucault dans la pièce conductrice",
    "Les courants de Foucault créent à leur tour un champ magnétique secondaire",
    "Le champ résultant modifie l'impédance de la bobine-sonde",
    "Un défaut perturbe les courants de Foucault et déplace le point de mesure dans le plan d'impédance"],
 e:"Chaîne complète : <b>courant → champ primaire Bp → courants induits → champ secondaire Bs → impédance de la sonde</b>. La grandeur réellement mesurée n'est donc <b>jamais le défaut lui-même</b>, mais l'<b>impédance</b> de la bobine."},

{c:'c5',t:'qcm',d:1,q:"Quelle condition le matériau doit-il remplir pour un contrôle par courants de Foucault ?",
 o:["Être électriquement conducteur","Être ferromagnétique","Être transparent aux UV","Avoir une surface peinte"],
 a:0,
 e:"Il faut pouvoir <b>induire un courant</b> : le matériau doit être <b>conducteur</b>. Les ferromagnétiques conviennent aussi (mais compliquent l'interprétation à cause de µ<sub>r</sub>). Le tableau 1.5 cite d'ailleurs comme point faible des CF : « <b>matériaux non conducteurs</b> ». Sur un composite isolant, la méthode est inopérante."},

{c:'c5',t:'qcm',d:2,i:'cf-fissure',q:"Comment une <b>fissure</b> agit-elle sur les courants de Foucault ?",
 o:["Elle fait obstacle à leur circulation, modifiant le champ secondaire et donc l'impédance de la sonde",
    "Elle augmente la conductivité locale","Elle aimante la pièce","Elle chauffe le matériau"],
 a:0,
 e:"Les courants doivent <b>contourner</b> la fissure : leur trajet s'allonge, leur intensité chute, le champ secondaire Bs change, donc <b>Z de la bobine change</b>. La sensibilité est maximale quand la fissure est <b>perpendiculaire</b> aux lignes de courant."},

{c:'c5',t:'qcm',d:2,q:"L'expression de l'<b>impédance</b> d'une bobine-sonde est&nbsp;:",
 o:["Z = √(L²ω² + R²)","Z = L·ω · R","Z = R/(Lω)","Z = ρ·V"],
 a:0,
 e:"<b>Z = √(L²ω² + R²)</b>. Les deux composantes : <b>X = Lω</b> la <b>réactance</b> (partie inductive) et <b>R</b> la <b>résistance</b> (partie résistive). Le plan d'impédance porte R en abscisse et X en ordonnée. (Z = ρ·V, c'est l'impédance <i>acoustique</i> des ultrasons : ne pas confondre.)"},

{c:'c5',t:'qcm',d:2,q:"Dans Z = √(L²ω² + R²), le terme <b>X = L·ω</b> s'appelle&nbsp;:",
 o:["La réactance","La résistance","La conductance","La susceptance"],
 a:0,
 e:"<b>X = Lω = réactance</b> (partie inductive), avec <b>L</b> l'inductance et <b>ω = 2πf</b> la pulsation. <b>R</b> est la <b>résistance</b> (partie résistive). Ce sont les deux axes du <b>plan d'impédance</b>."},

{c:'c5',t:'qcm',d:2,i:'plan-impedance',q:"Dans le <b>plan d'impédance</b>, que représentent les points Z₀ et Z₁ ?",
 o:["Z₀ = impédance de la sonde dans l'air ; Z₁ = impédance de la sonde sur le matériau conducteur",
    "Z₀ = impédance minimale ; Z₁ = impédance maximale possible",
    "Z₀ = impédance du défaut ; Z₁ = impédance de la pièce saine",
    "Z₀ et Z₁ sont deux fréquences de travail"],
 a:0,
 e:"<b>Z₀ = sonde dans l'air</b> (référence, rien d'induit) ; <b>Z₁ = sonde posée sur le matériau</b>. Le déplacement Z₀ → Z₁ et sa <b>direction</b> contiennent toute l'information : conductivité, perméabilité, distance sonde-pièce (lift-off), présence d'un défaut."},

{c:'c5',t:'qcm',d:3,i:'cf-ferro',q:"Sur un matériau <b>amagnétique</b> (dia ou paramagnétique), quels effets le cours décrit-il ?",
 o:["Le champ secondaire Bs fait décroître la partie inductive de Z, et la dissipation d'énergie provoque un fort accroissement de R",
    "La réactance X augmente fortement","Ni R ni X ne changent","L'impédance devient nulle"],
 a:0,
 e:"Deux effets sur un « amagnétique » : <b>1°</b> le champ secondaire Bs s'oppose au primaire → la <b>partie inductive décroît</b> ; <b>2°</b> les courants induits dissipent de l'énergie par effet Joule → <b>forte augmentation de R</b>. Le point descend et part vers la droite dans le plan d'impédance."},

{c:'c5',t:'qcm',d:3,i:'cf-ferro',q:"Sur un matériau <b>ferromagnétique</b>, quel est l'effet principal de la perméabilité µ<sub>r</sub> > 1 ?",
 o:["Elle augmente l'énergie magnétique, donc la réactance X = Lω augmente",
    "Elle annule la réactance","Elle rend la pièce isolante","Elle supprime les courants de Foucault"],
 a:0,
 e:"Cours 5.2 : <b>1°</b> µ<sub>r</sub> &gt; 1 <b>augmente l'énergie magnétique</b> donc <b>X = Lω augmente</b> ; <b>2°</b> R augmente aussi mais <b>plus faiblement</b>, avec en plus les <b>pertes par hystérésis</b>. Dans le plan d'impédance, Z₁ part donc <b>vers le haut</b> pour un ferromagnétique et <b>vers le bas</b> pour un amagnétique — signatures opposées."},

{c:'c5',t:'match',d:3,i:'cf-ferro',q:"Associe chaque type de matériau à son <b>comportement dans le plan d'impédance</b>.",
 p:[["Matériau amagnétique (alu, cuivre, inox austénitique)","Z₁ descend : la partie inductive décroît et R augmente fortement"],
    ["Matériau ferromagnétique (acier)","Z₁ monte : la réactance X = Lω augmente fortement (µᵣ > 1), R augmente peu, + pertes par hystérésis"]],
 e:"Retiens la géométrie : <b>ferro → vers le haut</b>, <b>amagnétique → vers le bas</b>. C'est le premier réflexe de lecture d'un plan d'impédance, avant même de chercher le défaut."},

{c:'c5',t:'qcm',d:2,q:"La <b>conductivité</b> σ est reliée à la résistivité ρ par&nbsp;:",
 o:["σ = 1/ρ, en Siemens par mètre (S/m)","σ = ρ, en ohm·m","σ = ρ², en S/m","σ = ρ/µ₀"],
 a:0,
 e:"<b>σ = 1/ρ</b>, avec ρ la <b>résistivité en Ω·m</b> et σ la <b>conductivité en S/m</b> (siemens par mètre). Attention à la collision de notations : dans le chapitre ultrasons, <b>ρ</b> désigne la <b>masse volumique</b> ; ici c'est la <b>résistivité</b>."},

{c:'c5',t:'qcm',d:3,i:'cf-conductivite',q:"Sur le plan d'impédance normé du cours, quel matériau a la <b>conductivité la plus élevée</b> ?",
 o:["Le cuivre","Le titane","Le plomb","L'acier fortement allié (inoxydable)"],
 a:0,
 e:"L'ordre de conductivité <b>croissante</b> sur la courbe du cours : <b>titane → acier fortement allié (inox) → plomb → aluminium et alliages → laiton → cuivre</b>. Le <b>cuivre</b> est en bas de la courbe, conductivité maximale. Le cours précise que sur cette courbe <b>µ<sub>r</sub> = 1</b> (matériaux amagnétiques)."},

{c:'c5',t:'qcm',d:3,i:'cf-conductivite',q:"Sur la courbe du plan d'impédance normé (5.3.1), que vaut la perméabilité relative µ<sub>r</sub> ?",
 o:["µ<sub>r</sub> = 1 (matériaux amagnétiques)","µ<sub>r</sub> = 0","µ<sub>r</sub> = 100","µ<sub>r</sub> varie le long de la courbe"],
 a:0,
 e:"Le cours l'annote explicitement : « sur cette courbe, la perméabilité relative <b>µ<sub>r</sub> = 1</b> ». C'est la courbe des <b>matériaux amagnétiques</b>, où seule la conductivité fait varier la position du point."},

{c:'c5',t:'qcm',d:2,q:"Les axes du <b>plan d'impédance normé</b> sont&nbsp;:",
 o:["(R − R₀)/X₀ en abscisse et X/X₀ en ordonnée","R et L","f et σ","B et H"],
 a:0,
 e:"<b>Abscisse : (R − R₀)/X₀ — ordonnée : X/X₀.</b> On normalise par les valeurs à vide (sonde dans l'air) pour rendre les courbes <b>indépendantes de la sonde utilisée</b> et pouvoir comparer des matériaux."},

{c:'c5',t:'qcm',d:3,i:'cf-frequence',q:"Que se passe-t-il sur le plan d'impédance quand on passe d'une fréquence f₁ à une fréquence <b>f₂ > f₁</b> ?",
 o:["Le point de fonctionnement se déplace le long de la courbe : le lieu des impédances change",
    "L'impédance devient nulle","La courbe disparaît","Seule la résistance R₀ change"],
 a:0,
 e:"La fréquence est le <b>paramètre de réglage</b> principal de la sonde : elle déplace le point de travail sur la courbe et, surtout, modifie la <b>profondeur de pénétration δ</b>. On choisit f selon la profondeur du défaut visé et le séparation qu'on veut obtenir entre les signaux (défaut vs lift-off)."},

{c:'c5',t:'qcm',d:2,i:'cf-penetration',q:"La <b>profondeur de pénétration standard</b> δ des courants de Foucault vaut&nbsp;:",
 o:["δ = 1/√(π·f·σ·µ)","δ = √(π·f·σ·µ)","δ = π·f·σ·µ","δ = f/(σ·µ)"],
 a:0,
 e:"<b>δ = 1/√(πfσµ)</b>, avec <b>µ = µ₀·µ<sub>r</sub></b>. Les trois paramètres sont au <b>dénominateur</b> : si f, σ ou µ augmente, δ <b>diminue</b>. C'est l'<b>effet de peau</b>."},

{c:'c5',t:'qcm',d:2,i:'cf-penetration',q:"Comment varie la densité de courant J avec la profondeur z dans la pièce ?",
 o:["J = J₀·exp(−z·√(πfσµ)) : décroissance exponentielle","J augmente linéairement avec z","J est constante dans l'épaisseur","J s'annule brutalement à z = δ"],
 a:0,
 e:"<b>J = J₀·exp(−z(πfσµ)^½)</b> — décroissance <b>exponentielle</b>. À la profondeur z = δ, la densité de courant ne vaut plus que <b>1/e ≈ 37 %</b> de sa valeur en surface. Le courant ne s'annule pas brutalement : il devient simplement négligeable."},

{c:'c5',t:'qcm',d:3,q:"Si on <b>augmente la fréquence</b> f du courant d'excitation, la profondeur de pénétration δ&nbsp;:",
 o:["Diminue","Augmente","Reste constante","Devient infinie"],
 a:0,
 e:"δ = 1/√(πfσµ) : f au dénominateur ⇒ <b>f ↑ ⇒ δ ↓</b>. Règle de travail : <b>haute fréquence → défauts de surface, bonne résolution</b> ; <b>basse fréquence → défauts plus profonds</b>. Exactement la même logique que le courant alternatif/continu en magnétoscopie."},

{c:'c5',t:'qcm',d:3,q:"Pour aller chercher un défaut <b>plus profond</b> en courants de Foucault, il faut&nbsp;:",
 o:["Diminuer la fréquence","Augmenter la fréquence","Augmenter la conductivité du matériau","Augmenter la perméabilité"],
 a:0,
 e:"<b>Baisser f pour gagner en profondeur</b> (δ ∝ 1/√f). σ et µ sont imposés par le matériau, on ne les choisit pas. Le prix à payer : la <b>sensibilité aux petits défauts diminue</b>."},

{c:'c5',t:'qcm',d:3,q:"À profondeur de pénétration donnée, un matériau <b>très conducteur</b> (cuivre) comparé à un matériau peu conducteur&nbsp;:",
 o:["Donne une profondeur de pénétration plus faible","Donne une pénétration plus grande","Ne permet aucun contrôle","N'a aucun effet sur δ"],
 a:0,
 e:"σ est au dénominateur de δ = 1/√(πfσµ) : <b>σ ↑ ⇒ δ ↓</b>. Un cuivre, excellent conducteur, confine les courants tout près de la surface. Et pour un <b>acier ferromagnétique</b> c'est encore pire, car µ<sub>r</sub> peut valoir plusieurs centaines : δ devient minuscule."},

{c:'c5',t:'qcm',d:3,q:"Dans la formule δ = 1/√(πfσµ), que vaut <b>µ</b> ?",
 o:["µ = µ₀ · µ<sub>r</sub>","µ = µ₀ seulement","µ = µ<sub>r</sub> seulement","µ = 1 + χ"],
 a:0,
 e:"<b>µ = µ₀·µ<sub>r</sub></b> — le cours l'écrit explicitement (« avec µ = µ₀·µ<sub>r</sub> »). µ₀ = 4π·10⁻⁷ H/m, et <b>µ<sub>r</sub> = 1 + χ</b>."},

{c:'c5',t:'qcm',d:3,q:"Le cours donne aussi la forme pratique δ = 500/√(f·σ·µ<sub>r</sub>). Quelle est la relation inverse pour f ?",
 o:["f = 250 000 / (δ²·σ·µ<sub>r</sub>)","f = 500/(δ·σ·µ<sub>r</sub>)","f = δ²·σ·µ<sub>r</sub>/250 000","f = 250 000·δ²·σ·µ<sub>r</sub>"],
 a:0,
 e:"En élevant δ = 500/√(fσµ<sub>r</sub>) au carré : δ² = 250 000/(fσµ<sub>r</sub>), d'où <b>f = 250 000/(δ²σµ<sub>r</sub>)</b>. Le <b>250 000 = 500²</b> : c'est la signature de la formule, facile à reconnaître en QCM."},

{c:'c5',t:'qcm',d:2,q:"À la profondeur z = δ, la densité de courant vaut&nbsp;:",
 o:["Environ 37 % de la valeur en surface (J₀/e)","50 % de J₀","10 % de J₀","0 %"],
 a:0,
 e:"exp(−1) = <b>0,368 ≈ 37 %</b>. C'est la définition même de la profondeur de pénétration « standard » : la profondeur à laquelle il ne reste que <b>1/e</b> du courant de surface. À 3δ il ne reste que ~5 %."},

{c:'c5',t:'multi',d:3,q:"Quels <b>paramètres</b> influencent la position du point dans le plan d'impédance ?",
 o:["La conductivité σ du matériau","La perméabilité magnétique µ<sub>r</sub>","La fréquence f du courant d'excitation","La couleur de la pièce"],
 a:[0,1,2],
 e:"Trois paramètres physiques : <b>σ, µ<sub>r</sub>, f</b> — plus, en pratique, la <b>distance sonde/pièce (lift-off)</b> et la <b>géométrie</b>. Toute la difficulté du contrôle CF est de <b>séparer</b> l'effet du défaut de ces effets parasites : c'est pour cela que le tableau 1.5 range « interprétation » parmi les points faibles."},

{c:'c5',t:'qcm',d:3,q:"Quel est l'effet dit de « <b>lift-off</b> » en courants de Foucault ?",
 o:["Une variation d'impédance due à la variation de distance entre la sonde et la pièce","Un défaut sous-cutané","Une perte de conductivité","Un échauffement de la sonde"],
 a:0,
 e:"Si la sonde s'éloigne (peinture, rugosité, main qui tremble), le couplage magnétique diminue et Z varie — <b>même sans défaut</b>. Le lift-off a sa propre direction dans le plan d'impédance : on règle la phase de l'appareil pour que ce signal soit <b>horizontal</b>, et que le signal de défaut en ressorte nettement."},

{c:'c5',t:'multi',d:2,i:'cf-tube',q:"Quelles applications industrielles le cours illustre-t-il pour les courants de Foucault ?",
 o:["Contrôle de tubes avec points de corrosion","Contrôle en ligne et sur chantier","Détection de défauts fins débouchants sur produits métalliques","Contrôle de matériaux composites isolants"],
 a:[0,1,2],
 e:"Le cours montre un <b>tube endommagé</b> avec les signaux obtenus sur plusieurs points de corrosion. Le tableau 1.5 précise le domaine : « <b>contrôle en ligne et sur chantier de tous produits métalliques</b> », points forts <b>sensibilité</b> et <b>automatisation</b>. Sur un composite isolant, en revanche, la méthode ne fonctionne pas."},

{c:'c5',t:'qcm',d:2,q:"Quels sont les <b>points forts</b> des courants de Foucault d'après le tableau 1.5 ?",
 o:["Sensibilité et automatisation","Faible coût et simplicité","Fortes épaisseurs","Contrôle sans contact du béton"],
 a:0,
 e:"<b>Sensibilité + automatisation</b> : la sonde donne un signal électrique exploitable en temps réel, sans consommable, sans couplant — idéal pour le contrôle <b>en ligne</b> à grande cadence (barres, tubes, fils)."},

{c:'c5',t:'qcm',d:2,q:"Quel <b>type de défauts</b> les courants de Foucault détectent-ils principalement (tableau 1.5) ?",
 o:["Les défauts fins débouchants","Les défauts internes profonds","Les délaminations dans les composites","Les inclusions au cœur des pièces forgées"],
 a:0,
 e:"<b>Défauts fins débouchants</b> (et sous-cutanés peu profonds). L'<b>effet de peau</b> limite structurellement la profondeur explorée : pour un défaut au cœur d'une pièce épaisse, il faut passer aux <b>ultrasons</b> ou à la <b>radiographie</b>."},

{c:'c5',t:'vf',d:2,q:"Les courants de Foucault nécessitent un <b>contact</b> et un couplant comme les ultrasons.",
 a:1,
 e:"Faux. Le couplage est <b>électromagnétique</b> : la sonde travaille à faible distance, sans couplant, et même à travers une fine couche de peinture ou de revêtement isolant. C'est un gros avantage pratique sur les ultrasons — mais cette distance (<b>lift-off</b>) doit rester stable pour ne pas parasiter le signal."},

{c:'c5',t:'qcm',d:3,q:"Pourquoi le contrôle CF d'un <b>acier ferromagnétique</b> est-il plus délicat que celui d'un alliage d'aluminium ?",
 o:["Parce que µ<sub>r</sub> est grand et variable : il écrase la profondeur de pénétration et perturbe fortement le signal",
    "Parce que l'acier n'est pas conducteur","Parce que l'acier réfléchit les ultrasons","Parce qu'il faut un couplant"],
 a:0,
 e:"µ<sub>r</sub> peut valoir plusieurs centaines dans un acier, et il <b>varie</b> avec les contraintes, le traitement thermique et le champ appliqué. Résultat : δ = 1/√(πfσµ) devient très faible (on ne voit que la peau) et les <b>variations locales de perméabilité</b> créent un bruit qui peut masquer les défauts. On sature alors parfois le matériau magnétiquement pour ramener µ<sub>r</sub> vers 1."},

{c:'c5',t:'qcm',d:3,q:"Physiquement, pourquoi le champ secondaire Bs <b>s'oppose</b> au champ primaire Bp ?",
 o:["Par la loi de Lenz : les courants induits s'opposent à la cause qui leur donne naissance",
    "Parce que la bobine est enroulée à l'envers","À cause de l'effet Joule","À cause de l'hystérésis"],
 a:0,
 e:"<b>Loi de Lenz.</b> Les courants de Foucault induits créent un champ qui <b>contrarie</b> la variation de flux qui les a créés. C'est ce qui fait <b>chuter la partie inductive</b> de l'impédance quand on pose la sonde sur un matériau amagnétique — et c'est aussi ce qui chauffe la pièce en magnétoscopie à courant alternatif."},
/* ══════════════════════════════════════════════════════════
   CHAPITRE 6 — CND PAR THERMOGRAPHIE INFRAROUGE
   ══════════════════════════════════════════════════════════ */

{c:'c6',t:'multi',d:1,q:"Quels sont les <b>trois modes de transfert de chaleur</b> ? (« il n'existe que trois modes »)",
 o:["Conduction","Convection","Rayonnement","Capillarité"],
 a:[0,1,2],
 e:"<b>Conduction, convection, rayonnement</b> — il n'y en a pas d'autre. La thermographie IR exploite le <b>rayonnement</b>, mais les trois interviennent dans la thermique de la pièce contrôlée."},

{c:'c6',t:'qcm',d:1,q:"La <b>conduction</b> se produit&nbsp;:",
 o:["Quand deux corps de température différente sont en contact, ou entre parties d'un même corps à températures différentes",
    "Par l'intermédiaire d'un fluide en mouvement","Par ondes électromagnétiques","Uniquement dans le vide"],
 a:0,
 e:"<b>Conduction = contact</b>, sans déplacement de matière. Dans les solides et liquides, elle tend à <b>homogénéiser</b> les températures par <b>diffusion</b>. C'est le mécanisme qui « floute » progressivement les images thermiques et limite la résolution en profondeur."},

{c:'c6',t:'multi',d:2,q:"Que retenir de la <b>convection</b> selon le cours ?",
 o:["Le flux thermique passe par un milieu fluide (liquide ou gaz) qui se met en mouvement",
    "Elle fait intervenir la thermodynamique et la mécanique des fluides",
    "Les nombres de Reynolds, Nusselt et Prandtl sont des paramètres importants",
    "Elle existe dans le vide"],
 a:[0,1,2],
 e:"La convection exige un <b>fluide</b> : elle <b>n'existe pas dans le vide</b> (c'est le rayonnement qui, lui, s'en passe). Le cours souligne que la théorie est « assez complexe » et la résolution « délicate » dès qu'on sort des cas d'école (flux laminaire, plaque plane)."},

{c:'c6',t:'multi',d:2,i:'ir-rayonnement',q:"Que retenir du <b>rayonnement</b> ?",
 o:["Émission, absorption et réflexion d'ondes électromagnétiques","Propagation à la vitesse de la lumière",
    "Ne nécessite pas de milieu matériel : existe dans le vide","Nécessite un contact direct"],
 a:[0,1,2],
 e:"Trois caractéristiques clés : ondes <b>électromagnétiques</b>, <b>vitesse de la lumière</b>, <b>pas besoin de milieu</b> (c'est ainsi que le Soleil nous chauffe). C'est ce qui rend la thermographie possible <b>à distance et sans contact</b>."},

{c:'c6',t:'qcm',d:2,q:"Que dit la <b>loi de Kirchhoff</b> (1860) ?",
 o:["Un bon absorbeur est aussi un bon émetteur","Un bon absorbeur est un mauvais émetteur","L'énergie émise varie comme T⁴","λmax·T = constante"],
 a:0,
 e:"<b>Bon absorbeur = bon émetteur</b>, autrement dit <b>α = ε</b> (absorption = émission). C'est la loi fondatrice du corps noir. (T⁴ = Stefan-Boltzmann ; λmax·T = Wien.)"},

{c:'c6',t:'qcm',d:2,q:"La relation de conservation énoncée par Kirchhoff s'écrit&nbsp;:",
 o:["τ (transmission) + α (absorption) + ρ (réflexion) = 1","α + ε = 1","τ = α·ρ","ε = σ·T⁴"],
 a:0,
 e:"<b>τ + α + ρ = 1</b> : tout rayonnement incident est soit transmis, soit absorbé, soit réfléchi. Et <b>α = ε</b>. Pour un corps <b>opaque</b> (τ = 0), il reste <b>émission + réflexion = 1</b> — relation que le cours réutilise pour les pièces réelles."},

{c:'c6',t:'qcm',d:2,q:"Qu'est-ce qu'un <b>corps noir</b> ?",
 o:["Un objet idéal qui absorbe tous les rayonnements incidents, quels que soient la longueur d'onde et l'angle d'incidence",
    "Un corps peint en noir mat","Un corps qui n'émet aucun rayonnement","Un corps à température nulle"],
 a:0,
 e:"Objet <b>idéal</b> : α = 1 pour <b>toute λ et tout angle</b>. Et par Kirchhoff, s'il absorbe tout, il <b>émet aussi de façon maximale</b>. C'est la référence absolue à laquelle on compare tous les corps réels via l'<b>émissivité ε</b>."},

{c:'c6',t:'qcm',d:3,q:"Comment réalise-t-on <b>en pratique</b> un corps noir de référence ?",
 o:["Un four très bien isolé, stabilisé en température, équipé d'un trou de visée de très petite dimension",
    "Une plaque d'acier peinte en noir","Un bloc de graphite à l'air libre","Un miroir en or poli"],
 a:0,
 e:"En théorie, c'est une <b>cavité fermée isotherme</b>. En pratique : un <b>four isolé, stabilisé, avec un petit trou de visée</b> — tout rayon qui entre par le trou rebondit à l'intérieur et n'en ressort quasiment jamais, donc l'ouverture se comporte comme un absorbeur parfait."},

{c:'c6',t:'qcm',d:3,i:'planck',q:"Dans la loi de <b>Planck</b>, que désigne <b>h = 6,6·10⁻³⁴ J·s</b> ?",
 o:["La constante de Planck","La constante de Boltzmann","La constante de Stefan-Boltzmann","La vitesse de la lumière"],
 a:0,
 e:"Les constantes du cours : <b>h = 6,6·10⁻³⁴ J·s</b> (Planck), <b>k = 1,4·10⁻²³ J/K</b> (Boltzmann), <b>σ = 5,7·10⁻⁸ SI</b> (Stefan-Boltzmann), <b>c</b> = vitesse de la lumière. Et <b>T toujours en kelvins</b>."},

{c:'c6',t:'qcm',d:3,q:"Dans la loi de Planck, la constante <b>k = 1,4·10⁻²³ J/K</b> est&nbsp;:",
 o:["La constante de Boltzmann","La constante de Planck","La constante de Stefan-Boltzmann","La perméabilité du vide"],
 a:0,
 e:"<b>k = constante de Boltzmann = 1,4·10⁻²³ J/K</b> (J par kelvin — l'unité te met sur la piste). Piège classique : la confondre avec <b>σ = 5,7·10⁻⁸</b>, la constante de <b>Stefan-Boltzmann</b>, qui porte un nom voisin mais sert à tout autre chose."},

{c:'c6',t:'qcm',d:2,i:'planck',q:"Dans quelle unité la température T doit-elle être exprimée dans les lois de Planck, Wien et Stefan-Boltzmann ?",
 o:["En kelvins (K)","En degrés Celsius","En degrés Fahrenheit","Peu importe"],
 a:0,
 e:"<b>Toujours en kelvins.</b> Ces lois font intervenir des T⁴ et des 1/T : elles n'ont de sens que sur une échelle <b>absolue</b>. Rappel : T(K) = T(°C) + 273,15."},

{c:'c6',t:'qcm',d:2,q:"La <b>relation de Wien</b> s'écrit&nbsp;:",
 o:["λmax = 2898/T (λ en µm, T en K)","λmax = T/2898","λmax = σ·T⁴","λmax = 2898·T"],
 a:0,
 e:"<b>λmax = 2898/T</b> en µm. Elle indique que « <b>plus un corps est chaud, plus son pic d'émission se déplace vers les courtes longueurs d'onde</b> ». C'est pour cela qu'un métal chauffé passe du rouge sombre au blanc éblouissant."},

{c:'c6',t:'qcm',d:3,q:"Pour la <b>peau humaine en bonne santé (305 K)</b>, le cours donne un pic d'émission à&nbsp;:",
 o:["9,5 µm, dans l'infrarouge moyen","37,6 µm, dans l'infrarouge lointain","0,5 µm, dans le visible","2 µm, dans l'infrarouge proche"],
 a:0,
 e:"2898/305 ≈ <b>9,5 µm — infrarouge moyen</b>. C'est précisément pour cela que les caméras de thermographie « <b>ondes longues</b> » (7 à 13/14 µm) sont celles qu'on utilise pour les températures ambiantes et le corps humain."},

{c:'c6',t:'qcm',d:3,q:"Pour l'<b>azote liquide (77 K)</b>, le cours donne un pic à&nbsp;:",
 o:["37,6 µm, dans l'infrarouge lointain","9,5 µm, dans l'infrarouge moyen","1 µm, dans le proche IR","0,7 µm, dans le rouge visible"],
 a:0,
 e:"2898/77 ≈ <b>37,6 µm — infrarouge lointain</b>. Les deux exemples du cours (peau 305 K → 9,5 µm ; azote 77 K → 37,6 µm) illustrent la règle de Wien : <b>plus froid ⇒ pic plus loin dans l'IR</b>."},

{c:'c6',t:'qcm',d:2,i:'stefan-courbe',q:"La <b>loi de Stefan-Boltzmann</b> pour un corps noir s'écrit&nbsp;:",
 o:["W = σ·T⁴ (W/m²)","W = σ·T","W = 2898/T","W = ε·λ·T"],
 a:0,
 e:"<b>W<sub>CN</sub> = σ·T⁴ en W/m²</b>, avec <b>σ = 5,7·10⁻⁸ (SI)</b>. Elle s'obtient en <b>intégrant la formule de Planck sur toutes les longueurs d'onde</b>. La puissance <b>4</b> explique la sensibilité extrême de la mesure : +1 % en température ⇒ +4 % en énergie rayonnée."},

{c:'c6',t:'qcm',d:3,q:"Quelle est la valeur de la constante de <b>Stefan-Boltzmann</b> donnée dans le cours ?",
 o:["5,7·10⁻⁸ (SI)","6,6·10⁻³⁴","1,4·10⁻²³","4π·10⁻⁷"],
 a:0,
 e:"<b>σ = 5,7·10⁻⁸ SI.</b> (Valeur exacte : 5,67·10⁻⁸ W·m⁻²·K⁻⁴.) Ne pas la confondre avec la <b>conductivité σ</b> des courants de Foucault : même lettre, sens totalement différent selon le chapitre."},

{c:'c6',t:'qcm',d:3,q:"D'après le cours, quelle part de l'énergie totale se trouve entre λ = 0 et λ = λmax ?",
 o:["25 %","50 %","75 %","100 %"],
 a:0,
 e:"Seulement <b>25 %</b> : la courbe de Planck est <b>dissymétrique</b>, avec une longue traîne vers les grandes longueurs d'onde. Les <b>trois quarts</b> de l'énergie sont donc rayonnés <b>au-delà</b> de la longueur d'onde du pic."},

{c:'c6',t:'qcm',d:2,i:'spectre-ir',q:"Quelle est la bande dite « <b>ondes courtes</b> » en thermographie industrielle ?",
 o:["De 2 à 5,5 µm","De 7 à 13/14 µm","De 0,4 à 0,8 µm","De 100 µm à 1 mm"],
 a:0,
 e:"<b>Ondes courtes : 2 à 5,5 µm. Ondes longues : 7 à 13/14 µm.</b> Ces deux fenêtres correspondent aux zones où l'<b>atmosphère est transparente</b> ; entre les deux, la vapeur d'eau et le CO₂ absorbent trop pour mesurer à distance."},

{c:'c6',t:'qcm',d:2,i:'spectre-ir',q:"La bande « <b>ondes longues</b> » s'étend de&nbsp;:",
 o:["7 à 13/14 µm","2 à 5,5 µm","0,4 à 0,8 µm","1 à 10 nm"],
 a:0,
 e:"<b>7 à 13/14 µm.</b> C'est la bande la plus utilisée en maintenance industrielle : elle englobe le pic d'émission des objets à température ambiante (λmax ≈ 9,5 µm à 305 K) et souffre moins des reflets solaires que les ondes courtes."},

{c:'c6',t:'qcm',d:2,i:'spectre-ir',q:"Dans le spectre électromagnétique, l'infrarouge se situe&nbsp;:",
 o:["Entre le visible et les micro-ondes","Entre les rayons X et l'ultraviolet","Au-delà des ondes radio","Entre les UV et le visible"],
 a:0,
 e:"Ordre du spectre (λ croissante) : <b>X → UV → visible → IR → micro-ondes → radio</b>. L'IR commence juste après le rouge visible (~0,8 µm) et va jusqu'à ~100 µm."},

{c:'c6',t:'qcm',d:2,q:"Qu'est-ce que l'<b>émissivité</b> ε d'un corps réel ?",
 o:["La fraction de ce qu'émettrait un corps noir porté à la même température","Sa capacité à conduire la chaleur",
    "Sa température de surface","Le rapport entre sa température et 2898"],
 a:0,
 e:"Un corps réel n'émet qu'une <b>fraction</b> de ce qu'émettrait un corps noir à la même température : cette fraction est l'<b>émissivité ε</b>, comprise entre 0 et 1. D'où <b>W = ε·σ·T⁴</b> « (au mieux !) » comme l'écrit le cours."},

{c:'c6',t:'qcm',d:2,q:"Pour un corps réel <b>opaque</b> en infrarouge, quelle relation le cours retient-il ?",
 o:["Émission + réflexion = 1","Émission + transmission = 1","Émission = réflexion","Émission + absorption + transmission = 2"],
 a:0,
 e:"La plupart des matériaux étant <b>opaques en IR</b> (τ = 0), il reste <b>ε + ρ = 1</b>. Conséquence capitale pour la mesure : un corps <b>peu émissif</b> est forcément <b>très réfléchissant</b>, donc la caméra voit surtout le reflet de l'environnement — la mesure devient fausse."},

{c:'c6',t:'match',d:3,i:'emissivite-courbes',q:"Associe chaque <b>type de corps</b> à sa définition (cours 6.3 b).",
 p:[["Corps opaque","Transmission = 0, donc réflexion + émission = 1"],
    ["Corps brillant","Réflexion élevée et émission faible"],
    ["Corps gris","Émission constante sur une bande de longueur d'onde"],
    ["Corps sélectif","Émission, réflexion et transmission varient en fonction de la longueur d'onde"]],
 e:"Quatre définitions à connaître par cœur, elles tombent très souvent. Repère le mot-clé : <b>opaque → τ=0</b> ; <b>brillant → réfléchit</b> ; <b>gris → ε constant</b> ; <b>sélectif → ε varie avec λ</b>."},

{c:'c6',t:'qcm',d:2,i:'emissivite-courbes',q:"Un <b>corps gris</b> se caractérise par&nbsp;:",
 o:["Une émission constante sur une bande de longueurs d'onde","Une émission qui varie fortement avec λ","Une réflexion nulle","Une transmission totale"],
 a:0,
 e:"<b>Corps gris = ε constant</b> sur la bande considérée : sa courbe d'émission a la même forme que celle du corps noir, juste « rabaissée » d'un facteur ε. C'est l'hypothèse de travail des caméras : on entre une valeur d'ε unique."},

{c:'c6',t:'qcm',d:2,i:'emissivite-courbes',q:"Un <b>corps sélectif</b> est un corps dont&nbsp;:",
 o:["L'émission, la réflexion et la transmission varient en fonction de la longueur d'onde",
    "L'émissivité vaut 1","L'émissivité est constante","La température est uniforme"],
 a:0,
 e:"<b>Corps sélectif = ε (et ρ, τ) dépendent de λ</b> — sa courbe est « bosselée ». C'est le cas du verre, des plastiques, de certains gaz : mesurer leur température en IR demande de choisir soigneusement la bande spectrale."},

{c:'c6',t:'qcm',d:3,i:'emissivite-tableau',q:"D'après le tableau du cours, quelle est l'émissivité de l'<b>aluminium brillant</b> à 20 °C ?",
 o:["0,04","0,83 à 0,94","0,65","0,98"],
 a:0,
 e:"<b>Aluminium brillant : ε = 0,04</b> — quasiment un miroir infrarouge, donc <b>impossible à mesurer correctement</b> en thermographie. En revanche, <b>aluminium traité : 0,83 à 0,94</b>. Même métal, un facteur 20 sur l'émissivité selon l'état de surface !"},

{c:'c6',t:'qcm',d:3,i:'emissivite-tableau',q:"Quelle est l'émissivité de la <b>peau humaine</b> (32 °C) selon le tableau ?",
 o:["0,98","0,85","0,65","0,05"],
 a:0,
 e:"<b>Peau humaine : 0,98</b> — presque un corps noir parfait. D'où la fiabilité de la thermographie médicale et des caméras de dépistage de fièvre. Autres valeurs élevées du tableau : <b>cristaux de glace 0,98</b>, <b>verre (>4,5 µm) 0,96</b>, <b>eau liquide 0,96</b>, <b>suie 0,95</b>, <b>ciment sec 0,95</b>."},

{c:'c6',t:'qcm',d:3,i:'emissivite-tableau',q:"Quelle est l'émissivité du <b>cuivre poli</b> (100 °C) et du <b>cuivre très oxydé</b> (20 °C) ?",
 o:["0,05 (poli) et 0,75 à 0,8 (très oxydé)","0,8 (poli) et 0,05 (très oxydé)","0,5 dans les deux cas","0,98 dans les deux cas"],
 a:0,
 e:"<b>Cuivre poli 0,05 → cuivre très oxydé 0,75–0,8.</b> L'oxydation multiplie l'émissivité par ~15. C'est pourquoi le cours note qu'en maintenance électrique la mesure sur métaux polis est « <b>délicate, mieux s'ils sont oxydés</b> »."},

{c:'c6',t:'qcm',d:3,i:'emissivite-tableau',q:"Que constate-t-on dans le tableau sur les <b>films d'huile</b> (30 µm : 0,27 — 130 µm : 0,72 — épais : 0,82) ?",
 o:["L'émissivité augmente avec l'épaisseur du film","L'émissivité diminue avec l'épaisseur","L'épaisseur n'a pas d'effet","L'huile est transparente en IR quelle que soit l'épaisseur"],
 a:0,
 e:"Plus le film est <b>épais</b>, plus il absorbe (donc émet) : ε passe de <b>0,27 à 30 µm</b> à <b>0,82 pour un film épais</b>. Concrètement, une trace d'huile sur une pièce fausse localement la mesure — c'est une source classique de fausse indication."},

{c:'c6',t:'qcm',d:3,i:'emissivite-angle',q:"Comment varie l'émissivité d'un <b>métal poli</b> avec l'angle d'observation ?",
 o:["Elle reste à peu près constante jusque vers 50-60°, puis chute fortement aux grands angles",
    "Elle augmente régulièrement avec l'angle","Elle est constante à tout angle","Elle est maximale à 80°"],
 a:0,
 e:"La courbe du cours montre une émissivité stable de 20° à ~50°, puis une <b>chute nette</b> vers 60-80°. Règle pratique en thermographie : <b>viser le plus perpendiculairement possible</b>, et ne jamais dépasser ~45-60° d'incidence sous peine de sous-estimer la température."},

{c:'c6',t:'multi',d:2,q:"Quels moyens le cours propose-t-il pour <b>connaître l'émissivité</b> d'une pièce ?",
 o:["L'expérience de l'opérateur","Un tableau récapitulatif (avec précaution)","Une peinture de « référence » ou un thermocouple à contact","Une sonde PT100 de référence ou un labo équipé"],
 a:[0,1,2,3],
 e:"Les six moyens listés : <b>expérience</b>, <b>tableau</b> (bonne approximation, attention aux conditions de validité), <b>peinture de référence</b> (par approximations successives), <b>thermocouple à contact</b>, <b>sonde PT100 de référence</b>, <b>laboratoire équipé</b> (méthode scientifique)."},

{c:'c6',t:'qcm',d:2,q:"En <b>maintenance électrique</b>, sur quels éléments la thermographie ne pose-t-elle « pas de problème » ?",
 o:["Câbles, manchons isolants, gaines plastiques, caoutchouc","Métaux polis","Miroirs en or","Aluminium brillant"],
 a:0,
 e:"Les isolants (plastique, caoutchouc) ont une <b>émissivité élevée et stable</b> (~0,9) : la mesure est fiable. En revanche c'est « <b>délicat sur métaux polis</b> » (barres de cuivre, connexions nues) — mieux vaut viser une partie oxydée, ou coller une pastille d'émissivité connue."},

{c:'c6',t:'multi',d:3,i:'camera-rayonnement',q:"Le rayonnement <b>mesuré</b> par une caméra thermique est la somme de&nbsp;:",
 o:["Rayonnement émis par l'objet","Rayonnement réfléchi sur l'objet","Rayonnement atmosphérique","Rayonnement ultrasonore"],
 a:[0,1,2],
 e:"<b>Mesuré = objet + réfléchi + atmosphère.</b> La caméra reçoit tout mélangé ; c'est l'opérateur qui doit renseigner <b>ε</b>, la <b>température réfléchie</b>, la <b>distance</b> et l'<b>humidité</b> pour que le logiciel remonte à la vraie température de l'objet. Une mauvaise saisie de ε est la première cause d'erreur en thermographie."},

{c:'c6',t:'qcm',d:3,i:'camera-champ',q:"La <b>largeur de champ</b> L d'une caméra à la distance D avec un objectif d'angle α vaut&nbsp;:",
 o:["L = 2·D·tan(α/2)","L = D·tan(α)","L = 2·D/tan(α)","L = D²·tan(α/2)"],
 a:0,
 e:"<b>L = 2·D·tan(α/2)</b> — simple trigonométrie : la moitié du champ vaut D·tan(α/2). Plus l'objectif est <b>grand angle</b> (α grand), plus le champ est large… mais plus le plus petit objet mesurable est gros."},

{c:'c6',t:'qcm',d:3,q:"Avec un objectif <b>24°</b> à 1 m, le cours donne un champ de 415 mm et une taille minimale d'objet de&nbsp;:",
 o:["3,87 mm","2 mm","7,74 mm","19,35 mm"],
 a:0,
 e:"Tableau objectif 24° : <b>500 mm → champ 212 mm, objet min 2 mm</b> ; <b>1 m → 415 mm, 3,87 mm</b> ; <b>5 m → 2,075 m, 19,35 mm</b>. Retiens la proportionnalité : la taille minimale mesurable croît <b>linéairement avec la distance</b>."},

{c:'c6',t:'qcm',d:3,q:"Avec un objectif <b>45°</b> à 5 m, quelle est la taille minimale d'un objet permettant une réponse correcte ?",
 o:["38,71 mm","19,35 mm","7,74 mm","3,87 mm"],
 a:0,
 e:"Tableau objectif 45° : 500 mm → 3,87 mm ; 1 m → 7,74 mm ; <b>5 m → 38,71 mm</b>. Comparé au 24° au même endroit (19,35 mm), le grand angle est <b>deux fois moins précis</b> : on voit plus large mais on mesure moins fin."},

{c:'c6',t:'qcm',d:3,q:"Comment définit-on le <b>Spot Size Ratio</b> (SSR) ?",
 o:["1/SSR = taille de l'objet / distance maximum garantissant une mesure correcte","SSR = champ / distance",
    "SSR = ε · σ · T⁴","SSR = 2898/T"],
 a:0,
 e:"<b>1/SSR = taille d'objet / distance max.</b> Un SSR de 250:1 signifie : à 250 mm de distance je peux mesurer un objet de 1 mm. Valeurs du cours : <b>objectif 24° → 500:2 soit 250:1</b> ; <b>45° → 500:3,87 soit 130:1</b> ; <b>12° → 2000:3,92 soit 510:1</b>."},

{c:'c6',t:'qcm',d:3,q:"Quel est l'effet de l'objectif sur le <b>SSR</b> ?",
 o:["Grand angle → SSR baisse ; faible angle → SSR monte","Grand angle → SSR monte","L'objectif n'a aucun effet sur le SSR","Le SSR ne dépend que de la température"],
 a:0,
 e:"<b>Grand angle (45°) : SSR baisse (130:1)</b> — on voit large mais gros. <b>Faible angle (12°) : SSR monte (510:1)</b> — on voit étroit mais fin, c'est le « téléobjectif » qui permet de mesurer une petite connexion depuis le sol."},

{c:'c6',t:'match',d:3,q:"Associe chaque <b>matériau d'optique infrarouge</b> à sa plage de transparence (cours 6.5).",
 p:[["Fluorine (CaF₂)","0,13 à 12 µm — température inférieure à 600 °C"],
    ["Germanium (Ge)","1,8 à 23 µm — température inférieure à 150 °C"],
    ["Silicium (Si)","1,2 à 15 µm — transmission diminuant avec la température"],
    ["Saphir (Al₂O₃)","0,17 à 6,5 µm — produit de synthèse"]],
 e:"Le verre ordinaire est <b>opaque</b> en IR thermique : il faut des matériaux spéciaux pour les objectifs et les hublots. Le <b>germanium</b> est le plus courant en caméra ondes longues (associé à un traitement <b>SiO₂ en ondes courtes</b> et <b>ZnSe en ondes longues</b>)."},

{c:'c6',t:'multi',d:3,q:"Que ne faut-il « pas oublier » à propos des matériaux en infrarouge (fin du 6.5) ?",
 o:["Le film plastique alimentaire est transparent et offre une bonne protection contre les projections",
    "L'aluminium, le cuivre, l'argent et l'or polis avec dépôt d'oxyde de silicium sont de bons miroirs",
    "Le verre ordinaire est parfaitement transparent en infrarouge thermique",
    "Le germanium supporte des températures supérieures à 600 °C"],
 a:[0,1],
 e:"Les deux premières sont dans le cours. Le <b>verre</b> n'est transparent qu'<b>au-delà de 4,5 µm</b> côté émissivité (ε = 0,96) : en pratique il est <b>opaque</b> en IR thermique. Et le germanium est limité à <b>150 °C</b>, pas 600 °C (ça, c'est la fluorine)."},

{c:'c6',t:'qcm',d:2,i:'thermo-connexions',q:"Sur cette image thermique de <b>connexions électriques vissées</b> (29,2 à 50,3 °C), que révèle le point chaud ?",
 o:["Un mauvais serrage ou une oxydation créant une résistance de contact anormale",
    "Un défaut d'isolation du câble","Une surcharge de tout le circuit","Une fissure mécanique"],
 a:0,
 e:"Une connexion desserrée ou oxydée présente une <b>résistance de contact élevée</b> : par effet Joule (P = RI²) elle chauffe. La thermographie la repère <b>sans contact, sous tension, sans arrêter l'installation</b> — c'est l'application phare de la maintenance préventive électrique."},

{c:'c6',t:'qcm',d:2,i:'thermo-roulement',q:"En maintenance mécanique, quel défaut la thermographie révèle-t-elle sur un <b>roulement à billes</b> en fonctionnement ?",
 o:["Un échauffement anormal dû au frottement (défaut de lubrification, usure, mauvais alignement)",
    "Une fissure interne dans la bague","Une inclusion de laitier","Une perte de conductivité"],
 a:0,
 e:"Un roulement qui chauffe signale <b>frottement excessif</b> : manque ou dégradation du lubrifiant, jeu incorrect, désalignement, début d'écaillage. Le cours illustre aussi une <b>injection fonderie</b> (130 à 430 °C)."},

{c:'c6',t:'qcm',d:2,q:"D'après le tableau 1.5, quel type de défaut la thermographie infrarouge détecte-t-elle ?",
 o:["Délaminations et hétérogénéités diverses","Fissures fines débouchantes dans l'acier","Inclusions de laitier en soudure","Défauts internes en forte épaisseur"],
 a:0,
 e:"« <b>Délaminations, hétérogénéités diverses</b> », par « <b>cartographie de perturbations thermiques</b> ». Un délaminage est une barrière thermique : la chaleur s'y accumule et la zone apparaît plus chaude (ou plus froide selon le protocole). Point faible : <b>caractériser</b> précisément le défaut."},

{c:'c6',t:'vf',d:2,q:"Une surface <b>très réfléchissante</b> (métal poli) est facile à mesurer en thermographie.",
 a:1,
 e:"Faux, et c'est même le pire cas. Émission + réflexion = 1 : une surface très réfléchissante a une <b>émissivité très faible</b> (alu brillant ε = 0,04), donc la caméra mesure essentiellement le <b>reflet de l'environnement</b>, pas l'objet. Solutions : scotch mat, peinture de référence, ou viser une zone oxydée."},

{c:'c6',t:'vf',d:1,q:"Le rayonnement thermique peut se propager <b>dans le vide</b>.",
 a:0,
 e:"Vrai : « ne nécessite pas de milieu matériel, <b>existe dans le vide</b> ». C'est la différence fondamentale avec la conduction (contact) et la convection (fluide), et c'est pourquoi la thermographie est une méthode <b>sans contact</b>."},

{c:'c6',t:'qcm',d:3,q:"Pourquoi la thermographie est-elle qualifiée de méthode « <b>sans contact</b> » et non intrusive ?",
 o:["Parce qu'elle ne capte que le rayonnement émis naturellement par la pièce, à distance",
    "Parce qu'elle utilise un couplant liquide","Parce qu'elle aimante la pièce à distance","Parce qu'elle injecte un courant"],
 a:0,
 e:"La caméra <b>reçoit passivement</b> le rayonnement IR. On peut donc contrôler une installation <b>en fonctionnement, sous tension, à distance de sécurité</b> — ce qu'aucune autre méthode du cours ne permet aussi facilement."},
/* ══════════════════════════════════════════════════════════
   CHAPITRE 7 — SYNTHÈSE, CHOIX DE MÉTHODE & PIÈGES
   ══════════════════════════════════════════════════════════ */

{c:'c7',t:'qcm',d:2,q:"Pièce en <b>aluminium</b>, fissure suspectée <b>débouchante</b> en surface. Quelles méthodes du cours sont envisageables ?",
 o:["Ressuage ou courants de Foucault","Magnétoscopie ou ressuage","Magnétoscopie uniquement","Aucune méthode du cours"],
 a:0,
 e:"L'aluminium est <b>paramagnétique</b> → magnétoscopie <b>exclue</b>. Mais il est <b>bon conducteur</b> → courants de Foucault OK. Et le défaut est <b>débouchant</b> → ressuage OK. Raisonnement type examen : d'abord le matériau, ensuite la position du défaut."},

{c:'c7',t:'qcm',d:2,q:"Pièce en <b>acier</b>, on cherche une fissure <b>sous-cutanée</b> (non débouchante, juste sous la peau). Quelle méthode privilégier ?",
 o:["La magnétoscopie","Le ressuage","L'examen visuel","Les tests d'étanchéité"],
 a:0,
 e:"Acier = ferromagnétique ✔ et défaut <b>sous-cutané</b> : c'est exactement le domaine de la <b>magnétoscopie</b>, seule méthode de surface du cours qui voit le sous-cutané. Le <b>ressuage est aveugle</b> ici (défaut non débouchant)."},

{c:'c7',t:'qcm',d:2,q:"Pièce en <b>composite</b> (isolant), on suspecte un <b>délaminage</b> interne. Quelles méthodes ?",
 o:["Thermographie IR, interférométrie holographique, diffusion Compton, ultrasons",
    "Magnétoscopie","Courants de Foucault","Détection de flux de fuite"],
 a:0,
 e:"Un composite n'est <b>ni ferromagnétique ni conducteur</b> : magnétoscopie et courants de Foucault sont <b>tous les deux exclus</b>. Restent les méthodes citées dans le tableau 1.5 pour les délaminations : <b>thermographie</b>, <b>interférométrie holographique</b>, <b>diffusion Compton</b> et les <b>ultrasons</b>."},

{c:'c7',t:'qcm',d:3,q:"Pièce en acier de <b>forte épaisseur</b>, défaut <b>interne</b> à localiser en profondeur. Quelle méthode ?",
 o:["Ultrasons (ou radiographie γ pour les fortes épaisseurs)","Ressuage","Magnétoscopie","Examen visuel"],
 a:0,
 e:"Les méthodes de surface (ressuage, magnétoscopie, CF) sont hors-jeu pour un défaut <b>au cœur</b>. Le tableau 1.5 donne <b>ultrasons</b> (défauts internes, avec mesure de profondeur par 2d = V·t) et <b>radiographie γ</b> (point fort : fortes épaisseurs)."},

{c:'c7',t:'match',d:3,q:"Associe chaque <b>norme</b> citée dans le cours à son objet.",
 p:[["NF A 09.120","Procédure du contrôle par ressuage"],
    ["NF A 09.123","Étalons de ressuage / tests de sensibilité des pénétrants"],
    ["NF A89-230 et NF A89-240","Classement des défauts de soudure"],
    ["ISO 3452-3 type 2","Cale européenne de ressuage"]],
 e:"Quatre références à connaître. Astuce : les <b>09.1xx</b> concernent le <b>ressuage</b> (120 = procédure, 123 = étalons) ; les <b>A89-2xx</b> concernent les <b>soudures</b> ; <b>ISO 3452</b> est la série internationale du ressuage."},

{c:'c7',t:'multi',d:2,q:"Quelles méthodes du cours sont limitées aux <b>défauts débouchants</b> uniquement ?",
 o:["Le ressuage","L'examen visuel","La magnétoscopie","Les ultrasons"],
 a:[0,1],
 e:"Seuls le <b>ressuage</b> et l'<b>examen visuel</b> exigent un défaut ouvert en surface. La <b>magnétoscopie</b> voit aussi le <b>sous-cutané</b> ; les <b>ultrasons</b> voient l'<b>interne</b> et le débouchant."},

{c:'c7',t:'multi',d:2,q:"Quelles méthodes du cours imposent une contrainte forte sur la <b>nature du matériau</b> ?",
 o:["Magnétoscopie : matériau ferromagnétique","Courants de Foucault : matériau conducteur",
    "Ressuage : matériau ferromagnétique","Thermographie : matériau conducteur"],
 a:[0,1],
 e:"Deux contraintes de matériau à retenir absolument : <b>magnétoscopie → ferromagnétique</b>, <b>courants de Foucault → conducteur</b>. Le <b>ressuage</b> et la <b>thermographie</b>, eux, n'imposent rien de tel (le ressuage demande juste une compatibilité chimique et une surface non poreuse)."},

{c:'c7',t:'qcm',d:2,q:"Quelle méthode du cours nécessite un <b>couplant</b> entre le capteur et la pièce ?",
 o:["Les ultrasons","Les courants de Foucault","La thermographie","La magnétoscopie"],
 a:0,
 e:"Seuls les <b>ultrasons</b> — l'écart d'impédance acoustique avec l'air réfléchirait sinon presque toute l'énergie. Le tableau 1.5 liste d'ailleurs « <b>couplage</b> » parmi leurs points faibles. Les CF fonctionnent sans contact (couplage électromagnétique) et la thermographie est totalement sans contact."},

{c:'c7',t:'qcm',d:2,q:"Quelle méthode impose une <b>démagnétisation</b> de la pièce après contrôle ?",
 o:["La magnétoscopie","Le ressuage","Les ultrasons","La thermographie"],
 a:0,
 e:"La <b>magnétoscopie</b> (section 4.8). Le magnétisme rémanent perturberait ensuite l'usinage (copeaux collés), le soudage (soufflage d'arc), les roulements et les instruments de mesure."},

{c:'c7',t:'match',d:3,q:"Associe chaque méthode à la <b>grandeur physique</b> réellement mesurée.",
 p:[["Ultrasons","Temps de vol et amplitude d'une onde acoustique"],
    ["Courants de Foucault","Impédance électrique d'une bobine"],
    ["Magnétoscopie","Accumulation de particules dans un champ de fuite"],
    ["Thermographie IR","Rayonnement infrarouge émis (puis température déduite)"],
    ["Ressuage","Indication colorée ou fluorescente ressuant par capillarité"]],
 e:"Aucune de ces méthodes ne mesure « le défaut » : toutes mesurent un <b>signal intermédiaire</b> qu'il faut ensuite interpréter. C'est la raison pour laquelle l'<b>interprétation</b> revient si souvent dans la colonne « points faibles » du tableau 1.5."},

{c:'c7',t:'qcm',d:3,q:"Quel raisonnement suivre pour <b>choisir une méthode de CND</b> ?",
 o:["Identifier le matériau, la position du défaut (surface / sous-cutané / interne), son orientation, puis croiser avec les contraintes d'accès, de coût et de cadence",
    "Prendre systématiquement la méthode la plus sensible","Prendre toujours la moins chère","Choisir au hasard puis vérifier"],
 a:0,
 e:"C'est la démarche attendue en examen, dans cet ordre : <b>1)</b> nature du matériau (ferro ? conducteur ? isolant ?) — <b>2)</b> position du défaut — <b>3)</b> orientation attendue — <b>4)</b> contraintes industrielles (accès, cadence, coût, sécurité). Le tableau 1.5 sert ensuite à trancher entre les candidates."},

{c:'c7',t:'multi',d:3,q:"Quelles méthodes permettent de connaître la <b>profondeur</b> d'un défaut ?",
 o:["Ultrasons (2d = V·t)","Potentiel électrique (mesure de profondeur de défauts)","Ressuage","Magnétoscopie"],
 a:[0,1],
 e:"Les <b>ultrasons</b> mesurent un temps de vol, donc une profondeur. Le tableau 1.5 attribue explicitement au <b>potentiel électrique</b> la « mesure de profondeur de défauts ». Ressuage et magnétoscopie sont au contraire qualifiés de « <b>peu quantitatifs</b> »."},

{c:'c7',t:'qcm',d:3,q:"Quel <b>point commun physique</b> relie l'effet de peau des courants de Foucault et le comportement du courant alternatif en magnétoscopie ?",
 o:["Dans les deux cas, plus la fréquence est élevée, plus le champ ou le courant reste confiné près de la surface",
    "Les deux utilisent un couplant","Les deux nécessitent un révélateur","Les deux mesurent une température"],
 a:0,
 e:"Même physique : les courants induits s'opposent à la pénétration du champ (loi de Lenz). En CF on la quantifie par <b>δ = 1/√(πfσµ)</b> ; en magnétoscopie on la constate qualitativement (« le flux reste en surface de pièce » en alternatif, avec échauffement par courants de Foucault)."},

{c:'c7',t:'match',d:3,q:"Associe chaque <b>formule</b> à son chapitre / son usage.",
 p:[["λ = V/f","Ultrasons — longueur d'onde"],
    ["Z = ρ·V","Ultrasons — impédance acoustique"],
    ["δ = 1/√(πfσµ)","Courants de Foucault — profondeur de pénétration"],
    ["λmax = 2898/T","Thermographie — relation de Wien"],
    ["W = σ·T⁴","Thermographie — loi de Stefan-Boltzmann"],
    ["H = N·I/D","Magnétoscopie — bobine encerclante"]],
 e:"Repère les <b>signatures</b> : un <b>ρ·V</b> ⇒ acoustique ; un <b>πfσµ</b> ⇒ courants de Foucault ; un <b>2898</b> ⇒ Wien ; un <b>T⁴</b> ⇒ Stefan-Boltzmann ; des <b>ampères-tours</b> ⇒ aimantation."},

{c:'c7',t:'qcm',d:3,q:"Attention au piège de notation : dans le chapitre <b>ultrasons</b>, la lettre <b>ρ</b> désigne&nbsp;:",
 o:["La masse volumique (Z = ρ·V)","La résistivité électrique","La réflexion (Kirchhoff)","La résistance de la bobine"],
 a:0,
 e:"<b>ρ change de sens selon le chapitre</b> : masse volumique (US, Z = ρV), <b>résistivité</b> (CF, σ = 1/ρ), <b>réflexion</b> (thermo, τ + α + ρ = 1). Même chose pour <b>σ</b> : conductivité en CF, constante de Stefan-Boltzmann en thermo. Lis toujours la grandeur <b>dans son contexte</b>."},

{c:'c7',t:'qcm',d:3,q:"Autre piège de notation : la lettre <b>σ</b> désigne la <b>conductivité</b> au chapitre 5 et&nbsp;:",
 o:["La constante de Stefan-Boltzmann au chapitre 6","La masse volumique au chapitre 3","L'émissivité au chapitre 6","La susceptibilité au chapitre 4"],
 a:0,
 e:"<b>σ = conductivité (S/m)</b> en courants de Foucault ; <b>σ = 5,7·10⁻⁸</b>, constante de <b>Stefan-Boltzmann</b>, en thermographie. L'émissivité, c'est <b>ε</b> ; la susceptibilité magnétique, c'est <b>χ</b>."},

{c:'c7',t:'multi',d:2,q:"Quelles méthodes du cours sont réellement <b>sans contact</b> avec la pièce ?",
 o:["Thermographie infrarouge","Hyperfréquences (contrôle sans contact)","Ultrasons par contact direct","Magnétoscopie par électrodes"],
 a:[0,1],
 e:"Le tableau 1.5 attribue explicitement « <b>contrôle sans contact</b> » aux <b>hyperfréquences</b>, et la thermographie est par nature passive et à distance. Les US par contact exigent un couplant ; le système à électrodes de la magnétoscopie impose un contact électrique direct."},

{c:'c7',t:'qcm',d:3,q:"Pourquoi l'<b>orientation</b> du défaut est-elle critique en magnétoscopie <b>et</b> en ultrasons ?",
 o:["Parce qu'un défaut mal orienté ne perturbe pas suffisamment le champ (magnéto) ou ne renvoie pas l'écho vers la sonde (US)",
    "Parce qu'un défaut mal orienté est toujours plus petit","Parce que l'orientation change la nature du matériau","Parce que l'orientation modifie la température"],
 a:0,
 e:"Deux méthodes, un même problème de <b>géométrie</b>. Magnétoscopie : la fissure doit être <b>perpendiculaire aux lignes de champ</b> → deux aimantations croisées. Ultrasons : le défaut plan doit être <b>à peu près perpendiculaire au faisceau</b> → traducteurs d'angle et incidences multiples."},

{c:'c7',t:'qcm',d:2,q:"Quelle méthode a pour point fort la <b>souplesse</b> et pour points faibles la productivité et la fiabilité ?",
 o:["L'examen visuel direct ou assisté","Le contrôle laser","La tomographie X","Les ultrasons"],
 a:0,
 e:"<b>Examen visuel</b> : souplesse (on l'utilise partout, tout de suite, sans équipement) mais productivité et <b>fiabilité</b> faibles (dépendance totale à l'opérateur, à l'éclairage, à la fatigue)."},

{c:'c7',t:'qcm',d:3,q:"Un contrôle donne un résultat <b>négatif</b> (aucune indication). Que peut-on en conclure rigoureusement ?",
 o:["Qu'aucun défaut détectable par cette méthode, dans ses conditions de mise en œuvre, n'a été trouvé",
    "Que la pièce est parfaitement saine","Que la méthode est inadaptée","Que la pièce est conforme à toutes les normes"],
 a:0,
 e:"Un CND ne prouve <b>jamais</b> l'absence de défaut : il prouve l'absence de <b>défaut détectable par cette méthode-là</b>, avec <b>cette sensibilité-là</b> et <b>cette orientation-là</b>. C'est toute la raison d'être des <b>témoins</b> (magnétoscopie) et des <b>étalons</b> (ressuage) : prouver que le contrôle était bien capable de voir quelque chose."},

{c:'c7',t:'match',d:3,q:"Associe chaque <b>étalon ou témoin</b> à la méthode qui l'utilise.",
 p:[["Plaquettes jumelles Nichrome TESCO","Ressuage"],["Plaque PSM5 et cale ISO 3452-3","Ressuage"],
    ["Témoin AFNOR n°1 (carré 20 mm, surface Sn)","Magnétoscopie"],["Témoin ASME (revêtement Cu sur support acier)","Magnétoscopie"]],
 e:"Piège classique de l'examen : ne pas mélanger les deux familles. <b>Ressuage → plaquettes Nichrome, PSM5, cale ISO 3452-3 (norme NF A 09.123)</b>. <b>Magnétoscopie → témoin AFNOR n°1, indicateur de champ, témoin ASME</b>."},

{c:'c7',t:'multi',d:3,q:"Quelles affirmations sur le couple <b>fréquence / profondeur</b> sont correctes ?",
 o:["En ultrasons, augmenter f diminue λ : meilleure résolution mais plus forte atténuation",
    "En courants de Foucault, augmenter f diminue δ : on explore moins profond",
    "En magnétoscopie, le courant alternatif confine le flux en surface",
    "Augmenter la fréquence augmente toujours la profondeur explorée"],
 a:[0,1,2],
 e:"Trois formulations d'une même idée : <b>plus la fréquence monte, plus on reste en surface — et plus on voit fin</b>. Cette règle traverse les chapitres 3, 4 et 5 ; si tu ne devais retenir qu'un principe transversal, ce serait celui-là."},

{c:'c7',t:'qcm',d:2,q:"Une <b>retassure</b> et une <b>soufflure</b> se ressemblent (toutes deux des cavités). Comment les distinguer ?",
 o:["Par leur origine : retrait de solidification pour la retassure, gaz pour la soufflure",
    "Par leur couleur","Par leur position : la retassure est toujours en surface","Elles sont identiques"],
 a:0,
 e:"<b>Retassure ← retrait de solidification</b> (forme souvent irrégulière, dendritique, dans les points chauds). <b>Soufflure ← gaz</b> (forme plutôt sphérique, lisse). L'origine détermine l'action corrective : masselottage pour l'une, dégazage et perméabilité du moule pour l'autre."},

{c:'c7',t:'qcm',d:3,q:"Pourquoi le tableau 1.5 qualifie-t-il la radiographie X de « <b>détection des fissures</b> » comme point <i>faible</i> ?",
 o:["Une fissure fine perpendiculaire au faisceau n'enlève presque pas de matière sur le trajet : le contraste est quasi nul",
    "Les rayons X ne traversent pas l'acier","Le film est trop petit","Les fissures sont toujours internes"],
 a:0,
 e:"La radiographie mesure une <b>atténuation de flux</b>, donc une <b>différence d'épaisseur traversée</b>. Une fissure bien ouverte <i>dans l'axe</i> du faisceau se voit ; la même fissure <b>perpendiculaire</b> au faisceau ne retire qu'une épaisseur ridicule de matière et reste invisible. Pour les défauts plans, les <b>ultrasons</b> sont bien meilleurs."},

{c:'c7',t:'qcm',d:3,q:"Le cours écrit c = 3·10⁶ m/s pour la vitesse de la lumière dans la loi de Planck. Quelle est la valeur correcte ?",
 o:["3·10⁸ m/s","3·10⁶ m/s","3·10¹⁰ m/s","3·10⁵ m/s"],
 a:0,
 e:"La valeur physique correcte est <b>c ≈ 3·10⁸ m/s</b> (299 792 458 m/s) : la diapositive comporte une coquille sur l'exposant. C'est utile de le savoir — en QCM, une valeur de constante se vérifie par l'ordre de grandeur, pas par la mémoire seule."},

{c:'c7',t:'qcm',d:2,q:"Sur une pièce de fonderie en acier, mécano-soudée, à contrôler <b>sur chantier</b> en surface, avec un budget serré. Quel choix est le plus cohérent ?",
 o:["Ressuage coloré pré-émulsionné, ou magnétoscopie portative (électroaimant + aérosol)",
    "Tomographie X","Contrôle par immersion ultrasons","Interférométrie holographique"],
 a:0,
 e:"Sur chantier, on privilégie le <b>portatif, simple et bon marché</b> : <b>ressuage coloré en aérosol</b> (lumière blanche, pas de cabine UV) ou <b>magnétoscopie portative</b> à l'électroaimant (l'acier est ferromagnétique, et elle voit en plus le sous-cutané). Tomographie et immersion sont des méthodes de <b>laboratoire ou d'atelier</b>."},

{c:'c7',t:'multi',d:3,q:"Quelles affirmations sont <b>vraies</b> à propos de l'émissivité ?",
 o:["Un corps peu émissif est très réfléchissant (pour un corps opaque)",
    "L'émissivité dépend de l'état de surface (poli / oxydé)",
    "L'émissivité peut dépendre de l'angle d'observation",
    "L'émissivité d'un métal est toujours proche de 1"],
 a:[0,1,2],
 e:"Les trois premières sont dans le cours : <b>ε + ρ = 1</b> (opaque) ; <b>alu brillant 0,04 vs alu traité 0,83-0,94</b> ; <b>chute de ε aux grands angles</b> pour un métal poli. La quatrième est fausse : les métaux polis sont justement les <b>pires</b> émetteurs."},

{c:'c7',t:'qcm',d:3,q:"Deux milieux ont des impédances acoustiques <b>très proches</b>. À leur interface&nbsp;:",
 o:["L'écho est très faible : le défaut risque de passer inaperçu","L'écho est maximal","L'onde change de nature","La vitesse devient nulle"],
 a:0,
 e:"R = (Z1−Z2)²/(Z1+Z2)² : si Z1 ≈ Z2, alors <b>R ≈ 0</b>, presque rien ne revient. C'est le cas d'un <b>collage intime</b> ou d'une inclusion d'impédance voisine de celle de la matrice — ces défauts sont notoirement difficiles à détecter aux ultrasons, alors qu'une lame d'air (Z minuscule) renvoie un écho énorme."},

{c:'c7',t:'order',d:3,q:"Remets dans l'ordre logique la <b>démarche complète</b> d'un contrôle non destructif.",
 s:["Analyser la pièce : matériau, procédé de fabrication, défauts attendus et leur orientation",
    "Choisir la méthode et la régler (fréquence, sensibilité, type de pénétrant, direction d'aimantation)",
    "Vérifier la sensibilité avec un étalon ou un témoin",
    "Préparer la surface et réaliser le contrôle",
    "Interpréter les indications et statuer sur la conformité",
    "Remettre la pièce en état (nettoyage final, démagnétisation) et rédiger le rapport"],
 e:"Cette logique structure tout le cours. Les deux étapes qu'on oublie le plus souvent sont la <b>vérification par étalon/témoin</b> (sinon un résultat négatif ne vaut rien) et la <b>remise en état</b> (nettoyage après ressuage, démagnétisation après magnétoscopie)."},

{c:'c7',t:'qcm',d:2,q:"Que signifie l'expression « méthode <b>peu quantitative</b> » employée pour le ressuage et la magnétoscopie ?",
 o:["Elle localise et révèle le défaut mais mesure mal ses dimensions réelles, notamment sa profondeur",
    "Elle ne détecte que peu de défauts","Elle ne fonctionne que sur de petites pièces","Elle donne un résultat chiffré précis"],
 a:0,
 e:"On obtient une <b>indication</b>, pas une <b>mesure</b>. L'indication est même <i>plus grande</i> que le défaut réel (élargie par le révélateur ou l'accumulation de poudre), et la <b>profondeur reste inconnue</b>. Pour dimensionner, on enchaîne avec ultrasons, courants de Foucault ou potentiel électrique."},

{c:'c7',t:'qcm',d:3,q:"Parmi ces méthodes, laquelle est la seule à donner à la fois la <b>position en profondeur</b> et une image en <b>coupe</b> du défaut ?",
 o:["Les ultrasons (A-Scan pour la profondeur, B-Scan pour la coupe)","Le ressuage","La magnétoscopie","La thermographie"],
 a:0,
 e:"Les <b>ultrasons</b> : le temps de vol donne la profondeur (<b>2d = V·t</b>, A-Scan) et le balayage donne la coupe (<b>B-Scan</b>) ou la vue de dessus (<b>C-Scan</b>). C'est ce qui en fait la méthode volumique de référence, malgré les contraintes de couplage et d'interprétation."},
/* ══════════════════════════════════════════════════════════
   COMPLÉMENT — questions sur les figures et photos du cours
   ══════════════════════════════════════════════════════════ */

{c:'c1',t:'qcm',d:2,i:'soudure-macro',q:"Sur cette figure du cours, identifie le défaut situé <b>au fond du joint, côté racine</b>, là où le métal fondu n'est pas descendu jusqu'en bas&nbsp;:",
 o:["Le manque de pénétration","Une inclusion de laitier","Une soufflure","Une morsure"],
 a:0,
 e:"Le schéma annote trois défauts : <b>manque de pénétration</b> (le bain n'atteint pas la racine — origine : préparation des chanfreins), <b>fissure sous cordon</b> (dans la zone affectée thermiquement, sous le cordon) et <b>fissure à la racine</b> (contraintes de refroidissement au point le plus contraint du joint)."},

{c:'c1',t:'match',d:3,i:'soudure-macro',q:"Sur cette même figure, associe chaque <b>défaut de soudure</b> à sa localisation.",
 p:[["Manque de pénétration","Au fond du joint : le métal fondu n'a pas atteint la racine"],
    ["Fissure sous cordon","Dans le métal de base, sous le cordon (zone affectée thermiquement)"],
    ["Fissure à la racine","Au pied du joint, là où les contraintes de retrait sont maximales"]],
 e:"Ces trois défauts sont des défauts <b>plans</b> : très dangereux mécaniquement (ils concentrent les contraintes et amorcent la fatigue) et difficiles à voir en radiographie s'ils sont perpendiculaires au faisceau. Les <b>ultrasons</b> avec traducteur d'angle sont la méthode de référence pour les chercher."},

{c:'c1',t:'qcm',d:2,i:'porosites',q:"Cette figure montre des cavités dans une pièce moulée et dans sa <b>carotte de coulée</b>. Quelles sont les deux familles annotées ?",
 o:["Porosités (gaz) et retassures (retrait de solidification)","Fissures et inclusions","Collages et manques de pénétration","Délaminages et calamine"],
 a:0,
 e:"Le cours annote « <b>porosités dans la carotte de coulée</b> », « <b>porosités dans un détail de la pièce</b> » et « <b>retassures</b> ». Le réflexe à garder : cavité <b>ronde et lisse = gaz</b> (porosité / soufflure) ; cavité <b>irrégulière, dendritique, dans un point chaud = retrait</b> (retassure)."},

{c:'c2',t:'qcm',d:1,i:'ressuage-images1',q:"Ces indications <b>rouges sur fond blanc</b>, observées sans lampe UV, correspondent à un contrôle&nbsp;:",
 o:["Par ressuage avec pénétrant coloré, sous lumière blanche","Par ressuage fluorescent sous lumière UV",
    "Par magnétoscopie à l'encre fluorescente","Par thermographie infrarouge"],
 a:0,
 e:"Rouge + fond blanc + <b>lumière blanche</b> = <b>pénétrant coloré</b> sur révélateur blanc. C'est la variante la plus simple et la moins chère (aérosols, pas de cabine UV), mais aussi la moins sensible du tableau 2.5 : <b>coloré pré-émulsionné = faible sensibilité</b>."},

{c:'c2',t:'qcm',d:2,i:'ressuage-composite',q:"Le cours montre au 2.9 des contrôles par ressuage sur des pièces en <b>matériaux composites</b>. Qu'en conclure ?",
 o:["Le ressuage ne se limite pas aux métaux : il suffit que le défaut soit débouchant et le pénétrant compatible",
    "Le ressuage ne marche que sur les aciers","Les composites doivent d'abord être magnétisés","Il faut obligatoirement une lampe UV sur composite"],
 a:0,
 e:"C'est un des grands avantages du ressuage : <b>aucune contrainte de nature du matériau</b> (contrairement à la magnétoscopie qui exige du ferromagnétique et aux courants de Foucault qui exigent un conducteur). Seules limites : défaut <b>débouchant</b> et <b>compatibilité chimique</b>."},

{c:'c3',t:'qcm',d:2,i:'oscillation-amortie',q:"Sur cette courbe d'oscillations amorties, que représente la grandeur <b>T</b> annotée sous l'axe des temps ?",
 o:["La période des oscillations","La durée totale de l'amortissement","L'amplitude maximale","La constante d'affaiblissement a"],
 a:0,
 e:"<b>T = période</b> d'une oscillation ; la fréquence est f = 1/T. L'<b>enveloppe</b> de la courbe, elle, décroît <b>exponentiellement</b> — c'est la solution x(t) = x₀·exp(−ω₀t)·cos(…) du système masse-ressort-amortisseur, et c'est l'image même de l'atténuation d'un signal ultrasonore."},

{c:'c3',t:'qcm',d:3,i:'attenuation-db',q:"Sur ce graphe de l'atténuation en dB en fonction de la distance, que constate-t-on quand la constante <b>a</b> passe de 5 à 200 dB/m ?",
 o:["Pour une même atténuation, la distance parcourable est bien plus courte : le matériau devient vite « opaque » aux ultrasons",
    "L'atténuation devient indépendante de la distance","L'atténuation diminue","La vitesse de l'onde augmente"],
 a:0,
 e:"Plus <b>a</b> est grand, plus le signal s'effondre vite. Un matériau à gros grains ou très atténuant limite donc l'épaisseur contrôlable. Deux leviers : <b>baisser la fréquence</b> (moins de diffusion, mais moins de résolution) ou <b>augmenter le gain</b> (mais on amplifie aussi le bruit de structure)."},

{c:'c4',t:'qcm',d:2,i:'magneto-uv1',q:"Ces indications <b>vert-jaune fluorescentes</b> observées sous lumière noire sur une pièce en acier sont obtenues par&nbsp;:",
 o:["Magnétoscopie à l'encre magnétique fluorescente","Ressuage coloré sous lumière blanche",
    "Thermographie infrarouge","Radiographie X"],
 a:0,
 e:"Encre <b>magnétique fluorescente</b> + <b>lumière noire UV</b> : les particules s'accumulent sur le <b>champ de fuite</b> et dessinent la fissure. Le contraste est bien supérieur à celui d'un révélateur noir sur fond clair, d'où l'usage systématique du fluorescent en cabine."},

{c:'c4',t:'qcm',d:3,i:'magneto-uv2',q:"Le réseau de fines fissures entrecroisées visible sur cette pièce est annoté dans le cours comme&nbsp;:",
 o:["Des tapures de trempe","Des soufflures","Un manque de pénétration","Un délaminage"],
 a:0,
 e:"<b>Tapures de trempe</b> : lors d'un refroidissement brutal, les contraintes thermiques (et la transformation martensitique) fissurent la surface en un réseau caractéristique. Même famille que les <b>criques et tapures</b> du tableau 1.4, d'origine <b>contraintes thermiques</b>."},

{c:'c4',t:'qcm',d:2,i:'magneto-cable',q:"Ce dispositif enserrant un <b>câble</b> (remontées mécaniques, ponts, ascenseurs) fonctionne par&nbsp;:",
 o:["Détection du flux de fuite créé par les ruptures de fils, lue par un capteur — sans imagerie",
    "Ressuage fluorescent","Thermographie infrarouge","Mesure d'impédance acoustique"],
 a:0,
 e:"On aimante le câble et on mesure la <b>distorsion du flux</b> avec des capteurs : c'est la ligne « <b>détection de flux de fuite</b> » du tableau 1.5 — principe <b>distorsion d'un flux magnétique</b>, points forts <b>sensibilité et automatisation</b>, point faible <b>fragilité des sondes</b>. Le cours la présente comme un exemple « <b>sans imagerie</b> » : on lit un signal, pas une image."},

{c:'c5',t:'qcm',d:3,i:'cf-app1',q:"Cette application montre une sonde à courants de Foucault sur un <b>assemblage riveté</b>, avec les signaux « crack », « crack-free » et « plaque présentant de la corrosion ». Que fait-on exactement ?",
 o:["On compare la signature dans le plan d'impédance à celle d'une zone saine pour détecter fissures et corrosion autour des rivets",
    "On mesure la température des rivets","On applique un pénétrant sur les rivets","On mesure l'épaisseur par temps de vol ultrasonore"],
 a:0,
 e:"C'est l'application aéronautique classique : les <b>trous de rivets</b> concentrent les contraintes et amorcent des fissures de fatigue, souvent <b>non débouchantes en surface visible</b>. La détection repose entièrement sur la <b>comparaison de signatures</b> dans le plan d'impédance — d'où le point faible « <b>interprétation</b> » du tableau 1.5."},

{c:'c5',t:'qcm',d:2,i:'cf-app2',q:"Quel avantage des courants de Foucault ce banc instrumenté illustre-t-il ?",
 o:["L'automatisation et le contrôle en ligne, sans consommable ni couplant",
    "La mesure directe de la profondeur des défauts internes","Le contrôle des matériaux isolants","L'absence de besoin d'étalonnage"],
 a:0,
 e:"Le signal est <b>électrique et immédiat</b> : pas de produit à appliquer, pas de temps d'attente, pas de couplant. D'où les points forts du tableau 1.5 — <b>sensibilité et automatisation</b> — et le domaine « <b>contrôle en ligne et sur chantier de tous produits métalliques</b> »."},

{c:'c6',t:'qcm',d:2,i:'thermo-exemples',q:"Ces thermogrammes d'un radiateur et d'une façade de maison illustrent quelle utilisation de la thermographie ?",
 o:["La cartographie des températures de surface pour repérer déperditions et anomalies de fonctionnement",
    "La mesure de l'épaisseur des murs","La détection de fissures débouchantes","La mesure de la conductivité électrique"],
 a:0,
 e:"Point fort de la thermographie dans le tableau 1.5 : la <b>cartographie</b>. On visualise d'un coup d'œil <b>où</b> ça chauffe ou <b>où</b> ça fuit. Son point faible reste la <b>caractérisation</b> : l'image dit qu'il y a une anomalie, pas exactement laquelle ni à quelle profondeur — et toute mesure absolue exige de connaître l'<b>émissivité</b>."},

{c:'c6',t:'qcm',d:3,i:'emissivite-cuivre',q:"Que retenir de l'émissivité du <b>cuivre</b> pour une mesure par thermographie ?",
 o:["Poli, il est très peu émissif (ε ≈ 0,05) donc quasi impossible à mesurer ; oxydé, il devient exploitable (ε ≈ 0,75 – 0,8)",
    "Elle vaut 1 dans tous les cas","Elle ne dépend pas de l'état de surface","Elle diminue quand le cuivre s'oxyde"],
 a:0,
 e:"C'est le piège n°1 de la maintenance électrique : les jeux de barres et connexions en <b>cuivre poli</b> se comportent comme des <b>miroirs infrarouges</b> (émission + réflexion = 1), la caméra voit surtout le reflet de l'environnement. Le cours conseille de viser une zone <b>oxydée</b> — ou de coller une pastille d'émissivité connue."},

{c:'c7',t:'qcm',d:3,i:'soudure-radio',q:"Sur cette <b>radiographie de soudure</b>, on aperçoit un gradin de fils fins (indicateur de qualité d'image, « BAM »). À quoi sert-il ?",
 o:["À prouver que le cliché a la sensibilité nécessaire : si le fil de diamètre requis est visible, le contrôle est valable",
    "À mesurer l'épaisseur de la soudure","À magnétiser la pièce","À repérer le sens de laminage"],
 a:0,
 e:"Même logique que les <b>étalons de ressuage</b> (NF A 09.123) et les <b>témoins d'aimantation</b> (AFNOR n°1, ASME) : on ne se contente jamais d'un résultat négatif, on <b>prouve d'abord que le contrôle était capable de voir quelque chose</b>. Ici l'indicateur de qualité d'image atteste la sensibilité du cliché."},

{c:'c7',t:'qcm',d:3,i:'soudure-radio',q:"Pourquoi la radiographie voit-elle très bien ces <b>porosités</b> mais mal une fissure fine ?",
 o:["Une porosité retire un volume de matière sur le trajet du faisceau ; une fissure fine perpendiculaire au faisceau n'en retire presque pas",
    "Parce que les porosités sont plus grosses","Parce que les fissures ne sont pas radioactives","Parce que les fissures sont toujours en surface"],
 a:0,
 e:"La radiographie mesure une <b>atténuation de flux</b>, donc une <b>différence d'épaisseur traversée</b>. Un défaut <b>volumique</b> (porosité, soufflure, retassure) crée un contraste net ; un défaut <b>plan</b> mal orienté est quasi invisible — d'où « détection des fissures » en point faible dans le tableau 1.5, et le recours aux <b>ultrasons</b> pour ces défauts-là."},
/* ── Placement d'étiquettes sur schéma ────────────────── */

{c:'c1',t:'label',d:2,i:'soudure-etiquettes',
 q:"<b>Place chaque mot au bon endroit</b> sur ce schéma des défauts de soudure (diapo 12 du cours).",
 sp:[{x:37.7,y:11.9,a:"Retassure"},
     {x:60.3,y:9.3, a:"Morsure"},
     {x:68.6,y:30.4,a:"Caniveau"},
     {x:64.2,y:39.3,a:"Fissure sous cordon"},
     {x:22.0,y:79.9,a:"Inclusions"},
     {x:34.8,y:83.7,a:"Collage (manque de liaison)"},
     {x:45.3,y:78.1,a:"Fissure"},
     {x:60.1,y:77.5,a:"Soufflures"}],
 w:["Manque de pénétration","Délaminage"],
 e:"Les huit défauts annotés sur la figure du cours. Rattache chacun à son <b>groupe normalisé</b> (NF A89-230 / 89-240) : <b>fissure</b> et <b>fissure sous cordon</b> → groupe 1 ; <b>soufflures</b> et <b>retassure</b> → groupe 2 (cavités) ; <b>inclusions</b> → groupe 3 ; <b>collage</b> → groupe 4 (manque de fusion) ; <b>morsure</b> et <b>caniveau</b> → groupe 5 (défauts de forme). Les deux intrus, <i>manque de pénétration</i> et <i>délaminage</i>, existent bien mais ne figurent pas sur ce schéma (le manque de pénétration est annoté sur la diapo 14, le délaminage concerne les produits laminés)."},

/* ── Avantages / inconvénients — méthode par méthode ──── */

{c:'c7',t:'multi',d:2,q:"<b>Ressuage</b> — quels sont ses <b>avantages</b> ?",
 o:["Simplicité et faible coût","Aucune restriction sur la nature du matériau (métaux, composites…)",
    "S'applique à tous produits à surface accessible, même de géométrie complexe",
    "Donne la profondeur du défaut"],
 a:[0,1,2],
 e:"Points forts du tableau 1.5 : <b>simplicité, faible coût</b>. À quoi s'ajoute une qualité décisive : contrairement à la magnétoscopie (ferromagnétique obligatoire) et aux courants de Foucault (conducteur obligatoire), le ressuage <b>n'impose rien sur le matériau</b> — le cours le montre même sur composites. En revanche il est <b>peu quantitatif</b> : aucune information de profondeur."},

{c:'c7',t:'multi',d:2,q:"<b>Ressuage</b> — quels sont ses <b>inconvénients</b> ?",
 o:["Seuls les défauts débouchants sont détectés","Faible productivité (tout est manuel, avec deux temps d'attente)",
    "Peu quantitatif : pas de profondeur, indication élargie","Réservé aux aciers"],
 a:[0,1,2],
 e:"Points faibles du tableau 1.5 : <b>productivité, peu quantitatif</b> ; plus la limitation n°1 du chapitre 2 : <b>défauts débouchants uniquement</b>. « Réservé aux aciers » est faux — c'est le défaut de la <b>magnétoscopie</b>. Ajoute en pratique : préparation de surface exigeante, consommables, et nécessité d'une compatibilité chimique."},

{c:'c7',t:'multi',d:2,q:"<b>Magnétoscopie</b> — quels sont ses <b>avantages</b> ?",
 o:["Grande sensibilité aux défauts fins","Détecte les défauts débouchants ET sous-cutanés",
    "Rapide, peu coûteuse, utilisable en portatif sur chantier","Fonctionne sur l'aluminium et les composites"],
 a:[0,1,2],
 e:"Point fort du tableau 1.5 : <b>sensibilité</b>. Son avantage décisif sur le ressuage : elle voit aussi le <b>sous-cutané</b>, grâce au champ de fuite. Elle est aussi rapide et peu coûteuse (électroaimant portatif + aérosol). Mais elle ne fonctionne <b>que sur les ferromagnétiques</b> : ni aluminium, ni composite, ni inox austénitique."},

{c:'c7',t:'multi',d:2,q:"<b>Magnétoscopie</b> — quels sont ses <b>inconvénients</b> ?",
 o:["Réservée aux matériaux ferromagnétiques (aciers)","Peu quantitative",
    "Dépend de l'orientation du défaut : deux aimantations croisées nécessaires",
    "Impose une démagnétisation après contrôle","Nécessite un couplant"],
 a:[0,1,2,3],
 e:"Les quatre premiers. Le <b>couplant</b> est un problème d'<b>ultrasons</b>, pas de magnétoscopie. Rappel : un défaut <b>parallèle</b> aux lignes de champ ne crée pas de fuite et reste invisible — d'où l'obligation de deux passes croisées."},

{c:'c7',t:'multi',d:2,q:"<b>Ultrasons</b> — quels sont leurs <b>avantages</b> ?",
 o:["Détectent les défauts internes ET débouchants","Donnent la profondeur du défaut (2d = V·t)",
    "Grande sensibilité, nombreuses méthodes d'auscultation","Accès à une seule face suffisant en méthode par réflexion",
    "Aucune préparation ni consommable"],
 a:[0,1,2,3],
 e:"C'est la méthode la plus complète du cours : seule à donner la <b>profondeur</b> et une <b>image en coupe</b> (B-Scan). Points forts du tableau : <b>grande sensibilité, nombreuses méthodes d'auscultation</b>. Faux pour le dernier point : il faut un <b>couplant</b> et une surface correcte — le <b>couplage</b> figure d'ailleurs parmi les points faibles."},

{c:'c7',t:'multi',d:2,q:"<b>Ultrasons</b> — quels sont leurs <b>inconvénients</b> ?",
 o:["Conditions d'essai exigeantes","Interprétation des échos délicate","Nécessitent un couplant",
    "Sensibles à l'orientation du défaut et à la structure du matériau (gros grains)","Rayonnement ionisant dangereux"],
 a:[0,1,2,3],
 e:"Trois points faibles listés par le cours : <b>conditions d'essai, interprétation des échos, couplage</b>. S'y ajoutent deux limites physiques vues au chapitre 3 : un défaut <b>plan mal orienté</b> ne renvoie pas l'écho vers la sonde, et un matériau à <b>gros grains</b> diffuse énormément (α ∝ d³f⁴ en régime de Rayleigh). Le rayonnement ionisant, c'est la <b>radiographie</b>."},

{c:'c7',t:'multi',d:2,q:"<b>Courants de Foucault</b> — quels sont leurs <b>avantages</b> ?",
 o:["Sensibilité élevée aux défauts fins débouchants","Automatisation et contrôle en ligne à grande cadence",
    "Sans contact ni couplant, sans consommable, résultat immédiat","Fonctionnent à travers une fine couche isolante (peinture)",
    "Donnent une image en coupe du défaut"],
 a:[0,1,2,3],
 e:"Points forts du tableau 1.5 : <b>sensibilité, automatisation</b>. Le couplage étant <b>électromagnétique</b>, il n'y a ni couplant ni produit à appliquer, et le signal est immédiat — idéal pour le contrôle <b>en ligne</b> de barres, tubes et fils. L'image en coupe, c'est le <b>B-Scan ultrasonore</b>."},

{c:'c7',t:'multi',d:2,q:"<b>Courants de Foucault</b> — quels sont leurs <b>inconvénients</b> ?",
 o:["Inopérants sur les matériaux non conducteurs","Interprétation du signal délicate (plan d'impédance)",
    "Profondeur d'exploration limitée par l'effet de peau","Très sensibles au lift-off et aux variations de perméabilité",
    "Impossible d'automatiser"],
 a:[0,1,2,3],
 e:"Points faibles du tableau 1.5 : <b>matériaux non conducteurs, interprétation</b>. S'y ajoutent l'<b>effet de peau</b> (δ = 1/√(πfσµ), donc défauts de surface surtout) et la sensibilité au <b>lift-off</b>. L'automatisation est au contraire leur <b>point fort</b>."},

{c:'c7',t:'multi',d:2,q:"<b>Thermographie infrarouge</b> — quels sont ses <b>avantages</b> ?",
 o:["Cartographie : on visualise d'un coup une grande surface","Totalement sans contact, à distance, sur installation en fonctionnement",
    "Détecte délaminations et hétérogénéités diverses","Mesure précise quelle que soit la surface observée"],
 a:[0,1,2],
 e:"Point fort du tableau 1.5 : la <b>cartographie</b>. Son atout pratique majeur : le contrôle se fait <b>sans contact, à distance, sur équipement en service</b> (connexions électriques sous tension, roulements en rotation). Mais la mesure est <b>très dépendante de l'émissivité</b> : sur un métal poli (ε ≈ 0,04), la caméra voit surtout des reflets."},

{c:'c7',t:'multi',d:2,q:"<b>Thermographie infrarouge</b> — quels sont ses <b>inconvénients</b> ?",
 o:["Caractérisation des défauts difficile (on voit l'anomalie, pas sa nature ni sa profondeur)",
    "Mesure faussée si l'émissivité est mal connue ou faible (métaux polis)",
    "Le rayonnement mesuré mélange objet, reflets et atmosphère",
    "La taille minimale d'objet mesurable croît avec la distance (SSR)",
    "Nécessite de démagnétiser la pièce"],
 a:[0,1,2,3],
 e:"Point faible du tableau 1.5 : <b>caractérisation des défauts</b>. Les trois autres viennent du chapitre 6 : <b>émissivité</b>, <b>rayonnement mesuré = objet + réfléchi + atmosphérique</b>, et <b>Spot Size Ratio</b>. La démagnétisation ne concerne que la <b>magnétoscopie</b>."},

{c:'c7',t:'multi',d:3,q:"<b>Radiographie X et γ</b> — que retenir de ses avantages et inconvénients ?",
 o:["Avantage : détecte les défauts internes volumiques dans tous matériaux, avec un document d'archive",
    "Avantage : la radiographie γ passe les fortes épaisseurs","Inconvénient : protection radiologique lourde",
    "Inconvénient : détection médiocre des fissures fines mal orientées","Avantage : donne directement la profondeur du défaut"],
 a:[0,1,2,3],
 e:"Tableau 1.5 : points forts <b>cartographie, souplesse de réglage, fortes épaisseurs</b> (γ) ; points faibles <b>protection</b> et <b>détection des fissures</b>. La radiographie donne une image <b>projetée</b> : elle ne dit pas <b>à quelle profondeur</b> se trouve le défaut — pour cela il faut les <b>ultrasons</b> ou la <b>tomographie</b>."},

{c:'c7',t:'match',d:3,q:"Associe chaque méthode à son <b>principal inconvénient</b>.",
 p:[["Ressuage","Défauts débouchants uniquement, et faible productivité"],
    ["Magnétoscopie","Réservée aux matériaux ferromagnétiques"],
    ["Ultrasons","Couplage obligatoire et interprétation des échos"],
    ["Courants de Foucault","Matériaux conducteurs seulement, faible profondeur explorée"],
    ["Thermographie IR","Caractérisation des défauts difficile, dépendance à l'émissivité"],
    ["Radiographie","Protection radiologique et mauvaise détection des fissures fines"]],
 e:"Si tu dois retenir une seule ligne par méthode pour l'examen, c'est celle-ci. Chaque inconvénient découle directement du <b>principe physique</b> : pas de capillarité sans ouverture, pas de flux de fuite sans ferromagnétisme, pas d'onde sans couplage, pas de courant induit sans conducteur, pas de mesure IR sans émissivité connue, pas de contraste radio sans variation d'épaisseur."},

{c:'c7',t:'match',d:3,q:"Associe chaque méthode à son <b>principal avantage</b>.",
 p:[["Ressuage","Simple, peu coûteux, aucune contrainte sur le matériau"],
    ["Magnétoscopie","Sensible aux défauts fins, y compris sous-cutanés"],
    ["Ultrasons","Défauts internes avec mesure de profondeur"],
    ["Courants de Foucault","Rapide et automatisable, sans contact ni consommable"],
    ["Thermographie IR","Cartographie à distance d'une grande surface en fonctionnement"]],
 e:"Le tableau 1.5 résume ces atouts en un mot chacun : <b>simplicité/faible coût</b>, <b>sensibilité</b>, <b>grande sensibilité + méthodes d'auscultation</b>, <b>sensibilité/automatisation</b>, <b>cartographie</b>."},

{c:'c7',t:'qcm',d:3,q:"Une pièce en acier moulé, contrôlée en <b>grande série sur ligne de production</b>, pour des fissures de surface. Quelle méthode combine le mieux sensibilité et cadence ?",
 o:["Les courants de Foucault (ou la détection de flux de fuite) — automatisables, sans consommable",
    "Le ressuage — mais il est manuel et impose deux temps d'attente",
    "La tomographie X — trop lente et trop coûteuse",
    "L'examen visuel — trop dépendant de l'opérateur"],
 a:0,
 e:"Le critère « <b>grande série</b> » élimine d'emblée toutes les méthodes manuelles avec consommables et temps d'attente. Le tableau 1.5 attribue l'<b>automatisation</b> comme point fort aux <b>courants de Foucault</b> et à la <b>détection de flux de fuite</b> — les deux seules de la liste à la revendiquer."},

{c:'c7',t:'qcm',d:3,q:"Pourquoi enchaîne-t-on souvent <b>plusieurs</b> méthodes de CND sur une même pièce critique ?",
 o:["Parce que chaque méthode a un domaine de validité limité : on croise les méthodes pour couvrir surface, sous-peau et volume, et toutes les orientations de défauts",
    "Pour consommer le budget contrôle","Parce que les normes l'imposent toujours","Parce qu'aucune méthode ne fonctionne seule"],
 a:0,
 e:"Aucune méthode ne voit tout : le ressuage ne voit que le débouchant, la magnétoscopie ajoute le sous-cutané mais seulement sur acier, les ultrasons voient le volume mais dépendent de l'orientation, la radiographie voit les défauts volumiques mais rate les fissures fines. Sur une pièce critique (aube de turbine, soudure d'appareil sous pression), on <b>combine</b> les méthodes dont les points faibles ne se recouvrent pas."}

];
