/* Function that adds two numbers expressed as strings*/

var longString,
    shortString

function addBig(a, b) {
  var result = [];
  var exTen = 0;
  if (a.length >= b.length) {
    longString = a;
    shortString = b;
  } else {
    longString = b;
    shortString = a;
  }

  var shortIndex = shortString.length - 1,
      longIndex = longString.length - 1

  for (longIndex; longIndex >= 0; longIndex--) {
    var longStrEl = longString[longIndex];
    shortStrEl = asignShort(shortString, shortIndex);
    var sum = parseInt(longStrEl) + parseInt(shortStrEl) + exTen;
    if (sum <= 9) {
      result.unshift(sum);
      exTen = 0;
    } else {
      result.unshift(sum - 10);
      exTen = 1;
    }
    shortIndex--;
  }

  if (exTen === 1) { result.unshift(1); }

  return result.join("");
}

function asignShort(string, index) {
  if (index >=0 ) {
    return string[index];
  } else {
    return 0;
  }
}
