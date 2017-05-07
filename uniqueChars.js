/*Function that removes duplicates from array*/

function uniqueChars(array) {
  var uniqueCharsArray = [];
  for( var i = 0; i < array.length - 1; i++) {
    var element = array[i];
    if(uniqueCharsArray.indexOf(element) === -1) {
      uniqueCharsArray.push(element);
    }
  }
  return uniqueCharsArray;
}
