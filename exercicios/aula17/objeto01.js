let amigo = {nome:'josé',
sexo: 'M',
peso: 85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p //no lugar do 'this' poderia ser 'amigo'.
}}
amigo.engordar(1.9)
console.log(`${amigo.nome} pesa ${amigo.peso.toFixed(1)}Kg`)