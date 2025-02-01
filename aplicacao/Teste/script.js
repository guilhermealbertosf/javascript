function testar(){

    let obj = { 
        ni: Number(document.getElementById(`numinp`).value) ,
        niv: document.getElementById(`numinp`) ,
        na : 2
    }
    let info = document.getElementById(`info`)
    //

    if(Number(obj.niv.value.length) == 0 ){
        alert(`[ERRO] Insira um valor válido!`) 
    }else{
        res.innerHTML = `Resultado: <strong> ${obj.ni + obj.na} <strong>`
        info.innerHTML = `Tipo: <strong>${typeof obj.ni}<strong>`
    }
}

function limpar(){res.innerHTML = `Resultado:` 
    info.innerHTML = `Tipo:`}