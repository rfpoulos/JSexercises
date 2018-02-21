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