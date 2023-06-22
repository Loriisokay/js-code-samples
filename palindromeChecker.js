/**
 * TODO: 
 * Return true if the given string is a palindrome. Otherwise, return false.
 * A palindrome is a word or sentence that's spelled the same way both forward and backward, 
 * ignoring punctuation, case, and spacing.
 * Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) 
 * and turn everything into the same case (lower or upper case) in order to check for palindromes.
*/

function palindrome(str) {
    const reg = /\W|_/g;
    const newStr = str.replace(reg, "").toLowerCase();
    let firstSubstring = "";
    let secondSubstring = "";

    if (newStr.length % 2 == 0) {
        firstSubstring = newStr.substring(0, newStr.length / 2);
        secondSubstring = newStr.substring(newStr.length / 2);
    } else {
        firstSubstring = newStr.substring(0, (newStr.length - 1) / 2)
        secondSubstring = newStr.substring((newStr.length + 1)/2);
    }

    secondSubstring = secondSubstring.split("").reverse().join("");

    return firstSubstring == secondSubstring;
}

palindrome("My age is 0, 0 si_ega ym.");