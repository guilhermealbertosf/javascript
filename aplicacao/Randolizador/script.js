function testar(){
    let vet = [document.getElementById('num')  ,  document.getElementById('res')] 
    
    if(vet[0].value.length == 0 ){
        alert(`[ERRO] preencha o valor!`)
    }else{
        var ran = Math.random()*vet[0].value 
        vet[1].innerHTML = `${vet[0].value} <br>` + `Valor sorteado ${parseInt(ran)}`
    }
}
