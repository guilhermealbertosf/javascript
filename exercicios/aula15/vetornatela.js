let num = [9,7,6,8,5]



/*for( pos = 0 ; pos < num.length ; pos++){
    console.log(` A posição ${pos} tem o valor ${num[pos]}`)
}console.log(`FIM`)
*/

for(let pos in num){
    console.log(`Na posição ${pos} está o valor ${num[pos]} `)
}