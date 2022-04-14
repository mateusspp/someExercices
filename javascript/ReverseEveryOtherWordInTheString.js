function reverse(str){
    let azul = str.split('').reverse().join('');
    // i % 2 === 0 eu não preciso de indexOf pq o próprio i já é o index da string em questão
    let lista = str.split(" ");
    let teste = "";
    // teste.trim(); não funciona aqui
    for (let i = 0; i < lista.length; i++) {
      if (i % 2 == 0) {
        teste += " " + (lista[i]);
      }
      else {
        let dentro = [lista[i]];
        let palavras = dentro.join('');
        //let azul = dentro.join('').split('').reverse().join('');
        let azul = palavras.split('').reverse().join('');
        teste += " " + azul;
      }
    } return teste.trim();
    console.log(teste);
}