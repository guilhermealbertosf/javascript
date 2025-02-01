function carregar(){
    
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    

    msg.innerHTML = `Agora são ${hora} hora(s).`
    if(hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#f7ce99'
    
    }else if(hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#ed7716d5'

    }else{
        img.src = 'noite.png'
        document.body.style.background = '#0839bef1'
    }
}


