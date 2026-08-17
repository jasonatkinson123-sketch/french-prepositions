export type ActivityQuestion = {
  display: string;
  answer: string;
  choices: readonly string[];
  spoken: string;
  note: string;
};

export type ActivityLesson = {
  id: string;
  name: string;
  hotspot: { left: string; top: string; width: string; height: string };
  highlightColor: string;
  questions: readonly ActivityQuestion[];
};

function q(display: string, answer: string, choices: readonly string[], spoken: string, note: string): ActivityQuestion {
  return { display, answer, choices, spoken, note };
}

const au = ["au", "à la", "en", "chez"] as const;
const ala = ["à la", "au", "en", "chez"] as const;
const al = ["à l’", "au", "à la", "en"] as const;
const en = ["en", "à la", "au", "chez"] as const;
const chez = ["chez", "à la", "au", "en"] as const;

export const activityLessons: readonly ActivityLesson[] = [
  {
    id: "au-stade", name: "Au stade", hotspot: { left: "11%", top: "23%", width: "20%", height: "16%" }, highlightColor: "82, 111, 69",
    questions: [
      q("Nous jouons au foot ___ stade.", "au", au, "Nous jouons au foot au stade.", "Le stade est masculin : on dit « au stade »."),
      q("L’équipe s’entraîne ___ stade chaque mardi.", "au", au, "L’équipe s’entraîne au stade chaque mardi.", "Avec le nom masculin « stade », à + le devient « au »."),
      q("Vous regardez le match ___ stade ?", "au", au, "Vous regardez le match au stade ?", "Pour situer le match, on emploie « au stade »."),
      q("Mes amis courent ___ stade ce matin.", "au", au, "Mes amis courent au stade ce matin.", "Le lieu de l’activité est « au stade »."),
      q("Je retrouve mon équipe ___ stade.", "au", au, "Je retrouve mon équipe au stade.", "On dit « retrouver quelqu’un au stade »."),
      q("Elle va assister à un concert ___ stade.", "au", au, "Elle va assister à un concert au stade.", "Le stade est un lieu masculin : « au stade »."),
      q("Les supporters sont déjà ___ stade.", "au", au, "Les supporters sont déjà au stade.", "Être dans ce lieu se dit « être au stade »."),
      q("Tu viens de courir ___ stade.", "au", au, "Tu viens de courir au stade.", "Le complément de lieu correct est « au stade »."),
      q("On se retrouve ___ stade avant le match.", "au", au, "On se retrouve au stade avant le match.", "À + le stade se contracte en « au stade »."),
      q("Ils vont encourager leur club ___ stade.", "au", au, "Ils vont encourager leur club au stade.", "L’activité a lieu « au stade »."),
    ],
  },
  {
    id: "a-l-atelier", name: "À l’atelier", hotspot: { left: "42%", top: "25%", width: "17%", height: "19%" }, highlightColor: "126, 88, 55",
    questions: [
      q("Elle peint ___atelier.", "à l’", al, "Elle peint à l’atelier.", "Devant « atelier », à s’élide : « à l’atelier »."),
      q("Nous dessinons ___atelier cet après-midi.", "à l’", al, "Nous dessinons à l’atelier cet après-midi.", "Le mot « atelier » commence par une voyelle : « à l’atelier »."),
      q("Paul fabrique une maquette ___atelier.", "à l’", al, "Paul fabrique une maquette à l’atelier.", "Le travail se déroule « à l’atelier »."),
      q("Les artistes travaillent ___atelier voisin.", "à l’", al, "Les artistes travaillent à l’atelier voisin.", "On emploie « à l’ » devant le nom masculin commençant par une voyelle."),
      q("Tu apprends une nouvelle technique ___atelier.", "à l’", al, "Tu apprends une nouvelle technique à l’atelier.", "Le lieu de l’apprentissage est « à l’atelier »."),
      q("Je vais terminer mon projet ___atelier.", "à l’", al, "Je vais terminer mon projet à l’atelier.", "La forme naturelle est « à l’atelier »."),
      q("Vous avez laissé vos pinceaux ___atelier.", "à l’", al, "Vous avez laissé vos pinceaux à l’atelier.", "À devant atelier devient « à l’ »."),
      q("Camille prépare l’exposition ___atelier.", "à l’", al, "Camille prépare l’exposition à l’atelier.", "On situe cette préparation « à l’atelier »."),
      q("Les élèves se retrouvent ___atelier demain.", "à l’", al, "Les élèves se retrouvent à l’atelier demain.", "Le lieu est introduit par « à l’ »."),
      q("Est-ce que Léa sculpte encore ___atelier ?", "à l’", al, "Est-ce que Léa sculpte encore à l’atelier ?", "Devant la voyelle d’« atelier », on dit « à l’atelier »."),
    ],
  },
  {
    id: "au-cafe", name: "Au café", hotspot: { left: "67%", top: "25%", width: "22%", height: "17%" }, highlightColor: "151, 82, 48",
    questions: [
      q("Paul retrouve ses amis ___ café.", "au", au, "Paul retrouve ses amis au café.", "Le café est masculin : à + le devient « au »."),
      q("Nous prenons un chocolat chaud ___ café.", "au", au, "Nous prenons un chocolat chaud au café.", "On dit « boire quelque chose au café »."),
      q("Elle lit le journal ___ café du village.", "au", au, "Elle lit le journal au café du village.", "Le lieu masculin est introduit par « au »."),
      q("Vous déjeunez ___ café aujourd’hui ?", "au", au, "Vous déjeunez au café aujourd’hui ?", "Pour ce lieu, on emploie « au café »."),
      q("Je viens de rencontrer Luc ___ café.", "au", au, "Je viens de rencontrer Luc au café.", "La rencontre a eu lieu « au café »."),
      q("Les voisins discutent ___ café.", "au", au, "Les voisins discutent au café.", "À + le café se contracte en « au café »."),
      q("On va écouter de la musique ___ café.", "au", au, "On va écouter de la musique au café.", "L’activité se passe « au café »."),
      q("Tu commandes un thé ___ café de la place.", "au", au, "Tu commandes un thé au café de la place.", "Le complément de lieu correct est « au café »."),
      q("Ils attendent Marie ___ café.", "au", au, "Ils attendent Marie au café.", "On attend quelqu’un « au café »."),
      q("Ma sœur travaille ___ café le samedi.", "au", au, "Ma sœur travaille au café le samedi.", "Le nom masculin « café » demande « au »."),
    ],
  },
  {
    id: "a-la-plage", name: "À la plage", hotspot: { left: "79.5%", top: "3%", width: "18%", height: "21%" }, highlightColor: "70, 108, 123",
    questions: [
      q("Ils passent l’après-midi ___ plage.", "à la", ala, "Ils passent l’après-midi à la plage.", "Le nom féminin « plage » s’emploie avec « à la »."),
      q("Nous allons nager ___ plage demain.", "à la", ala, "Nous allons nager à la plage demain.", "On dit « aller à la plage »."),
      q("Elle prend des photos ___ plage.", "à la", ala, "Elle prend des photos à la plage.", "Le lieu de l’activité est « à la plage »."),
      q("Les enfants jouent ___ plage.", "à la", ala, "Les enfants jouent à la plage.", "Avec le nom féminin « plage », on garde « à la »."),
      q("Tu te reposes souvent ___ plage ?", "à la", ala, "Tu te reposes souvent à la plage ?", "La forme naturelle est « à la plage »."),
      q("Je viens de marcher ___ plage.", "à la", ala, "Je viens de marcher à la plage.", "La promenade a eu lieu « à la plage »."),
      q("On va pique-niquer ___ plage.", "à la", ala, "On va pique-niquer à la plage.", "Le pique-nique se déroule « à la plage »."),
      q("Mes cousins font du volley ___ plage.", "à la", ala, "Mes cousins font du volley à la plage.", "Pour situer ce sport, on emploie « à la plage »."),
      q("Vous regardez le coucher du soleil ___ plage.", "à la", ala, "Vous regardez le coucher du soleil à la plage.", "Le complément de lieu correct est « à la plage »."),
      q("Léa retrouve sa famille ___ plage.", "à la", ala, "Léa retrouve sa famille à la plage.", "On se retrouve « à la plage »."),
    ],
  },
  {
    id: "a-la-bibliotheque", name: "À la bibliothèque", hotspot: { left: "11.5%", top: "40%", width: "20%", height: "19%" }, highlightColor: "109, 81, 50",
    questions: [
      q("Marie étudie ___ bibliothèque.", "à la", ala, "Marie étudie à la bibliothèque.", "« Bibliothèque » est féminin : on dit « à la bibliothèque »."),
      q("Nous lisons tranquillement ___ bibliothèque.", "à la", ala, "Nous lisons tranquillement à la bibliothèque.", "Le lieu de la lecture est « à la bibliothèque »."),
      q("Il emprunte un roman ___ bibliothèque.", "à la", ala, "Il emprunte un roman à la bibliothèque.", "On emprunte un livre « à la bibliothèque »."),
      q("Vous travaillez ___ bibliothèque cet après-midi ?", "à la", ala, "Vous travaillez à la bibliothèque cet après-midi ?", "Le nom féminin demande « à la »."),
      q("Je vais faire des recherches ___ bibliothèque.", "à la", ala, "Je vais faire des recherches à la bibliothèque.", "Ces recherches ont lieu « à la bibliothèque »."),
      q("Les élèves se retrouvent ___ bibliothèque.", "à la", ala, "Les élèves se retrouvent à la bibliothèque.", "La forme correcte est « à la bibliothèque »."),
      q("Tu viens de rendre tes livres ___ bibliothèque.", "à la", ala, "Tu viens de rendre tes livres à la bibliothèque.", "On rend les livres « à la bibliothèque »."),
      q("Paul prépare son examen ___ bibliothèque.", "à la", ala, "Paul prépare son examen à la bibliothèque.", "Le lieu d’étude est introduit par « à la »."),
      q("On découvre une exposition ___ bibliothèque.", "à la", ala, "On découvre une exposition à la bibliothèque.", "L’exposition se trouve « à la bibliothèque »."),
      q("Ma sœur écrit souvent ___ bibliothèque.", "à la", ala, "Ma sœur écrit souvent à la bibliothèque.", "Avec « bibliothèque », on emploie « à la »."),
    ],
  },
  {
    id: "chez-moi", name: "Chez moi", hotspot: { left: "41%", top: "45%", width: "19%", height: "14.5%" }, highlightColor: "77, 109, 82",
    questions: [
      q("Ce soir, je reste ___ moi.", "chez", chez, "Ce soir, je reste chez moi.", "Devant un pronom tonique, on emploie « chez »."),
      q("Nous regardons un film ___ moi.", "chez", chez, "Nous regardons un film chez moi.", "Pour parler de mon domicile, on dit « chez moi »."),
      q("Tu veux dîner ___ moi demain ?", "chez", chez, "Tu veux dîner chez moi demain ?", "Le domicile d’une personne est introduit par « chez »."),
      q("Mes amis viennent jouer ___ moi.", "chez", chez, "Mes amis viennent jouer chez moi.", "La forme correcte est « chez moi »."),
      q("On va répéter la chanson ___ moi.", "chez", chez, "On va répéter la chanson chez moi.", "L’activité se passe à mon domicile : « chez moi »."),
      q("Paul a laissé sa guitare ___ moi.", "chez", chez, "Paul a laissé sa guitare chez moi.", "On situe l’objet « chez moi »."),
      q("Vous prendrez un café ___ moi.", "chez", chez, "Vous prendrez un café chez moi.", "Pour inviter à son domicile, on emploie « chez moi »."),
      q("Je viens de travailler ___ moi.", "chez", chez, "Je viens de travailler chez moi.", "Le travail a eu lieu « chez moi »."),
      q("La fête aura lieu ___ moi.", "chez", chez, "La fête aura lieu chez moi.", "Le lieu est le domicile du locuteur : « chez moi »."),
      q("Nous partageons le dessert ___ moi.", "chez", chez, "Nous partageons le dessert chez moi.", "Devant « moi », la préposition attendue est « chez »."),
    ],
  },
  {
    id: "a-la-montagne", name: "À la montagne", hotspot: { left: "68.5%", top: "43%", width: "21%", height: "18%" }, highlightColor: "68, 104, 78",
    questions: [
      q("Nous faisons une randonnée ___ montagne.", "à la", ala, "Nous faisons une randonnée à la montagne.", "On dit « à la montagne » pour ce milieu et cette destination."),
      q("Ils passent leurs vacances ___ montagne.", "à la", ala, "Ils passent leurs vacances à la montagne.", "La forme usuelle est « à la montagne »."),
      q("Elle prend de belles photos ___ montagne.", "à la", ala, "Elle prend de belles photos à la montagne.", "Le lieu de l’activité est « à la montagne »."),
      q("Tu vas skier ___ montagne cet hiver ?", "à la", ala, "Tu vas skier à la montagne cet hiver ?", "On situe ce séjour « à la montagne »."),
      q("Les randonneurs campent ___ montagne.", "à la", ala, "Les randonneurs campent à la montagne.", "Avec « montagne », on emploie ici « à la »."),
      q("Je viens de passer trois jours ___ montagne.", "à la", ala, "Je viens de passer trois jours à la montagne.", "Le séjour a eu lieu « à la montagne »."),
      q("On respire mieux ___ montagne.", "à la", ala, "On respire mieux à la montagne.", "Cette expression de lieu est « à la montagne »."),
      q("Vous découvrirez un petit village ___ montagne.", "à la", ala, "Vous découvrirez un petit village à la montagne.", "Le contexte général est situé « à la montagne »."),
      q("Mes cousins travaillent ___ montagne en été.", "à la", ala, "Mes cousins travaillent à la montagne en été.", "Le lieu de travail est « à la montagne »."),
      q("Nous allons nous détendre ___ montagne.", "à la", ala, "Nous allons nous détendre à la montagne.", "La destination et le cadre sont « à la montagne »."),
    ],
  },
  {
    id: "en-cuisine", name: "En cuisine", hotspot: { left: "27.8%", top: "60.5%", width: "18%", height: "17.5%" }, highlightColor: "142, 83, 48",
    questions: [
      q("Le chef travaille ___ cuisine.", "en", en, "Le chef travaille en cuisine.", "Pour l’espace professionnel ou l’activité, on dit « en cuisine »."),
      q("Nous préparons le repas ___ cuisine.", "en", en, "Nous préparons le repas en cuisine.", "La préparation se déroule « en cuisine »."),
      q("Elle apprend de nouvelles recettes ___ cuisine.", "en", en, "Elle apprend de nouvelles recettes en cuisine.", "On emploie ici l’expression « en cuisine »."),
      q("Vous êtes très efficaces ___ cuisine.", "en", en, "Vous êtes très efficaces en cuisine.", "« En cuisine » décrit ce domaine d’activité."),
      q("Je viens d’aider mon frère ___ cuisine.", "en", en, "Je viens d’aider mon frère en cuisine.", "L’aide a eu lieu « en cuisine »."),
      q("Les légumes attendent déjà ___ cuisine.", "en", en, "Les légumes attendent déjà en cuisine.", "Dans ce contexte, on situe les ingrédients « en cuisine »."),
      q("Tu vas passer la matinée ___ cuisine.", "en", en, "Tu vas passer la matinée en cuisine.", "Pour une période consacrée à cuisiner, on dit « en cuisine »."),
      q("On partage les tâches ___ cuisine.", "en", en, "On partage les tâches en cuisine.", "L’expression usuelle est « en cuisine »."),
      q("Le pâtissier est encore ___ cuisine.", "en", en, "Le pâtissier est encore en cuisine.", "Le contexte professionnel favorise « en cuisine »."),
      q("Mes amis découvrent le travail ___ cuisine.", "en", en, "Mes amis découvrent le travail en cuisine.", "Le domaine d’activité est introduit par « en »."),
    ],
  },
  {
    id: "a-la-maison", name: "À la maison", hotspot: { left: "48%", top: "60.5%", width: "17%", height: "17.5%" }, highlightColor: "97, 83, 59",
    questions: [
      q("Tu joues du piano ___ maison.", "à la", ala, "Tu joues du piano à la maison.", "L’expression habituelle est « à la maison »."),
      q("Nous dînons ___ maison ce soir.", "à la", ala, "Nous dînons à la maison ce soir.", "Pour parler de son domicile en général, on dit « à la maison »."),
      q("Elle travaille ___ maison le vendredi.", "à la", ala, "Elle travaille à la maison le vendredi.", "Le lieu de travail est « à la maison »."),
      q("Les enfants font leurs devoirs ___ maison.", "à la", ala, "Les enfants font leurs devoirs à la maison.", "On fait ses devoirs « à la maison »."),
      q("Vous allez rester ___ maison demain ?", "à la", ala, "Vous allez rester à la maison demain ?", "La forme correcte est « rester à la maison »."),
      q("Je viens d’écouter ce morceau ___ maison.", "à la", ala, "Je viens d’écouter ce morceau à la maison.", "L’écoute a eu lieu « à la maison »."),
      q("On se repose tranquillement ___ maison.", "à la", ala, "On se repose tranquillement à la maison.", "Le cadre domestique est « à la maison »."),
      q("Paul apprend le français ___ maison.", "à la", ala, "Paul apprend le français à la maison.", "L’apprentissage se fait « à la maison »."),
      q("Mes sœurs organisent une soirée ___ maison.", "à la", ala, "Mes sœurs organisent une soirée à la maison.", "La soirée se déroule « à la maison »."),
      q("Tu as oublié ton livre ___ maison.", "à la", ala, "Tu as oublié ton livre à la maison.", "L’objet est resté « à la maison »."),
    ],
  },
  {
    id: "au-parc", name: "Au parc", hotspot: { left: "69.5%", top: "62%", width: "19%", height: "18%" }, highlightColor: "76, 108, 68",
    questions: [
      q("Les enfants lisent ___ parc.", "au", au, "Les enfants lisent au parc.", "Le parc est masculin : à + le devient « au »."),
      q("Nous faisons du vélo ___ parc.", "au", au, "Nous faisons du vélo au parc.", "L’activité se déroule « au parc »."),
      q("Elle retrouve ses amis ___ parc.", "au", au, "Elle retrouve ses amis au parc.", "On se retrouve « au parc »."),
      q("Vous prenez des photos ___ parc ?", "au", au, "Vous prenez des photos au parc ?", "Avec le nom masculin « parc », on emploie « au »."),
      q("Je vais courir ___ parc demain matin.", "au", au, "Je vais courir au parc demain matin.", "Le lieu de la course est « au parc »."),
      q("Les familles pique-niquent ___ parc.", "au", au, "Les familles pique-niquent au parc.", "La forme naturelle est « au parc »."),
      q("Tu viens de te promener ___ parc.", "au", au, "Tu viens de te promener au parc.", "La promenade a eu lieu « au parc »."),
      q("On écoutera le concert ___ parc.", "au", au, "On écoutera le concert au parc.", "Pour situer le concert, on dit « au parc »."),
      q("Mon frère dessine les arbres ___ parc.", "au", au, "Mon frère dessine les arbres au parc.", "Le lieu de l’activité est « au parc »."),
      q("Ils passent souvent le dimanche ___ parc.", "au", au, "Ils passent souvent le dimanche au parc.", "À + le parc se contracte en « au parc »."),
    ],
  },
  {
    id: "avec-quoi", name: "Avec quoi ?", hotspot: { left: "35%", top: "79%", width: "17%", height: "17%" }, highlightColor: "68, 91, 111",
    questions: [
      q("Elle lit le soir ___.", "avec un livre", ["avec un livre", "avec un ballon", "avec un pinceau", "avec une guitare"], "Elle lit le soir avec un livre.", "Pour lire, elle utilise un livre : « avec un livre »."),
      q("Les enfants jouent au foot ___.", "avec un ballon", ["avec un ballon", "avec un appareil photo", "avec un crayon", "avec une tasse"], "Les enfants jouent au foot avec un ballon.", "On joue au foot avec un ballon."),
      q("L’artiste peint le paysage ___.", "avec un pinceau", ["avec un pinceau", "avec un livre", "avec un vélo", "avec une guitare"], "L’artiste peint le paysage avec un pinceau.", "L’instrument utilisé pour peindre est un pinceau."),
      q("Paul joue cette chanson ___.", "avec une guitare", ["avec une guitare", "avec un ballon", "avec une carte", "avec une tasse"], "Paul joue cette chanson avec une guitare.", "Il produit la musique avec une guitare."),
      q("Nous partageons le pique-nique ___.", "avec des amis", ["avec des amis", "avec un pinceau", "avec un appareil photo", "avec un billet"], "Nous partageons le pique-nique avec des amis.", "Les personnes qui nous accompagnent sont introduites par « avec »."),
      q("Tu prends des photos ___.", "avec un appareil photo", ["avec un appareil photo", "avec un ballon", "avec un roman", "avec une guitare"], "Tu prends des photos avec un appareil photo.", "L’appareil utilisé est introduit par « avec »."),
      q("Je dessine le village ___.", "avec un crayon", ["avec un crayon", "avec une boussole", "avec un café", "avec un ballon"], "Je dessine le village avec un crayon.", "On peut dessiner avec un crayon."),
      q("Les voyageurs trouvent leur chemin ___.", "avec une carte", ["avec une carte", "avec une guitare", "avec un pinceau", "avec un dessert"], "Les voyageurs trouvent leur chemin avec une carte.", "La carte est l’outil qui les aide à s’orienter."),
      q("Elle découvre la région ___.", "avec son vélo", ["avec son vélo", "avec une tasse", "avec un roman", "avec un pinceau"], "Elle découvre la région avec son vélo.", "Le moyen utilisé pour explorer est introduit par « avec »."),
      q("Nous préparons le dîner ___.", "avec des légumes frais", ["avec des légumes frais", "avec un ballon", "avec une boussole", "avec un appareil photo"], "Nous préparons le dîner avec des légumes frais.", "Les ingrédients employés sont introduits par « avec »."),
    ],
  },
];

