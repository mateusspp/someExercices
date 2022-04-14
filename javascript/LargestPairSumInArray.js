function largestPairSum (numbers) {
    const doisMaiores = numbers.sort((x, y) => y - x).slice(0, 2);
    const soma = doisMaiores.reduce((a,b) => a + b)
    return soma;
}