

// EXERCICIO 1
function checkTriangle(a:number,b:number,c:number): string{
    if(a !==b && b!==c){
        return 'Escaleno'
    }else if( a === b && b=== c){
        return 'Equilatero'
    }else{
        return 'Isóceles'
    }
}


// EXERCICIO 2
function printThreeColors(): void{
    const cor1 = prompt('Digite uma cor:')
    const cor2 = prompt('Digite outra cor:')
    const cor3 = prompt('Digite outra cor:')
    console.log('Três cores: '+ cor1 + ' - '+ cor2+ ' - '+ cor3)
}

// EXERCICIO 3

function checaAnoBissexto(ano:number): boolean{
    const cond1 = ano % 400 ===0
    const cond2 = (ano % 4 === 0) && (ano % 100 !==0)
    return cond1 || cond2
}