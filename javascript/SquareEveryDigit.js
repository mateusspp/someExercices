function squareDigits(num){
    return Number (num.toString().split("").map(elem => elem * elem).join(""));
  }