//all the tested strings should return the string as lower case with all the words joined by dashes

function spinalCase(str) {
  let spinalString = str;
  for (let i = 0; i < spinalString.length; i++) {
    if (spinalString.charAt(i) === spinalString.charAt(i).toUpperCase()) {
      spinalString =
        spinalString.substring(0, i) + " " + spinalString.substring(i);
      i++;
    }
  }
  spinalString = spinalString.toLowerCase();
  spinalString = spinalString.trim();
  let spinalSplitArray = spinalString.split(/[ _-]+/);
  return spinalSplitArray.join("-");
}

spinalCase("This Is Spinal Tap"); // should return "this-is-spinal-tap"
spinalCase("thisIsSpinalTap"); // should return "this-is-spinal-tap"
spinalCase("The_Andy_Griffith_Show"); // should return "the-andy-griffith-show"
spinalCase("Teletubbies say Eh-oh"); // should return "teletubbies-say-eh-oh"
spinalCase("AllThe-small Things"); // should return "all-the-small-things"
