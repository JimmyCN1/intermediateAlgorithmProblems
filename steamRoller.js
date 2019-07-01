// this algorithm will recursively flatten any nested array that is passed to it into a
// single level array

function steamrollArray(arr, newArr = []) {
  arr.forEach(item => {
    if (!Array.isArray(item)) {
      newArr.push(item);
      return newArr;
    } else if (Array.isArray(item)) {
      return steamrollArray(item, newArr);
    }
  });
  return newArr;
}

steamrollArray([[["a"]], [["b"]]]); // should return ["a", "b"]
steamrollArray([1, [2]]); // should return [1, 2]
steamrollArray([1, [2], [3, [[4]]]]); // should return [1, 2, 3, 4]
steamrollArray([1, [], [3, [[4]]]]); // should return [1, 3, 4]
steamrollArray([1, {}, [3, [[4]]]]); // should return [1, {}, 3, 4]
