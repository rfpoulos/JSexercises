var matrixMultiply = function(matrixA, matrixB) {
    newArray = []
    var total = 0;
    for (var k = 0; k < matrixA.length; k++) {
        newArray.push([]);
        for (var j = 0; j < matrixB[0].length; j++) {
            newArray[k].push([])
            for (var i = 0; i < matrixA[0].length; i++) {
                    total += (matrixA[k][i] * matrixB[i][j]);
            }
            newArray[k][j] = total;
            total = 0;
        }
    }
    return newArray;

};

var matrixA = [[2, 4], [3, 4]]
var matrixB = [[5, 2], [3, 1]]
console.log(matrixMultiply(matrixA, matrixB));