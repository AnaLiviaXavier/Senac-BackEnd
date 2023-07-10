/*Escreva uma função que pergunta ao usuário a data de nascimento de uma pessoa 
(ex.: “24/04/1993”, e a data de emissão da sua carteira de identidade (ex.: “07/11/2015”). 
A função deve retornar um booleano que indica se a carteira precisa ser renovada ou não. 
A carteira precisa ser renovada segundo os seguintes critérios:

- Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos
 (se for exatamente 5 anos, deve ser renovada).
- Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 
10 anos (se for exatamente 10 anos, deve ser renovada).
- Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos*/

// data para brasil
//let date = new Date()
//console.log(date.toLocaleDateString('pt-BR'))

function validacao(dateBirth:string,dateIssue:string):boolean{
    let renovacao: boolean
    // ano idade
    let birth = new Date(dateBirth)
    let yearBirth = birth.getFullYear()

    // ano atual
    let today= new Date()
    let currenteYear = today.getFullYear()

    //ano emissao
    let issue= new Date(dateIssue)
    let yearIssue = issue.getFullYear()

    // diferenca ano atual e ano nascimento(idade)
    let age = currenteYear - yearBirth

    // diferenca ano atual e ano emissao
    let difIssue = currenteYear - yearIssue

    // condicoes
    if( age <=20 && difIssue>=5){
        renovacao = true
    }else if(age>20 && age <=50 && difIssue>=10){
        renovacao = true
    }else if(age>50 && difIssue>=15){
        renovacao = true
    }else {
        renovacao = false
    }

    return renovacao

}

console.log(validacao("04/24/1993","07/11/2015"))
