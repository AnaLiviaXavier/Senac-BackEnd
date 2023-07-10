// criar uma função que recebe o primeirio nome e o sobrenome 
// o sobrenome pode ser nulo
// retornar nome completo

    function completeName(name:string, surname:string | null): string{
        if( surname!= null){
            return `O nome é ${name} ${surname}`
        } else{
            return `O nome é ${name}`
        }
        
    }

    console.log(completeName("Fulano",null))
    console.log(completeName("Ciclano","da Silva"))