//Quicksort function when a pivot is the first element in an array:

function quickSort(items, left, right) {
  var partitionIndex;

  if (items.length > 1) {
    //Base case:
    partitionIndex = partition(items, left, right);

  //recursive case:
    if ( left < partitionIndex - 1) {
      //left side:
      quickSort(items, left, partitionIndex - 1);
    }

    if (partitionIndex + 1 < right) {
      //Right side:
      quickSort(items, partitionIndex + 1, right);
    }
  }
 return items;
}

function partition(items, left, right) {
  var pivot = items[left];
  var i = left + 1;
  var j = right;
  var leftSide = left + 1;
  while (i <= j) {
    if (pivot >= items[i]) {
      swap(items, leftSide, i);
      leftSide = leftSide + 1;
    }
    i++;
  }
  swap(items, left, leftSide - 1);
  return leftSide - 1;
}

function swap(array, first, second) {
  var temp = array[first];
  array[first] = array[second];
  array[second] = temp;
}


// Test cases:

// var a = [9, 7, 1, 11, 5, 12, 2, 14, 21, 5, 20, 3, 1, 10, 6];
// var a = [9, 7, 1, 11, 9, 6];
// var a = [1, 2, 3, 4];
// var a = [9];
// var a = [];

// quickSort(a, 0, a.length);
