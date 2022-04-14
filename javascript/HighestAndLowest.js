function highAndLow(numbers){
    let separados = numbers.split(" ")
    return `${Math.max(...separados)} ${Math.min(...separados)}`
}