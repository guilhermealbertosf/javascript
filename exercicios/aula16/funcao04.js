function fatorial(n){
    let fat = 1
    for(c = n ; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(6))
// 5! = 5 x 4 x 3 x 2 x 1 