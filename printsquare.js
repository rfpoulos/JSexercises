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