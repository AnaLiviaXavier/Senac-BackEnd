/*O seguinte `array` traz as pessoas colaboradoras de uma empresa, com seus salários, setores e se 
trabalham presencialmente ou por home office:

[
	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
]

Considerando o `array`acima, crie um `ENUM` para os setores e um `type` para as pessoas colaboradoras. 
Em seguida, crie uma função que receba este `array`como parâmetro 
e retorne apenas as pessoas do setor de marketing que trabalham presencialmente. */


enum setores{
    MARKETING ='marketing',
    VENDAS ='vendas',
    FINANCEIRO= 'financeiro'
}

type colaboradores = {
    nome: string,
	salario: number,
	setor:setores,
	presencial:boolean
    
}


let arrayColaboradores: Array<colaboradores>=[
	{ nome: "Marcos", salario: 2500, setor: setores.MARKETING, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: setores.VENDAS, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: setores.VENDAS, presencial: true},
	{ nome: "João" ,salario: 2800, setor: setores.MARKETING, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: setores.VENDAS, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: setores.VENDAS, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: setores.MARKETING, presencial: true }
]

function retornaColab(arrei:Array<colaboradores>):void{
	// let selecaoColaboradores: Array<colaboradores>
	// for(let i=0;i<7;i++){
	// 	if(arrei[i].setor == 'marketing' && arrei[i].presencial == true)
	// 	selecaoColaboradores = selecaoColaboradores.push(arrei[i])
	// }
	// console.log(selecaoColaboradores)

	
}

retornaColab(arrayColaboradores)

