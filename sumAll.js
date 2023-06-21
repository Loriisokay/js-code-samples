/** 
 * TODO: 
 * We'll pass you an array of two numbers. 
 * Return the sum of those two numbers plus the sum of all the numbers between them. 
 * The lowest number will not always come first.
 * For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 is 10.
*/

function sumAll(arr) {
    let result = 0;
    let newArr = arr.sort((a, b) => a - b);

    for (let i = newArr[0]; i < newArr[newArr.length - 1] + 1; i++) {
        result += i;
    }
    
    return result;
}

sumAll([4, 1]);