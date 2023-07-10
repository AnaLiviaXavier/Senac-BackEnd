console.log('ESTÁ FUNCIONANDO')
// Função que recebe string com nome e outra string com data ("23/03/2023")
//  retornar string no formato:
//  `Olá, me chamo ${nome}, nasci no dia ${dia} de ${mes} de ${ano}.`

    function nameAndDate(name:string, date:string): string{
        let dateSplit = date.split('/')
        let day = dateSplit.shift()
        let month = dateSplit.shift()
        let year = dateSplit.shift()

        return `Olá, meu nome é ${name}, nasci no dia ${day} do mês ${month} de ${year}.`
    }

console.log(nameAndDate("Fulano",'23/09/1996'))





