"use strict";
function validacao(dateBirth, dateIssue) {
    let renovacao;
    let birth = new Date(dateBirth);
    let yearBirth = birth.getFullYear();
    let today = new Date();
    let currenteYear = today.getFullYear();
    let issue = new Date(dateIssue);
    let yearIssue = issue.getFullYear();
    let age = currenteYear - yearBirth;
    let difIssue = currenteYear - yearIssue;
    if (age <= 20 && difIssue >= 5) {
        renovacao = true;
    }
    else if (age > 20 && age <= 50 && difIssue >= 10) {
        renovacao = true;
    }
    else if (age > 50 && difIssue >= 15) {
        renovacao = true;
    }
    else {
        renovacao = false;
    }
    return renovacao;
}
console.log(validacao("04/24/1993", "07/11/2015"));
//# sourceMappingURL=exercicio15.js.map