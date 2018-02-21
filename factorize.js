var factorize = function(number) {
    var factors = []
    for (var i = 0; i <= number/2; i++) {
        if (number % i === 0) {
            factors.push(i)
        }
    }
    return factors;
}

console.log(factorize(100));