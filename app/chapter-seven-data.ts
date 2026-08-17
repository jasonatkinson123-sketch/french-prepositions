export type VerbQuestion = { display: string; answer: string; choices: readonly string[]; spoken: string; note: string };
export type VerbLesson = {
  id: string;
  name: string;
  hotspot: { left: string; top: string; width: string; height: string };
  highlightColor: string;
  questions: readonly VerbQuestion[];
};

function q(display: string, answer: string, choices: readonly string[], spoken: string, note: string): VerbQuestion {
  return { display, answer, choices, spoken, note };
}

export const verbLessons: readonly VerbLesson[] = [
  {
    id: "parler-a", name: "Parler à", hotspot: { left: "18%", top: "37%", width: "12%", height: "6%" }, highlightColor: "145, 76, 52",
    questions: [
      q("Après le cours, Léa ___ son professeur.", "parle à", ["parle à", "parle de", "pense à", "rêve de"], "Après le cours, Léa parle à son professeur.", "On utilise « parler à » quand on s’adresse à une personne."),
      q("Je ___ ma sœur au téléphone.", "parle à", ["parle à", "parle de", "pense à", "rêve de"], "Je parle à ma sœur au téléphone.", "La sœur est l’interlocutrice : parler à quelqu’un."),
      q("Nous ___ nos voisins devant la maison.", "parlons à", ["parlons à", "parlons de", "pensons à", "rêvons de"], "Nous parlons à nos voisins devant la maison.", "Les voisins participent directement à la conversation."),
      q("Vous ___ la directrice après la réunion.", "parlez à", ["parlez à", "parlez de", "pensez à", "rêvez de"], "Vous parlez à la directrice après la réunion.", "Vous vous adressez à la directrice."),
      q("Paul ___ son ami pour lui demander conseil.", "parle à", ["parle à", "parle de", "pense à", "rêve de"], "Paul parle à son ami pour lui demander conseil.", "L’ami est le destinataire des paroles."),
      q("Les élèves ___ leur professeur en classe.", "parlent à", ["parlent à", "parlent de", "pensent à", "rêvent de"], "Les élèves parlent à leur professeur en classe.", "Ils s’adressent au professeur."),
      q("Marie ___ médecin de ses symptômes.", "parle au", ["parle au", "parle du", "pense au", "rêve du"], "Marie parle au médecin de ses symptômes.", "À + le médecin devient « au médecin »."),
      q("Le professeur ___ parents après le spectacle.", "parle aux", ["parle aux", "parle des", "pense aux", "rêve des"], "Le professeur parle aux parents après le spectacle.", "À + les parents devient « aux parents »."),
      q("Elle s’adresse à Paul : elle ___ Paul, elle ne parle pas de lui.", "parle à", ["parle à", "parle de", "pense à", "rêve de"], "Elle s’adresse à Paul : elle parle à Paul, elle ne parle pas de lui.", "« Parler à » désigne l’interlocuteur."),
      q("Je veux lui poser une question, alors je ___ Camille.", "parle à", ["parle à", "parle de", "rêve de", "ai besoin de"], "Je veux lui poser une question, alors je parle à Camille.", "Camille reçoit directement la question."),
    ],
  },
  {
    id: "parler-de", name: "Parler de", hotspot: { left: "38%", top: "34%", width: "12%", height: "6%" }, highlightColor: "104, 119, 69",
    questions: [
      q("Pendant le dîner, nous ___ notre voyage.", "parlons de", ["parlons de", "parlons à", "pensons à", "rêvons de"], "Pendant le dîner, nous parlons de notre voyage.", "« Parler de » signifie discuter au sujet de quelque chose."),
      q("Elle ___ son nouveau travail.", "parle de", ["parle de", "parle à", "pense à", "rêve de"], "Elle parle de son nouveau travail.", "Le travail est le sujet de la conversation."),
      q("Ils ___ leurs vacances avec enthousiasme.", "parlent de", ["parlent de", "parlent à", "pensent à", "rêvent de"], "Ils parlent de leurs vacances avec enthousiasme.", "Les vacances sont le sujet abordé."),
      q("Tu ___ ce livre dans ton exposé.", "parles de", ["parles de", "parles à", "penses à", "rêves de"], "Tu parles de ce livre dans ton exposé.", "Le livre est le thème de l’exposé."),
      q("Le journaliste ___ la nouvelle exposition.", "parle de", ["parle de", "parle à", "pense à", "rêve de"], "Le journaliste parle de la nouvelle exposition.", "L’exposition est le sujet présenté."),
      q("Nous ___ Paul, mais Paul n’est pas avec nous.", "parlons de", ["parlons de", "parlons à", "pensons à", "rêvons de"], "Nous parlons de Paul, mais Paul n’est pas avec nous.", "Paul est le sujet, pas l’interlocuteur."),
      q("Elle ___ film après la séance.", "parle du", ["parle du", "parle au", "pense au", "rêve du"], "Elle parle du film après la séance.", "De + le film devient « du film »."),
      q("Nous ___ examens de juin.", "parlons des", ["parlons des", "parlons aux", "pensons aux", "rêvons des"], "Nous parlons des examens de juin.", "De + les examens devient « des examens »."),
      q("Paul est le sujet de la discussion : nous ___ Paul.", "parlons de", ["parlons de", "parlons à", "pensons à", "rêvons de"], "Paul est le sujet de la discussion : nous parlons de Paul.", "« Parler de » introduit le sujet discuté."),
      q("Je raconte mon séjour : je ___ mon voyage en Italie.", "parle de", ["parle de", "parle à", "m’intéresse à", "ai besoin de"], "Je raconte mon séjour : je parle de mon voyage en Italie.", "Le voyage est le sujet du récit."),
    ],
  },
  {
    id: "penser-a", name: "Penser à", hotspot: { left: "54%", top: "35%", width: "11%", height: "6%" }, highlightColor: "75, 105, 119",
    questions: [
      q("Avant l’examen, Paul ___ toutes les consignes.", "pense à", ["pense à", "parle de", "rêve de", "a besoin de"], "Avant l’examen, Paul pense à toutes les consignes.", "« Penser à » indique ce que l’on garde à l’esprit."),
      q("Je ___ mes amis quand je suis loin.", "pense à", ["pense à", "parle de", "rêve de", "m’intéresse à"], "Je pense à mes amis quand je suis loin.", "Les amis sont présents dans ma pensée."),
      q("Nous ___ notre prochain voyage.", "pensons à", ["pensons à", "parlons de", "rêvons de", "avons besoin de"], "Nous pensons à notre prochain voyage.", "Le voyage est envisagé ou gardé à l’esprit."),
      q("Elle ___ son avenir professionnel.", "pense à", ["pense à", "parle à", "rêve de", "a besoin de"], "Elle pense à son avenir professionnel.", "Elle réfléchit à son avenir."),
      q("Vous ___ fermer la fenêtre avant de partir.", "pensez à", ["pensez à", "parlez de", "rêvez de", "avez besoin de"], "Vous pensez à fermer la fenêtre avant de partir.", "« Penser à » peut être suivi d’un infinitif."),
      q("Ils ___ leur famille restée en France.", "pensent à", ["pensent à", "parlent de", "rêvent de", "ont besoin de"], "Ils pensent à leur famille restée en France.", "La famille est présente dans leurs pensées."),
      q("Je ___ prochain cours de français.", "pense au", ["pense au", "parle du", "rêve du", "parle au"], "Je pense au prochain cours de français.", "À + le cours devient « au cours »."),
      q("Elle ___ vacances qui approchent.", "pense aux", ["pense aux", "parle des", "rêve des", "parle aux"], "Elle pense aux vacances qui approchent.", "À + les vacances devient « aux vacances »."),
      q("N’oublie pas ton passeport : ___ ton passeport.", "pense à", ["pense à", "parle de", "rêve de", "choisis"], "N’oublie pas ton passeport : pense à ton passeport.", "Ici, penser à signifie ne pas oublier."),
      q("Elle réfléchit encore à la proposition : elle ___ cette idée.", "pense à", ["pense à", "parle de", "rêve de", "comprend"], "Elle réfléchit encore à la proposition : elle pense à cette idée.", "La réflexion appelle « penser à »."),
    ],
  },
  {
    id: "rever-de", name: "Rêver de", hotspot: { left: "70%", top: "38%", width: "11%", height: "6%" }, highlightColor: "142, 76, 56",
    questions: [
      q("Depuis son enfance, elle ___ voyager autour du monde.", "rêve de", ["rêve de", "pense à", "parle à", "s’intéresse à"], "Depuis son enfance, elle rêve de voyager autour du monde.", "Le verbe « rêver » se construit avec « de »."),
      q("Je ___ vivre un jour à Paris.", "rêve de", ["rêve de", "pense à", "parle de", "ai besoin de"], "Je rêve de vivre un jour à Paris.", "Une aspiration imaginaire se construit avec « rêver de »."),
      q("Nous ___ longues vacances au bord de la mer.", "rêvons de", ["rêvons de", "pensons à", "parlons à", "avons besoin de"], "Nous rêvons de longues vacances au bord de la mer.", "Les vacances sont un souhait rêvé."),
      q("Il ___ devenir musicien professionnel.", "rêve de", ["rêve de", "pense à", "parle de", "s’intéresse à"], "Il rêve de devenir musicien professionnel.", "« Rêver de » peut être suivi d’un infinitif."),
      q("Tu ___ une maison dans le sud.", "rêves d’", ["rêves d’", "penses à", "parles à", "as besoin d’"], "Tu rêves d’une maison dans le sud.", "Devant une voyelle, « de une » devient « d’une »."),
      q("Les enfants ___ rencontrer leur héros.", "rêvent de", ["rêvent de", "pensent à", "parlent de", "s’intéressent à"], "Les enfants rêvent de rencontrer leur héros.", "Le souhait se construit avec « rêver de »."),
      q("Elle ___ voyage qu’elle fera peut-être un jour.", "rêve du", ["rêve du", "pense au", "parle au", "parle du"], "Elle rêve du voyage qu’elle fera peut-être un jour.", "De + le voyage devient « du voyage »."),
      q("Nous ___ vacances parfaites.", "rêvons des", ["rêvons des", "pensons aux", "parlons aux", "parlons des"], "Nous rêvons des vacances parfaites.", "De + les vacances devient « des vacances »."),
      q("Ce n’est pas un simple projet : il imagine cette vie idéale et ___ cette vie.", "rêve de", ["rêve de", "pense à", "parle à", "comprend"], "Ce n’est pas un simple projet : il imagine cette vie idéale et rêve de cette vie.", "Le contexte décrit un rêve ou un souhait."),
      q("Elle souhaite profondément partir : elle ___ partir.", "rêve de", ["rêve de", "pense à", "parle de", "choisit de"], "Elle souhaite profondément partir : elle rêve de partir.", "Le souhait profond appelle « rêver de »."),
    ],
  },
  {
    id: "besoin-de", name: "Avoir besoin de", hotspot: { left: "46%", top: "83%", width: "29%", height: "5%" }, highlightColor: "105, 121, 71",
    questions: [
      q("Pour terminer le travail, nous ___ plus de temps.", "avons besoin de", ["avons besoin de", "pensons à", "parlons de", "nous intéressons à"], "Pour terminer le travail, nous avons besoin de plus de temps.", "La construction correcte est « avoir besoin de »."),
      q("J’___ repos après cette longue journée.", "ai besoin de", ["ai besoin de", "pense à", "parle de", "rêve de"], "J’ai besoin de repos après cette longue journée.", "Un besoin se construit avec « de »."),
      q("Elle ___ son dictionnaire pour traduire le texte.", "a besoin de", ["a besoin de", "pense à", "parle à", "s’intéresse à"], "Elle a besoin de son dictionnaire pour traduire le texte.", "Le dictionnaire est nécessaire."),
      q("Tu ___ dormir davantage.", "as besoin de", ["as besoin de", "penses à", "parles de", "rêves de"], "Tu as besoin de dormir davantage.", "« Avoir besoin de » peut être suivi d’un infinitif."),
      q("Les élèves ___ aide pour cet exercice.", "ont besoin d’", ["ont besoin d’", "pensent à l’", "parlent de l’", "s’intéressent à l’"], "Les élèves ont besoin d’aide pour cet exercice.", "Devant une voyelle, « de » devient « d’ »."),
      q("Vous ___ patience avec les débutants.", "avez besoin de", ["avez besoin de", "pensez à", "parlez de", "rêvez de"], "Vous avez besoin de patience avec les débutants.", "La patience est nécessaire."),
      q("Paul ___ livre qui est sur la table.", "a besoin du", ["a besoin du", "pense au", "parle au", "rêve du"], "Paul a besoin du livre qui est sur la table.", "De + le livre devient « du livre »."),
      q("Nous ___ clés pour ouvrir la porte.", "avons besoin des", ["avons besoin des", "pensons aux", "parlons aux", "rêvons des"], "Nous avons besoin des clés pour ouvrir la porte.", "De + les clés devient « des clés »."),
      q("Sans cette carte, elle ne trouve pas son chemin : elle ___ carte.", "a besoin de la", ["a besoin de la", "pense à la", "parle de la", "s’intéresse à la"], "Sans cette carte, elle ne trouve pas son chemin : elle a besoin de la carte.", "La carte est nécessaire : avoir besoin de la carte."),
      q("Pour réussir, ils doivent pratiquer : ils ___ pratiquer.", "ont besoin de", ["ont besoin de", "pensent à", "parlent de", "rêvent de"], "Pour réussir, ils doivent pratiquer : ils ont besoin de pratiquer.", "La pratique est présentée comme nécessaire."),
    ],
  },
  {
    id: "interesser-a", name: "S’intéresser à", hotspot: { left: "46%", top: "88%", width: "29%", height: "5%" }, highlightColor: "74, 104, 119",
    questions: [
      q("Depuis ce cours, Marie ___ histoire de France.", "s’intéresse à l’", ["s’intéresse à l’", "rêve de l’", "parle à l’", "a besoin de l’"], "Depuis ce cours, Marie s’intéresse à l’histoire de France.", "« S’intéresser » se construit avec « à » ; devant une voyelle, on obtient « à l’ »."),
      q("Je ___ musique classique.", "m’intéresse à la", ["m’intéresse à la", "rêve de la", "parle à la", "ai besoin de la"], "Je m’intéresse à la musique classique.", "S’intéresser à + la musique donne « à la musique »."),
      q("Nous ___ langues étrangères.", "nous intéressons aux", ["nous intéressons aux", "rêvons des", "parlons aux", "avons besoin des"], "Nous nous intéressons aux langues étrangères.", "À + les langues devient « aux langues »."),
      q("Paul ___ cinéma français.", "s’intéresse au", ["s’intéresse au", "rêve du", "parle au", "a besoin du"], "Paul s’intéresse au cinéma français.", "À + le cinéma devient « au cinéma »."),
      q("Tu ___ art moderne.", "t’intéresses à l’", ["t’intéresses à l’", "rêves de l’", "parles à l’", "as besoin de l’"], "Tu t’intéresses à l’art moderne.", "« Art » commence par une voyelle : à l’art."),
      q("Les enfants ___ animaux marins.", "s’intéressent aux", ["s’intéressent aux", "rêvent des", "parlent aux", "ont besoin des"], "Les enfants s’intéressent aux animaux marins.", "Le complément pluriel se construit avec « aux »."),
      q("Elle ___ nouvelle exposition du musée.", "s’intéresse à la", ["s’intéresse à la", "rêve de la", "parle de la", "a besoin de la"], "Elle s’intéresse à la nouvelle exposition du musée.", "L’exposition attire son intérêt : s’intéresser à."),
      q("Vous ___ projet scientifique.", "vous intéressez au", ["vous intéressez au", "rêvez du", "parlez au", "avez besoin du"], "Vous vous intéressez au projet scientifique.", "À + le projet devient « au projet »."),
      q("Ce sujet éveille sa curiosité : il ___ ce sujet.", "s’intéresse à", ["s’intéresse à", "rêve de", "parle à", "a besoin de"], "Ce sujet éveille sa curiosité : il s’intéresse à ce sujet.", "La curiosité appelle « s’intéresser à »."),
      q("Elles suivent toutes les nouvelles de l’espace parce qu’elles ___ espace.", "s’intéressent à l’", ["s’intéressent à l’", "rêvent de l’", "parlent à l’", "ont besoin de l’"], "Elles suivent toutes les nouvelles de l’espace parce qu’elles s’intéressent à l’espace.", "L’espace est leur centre d’intérêt."),
    ],
  },
  {
    id: "direct-verbs", name: "Apprendre, comprendre, choisir", hotspot: { left: "82%", top: "6%", width: "16%", height: "38%" }, highlightColor: "114, 88, 51",
    questions: [
      q("À l’école, Léa ___ français.", "apprend le", ["apprend le", "apprend au", "apprend du", "pense au"], "À l’école, Léa apprend le français.", "« Apprendre » prend ici un complément direct, sans préposition."),
      q("Nous ___ nouvelle chanson en classe.", "apprenons une", ["apprenons une", "apprenons à une", "parlons d’une", "pensons à une"], "Nous apprenons une nouvelle chanson en classe.", "La chanson est le complément direct d’« apprendre »."),
      q("Après l’explication, nous ___ règle.", "comprenons la", ["comprenons la", "comprenons à la", "parlons de la", "pensons à la"], "Après l’explication, nous comprenons la règle.", "« Comprendre » prend un complément direct."),
      q("Paul ___ question maintenant.", "comprend la", ["comprend la", "comprend à la", "parle de la", "rêve de la"], "Paul comprend la question maintenant.", "Aucune préposition ne sépare « comprendre » de son objet."),
      q("À la bibliothèque, Marie ___ livre.", "choisit un", ["choisit un", "choisit à un", "parle d’un", "rêve d’un"], "À la bibliothèque, Marie choisit un livre.", "« Choisir » prend directement son complément."),
      q("Vous ___ destination pour les vacances.", "choisissez une", ["choisissez une", "choisissez à une", "parlez d’une", "pensez à une"], "Vous choisissez une destination pour les vacances.", "La destination est le complément direct de « choisir »."),
      q("Les élèves ___ texte sans difficulté.", "comprennent le", ["comprennent le", "comprennent au", "parlent du", "pensent au"], "Les élèves comprennent le texte sans difficulté.", "« Comprendre le texte » ne prend pas de préposition."),
      q("J’___ vocabulaire de cette leçon.", "apprends le", ["apprends le", "apprends au", "parle du", "m’intéresse au"], "J’apprends le vocabulaire de cette leçon.", "« Apprendre le vocabulaire » se construit directement."),
      q("Tu ___ réponse parmi les quatre propositions.", "choisis la", ["choisis la", "choisis à la", "parles de la", "penses à la"], "Tu choisis la réponse parmi les quatre propositions.", "« Choisir » reçoit directement l’objet choisi."),
      q("Elle ___ problème, puis elle pense à la solution.", "comprend le", ["comprend le", "comprend au", "parle du", "pense au"], "Elle comprend le problème, puis elle pense à la solution.", "Comprendre prend un objet direct ; penser se construit avec « à »."),
    ],
  },
  {
    id: "question-review", name: "À qui ? De quoi ? Avec qui ?", hotspot: { left: "35%", top: "20%", width: "38%", height: "8%" }, highlightColor: "146, 75, 52",
    questions: [
      q("Réponse : « Je parle de ce livre. » Question : ___ parles-tu ?", "De quoi", ["De quoi", "À quoi", "À qui", "Avec qui"], "De quoi parles-tu ?", "Le complément est une chose introduite par « de » : « de quoi »."),
      q("Réponse : « Je parle à ma sœur. » Question : ___ parles-tu ?", "À qui", ["À qui", "De qui", "De quoi", "Avec qui"], "À qui parles-tu ?", "La personne est introduite par « à » : « à qui »."),
      q("Réponse : « Nous pensons à notre avenir. » Question : ___ pensez-vous ?", "À quoi", ["À quoi", "De quoi", "À qui", "Avec qui"], "À quoi pensez-vous ?", "Une chose introduite par « à » devient « à quoi »."),
      q("Réponse : « Elle rêve de Paul. » Question : ___ rêve-t-elle ?", "De qui", ["De qui", "À qui", "De quoi", "Avec qui"], "De qui rêve-t-elle ?", "Une personne introduite par « de » devient « de qui »."),
      q("Réponse : « Je travaille avec Marie. » Question : ___ travailles-tu ?", "Avec qui", ["Avec qui", "À qui", "De qui", "De quoi"], "Avec qui travailles-tu ?", "Le partenaire est introduit par « avec » : « avec qui »."),
      q("Réponse : « Il s’intéresse à la musique. » Question : ___ s’intéresse-t-il ?", "À quoi", ["À quoi", "De quoi", "À qui", "Avec qui"], "À quoi s’intéresse-t-il ?", "Une chose introduite par « à » devient « à quoi »."),
      q("Réponse : « Nous parlons de notre professeur. » Question : ___ parlez-vous ?", "De qui", ["De qui", "À qui", "De quoi", "Avec qui"], "De qui parlez-vous ?", "Une personne dont on parle est reprise par « de qui »."),
      q("Réponse : « Tu déjeunes avec Paul. » Question : ___ déjeunes-tu ?", "Avec qui", ["Avec qui", "À qui", "De qui", "À quoi"], "Avec qui déjeunes-tu ?", "La personne qui accompagne est introduite par « avec »."),
      q("Réponse : « Elle écrit à ses parents. » Question : ___ écrit-elle ?", "À qui", ["À qui", "De qui", "De quoi", "Avec qui"], "À qui écrit-elle ?", "Les destinataires sont des personnes introduites par « à »."),
      q("Réponse : « Vous avez besoin de repos. » Question : ___ avez-vous besoin ?", "De quoi", ["De quoi", "À quoi", "De qui", "Avec qui"], "De quoi avez-vous besoin ?", "Une chose introduite par « de » devient « de quoi »."),
    ],
  },
] as const;

