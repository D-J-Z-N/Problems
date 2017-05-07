/*Function that checks if a string is a pangram*/

var abc = "abcdefghijklmnopqrstuvwxyz";

function pangram(string) {
  var a = string.toLowerCase(),
      inString = []

  for (var j = 0; j < abc.length; j++) {
    var abcChar = abc[j];
    for (var i = 0; i < a.length; i++) {
      if (abcChar === a[i]) {
        inString.push(a[i]);
        break;
      }
    }
  }
  if (inString.length >= abc.length) {
    console.log(string + " " + "is a pangram");
  } else {
    console.log(string + " " + "is not a pangram");
  }
}

/*
Test cases:
a = "Cwm fjord veg balks nth pyx quiz";
b = "abcdefghijklmnopqrstuvwxyz";
c = "Quick fox jumps nightly above wizard";
e = "abcdefghijklmnopqrstuvwxyyyy";
f = "Public junk dwarves hug msssy quart fox";
g = "Public junk dwarves hug my quartz fox";
*/
