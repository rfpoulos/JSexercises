var sumNumbers = function(number) {
    var total = 0;
    for (var i = 0; i < number.length; i++) {
        total += number[i];
    }
    return total;
}
console.log(sumNumbers([1, 2, 3, 4, 5]));