// TODO: 
// Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

function truthCheck(collection, pre) {
    for (let i = 0; i < collection.length; i++) {
        if (!Boolean(collection[i][pre])) {
            return false;
        }
    }
    return true;
}

// Shorter way to solve the same problem: 

function truthCheck(collection, pre) {
    return collection.every(element => element[pre]);
}

truthCheck([{ name: "Quincy", username: "QuincyLarson" }, { name: "Naomi", username: "nhcarrigan" }, { name: "Camperbot" }], "username"); 