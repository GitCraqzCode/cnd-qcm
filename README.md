# Quiz CND — Contrôles Non Destructifs (GIM2)

Application web de révision interactive construite à partir du cours
**« Introduction aux Contrôles Non Destructifs »** (A. SOVEJA — IUT Génie Industriel &
Maintenance, Université de Toulouse 2), 102 diapositives.

## Ce qu'elle contient

- **308 questions** couvrant l'intégralité du cours, chacune avec une **explication détaillée**
- **71 schémas** extraits des diapositives (tableaux méthodes/défauts, A/B/C-Scan, plan
  d'impédance, procédure de ressuage, courbes d'émissivité…)
- **Fiches de cours** complètes, chapitre par chapitre : définitions, tableaux, formules,
  et une fiche **avantages / inconvénients méthode par méthode**

### Les 7 chapitres

| # | Chapitre | Questions |
|---|----------|-----------|
| 1 | Introduction & défauts | 55 |
| 2 | Ressuage | 33 |
| 3 | Ultrasons | 51 |
| 4 | Magnétoscopie | 40 |
| 5 | Courants de Foucault | 33 |
| 6 | Thermographie infrarouge | 48 |
| 7 | Synthèse & comparaison | 48 |

### Types de questions

Choix unique · choix multiples · vrai/faux · **associations** (relier défaut ↔ origine,
méthode ↔ principe) · **remise en ordre** (procédures) · **placement d'étiquettes sur un
schéma** (annoter la figure des défauts de soudure) · questions sur les **schémas** du cours
· reconnaissance de **formules** (identifier la bonne relation, ce que représente chaque
symbole, comment varie une grandeur).

## Les trois modes

- **🎓 Apprentissage** — correction et explication immédiates après chaque question.
- **⏱️ Examen blanc** — chronomètre, note sur 20, correction complète à la fin.
- **🔁 Révision intelligente** — répétition espacée (système de Leitner à 6 boîtes) : les
  questions ratées reviennent vite, les acquises s'espacent jusqu'à 40 jours.

## Gamification

XP et niveaux, séries de bonnes réponses, série de jours consécutifs, **17 badges**,
anneaux de progression par chapitre, effets sonores (désactivables), confettis.

## Suivi de progression

Un onglet **Stats** montre la réussite par chapitre, l'historique des sessions et surtout
la liste de **tes points faibles** — les questions les plus souvent ratées, rejouables en un clic.

## Technique

HTML/CSS/JavaScript purs, aucune dépendance, aucun compte, aucun serveur.
La progression est enregistrée dans le `localStorage` du navigateur.
Interface responsive (téléphone et ordinateur), thème sombre et thème clair.

```
index.html          interface
css/style.css       thème sombre / clair
js/questions.js     les 308 questions
js/course.js        les fiches de cours
js/app.js           moteur (sessions, XP, répétition espacée, stats)
assets/img/         70 schémas extraits du PDF du cours
```

Raccourcis clavier : `1`–`9` pour répondre, `Entrée` pour valider ou continuer.
