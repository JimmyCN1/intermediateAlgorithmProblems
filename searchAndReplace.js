// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// The case of the words in the original sentence are preserved after the replacement has occured
function myReplace(str, before, after) {
  let newStr = "";
  let tempArr = str.split(" ");
  //create temporary array
  tempArr = tempArr.map(word => {
    if (before === word) {
      if (word.charAt(0) === word.charAt(0).toUpperCase()) {
        return after.charAt(0).toUpperCase() + after.substring(1);
      } else {
        return after;
      }
    } else {
      return word;
    }
  });
  newStr = tempArr.join(" ");
  return newStr;
}

myReplace("Let us go to the store", "store", "mall"); // should return "Let us go to the mall"
myReplace("He is Sleeping on the couch", "Sleeping", "sitting"); // should return "He is Sitting on the couch"
myReplace("This has a spellngi error", "spellngi", "spelling"); // should return "This has a spelling error"
myReplace("His name is Tom", "Tom", "john"); // should return "His name is John"
myReplace("Let us get back to more Coding", "Coding", "algorithms"); // should return "Let us get back to more Algorithms"
