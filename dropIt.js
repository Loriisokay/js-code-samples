/** 
 * TODO: 
 * Given the array arr, iterate through and remove each element starting from the first element (the 0 index) 
 * until the function func returns true when the iterated element is passed through it.
 * Then return the rest of the array once the condition is satisfied, 
 * otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {
  let copyArr = [...arr];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      copyArr.shift(copyArr[i]);
      result = [...copyArr];
    } else if (func(arr[i])) {
      result = [...copyArr];
      break;
    }
  }

  return result;
}

dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; });