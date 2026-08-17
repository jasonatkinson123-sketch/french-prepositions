export type ReviewQuestion = {
  display: string;
  answer: string;
  choices: readonly string[];
  spoken: string;
  note: string;
  focus: string;
};

export type ReviewLesson = {
  id: string;
  name: string;
  hotspot: { left: string; top: string; width: string; height: string };
  highlightColor: string;
  questions: readonly ReviewQuestion[];
};

function q(focus: string, display: string, answer: string, choices: readonly string[], spoken: string, note: string): ReviewQuestion {
  return { focus, display, answer, choices, spoken, note };
}

export const reviewLessons: readonly ReviewLesson[] = [
  {
    id: "bord-de-mer", name: "Au bord de la mer", hotspot: { left: "11.4%", top: "28.5%", width: "8.8%", height: "7%" }, highlightColor: "70, 105, 122",
    questions: [
      q("pays", "Cet été, nous voyageons ___ Italie.", "en", ["en", "au", "à", "aux"], "Cet été, nous voyageons en Italie.", "L’Italie est un pays féminin : on dit « en Italie »."),
      q("position", "Le phare se dresse ___ la mer.", "au bord de", ["au bord de", "derrière", "sous", "entre"], "Le phare se dresse au bord de la mer.", "« Au bord de » indique la limite entre la terre et la mer."),
      q("temps", "Nous restons ici ___ deux semaines.", "pendant", ["pendant", "depuis", "dans", "il y a"], "Nous restons ici pendant deux semaines.", "« Pendant » indique la durée complète du séjour."),
      q("aller-venir", "Le bateau vient ___ port voisin.", "du", ["du", "au", "des", "aux"], "Le bateau vient du port voisin.", "Venir de + le port donne « venir du port »."),
      q("activite", "Les enfants jouent ___ plage.", "à la", ["à la", "au", "en", "chez"], "Les enfants jouent à la plage.", "« Plage » est féminin : on dit « à la plage »."),
      q("verbe", "Le soir, je ___ notre prochaine traversée.", "rêve de", ["rêve de", "pense à", "parle à", "choisis"], "Le soir, je rêve de notre prochaine traversée.", "Le verbe « rêver » se construit avec « de »."),
      q("adjectif", "Les voyageurs sont émerveillés ___ le paysage.", "par", ["par", "de", "à", "avec"], "Les voyageurs sont émerveillés par le paysage.", "La cause de leur émerveillement est introduite par « par »."),
      q("position", "Les serviettes sont ___ le parasol.", "sous", ["sous", "sur", "devant", "au-dessus de"], "Les serviettes sont sous le parasol.", "« Sous » indique une position plus basse, couverte par le parasol."),
      q("de-a", "Nous parlons ___ îles visibles au loin.", "des", ["des", "aux", "du", "au"], "Nous parlons des îles visibles au loin.", "Parler de + les îles donne « parler des îles »."),
      q("question", "Réponse : « Je pars avec Léa. » ___ pars-tu ?", "Avec qui", ["Avec qui", "De quoi", "À qui", "Où"], "Réponse : « Je pars avec Léa. » Avec qui pars-tu ?", "Pour demander la personne qui accompagne, on emploie « avec qui »."),
    ],
  },
  {
    id: "ecole", name: "À l’école", hotspot: { left: "34.9%", top: "29.5%", width: "9%", height: "5.7%" }, highlightColor: "145, 82, 52",
    questions: [
      q("lieu", "Les élèves arrivent ___école à huit heures.", "à l’", ["à l’", "de l’", "en", "chez"], "Les élèves arrivent à l’école à huit heures.", "Devant « école », à s’élide : « à l’école »."),
      q("temps", "Le cours commence ___ huit heures et demie.", "à", ["à", "en", "depuis", "pendant"], "Le cours commence à huit heures et demie.", "On emploie « à » devant une heure précise."),
      q("position", "Le dictionnaire est ___ les deux cahiers.", "entre", ["entre", "sur", "derrière", "au-dessus de"], "Le dictionnaire est entre les deux cahiers.", "« Entre » situe un objet au milieu de deux autres."),
      q("verbe", "Après le cours, Léa ___ son professeur.", "parle à", ["parle à", "parle de", "rêve de", "pense à"], "Après le cours, Léa parle à son professeur.", "Le professeur est l’interlocuteur : parler à quelqu’un."),
      q("direct", "Paul ___ la règle maintenant.", "comprend", ["comprend", "pense à", "parle de", "rêve de"], "Paul comprend la règle maintenant.", "« Comprendre » prend directement son complément."),
      q("de-a", "La professeure distribue les feuilles ___ élèves.", "aux", ["aux", "des", "au", "du"], "La professeure distribue les feuilles aux élèves.", "À + les élèves devient « aux élèves »."),
      q("adjectif", "Nous sommes fiers ___ notre projet de classe.", "de", ["de", "à", "avec", "par"], "Nous sommes fiers de notre projet de classe.", "L’adjectif « fier » se construit avec « de »."),
      q("aller-venir", "Après les cours, elle rentre ___ elle.", "chez", ["chez", "à", "au", "en"], "Après les cours, elle rentre chez elle.", "Devant une personne ou un pronom tonique, on emploie « chez »."),
      q("activite", "Nous faisons nos recherches ___ bibliothèque.", "à la", ["à la", "au", "en", "aux"], "Nous faisons nos recherches à la bibliothèque.", "« Bibliothèque » est féminin : « à la bibliothèque »."),
      q("question", "Réponse : « J’écris à la directrice. » ___ écris-tu ?", "À qui", ["À qui", "De qui", "De quoi", "Avec quoi"], "Réponse : « J’écris à la directrice. » À qui écris-tu ?", "La destinataire est une personne introduite par « à » : « à qui »."),
    ],
  },
  {
    id: "chez-des-amis", name: "Chez des amis", hotspot: { left: "60.3%", top: "28.7%", width: "12.6%", height: "5.8%" }, highlightColor: "91, 112, 75",
    questions: [
      q("chez", "Ce soir, nous dînons ___ des amis.", "chez", ["chez", "à", "au", "en"], "Ce soir, nous dînons chez des amis.", "« Chez » introduit le domicile de personnes."),
      q("temps", "Ils habitent ici ___ trois ans.", "depuis", ["depuis", "pendant", "dans", "il y a"], "Ils habitent ici depuis trois ans.", "« Depuis » indique une action commencée dans le passé et toujours actuelle."),
      q("position", "Paul est assis ___ Marie et Luc.", "entre", ["entre", "derrière", "sous", "au-dessus de"], "Paul est assis entre Marie et Luc.", "« Entre » place Paul au milieu des deux personnes."),
      q("verbe", "Pendant le dîner, nous ___ notre voyage.", "parlons de", ["parlons de", "parlons à", "pensons à", "rêvons de"], "Pendant le dîner, nous parlons de notre voyage.", "Le voyage est le sujet de la conversation : parler de."),
      q("adjectif", "Camille est très à l’aise ___ ce groupe.", "avec", ["avec", "de", "à", "par"], "Camille est très à l’aise avec ce groupe.", "La construction est « être à l’aise avec »."),
      q("aller-venir", "Nous venons ___ maison de Paul.", "de la", ["de la", "à la", "du", "au"], "Nous venons de la maison de Paul.", "« Venir de » suivi d’un nom féminin donne « de la »."),
      q("position", "Les manteaux sont accrochés ___ la porte.", "derrière", ["derrière", "devant", "sur", "entre"], "Les manteaux sont accrochés derrière la porte.", "« Derrière » indique qu’ils se trouvent au dos de la porte."),
      q("temps", "Nous repartirons ___ une heure.", "dans", ["dans", "depuis", "pendant", "il y a"], "Nous repartirons dans une heure.", "« Dans » situe une action à venir."),
      q("de-a", "Elle offre des fleurs ___ parents de Paul.", "aux", ["aux", "des", "du", "au"], "Elle offre des fleurs aux parents de Paul.", "À + les parents devient « aux parents »."),
      q("question", "Réponse : « Je viens avec mon frère. » ___ viens-tu ?", "Avec qui", ["Avec qui", "À qui", "De quoi", "À quoi"], "Réponse : « Je viens avec mon frère. » Avec qui viens-tu ?", "On demande l’accompagnateur avec « avec qui »."),
    ],
  },
  {
    id: "port", name: "Au port", hotspot: { left: "83.8%", top: "36.7%", width: "8.1%", height: "5.7%" }, highlightColor: "70, 104, 119",
    questions: [
      q("lieu", "Le bateau revient ___ port avant la nuit.", "au", ["au", "du", "à la", "de la"], "Le bateau revient au port avant la nuit.", "À + le port devient « au port »."),
      q("aller-venir", "Demain, nous partons ___ la Corse.", "pour", ["pour", "de", "chez", "avec"], "Demain, nous partons pour la Corse.", "« Partir pour » introduit la destination prévue."),
      q("pays", "Ce navire arrive ___ Canada.", "du", ["du", "au", "de la", "en"], "Ce navire arrive du Canada.", "Le Canada est masculin : de + le devient « du Canada »."),
      q("temps", "Le ferry part ___ midi.", "à", ["à", "en", "dans", "depuis"], "Le ferry part à midi.", "On emploie « à » devant une heure ou « midi »."),
      q("position", "Les valises sont posées ___ le guichet.", "devant", ["devant", "sous", "entre", "derrière"], "Les valises sont posées devant le guichet.", "« Devant » indique la position face au guichet."),
      q("verbe", "Le voyageur ___ l’employée du port.", "parle à", ["parle à", "parle de", "rêve de", "pense à"], "Le voyageur parle à l’employée du port.", "L’employée est l’interlocutrice : parler à."),
      q("adjectif", "Un billet est nécessaire ___ embarquer.", "pour", ["pour", "de", "à", "avec"], "Un billet est nécessaire pour embarquer.", "« Nécessaire pour » introduit le but ou l’action rendue possible."),
      q("de-a", "Le capitaine donne les consignes ___ passagers.", "aux", ["aux", "des", "du", "au"], "Le capitaine donne les consignes aux passagers.", "À + les passagers devient « aux passagers »."),
      q("position", "La cabine du capitaine est ___ pont principal.", "au-dessus du", ["au-dessus du", "sous le", "entre le", "devant le"], "La cabine du capitaine est au-dessus du pont principal.", "« Au-dessus de » + le pont devient « au-dessus du pont »."),
      q("activite", "Elle photographie le bateau ___ un appareil photo.", "avec", ["avec", "par", "de", "à"], "Elle photographie le bateau avec un appareil photo.", "« Avec » introduit l’instrument utilisé."),
    ],
  },
  {
    id: "musee", name: "Au musée", hotspot: { left: "14.5%", top: "43.5%", width: "9.3%", height: "5.8%" }, highlightColor: "135, 84, 53",
    questions: [
      q("lieu", "Nous retrouvons la guide ___ musée.", "au", ["au", "du", "à la", "en"], "Nous retrouvons la guide au musée.", "À + le musée devient « au musée »."),
      q("temps", "L’exposition est ouverte ___ six mois.", "depuis", ["depuis", "pendant", "dans", "à"], "L’exposition est ouverte depuis six mois.", "« Depuis » relie le début passé à la situation actuelle."),
      q("position", "Le portrait est accroché ___ la sculpture.", "à côté de", ["à côté de", "sous", "entre", "derrière"], "Le portrait est accroché à côté de la sculpture.", "« À côté de » indique une proximité latérale."),
      q("verbe", "La guide ___ nouvelle exposition.", "parle de la", ["parle de la", "parle à la", "pense à la", "rêve de la"], "La guide parle de la nouvelle exposition.", "L’exposition est le sujet : parler de la nouvelle exposition."),
      q("adjectif", "Les visiteurs sont intéressés ___ l’histoire locale.", "par", ["par", "de", "à", "avec"], "Les visiteurs sont intéressés par l’histoire locale.", "On dit « être intéressé par quelque chose »."),
      q("de-a", "Le gardien répond ___ questions du groupe.", "aux", ["aux", "des", "du", "au"], "Le gardien répond aux questions du groupe.", "À + les questions devient « aux questions »."),
      q("temps", "La visite commence ___ quinze minutes.", "dans", ["dans", "depuis", "pendant", "il y a"], "La visite commence dans quinze minutes.", "« Dans » indique le délai avant une action future."),
      q("direct", "Chaque élève ___ une œuvre préférée.", "choisit", ["choisit", "pense à", "parle de", "rêve de"], "Chaque élève choisit une œuvre préférée.", "« Choisir » prend directement son complément."),
      q("position", "Une petite statue se trouve ___ la vitrine.", "dans", ["dans", "sur", "derrière", "au-dessus de"], "Une petite statue se trouve dans la vitrine.", "« Dans » indique que la statue est à l’intérieur de la vitrine."),
      q("question", "Réponse : « Je m’intéresse à cette peinture. » ___ t’intéresses-tu ?", "À quoi", ["À quoi", "De quoi", "À qui", "Avec qui"], "Réponse : « Je m’intéresse à cette peinture. » À quoi t’intéresses-tu ?", "Une chose introduite par « à » est reprise par « à quoi »."),
    ],
  },
  {
    id: "cafe", name: "Au café", hotspot: { left: "34.8%", top: "40.8%", width: "8.3%", height: "5.8%" }, highlightColor: "151, 81, 48",
    questions: [
      q("lieu", "Nous déjeunons ___ café de la place.", "au", ["au", "du", "à la", "chez"], "Nous déjeunons au café de la place.", "À + le café devient « au café »."),
      q("position", "Léa est assise ___ Paul.", "à côté de", ["à côté de", "sous", "derrière", "au-dessus de"], "Léa est assise à côté de Paul.", "« À côté de » indique qu’elle est voisine de Paul."),
      q("temps", "Ils discutent ___ une heure.", "depuis", ["depuis", "pendant", "dans", "il y a"], "Ils discutent depuis une heure.", "La discussion a commencé il y a une heure et continue."),
      q("verbe", "Paul ___ son projet de voyage.", "parle de", ["parle de", "parle à", "pense à", "rêve de"], "Paul parle de son projet de voyage.", "Le projet est le sujet de la conversation : parler de."),
      q("adjectif", "Marie est contente ___ revoir ses amis.", "de", ["de", "à", "avec", "par"], "Marie est contente de revoir ses amis.", "« Content de » peut être suivi d’un infinitif."),
      q("direct", "Tu ___ un dessert sur la carte.", "choisis", ["choisis", "parles de", "penses à", "rêves de"], "Tu choisis un dessert sur la carte.", "« Choisir » prend un complément direct."),
      q("de-a", "Le serveur apporte les boissons ___ clientes.", "aux", ["aux", "des", "du", "au"], "Le serveur apporte les boissons aux clientes.", "À + les clientes devient « aux clientes »."),
      q("position", "Le sac de Paul est ___ la table.", "sous", ["sous", "sur", "entre", "au-dessus de"], "Le sac de Paul est sous la table.", "« Sous » situe le sac plus bas que la table."),
      q("question", "Réponse : « Je parle à Luc. » ___ parles-tu ?", "À qui", ["À qui", "De qui", "De quoi", "Avec quoi"], "Réponse : « Je parle à Luc. » À qui parles-tu ?", "Luc est l’interlocuteur : « à qui »."),
      q("activite", "Camille prend des photos ___ son téléphone.", "avec", ["avec", "par", "de", "à"], "Camille prend des photos avec son téléphone.", "« Avec » introduit l’outil utilisé."),
    ],
  },
  {
    id: "parc", name: "Au parc", hotspot: { left: "55.8%", top: "44.7%", width: "8.3%", height: "5.8%" }, highlightColor: "74, 108, 69",
    questions: [
      q("lieu", "Les enfants font du vélo ___ parc.", "au", ["au", "du", "à la", "en"], "Les enfants font du vélo au parc.", "À + le parc devient « au parc »."),
      q("position", "Le banc est ___ la fontaine.", "devant", ["devant", "sous", "entre", "sur"], "Le banc est devant la fontaine.", "« Devant » situe le banc face à la fontaine."),
      q("temps", "Nous nous promenons ici ___ printemps.", "au", ["au", "en", "depuis", "pendant"], "Nous nous promenons ici au printemps.", "On dit « au printemps »."),
      q("verbe", "En marchant, je ___ mes prochaines vacances.", "pense à", ["pense à", "parle de", "rêve de", "parle à"], "En marchant, je pense à mes prochaines vacances.", "Le verbe « penser » se construit avec « à »."),
      q("adjectif", "Ce sentier est bon ___ les débutants.", "pour", ["pour", "de", "à", "avec"], "Ce sentier est bon pour les débutants.", "« Bon pour » exprime ici l’adaptation ou le bénéfice."),
      q("activite", "Nous partageons le pique-nique ___ des amis.", "avec", ["avec", "par", "de", "à"], "Nous partageons le pique-nique avec des amis.", "« Avec » introduit les personnes qui nous accompagnent."),
      q("position", "Le ballon est tombé ___ le banc et l’arbre.", "entre", ["entre", "sur", "derrière", "au-dessus de"], "Le ballon est tombé entre le banc et l’arbre.", "« Entre » situe le ballon au milieu de deux éléments."),
      q("aller-venir", "Après la promenade, nous rentrons ___ maison.", "à la", ["à la", "de la", "au", "du"], "Après la promenade, nous rentrons à la maison.", "La destination habituelle est « à la maison »."),
      q("de-a", "La gardienne parle ___ enfants près du bassin.", "aux", ["aux", "des", "du", "au"], "La gardienne parle aux enfants près du bassin.", "Parler à + les enfants donne « parler aux enfants »."),
      q("question", "Réponse : « Je rêve de longues vacances. » ___ rêves-tu ?", "De quoi", ["De quoi", "À quoi", "De qui", "Avec qui"], "Réponse : « Je rêve de longues vacances. » De quoi rêves-tu ?", "Une chose introduite par « de » est reprise par « de quoi »."),
    ],
  },
  {
    id: "plage", name: "À la plage", hotspot: { left: "19.3%", top: "58.6%", width: "9.1%", height: "5.8%" }, highlightColor: "74, 111, 123",
    questions: [
      q("lieu", "Toute la famille passe la journée ___ plage.", "à la", ["à la", "au", "en", "chez"], "Toute la famille passe la journée à la plage.", "« Plage » est féminin : on dit « à la plage »."),
      q("temps", "Nous revenons ici ___ été.", "en", ["en", "au", "à", "depuis"], "Nous revenons ici en été.", "On peut dire « en été » pour situer l’activité dans cette saison."),
      q("position", "Le chapeau est posé ___ la serviette.", "sur", ["sur", "sous", "entre", "derrière"], "Le chapeau est posé sur la serviette.", "« Sur » indique un contact avec la surface supérieure."),
      q("aller-venir", "Les enfants reviennent ___ plage avant le dîner.", "de la", ["de la", "à la", "du", "au"], "Les enfants reviennent de la plage avant le dîner.", "Revenir de + la plage donne « de la plage »."),
      q("temps", "Ils jouent au volley ___ deux heures.", "pendant", ["pendant", "depuis", "dans", "il y a"], "Ils jouent au volley pendant deux heures.", "« Pendant » exprime la durée totale de l’activité."),
      q("position", "Le sac est ___ parasol rouge.", "à côté du", ["à côté du", "au-dessus du", "entre le", "devant le"], "Le sac est à côté du parasol rouge.", "À côté de + le parasol devient « à côté du parasol »."),
      q("verbe", "Léa ___apprendre à naviguer.", "rêve d’", ["rêve d’", "pense à", "parle à", "choisit d’"], "Léa rêve d’apprendre à naviguer.", "Devant une voyelle, le « de » de « rêver de » s’élide."),
      q("adjectif", "Nous sommes heureux ___ nos amis.", "avec", ["avec", "de", "à", "par"], "Nous sommes heureux avec nos amis.", "« Heureux avec » décrit ici le bonheur partagé avec des personnes."),
      q("pays", "Ces touristes viennent ___ États-Unis.", "des", ["des", "aux", "du", "en"], "Ces touristes viennent des États-Unis.", "Venir de + les États-Unis donne « des États-Unis »."),
      q("activite", "Paul se détend ___ un roman.", "avec", ["avec", "par", "de", "à"], "Paul se détend avec un roman.", "« Avec » introduit ici ce qui accompagne son moment de détente."),
    ],
  },
  {
    id: "gare", name: "À la gare", hotspot: { left: "49.1%", top: "56.7%", width: "9.2%", height: "5.8%" }, highlightColor: "97, 82, 56",
    questions: [
      q("lieu", "Nous retrouvons Camille ___ gare.", "à la", ["à la", "de la", "au", "du"], "Nous retrouvons Camille à la gare.", "« Gare » est féminin : on dit « à la gare »."),
      q("aller-venir", "Le train part ___ Lyon dans cinq minutes.", "pour", ["pour", "de", "chez", "avec"], "Le train part pour Lyon dans cinq minutes.", "« Partir pour » introduit la destination."),
      q("pays", "Ces voyageurs vont ___ Pays-Bas.", "aux", ["aux", "en", "au", "à"], "Ces voyageurs vont aux Pays-Bas.", "Les Pays-Bas sont pluriels : on dit « aux Pays-Bas »."),
      q("temps", "Le prochain train arrive ___ dix minutes.", "dans", ["dans", "depuis", "pendant", "il y a"], "Le prochain train arrive dans dix minutes.", "« Dans » indique un délai futur."),
      q("position", "Paul attend ___ le panneau des départs.", "sous", ["sous", "sur", "entre", "derrière"], "Paul attend sous le panneau des départs.", "« Sous » situe Paul plus bas que le panneau."),
      q("verbe", "La voyageuse ___ l’employé du guichet.", "parle à", ["parle à", "parle de", "rêve de", "pense à"], "La voyageuse parle à l’employé du guichet.", "L’employé est l’interlocuteur : parler à."),
      q("de-a", "L’employé vérifie les billets ___ passagers.", "des", ["des", "aux", "du", "au"], "L’employé vérifie les billets des passagers.", "De + les passagers devient « des passagers »."),
      q("adjectif", "Nous sommes prêts ___ monter dans le train.", "à", ["à", "de", "pour", "avec"], "Nous sommes prêts à monter dans le train.", "L’adjectif « prêt » se construit avec « à » devant un infinitif."),
      q("question", "Réponse : « Je voyage avec ma sœur. » ___ voyages-tu ?", "Avec qui", ["Avec qui", "À qui", "De quoi", "À quoi"], "Réponse : « Je voyage avec ma sœur. » Avec qui voyages-tu ?", "On demande l’accompagnatrice avec « avec qui »."),
      q("activite", "Elle cherche son quai ___ une application.", "avec", ["avec", "par", "de", "à"], "Elle cherche son quai avec une application.", "« Avec » introduit l’outil utilisé."),
    ],
  },
  {
    id: "cinema", name: "Au cinéma", hotspot: { left: "68.7%", top: "60%", width: "9.3%", height: "5.8%" }, highlightColor: "146, 75, 50",
    questions: [
      q("lieu", "Ce soir, nous allons ___ cinéma.", "au", ["au", "du", "à la", "en"], "Ce soir, nous allons au cinéma.", "À + le cinéma devient « au cinéma »."),
      q("temps", "La séance commence ___ vingt heures.", "à", ["à", "en", "dans", "depuis"], "La séance commence à vingt heures.", "On emploie « à » devant une heure précise."),
      q("verbe", "Après le film, nous ___ la fin surprenante.", "parlons de", ["parlons de", "parlons à", "pensons à", "rêvons de"], "Après le film, nous parlons de la fin surprenante.", "La fin est le sujet de la conversation : parler de."),
      q("position", "Nos places sont ___ celles de Paul et de Léa.", "derrière", ["derrière", "sur", "sous", "entre"], "Nos places sont derrière celles de Paul et de Léa.", "« Derrière » indique que nos places se trouvent au rang suivant."),
      q("direct", "Vous ___ un film français.", "choisissez", ["choisissez", "pensez à", "parlez de", "rêvez de"], "Vous choisissez un film français.", "« Choisir » prend directement son complément."),
      q("adjectif", "Les enfants sont impressionnés ___ les effets spéciaux.", "par", ["par", "de", "à", "avec"], "Les enfants sont impressionnés par les effets spéciaux.", "La cause de l’impression est introduite par « par »."),
      q("temps", "Nous attendons la séance ___ une demi-heure.", "depuis", ["depuis", "pendant", "dans", "il y a"], "Nous attendons la séance depuis une demi-heure.", "L’attente a commencé dans le passé et continue."),
      q("aller-venir", "À la fin, ils sortent ___ cinéma.", "du", ["du", "au", "de la", "à la"], "À la fin, ils sortent du cinéma.", "Sortir de + le cinéma donne « du cinéma »."),
      q("question", "Réponse : « Je vais au cinéma avec Hugo. » ___ vas-tu au cinéma ?", "Avec qui", ["Avec qui", "À qui", "De qui", "De quoi"], "Réponse : « Je vais au cinéma avec Hugo. » Avec qui vas-tu au cinéma ?", "On demande la personne qui accompagne avec « avec qui »."),
      q("de-a", "Le cinéma est proche ___ café.", "du", ["du", "au", "des", "aux"], "Le cinéma est proche du café.", "Proche de + le café devient « proche du café »."),
    ],
  },
] as const;

