export type TimeQuestion = {
  display: string;
  answer: string;
  choices: readonly string[];
  spoken: string;
  note: string;
};

export type TimeLesson = {
  id: string;
  name: string;
  hotspot: { left: string; top: string; width: string; height: string };
  highlightColor: string;
  questions: readonly TimeQuestion[];
};

function q(display: string, answer: string, choices: readonly string[], spoken: string, note: string): TimeQuestion {
  return { display, answer, choices, spoken, note };
}

export const timeLessons: readonly TimeLesson[] = [
  {
    id: "today-dates", name: "Aujourd’hui, jours et dates", hotspot: { left: "8%", top: "23%", width: "13%", height: "19%" }, highlightColor: "139, 89, 53",
    questions: [
      q("___, nous sommes lundi 12 mai.", "Aujourd’hui", ["Aujourd’hui", "Demain", "Hier", "Pendant"], "Aujourd’hui, nous sommes lundi 12 mai.", "« Aujourd’hui » désigne le jour où nous sommes."),
      q("Le concert a lieu ___ 18 juin.", "mercredi", ["mercredi", "en mercredi", "au mercredi", "pendant mercredi"], "Le concert a lieu mercredi 18 juin.", "On emploie normalement le jour sans préposition."),
      q("Nous sommes ___ 3 octobre.", "vendredi", ["vendredi", "à vendredi", "en vendredi", "depuis vendredi"], "Nous sommes vendredi 3 octobre.", "Pour annoncer une date, on dit directement « vendredi 3 octobre »."),
      q("Mon anniversaire est ___ 27 janvier.", "le", ["le", "au", "en", "à"], "Mon anniversaire est le 27 janvier.", "Une date précise est introduite par « le »."),
      q("___ était dimanche, et aujourd’hui nous sommes lundi.", "Hier", ["Hier", "Demain", "Aujourd’hui", "Depuis"], "Hier était dimanche, et aujourd’hui nous sommes lundi.", "« Hier » désigne le jour avant aujourd’hui."),
      q("___ sera samedi, car aujourd’hui nous sommes vendredi.", "Demain", ["Demain", "Hier", "Aujourd’hui", "Pendant"], "Demain sera samedi, car aujourd’hui nous sommes vendredi.", "« Demain » désigne le jour après aujourd’hui."),
      q("La réunion est prévue ___ 6 mars.", "le", ["le", "au", "en", "dans"], "La réunion est prévue le 6 mars.", "On place « le » devant une date précise."),
      q("Nous partons ___ prochain.", "mardi", ["mardi", "en mardi", "au mardi", "le mardi"], "Nous partons mardi prochain.", "Avec « prochain », le jour se construit sans préposition ni article."),
      q("Le musée est fermé ___, comme chaque semaine.", "le lundi", ["le lundi", "lundi prochain", "en lundi", "à lundi"], "Le musée est fermé le lundi, comme chaque semaine.", "« Le lundi » exprime ici une habitude hebdomadaire."),
      q("Le premier jour de la semaine scolaire est ___.", "lundi", ["lundi", "dimanche", "samedi", "vendredi"], "Le premier jour de la semaine scolaire est lundi.", "Dans ce contexte scolaire, la semaine commence le lundi."),
    ],
  },
  {
    id: "clock-time", name: "À + heure", hotspot: { left: "6%", top: "42%", width: "20%", height: "24%" }, highlightColor: "82, 106, 79",
    questions: [
      q("Le cours commence ___ huit heures.", "à", ["à", "en", "dans", "depuis"], "Le cours commence à huit heures.", "Une heure précise est introduite par « à »."),
      q("Nous déjeunons ___.", "à midi", ["à midi", "en midi", "dans midi", "depuis midi"], "Nous déjeunons à midi.", "On dit « à midi » pour douze heures dans la journée."),
      q("Le dernier train part ___.", "à minuit", ["à minuit", "en minuit", "dans minuit", "sur minuit"], "Le dernier train part à minuit.", "On dit « à minuit » pour douze heures la nuit."),
      q("Le film commencera ___ neuf heures, peut-être un peu avant.", "vers", ["vers", "à", "depuis", "pendant"], "Le film commencera vers neuf heures, peut-être un peu avant.", "« Vers » indique une heure approximative."),
      q("La bibliothèque ouvre ___ dix heures précises.", "à", ["à", "en", "de", "pendant"], "La bibliothèque ouvre à dix heures précises.", "Une heure exacte se construit avec « à »."),
      q("Je travaille de huit heures ___ dix heures.", "à", ["à", "de", "dans", "vers"], "Je travaille de huit heures à dix heures.", "Une plage horaire commence avec « de » et se termine avec « à »."),
      q("Le magasin ferme de dix-neuf heures ___ vingt heures.", "à", ["à", "de", "en", "depuis"], "Le magasin ferme de dix-neuf heures à vingt heures.", "Dans une plage horaire, la fin est introduite par « à »."),
      q("Nous nous retrouvons ___ sept heures et demie.", "à", ["à", "en", "sur", "pendant"], "Nous nous retrouvons à sept heures et demie.", "On utilise « à » devant sept heures et demie."),
      q("Le réveil sonne ___ six heures du matin.", "à", ["à", "dans", "depuis", "pendant"], "Le réveil sonne à six heures du matin.", "L’heure du réveil est une heure précise : « à »."),
      q("Le rendez-vous est fixé ___ quinze heures quinze.", "à", ["à", "en", "de", "il y a"], "Le rendez-vous est fixé à quinze heures quinze.", "Une heure de rendez-vous est introduite par « à »."),
    ],
  },
  {
    id: "seasons", name: "Les saisons", hotspot: { left: "51%", top: "27%", width: "33%", height: "32%" }, highlightColor: "105, 118, 70",
    questions: [
      q("Les arbres fleurissent et le temps se radoucit : c’est ___.", "le printemps", ["le printemps", "l’été", "l’automne", "l’hiver"], "Les arbres fleurissent et le temps se radoucit : c’est le printemps.", "Les fleurs et le retour du temps doux annoncent le printemps."),
      q("Il fait très chaud et nous allons à la plage : c’est ___.", "l’été", ["l’été", "le printemps", "l’automne", "l’hiver"], "Il fait très chaud et nous allons à la plage : c’est l’été.", "La chaleur et la plage évoquent l’été."),
      q("Les feuilles deviennent orange et tombent : c’est ___.", "l’automne", ["l’automne", "le printemps", "l’été", "l’hiver"], "Les feuilles deviennent orange et tombent : c’est l’automne.", "Les feuilles colorées et leur chute caractérisent l’automne."),
      q("La neige recouvre le parc et il gèle : c’est ___.", "l’hiver", ["l’hiver", "le printemps", "l’été", "l’automne"], "La neige recouvre le parc et il gèle : c’est l’hiver.", "La neige et le gel caractérisent l’hiver."),
      q("Après l’hiver vient ___.", "le printemps", ["le printemps", "l’été", "l’automne", "l’hiver"], "Après l’hiver vient le printemps.", "Le printemps suit l’hiver."),
      q("Après le printemps vient ___.", "l’été", ["l’été", "l’automne", "l’hiver", "le printemps"], "Après le printemps vient l’été.", "L’été suit le printemps."),
      q("Après l’été vient ___.", "l’automne", ["l’automne", "l’hiver", "le printemps", "l’été"], "Après l’été vient l’automne.", "L’automne suit l’été."),
      q("Après l’automne vient ___.", "l’hiver", ["l’hiver", "le printemps", "l’été", "l’automne"], "Après l’automne vient l’hiver.", "L’hiver suit l’automne."),
      q("Les journées sont les plus longues pendant ___.", "l’été", ["l’été", "l’hiver", "l’automne", "le printemps"], "Les journées sont les plus longues pendant l’été.", "En France, les journées les plus longues se trouvent en été."),
      q("On remet souvent le chauffage quand arrive ___.", "l’automne", ["l’automne", "l’été", "le printemps", "le mois d’août"], "On remet souvent le chauffage quand arrive l’automne.", "Le retour du froid se produit souvent en automne."),
    ],
  },
  {
    id: "season-prepositions", name: "En + saison", hotspot: { left: "59%", top: "55%", width: "15%", height: "10%" }, highlightColor: "151, 92, 50",
    questions: [
      q("Nous allons souvent à la plage ___ été.", "en", ["en", "au", "à", "pendant le"], "Nous allons souvent à la plage en été.", "On dit « en été »."),
      q("Les feuilles tombent ___ automne.", "en", ["en", "au", "à", "sur"], "Les feuilles tombent en automne.", "On dit « en automne »."),
      q("Il neige souvent ___ hiver dans les montagnes.", "en", ["en", "au", "à", "sur"], "Il neige souvent en hiver dans les montagnes.", "On dit « en hiver »."),
      q("Les fleurs reviennent ___ printemps.", "au", ["au", "en", "à", "dans le"], "Les fleurs reviennent au printemps.", "Le printemps est l’exception : on dit « au printemps »."),
      q("Nous faisons du ski ___ hiver.", "en", ["en", "au", "à", "sur"], "Nous faisons du ski en hiver.", "La saison « hiver » se construit avec « en »."),
      q("Elle plante des tomates ___ printemps.", "au", ["au", "en", "à", "pendant la"], "Elle plante des tomates au printemps.", "On emploie « au » devant printemps."),
      q("Les touristes arrivent nombreux ___ été.", "en", ["en", "au", "à", "depuis"], "Les touristes arrivent nombreux en été.", "On emploie « en » devant été."),
      q("La forêt prend des couleurs rouges ___ automne.", "en", ["en", "au", "à", "dans"], "La forêt prend des couleurs rouges en automne.", "On emploie « en » devant automne."),
      q("Les oiseaux construisent leurs nids ___ printemps.", "au", ["au", "en", "à", "sur le"], "Les oiseaux construisent leurs nids au printemps.", "On dit toujours « au printemps »."),
      q("Les nuits sont longues ___ hiver.", "en", ["en", "au", "à", "dans l’"], "Les nuits sont longues en hiver.", "On dit « en hiver »."),
    ],
  },
  {
    id: "depuis", name: "Depuis", hotspot: { left: "83%", top: "35%", width: "14%", height: "34%" }, highlightColor: "112, 89, 124",
    questions: [
      q("Elle habite ici ___ trois ans et elle y vit toujours.", "depuis", ["depuis", "pendant", "il y a", "dans"], "Elle habite ici depuis trois ans et elle y vit toujours.", "« Depuis » relie le début passé à une situation qui continue."),
      q("Nous attendons le bus ___ vingt minutes et nous attendons encore.", "depuis", ["depuis", "pendant", "il y a", "dans"], "Nous attendons le bus depuis vingt minutes et nous attendons encore.", "L’attente a commencé dans le passé et continue maintenant."),
      q("Paul apprend le français ___ lundi et il poursuit ses leçons.", "depuis", ["depuis", "pendant", "il y a", "dans"], "Paul apprend le français depuis lundi et il poursuit ses leçons.", "« Depuis lundi » indique un point de départ toujours valable."),
      q("Je connais Marie ___ mon enfance et nous sommes toujours amis.", "depuis", ["depuis", "pendant", "il y a", "dans"], "Je connais Marie depuis mon enfance et nous sommes toujours amis.", "Cette relation a commencé dans l’enfance et continue."),
      q("Ils travaillent dans cette école ___ 2020 et ils y sont encore.", "depuis", ["depuis", "pendant", "il y a", "dans"], "Ils travaillent dans cette école depuis 2020 et ils y sont encore.", "Une année de départ avec continuation se construit avec « depuis »."),
      q("Le bébé dort ___ deux heures et il ne s’est pas encore réveillé.", "depuis", ["depuis", "pendant", "il y a", "dans"], "Le bébé dort depuis deux heures et il ne s’est pas encore réveillé.", "Le sommeil continue au moment où l’on parle."),
      q("Nous sommes ici ___ ce matin et nous ne sommes pas encore partis.", "depuis", ["depuis", "pendant", "il y a", "dans"], "Nous sommes ici depuis ce matin et nous ne sommes pas encore partis.", "« Depuis ce matin » exprime une situation encore en cours."),
      q("Elle joue du piano ___ qu’elle a six ans.", "depuis", ["depuis", "pendant", "il y a", "dans"], "Elle joue du piano depuis qu’elle a six ans.", "« Depuis que » introduit le moment où l’action durable a commencé."),
      q("Il pleut ___ midi et la pluie continue.", "depuis", ["depuis", "pendant", "il y a", "dans"], "Il pleut depuis midi et la pluie continue.", "La pluie a commencé à midi et continue."),
      q("Tu portes ces lunettes ___ combien de temps ?", "depuis", ["depuis", "pendant", "il y a", "dans"], "Tu portes ces lunettes depuis combien de temps ?", "On demande la durée d’une situation actuelle avec « depuis combien de temps »."),
    ],
  },
  {
    id: "pendant", name: "Pendant", hotspot: { left: "53%", top: "80%", width: "13%", height: "11%" }, highlightColor: "108, 83, 54",
    questions: [
      q("Nous avons travaillé ___ deux heures, puis nous sommes partis.", "pendant", ["pendant", "depuis", "il y a", "dans"], "Nous avons travaillé pendant deux heures, puis nous sommes partis.", "« Pendant » mesure ici une durée terminée."),
      q("Elle a lu ___ tout le trajet, puis elle a fermé son livre.", "pendant", ["pendant", "depuis", "il y a", "dans"], "Elle a lu pendant tout le trajet, puis elle a fermé son livre.", "La lecture occupe une période délimitée et achevée."),
      q("Les élèves sont restés silencieux ___ le contrôle.", "pendant", ["pendant", "depuis", "il y a", "dans"], "Les élèves sont restés silencieux pendant le contrôle.", "Le contrôle forme une période limitée."),
      q("Nous avons visité Lyon ___ trois jours avant de rentrer.", "pendant", ["pendant", "depuis", "il y a", "dans"], "Nous avons visité Lyon pendant trois jours avant de rentrer.", "La visite a duré trois jours et elle est terminée."),
      q("Il a neigé ___ toute la nuit, puis le ciel s’est dégagé.", "pendant", ["pendant", "depuis", "il y a", "dans"], "Il a neigé pendant toute la nuit, puis le ciel s’est dégagé.", "La nuit est une période achevée."),
      q("J’ai vécu à Paris ___ un an, mais je vis maintenant à Nantes.", "pendant", ["pendant", "depuis", "il y a", "dans"], "J’ai vécu à Paris pendant un an, mais je vis maintenant à Nantes.", "La résidence parisienne est terminée et sa durée est connue."),
      q("Le professeur a parlé ___ que nous prenions des notes.", "pendant", ["pendant", "depuis", "il y a", "dans"], "Le professeur a parlé pendant que nous prenions des notes.", "« Pendant que » relie deux actions simultanées."),
      q("Ils ont fermé le musée ___ les travaux, puis ils l’ont rouvert.", "pendant", ["pendant", "depuis", "il y a", "dans"], "Ils ont fermé le musée pendant les travaux, puis ils l’ont rouvert.", "Les travaux constituent une période délimitée."),
      q("Nous n’avons pas utilisé nos téléphones ___ le cours.", "pendant", ["pendant", "depuis", "il y a", "dans"], "Nous n’avons pas utilisé nos téléphones pendant le cours.", "Le cours est une période limitée."),
      q("Marie a dormi ___ une heure, puis elle s’est levée.", "pendant", ["pendant", "depuis", "il y a", "dans"], "Marie a dormi pendant une heure, puis elle s’est levée.", "Le sommeil est terminé : on indique sa durée avec « pendant »."),
    ],
  },
  {
    id: "ago", name: "Il y a", hotspot: { left: "10%", top: "85%", width: "28%", height: "13%" }, highlightColor: "145, 76, 47",
    questions: [
      q("Paul est arrivé ___ dix minutes.", "il y a", ["il y a", "depuis", "pendant", "dans"], "Paul est arrivé il y a dix minutes.", "« Il y a » situe un événement passé par rapport à maintenant."),
      q("Nous avons vu ce film ___ trois jours.", "il y a", ["il y a", "depuis", "pendant", "dans"], "Nous avons vu ce film il y a trois jours.", "Le film a été vu trois jours avant maintenant."),
      q("Elle a quitté Paris ___ une semaine.", "il y a", ["il y a", "depuis", "pendant", "dans"], "Elle a quitté Paris il y a une semaine.", "Le départ est un événement passé achevé."),
      q("J’ai commencé ce livre ___ deux heures.", "il y a", ["il y a", "depuis", "pendant", "dans"], "J’ai commencé ce livre il y a deux heures.", "« Il y a » indique quand l’action de commencer s’est produite."),
      q("Le train est parti ___ quelques minutes.", "il y a", ["il y a", "depuis", "pendant", "dans"], "Le train est parti il y a quelques minutes.", "Le départ s’est produit quelques minutes avant maintenant."),
      q("Mes grands-parents se sont mariés ___ cinquante ans.", "il y a", ["il y a", "depuis", "pendant", "dans"], "Mes grands-parents se sont mariés il y a cinquante ans.", "Le mariage est situé cinquante ans dans le passé."),
      q("Tu m’as téléphoné ___ une heure.", "il y a", ["il y a", "depuis", "pendant", "dans"], "Tu m’as téléphoné il y a une heure.", "L’appel est un événement passé ponctuel."),
      q("La ville a construit cette école ___ longtemps.", "il y a", ["il y a", "depuis", "pendant", "dans"], "La ville a construit cette école il y a longtemps.", "« Il y a longtemps » signifie longtemps avant maintenant."),
      q("Nous sommes rentrés de vacances ___ deux semaines.", "il y a", ["il y a", "depuis", "pendant", "dans"], "Nous sommes rentrés de vacances il y a deux semaines.", "Le retour est un événement achevé dans le passé."),
      q("Elle a rencontré son professeur ___ trois mois.", "il y a", ["il y a", "depuis", "pendant", "dans"], "Elle a rencontré son professeur il y a trois mois.", "La rencontre a eu lieu trois mois avant aujourd’hui."),
    ],
  },
  {
    id: "future-in", name: "Dans", hotspot: { left: "69%", top: "85%", width: "14%", height: "12%" }, highlightColor: "67, 90, 107",
    questions: [
      q("Le train partira ___ vingt minutes.", "dans", ["dans", "depuis", "pendant", "il y a"], "Le train partira dans vingt minutes.", "« Dans » indique le temps restant avant un événement futur."),
      q("Nous partirons en vacances ___ deux semaines.", "dans", ["dans", "depuis", "pendant", "il y a"], "Nous partirons en vacances dans deux semaines.", "Le départ aura lieu deux semaines après maintenant."),
      q("Le cours commencera ___ quelques minutes.", "dans", ["dans", "depuis", "pendant", "il y a"], "Le cours commencera dans quelques minutes.", "L’action est future et proche."),
      q("Elle reviendra ___ une heure.", "dans", ["dans", "depuis", "pendant", "il y a"], "Elle reviendra dans une heure.", "Son retour aura lieu une heure après maintenant."),
      q("Tu recevras les résultats ___ trois jours.", "dans", ["dans", "depuis", "pendant", "il y a"], "Tu recevras les résultats dans trois jours.", "La réception des résultats est future."),
      q("Le magasin fermera ___ dix minutes.", "dans", ["dans", "depuis", "pendant", "il y a"], "Le magasin fermera dans dix minutes.", "La fermeture se produira dix minutes après maintenant."),
      q("Nous déménagerons ___ un mois.", "dans", ["dans", "depuis", "pendant", "il y a"], "Nous déménagerons dans un mois.", "Le déménagement est prévu un mois après aujourd’hui."),
      q("Le printemps commencera ___ plusieurs semaines.", "dans", ["dans", "depuis", "pendant", "il y a"], "Le printemps commencera dans plusieurs semaines.", "Le début du printemps est encore à venir."),
      q("Je te rappellerai ___ un instant.", "dans", ["dans", "depuis", "pendant", "il y a"], "Je te rappellerai dans un instant.", "Le rappel aura lieu peu après maintenant."),
      q("Ils ouvriront la nouvelle bibliothèque ___ un an.", "dans", ["dans", "depuis", "pendant", "il y a"], "Ils ouvriront la nouvelle bibliothèque dans un an.", "L’ouverture est prévue un an après maintenant."),
    ],
  },
] as const;

