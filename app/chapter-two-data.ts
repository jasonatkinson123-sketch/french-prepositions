export const townAnswers = ["à", "au", "à la", "à l’", "aux", "chez"] as const;

export type TownAnswer = (typeof townAnswers)[number];
export type TownQuestion = {
  display: string;
  answer: TownAnswer;
  choices: readonly TownAnswer[];
  spoken: string;
  note: string;
};

export type TownLesson = {
  id: string;
  name: string;
  hotspot: { left: string; top: string; width: string; height: string };
  highlightColor: string;
  questions: readonly TownQuestion[];
};

const AL = ["à l’", "au", "à la", "chez"] as const;
const AU = ["au", "à la", "à l’", "chez"] as const;
const ALA = ["à la", "au", "à l’", "chez"] as const;
const MIX = ["au", "à la", "à l’", "aux"] as const;
const ALL_SINGULAR = ["à", "au", "à la", "à l’"] as const;
const CHEZ = ["chez", "au", "à la", "à l’"] as const;

function q(display: string, answer: TownAnswer, choices: readonly TownAnswer[], spoken: string, note: string): TownQuestion {
  return { display, answer, choices, spoken, note };
}

export const townLessons: readonly TownLesson[] = [
  {
    id: "school", name: "École", hotspot: { left: "10%", top: "13%", width: "28%", height: "26%" }, highlightColor: "82, 111, 127",
    questions: [
      q("Les élèves arrivent ___ école à huit heures.", "à l’", AL, "Les élèves arrivent à l’école à huit heures.", "Devant école, on utilise « à l’ » : à l’école."),
      q("Ma sœur étudie ___ université.", "à l’", AL, "Ma sœur étudie à l’université.", "Devant université, on utilise « à l’ » : à l’université."),
      q("Nous accompagnons Luc ___ hôpital.", "à l’", AL, "Nous accompagnons Luc à l’hôpital.", "Devant un h muet, on utilise « à l’ » : à l’hôpital."),
      q("Le taxi nous attend ___ aéroport.", "à l’", AL, "Le taxi nous attend à l’aéroport.", "Devant aéroport, on utilise « à l’ » : à l’aéroport."),
      q("Vous restez ___ hôtel ce soir.", "à l’", AL, "Vous restez à l’hôtel ce soir.", "Devant un h muet, on utilise « à l’ » : à l’hôtel."),
      q("Ils se retrouvent ___ église dimanche.", "à l’", AL, "Ils se retrouvent à l’église dimanche.", "Devant église, on utilise « à l’ » : à l’église."),
      q("Le professeur retourne ___ école après le déjeuner.", "à l’", AL, "Le professeur retourne à l’école après le déjeuner.", "École commence par une voyelle : à l’école."),
      q("Elle travaille ___ université depuis septembre.", "à l’", AL, "Elle travaille à l’université depuis septembre.", "Université commence par une voyelle : à l’université."),
      q("On prend un café ___ hôtel.", "à l’", AL, "On prend un café à l’hôtel.", "Hôtel commence par un h muet : à l’hôtel."),
      q("Tu arrives ___ aéroport avant midi.", "à l’", AL, "Tu arrives à l’aéroport avant midi.", "Aéroport commence par une voyelle : à l’aéroport."),
    ],
  },
  {
    id: "cinema", name: "Cinéma", hotspot: { left: "44%", top: "15%", width: "22%", height: "23%" }, highlightColor: "148, 71, 52",
    questions: [
      q("Nous allons ___ cinéma ce soir.", "au", AU, "Nous allons au cinéma ce soir.", "Cinéma est masculin : au cinéma."),
      q("Vous assistez à une pièce ___ théâtre.", "au", AU, "Vous assistez à une pièce au théâtre.", "Théâtre est masculin : au théâtre."),
      q("Ils déjeunent ___ restaurant près de la place.", "au", AU, "Ils déjeunent au restaurant près de la place.", "Restaurant est masculin : au restaurant."),
      q("Ma mère achète des légumes ___ marché.", "au", AU, "Ma mère achète des légumes au marché.", "Marché est masculin : au marché."),
      q("Les supporters arrivent ___ stade.", "au", AU, "Les supporters arrivent au stade.", "Stade est masculin : au stade."),
      q("Tu passes ___ supermarché après le travail.", "au", AU, "Tu passes au supermarché après le travail.", "Supermarché est masculin : au supermarché."),
      q("Mon oncle reste ___ bureau jusqu’à six heures.", "au", AU, "Mon oncle reste au bureau jusqu’à six heures.", "Bureau est masculin : au bureau."),
      q("On se retrouve ___ cinéma à dix-neuf heures.", "au", AU, "On se retrouve au cinéma à dix-neuf heures.", "On dit « au cinéma » avec ce nom masculin."),
      q("Elle travaille ___ théâtre pendant l’été.", "au", AU, "Elle travaille au théâtre pendant l’été.", "On dit « au théâtre » avec ce nom masculin."),
      q("Les enfants jouent ___ stade le mercredi.", "au", AU, "Les enfants jouent au stade le mercredi.", "On dit « au stade » avec ce nom masculin."),
    ],
  },
  {
    id: "station", name: "Gare", hotspot: { left: "69%", top: "16%", width: "27%", height: "23%" }, highlightColor: "78, 98, 110",
    questions: [
      q("Le train arrive ___ gare à neuf heures.", "à la", ALA, "Le train arrive à la gare à neuf heures.", "Gare est féminin : à la gare."),
      q("Mon père travaille ___ banque.", "à la", ALA, "Mon père travaille à la banque.", "Banque est féminin : à la banque."),
      q("Je dépose cette lettre ___ poste.", "à la", ALA, "Je dépose cette lettre à la poste.", "Poste est féminin dans ce sens : à la poste."),
      q("Les enfants nagent ___ piscine.", "à la", ALA, "Les enfants nagent à la piscine.", "Piscine est féminin : à la piscine."),
      q("Nous marchons ___ plage au coucher du soleil.", "à la", ALA, "Nous marchons à la plage au coucher du soleil.", "Plage est féminin : à la plage."),
      q("Elle achète du pain ___ boulangerie.", "à la", ALA, "Elle achète du pain à la boulangerie.", "Boulangerie est féminin : à la boulangerie."),
      q("Tu vas chercher le médicament ___ pharmacie.", "à la", ALA, "Tu vas chercher le médicament à la pharmacie.", "Pharmacie est féminin : à la pharmacie."),
      q("Nous attendons nos amis ___ gare.", "à la", ALA, "Nous attendons nos amis à la gare.", "On dit « à la gare » avec ce nom féminin."),
      q("Vous passez ___ banque avant midi.", "à la", ALA, "Vous passez à la banque avant midi.", "On dit « à la banque » avec ce nom féminin."),
      q("Le facteur retourne ___ poste.", "à la", ALA, "Le facteur retourne à la poste.", "On dit « à la poste » avec ce nom féminin."),
    ],
  },
  {
    id: "museum", name: "Musée", hotspot: { left: "67%", top: "40%", width: "27%", height: "23%" }, highlightColor: "157, 116, 53",
    questions: [
      q("La classe passe l’après-midi ___ musée.", "au", MIX, "La classe passe l’après-midi au musée.", "Musée est masculin : au musée."),
      q("Nous admirons des photos ___ galerie.", "à la", MIX, "Nous admirons des photos à la galerie.", "Galerie est féminin : à la galerie."),
      q("Elle retrouve ses amis ___ exposition.", "à l’", MIX, "Elle retrouve ses amis à l’exposition.", "Exposition commence par une voyelle : à l’exposition."),
      q("Les touristes arrivent ___ château avant midi.", "au", MIX, "Les touristes arrivent au château avant midi.", "Château est masculin : au château."),
      q("Vous déposez le dossier ___ mairie.", "à la", MIX, "Vous déposez le dossier à la mairie.", "Mairie est féminin : à la mairie."),
      q("On écoute un concert ___ opéra.", "à l’", MIX, "On écoute un concert à l’opéra.", "Opéra commence par une voyelle : à l’opéra."),
      q("Le guide nous attend ___ musée.", "au", MIX, "Le guide nous attend au musée.", "On dit « au musée » avec ce nom masculin."),
      q("Cette artiste expose ___ galerie municipale.", "à la", MIX, "Cette artiste expose à la galerie municipale.", "On dit « à la galerie » avec ce nom féminin."),
      q("Le maire retourne ___ mairie après la cérémonie.", "à la", MIX, "Le maire retourne à la mairie après la cérémonie.", "Mairie est féminin : à la mairie."),
      q("Nous entrons ___ opéra par la grande porte.", "à l’", MIX, "Nous entrons à l’opéra par la grande porte.", "Devant opéra, on utilise « à l’ »."),
    ],
  },
  {
    id: "park", name: "Parc", hotspot: { left: "7%", top: "41%", width: "27%", height: "34%" }, highlightColor: "91, 112, 65",
    questions: [
      q("Nous faisons une promenade ___ parc.", "au", MIX, "Nous faisons une promenade au parc.", "Parc est masculin : au parc."),
      q("Les jeunes jouent au football ___ stade.", "au", MIX, "Les jeunes jouent au football au stade.", "Stade est masculin : au stade."),
      q("Elle marche ___ plage chaque matin.", "à la", MIX, "Elle marche à la plage chaque matin.", "Plage est féminin : à la plage."),
      q("Vous déjeunez ___ restaurant après la visite.", "au", MIX, "Vous déjeunez au restaurant après la visite.", "Restaurant est masculin : au restaurant."),
      q("J’attends mon frère ___ gare.", "à la", MIX, "J’attends mon frère à la gare.", "Gare est féminin : à la gare."),
      q("Sophie travaille ___ hôpital de la ville.", "à l’", MIX, "Sophie travaille à l’hôpital de la ville.", "Hôpital commence par un h muet : à l’hôpital."),
      q("Les enfants retrouvent leur père ___ piscine.", "à la", MIX, "Les enfants retrouvent leur père à la piscine.", "Piscine est féminin : à la piscine."),
      q("Tu lis tranquillement ___ parc.", "au", MIX, "Tu lis tranquillement au parc.", "On dit « au parc » avec ce nom masculin."),
      q("Nous arrivons ___ aéroport en avance.", "à l’", MIX, "Nous arrivons à l’aéroport en avance.", "Aéroport commence par une voyelle : à l’aéroport."),
      q("Ils passent la journée ___ plage.", "à la", MIX, "Ils passent la journée à la plage.", "On dit « à la plage » avec ce nom féminin."),
    ],
  },
  {
    id: "cafe", name: "Café", hotspot: { left: "36%", top: "55%", width: "18%", height: "22%" }, highlightColor: "155, 80, 54",
    questions: [
      q("Nous prenons le petit déjeuner ___ café.", "au", MIX, "Nous prenons le petit déjeuner au café.", "Café est masculin : au café."),
      q("Mes collègues déjeunent ___ restaurant.", "au", MIX, "Mes collègues déjeunent au restaurant.", "Restaurant est masculin : au restaurant."),
      q("Elle choisit un gâteau ___ boulangerie.", "à la", MIX, "Elle choisit un gâteau à la boulangerie.", "Boulangerie est féminin : à la boulangerie."),
      q("Vous retirez de l’argent ___ banque.", "à la", MIX, "Vous retirez de l’argent à la banque.", "Banque est féminin : à la banque."),
      q("Paul rencontre le marchand ___ marché.", "au", MIX, "Paul rencontre le marchand au marché.", "Marché est masculin : au marché."),
      q("Les voyageurs dorment ___ hôtel près de la gare.", "à l’", MIX, "Les voyageurs dorment à l’hôtel près de la gare.", "Hôtel commence par un h muet : à l’hôtel."),
      q("Je vais chercher une ordonnance ___ pharmacie.", "à la", MIX, "Je vais chercher une ordonnance à la pharmacie.", "Pharmacie est féminin : à la pharmacie."),
      q("Mon équipe se réunit ___ bureau le lundi.", "au", MIX, "Mon équipe se réunit au bureau le lundi.", "Bureau est masculin : au bureau."),
      q("Ce café se trouve ___ Lyon.", "à", ALL_SINGULAR, "Ce café se trouve à Lyon.", "Devant un nom de ville, on utilise « à » : à Lyon."),
      q("Tu attends le bus ___ hôtel.", "à l’", MIX, "Tu attends le bus à l’hôtel.", "Devant hôtel, on utilise « à l’ »."),
    ],
  },
  {
    id: "library", name: "Bibliothèque", hotspot: { left: "14%", top: "77%", width: "24%", height: "17%" }, highlightColor: "113, 83, 56",
    questions: [
      q("Les enfants lisent ___ bibliothèque après l’école.", "à la", MIX, "Les enfants lisent à la bibliothèque après l’école.", "Bibliothèque est féminin : à la bibliothèque."),
      q("Les documents anciens sont conservés ___ archives.", "aux", MIX, "Les documents anciens sont conservés aux archives.", "Archives est au pluriel : aux archives."),
      q("Il demande son chemin ___ Halles.", "aux", MIX, "Il demande son chemin aux Halles.", "Halles est au pluriel : aux Halles."),
      q("Après l’accident, elle arrive ___ urgences.", "aux", MIX, "Après l’accident, elle arrive aux urgences.", "Urgences est au pluriel : aux urgences."),
      q("Vous allez ___ toilettes avant de partir.", "aux", MIX, "Vous allez aux toilettes avant de partir.", "Toilettes est au pluriel : aux toilettes."),
      q("Nous préparons notre exposé ___ université.", "à l’", MIX, "Nous préparons notre exposé à l’université.", "Université commence par une voyelle : à l’université."),
      q("Vous achetez ce roman ___ librairie.", "à la", MIX, "Vous achetez ce roman à la librairie.", "Librairie est féminin : à la librairie."),
      q("Le salon du livre a lieu ___ Paris.", "à", ALL_SINGULAR, "Le salon du livre a lieu à Paris.", "Devant un nom de ville, on utilise « à » : à Paris."),
      q("Les élèves retournent ___ école après la sortie.", "à l’", MIX, "Les élèves retournent à l’école après la sortie.", "École commence par une voyelle : à l’école."),
      q("Nous terminons la visite ___ musée.", "au", MIX, "Nous terminons la visite au musée.", "Musée est masculin : au musée."),
    ],
  },
  {
    id: "chez-paul", name: "Chez Paul", hotspot: { left: "75%", top: "66%", width: "21%", height: "27%" }, highlightColor: "92, 113, 87",
    questions: [
      q("Nous dînons ___ Paul ce soir.", "chez", CHEZ, "Nous dînons chez Paul ce soir.", "Devant le nom d’une personne, on utilise « chez »."),
      q("Elle passe le week-end ___ Marie.", "chez", CHEZ, "Elle passe le week-end chez Marie.", "On dit « chez Marie » pour parler de son domicile."),
      q("Les enfants restent ___ mes parents.", "chez", CHEZ, "Les enfants restent chez mes parents.", "Devant des personnes, on utilise « chez »."),
      q("Vous déjeunez ___ nous dimanche.", "chez", CHEZ, "Vous déjeunez chez nous dimanche.", "Avec un pronom tonique, on utilise « chez » : chez nous."),
      q("Luc a rendez-vous ___ le médecin.", "chez", CHEZ, "Luc a rendez-vous chez le médecin.", "Avec un professionnel, on utilise « chez le médecin »."),
      q("Je vais ___ le dentiste demain matin.", "chez", CHEZ, "Je vais chez le dentiste demain matin.", "Avec un professionnel, on utilise « chez le dentiste »."),
      q("Tu te fais couper les cheveux ___ le coiffeur.", "chez", CHEZ, "Tu te fais couper les cheveux chez le coiffeur.", "Avec un professionnel, on utilise « chez le coiffeur »."),
      q("Nous achetons le pain ___ le boulanger.", "chez", CHEZ, "Nous achetons le pain chez le boulanger.", "Le boulanger est une personne : chez le boulanger."),
      q("Paul prend un café ___ café de la place.", "au", CHEZ, "Paul prend un café au café de la place.", "Le café est un lieu masculin : au café."),
      q("Ma sœur récupère son ordonnance ___ pharmacie.", "à la", CHEZ, "Ma sœur récupère son ordonnance à la pharmacie.", "La pharmacie est un lieu féminin : à la pharmacie."),
    ],
  },
] as const;

