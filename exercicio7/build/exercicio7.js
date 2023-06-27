"use strict";
console.log('ESTÁ FUNCIONANDO');
function nameAndDate(name, date) {
    let dateSplit = date.split('/');
    let day = dateSplit.shift();
    let month = dateSplit.shift();
    let year = dateSplit.shift();
    return `Olá, meu nome é ${name}, nasci no dia ${day} do mês ${month} de ${year}.`;
}
console.log(nameAndDate("Fulano", '23/09/1996'));
//# sourceMappingURL=exercicio7.js.map