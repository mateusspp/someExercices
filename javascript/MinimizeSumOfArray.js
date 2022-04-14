function minSum(arr) {
    const metade = arr.length / 2;
    const doisMaiores = arr.sort((x, y) => y - x).slice(0, metade);
    const doisMenores = arr.sort((x, y) => x - y).slice(0, metade);
    let result = 0;
    //Eu tinha colocado metade.length, só que o length disso é um numero, um valor, se eu quiser
    //que funcione, eu tenho que colocar i < metade
    for (let i = 0; i < metade; i++) {
      result += doisMaiores[i] * doisMenores[i];
    } return result
}