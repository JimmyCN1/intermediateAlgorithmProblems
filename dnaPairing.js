//produce a dna strand based on the string passed and store it in a nested array

function pairElement(str) {
  let dnaStrand = [];
  for (let i = 0; i < str.length; i++) {
    switch (str.charAt(i).toUpperCase()) {
      case "A":
        dnaStrand.push(["A", "T"]);
        break;
      case "T":
        dnaStrand.push(["T", "A"]);
        break;
      case "G":
        dnaStrand.push(["G", "C"]);
        break;
      case "C":
        dnaStrand.push(["C", "G"]);
        break;
    }
  }
  return dnaStrand;
}

pairElement("ATCGA"); // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
pairElement("TTGAG"); // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
pairElement("CTCTA"); // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
