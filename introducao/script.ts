// DECLARAÇÃO DE VARIÁVEIS

const company: string = 'Senac';
let age: number = 18;
let isCorrect: boolean = true;


// DECLARAÇÃO DE ARRAY

const array: Array<number> = [1,2,3] // ou
const array2: number[]= [-5,-6,-7]


//DECLARAÇÃO DE OBJETO

const person:{name:string, age:number} = {
    name: 'Senac',
    age: 18
}


// DECLARAÇÃO TIPO 'ANY'

 let result: any
 result = 'result'
 result = 2
 result = false


// DECLARAÇÃO DE FUNÇÃO TIPADA

function sum(n1:number, n2:number):number{
    return n1 + n2
}

function resultSum(n1:number, n2:number): string{
    let result = n1+ n2
    return `O resultado é ${result}`
}


// DECLARAÇÃO DE FUNÇÃO VOID

function sayHello(name?:string): void{
    console.log('Hello, ', name || 'World')
}
