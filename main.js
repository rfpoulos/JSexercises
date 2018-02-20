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

var leetSpeak = function(sentence) {
    var leet = {
        a: '4',
        e: '3',
        g: '6',
        l: '1',
        o: '0',
        s: '5',
        t: '7',
    };
    leetSentence = []
    for (var i = 0; i < sentence.length; i++) {
        if (leet[sentence[i].toLowerCase()] == undefined) {
            leetSentence.push(sentence[i]);
        }
        else {
            leetSentence.push(leet[sentence[i].toLowerCase()]);
        }
    }
    return leetSentence.join("");
}
console.log(leetSpeak("This is a test"));

var longLongVowels = function(word) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    newWord = [word[0]]
    for (var i = 1; i < word.length; i++) {
        if (word[i] == word[i - 1] && vowels[word[i].toLowerCase()] != -1) {
            newWord.push(word[i] + word[i] + word[i]);
        }
        newWord.push(word[i])
    }
    return newWord.join('');
}
console.log(longLongVowels('book'));