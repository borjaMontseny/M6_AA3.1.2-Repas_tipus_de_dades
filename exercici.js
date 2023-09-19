// borjaMontseny DAW2 M06 2023

var equips = ["Barça", 33, { nom: "Español", entrenador: "Luis García" }, null, "Madrid", { nom: "Girona", socis: 2836 }];

document.write("<p><b>" + equips + "</b></p>");
document.write("<hr>");

document.write("<p>Quin tipus d'objecte és la variable equips? ")
document.write("<b>" + typeof equips + "</b></p>");
document.write("<hr>");

document.write("<p>Quin tipus de dades conté? ")
document.write("<b>");
equips.forEach(element => {
    document.write(typeof element + " ");
});
document.write("</p></b>");
document.write("<hr>");

document.write("<p>Escriu el codi necessari per mostrar per pantalla els equips: Barça, Español, Madrid, Girona</p>");
document.write("<p><b>" + equips[0] + " " + equips[2].nom + " " + equips[4] + " " + equips[5].nom + "</b></p>");
document.write("<hr>");

document.write("<p>Escriu el codi necessari per mostrar l'entrenador de l'Español ");
document.write("<b>" + equips[2].entrenador + "</b></p>");
document.write("<hr>");

document.write("<p>Escriu el codi necessari per mostrar el número de socis del Girona ");
document.write("<b>" + equips[5].socis + "</b></p>");
document.write("<hr>");