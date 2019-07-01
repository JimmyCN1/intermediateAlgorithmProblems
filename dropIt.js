// algorithm will test whether the passed function will return true on the values in the array.
// if the function returns false, the value will not be returned in the new array
// however, once the function returns true, that value will be added to the return array along with
// all the remaining numbers in the passed array

function dropElements(arr, func) {
  let dropArr = [];
  let satisfied = false;
  arr.forEach(number => {
    if (satisfied) {
      dropArr.push(number);
    } else if (func(number)) {
      dropArr.push(number);
      satisfied = true;
    }
  });
  return dropArr;
}

dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
}); // should return [3, 4]
dropElements([0, 1, 0, 1], function(n) {
  return n === 1;
}); // should return [1, 0, 1]
dropElements([1, 2, 3], function(n) {
  return n > 0;
}); // should return [1, 2, 3]
dropElements([1, 2, 3, 4], function(n) {
  return n > 5;
}); // should return []
dropElements([1, 2, 3, 7, 4], function(n) {
  return n > 3;
}); // should return [7, 4]
dropElements([1, 2, 3, 9, 2], function(n) {
  return n > 2;
}); // should return [3, 9, 2]
