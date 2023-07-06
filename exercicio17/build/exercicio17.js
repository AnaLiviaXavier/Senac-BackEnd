"use strict";
console.log('esta funcionando');
function cpfValidation(cpf) {
    console.log(cpf, typeof (cpf));
    if (typeof cpf !== 'string') {
        return false;
    }
    let cpfReplace = cpf.replace(/[\s.-]*/igm, '');
    console.log(cpfReplace);
    let cpfSplit = cpfReplace.split('');
    console.log(cpfSplit);
    if (cpf || cpf.length !== 11 ||
        cpfReplace === "00000000000" ||
        cpfReplace === "11111111111" ||
        cpfReplace === "22222222222" ||
        cpfReplace === "33333333333" ||
        cpfReplace === "44444444444" ||
        cpfReplace === "55555555555" ||
        cpfReplace === "66666666666" ||
        cpfReplace === "77777777777" ||
        cpfReplace === "88888888888" ||
        cpfReplace === "99999999999") {
        return false;
    }
    let total = 0;
    let restForFirstDv;
    for (let i = 1; i <= 9; i++) {
        total = total + parseInt(cpfReplace.substring(i - 1, i)) * (11 - i);
    }
    restForFirstDv = (total % 11);
    console.log(total);
    return false;
}
let result = cpfValidation('145.382.206-20');
if (!result) {
    console.log('Cpf inválido');
}
//# sourceMappingURL=exercicio17.js.map