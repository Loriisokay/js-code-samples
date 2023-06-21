/**
 * TODO:
 * Missing letters
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined. 
*/

function fearNotLetter(str) {
    let table = [];
    let missingLetter = '';

    for (let i = 0; i < str.length; i++) {
        table.push(str.charCodeAt(i));
    }
    
    let tableCopy = [...table];

    for (let i = 0; i < table.length; i++) {
        if (table[i + 1] - table[i] == 2) {
            table.push(table[i] + 1)
            missingLetter = (table[i] + 1)
        }
    }

    for (let i = 0; i < table.length; i++) {
        if (!tableCopy.includes(table[i]) || missingLetter == '') {
            return undefined;
        } else {
            return String.fromCharCode(missingLetter);
        }
    }
}

fearNotLetter("abcdf");