export const reviewLessonById = Object.fromEntries(reviewLessons.map((lesson) => [lesson.id, lesson])) as Record<string, ReviewLesson>;

export const reviewCoverage = reviewLessons.flatMap((lesson) => lesson.questions).reduce<Record<string, number>>((counts, question) => {
  counts[question.focus] = (counts[question.focus] ?? 0) + 1;
  return counts;
}, {});

export function validateChapterTenData(): void {
  if (reviewLessons.length !== 10) throw new Error("Chapter 10 must contain ten lessons.");
  if (new Set(reviewLessons.map((lesson) => lesson.id)).size !== 10) throw new Error("Chapter 10 lesson IDs must be unique.");
  let count = 0;
  for (const lesson of reviewLessons) {
    if (lesson.questions.length !== 10) throw new Error(`${lesson.name} must contain ten questions.`);
    if (!lesson.hotspot.left || !lesson.hotspot.top || !lesson.hotspot.width || !lesson.hotspot.height) throw new Error(`${lesson.name} needs complete hotspot data.`);
    for (const question of lesson.questions) {
      count += 1;
      if ((question.display.match(/___/g) ?? []).length !== 1) throw new Error(`Invalid blank: ${question.display}`);
      if (question.choices.length !== 4 || new Set(question.choices).size !== 4) throw new Error(`Invalid choices: ${question.display}`);
      if (question.choices.filter((choice) => choice === question.answer).length !== 1) throw new Error(`Answer missing from choices: ${question.display}`);
      if (!question.spoken || question.spoken.includes("_") || !question.note || !question.focus) throw new Error(`Incomplete question: ${question.display}`);
      if (question.display.replace("___", question.answer) !== question.spoken) throw new Error(`Display/spoken mismatch: ${question.display}`);
    }
  }
  if (count !== 100) throw new Error("Chapter 10 must contain exactly one hundred questions.");
  for (const focus of ["pays", "lieu", "aller-venir", "position", "temps", "de-a", "verbe", "adjectif", "activite", "question"]) {
    if (!reviewCoverage[focus]) throw new Error(`Chapter 10 is missing review coverage for ${focus}.`);
  }
}

validateChapterTenData();
