export type PositionQuestion = {
  display: string;
  answer: string;
  choices: readonly string[];
  spoken: string;
  note: string;
};

export type PositionLesson = {
  id: string;
  name: string;
  hotspot: { left: string; top: string; width: string; height: string };
  highlightColor: string;
  questions: readonly PositionQuestion[];
};

function q(display: string, answer: string, choices: readonly string[], spoken: string, note: string): PositionQuestion {
  return { display, answer, choices, spoken, note };
}

export const positionLessons: readonly PositionLesson[] = [
  {
    id: "plant-on-bookcase", name: "Sur — contact", hotspot: { left: "9%", top: "24%", width: "15%", height: "23%" }, highlightColor: "101, 116, 59",
    questions: [
      q("Le livre touche le plateau : il repose ___ table.", "sur la", ["sur la", "sous la", "devant la", "derrière la"], "Le livre touche le plateau : il repose sur la table.", "Le livre touche la surface supérieure : sur la table."),
      q("Le pot est posé sur le sommet : la plante est ___ bibliothèque.", "sur la", ["sur la", "sous la", "à côté de la", "derrière la"], "Le pot est posé sur le sommet : la plante est sur la bibliothèque.", "Le pot repose sur le meuble : sur la bibliothèque."),
      q("Le fond de la tasse touche le bois : elle est ___ bureau.", "sur le", ["sur le", "sous le", "devant le", "derrière le"], "Le fond de la tasse touche le bois : elle est sur le bureau.", "La tasse repose directement sur le bureau."),
      q("Le téléphone repose sur le coussin : il est ___ chaise.", "sur la", ["sur la", "sous la", "devant la", "derrière la"], "Le téléphone repose sur le coussin : il est sur la chaise.", "Le téléphone touche le siège : sur la chaise."),
      q("Le cahier est à plat sur une planche : il est ___ étagère.", "sur l’", ["sur l’", "sous l’", "devant l’", "derrière l’"], "Le cahier est à plat sur une planche : il est sur l’étagère.", "Le cahier repose sur l’étagère."),
      q("La base du vase touche le meuble : le vase est ___ meuble.", "sur le", ["sur le", "sous le", "devant le", "derrière le"], "La base du vase touche le meuble : le vase est sur le meuble.", "Le vase repose directement sur le meuble."),
      q("Les clés reposent sur le bois : elles sont ___ commode.", "sur la", ["sur la", "sous la", "devant la", "derrière la"], "Les clés reposent sur le bois : elles sont sur la commode.", "Les clés touchent le dessus : sur la commode."),
      q("Les feuilles couvrent le plateau : elles sont ___ table.", "sur la", ["sur la", "sous la", "dans la", "derrière la"], "Les feuilles couvrent le plateau : elles sont sur la table.", "Les feuilles reposent sur le plateau."),
      q("Les lunettes touchent la couverture : elles sont ___ livre.", "sur le", ["sur le", "sous le", "devant le", "derrière le"], "Les lunettes touchent la couverture : elles sont sur le livre.", "Les lunettes reposent sur la couverture du livre."),
      q("Le manteau est étendu sur les draps : il est ___ lit.", "sur le", ["sur le", "sous le", "devant le", "derrière le"], "Le manteau est étendu sur les draps : il est sur le lit.", "Le manteau touche les draps : sur le lit."),
    ],
  },
  {
    id: "above-shelf", name: "Au-dessus de", hotspot: { left: "59%", top: "29%", width: "20%", height: "19%" }, highlightColor: "83, 111, 132",
    questions: [
      q("Le tableau est plus haut sans le toucher : il est ___ canapé.", "au-dessus du", ["au-dessus du", "sur le", "sous le", "devant le"], "Le tableau est plus haut sans le toucher : il est au-dessus du canapé.", "Il est plus haut sans contact : au-dessus du canapé."),
      q("La lampe pend du plafond, plus haut que la table : elle est ___ table.", "au-dessus de la", ["au-dessus de la", "sur la", "sous la", "derrière la"], "La lampe pend du plafond, plus haut que la table : elle est au-dessus de la table.", "La lampe ne touche pas la table : au-dessus de la table."),
      q("L’horloge est fixée au mur, plus haut que l’armoire : elle est ___ armoire.", "au-dessus de l’", ["au-dessus de l’", "sur l’", "sous l’", "derrière l’"], "L’horloge est fixée au mur, plus haut que l’armoire : elle est au-dessus de l’armoire.", "Devant une voyelle, on dit « au-dessus de l’armoire »."),
      q("La planche supérieure ne touche pas celle du bas : elle est ___ étagère.", "au-dessus de l’", ["au-dessus de l’", "sur l’", "sous l’", "devant l’"], "La planche supérieure ne touche pas celle du bas : elle est au-dessus de l’étagère.", "Elle est plus haute sans contact : au-dessus de l’étagère."),
      q("L’étiquette est suspendue plus haut que les livres : elle est ___ livres.", "au-dessus des", ["au-dessus des", "sur les", "sous les", "derrière les"], "L’étiquette est suspendue plus haut que les livres : elle est au-dessus des livres.", "Au pluriel, de + les devient « des »."),
      q("La petite fenêtre est placée plus haut que la porte : elle est ___ porte.", "au-dessus de la", ["au-dessus de la", "sur la", "sous la", "devant la"], "La petite fenêtre est placée plus haut que la porte : elle est au-dessus de la porte.", "Elle est plus haute que la porte : au-dessus de la porte."),
      q("L’oiseau vole dans le ciel, plus haut que le toit : il est ___ toit.", "au-dessus du", ["au-dessus du", "sur le", "sous le", "derrière le"], "L’oiseau vole dans le ciel, plus haut que le toit : il est au-dessus du toit.", "L’oiseau ne touche pas le toit : au-dessus du toit."),
      q("Le miroir est accroché très haut, sans toucher le lavabo : il est ___ lavabo.", "au-dessus du", ["au-dessus du", "sur le", "sous le", "devant le"], "Le miroir est accroché très haut, sans toucher le lavabo : il est au-dessus du lavabo.", "Le miroir est plus haut : au-dessus du lavabo."),
      q("Le mobile est suspendu, plus haut que le berceau : il est ___ berceau.", "au-dessus du", ["au-dessus du", "sur le", "sous le", "derrière le"], "Le mobile est suspendu, plus haut que le berceau : il est au-dessus du berceau.", "Le mobile ne repose pas sur le berceau."),
      q("Le placard mural est fixé plus haut que le bureau : il est ___ bureau.", "au-dessus du", ["au-dessus du", "sur le", "sous le", "devant le"], "Le placard mural est fixé plus haut que le bureau : il est au-dessus du bureau.", "Le placard est plus haut sans contact : au-dessus du bureau."),
    ],
  },
  {
    id: "behind-cabinet", name: "Derrière", hotspot: { left: "59%", top: "48%", width: "20%", height: "18%" }, highlightColor: "112, 82, 53",
    questions: [
      q("Seule la poignée du sac dépasse : il est caché ___ porte.", "derrière la", ["derrière la", "devant la", "sur la", "à côté de la"], "Seule la poignée du sac dépasse : il est caché derrière la porte.", "La porte cache presque le sac : derrière la porte."),
      q("On voit seulement la queue du chat au dos du fauteuil : il est ___ fauteuil.", "derrière le", ["derrière le", "devant le", "sur le", "sous le"], "On voit seulement la queue du chat au dos du fauteuil : il est derrière le fauteuil.", "Le fauteuil cache le chat : derrière le fauteuil."),
      q("La balle a roulé hors de vue, au dos de l’armoire : elle est ___ armoire.", "derrière l’", ["derrière l’", "devant l’", "sur l’", "sous l’"], "La balle a roulé hors de vue, au dos de l’armoire : elle est derrière l’armoire.", "L’armoire cache la balle : derrière l’armoire."),
      q("Une silhouette apparaît au dos des rideaux : elle est ___ rideaux.", "derrière les", ["derrière les", "devant les", "sur les", "sous les"], "Une silhouette apparaît au dos des rideaux : elle est derrière les rideaux.", "Les rideaux cachent la silhouette."),
      q("Le jardin est invisible depuis la rue, au dos de la maison : il est ___ maison.", "derrière la", ["derrière la", "devant la", "sur la", "dans la"], "Le jardin est invisible depuis la rue, au dos de la maison : il est derrière la maison.", "La maison sépare la rue du jardin."),
      q("Je te cache entièrement ; l’enfant est ___ moi.", "derrière", ["derrière", "devant", "sur", "entre"], "Je te cache entièrement ; l’enfant est derrière moi.", "Je me trouve devant l’enfant et je le cache."),
      q("Le canapé cache la valise à notre regard : elle est ___ canapé.", "derrière le", ["derrière le", "devant le", "sur le", "sous le"], "Le canapé cache la valise à notre regard : elle est derrière le canapé.", "La valise est au dos du canapé."),
      q("Le balai est rangé hors de vue, au dos du meuble : il est ___ meuble.", "derrière le", ["derrière le", "devant le", "sur le", "dans le"], "Le balai est rangé hors de vue, au dos du meuble : il est derrière le meuble.", "Le meuble cache le balai."),
      q("Le vélo est dans la cour arrière, au dos du garage : il est ___ garage.", "derrière le", ["derrière le", "devant le", "sur le", "dans le"], "Le vélo est dans la cour arrière, au dos du garage : il est derrière le garage.", "Le vélo se trouve à l’arrière du garage."),
      q("Les nuages passent au premier plan et cachent la lune : elle est ___ nuages.", "derrière les", ["derrière les", "devant les", "sur les", "sous les"], "Les nuages passent au premier plan et cachent la lune : elle est derrière les nuages.", "Les nuages cachent la lune : derrière les nuages."),
    ],
  },
  {
    id: "beside-door", name: "À côté de", hotspot: { left: "81%", top: "48%", width: "15%", height: "25%" }, highlightColor: "91, 112, 83",
    questions: [
      q("Le manteau est juste à droite de l’entrée : il est ___ porte.", "à côté de la", ["à côté de la", "derrière la", "devant la", "loin de la"], "Le manteau est juste à droite de l’entrée : il est à côté de la porte.", "Il est immédiatement voisin de la porte."),
      q("La lampe touche presque le bras droit du fauteuil : elle est ___ fauteuil.", "à côté du", ["à côté du", "derrière le", "devant le", "au-dessus du"], "La lampe touche presque le bras droit du fauteuil : elle est à côté du fauteuil.", "De + le devient « du » : à côté du fauteuil."),
      q("Le panier est placé contre le côté gauche de l’armoire : il est ___ armoire.", "à côté de l’", ["à côté de l’", "derrière l’", "devant l’", "au-dessus de l’"], "Le panier est placé contre le côté gauche de l’armoire : il est à côté de l’armoire.", "Devant une voyelle, on dit « à côté de l’armoire »."),
      q("Le vase est immédiatement à droite de la fenêtre : il est ___ fenêtre.", "à côté de la", ["à côté de la", "derrière la", "devant la", "loin de la"], "Le vase est immédiatement à droite de la fenêtre : il est à côté de la fenêtre.", "Le vase est voisin de la fenêtre."),
      q("La photo est posée juste à droite de la rangée : elle est ___ livres.", "à côté des", ["à côté des", "derrière les", "devant les", "au-dessus des"], "La photo est posée juste à droite de la rangée : elle est à côté des livres.", "Au pluriel, de + les devient « des »."),
      q("La chaise est collée au côté de l’étagère : elle est ___ étagère.", "à côté de l’", ["à côté de l’", "derrière l’", "devant l’", "au-dessus de l’"], "La chaise est collée au côté de l’étagère : elle est à côté de l’étagère.", "La chaise est immédiatement voisine de l’étagère."),
      q("La boulangerie est le bâtiment voisin de l’école : elle est ___ école.", "à côté de l’", ["à côté de l’", "derrière l’", "devant l’", "loin de l’"], "La boulangerie est le bâtiment voisin de l’école : elle est à côté de l’école.", "Les deux bâtiments sont voisins."),
      q("Le verre est posé juste à droite de l’assiette : il est ___ assiette.", "à côté de l’", ["à côté de l’", "derrière l’", "devant l’", "au-dessus de l’"], "Le verre est posé juste à droite de l’assiette : il est à côté de l’assiette.", "Le verre est immédiatement voisin de l’assiette."),
      q("La pharmacie partage un mur avec la banque : elle est ___ banque.", "à côté de la", ["à côté de la", "derrière la", "devant la", "loin de la"], "La pharmacie partage un mur avec la banque : elle est à côté de la banque.", "Les deux bâtiments sont côte à côte."),
      q("Paul est assis sur la chaise voisine de Marie : il est ___ Marie.", "à côté de", ["à côté de", "derrière", "devant", "loin de"], "Paul est assis sur la chaise voisine de Marie : il est à côté de Marie.", "Paul et Marie sont assis côte à côte."),
    ],
  },
  {
    id: "book-on-table", name: "Sur — contrastes", hotspot: { left: "10%", top: "56%", width: "29%", height: "19%" }, highlightColor: "151, 79, 54",
    questions: [
      q("Le livre touche directement le plateau : il est ___ table.", "sur la", ["sur la", "sous la", "dans la", "au-dessus de la"], "Le livre touche directement le plateau : il est sur la table.", "Avec contact sur la surface : sur la table."),
      q("Le chat est caché entre les quatre pieds : il dort ___ table.", "sous la", ["sous la", "sur la", "dans la", "au-dessus de la"], "Le chat est caché entre les quatre pieds : il dort sous la table.", "Le chat est plus bas que la table : sous la table."),
      q("Les chaussettes sont enfermées à l’intérieur : elles sont ___ tiroir.", "dans le", ["dans le", "sur le", "sous le", "au-dessus du"], "Les chaussettes sont enfermées à l’intérieur : elles sont dans le tiroir.", "Elles sont à l’intérieur du tiroir : dans le tiroir."),
      q("Le tableau est fixé au mur, plus haut sans contact : il est ___ meuble.", "au-dessus du", ["au-dessus du", "sur le", "sous le", "dans le"], "Le tableau est fixé au mur, plus haut sans contact : il est au-dessus du meuble.", "Sans contact, on utilise « au-dessus du »."),
      q("Les chaussures sont rangées à l’intérieur : elles sont ___ armoire.", "dans l’", ["dans l’", "sur l’", "sous l’", "au-dessus de l’"], "Les chaussures sont rangées à l’intérieur : elles sont dans l’armoire.", "Elles sont à l’intérieur de l’armoire."),
      q("La lampe pend du plafond sans toucher le plateau : elle est ___ table.", "au-dessus de la", ["au-dessus de la", "sur la", "sous la", "dans la"], "La lampe pend du plafond sans toucher le plateau : elle est au-dessus de la table.", "La lampe est plus haute sans contact."),
      q("Le crayon est enfermé à l’intérieur : il est ___ trousse.", "dans la", ["dans la", "sur la", "sous la", "au-dessus de la"], "Le crayon est enfermé à l’intérieur : il est dans la trousse.", "Le crayon est à l’intérieur de la trousse."),
      q("Le manteau touche les couvertures : il est ___ lit.", "sur le", ["sur le", "sous le", "dans le", "au-dessus du"], "Le manteau touche les couvertures : il est sur le lit.", "Le manteau repose directement sur le lit."),
      q("La boîte est plus basse que la planche : elle est ___ étagère.", "sous l’", ["sous l’", "sur l’", "dans l’", "au-dessus de l’"], "La boîte est plus basse que la planche : elle est sous l’étagère.", "La boîte se trouve plus bas : sous l’étagère."),
      q("Le miroir est fixé plus haut sans toucher la commode : il est ___ commode.", "au-dessus de la", ["au-dessus de la", "sur la", "sous la", "dans la"], "Le miroir est fixé plus haut sans toucher la commode : il est au-dessus de la commode.", "Le miroir est plus haut, sans contact."),
    ],
  },
  {
    id: "in-front", name: "Devant", hotspot: { left: "42%", top: "49%", width: "16%", height: "20%" }, highlightColor: "157, 116, 54",
    questions: [
      q("Le paillasson est placé avant l’entrée : il est ___ porte.", "devant la", ["devant la", "derrière la", "sur la", "sous la"], "Le paillasson est placé avant l’entrée : il est devant la porte.", "Il se trouve du côté de l’entrée : devant la porte."),
      q("La chaise cache une partie de la table à notre regard : elle est ___ table.", "devant la", ["devant la", "derrière la", "sur la", "sous la"], "La chaise cache une partie de la table à notre regard : elle est devant la table.", "La chaise est entre nous et la table."),
      q("Les élèves attendent dehors, juste avant l’entrée : ils sont ___ école.", "devant l’", ["devant l’", "derrière l’", "sur l’", "dans l’"], "Les élèves attendent dehors, juste avant l’entrée : ils sont devant l’école.", "Ils attendent à l’extérieur, face à l’entrée."),
      q("La voiture bloque l’entrée : elle est garée ___ garage.", "devant le", ["devant le", "derrière le", "sur le", "dans le"], "La voiture bloque l’entrée : elle est garée devant le garage.", "Elle est placée avant l’entrée du garage."),
      q("La fenêtre est dans son dos : Paul se tient ___ fenêtre.", "devant la", ["devant la", "derrière la", "sur la", "sous la"], "La fenêtre est dans son dos : Paul se tient devant la fenêtre.", "Paul est placé devant la fenêtre."),
      q("Le présentoir cache les livres du bas : il est ___ étagères.", "devant les", ["devant les", "derrière les", "sur les", "sous les"], "Le présentoir cache les livres du bas : il est devant les étagères.", "Le présentoir est au premier plan."),
      q("La statue accueille les visiteurs avant l’entrée : elle est ___ musée.", "devant le", ["devant le", "derrière le", "sur le", "dans le"], "La statue accueille les visiteurs avant l’entrée : elle est devant le musée.", "La statue se trouve avant l’entrée du musée."),
      q("Le chat est entre nous et le fauteuil : il est ___ fauteuil.", "devant le", ["devant le", "derrière le", "sur le", "sous le"], "Le chat est entre nous et le fauteuil : il est devant le fauteuil.", "Le chat se trouve au premier plan."),
      q("Le microphone est placé face à la chanteuse : il est ___ chanteuse.", "devant la", ["devant la", "derrière la", "sur la", "sous la"], "Le microphone est placé face à la chanteuse : il est devant la chanteuse.", "Le microphone se trouve face à elle."),
      q("Le bus s’arrête avant l’entrée principale : il est ___ gare.", "devant la", ["devant la", "derrière la", "sur la", "dans la"], "Le bus s’arrête avant l’entrée principale : il est devant la gare.", "Le bus se trouve face à l’entrée de la gare."),
    ],
  },
  {
    id: "between-furniture", name: "Entre", hotspot: { left: "51%", top: "70%", width: "25%", height: "20%" }, highlightColor: "82, 101, 113",
    questions: [
      q("La table est à gauche et le fauteuil à droite : la chaise est ___ table et le fauteuil.", "entre la", ["entre la", "à côté de la", "derrière la", "sur la"], "La table est à gauche et le fauteuil à droite : la chaise est entre la table et le fauteuil.", "Deux meubles entourent la chaise : entre les deux."),
      q("La porte est à gauche et l’armoire à droite : le panier est ___ porte et l’armoire.", "entre la", ["entre la", "à côté de la", "derrière la", "devant la"], "La porte est à gauche et l’armoire à droite : le panier est entre la porte et l’armoire.", "Le panier a un élément de chaque côté."),
      q("Une chaise est de chaque côté : Paul est assis ___ deux chaises.", "entre les", ["entre les", "à côté des", "derrière les", "devant les"], "Une chaise est de chaque côté : Paul est assis entre les deux chaises.", "Paul est au milieu de deux chaises."),
      q("Paul est à gauche et Marie à droite : Luc est ___ Paul et Marie.", "entre", ["entre", "derrière", "devant", "sur"], "Paul est à gauche et Marie à droite : Luc est entre Paul et Marie.", "Luc se trouve au milieu des deux personnes."),
      q("Le canapé est à gauche et la fenêtre à droite : la lampe est ___ canapé et la fenêtre.", "entre le", ["entre le", "à côté du", "derrière le", "devant le"], "Le canapé est à gauche et la fenêtre à droite : la lampe est entre le canapé et la fenêtre.", "La lampe a un élément de chaque côté."),
      q("Un dictionnaire est à gauche et un roman à droite : le cahier est ___ deux livres.", "entre les", ["entre les", "à côté des", "derrière les", "sur les"], "Un dictionnaire est à gauche et un roman à droite : le cahier est entre les deux livres.", "Le cahier se trouve au milieu des livres."),
      q("Une maison est de chaque côté : le jardin est ___ deux maisons.", "entre les", ["entre les", "à côté des", "derrière les", "devant les"], "Une maison est de chaque côté : le jardin est entre les deux maisons.", "Le jardin occupe l’espace au milieu."),
      q("La lampe est à gauche et le fauteuil à droite : la table est ___ lampe et le fauteuil.", "entre la", ["entre la", "à côté de la", "derrière la", "sur la"], "La lampe est à gauche et le fauteuil à droite : la table est entre la lampe et le fauteuil.", "La table est au milieu de deux éléments."),
      q("La gare est à gauche et l’école à droite : le parc est ___ gare et l’école.", "entre la", ["entre la", "à côté de la", "derrière la", "devant la"], "La gare est à gauche et l’école à droite : le parc est entre la gare et l’école.", "Le parc se trouve au milieu des deux lieux."),
      q("La tasse est à gauche et l’assiette à droite : la cuillère est ___ tasse et l’assiette.", "entre la", ["entre la", "à côté de la", "derrière la", "sur la"], "La tasse est à gauche et l’assiette à droite : la cuillère est entre la tasse et l’assiette.", "La cuillère a un objet de chaque côté."),
    ],
  },
  {
    id: "under-table", name: "Sous — révision", hotspot: { left: "22%", top: "75%", width: "17%", height: "17%" }, highlightColor: "145, 69, 51",
    questions: [
      q("Le chat dort entre les pieds, plus bas que le plateau : il est ___ table.", "sous la", ["sous la", "sur la", "devant la", "derrière la"], "Le chat dort entre les pieds, plus bas que le plateau : il est sous la table.", "Le chat est plus bas que la table."),
      q("Les pantoufles sont cachées sous le siège : elles sont ___ fauteuil.", "sous le", ["sous le", "sur le", "devant le", "derrière le"], "Les pantoufles sont cachées sous le siège : elles sont sous le fauteuil.", "Elles se trouvent plus bas que le fauteuil."),
      q("La boîte est au sol, plus bas que la planche : elle est ___ étagère.", "sous l’", ["sous l’", "sur l’", "devant l’", "derrière l’"], "La boîte est au sol, plus bas que la planche : elle est sous l’étagère.", "La boîte se trouve sous l’étagère."),
      q("La lettre est recouverte par la pile : elle est ___ livres.", "sous les", ["sous les", "sur les", "devant les", "derrière les"], "La lettre est recouverte par la pile : elle est sous les livres.", "Les livres recouvrent la lettre."),
      q("Le radiateur est fixé plus bas que le rebord : il est ___ fenêtre.", "sous la", ["sous la", "sur la", "devant la", "derrière la"], "Le radiateur est fixé plus bas que le rebord : il est sous la fenêtre.", "Le radiateur se trouve plus bas que la fenêtre."),
      q("Le sac est posé au sol sous le plateau : il est ___ bureau.", "sous le", ["sous le", "sur le", "devant le", "derrière le"], "Le sac est posé au sol sous le plateau : il est sous le bureau.", "Le sac se trouve sous le bureau."),
      q("Le rideau cache complètement le vase : il est ___ rideau.", "derrière le", ["derrière le", "devant le", "sur le", "sous le"], "Le rideau cache complètement le vase : il est derrière le rideau.", "Le rideau se trouve au premier plan."),
      q("Les clés sont enfermées à l’intérieur : elles sont ___ tiroir.", "dans le", ["dans le", "sur le", "sous le", "derrière le"], "Les clés sont enfermées à l’intérieur : elles sont dans le tiroir.", "Les clés sont à l’intérieur du tiroir."),
      q("La table est à gauche et la porte à droite : la chaise est ___ table et la porte.", "entre la", ["entre la", "à côté de la", "derrière la", "sur la"], "La table est à gauche et la porte à droite : la chaise est entre la table et la porte.", "La chaise est au milieu de deux éléments."),
      q("L’horloge est plus haute sans toucher le canapé : elle est ___ canapé.", "au-dessus du", ["au-dessus du", "sur le", "sous le", "devant le"], "L’horloge est plus haute sans toucher le canapé : elle est au-dessus du canapé.", "Sans contact, on utilise « au-dessus du »."),
    ],
  },
] as const;

export const positionLessonById = Object.fromEntries(positionLessons.map((lesson) => [lesson.id, lesson])) as Record<string, PositionLesson>;

function completedDisplay(question: PositionQuestion): string {
  return question.answer.endsWith("’")
    ? question.display.replace("___ ", question.answer)
    : question.display.replace("___", question.answer);
}

function validatePositionLessons(): void {
  if (positionLessons.length !== 8) throw new Error("Chapter 4 must contain exactly eight lessons.");
  if (new Set(positionLessons.map((lesson) => lesson.id)).size !== positionLessons.length) throw new Error("Chapter 4 lesson IDs must be unique.");
  let total = 0;
  const answers = new Set<string>();
  for (const lesson of positionLessons) {
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
  if (total !== 80) throw new Error("Chapter 4 must contain exactly eighty questions.");
  const requiredAnswers = ["sur la", "sous la", "devant le", "derrière la", "au-dessus du", "à côté de la", "entre la", "dans le"];
  for (const answer of requiredAnswers) if (!answers.has(answer)) throw new Error(`Chapter 4 is missing the target form: ${answer}`);
}

validatePositionLessons();
