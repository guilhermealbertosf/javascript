function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.getElementById('res')
    var nas = document.getElementById('nas')
    
    if(Number(nas.value) > ano || Number(nas.value.length) == 0){
        alert('[ERRO] Por favor, preencha os dados corretamente!')
    }else{
        
        var idade = ano - Number(nas.value)
        var mas = document.getElementById('mas')
        var fem = document.getElementById('fem')

        var img = document.createElement('img')
        img.setAttribute('id','foto')
    
        gen = ``

        if(mas.checked){
            //masculino
            //1968
            
            gen = 'Homem'
            document.body.style.background = '#2d86f4'
            if(idade < 10){
                img.setAttribute('src','homemcria.png')
            }else if(idade < 18){
                img.setAttribute('src','homemadol.png')
            }else if(idade < 60){
                img.setAttribute('src','homemadulto.png')
            }else{
                img.setAttribute('src','homemidoso.png')
            }
            
        }
        else if(fem.checked){
            //feminino
            //1975
            gen = 'Mulher'
            document.body.style.background = '#d66ce4'
            if(idade < 10){
                img.setAttribute('src','mulhercria.png')
            }else if(idade < 18){
                img.setAttribute('src','mulheradol.png')
            }else if(idade < 60){
                img.setAttribute('src','mulheradulta.png')
            }else{
                img.setAttribute('src','mulheridosa.png')
            }
            
        }
        
        res.innerText=`Você é ${gen}, e você tem ${idade} ano(s) `
        res.appendChild(img)
        res.style.textAlign = 'center'
        img.style.padding = '15px'
    }
}