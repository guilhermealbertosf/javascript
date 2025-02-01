function contar(){
    //variáveis
    let res = document.getElementById('res')
    let ini = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let pas = document.getElementById('pas')
    //validações
    if(Number(ini.value.length)== 0 || Number(fim.value.length)== 0 || Number(pas.value.length) == 0){
        alert('Preencha os dados!')
    }else{
        if(pas.value == 0){
            alert('passo  inválido! Considerando passo igual a 1')
            pas.value = 1
        }
        res.innerHTML='Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        //passo negativo
        if(i > f){
            for(i; i >= f; i--){
                res.innerHTML+=`${i} \u{1F449}`
            }
        }
        //laço positivo
        for(c = i; c <= f; c+=p){
            res.innerHTML+=`${c} \u{1F449}`
        }res.innerHTML+=`\u{1F64F}`
    }
}
   
    
