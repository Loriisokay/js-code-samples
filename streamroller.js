// TODO: 
// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    if (!Array.isArray(arr)) {
        return arr;
    } else {
        let newArr = [];
        arr.forEach(element => {
            if (Array.isArray(element)) {
               newArr = newArr.concat(steamrollArray(element));
            } else {
                newArr.push(element);
            }
        });
        return newArr;
    }
}

steamrollArray([1, [2], [3, [[4]]]]);