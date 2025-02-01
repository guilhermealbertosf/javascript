function parimp(n){
    if(n % 2 ==0){
        return 'O valor é Par'
    }else{
        return 'O valor é Ímpar'
    }
}
let n1 = parimp(8)
let n2 = parimp(9) 
console.log(`n1: ${n1}, n2 ${n2}`)