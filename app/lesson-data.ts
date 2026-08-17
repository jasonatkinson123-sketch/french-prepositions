export const choices = ["à", "au", "en", "aux"] as const;

export type Answer = (typeof choices)[number];

export type Question = {
  display: string;
  answer: Answer;
  spoken: string;
  note: string;
};

export type Region = {
  id: string;
  name: string;
  hotspot: { left: string; top: string; width: string; height: string };
  questions: readonly Question[];
};

export const regions: readonly Region[] = [
  {
    id: "western-europe",
    name: "Europe de l’Ouest",
    hotspot: { left: "32.2%", top: "24.8%", width: "13.2%", height: "12%" },
    questions: [
      { display: "Je vais ___ France.", answer: "en", spoken: "Je vais en France.", note: "On utilise « en » avec la France : en France." },
      { display: "Nous partons ___ Belgique demain.", answer: "en", spoken: "Nous partons en Belgique demain.", note: "On utilise « en » avec la Belgique : en Belgique." },
      { display: "Elle habite ___ Allemagne depuis deux ans.", answer: "en", spoken: "Elle habite en Allemagne depuis deux ans.", note: "On utilise « en » avec l’Allemagne : en Allemagne." },
      { display: "Vous passez vos vacances ___ Suisse.", answer: "en", spoken: "Vous passez vos vacances en Suisse.", note: "On utilise « en » avec la Suisse : en Suisse." },
      { display: "Ils voyagent ___ Autriche au printemps.", answer: "en", spoken: "Ils voyagent en Autriche au printemps.", note: "On utilise « en » avec l’Autriche : en Autriche." },
      { display: "Mon frère travaille ___ Pays-Bas.", answer: "aux", spoken: "Mon frère travaille aux Pays-Bas.", note: "Les Pays-Bas sont au pluriel : aux Pays-Bas." },
      { display: "Tu vas ___ Luxembourg ce week-end.", answer: "au", spoken: "Tu vas au Luxembourg ce week-end.", note: "On utilise « au » avec le Luxembourg : au Luxembourg." },
      { display: "Elle séjourne ___ Liechtenstein.", answer: "au", spoken: "Elle séjourne au Liechtenstein.", note: "On utilise « au » avec le Liechtenstein : au Liechtenstein." },
      { display: "Nous sommes ___ France pour l’été.", answer: "en", spoken: "Nous sommes en France pour l’été.", note: "On dit « en France »." },
      { display: "Il retourne ___ Pays-Bas en septembre.", answer: "aux", spoken: "Il retourne aux Pays-Bas en septembre.", note: "On dit « aux Pays-Bas »." },
    ],
  },
  {
    id: "northern-europe",
    name: "Europe du Nord",
    hotspot: { left: "40.5%", top: "17.4%", width: "15.5%", height: "12.5%" },
    questions: [
      { display: "Nous partons ___ Royaume-Uni demain.", answer: "au", spoken: "Nous partons au Royaume-Uni demain.", note: "Le Royaume-Uni est masculin : au Royaume-Uni." },
      { display: "Elle habite ___ Irlande depuis trois ans.", answer: "en", spoken: "Elle habite en Irlande depuis trois ans.", note: "On utilise « en » avec l’Irlande : en Irlande." },
      { display: "Vous passez l’hiver ___ Islande.", answer: "en", spoken: "Vous passez l’hiver en Islande.", note: "On utilise « en » avec l’Islande : en Islande." },
      { display: "Ils voyagent ___ Norvège en juin.", answer: "en", spoken: "Ils voyagent en Norvège en juin.", note: "La Norvège est féminine : en Norvège." },
      { display: "Mon cousin travaille ___ Suède.", answer: "en", spoken: "Mon cousin travaille en Suède.", note: "La Suède est féminine : en Suède." },
      { display: "Tu étudies ___ Finlande cette année.", answer: "en", spoken: "Tu étudies en Finlande cette année.", note: "La Finlande est féminine : en Finlande." },
      { display: "Nous retournons ___ Danemark lundi.", answer: "au", spoken: "Nous retournons au Danemark lundi.", note: "Le Danemark est masculin : au Danemark." },
      { display: "Elle séjourne ___ Estonie pour son travail.", answer: "en", spoken: "Elle séjourne en Estonie pour son travail.", note: "On utilise « en » devant Estonie : en Estonie." },
      { display: "Mes amis sont ___ Lettonie en ce moment.", answer: "en", spoken: "Mes amis sont en Lettonie en ce moment.", note: "La Lettonie est féminine : en Lettonie." },
      { display: "Il arrive ___ Lituanie ce soir.", answer: "en", spoken: "Il arrive en Lituanie ce soir.", note: "La Lituanie est féminine : en Lituanie." },
    ],
  },
  {
    id: "southern-europe",
    name: "Europe du Sud",
    hotspot: { left: "42.1%", top: "31.4%", width: "12.8%", height: "12.5%" },
    questions: [
      { display: "Ma sœur vit ___ Espagne.", answer: "en", spoken: "Ma sœur vit en Espagne.", note: "On utilise « en » avec l’Espagne : en Espagne." },
      { display: "Nous mangeons très bien ___ Italie.", answer: "en", spoken: "Nous mangeons très bien en Italie.", note: "On utilise « en » avec l’Italie : en Italie." },
      { display: "Il retourne ___ Portugal cet été.", answer: "au", spoken: "Il retourne au Portugal cet été.", note: "Le Portugal est masculin : au Portugal." },
      { display: "Vous voyagez ___ Grèce au printemps.", answer: "en", spoken: "Vous voyagez en Grèce au printemps.", note: "La Grèce est féminine : en Grèce." },
      { display: "Elles passent une semaine ___ Croatie.", answer: "en", spoken: "Elles passent une semaine en Croatie.", note: "La Croatie est féminine : en Croatie." },
      { display: "Mon oncle travaille ___ Slovénie.", answer: "en", spoken: "Mon oncle travaille en Slovénie.", note: "La Slovénie est féminine : en Slovénie." },
      { display: "Tu fais de la randonnée ___ Albanie.", answer: "en", spoken: "Tu fais de la randonnée en Albanie.", note: "On utilise « en » avec l’Albanie : en Albanie." },
      { display: "Nous séjournons ___ Malte en octobre.", answer: "à", spoken: "Nous séjournons à Malte en octobre.", note: "Malte s’emploie sans article : à Malte." },
      { display: "Elle part ___ Chypre demain matin.", answer: "à", spoken: "Elle part à Chypre demain matin.", note: "Chypre s’emploie sans article : à Chypre." },
      { display: "Son frère habite ___ Monaco.", answer: "à", spoken: "Son frère habite à Monaco.", note: "Monaco s’emploie sans article : à Monaco." },
    ],
  },
  {
    id: "eastern-europe",
    name: "Europe de l’Est",
    hotspot: { left: "51.4%", top: "25.6%", width: "14.3%", height: "13.5%" },
    questions: [
      { display: "Nous passons quelques jours ___ Pologne.", answer: "en", spoken: "Nous passons quelques jours en Pologne.", note: "La Pologne est féminine : en Pologne." },
      { display: "Elle travaille ___ Ukraine depuis janvier.", answer: "en", spoken: "Elle travaille en Ukraine depuis janvier.", note: "On utilise « en » devant Ukraine : en Ukraine." },
      { display: "Ils voyagent ___ Roumanie en train.", answer: "en", spoken: "Ils voyagent en Roumanie en train.", note: "La Roumanie est féminine : en Roumanie." },
      { display: "Mon professeur est ___ Bulgarie cette semaine.", answer: "en", spoken: "Mon professeur est en Bulgarie cette semaine.", note: "La Bulgarie est féminine : en Bulgarie." },
      { display: "Vous étudiez ___ Hongrie pendant un semestre.", answer: "en", spoken: "Vous étudiez en Hongrie pendant un semestre.", note: "La Hongrie est féminine : en Hongrie." },
      { display: "Tu séjournes ___ Slovaquie au mois de mai.", answer: "en", spoken: "Tu séjournes en Slovaquie au mois de mai.", note: "La Slovaquie est féminine : en Slovaquie." },
      { display: "Nous sommes ___ Tchéquie pour un festival.", answer: "en", spoken: "Nous sommes en Tchéquie pour un festival.", note: "La Tchéquie est féminine : en Tchéquie." },
      { display: "Elle retourne ___ Moldavie dimanche.", answer: "en", spoken: "Elle retourne en Moldavie dimanche.", note: "La Moldavie est féminine : en Moldavie." },
      { display: "Mes voisins habitent ___ Biélorussie.", answer: "en", spoken: "Mes voisins habitent en Biélorussie.", note: "La Biélorussie est féminine : en Biélorussie." },
      { display: "Il voyage ___ Russie pour son travail.", answer: "en", spoken: "Il voyage en Russie pour son travail.", note: "La Russie est féminine : en Russie." },
    ],
  },
  {
    id: "north-america",
    name: "Amérique du Nord",
    hotspot: { left: "10.2%", top: "33.1%", width: "15.5%", height: "12.5%" },
    questions: [
      { display: "Ma cousine étudie ___ Canada.", answer: "au", spoken: "Ma cousine étudie au Canada.", note: "Le Canada est masculin : au Canada." },
      { display: "Nous partons ___ États-Unis demain.", answer: "aux", spoken: "Nous partons aux États-Unis demain.", note: "Les États-Unis sont au pluriel : aux États-Unis." },
      { display: "Il passe ses vacances ___ Mexique.", answer: "au", spoken: "Il passe ses vacances au Mexique.", note: "Le Mexique est masculin : au Mexique." },
      { display: "Elles font des recherches ___ Groenland.", answer: "au", spoken: "Elles font des recherches au Groenland.", note: "Le Groenland est masculin : au Groenland." },
      { display: "Vous travaillez ___ États-Unis cette année.", answer: "aux", spoken: "Vous travaillez aux États-Unis cette année.", note: "On dit « aux États-Unis » au pluriel." },
      { display: "Tu retournes ___ Canada en décembre.", answer: "au", spoken: "Tu retournes au Canada en décembre.", note: "On dit « au Canada »." },
      { display: "Mes amis voyagent ___ Mexique en bus.", answer: "au", spoken: "Mes amis voyagent au Mexique en bus.", note: "On utilise « au » avec le Mexique : au Mexique." },
      { display: "Son équipe séjourne ___ Groenland.", answer: "au", spoken: "Son équipe séjourne au Groenland.", note: "On utilise « au » avec le Groenland : au Groenland." },
      { display: "Nous sommes ___ Canada pour l’hiver.", answer: "au", spoken: "Nous sommes au Canada pour l’hiver.", note: "Le Canada est masculin : au Canada." },
      { display: "Elle habite ___ États-Unis depuis peu.", answer: "aux", spoken: "Elle habite aux États-Unis depuis peu.", note: "Les États-Unis sont au pluriel : aux États-Unis." },
    ],
  },
  {
    id: "central-america",
    name: "Amérique centrale",
    hotspot: { left: "16.4%", top: "49.2%", width: "11.3%", height: "12.5%" },
    questions: [
      { display: "Nous arrivons ___ Guatemala lundi.", answer: "au", spoken: "Nous arrivons au Guatemala lundi.", note: "Le Guatemala est masculin : au Guatemala." },
      { display: "Elle travaille ___ Belize pendant l’été.", answer: "au", spoken: "Elle travaille au Belize pendant l’été.", note: "Le Belize est masculin : au Belize." },
      { display: "Ils voyagent ___ Honduras ce mois-ci.", answer: "au", spoken: "Ils voyagent au Honduras ce mois-ci.", note: "Le Honduras est masculin : au Honduras." },
      { display: "Mon frère séjourne ___ Salvador.", answer: "au", spoken: "Mon frère séjourne au Salvador.", note: "Le Salvador est masculin : au Salvador." },
      { display: "Tu pars ___ Nicaragua demain matin.", answer: "au", spoken: "Tu pars au Nicaragua demain matin.", note: "Le Nicaragua est masculin : au Nicaragua." },
      { display: "Vous passez deux semaines ___ Costa Rica.", answer: "au", spoken: "Vous passez deux semaines au Costa Rica.", note: "Le Costa Rica est masculin : au Costa Rica." },
      { display: "Mes parents vivent ___ Panama.", answer: "au", spoken: "Mes parents vivent au Panama.", note: "Le Panama est masculin : au Panama." },
      { display: "Nous retournons ___ Guatemala en avril.", answer: "au", spoken: "Nous retournons au Guatemala en avril.", note: "On dit « au Guatemala »." },
      { display: "Elle étudie ___ Costa Rica cette année.", answer: "au", spoken: "Elle étudie au Costa Rica cette année.", note: "On dit « au Costa Rica »." },
      { display: "Son bateau arrive ___ Panama ce soir.", answer: "au", spoken: "Son bateau arrive au Panama ce soir.", note: "On dit « au Panama »." },
    ],
  },
  {
    id: "south-america",
    name: "Amérique du Sud",
    hotspot: { left: "19.7%", top: "63.5%", width: "13.5%", height: "12.5%" },
    questions: [
      { display: "Nous passons le carnaval ___ Brésil.", answer: "au", spoken: "Nous passons le carnaval au Brésil.", note: "Le Brésil est masculin : au Brésil." },
      { display: "Elle habite ___ Argentine depuis un an.", answer: "en", spoken: "Elle habite en Argentine depuis un an.", note: "On utilise « en » devant Argentine : en Argentine." },
      { display: "Ils tournent un film ___ Colombie.", answer: "en", spoken: "Ils tournent un film en Colombie.", note: "La Colombie est féminine : en Colombie." },
      { display: "Mon ami travaille ___ Bolivie.", answer: "en", spoken: "Mon ami travaille en Bolivie.", note: "La Bolivie est féminine : en Bolivie." },
      { display: "Vous voyagez ___ Équateur en juillet.", answer: "en", spoken: "Vous voyagez en Équateur en juillet.", note: "Équateur commence par une voyelle : en Équateur." },
      { display: "Tu fais de la randonnée ___ Pérou.", answer: "au", spoken: "Tu fais de la randonnée au Pérou.", note: "Le Pérou est masculin : au Pérou." },
      { display: "Nous sommes ___ Chili pour un concert.", answer: "au", spoken: "Nous sommes au Chili pour un concert.", note: "Le Chili est masculin : au Chili." },
      { display: "Elle retourne ___ Uruguay en septembre.", answer: "en", spoken: "Elle retourne en Uruguay en septembre.", note: "Uruguay commence par une voyelle : en Uruguay." },
      { display: "Mes cousins vivent ___ Paraguay.", answer: "au", spoken: "Mes cousins vivent au Paraguay.", note: "Le Paraguay est masculin : au Paraguay." },
      { display: "Il séjourne ___ Venezuela pour son travail.", answer: "au", spoken: "Il séjourne au Venezuela pour son travail.", note: "Le Venezuela est masculin : au Venezuela." },
    ],
  },
  {
    id: "north-africa",
    name: "Afrique du Nord",
    hotspot: { left: "38.7%", top: "46.3%", width: "13.2%", height: "12.5%" },
    questions: [
      { display: "Nous passons une semaine ___ Maroc.", answer: "au", spoken: "Nous passons une semaine au Maroc.", note: "Le Maroc est masculin : au Maroc." },
      { display: "Elle enseigne ___ Algérie cette année.", answer: "en", spoken: "Elle enseigne en Algérie cette année.", note: "On utilise « en » devant Algérie : en Algérie." },
      { display: "Ils prennent le train ___ Tunisie.", answer: "en", spoken: "Ils prennent le train en Tunisie.", note: "La Tunisie est féminine : en Tunisie." },
      { display: "Mon collègue travaille ___ Libye.", answer: "en", spoken: "Mon collègue travaille en Libye.", note: "La Libye est féminine : en Libye." },
      { display: "Vous découvrez les pyramides ___ Égypte.", answer: "en", spoken: "Vous découvrez les pyramides en Égypte.", note: "On utilise « en » devant Égypte : en Égypte." },
      { display: "Tu séjournes ___ Soudan pendant un mois.", answer: "au", spoken: "Tu séjournes au Soudan pendant un mois.", note: "Le Soudan est masculin : au Soudan." },
      { display: "Nous voyageons ___ Mauritanie au printemps.", answer: "en", spoken: "Nous voyageons en Mauritanie au printemps.", note: "La Mauritanie est féminine : en Mauritanie." },
      { display: "Elle retourne ___ Maroc en novembre.", answer: "au", spoken: "Elle retourne au Maroc en novembre.", note: "On dit « au Maroc »." },
      { display: "Mes amis habitent ___ Tunisie.", answer: "en", spoken: "Mes amis habitent en Tunisie.", note: "On dit « en Tunisie »." },
      { display: "Il est ___ Égypte pour ses recherches.", answer: "en", spoken: "Il est en Égypte pour ses recherches.", note: "On dit « en Égypte »." },
    ],
  },
  {
    id: "sub-saharan-africa",
    name: "Afrique subsaharienne",
    hotspot: { left: "42.7%", top: "63.2%", width: "15.3%", height: "12.5%" },
    questions: [
      { display: "Ma tante travaille ___ Sénégal.", answer: "au", spoken: "Ma tante travaille au Sénégal.", note: "Le Sénégal est masculin : au Sénégal." },
      { display: "Nous voyageons ___ Mali en janvier.", answer: "au", spoken: "Nous voyageons au Mali en janvier.", note: "Le Mali est masculin : au Mali." },
      { display: "Elle habite ___ Nigeria depuis deux ans.", answer: "au", spoken: "Elle habite au Nigeria depuis deux ans.", note: "Le Nigeria est masculin : au Nigeria." },
      { display: "Ils partent ___ Ghana la semaine prochaine.", answer: "au", spoken: "Ils partent au Ghana la semaine prochaine.", note: "Le Ghana est masculin : au Ghana." },
      { display: "Vous faites un safari ___ Kenya.", answer: "au", spoken: "Vous faites un safari au Kenya.", note: "Le Kenya est masculin : au Kenya." },
      { display: "Tu séjournes ___ Rwanda cet été.", answer: "au", spoken: "Tu séjournes au Rwanda cet été.", note: "Le Rwanda est masculin : au Rwanda." },
      { display: "Mon équipe est ___ Cameroun.", answer: "au", spoken: "Mon équipe est au Cameroun.", note: "Le Cameroun est masculin : au Cameroun." },
      { display: "Nous sommes ___ Éthiopie pour un projet.", answer: "en", spoken: "Nous sommes en Éthiopie pour un projet.", note: "On utilise « en » devant Éthiopie : en Éthiopie." },
      { display: "Elle retourne ___ Tanzanie au printemps.", answer: "en", spoken: "Elle retourne en Tanzanie au printemps.", note: "La Tanzanie est féminine : en Tanzanie." },
      { display: "Mes voisins vivent ___ Afrique du Sud.", answer: "en", spoken: "Mes voisins vivent en Afrique du Sud.", note: "L’Afrique du Sud est féminine : en Afrique du Sud." },
    ],
  },
  {
    id: "middle-east",
    name: "Moyen-Orient",
    hotspot: { left: "53.6%", top: "45.8%", width: "13.2%", height: "12.5%" },
    questions: [
      { display: "Nous arrivons ___ Israël demain.", answer: "en", spoken: "Nous arrivons en Israël demain.", note: "Israël commence par une voyelle : en Israël." },
      { display: "Elle passe ses vacances ___ Liban.", answer: "au", spoken: "Elle passe ses vacances au Liban.", note: "Le Liban est masculin : au Liban." },
      { display: "Ils travaillent ___ Jordanie cette année.", answer: "en", spoken: "Ils travaillent en Jordanie cette année.", note: "La Jordanie est féminine : en Jordanie." },
      { display: "Mon ami voyage ___ Syrie.", answer: "en", spoken: "Mon ami voyage en Syrie.", note: "La Syrie est féminine : en Syrie." },
      { display: "Vous séjournez ___ Irak pendant un mois.", answer: "en", spoken: "Vous séjournez en Irak pendant un mois.", note: "Irak commence par une voyelle : en Irak." },
      { display: "Tu retournes ___ Iran cet automne.", answer: "en", spoken: "Tu retournes en Iran cet automne.", note: "Iran commence par une voyelle : en Iran." },
      { display: "Nous vivons ___ Arabie saoudite.", answer: "en", spoken: "Nous vivons en Arabie saoudite.", note: "L’Arabie saoudite est féminine : en Arabie saoudite." },
      { display: "Elle fait une escale ___ Qatar.", answer: "au", spoken: "Elle fait une escale au Qatar.", note: "Le Qatar est masculin : au Qatar." },
      { display: "Son frère travaille ___ Koweït.", answer: "au", spoken: "Son frère travaille au Koweït.", note: "Le Koweït est masculin : au Koweït." },
      { display: "Ils s’installent ___ Émirats arabes unis.", answer: "aux", spoken: "Ils s’installent aux Émirats arabes unis.", note: "Les Émirats arabes unis sont au pluriel : aux Émirats arabes unis." },
    ],
  },
  {
    id: "south-asia",
    name: "Asie du Sud",
    hotspot: { left: "62.4%", top: "42.8%", width: "12.3%", height: "13%" },
    questions: [
      { display: "Ma cousine étudie ___ Inde cette année.", answer: "en", spoken: "Ma cousine étudie en Inde cette année.", note: "On utilise « en » devant Inde : en Inde." },
      { display: "Nous partons ___ Pakistan lundi.", answer: "au", spoken: "Nous partons au Pakistan lundi.", note: "Le Pakistan est masculin : au Pakistan." },
      { display: "Elle travaille ___ Bangladesh.", answer: "au", spoken: "Elle travaille au Bangladesh.", note: "Le Bangladesh est masculin : au Bangladesh." },
      { display: "Ils font de la randonnée ___ Népal.", answer: "au", spoken: "Ils font de la randonnée au Népal.", note: "Le Népal est masculin : au Népal." },
      { display: "Vous passez l’hiver ___ Sri Lanka.", answer: "au", spoken: "Vous passez l’hiver au Sri Lanka.", note: "Le Sri Lanka est masculin : au Sri Lanka." },
      { display: "Tu séjournes ___ Afghanistan pendant un mois.", answer: "en", spoken: "Tu séjournes en Afghanistan pendant un mois.", note: "Afghanistan commence par une voyelle : en Afghanistan." },
      { display: "Mon professeur voyage ___ Bhoutan.", answer: "au", spoken: "Mon professeur voyage au Bhoutan.", note: "Le Bhoutan est masculin : au Bhoutan." },
      { display: "Nous sommes ___ Maldives pour une semaine.", answer: "aux", spoken: "Nous sommes aux Maldives pour une semaine.", note: "Les Maldives sont au pluriel : aux Maldives." },
      { display: "Elle retourne ___ Inde en septembre.", answer: "en", spoken: "Elle retourne en Inde en septembre.", note: "On dit « en Inde »." },
      { display: "Mes amis vivent ___ Pakistan.", answer: "au", spoken: "Mes amis vivent au Pakistan.", note: "On dit « au Pakistan »." },
    ],
  },
  {
    id: "southeast-asia",
    name: "Asie du Sud-Est",
    hotspot: { left: "71.5%", top: "51.5%", width: "13.8%", height: "13.5%" },
    questions: [
      { display: "Nous passons nos vacances ___ Thaïlande.", answer: "en", spoken: "Nous passons nos vacances en Thaïlande.", note: "La Thaïlande est féminine : en Thaïlande." },
      { display: "Elle travaille ___ Vietnam depuis janvier.", answer: "au", spoken: "Elle travaille au Vietnam depuis janvier.", note: "Le Vietnam est masculin : au Vietnam." },
      { display: "Ils voyagent ___ Cambodge en train.", answer: "au", spoken: "Ils voyagent au Cambodge en train.", note: "Le Cambodge est masculin : au Cambodge." },
      { display: "Mon frère séjourne ___ Laos.", answer: "au", spoken: "Mon frère séjourne au Laos.", note: "Le Laos est masculin : au Laos." },
      { display: "Vous partez ___ Myanmar demain.", answer: "au", spoken: "Vous partez au Myanmar demain.", note: "Le Myanmar est masculin : au Myanmar." },
      { display: "Tu étudies ___ Malaisie cette année.", answer: "en", spoken: "Tu étudies en Malaisie cette année.", note: "La Malaisie est féminine : en Malaisie." },
      { display: "Nous vivons ___ Indonésie depuis peu.", answer: "en", spoken: "Nous vivons en Indonésie depuis peu.", note: "On utilise « en » devant Indonésie : en Indonésie." },
      { display: "Elle retourne ___ Philippines en août.", answer: "aux", spoken: "Elle retourne aux Philippines en août.", note: "Les Philippines sont au pluriel : aux Philippines." },
      { display: "Mes amis travaillent ___ Singapour.", answer: "à", spoken: "Mes amis travaillent à Singapour.", note: "Singapour s’emploie sans article : à Singapour." },
      { display: "Il fait une escale ___ Brunéi.", answer: "au", spoken: "Il fait une escale au Brunéi.", note: "Le Brunéi est masculin : au Brunéi." },
    ],
  },
  {
    id: "east-asia",
    name: "Asie de l’Est",
    hotspot: { left: "68.4%", top: "27.4%", width: "17%", height: "12.5%" },
    questions: [
      { display: "Notre classe voyage ___ Chine au printemps.", answer: "en", spoken: "Notre classe voyage en Chine au printemps.", note: "La Chine est féminine : en Chine." },
      { display: "Ma cousine étudie ___ Japon cette année.", answer: "au", spoken: "Ma cousine étudie au Japon cette année.", note: "Le Japon est masculin : au Japon." },
      { display: "Ils travaillent ___ Corée du Sud.", answer: "en", spoken: "Ils travaillent en Corée du Sud.", note: "La Corée du Sud est féminine : en Corée du Sud." },
      { display: "Vous séjournez ___ Corée du Nord.", answer: "en", spoken: "Vous séjournez en Corée du Nord.", note: "La Corée du Nord est féminine : en Corée du Nord." },
      { display: "Elle fait de la randonnée ___ Mongolie.", answer: "en", spoken: "Elle fait de la randonnée en Mongolie.", note: "La Mongolie est féminine : en Mongolie." },
      { display: "Nous partons ___ Taïwan demain matin.", answer: "à", spoken: "Nous partons à Taïwan demain matin.", note: "Taïwan s’emploie sans article : à Taïwan." },
      { display: "Mon oncle retourne ___ Chine en octobre.", answer: "en", spoken: "Mon oncle retourne en Chine en octobre.", note: "On dit « en Chine »." },
      { display: "Tu passes l’été ___ Japon.", answer: "au", spoken: "Tu passes l’été au Japon.", note: "On dit « au Japon »." },
      { display: "Mes amis vivent ___ Corée du Sud.", answer: "en", spoken: "Mes amis vivent en Corée du Sud.", note: "On dit « en Corée du Sud »." },
      { display: "Il est ___ Mongolie pour ses recherches.", answer: "en", spoken: "Il est en Mongolie pour ses recherches.", note: "On dit « en Mongolie »." },
    ],
  },
  {
    id: "oceania",
    name: "Océanie",
    hotspot: { left: "77.3%", top: "72.3%", width: "16.3%", height: "13.5%" },
    questions: [
      { display: "Nous passons un mois ___ Australie.", answer: "en", spoken: "Nous passons un mois en Australie.", note: "On utilise « en » devant Australie : en Australie." },
      { display: "Elle travaille ___ Nouvelle-Zélande.", answer: "en", spoken: "Elle travaille en Nouvelle-Zélande.", note: "La Nouvelle-Zélande est féminine : en Nouvelle-Zélande." },
      { display: "Ils partent ___ Fidji demain.", answer: "aux", spoken: "Ils partent aux Fidji demain.", note: "Les Fidji sont au pluriel : aux Fidji." },
      { display: "Vous séjournez ___ Samoa pendant une semaine.", answer: "aux", spoken: "Vous séjournez aux Samoa pendant une semaine.", note: "Les Samoa sont au pluriel : aux Samoa." },
      { display: "Tu voyages ___ Tonga cet été.", answer: "aux", spoken: "Tu voyages aux Tonga cet été.", note: "Les Tonga sont au pluriel : aux Tonga." },
      { display: "Mon frère habite ___ Vanuatu.", answer: "au", spoken: "Mon frère habite au Vanuatu.", note: "Le Vanuatu est masculin : au Vanuatu." },
      { display: "Nous faisons un reportage ___ Papouasie-Nouvelle-Guinée.", answer: "en", spoken: "Nous faisons un reportage en Papouasie-Nouvelle-Guinée.", note: "La Papouasie-Nouvelle-Guinée est féminine : en Papouasie-Nouvelle-Guinée." },
      { display: "Elle réalise un projet ___ Micronésie.", answer: "en", spoken: "Elle réalise un projet en Micronésie.", note: "On utilise « en » avec la Micronésie : en Micronésie." },
      { display: "Mes amis sont ___ Kiribati pour quelques jours.", answer: "à", spoken: "Mes amis sont à Kiribati pour quelques jours.", note: "Kiribati s’emploie sans article : à Kiribati." },
      { display: "Il fait une escale ___ Nauru.", answer: "à", spoken: "Il fait une escale à Nauru.", note: "Nauru s’emploie sans article : à Nauru." },
    ],
  },
] as const;

