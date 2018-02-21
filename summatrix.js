var sumMatrix = function(matrix) {
    newArray = matrix[0];
    for (var i = 1; i < matrix.length; i++) {
        for (var j = 0; j < matrix[0].length; j++) {
            for (var k = 0; k < matrix[0][0].length; k++) {
                newArray[j][k] += matrix[i][j][k];
            };
        };
    };
    return newArray;
};

console.log(sumMatrix([[[1, 3], [2, 4]], [[5, 2], [1, 0]], [[1, 1], [1, 1]]]));