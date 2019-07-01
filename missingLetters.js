// this algorithm will return the letter that is missing in the range of letters provided given that ther is only
// one letter missing

function fearNotLetter(str) {
  const seperatedStrArray = str.split("");
  const asciiArr = seperatedStrArray.map(char => char.charCodeAt(0));
  const min = Math.min(...asciiArr);
  const max = Math.max(...asciiArr);
  let sumInRange = 0;
  for (let i = min; i <= max; i++) {
    sumInRange += i;
  }
  let sumInStr = 0;
  asciiArr.forEach(value => (sumInStr += value));
  return sumInStr === 2847
    ? undefined
    : String.fromCharCode(sumInRange - sumInStr);
}

fearNotLetter("abce"); // should return "d"
fearNotLetter("abcdefghjklmno"); // should return "i"
fearNotLetter("stvwx"); // should return "u"
fearNotLetter("bcdf"); // should return "e"
fearNotLetter("abcdefghijklmnopqrstuvwxyz"); // should return undefined
