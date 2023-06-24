console.log('Está dando certo')
/*
function operations(num1:number,num2:number): void{
    let sum: number =num1+num2
    let diference: number = num1 - num2
    let multiplication: number = num1*num2
    let division: number = num1/num2

    console.log(`Números recebidos: ${num1} \n ${num2} 
    \nsoma: ${sum} 
    \nsubtração: ${diference} 
    \nmultiplicação: ${multiplication} 
    \ndivisão: ${division}`)
}
*/

function operations(num1:number,num2:number): string{
    let sum: number =num1+num2
    let diference: number = num1 - num2
    let multiplication: number = num1*num2
    let division: number = num1/num2

     return `Números recebidos: ${num1} \n ${num2} 
    \nsoma: ${sum} 
    \nsubtração: ${diference} 
    \nmultiplicação: ${multiplication} 
    \ndivisão: ${division}`
}

console.log(operations(10,5))