function stray(numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers.indexOf(numbers[i]) !== numbers.lastIndexOf(numbers[i])) {
        continue;
      }
      else {
        result += numbers[i];
      }
    } return result;
}