export const timeLessonById = Object.fromEntries(timeLessons.map((lesson) => [lesson.id, lesson])) as Record<string, TimeLesson>;

function validateTimeLessons(): void {
  if (timeLessons.length !== 8) throw new Error("Chapter 5 must contain exactly eight lessons.");
  if (new Set(timeLessons.map((lesson) => lesson.id)).size !== timeLessons.length) throw new Error("Chapter 5 lesson IDs must be unique.");
  let total = 0;
  for (const lesson of timeLessons) {
    if (lesson.questions.length !== 10) throw new Error(`${lesson.name} must contain ten questions.`);
    if (!lesson.hotspot.left || !lesson.hotspot.top || !lesson.hotspot.width || !lesson.hotspot.height || !lesson.highlightColor) throw new Error(`${lesson.name} needs hotspot and highlight data.`);
    total += lesson.questions.length;
    for (const question of lesson.questions) {
      if ((question.display.match(/___/g) ?? []).length !== 1) throw new Error(`Invalid blank: ${question.display}`);
      if (question.choices.length !== 4 || new Set(question.choices).size !== 4) throw new Error(`Invalid choices: ${question.display}`);
      if (question.choices.filter((choice) => choice === question.answer).length !== 1) throw new Error(`Answer missing from choices: ${question.display}`);
      if (!question.spoken || question.spoken.includes("_") || !question.note) throw new Error(`Invalid question data: ${question.display}`);
      if (question.display.replace("___", question.answer) !== question.spoken) throw new Error(`Spoken mismatch: ${question.display}`);
    }
  }
  if (total !== 80) throw new Error("Chapter 5 must contain exactly eighty questions.");
  const requiredLessons = ["today-dates", "clock-time", "seasons", "season-prepositions", "depuis", "pendant", "ago", "future-in"];
  for (const id of requiredLessons) if (!timeLessons.some((lesson) => lesson.id === id)) throw new Error(`Chapter 5 is missing ${id}.`);
}

validateTimeLessons();
