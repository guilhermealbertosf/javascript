function gerar(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('tab')
    if(num.value.length == 0){
        alert("Preencha o campo 'Número'")
    }else{
        let n = Number(num.value)
        tab.innerHTML=``
        for( c=1 ; c<=10 ; c++){
            let elemento = document.createElement('option')
            elemento.text =`${c} x ${n} = ${c*n}`
            tab.appendChild(elemento)
        }
    }
}