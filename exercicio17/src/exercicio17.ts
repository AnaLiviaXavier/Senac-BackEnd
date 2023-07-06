console.log('esta funcionando')
function cpfValidation(cpf:string):boolean{

    console.log(cpf, typeof(cpf))

    if(typeof cpf !== 'string'){
        return false
    }

    // um geito
    //let cpfReplace: any = cpf.replace('-','.').replace(/\./g, "")
   
    //outro geito
    let cpfReplace = cpf.replace(/[\s.-]*/igm, '')
    console.log(cpfReplace)

    let cpfSplit = cpfReplace.split('')
    console.log(cpfSplit)

    if(cpf || cpf.length !== 11 ||
        cpfReplace === "00000000000" ||
        cpfReplace === "11111111111" ||
        cpfReplace === "22222222222" ||
        cpfReplace === "33333333333" ||
        cpfReplace === "44444444444" ||
        cpfReplace === "55555555555" ||
        cpfReplace === "66666666666" ||
        cpfReplace === "77777777777" ||
        cpfReplace === "88888888888" ||
        cpfReplace === "99999999999"
        )
        {
        return false
    }

     
     let total = 0
     let restForFirstDv:number
     for(let i:number =1;i<=9;i++){
         total = total + cpfSplit.substring(i -1,i)*(11-i)
         
}
restForFirstDv= (total % 11)
console.log(total)

    return false
}





// chama funcao
let result = cpfValidation('145.382.206-20')

if(!result){
    console.log('Cpf inválido')
}