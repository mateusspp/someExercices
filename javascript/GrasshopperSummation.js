var summation = function (num) {
    let result = 0;
    let sun = Array.from({length: num + 1}, (v, i) => i);
    for (let i = 0; i < sun.length; i++) {
      result += sun[i]
    } return result
  }