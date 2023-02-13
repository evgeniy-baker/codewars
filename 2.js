function squareSum(numbers){
    let summa = 0
    for (let i = 0; i < numbers.length; i++) {
        summa += numbers[i] ** 2
    }
    return summa
}