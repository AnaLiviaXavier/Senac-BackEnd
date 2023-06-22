function checkUpDateID(): boolean{
    const currentYear = Number(prompt('Digite o ano atual:'))
    const birthYear = Number(prompt('Digite o ano de nascimento:'))
    const issueYear = Number(prompt('Digite o ano de emissão:'))

    const age = currentYear - birthYear

    const time = currentYear - issueYear

    const cond1 = age<= 20 && time >=5
    const cond2 = age >20 && age <=50 && currentYear>=10
    const cond3 = age > 50 && time >=15

    return (cond1 || cond2 || cond3)
}