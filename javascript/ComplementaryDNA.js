function DNAStrand(dna){
    let teste = dna.split("");
    let total = "";
    for (let i = 0; i <= teste.length; i++) {
      if (teste [i] == "A"){total += "T"}
      else if (teste[i] == "T"){total += "A"}
      else if (teste[i] == "G"){total += "C"}
      else if (teste[i] == "C"){total += "G"}   
    } return total;
    console.log(total);
}