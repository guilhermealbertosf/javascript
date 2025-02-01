function registrar(){
    let txtp = document.getElementById("txtp")
    let txtd = document.getElementById('txtd')
    let txti = document.getElementById('img')
    
    if(txtp.value.length == 0 || txtd.value.length == 0 || txti.value.length == 0){
        alert(`Preencha os cabeçalhos!`)
    }else{
        let res = document.getElementById('res')
        let p = String(txtp.value)
        let d = String(txtd.value)
        let i = `imagens/` + String(txti.value) + `.jpeg`
        let img = document.createElement('img')
        img.setAttribute('src', `${i}`)
        
        res.innerHTML+=`<hr> <br> Planta: ${p} <br> `
        res.appendChild(img)
        res.innerHTML+=`<br> Descrição: ${d}`
        alert(`Espécie adicionada com sucesso!`)
        txti.focus()
        txti.value=''
    }
}
