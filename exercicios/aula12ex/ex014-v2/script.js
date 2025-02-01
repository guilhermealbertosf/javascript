function carregar(){
    var t = new Date()
    var hora = 1
    var img = document.getElementById('foto')
    var msg = document.getElementById('msg')
    msg.innerText = `Agora são ${hora} hora(s)`
    if(hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#f47f11e4'
    }
    else if(hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#015091bf'

    }else{
        img.src = 'noite.png'
        document.body.style.background = '#071a94e0'
    }
}

