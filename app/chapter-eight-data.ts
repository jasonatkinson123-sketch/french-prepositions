export type AdjectiveQuestion = {
  display: string;
  answer: string;
  choices: readonly string[];
  spoken: string;
  note: string;
  construction: string;
};

export type AdjectiveLesson = {
  id: string;
  name: string;
  hotspot: { left: string; top: string; width: string; height: string };
  highlightColor: string;
  questions: readonly AdjectiveQuestion[];
};

function q(
  construction: string,
  display: string,
  answer: string,
  choices: readonly string[],
  spoken: string,
  note: string,
): AdjectiveQuestion {
  return { construction, display, answer, choices, spoken, note };
}

const deChoices = ["de", "à", "avec", "pour"] as const;
const avecChoices = ["avec", "de", "à", "par"] as const;
const parChoices = ["par", "de", "à", "pour"] as const;
const pourChoices = ["pour", "de", "à", "avec"] as const;

export const adjectiveLessons: readonly AdjectiveLesson[] = [
  {
    id: "content-de",
    name: "Content de",
    hotspot: { left: "28.5%", top: "24.5%", width: "13.5%", height: "17%" },
    highlightColor: "154, 88, 54",
    questions: [
      q("content de", "Léa est contente ___ son résultat.", "de", deChoices, "Léa est contente de son résultat.", "L’adjectif « content » se construit avec « de »."),
      q("content de", "Paul est content ___ son nouveau travail.", "de", deChoices, "Paul est content de son nouveau travail.", "On dit « content de quelque chose »."),
      q("content de", "Nous sommes contents ___ vous revoir.", "de", deChoices, "Nous sommes contents de vous revoir.", "« Content de » peut être suivi d’un infinitif."),
      q("content de", "Les musiciennes sont contentes ___ leur progrès.", "de", deChoices, "Les musiciennes sont contentes de leur progrès.", "Au féminin pluriel, la préposition reste « de »."),
      q("content de", "Tu es content ___ cette décision ?", "de", deChoices, "Tu es content de cette décision ?", "La construction correcte est « être content de »."),
      q("content de", "Mes parents sont contents ___ notre visite.", "de", deChoices, "Mes parents sont contents de notre visite.", "Le complément de « content » est introduit par « de »."),
      q("content de", "Elle est contente ___ apprendre le français.", "de", deChoices, "Elle est contente d’apprendre le français.", "Devant une voyelle, « de » s’élide en « d’ »."),
      q("content de", "Après le concert, vous êtes contents ___ la soirée.", "de", deChoices, "Après le concert, vous êtes contents de la soirée.", "On exprime la satisfaction avec « content de »."),
      q("content de", "Je suis content ___ te voir ici.", "de", deChoices, "Je suis content de te voir ici.", "Un infinitif après « content » est introduit par « de »."),
      q("content de", "Elles sont contentes ___ leur voyage à Lyon.", "de", deChoices, "Elles sont contentes de leur voyage à Lyon.", "La préposition attendue après « content » est « de »."),
    ],
  },
  {
    id: "fier-de",
    name: "Fier de",
    hotspot: { left: "44.2%", top: "24%", width: "12.5%", height: "17.5%" },
    highlightColor: "92, 112, 78",
    questions: [
      q("fier de", "Il est fier ___ son travail.", "de", deChoices, "Il est fier de son travail.", "L’adjectif « fier » se construit avec « de »."),
      q("fier de", "Marie est fière ___ sa fille.", "de", deChoices, "Marie est fière de sa fille.", "On dit « être fier ou fière de quelqu’un »."),
      q("fier de", "Nous sommes fiers ___ notre équipe.", "de", deChoices, "Nous sommes fiers de notre équipe.", "La fierté est introduite par « de »."),
      q("fier de", "Les musiciennes sont fières ___ leur concert.", "de", deChoices, "Les musiciennes sont fières de leur concert.", "L’accord change, mais la préposition reste « de »."),
      q("fier de", "Tu peux être fier ___ tes progrès.", "de", deChoices, "Tu peux être fier de tes progrès.", "« Fier de » présente la source de la fierté."),
      q("fier de", "Mon frère est fier ___ avoir terminé la course.", "de", deChoices, "Mon frère est fier d’avoir terminé la course.", "Devant une voyelle, « de » devient « d’ »."),
      q("fier de", "Vous êtes fiers ___ votre décision ?", "de", deChoices, "Vous êtes fiers de votre décision ?", "La construction correcte est « fier de »."),
      q("fier de", "Le professeur est fier ___ ses élèves.", "de", deChoices, "Le professeur est fier de ses élèves.", "Les personnes dont on est fier sont introduites par « de »."),
      q("fier de", "Je suis fière ___ représenter mon école.", "de", deChoices, "Je suis fière de représenter mon école.", "« Fier de » peut être suivi d’un infinitif."),
      q("fier de", "Ils sont fiers ___ ce projet collectif.", "de", deChoices, "Ils sont fiers de ce projet collectif.", "Après « fiers », on emploie « de »."),
    ],
  },
  {
    id: "aise-avec",
    name: "À l’aise avec",
    hotspot: { left: "58.2%", top: "24.5%", width: "13.5%", height: "18%" },
    highlightColor: "71, 111, 120",
    questions: [
      q("à l’aise avec", "Elle est à l’aise ___ ses amis.", "avec", avecChoices, "Elle est à l’aise avec ses amis.", "On emploie « à l’aise avec » pour exprimer le confort avec des personnes."),
      q("à l’aise avec", "Paul est à l’aise ___ les ordinateurs.", "avec", avecChoices, "Paul est à l’aise avec les ordinateurs.", "Une bonne maîtrise d’un outil peut s’exprimer avec « à l’aise avec »."),
      q("à l’aise avec", "Je suis à l’aise ___ cette équipe.", "avec", avecChoices, "Je suis à l’aise avec cette équipe.", "Le groupe est introduit par « avec »."),
      q("à l’aise avec", "Nous sommes à l’aise ___ le français oral.", "avec", avecChoices, "Nous sommes à l’aise avec le français oral.", "On dit « être à l’aise avec une langue ou une compétence »."),
      q("à l’aise avec", "Tu te sens à l’aise ___ ce logiciel ?", "avec", avecChoices, "Tu te sens à l’aise avec ce logiciel ?", "Le logiciel est introduit par « avec »."),
      q("à l’aise avec", "Les enfants sont à l’aise ___ leur nouvelle professeure.", "avec", avecChoices, "Les enfants sont à l’aise avec leur nouvelle professeure.", "La personne auprès de laquelle on est détendu suit « avec »."),
      q("à l’aise avec", "Vous êtes à l’aise ___ les chiffres.", "avec", avecChoices, "Vous êtes à l’aise avec les chiffres.", "« À l’aise avec » peut décrire une compétence."),
      q("à l’aise avec", "Après quelques jours, elle est à l’aise ___ la situation.", "avec", avecChoices, "Après quelques jours, elle est à l’aise avec la situation.", "La situation avec laquelle elle est à l’aise est introduite par « avec »."),
      q("à l’aise avec", "Mon fils est à l’aise ___ les adultes.", "avec", avecChoices, "Mon fils est à l’aise avec les adultes.", "Pour les relations avec des personnes, on emploie « avec »."),
      q("à l’aise avec", "Elles ne sont pas encore à l’aise ___ cette méthode.", "avec", avecChoices, "Elles ne sont pas encore à l’aise avec cette méthode.", "La construction ciblée est « à l’aise avec »."),
    ],
  },
  {
    id: "loin-de",
    name: "Loin de",
    hotspot: { left: "78.5%", top: "16%", width: "18.3%", height: "28.5%" },
    highlightColor: "137, 82, 54",
    questions: [
      q("loin de", "La montagne est loin ___ la ville.", "de", deChoices, "La montagne est loin de la ville.", "La distance s’exprime avec « loin de »."),
      q("loin de", "Notre maison est loin ___ le centre.", "de", deChoices, "Notre maison est loin du centre.", "« De » se contracte avec « le » dans la phrase complète : « du centre »."),
      q("loin de", "L’hôtel se trouve loin ___ les magasins.", "de", deChoices, "L’hôtel se trouve loin des magasins.", "« De » se contracte avec « les » : « des magasins »."),
      q("loin de", "Est-ce que la gare est loin ___ ici ?", "de", deChoices, "Est-ce que la gare est loin d’ici ?", "Devant une voyelle, « de » devient « d’ »."),
      q("loin de", "Ils habitent loin ___ leurs parents.", "de", deChoices, "Ils habitent loin de leurs parents.", "Une distance entre des personnes se construit aussi avec « loin de »."),
      q("loin de", "Le projet est encore loin ___ être terminé.", "de", deChoices, "Le projet est encore loin d’être terminé.", "« Loin de » peut exprimer une distance figurée."),
      q("loin de", "Nous sommes loin ___ la côte.", "de", deChoices, "Nous sommes loin de la côte.", "Le lieu éloigné est introduit par « de »."),
      q("loin de", "Son école n’est pas loin ___ le parc.", "de", deChoices, "Son école n’est pas loin du parc.", "Dans la phrase complète, « de le » devient « du »."),
      q("loin de", "Vous vivez loin ___ vos amis ?", "de", deChoices, "Vous vivez loin de vos amis ?", "Après « loin », on emploie « de »."),
      q("loin de", "Cette solution est loin ___ être parfaite.", "de", deChoices, "Cette solution est loin d’être parfaite.", "La tournure figurée correcte est « loin de »."),
    ],
  },
  {
    id: "interesse-par",
    name: "Intéressé par",
    hotspot: { left: "27.5%", top: "58%", width: "14.5%", height: "19.5%" },
    highlightColor: "81, 112, 73",
    questions: [
      q("intéressé par", "Il est intéressé ___ la science.", "par", parChoices, "Il est intéressé par la science.", "L’adjectif « intéressé » se construit ici avec « par »."),
      q("intéressé par", "Léa est intéressée ___ l’histoire de France.", "par", parChoices, "Léa est intéressée par l’histoire de France.", "Le sujet qui éveille son intérêt est introduit par « par »."),
      q("intéressé par", "Nous sommes intéressés ___ ce musée.", "par", parChoices, "Nous sommes intéressés par ce musée.", "On dit « être intéressé par quelque chose »."),
      q("intéressé par", "Les étudiantes sont intéressées ___ la musique.", "par", parChoices, "Les étudiantes sont intéressées par la musique.", "L’accord change, mais la préposition reste « par »."),
      q("intéressé par", "Es-tu intéressé ___ les langues étrangères ?", "par", parChoices, "Es-tu intéressé par les langues étrangères ?", "Le centre d’intérêt suit « par »."),
      q("intéressé par", "Mon frère est intéressé ___ la photographie.", "par", parChoices, "Mon frère est intéressé par la photographie.", "La photographie éveille son intérêt : « intéressé par »."),
      q("intéressé par", "Vous semblez intéressés ___ cette proposition.", "par", parChoices, "Vous semblez intéressés par cette proposition.", "Après « intéressé », on choisit « par »."),
      q("intéressé par", "Elle est très intéressée ___ les voyages en train.", "par", parChoices, "Elle est très intéressée par les voyages en train.", "Le thème qui l’attire est introduit par « par »."),
      q("intéressé par", "Ils sont intéressés ___ les nouvelles technologies.", "par", parChoices, "Ils sont intéressés par les nouvelles technologies.", "La construction adjective est « être intéressé par »."),
      q("intéressé par", "Je suis intéressée ___ le cinéma français.", "par", parChoices, "Je suis intéressée par le cinéma français.", "Ici, on emploie « intéressé par », et non le verbe « s’intéresser à »."),
    ],
  },
  {
    id: "necessaire-pour",
    name: "Nécessaire pour",
    hotspot: { left: "42.4%", top: "63%", width: "13.5%", height: "16.5%" },
    highlightColor: "76, 106, 121",
    questions: [
      q("nécessaire pour", "Ce livre est nécessaire ___ le cours.", "pour", pourChoices, "Ce livre est nécessaire pour le cours.", "La construction ciblée est « nécessaire pour »."),
      q("nécessaire pour", "Un passeport est nécessaire ___ voyager.", "pour", pourChoices, "Un passeport est nécessaire pour voyager.", "« Nécessaire pour » peut introduire un objectif à l’infinitif."),
      q("nécessaire pour", "Cette explication est nécessaire ___ les débutants.", "pour", pourChoices, "Cette explication est nécessaire pour les débutants.", "Les personnes qui en ont besoin sont introduites par « pour »."),
      q("nécessaire pour", "Le repos est nécessaire ___ rester en bonne santé.", "pour", pourChoices, "Le repos est nécessaire pour rester en bonne santé.", "Le but est introduit par « pour »."),
      q("nécessaire pour", "Ces documents sont nécessaires ___ l’inscription.", "pour", pourChoices, "Ces documents sont nécessaires pour l’inscription.", "« Pour » présente l’usage des documents."),
      q("nécessaire pour", "La pratique est nécessaire ___ progresser.", "pour", pourChoices, "La pratique est nécessaire pour progresser.", "L’objectif de la pratique suit « pour »."),
      q("nécessaire pour", "Est-ce que cette carte est nécessaire ___ le voyage ?", "pour", pourChoices, "Est-ce que cette carte est nécessaire pour le voyage ?", "Le voyage est le contexte pour lequel la carte est nécessaire."),
      q("nécessaire pour", "Une autorisation est nécessaire ___ entrer.", "pour", pourChoices, "Une autorisation est nécessaire pour entrer.", "L’action visée est introduite par « pour »."),
      q("nécessaire pour", "Ces exercices sont nécessaires ___ les élèves.", "pour", pourChoices, "Ces exercices sont nécessaires pour les élèves.", "Le groupe bénéficiaire est introduit par « pour »."),
      q("nécessaire pour", "Du temps est nécessaire ___ réussir ce projet.", "pour", pourChoices, "Du temps est nécessaire pour réussir ce projet.", "On emploie « pour » devant l’objectif à atteindre."),
    ],
  },
  {
    id: "responsable-de",
    name: "Responsable de",
    hotspot: { left: "57.5%", top: "61%", width: "12.3%", height: "16.5%" },
    highlightColor: "153, 87, 58",
    questions: [
      q("responsable de", "Elle est responsable ___ son petit frère.", "de", deChoices, "Elle est responsable de son petit frère.", "La personne confiée à quelqu’un est introduite par « de »."),
      q("responsable de", "Paul est responsable ___ le projet.", "de", deChoices, "Paul est responsable du projet.", "Dans la phrase complète, « de le » devient « du »."),
      q("responsable de", "Nous sommes responsables ___ cette équipe.", "de", deChoices, "Nous sommes responsables de cette équipe.", "La construction correcte est « responsable de »."),
      q("responsable de", "Qui est responsable ___ les enfants aujourd’hui ?", "de", deChoices, "Qui est responsable des enfants aujourd’hui ?", "Dans la phrase complète, « de les » devient « des »."),
      q("responsable de", "Tu es responsable ___ fermer la salle.", "de", deChoices, "Tu es responsable de fermer la salle.", "Une tâche confiée peut suivre « responsable de »."),
      q("responsable de", "La directrice est responsable ___ l’organisation.", "de", deChoices, "La directrice est responsable de l’organisation.", "L’organisation dont elle a la charge suit « de »."),
      q("responsable de", "Ils sont responsables ___ le matériel sportif.", "de", deChoices, "Ils sont responsables du matériel sportif.", "« De » se contracte avec l’article « le » : « du matériel »."),
      q("responsable de", "Je suis responsable ___ cette activité.", "de", deChoices, "Je suis responsable de cette activité.", "L’activité placée sous ma responsabilité est introduite par « de »."),
      q("responsable de", "Vous serez responsables ___ accueillir les invités.", "de", deChoices, "Vous serez responsables d’accueillir les invités.", "Devant une voyelle, « de » devient « d’ »."),
      q("responsable de", "Marie est responsable ___ la réunion de lundi.", "de", deChoices, "Marie est responsable de la réunion de lundi.", "Après « responsable », on emploie « de »."),
    ],
  },
  {
    id: "proche-de",
    name: "Proche de",
    hotspot: { left: "81.5%", top: "60%", width: "14%", height: "19%" },
    highlightColor: "75, 110, 92",
    questions: [
      q("proche de", "Le café est proche ___ la gare.", "de", deChoices, "Le café est proche de la gare.", "La proximité s’exprime avec « proche de »."),
      q("proche de", "Notre hôtel est proche ___ le parc.", "de", deChoices, "Notre hôtel est proche du parc.", "Dans la phrase complète, « de le » devient « du »."),
      q("proche de", "Cette maison est proche ___ les montagnes.", "de", deChoices, "Cette maison est proche des montagnes.", "Dans la phrase complète, « de les » devient « des »."),
      q("proche de", "Votre maison est-elle proche ___ ici ?", "de", deChoices, "Votre maison est-elle proche d’ici ?", "Devant une voyelle, « de » devient « d’ »."),
      q("proche de", "Elle reste très proche ___ sa famille.", "de", deChoices, "Elle reste très proche de sa famille.", "« Proche de » peut exprimer une relation personnelle."),
      q("proche de", "La bibliothèque est proche ___ l’école.", "de", deChoices, "La bibliothèque est proche de l’école.", "La proximité entre deux lieux s’exprime avec « proche de »."),
      q("proche de", "Nous sommes proches ___ nos voisins.", "de", deChoices, "Nous sommes proches de nos voisins.", "Une relation affective proche se construit avec « de »."),
      q("proche de", "Le musée est proche ___ le centre-ville.", "de", deChoices, "Le musée est proche du centre-ville.", "« De » et « le » se contractent en « du »."),
      q("proche de", "Son bureau est proche ___ le mien.", "de", deChoices, "Son bureau est proche du mien.", "La comparaison de proximité utilise « proche de »."),
      q("proche de", "Le village est plus proche ___ la mer que de la montagne.", "de", deChoices, "Le village est plus proche de la mer que de la montagne.", "Après « proche », la référence est introduite par « de »."),
    ],
  },
  {
    id: "other-examples",
    name: "D’autres exemples",
    hotspot: { left: "31.5%", top: "79.5%", width: "36%", height: "17%" },
    highlightColor: "119, 85, 52",
    questions: [
      q("plein de", "Le panier est plein ___ pommes.", "de", ["de", "à", "avec", "pour"], "Le panier est plein de pommes.", "L’expression correcte est « plein de »."),
      q("capable de", "Elle est capable ___ résoudre ce problème.", "de", ["de", "à", "avec", "par"], "Elle est capable de résoudre ce problème.", "« Capable » se construit avec « de » devant un infinitif."),
      q("prêt à", "Nous sommes prêts ___ partir.", "à", ["à", "de", "pour", "avec"], "Nous sommes prêts à partir.", "L’adjectif « prêt » se construit avec « à » devant un infinitif."),
      q("heureux avec", "Paul est heureux ___ sa nouvelle équipe.", "avec", ["avec", "de", "à", "par"], "Paul est heureux avec sa nouvelle équipe.", "« Heureux avec » décrit le bonheur dans une relation ou une situation."),
      q("déçu de", "Je suis déçu ___ ce résultat.", "de", ["de", "à", "avec", "pour"], "Je suis déçu de ce résultat.", "L’adjectif « déçu » se construit avec « de »."),
      q("lassé de", "Ils sont lassés ___ attendre si longtemps.", "de", ["de", "à", "par", "pour"], "Ils sont lassés d’attendre si longtemps.", "Devant une voyelle, le « de » de « lassé de » devient « d’ »."),
      q("bon pour", "Marcher chaque jour est bon ___ la santé.", "pour", ["pour", "de", "à", "avec"], "Marcher chaque jour est bon pour la santé.", "« Bon pour » exprime un bénéfice ou une utilité."),
      q("mauvais à", "Je suis mauvais ___ ce jeu.", "à", ["à", "de", "pour", "avec"], "Je suis mauvais à ce jeu.", "On peut dire « mauvais à » pour parler d’une faible aptitude à un jeu ou une activité."),
      q("prêt à", "Tout est organisé : vous êtes prêts ___ commencer.", "à", ["à", "de", "pour", "par"], "Tout est organisé : vous êtes prêts à commencer.", "Pour exprimer la préparation à une action, on emploie « prêt à »."),
      q("bon pour", "Cette méthode est simple et bonne ___ les débutants.", "pour", ["pour", "de", "à", "avec"], "Cette méthode est simple et bonne pour les débutants.", "La personne qui bénéficie de quelque chose est introduite par « pour »."),
    ],
  },
] as const;

