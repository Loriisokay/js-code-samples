// TODO: 
// Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
    let sortedNumbers = arr.sort((a, b) => a - b)
    let range = [];

    for (let i = sortedNumbers[0]; i <= sortedNumbers[1]; i++) {
        range.push(i)
    }

    function findGreaterCommonDiviser(a, b) {
        if (b == 0) {
            return a;
        } else {
            return findGreaterCommonDiviser(b, a % b);
        }
    }

    let smallestCD = range[0];

    for (let i = 1; i < range.length; i++) {
        smallestCD = (smallestCD * range[i] / findGreaterCommonDiviser(smallestCD, range[i]));
    }

    return smallestCD;
}

smallestCommons([8, 14]);