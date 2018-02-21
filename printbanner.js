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