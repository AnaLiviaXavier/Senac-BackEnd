"use strict";
var GENERO;
(function (GENERO) {
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["COMEDIA"] = "comedia";
    GENERO["ROMANCE"] = "romance";
    GENERO["TERROR"] = "terror";
})(GENERO || (GENERO = {}));
function film(name, year, gen, point) {
    let thisFilm = {
        name: name,
        year: year,
        gen: gen,
        point: point
    };
    return thisFilm;
}
console.log(film('Fuga', 1999, GENERO.DRAMA, 5));
//# sourceMappingURL=exercicio10.js.map