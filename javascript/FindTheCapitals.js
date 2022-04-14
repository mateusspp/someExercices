var capitals = function (word) {
    let lista = word.split("");
    let result = [];
    let teste = lista.map(elem => elem === elem.toUpperCase()? result.push(lista.indexOf(elem)): 0)
    return result;
};