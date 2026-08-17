export type JourneyQuestion = {
  display: string;
  answer: string;
  choices: readonly string[];
  spoken: string;
  note: string;
};

export type JourneyLesson = {
  id: string;
  name: string;
  hotspot: { left: string; top: string; width: string; height: string };
  highlightColor: string;
  questions: readonly JourneyQuestion[];
};

function q(display: string, answer: string, choices: readonly string[], spoken: string, note: string): JourneyQuestion {
  return { display, answer, choices, spoken, note };
}

const DESTINATION = ["à", "au", "à la", "à l’"] as const;
const ORIGIN = ["de", "du", "de la", "de l’"] as const;
const ROUTE = ["à", "de", "pour", "chez"] as const;
const TRANSPORT = ["à vélo", "à pied", "en train", "en voiture"] as const;

export const journeyLessons: readonly JourneyLesson[] = [
  {
    id: "home", name: "Maison", hotspot: { left: "22%", top: "17%", width: "17%", height: "23%" }, highlightColor: "151, 83, 57",
    questions: [
      q("Nous rentrons ___ maison après l’école.", "à la", ["à la", "de la", "chez", "du"], "Nous rentrons à la maison après l’école.", "La maison est la destination : à la maison."),
      q("Léa sort ___ maison à huit heures.", "de la", ["à la", "de la", "du", "chez"], "Léa sort de la maison à huit heures.", "La maison est le point de départ : de la maison."),
      q("Après le travail, Paul retourne ___ maison.", "à la", ["à la", "de la", "chez", "des"], "Après le travail, Paul retourne à la maison.", "Retourner indique ici une destination : à la maison."),
      q("Ce soir, je reste ___ moi.", "chez", ["chez", "à", "de", "pour"], "Ce soir, je reste chez moi.", "Avec une personne ou un pronom, on utilise « chez » : chez moi."),
      q("Mes amis viennent ___ moi après le dîner.", "chez", ["chez", "à la", "de la", "pour"], "Mes amis viennent chez moi après le dîner.", "Ils viennent à mon domicile : chez moi."),
      q("Ils partent ___ chez eux à midi.", "de", ["de", "à", "pour", "du"], "Ils partent de chez eux à midi.", "Le domicile est l’origine : de chez eux."),
      q("Le facteur arrive ___ maison.", "à la", ["à la", "de la", "au", "de l’"], "Le facteur arrive à la maison.", "La maison est la destination : à la maison."),
      q("Elle revient ___ maison de sa sœur.", "de la", ["de la", "à la", "du", "des"], "Elle revient de la maison de sa sœur.", "La maison de sa sœur est l’origine : de la maison."),
      q("Tu vas ___ tes grands-parents dimanche.", "chez", ["chez", "aux", "à la", "de"], "Tu vas chez tes grands-parents dimanche.", "Devant des personnes, on utilise « chez »."),
      q("Nous rentrons ___ voyage ce soir.", "de", ["de", "à", "du", "pour"], "Nous rentrons de voyage ce soir.", "L’expression naturelle est « rentrer de voyage »."),
    ],
  },
  {
    id: "school-destination", name: "École", hotspot: { left: "60%", top: "17%", width: "21%", height: "23%" }, highlightColor: "79, 110, 130",
    questions: [
      q("Les enfants vont ___ école à vélo.", "à l’", DESTINATION, "Les enfants vont à l’école à vélo.", "École commence par une voyelle : à l’école."),
      q("Mon fils entre ___ collège en septembre.", "au", DESTINATION, "Mon fils entre au collège en septembre.", "Collège est masculin : au collège."),
      q("Elle retourne ___ université lundi.", "à l’", DESTINATION, "Elle retourne à l’université lundi.", "Université commence par une voyelle : à l’université."),
      q("Nous travaillons ___ bibliothèque cet après-midi.", "à la", DESTINATION, "Nous travaillons à la bibliothèque cet après-midi.", "Bibliothèque est féminin : à la bibliothèque."),
      q("Vous accompagnez les élèves ___ gymnase.", "au", DESTINATION, "Vous accompagnez les élèves au gymnase.", "Gymnase est masculin : au gymnase."),
      q("Ils assistent ___ cours du soir.", "aux", ["aux", "au", "à la", "à l’"], "Ils assistent aux cours du soir.", "Cours est ici au pluriel : aux cours."),
      q("Le professeur se rend ___ école avant huit heures.", "à l’", DESTINATION, "Le professeur se rend à l’école avant huit heures.", "Devant école, on utilise « à l’ »."),
      q("Après la classe, nous allons ___ bibliothèque.", "à la", DESTINATION, "Après la classe, nous allons à la bibliothèque.", "La bibliothèque est la destination : à la bibliothèque."),
      q("La classe arrive ___ musée à dix heures.", "au", DESTINATION, "La classe arrive au musée à dix heures.", "Musée est masculin : au musée."),
      q("Ces étudiants vont ___ Paris demain.", "à", DESTINATION, "Ces étudiants vont à Paris demain.", "Devant un nom de ville, on utilise « à » : à Paris."),
    ],
  },
  {
    id: "station-origin", name: "Gare", hotspot: { left: "39%", top: "42%", width: "27%", height: "17%" }, highlightColor: "83, 88, 88",
    questions: [
      q("Elle vient ___ gare à pied.", "de la", ["du", "de la", "à la", "pour la"], "Elle vient de la gare à pied.", "La gare est l’origine : de la gare."),
      q("Nous sortons ___ cinéma vers minuit.", "du", ORIGIN, "Nous sortons du cinéma vers minuit.", "Cinéma est masculin : du cinéma."),
      q("Les enfants reviennent ___ école.", "de l’", ORIGIN, "Les enfants reviennent de l’école.", "Devant école, de s’élide : de l’école."),
      q("Son avion arrive ___ aéroport de Nice.", "de l’", ORIGIN, "Son avion arrive de l’aéroport de Nice.", "Devant aéroport, de s’élide : de l’aéroport."),
      q("Le bus revient ___ Halles.", "des", ["des", "du", "de la", "de l’"], "Le bus revient des Halles.", "Halles est au pluriel : des Halles."),
      q("Mes cousins arrivent ___ Paris ce soir.", "de", ORIGIN, "Mes cousins arrivent de Paris ce soir.", "Devant un nom de ville, on utilise « de » : de Paris."),
      q("Ce tram part ___ centre-ville.", "du", ORIGIN, "Ce tram part du centre-ville.", "Centre-ville est masculin : du centre-ville."),
      q("Les nageurs sortent ___ piscine.", "de la", ORIGIN, "Les nageurs sortent de la piscine.", "Piscine est féminin : de la piscine."),
      q("Ma mère revient ___ marché.", "du", ORIGIN, "Ma mère revient du marché.", "Marché est masculin : du marché."),
      q("Les touristes partent ___ hôtel à neuf heures.", "de l’", ORIGIN, "Les touristes partent de l’hôtel à neuf heures.", "Devant hôtel, de s’élide : de l’hôtel."),
    ],
  },
  {
    id: "paris-cities", name: "Paris", hotspot: { left: "12%", top: "70%", width: "27%", height: "21%" }, highlightColor: "91, 108, 67",
    questions: [
      q("Nous allons ___ Paris pour le week-end.", "à", ROUTE, "Nous allons à Paris pour le week-end.", "Paris est une destination : à Paris."),
      q("Elle revient ___ Paris dimanche soir.", "de", ROUTE, "Elle revient de Paris dimanche soir.", "Paris est ici l’origine : de Paris."),
      q("Depuis Lyon, le train part ___ Paris dans cinq minutes.", "pour", ROUTE, "Depuis Lyon, le train part pour Paris dans cinq minutes.", "Après partir, « pour » indique la destination."),
      q("Mes amis retournent ___ Lyon en septembre.", "à", ROUTE, "Mes amis retournent à Lyon en septembre.", "Lyon est une destination : à Lyon."),
      q("Vous revenez ___ Lyon en train.", "de", ROUTE, "Vous revenez de Lyon en train.", "Lyon est le point de départ : de Lyon."),
      q("Notre avion arrive ___ Marseille à midi.", "à", ROUTE, "Notre avion arrive à Marseille à midi.", "Marseille est une destination : à Marseille."),
      q("Ils habitent à Bordeaux et partent ___ Bordeaux tôt demain.", "de", ROUTE, "Ils habitent à Bordeaux et partent de Bordeaux tôt demain.", "Bordeaux est le point de départ : de Bordeaux."),
      q("Depuis Roubaix, ce car part ___ Lille après le déjeuner.", "pour", ROUTE, "Depuis Roubaix, ce car part pour Lille après le déjeuner.", "« Pour » présente Lille comme destination prévue."),
      q("Luc habite à Nice, mais il vient ___ Cannes.", "de", ROUTE, "Luc habite à Nice, mais il vient de Cannes.", "Cannes est ici l’origine : de Cannes."),
      q("Nous arrivons ___ Toulouse avant la nuit.", "à", ROUTE, "Nous arrivons à Toulouse avant la nuit.", "Toulouse est une destination : à Toulouse."),
    ],
  },
  {
    id: "lyon-viewpoint", name: "Lyon", hotspot: { left: "58%", top: "70%", width: "25%", height: "21%" }, highlightColor: "155, 116, 55",
    questions: [
      q("Paul est à Lyon. Nous ___ le voir demain.", "allons", ["allons", "venons", "revenons", "rentrons"], "Paul est à Lyon. Nous allons le voir demain.", "On emploie aller pour se déplacer vers un autre lieu."),
      q("Marie nous attend à Paris : « Vous ___ demain ? »", "venez", ["venez", "allez", "partez", "rentrez"], "Marie nous attend à Paris : « Vous venez demain ? »", "Depuis Paris, Marie demande aux autres de venir vers elle."),
      q("Nous quittons Lyon maintenant et nous ___ à Paris.", "retournons", ["retournons", "venons", "arrivons", "sortons"], "Nous quittons Lyon maintenant et nous retournons à Paris.", "Retourner signifie aller de nouveau dans un lieu."),
      q("Elle était à Paris hier ; elle ___ de Paris ce matin.", "revient", ["revient", "va", "part", "entre"], "Elle était à Paris hier ; elle revient de Paris ce matin.", "Revenir indique un retour depuis Paris."),
      q("Ce soir, nous ___ chez Paul pour dîner.", "allons", ["allons", "venons", "revenons", "arrivons"], "Ce soir, nous allons chez Paul pour dîner.", "Paul est la destination : nous allons chez lui."),
      q("Paul nous dit : « Vous ___ chez moi ce soir ? »", "venez", ["venez", "allez", "retournez", "sortez"], "Paul nous dit : « Vous venez chez moi ce soir ? »", "Paul parle depuis le lieu vers lequel les autres se déplacent."),
      q("Après les vacances, les élèves ___ à l’école.", "retournent", ["retournent", "viennent", "sortent", "partent"], "Après les vacances, les élèves retournent à l’école.", "Ils vont de nouveau à l’école : ils y retournent."),
      q("Le train ___ de Lyon à dix-sept heures.", "part", ["part", "vient", "rentre", "entre"], "Le train part de Lyon à dix-sept heures.", "Partir indique que le train quitte Lyon."),
      q("Je suis chez moi. Mes voisins ___ prendre un café.", "viennent", ["viennent", "vont", "partent", "retournent"], "Je suis chez moi. Mes voisins viennent prendre un café.", "Ils se déplacent vers la personne qui parle : ils viennent."),
      q("Nous sommes à Lyon et demain nous ___ à Paris.", "allons", ["allons", "venons", "revenons", "sortons"], "Nous sommes à Lyon et demain nous allons à Paris.", "Paris est une autre destination : nous allons à Paris."),
    ],
  },
  {
    id: "cyclist-transport", name: "À vélo", hotspot: { left: "45%", top: "19%", width: "14%", height: "17%" }, highlightColor: "72, 116, 112",
    questions: [
      q("Elle pédale jusqu’à l’école ___.", "à vélo", TRANSPORT, "Elle pédale jusqu’à l’école à vélo.", "Avec vélo, on utilise « à » : à vélo."),
      q("Le sentier est interdit aux véhicules ; nous avançons ___.", "à pied", TRANSPORT, "Le sentier est interdit aux véhicules ; nous avançons à pied.", "L’expression naturelle est « à pied »."),
      q("Le TGV les conduit à Lyon ___.", "en train", TRANSPORT, "Le TGV les conduit à Lyon en train.", "On utilise généralement « en » avec le train."),
      q("Mon père conduit jusqu’au bureau ___.", "en voiture", TRANSPORT, "Mon père conduit jusqu’au bureau en voiture.", "On utilise généralement « en » avec la voiture."),
      q("Pour traverser l’Atlantique, vous voyagez ___.", "en avion", ["en avion", "en train", "à vélo", "à pied"], "Pour traverser l’Atlantique, vous voyagez en avion.", "Pour ce moyen de transport, on dit « en avion »."),
      q("Le car scolaire conduit les élèves au musée ___.", "en bus", ["en bus", "en métro", "à vélo", "à pied"], "Le car scolaire conduit les élèves au musée en bus.", "Pour ce moyen de transport, on dit « en bus »."),
      q("Tu empruntes la ligne quatre et traverses la ville ___.", "en métro", ["en métro", "en bus", "à vélo", "à pied"], "Tu empruntes la ligne quatre et traverses la ville en métro.", "Pour ce moyen de transport, on dit « en métro »."),
      q("Nous marchons dans les petites rues ___.", "à pied", TRANSPORT, "Nous marchons dans les petites rues à pied.", "Pour marcher, on utilise l’expression « à pied »."),
      q("Le voilier longe la côte ___.", "en bateau", ["en bateau", "en avion", "à vélo", "à pied"], "Le voilier longe la côte en bateau.", "Pour ce moyen de transport, on dit « en bateau »."),
      q("Sophie pédale pour rejoindre ses amis ___.", "à vélo", TRANSPORT, "Sophie pédale pour rejoindre ses amis à vélo.", "Avec vélo, on utilise « à » : à vélo."),
    ],
  },
  {
    id: "depart-for", name: "Partir pour", hotspot: { left: "32%", top: "59%", width: "13%", height: "16%" }, highlightColor: "73, 105, 65",
    questions: [
      q("Depuis Lyon, nous partons ___ Paris demain matin.", "pour", ROUTE, "Depuis Lyon, nous partons pour Paris demain matin.", "Après partir, « pour » indique la destination : pour Paris."),
      q("Depuis Paris, ce train part ___ Lyon à quatorze heures.", "pour", ROUTE, "Depuis Paris, ce train part pour Lyon à quatorze heures.", "Lyon est la destination prévue : pour Lyon."),
      q("Depuis la maison, les enfants partent ___ école.", "pour l’", ["pour l’", "de l’", "à l’", "chez l’"], "Depuis la maison, les enfants partent pour l’école.", "Après partir, « pour » introduit ici la destination."),
      q("Le train quitte le quai ___ gare centrale.", "de la", ["de la", "pour la", "à la", "du"], "Le train quitte le quai de la gare centrale.", "La gare est le point de départ : de la gare."),
      q("Nous allons ___ gare prendre le train.", "à la", ["à la", "de la", "pour la", "du"], "Nous allons à la gare prendre le train.", "La gare est la destination : à la gare."),
      q("À Lyon, elle prend le train ___ Marseille.", "pour", ROUTE, "À Lyon, elle prend le train pour Marseille.", "« Pour » indique la destination du train."),
      q("Depuis le théâtre, vous partez ___ gare.", "pour la", ["pour la", "de la", "à la", "du"], "Depuis le théâtre, vous partez pour la gare.", "« Pour la gare » présente la gare comme destination prévue."),
      q("Depuis Paris, notre avion part ___ Canada ce soir.", "pour le", ["pour le", "du", "au", "de la"], "Depuis Paris, notre avion part pour le Canada ce soir.", "Après partir, on peut dire « pour le Canada »."),
      q("Le car quitte Nice ___ Cannes.", "pour", ROUTE, "Le car quitte Nice pour Cannes.", "Cannes est la destination : pour Cannes."),
      q("Depuis l’hôtel, ils partent ___ aéroport à six heures.", "pour l’", ["pour l’", "de l’", "à l’", "du"], "Depuis l’hôtel, ils partent pour l’aéroport à six heures.", "L’aéroport est la destination prévue : pour l’aéroport."),
    ],
  },
  {
    id: "return-from", name: "Rentrer de", hotspot: { left: "52%", top: "59%", width: "15%", height: "14%" }, highlightColor: "145, 69, 52",
    questions: [
      q("Nous rentrons ___ Lyon ce soir.", "de", ROUTE, "Nous rentrons de Lyon ce soir.", "Lyon est le point de départ : de Lyon."),
      q("Elle revient ___ Paris en train.", "de", ROUTE, "Elle revient de Paris en train.", "Paris est l’origine du retour : de Paris."),
      q("Après le travail, mon père rentre ___ maison.", "à la", ["à la", "de la", "du", "chez"], "Après le travail, mon père rentre à la maison.", "La maison est la destination : à la maison."),
      q("Les élèves viennent ___ école à pied.", "de l’", ORIGIN, "Les élèves viennent de l’école à pied.", "L’école est l’origine : de l’école."),
      q("Nous allons ___ gare en bus.", "à la", ["à la", "de la", "du", "pour"], "Nous allons à la gare en bus.", "La gare est la destination : à la gare."),
      q("Depuis Lyon, ce train part ___ Marseille.", "pour", ROUTE, "Depuis Lyon, ce train part pour Marseille.", "Après partir, « pour » indique la destination."),
      q("Vous voyagez ___ train jusqu’à Bordeaux.", "en", ["en", "à", "au", "par le"], "Vous voyagez en train jusqu’à Bordeaux.", "On utilise généralement « en » avec le train."),
      q("Paul se déplace ___ vélo dans la ville.", "à", ["à", "en", "au", "par"], "Paul se déplace à vélo dans la ville.", "Avec vélo, on utilise « à » : à vélo."),
      q("Son avion arrive ___ Belgique.", "de", ["de", "du", "des", "à"], "Son avion arrive de Belgique.", "La Belgique est l’origine : de Belgique."),
      q("Après la promenade, ils retournent ___ musée.", "au", DESTINATION, "Après la promenade, ils retournent au musée.", "Musée est masculin : au musée."),
    ],
  },
] as const;

