let num = []
let c = 0
let w = 0
let soma = 0
var res = document.getElementById('res')

function adc1(){ // 1º parte: VALIDAÇÃO
    res.innerHTML = ``
    let numinp = document.getElementById('numinp')
    numinp.focus()
    if(numinp.value < 1 || numinp.value > 100){
        alert(`VALOR INVÁLIDO ou NULO, por favor, insira um número entre 1 e 100 `)
        numinp.value = ``
    }
    else{
        if(num.indexOf(Number(numinp.value)) == -1){
            soma += Number(numinp.value)
            return adc2()
        }else{
            alert(`[ERRO] o valor já foi inserido!`)
            numinp.value = ``
        }
    }
}

function adc2(){ //2º parte: EXECUÇÃO
    if (c > 0) { w ++ }  
    num.push(Number(document.getElementById('numinp').value))
    let tab = document.getElementById('tab')
    let elem = document.createElement('option')
    elem.value = `elem${c}`
    elem.text = `Valor ${num[c]} adcionado.`
    tab.appendChild(elem)
    c++    
    //res.innerHTML = `Vetor : ${num} <br>`
    numinp.value = ``
}

function fim(){
    res.innerHTML=''
    if(numinp.length == 0){
        alert(`Adcione valores antes de finalizar!`)
    }else{
        let media = soma / num.length

        num.sort(function(a,b){
            return a-b;
        })
        //res.innerHTML = `Vetor : ${num} <br>`
        res.innerHTML += `<p>Ao todo, temos ${num.length} número(s) Cadastrados. <br> </p>`
        res.innerHTML += `<p>O maior valor informado foi ${num[w]}. <br></p>`
        res.innerHTML += `<p>O menor valor informado foi ${num[0]}. <br></p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.<br></p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}.</p>`
        
    }     
}

/*
let maior = num[0]
let menor = num[0]
for(let pos in num){
    if(num[pos] > maior)
        maior = num[pos]
    if(num[pos] < menor)
        menor = num[pos]
}
*/