function longest(s1, s2) {
    let primeiro = s1.split("");
    let segundo = s2.split("");
    let primeiroSegundo = primeiro.concat(segundo);
    var novoTeste = primeiroSegundo.filter((este, i) => primeiroSegundo.indexOf(este) === i);
    //utilizar o método sort sem passar parâmetro, faz com que o msm entenda que é pra organizar por ordem alfabetica
    novoTeste.sort();
    console.log(novoTeste.join(""));
    return novoTeste.join("");
    // a segunda array armazena valores únicos, não há valores repetidos
    // O valor este, no caso, o valor do indice, sempre vai corresponder a primeira vez que o i aparece, sempre vai mostrrar
    //a primeira posição que ele se faz presente, se ambos os valores n forem iguais, significa que o i é duplicado
    // pois o este vai sempre mostrar a primeira posição/vez que o valor i aparece
}