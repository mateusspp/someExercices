function countChar(string, char) {
    let lista = string.split('');
    //O map no lugar do filter, retorna true e false, o filter só retorna os valores iguais
    let teste = lista.filter(elem => elem.toLowerCase() == char.toLowerCase());
    let tamanho = teste.length;
    return tamanho;
}