//this algortihm converts a string to a html compatable string

function convertHTML(str) {
  const htmlObject = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  let array = [...str];
  array = array.map(char => {
    if (htmlObject.hasOwnProperty(char)) {
      return htmlObject[char];
    } else {
      return char;
    }
  });
  return array.join("");
}

convertHTML("Dolce & Gabbana"); // should return Dolce &​amp; Gabbana
convertHTML("Hamburgers < Pizza < Tacos"); // should return Hamburgers &​lt; Pizza &​lt; Tacos
convertHTML("Sixty > twelve"); // should return Sixty &​gt; twelve
convertHTML('Stuff in "quotation marks"'); // should return Stuff in &​quot;quotation marks&​quot;
convertHTML("Schindler's List"); // should return Schindler&​apos;s List
convertHTML("<>"); // should return &​lt;&​gt;
convertHTML("abc"); // should return abc
