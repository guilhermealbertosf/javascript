var idade = 80
console.log(`Você tem ${idade} anos de idade`)
if(idade < 16){
    console.log(`Você não vota`)
}else  if(idade < 18 || idade > 65) {
        console.log(`Seu voto Opcional`)
}else {
    console.log(`Seu voto é obrigatório`)
}