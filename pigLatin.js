// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to
// the end of the word and suffixes an "ay".
// If a word begins with a vowel just "way" will be added to the end.

function translatePigLatin(str) {
  let newStr = "";
  let cluster = "";
  let clusterEndIndex = 0;
  let beginsWithConstant = true;
  // check for constanant cluster
  if (vowelTest(str.charAt(0))) {
    beginsWithConstant = false;
  } else {
    for (let i = 0; i < str.length; i++) {
      if (vowelTest(str.charAt(i))) {
        clusterEndIndex = i;
        cluster = str.substring(0, clusterEndIndex);
        break;
      }
    }
  }

  // build new string
  for (let i = clusterEndIndex; i < str.length; i++) {
    newStr += str.charAt(i);
    console.log(newStr);
  }
  //append the appropriate suffix
  if (!beginsWithConstant) {
    newStr += "way";
  } else if (beginsWithConstant) {
    newStr += cluster;
    newStr += "ay";
  }
  return newStr;
}

var vowelTest = (function() {
  var re = /^[aeiou]$/i;
  return function(s) {
    return re.test(s);
  };
})();

translatePigLatin("california"); // should return "aliforniacay"
translatePigLatin("paragraphs"); // should return "aragraphspay"
translatePigLatin("glove"); // should return "oveglay"
translatePigLatin("algorithm"); // should return "algorithmway"
translatePigLatin("eight"); // should return "eightway"
