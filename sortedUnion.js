// this algorithm returns the union of multiple arrays in the order the items appear

function uniteUnique(...args) {
  let unionArray = [];
  console.log(args);
  args.forEach(array => {
    array.forEach(item => {
      if (!unionArray.includes(item)) {
        unionArray.push(item);
      }
    });
  });
  return unionArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // should return [1, 3, 2, 5, 4]
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]); // should return [1, 3, 2, [5], [4]]
uniteUnique([1, 2, 3], [5, 2, 1]); // should return [1, 2, 3, 5]
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]); // should return [1, 2, 3, 5, 4, 6, 7, 8]
