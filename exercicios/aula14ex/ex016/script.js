function contar(){
    var res = document.getElementById('res')
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('pas')
    
    if( Number(ini.value.length) == 0 || Number(fim.value.length) == 0 || Number(pas.value) < 0){
        res.innerText = `Impossível contar! `
        res.innerText += ' Preencha os valores corretamente!'
    }else{
        var pas = Number(pas.value)
        while(pas == 0 ){
            alert('Passo inválido! Considerando PASSO 1')
            pas = 1}

        var ini = Number(ini.value)
        var fim = Number(fim.value)
        res.innerHTML = 'Contando: <br>'

        if(ini > fim){ //contagem decrescente
            for( ini ; ini >= fim ; ini -= pas){
                res.innerText += ` ${ini} \u{1F449} `   
            }
        }
        
        else if(ini < fim){ //contagem crescente
            for( ini ; ini <= fim ; ini += pas){
                res.innerText += ` ${ini} \u{1F449} ` 
            }      
        }res.innerHTML += `\u{1f3c1}`
    }
}