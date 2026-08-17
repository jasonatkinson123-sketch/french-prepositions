export type DeAQuestion = { display: string; answer: string; choices: readonly string[]; spoken: string; note: string };
export type DeALesson = {
  id: string;
  name: string;
  hotspot: { left: string; top: string; width: string; height: string };
  highlightColor: string;
  questions: readonly DeAQuestion[];
};

const DE = ["du", "de la", "de l’", "des"] as const;
const A = ["au", "à la", "à l’", "aux"] as const;
function q(display: string, answer: string, choices: readonly string[], spoken: string, note: string): DeAQuestion {
  return { display, answer, choices, spoken, note };
}

export const deALessons: readonly DeALesson[] = [
  {
    id: "du", name: "Leçon du", hotspot: { left: "34%", top: "37%", width: "17%", height: "4.7%" }, highlightColor: "139, 93, 48",
    questions: [
      q("Paul revient ___ marché.", "du", DE, "Paul revient du marché.", "« Marché » est masculin singulier : de + le devient « du »."),
      q("Je viens ___ Canada.", "du", DE, "Je viens du Canada.", "Le Canada est masculin : on dit « du Canada »."),
      q("C’est le vélo ___ professeur.", "du", DE, "C’est le vélo du professeur.", "« Professeur » est masculin singulier : on emploie « du »."),
      q("Nous parlons ___ film après la séance.", "du", DE, "Nous parlons du film après la séance.", "Parler d’un film masculin donne « parler du film »."),
      q("Elle sort ___ musée à dix-sept heures.", "du", DE, "Elle sort du musée à dix-sept heures.", "Sortir de + le musée devient « sortir du musée »."),
      q("Le train part ___ quai numéro trois.", "du", DE, "Le train part du quai numéro trois.", "« Quai » est masculin singulier : de + le devient « du »."),
      q("Il revient ___ bureau, tandis que Marie va au bureau.", "du", ["du", "au", "de la", "à la"], "Il revient du bureau, tandis que Marie va au bureau.", "Revenir indique l’origine : on emploie « du bureau »."),
      q("Nous sortons ___ restaurant avant d’aller au cinéma.", "du", ["du", "au", "des", "aux"], "Nous sortons du restaurant avant d’aller au cinéma.", "Sortir indique la provenance : « du restaurant »."),
      q("Elle parle ___ directeur, mais elle écrit à la directrice.", "du", ["du", "au", "de la", "à la"], "Elle parle du directeur, mais elle écrit à la directrice.", "Parler du directeur signifie parler à son sujet."),
      q("Le bus revient ___ centre-ville avant de repartir au stade.", "du", ["du", "au", "de l’", "à l’"], "Le bus revient du centre-ville avant de repartir au stade.", "Le retour vient du centre-ville : de + le devient « du »."),
    ],
  },
  {
    id: "de-la", name: "Leçon de la", hotspot: { left: "34%", top: "42%", width: "17%", height: "4.7%" }, highlightColor: "100, 116, 67",
    questions: [
      q("Nous revenons ___ gare.", "de la", DE, "Nous revenons de la gare.", "« Gare » est féminin singulier : on utilise « de la »."),
      q("Ce fromage vient ___ région voisine.", "de la", DE, "Ce fromage vient de la région voisine.", "« Région » est féminin singulier : on dit « de la région »."),
      q("C’est le bureau ___ directrice.", "de la", DE, "C’est le bureau de la directrice.", "La relation avec une directrice se construit avec « de la »."),
      q("Ils parlent ___ musique française.", "de la", DE, "Ils parlent de la musique française.", "« Musique » est féminin singulier : parler de la musique."),
      q("Elle sort ___ bibliothèque à midi.", "de la", DE, "Elle sort de la bibliothèque à midi.", "Sortir de + la bibliothèque donne « de la bibliothèque »."),
      q("La clé ___ voiture est sur la table.", "de la", DE, "La clé de la voiture est sur la table.", "« Voiture » est féminin singulier : la clé de la voiture."),
      q("Paul revient ___ piscine avant d’aller au parc.", "de la", ["de la", "à la", "du", "au"], "Paul revient de la piscine avant d’aller au parc.", "Revenir indique l’origine : « de la piscine »."),
      q("Nous parlons ___ gare, puis nous allons à la gare.", "de la", ["de la", "à la", "du", "au"], "Nous parlons de la gare, puis nous allons à la gare.", "Parler de signifie parler au sujet de la gare."),
      q("Le colis arrive ___ poste avant d’être porté à la mairie.", "de la", ["de la", "à la", "des", "aux"], "Le colis arrive de la poste avant d’être porté à la mairie.", "Le colis provient de la poste."),
      q("Le parfum ___ fleur se répand dans la pièce.", "de la", ["de la", "à la", "du", "au"], "Le parfum de la fleur se répand dans la pièce.", "Le parfum appartient à une fleur féminine singulière."),
    ],
  },
  {
    id: "de-l", name: "Leçon de l’", hotspot: { left: "34%", top: "47%", width: "17%", height: "4.7%" }, highlightColor: "78, 105, 116",
    questions: [
      q("Les élèves sortent ___ école.", "de l’", DE, "Les élèves sortent de l’école.", "Devant une voyelle, on emploie « de l’ »."),
      q("Nous revenons ___ aéroport.", "de l’", DE, "Nous revenons de l’aéroport.", "« Aéroport » commence par une voyelle : de l’aéroport."),
      q("Elle sort ___ hôtel tôt le matin.", "de l’", DE, "Elle sort de l’hôtel tôt le matin.", "Le h de « hôtel » est muet : on dit « de l’hôtel »."),
      q("C’est le sac ___ amie de Paul.", "de l’", DE, "C’est le sac de l’amie de Paul.", "« Amie » commence par une voyelle : de l’amie."),
      q("Ils parlent ___ université voisine.", "de l’", DE, "Ils parlent de l’université voisine.", "« Université » commence par une voyelle : de l’université."),
      q("Le toit ___ hôpital est neuf.", "de l’", DE, "Le toit de l’hôpital est neuf.", "Le h de « hôpital » est muet : de l’hôpital."),
      q("Marie revient ___ école avant d’aller au marché.", "de l’", ["de l’", "à l’", "du", "au"], "Marie revient de l’école avant d’aller au marché.", "Revenir indique l’origine : de l’école."),
      q("Nous parlons ___ hôtel, puis nous allons à l’hôtel.", "de l’", ["de l’", "à l’", "de la", "à la"], "Nous parlons de l’hôtel, puis nous allons à l’hôtel.", "Parler de signifie parler au sujet de l’hôtel."),
      q("Le taxi arrive ___ aéroport et repart vers la gare.", "de l’", ["de l’", "à l’", "du", "au"], "Le taxi arrive de l’aéroport et repart vers la gare.", "Le taxi provient de l’aéroport."),
      q("La porte ___ appartement est ouverte.", "de l’", ["de l’", "à l’", "de la", "à la"], "La porte de l’appartement est ouverte.", "« Appartement » commence par une voyelle : de l’appartement."),
    ],
  },
  {
    id: "des", name: "Leçon des", hotspot: { left: "34%", top: "52%", width: "17%", height: "4.7%" }, highlightColor: "146, 73, 51",
    questions: [
      q("Nous revenons ___ Pays-Bas.", "des", DE, "Nous revenons des Pays-Bas.", "« Pays-Bas » est pluriel : de + les devient « des »."),
      q("Ils arrivent ___ États-Unis.", "des", DE, "Ils arrivent des États-Unis.", "« États-Unis » est pluriel : on dit « des États-Unis »."),
      q("Les cahiers ___ élèves sont sur le bureau.", "des", DE, "Les cahiers des élèves sont sur le bureau.", "Au pluriel, de + les devient « des »."),
      q("Elle parle ___ examens de juin.", "des", DE, "Elle parle des examens de juin.", "« Examens » est pluriel : parler des examens."),
      q("Nous sortons ___ magasins à dix-huit heures.", "des", DE, "Nous sortons des magasins à dix-huit heures.", "Sortir de plusieurs magasins donne « des magasins »."),
      q("Le bruit ___ voitures remplit la rue.", "des", DE, "Le bruit des voitures remplit la rue.", "La relation avec un nom pluriel se construit avec « des »."),
      q("Paul revient ___ toilettes avant d’aller au café.", "des", ["des", "aux", "du", "au"], "Paul revient des toilettes avant d’aller au café.", "Revenir indique l’origine : des toilettes."),
      q("Nous parlons ___ parents, puis nous écrivons aux parents.", "des", ["des", "aux", "de la", "à la"], "Nous parlons des parents, puis nous écrivons aux parents.", "Parler des parents signifie parler à leur sujet."),
      q("Le car revient ___ montagnes et repart vers la ville.", "des", ["des", "aux", "du", "au"], "Le car revient des montagnes et repart vers la ville.", "Les montagnes sont le lieu d’origine."),
      q("La maîtresse corrige les travaux ___ enfants.", "des", ["des", "aux", "de l’", "à l’"], "La maîtresse corrige les travaux des enfants.", "« Enfants » est pluriel : de + les devient « des »."),
    ],
  },
  {
    id: "au", name: "Leçon au", hotspot: { left: "55%", top: "37%", width: "14%", height: "4.7%" }, highlightColor: "110, 126, 73",
    questions: [
      q("Nous allons ___ cinéma.", "au", A, "Nous allons au cinéma.", "« Cinéma » est masculin singulier : à + le devient « au »."),
      q("Je vais ___ marché ce matin.", "au", A, "Je vais au marché ce matin.", "« Marché » est masculin singulier : on dit « au marché »."),
      q("Elle parle ___ professeur après le cours.", "au", A, "Elle parle au professeur après le cours.", "Parler à un professeur masculin donne « au professeur »."),
      q("Il travaille ___ musée municipal.", "au", A, "Il travaille au musée municipal.", "« Musée » est masculin singulier : à + le devient « au »."),
      q("Nous restons ___ café pendant une heure.", "au", A, "Nous restons au café pendant une heure.", "« Café » est masculin singulier : on dit « au café »."),
      q("Paul donne le livre ___ directeur.", "au", A, "Paul donne le livre au directeur.", "Le directeur est le destinataire : à + le devient « au »."),
      q("Marie va ___ bureau, tandis que Paul revient du bureau.", "au", ["au", "du", "à la", "de la"], "Marie va au bureau, tandis que Paul revient du bureau.", "Aller indique la destination : au bureau."),
      q("Nous arrivons ___ restaurant après être sortis du cinéma.", "au", ["au", "du", "aux", "des"], "Nous arrivons au restaurant après être sortis du cinéma.", "Arriver indique la destination : au restaurant."),
      q("Elle parle ___ directeur, et non pas du directeur.", "au", ["au", "du", "à la", "de la"], "Elle parle au directeur, et non pas du directeur.", "Parler au directeur signifie s’adresser à lui."),
      q("Nous attendons ___ kiosque principal.", "au", ["au", "du", "à l’", "de l’"], "Nous attendons au kiosque principal.", "Le kiosque est le lieu où nous attendons."),
    ],
  },
  {
    id: "a-la", name: "Leçon à la", hotspot: { left: "55%", top: "42%", width: "14%", height: "4.7%" }, highlightColor: "144, 76, 55",
    questions: [
      q("Nous allons ___ gare.", "à la", A, "Nous allons à la gare.", "« Gare » est féminin singulier : on utilise « à la »."),
      q("Elle étudie ___ bibliothèque.", "à la", A, "Elle étudie à la bibliothèque.", "« Bibliothèque » est féminin singulier : à la bibliothèque."),
      q("Paul écrit ___ directrice.", "à la", A, "Paul écrit à la directrice.", "La directrice est la destinataire : à la directrice."),
      q("Nous achetons du pain ___ boulangerie.", "à la", A, "Nous achetons du pain à la boulangerie.", "« Boulangerie » est féminin singulier : à la boulangerie."),
      q("Les enfants nagent ___ piscine.", "à la", A, "Les enfants nagent à la piscine.", "« Piscine » est féminin singulier : à la piscine."),
      q("Je donne le dossier ___ secrétaire.", "à la", A, "Je donne le dossier à la secrétaire.", "La secrétaire est la destinataire : à la secrétaire."),
      q("Marie retourne ___ gare après être revenue de la gare.", "à la", ["à la", "de la", "au", "du"], "Marie retourne à la gare après être revenue de la gare.", "Retourner indique ici la destination : à la gare."),
      q("Nous parlons ___ directrice, pas de la directrice.", "à la", ["à la", "de la", "au", "du"], "Nous parlons à la directrice, pas de la directrice.", "Parler à signifie s’adresser à la directrice."),
      q("Le facteur apporte une lettre ___ mairie.", "à la", ["à la", "de la", "aux", "des"], "Le facteur apporte une lettre à la mairie.", "La mairie est la destination de la lettre."),
      q("Ils restent ___ maison pendant l’orage.", "à la", ["à la", "de la", "à l’", "de l’"], "Ils restent à la maison pendant l’orage.", "L’expression de lieu est « à la maison »."),
    ],
  },
  {
    id: "a-l", name: "Leçon à l’", hotspot: { left: "55%", top: "47%", width: "14%", height: "4.7%" }, highlightColor: "75, 105, 120",
    questions: [
      q("Les enfants vont ___ école.", "à l’", A, "Les enfants vont à l’école.", "Devant une voyelle, on emploie « à l’ »."),
      q("Nous arrivons ___ aéroport à midi.", "à l’", A, "Nous arrivons à l’aéroport à midi.", "« Aéroport » commence par une voyelle : à l’aéroport."),
      q("Elle séjourne ___ hôtel près de la gare.", "à l’", A, "Elle séjourne à l’hôtel près de la gare.", "Le h de « hôtel » est muet : à l’hôtel."),
      q("Paul étudie ___ université.", "à l’", A, "Paul étudie à l’université.", "« Université » commence par une voyelle : à l’université."),
      q("Nous attendons ___ hôpital.", "à l’", A, "Nous attendons à l’hôpital.", "Le h de « hôpital » est muet : à l’hôpital."),
      q("Je donne la clé ___ amie de Marie.", "à l’", A, "Je donne la clé à l’amie de Marie.", "« Amie » commence par une voyelle : à l’amie."),
      q("Luc retourne ___ école après être sorti de l’école.", "à l’", ["à l’", "de l’", "au", "du"], "Luc retourne à l’école après être sorti de l’école.", "Retourner indique la destination : à l’école."),
      q("Nous parlons ___ architecte, et non de l’architecte.", "à l’", ["à l’", "de l’", "à la", "de la"], "Nous parlons à l’architecte, et non de l’architecte.", "Parler à signifie s’adresser à l’architecte."),
      q("Le taxi conduit les voyageurs ___ aéroport.", "à l’", ["à l’", "de l’", "aux", "des"], "Le taxi conduit les voyageurs à l’aéroport.", "L’aéroport est la destination."),
      q("Elle reste ___ hôtel pendant la nuit.", "à l’", ["à l’", "de l’", "au", "du"], "Elle reste à l’hôtel pendant la nuit.", "Le lieu où elle reste est l’hôtel."),
    ],
  },
  {
    id: "aux", name: "Leçon aux", hotspot: { left: "55%", top: "52%", width: "14%", height: "4.7%" }, highlightColor: "118, 91, 50",
    questions: [
      q("Le professeur parle ___ parents.", "aux", A, "Le professeur parle aux parents.", "« Parents » est pluriel : à + les devient « aux »."),
      q("Nous allons ___ États-Unis.", "aux", A, "Nous allons aux États-Unis.", "« États-Unis » est pluriel : on dit « aux États-Unis »."),
      q("Ils habitent ___ Pays-Bas.", "aux", A, "Ils habitent aux Pays-Bas.", "« Pays-Bas » est pluriel : à + les devient « aux »."),
      q("Elle écrit ___ élèves absents.", "aux", A, "Elle écrit aux élèves absents.", "Les élèves sont les destinataires : aux élèves."),
      q("Les enfants vont ___ toilettes.", "aux", A, "Les enfants vont aux toilettes.", "« Toilettes » est pluriel : aux toilettes."),
      q("Je donne les billets ___ visiteurs.", "aux", A, "Je donne les billets aux visiteurs.", "Les visiteurs sont les destinataires : aux visiteurs."),
      q("Paul retourne ___ Pays-Bas après être revenu des Pays-Bas.", "aux", ["aux", "des", "au", "du"], "Paul retourne aux Pays-Bas après être revenu des Pays-Bas.", "Retourner indique la destination : aux Pays-Bas."),
      q("Nous parlons ___ parents, pas des parents.", "aux", ["aux", "des", "à la", "de la"], "Nous parlons aux parents, pas des parents.", "Parler aux parents signifie s’adresser à eux."),
      q("Le guide conduit les touristes ___ monuments du centre.", "aux", ["aux", "des", "à l’", "de l’"], "Le guide conduit les touristes aux monuments du centre.", "Les monuments sont la destination."),
      q("Elle apporte des fleurs ___ voisins.", "aux", ["aux", "des", "au", "du"], "Elle apporte des fleurs aux voisins.", "Les voisins sont les destinataires : aux voisins."),
    ],
  },
] as const;

