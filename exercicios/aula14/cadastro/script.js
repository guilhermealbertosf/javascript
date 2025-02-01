function finalizar(){

    var nome = String(document.getElementById('txtn').value)
    var nas = document.getElementById('nas')
    var cpf = document.getElementById('txtcpf')
    var email = String(document.getElementById('email').value)

    if(nome.length <= 0 || Number(nas.value.length) == 0 || Number(cpf.value.length) == 0 || email.length <= 0 || cpf.value <= 9999999999){
        alert("[ERRO] preencha todas as informações do formulário!")
    }else{
        var ano = new Date()
        var ano = ano.getFullYear()
        var res = document.getElementById('res')
        var nas = Number(nas.value)
        var cpf = Number(cpf.value)
        var idade = ano - nas
        var mas = document.getElementById('mas')
        var fem = document.getElementById('fem')
        var gen = ''
        if(mas.checked){
            gen = 'Homem'
        }else{
            gen = 'Mulher'
        }

        alert('Informações Armazenadas!')
        res.innerHTML = `Nome: ${nome}, Nascimento: ${nas}, Idade: ${idade}, Gênero: ${gen}, CPF: ${cpf}, E-mail: ${email}`
        
    }

   

}