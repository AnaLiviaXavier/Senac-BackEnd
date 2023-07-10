"use strict";
function fatorial(word) {
    let numeroLetras = word.length;
    if (numeroLetras == 1 || numeroLetras == 0) {
        return 1;
    }
    else {
        let result = numeroLetras;
        while (numeroLetras > 1) {
            numeroLetras - 1;
            result = result * numeroLetras;
        }
        return result;
    }
}
console.log(fatorial('tri'));
//# sourceMappingURL=exercicio16.js.map