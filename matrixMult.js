//Matrix multiplication

var matrixMult = function(matrixA, matrixB) {
  var matrixAB = [];
  for (var row = 0; row < matrixA.length; row++) {
    var matrixRow = [];
    for (var col = 0; col < matrixB[0].length; col++) {
      var elementFromSum = 0;
      for (var i = 0; i < matrixA[row].length; i++) {
        elementFromSum += matrixA[row][i] * matrixB[i][col];
      }
      matrixRow.push(elementFromSum);
    }
    matrixAB.push(matrixRow);
  }
  return matrixAB;
}


/*

Test cases:

var a = [[4, 2, 2, 8], [0, 3, 2, 7], [1, 3, 5, 6]];
var b = [[5, 2, 2], [9, 3, 4], [1, 5, 2], [5, 4, 4]];

var c = [[4, 8], [0, 2], [1, 6]];
var d = [[5, 2], [9, 4]];

var e = [[1,2],[1,2]];
var f = [[1,2],[1,2]];

*/
