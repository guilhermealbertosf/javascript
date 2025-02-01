let vet = []
let s = 0
let q = 0
function adicionar(){
    res.innerHTML=""
    let num = document.getElementById('txtn')
    let tab = document.getElementById('tab')
    let n = Number(num.value)
    if(num.value.length == 0){
        alert(`Preencha o valor!`)
    }else if(Number(num.value) < 1 || Number(num.value) > 100){
        alert(`O valor ${num.value} não é válido, tente outro`)
    }else if(vet.indexOf(n) != -1 ){
        alert(`O número ${n} já foi inserido no sistema`)
    }else{
        vet.push(n)
        let elemento = document.createElement('option')
        elemento.text = `Valor ${n} adcionado`
        tab.appendChild(elemento)
        //atr
        s+=n
        q+=1  
    }
}
function finalizar(){
    let res = document.getElementById('res')
    if(vet.length == 0){
        res.innerHTML=`Para finalizar, Adicione algum valor!`
    }else{
        vet.sort(function(a,b){
            return a-b
        })
        res.innerHTML=`Ao todo, temos ${q} números cadastrados. <br> O maior valor informado foi ${vet[q-1]}. <br> O menor valor informado foi ${vet[0]}. <br> Somando todos os valores, temos ${s}. <br> A média dos valores digitados é ${s/q}.`
    }
    
    
}
