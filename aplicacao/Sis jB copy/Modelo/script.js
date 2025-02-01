function calcular(){
    let obj = {c : document.getElementById('c'), i : document.getElementById('i'), t : document.getElementById('t'), j : '', m : ''}
    
    //VALIDAÇÃO
    if(obj.c.value.length == 0 || obj.i.value.length == 0 || obj.t.value.length == 0){
        alert(`Preencha todos os valores!`)

    }else{
        limpar()
        let rads = document.getElementById('rads')
        int = z(Number(obj.t.value))

        
        if(int == true){

            //JUROS SIMPLES
            if(rads.checked){
                    // M = C + J .: J = (C * I * T) / 100 \u{1F3DB}
                    obj.j = Number(c.value * i.value * t.value) / 100
                    obj.m = Number(obj.c.value) + obj.j
                    res.innerHTML += `Valores: <br>
                    C = ${c.value} \u{1F4B5}<br>
                    I = ${i.value} \u{1F4C8}<br>
                    T = ${t.value} \u{1F9ED}<br>
                    J = ${obj.j} 🧾<br>
                    M = ${obj.m} \u{1F4B0}`
                        
            //JUROS COMPOSTO
            }else{
                //M = C * (1 + (I/100)) ** t
                obj.m = Number(c.value) * (1 + (Number(i.value)/100))**Number(obj.t.value)
                obj.j = obj.m - Number(c.value) 

                res.innerHTML += `
                Valores: <br>
                C = ${ c.value} \u{1F4B5}<br>
                I = ${ i.value} \u{1F4C8}<br>
                T = ${ t.value} ⌚<br>
                J = ${ Number(obj.j).toFixed(3)} \u{1F91E}<br>
                M = ${ Number(obj.m).toFixed(3)} \u{1F4B0}`
            }
        } 
    }
}
function limpar(){
    res.innerHTML = ``
}
function z(v=0){
    if(v > 0){
        return true
    }else if(v == 0){
        return alert(`Insira um tempo maior que ZERO!`)
    }else{
        return alert(`ATENÇÃO! Não existe tempo negativo!`)
    }
}