export const journeyLessonById = Object.fromEntries(journeyLessons.map((lesson) => [lesson.id, lesson])) as Record<string, JourneyLesson>;

function completedDisplay(question: JourneyQuestion): string {
  return question.answer.endsWith("’")
    ? question.display.replace("___ ", question.answer)
    : question.display.replace("___", question.answer);
}

function validateJourneyLessons(): void {
  if (journeyLessons.length !== 8) throw new Error("Chapter 3 must contain exactly eight lessons.");
  if (new Set(journeyLessons.map((lesson) => lesson.id)).size !== journeyLessons.length) throw new Error("Chapter 3 lesson IDs must be unique.");
  let total = 0;
  const answers = new Set<string>();
  for (const lesson of journeyLessons) {
    if (lesson.questions.length !== 10) throw new Error(`${lesson.name} must contain ten questions.`);
    if (!lesson.hotspot.left || !lesson.hotspot.top || !lesson.hotspot.width || !lesson.hotspot.height || !lesson.highlightColor) throw new Error(`${lesson.name} needs hotspot and highlight data.`);
    total += lesson.questions.length;
    for (const question of lesson.questions) {
      if ((question.display.match(/___/g) ?? []).length !== 1) throw new Error(`Invalid blank: ${question.display}`);
      if (question.choices.length !== 4 || new Set(question.choices).size !== 4) throw new Error(`Invalid choices: ${question.display}`);
      if (question.choices.filter((choice) => choice === question.answer).length !== 1) throw new Error(`Answer missing from choices: ${question.display}`);
      if (!question.spoken || question.spoken.includes("_") || !question.note) throw new Error(`Invalid question data: ${question.display}`);
      if (completedDisplay(question) !== question.spoken) throw new Error(`Spoken mismatch: ${question.display}`);
      answers.add(question.answer);
    }
  }
  if (total !== 80) throw new Error("Chapter 3 must contain exactly eighty questions.");
  const requiredAnswers = ["à", "au", "à la", "à l’", "aux", "de", "du", "de la", "de l’", "des", "pour", "à vélo", "à pied", "en train", "chez"];
  for (const answer of requiredAnswers) if (!answers.has(answer)) throw new Error(`Chapter 3 is missing the target form: ${answer}`);
}

validateJourneyLessons();
