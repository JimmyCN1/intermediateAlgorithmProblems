//all the subsequent arguments must be removed from the array found in the first argument
function destroyer(arr, ...args) {
  let newArr = [...arr];
  args.forEach(arg => {
    newArr = [...newArr.filter(item => item !== arg)];
  });
  return newArr;
}

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); // should return [1, 5, 1]
destroyer([3, 5, 1, 2, 2], 2, 3, 5); // should return [1]
destroyer([2, 3, 2, 3], 2, 3); // should return []
destroyer(["tree", "hamburger", 53], "tree", 53); // should return ["hamburger"]
destroyer(
  [
    "possum",
    "trollo",
    12,
    "safari",
    "hotdog",
    92,
    65,
    "grandma",
    "bugati",
    "trojan",
    "yacht"
  ],
  "yacht",
  "possum",
  "trollo",
  "safari",
  "hotdog",
  "grandma",
  "bugati",
  "trojan"
); // should return [12,92,65]
