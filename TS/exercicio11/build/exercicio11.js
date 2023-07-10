"use strict";
var setores;
(function (setores) {
    setores["MARKETING"] = "marketing";
    setores["VENDAS"] = "vendas";
    setores["FINANCEIRO"] = "financeiro";
})(setores || (setores = {}));
let arrayColaboradores = [
    { nome: "Marcos", salario: 2500, setor: setores.MARKETING, presencial: true },
    { nome: "Maria", salario: 1500, setor: setores.VENDAS, presencial: false },
    { nome: "Salete", salario: 2200, setor: setores.VENDAS, presencial: true },
    { nome: "João", salario: 2800, setor: setores.MARKETING, presencial: false },
    { nome: "Josué", salario: 5500, setor: setores.VENDAS, presencial: true },
    { nome: "Natalia", salario: 4700, setor: setores.VENDAS, presencial: true },
    { nome: "Paola", salario: 3500, setor: setores.MARKETING, presencial: true }
];
function retornaColab(arrei) {
    let selecaoColaboradores;
    for (let i = 0; i < 7; i++) {
        if (arrei[i].setor == 'marketing' && arrei[i].presencial == false)
            return arrei[i];
    }
}
console.log(retornaColab(arrayColaboradores));
//# sourceMappingURL=exercicio11.js.map