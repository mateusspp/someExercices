// complete the function
function solution(string) {
    let lista = string.split("");
    let teste = lista.map(elem => elem === elem.toUpperCase()? elem = ' ' + elem : elem);
    let palavrasUnidas = teste.join('');
    console.log(palavrasUnidas);
    return palavrasUnidas;
    // ' ' Uma aspas preenchida com um espaço, signfica espaço na string 
}
  