function verificar(){
    
    var data = new Date()
    var ano = data.getFullYear() 
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value > ano)){
        alert(`[ERRO] Verifique os dados e tente novamente!`)
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex[0].checked){
            genero = 'homem'
            if(idade < 13){
                //cria
                img.setAttribute('src','homemcria.png')
            }else if(idade < 21){
                //adol
                img.setAttribute('src','homemadol.png')
            }else if(idade < 55){
                //adulto
                img.setAttribute('src','homemadulto.png')
            }else{
                //idoso
                img.setAttribute('src','homemidoso.png')
            }

        }else if (fsex[1].checked){
            genero = 'mulher'
            if(idade < 7){
                //cria
                img.setAttribute('src','mulhercria.png')
            }else if(idade < 21){
                //adol
                img.setAttribute('src','mulheradol.png')
            }else if(idade < 55){
                //adulto
                img.setAttribute('src','mulheradulta.png')
            }else{
                //idoso
                img.setAttribute('src','mulheridosa.png')
            }
        }
        
        img.style.padding = '15px'  
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}

    
  
        