export const deALessonById = Object.fromEntries(deALessons.map((lesson) => [lesson.id, lesson])) as Record<string, DeALesson>;

function completedDisplay(question: DeAQuestion): string {
  return question.answer.endsWith("’")
    ? question.display.replace("___ ", question.answer)
    : question.display.replace("___", question.answer);
}

function validateDeALessons(): void {
  if (deALessons.length !== 8) throw new Error("Chapter 6 must contain exactly eight lessons.");
  if (new Set(deALessons.map((lesson) => lesson.id)).size !== deALessons.length) throw new Error("Chapter 6 lesson IDs must be unique.");
  let total = 0;
  const targets = new Set<string>();
  for (const lesson of deALessons) {
    if (lesson.questions.length !== 10) throw new Error(`${lesson.name} must contain ten questions.`);
    if (!lesson.hotspot.left || !lesson.hotspot.top || !lesson.hotspot.width || !lesson.hotspot.height || !lesson.highlightColor) throw new Error(`${lesson.name} needs hotspot and highlight data.`);
    total += lesson.questions.length;
    for (const question of lesson.questions) {
      if ((question.display.match(/___/g) ?? []).length !== 1) throw new Error(`Invalid blank: ${question.display}`);
      if (question.choices.length !== 4 || new Set(question.choices).size !== 4) throw new Error(`Invalid choices: ${question.display}`);
      if (question.choices.filter((choice) => choice === question.answer).length !== 1) throw new Error(`Answer missing from choices: ${question.display}`);
      if (!question.spoken || question.spoken.includes("_") || !question.note) throw new Error(`Invalid question data: ${question.display}`);
      if (completedDisplay(question) !== question.spoken) throw new Error(`Spoken mismatch: ${question.display}`);
      if (question.answer === "de le" || question.answer === "à le") throw new Error(`Invalid contraction: ${question.display}`);
      targets.add(question.answer);
    }
  }
  if (total !== 80) throw new Error("Chapter 6 must contain exactly eighty questions.");
  for (const target of ["du", "de la", "de l’", "des", "au", "à la", "à l’", "aux"]) {
    if (!targets.has(target)) throw new Error(`Chapter 6 is missing ${target}.`);
  }
}

validateDeALessons();