export const verbLessonById = Object.fromEntries(verbLessons.map((lesson) => [lesson.id, lesson])) as Record<string, VerbLesson>;

function completedDisplay(question: VerbQuestion): string {
  return question.answer.endsWith("’")
    ? question.display.replace("___ ", question.answer)
    : question.display.replace("___", question.answer);
}

function validateVerbLessons(): void {
  if (verbLessons.length !== 8) throw new Error("Chapter 7 must contain exactly eight lessons.");
  if (new Set(verbLessons.map((lesson) => lesson.id)).size !== verbLessons.length) throw new Error("Chapter 7 lesson IDs must be unique.");
  let total = 0;
  for (const lesson of verbLessons) {
    if (lesson.questions.length !== 10) throw new Error(`${lesson.name} must contain ten questions.`);
    if (!lesson.hotspot.left || !lesson.hotspot.top || !lesson.hotspot.width || !lesson.hotspot.height || !lesson.highlightColor) throw new Error(`${lesson.name} needs hotspot and highlight data.`);
    total += lesson.questions.length;
    for (const question of lesson.questions) {
      if ((question.display.match(/___/g) ?? []).length !== 1) throw new Error(`Invalid blank: ${question.display}`);
      if (question.choices.length !== 4 || new Set(question.choices).size !== 4) throw new Error(`Invalid choices: ${question.display}`);
      if (question.choices.filter((choice) => choice === question.answer).length !== 1) throw new Error(`Answer missing from choices: ${question.display}`);
      if (!question.spoken || question.spoken.includes("_") || !question.note) throw new Error(`Invalid question data: ${question.display}`);
      if (lesson.id !== "question-review" && completedDisplay(question) !== question.spoken) throw new Error(`Spoken mismatch: ${question.display}`);
      if (lesson.id === "question-review" && !question.spoken.endsWith("?")) throw new Error(`Review speech must be a natural question: ${question.display}`);
    }
  }
  if (total !== 80) throw new Error("Chapter 7 must contain exactly eighty questions.");
  for (const id of ["parler-a", "parler-de", "penser-a", "rever-de", "besoin-de", "interesser-a", "direct-verbs", "question-review"]) {
    if (!verbLessons.some((lesson) => lesson.id === id)) throw new Error(`Chapter 7 is missing ${id}.`);
  }
}

validateVerbLessons();
