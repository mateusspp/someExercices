function procArrInt(listNum) {
    const totalList = listNum.length;
    
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
  
    let teste = listNum.map(n => getDivisorsCnt(n));
    
    //let maior = `${Math.max(...teste)}`;
    let maior = Math.max(...teste);
    let conversao = Number(maior);
    
    let totalPrimos = 0;
    let primos = teste.map(n => {return n === 2? totalPrimos += 1 : 0})
    
    let besta = [];
    // let menorMaior = besta.sort() Não funciona, sort só funciona direto, similar ao forEach
    let teste2 = listNum.map(n => {getDivisorsCnt(n) == maior? besta.push(n) : 0});
  
    besta.sort(function(a, b) {
    return a - b;
    });
  
    //besta.sort() Não funciona, precisa passar uma function, p/ dá certo, pois ele por padrão compara alfabeticamente, 
    //a function fala pra ele comparar numericamente
    
    return [totalList,totalPrimos, [maior, besta]];
  }