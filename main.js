var printNumbers = function(start, end) {
    for (var count = start; count <= end; count ++) {
        console.log(count);
    };
};
printNumbers(1, 10)

var printSquare = function(size) {
    var stars = [];
    for (var count = size; count > 0; count--){
        stars.push("*");
    }
    stars = stars.join('');
    for (var count = size; count > 0; count--){
        console.log(stars);
    }
}

printSquare(5)

var printBox = function(width, height) {
    var stars = [];
    for (var count = width; count > 0; count--){
        stars.push("*");
    }
    stars = stars.join('');
    console.log(stars);
    starSpaces = ["*", "*"];
    for (var count = height - 2; count > 0; count--){
        starSpaces.splice(1, 0, " ");
    }
    starSpaces = starSpaces.join("");
    for (var count = height - 2; count > 0; count--){
        console.log(starSpaces);
    }
    console.log(stars);
}

printBox(6, 8)

var printBanner = function(sentence) {
    var stars = [];
    for (var count = sentence.length + 2; count > 0; count--){
        stars.push("*");
    }
    stars = stars.join('');
    console.log(stars);
    console.log("*" + sentence + "*");
    console.log(stars);
}
printBanner('This is a test!')

var factorize = function(number) {
    var factors = []
    for (var i = 0; i <= number/2; i++) {
        if (number % i == 0) {
            factors.push(i)
        }
    }
    return factors;
}

console.log(factorize(100));