export const regionById = Object.fromEntries(regions.map((region) => [region.id, region])) as Record<string, Region>;

function validateLessons() {
  if (regions.length !== 14) throw new Error(`Expected 14 regions; received ${regions.length}.`);
  const totalQuestionCount = regions.reduce((total, region) => total + region.questions.length, 0);
  if (totalQuestionCount !== 140) throw new Error(`Expected 140 questions; received ${totalQuestionCount}.`);

  const ids = new Set<string>();
  for (const region of regions) {
    if (ids.has(region.id)) throw new Error(`Duplicate region id: ${region.id}`);
    ids.add(region.id);
    if (region.questions.length !== 10) throw new Error(`${region.name} must contain exactly 10 questions.`);
    if (!region.hotspot.left || !region.hotspot.top || !region.hotspot.width || !region.hotspot.height) {
      throw new Error(`${region.name} is missing map hotspot information.`);
    }

    region.questions.forEach((question, questionIndex) => {
      if ((question.display.match(/___/g) ?? []).length !== 1) {
        throw new Error(`${region.name}, question ${questionIndex + 1}: display must contain exactly one blank.`);
      }
      if (!choices.includes(question.answer)) {
        throw new Error(`${region.name}, question ${questionIndex + 1}: invalid answer.`);
      }
      if (!question.spoken || question.spoken.includes("_")) {
        throw new Error(`${region.name}, question ${questionIndex + 1}: invalid spoken sentence.`);
      }
      if (question.display.replace("___", question.answer) !== question.spoken) {
        throw new Error(`${region.name}, question ${questionIndex + 1}: spoken sentence does not match display and answer.`);
      }
      if (!question.note) throw new Error(`${region.name}, question ${questionIndex + 1}: missing note.`);
    });
  }
}

validateLessons();
