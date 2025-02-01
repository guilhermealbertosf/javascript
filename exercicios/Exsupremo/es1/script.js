function tempo(){
    const res = document.getElementById('res')
    const t = new Date()
    const hora = 12
    const img = document.getElementById('img')
    //condições

    if(hora < 12){
        document.body.style.background = 'yellow'
        img.setAttribute('src','js-img.png')

    }else if(hora < 18){
        document.body.style.background = 'orange'
        img.setAttribute('src','im')
        img.setAttribute('alt','imagem da tarde')
    }else{
        document.body.style.background = 'blue'
        document.body.style.color= 'white'
    }

    res.innerHTML=`Agora são ${hora} horas`
}