export const activityLessonById = Object.fromEntries(activityLessons.map((lesson) => [lesson.id, lesson])) as Record<string, ActivityLesson>;

export function validateChapterNineData(): void {
  if (activityLessons.length !== 11) throw new Error("Chapter 9 must contain eleven lessons.");
  if (new Set(activityLessons.map((lesson) => lesson.id)).size !== activityLessons.length) throw new Error("Chapter 9 lesson IDs must be unique.");
  const allowedAnswers = new Set(["au", "à la", "à l’", "en", "chez", "avec un livre", "avec un ballon", "avec un pinceau", "avec une guitare", "avec des amis", "avec un appareil photo", "avec un crayon", "avec une carte", "avec son vélo", "avec des légumes frais"]);
  let count = 0;
  for (const lesson of activityLessons) {
    if (lesson.questions.length !== 10) throw new Error(`${lesson.name} must contain ten questions.`);
    for (const question of lesson.questions) {
      count += 1;
      if ((question.display.match(/___/g) ?? []).length !== 1) throw new Error(`Invalid blank: ${question.display}`);
      if (!allowedAnswers.has(question.answer)) throw new Error(`Invalid answer: ${question.answer}`);
      if (new Set(question.choices).size !== 4 || !question.choices.includes(question.answer)) throw new Error(`Invalid choices: ${question.display}`);
      if (!question.spoken || question.spoken.includes("_")) throw new Error(`Invalid spoken sentence: ${question.display}`);
      if (question.display.replace("___", question.answer) !== question.spoken) throw new Error(`Display/spoken mismatch: ${question.display}`);
    }
  }
  if (count !== 110) throw new Error("Chapter 9 must contain 110 questions.");
}

validateChapterNineData();
