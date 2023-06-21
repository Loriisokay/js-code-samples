/**
 * TODO:
 * Compare two arrays and return a new array with any items only found in one of the two given arrays, 
 * but not both. In other words, return the symmetric difference of the two arrays.
 * Note: You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
  let newArr = [];

  arr1.forEach(element => {
    if (!arr2.includes(element)) {
      newArr.push(element);
    }
  });

  arr2.forEach(element => {
    if (!arr1.includes(element)) {
      newArr.push(element);
    }
  })

  return newArr;
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);