// TODO: 
// Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

function addTogether() {
    if (arguments && arguments.length <= 2) {
        const args = [...arguments];
        if (args.every(number => Number.isInteger(number))) {
            if (args.length == 2) {
                return args[0] + args[1];
            } else {
                return function (num) {
                    if (Number.isInteger(num)) {
                        return args[0] + num;
                    }
                    return undefined    
                }
            }
        }
    }
}

addTogether(5)([7]);