//TODO:
// Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).

function myReplace(str, before, after) {
    let sliced;
    let result;
    if (before[0].match(/[A-Z]/)) {
        sliced = after[0].toUpperCase();
        result = after.replace(after[0], sliced);
        return str.replace(before, result)
    } else {
        sliced = after[0].toLowerCase();
        result = after.replace(after[0], sliced);
        return str.replace(before, result)
    }
}

myReplace("His name is tom", "tom", "john");