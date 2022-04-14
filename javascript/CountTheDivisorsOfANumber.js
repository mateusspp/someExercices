function getDivisorsCnt(n){ 
    var factors = 0;
    let quotient = 0;
    for(var i = 1; i <= n; i++){
      quotient = n/i;
      if(quotient === Math.floor(quotient)){
        factors +=1
      }
    }
    return factors;
}