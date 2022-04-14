function isIsogram(str){
    let conversao = str.toUpperCase();
      for (let i = 0; i < str.length; i++) {
        if (conversao.indexOf(conversao[i]) !== conversao.lastIndexOf(conversao[i])) {
          return false;
        }
      }
    return true;
}