export const adjectiveLessonById = Object.fromEntries(
  adjectiveLessons.map((lesson) => [lesson.id, lesson]),
) as Record<string, AdjectiveLesson>;

function complete(question: AdjectiveQuestion): string {
  const raw = question.display.replace("___", question.answer);
  return raw
    .replace(/\bde ([aeiouyhàâäéèêëîïôöùûü])/gi, "d’$1")
    .replace(/\bde le\b/gi, "du")
    .replace(/\bde les\b/gi, "des")
    .replace(/\bà le\b/gi, "au")
    .replace(/\bà les\b/gi, "aux");
}

function validateAdjectiveLessons(): void {
  if (adjectiveLessons.length !== 9) throw new Error("Chapter 8 must contain exactly nine lessons.");
  if (new Set(adjectiveLessons.map((lesson) => lesson.id)).size !== adjectiveLessons.length) throw new Error("Chapter 8 lesson IDs must be unique.");
  let total = 0;
  for (const lesson of adjectiveLessons) {
    if (lesson.questions.length !== 10) throw new Error(`${lesson.name} must contain ten questions.`);
    if (!lesson.hotspot.left || !lesson.hotspot.top || !lesson.hotspot.width || !lesson.hotspot.height || !lesson.highlightColor) throw new Error(`${lesson.name} needs hotspot and highlight data.`);
    total += lesson.questions.length;
    for (const question of lesson.questions) {
      if ((question.display.match(/___/g) ?? []).length !== 1) throw new Error(`Invalid blank: ${question.display}`);
      if (question.choices.length !== 4 || new Set(question.choices).size !== 4) throw new Error(`Invalid choices: ${question.display}`);
      if (question.choices.filter((choice) => choice === question.answer).length !== 1) throw new Error(`Answer missing from choices: ${question.display}`);
      if (!question.spoken || question.spoken.includes("_") || !question.note || !question.construction) throw new Error(`Invalid question data: ${question.display}`);
      if (complete(question) !== question.spoken) throw new Error(`Spoken mismatch: ${question.display}`);
    }
  }
  if (total !== 90) throw new Error("Chapter 8 must contain exactly ninety questions.");
  const review = adjectiveLessons.find((lesson) => lesson.id === "other-examples");
  const required = ["plein de", "capable de", "prêt à", "heureux avec", "déçu de", "lassé de", "bon pour", "mauvais à"];
  if (!review || required.some((construction) => !review.questions.some((question) => question.construction === construction))) {
    throw new Error("Chapter 8 review is missing a required construction.");
  }
}

validateAdjectiveLessons();
