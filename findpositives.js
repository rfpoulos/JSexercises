var findPositive = function(numbers) {
    return numbers.filter(number => number > 0);
}

console.log(findPositive([-1, 1, 2, 3, 4, 0]))