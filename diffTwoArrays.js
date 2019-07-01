//find the symmetric difference of two different arrays

function diffArray(arr1, arr2) {
  var newArr = [];
  newArr = arr1.filter(item => !arr2.includes(item));
  newArr = [...newArr, ...arr2.filter(item => !arr1.includes(item))];
  console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);
diffArray(
  ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"],
  ["diorite", "pink wool"]
);
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