export const townLessonById = Object.fromEntries(townLessons.map((lesson) => [lesson.id, lesson])) as Record<string, TownLesson>;

function completedDisplay(question: TownQuestion): string {
  const joiner = question.answer.endsWith("’") ? question.answer : `${question.answer} `;
  return question.display.replace("___ ", joiner);
}

function validateTownLessons(): void {
  if (townLessons.length !== 8) throw new Error("Chapter 2 must contain exactly eight lessons.");
  if (new Set(townLessons.map((lesson) => lesson.id)).size !== townLessons.length) throw new Error("Chapter 2 lesson IDs must be unique.");
  let total = 0;
  for (const lesson of townLessons) {
    if (lesson.questions.length !== 10) throw new Error(`${lesson.name} must contain ten questions.`);
    if (!lesson.hotspot.left || !lesson.hotspot.top || !lesson.hotspot.width || !lesson.hotspot.height || !lesson.highlightColor) throw new Error(`${lesson.name} needs hotspot and highlight data.`);
    total += lesson.questions.length;
    for (const question of lesson.questions) {
      if ((question.display.match(/___/g) ?? []).length !== 1) throw new Error(`Invalid blank: ${question.display}`);
      if (question.choices.length !== 4 || new Set(question.choices).size !== 4) throw new Error(`Invalid choices: ${question.display}`);
      if (question.choices.filter((choice) => choice === question.answer).length !== 1) throw new Error(`Answer missing from choices: ${question.display}`);
      if (!townAnswers.includes(question.answer) || !question.spoken || question.spoken.includes("_") || !question.note) throw new Error(`Invalid question data: ${question.display}`);
      if (completedDisplay(question) !== question.spoken) throw new Error(`Spoken mismatch: ${question.display}`);
    }
  }
  if (total !== 80) throw new Error("Chapter 2 must contain exactly eighty questions.");
}

validateTownLessons();
