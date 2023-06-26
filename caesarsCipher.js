
/**
 * TODO:
 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
 * In a shift cipher the meanings of the letters are shifted by some set amount.
 * A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
 * Thus A ↔ N, B ↔ O and so on.
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string. 
*/

function rot13(str) {
    let deciphered = ''
    let index = 0;

    for (let i = 0; i < str.length; i++) {
        if (/[A-Z]/.test(str[i])) {
            index = str.charCodeAt(i)
            deciphered = deciphered.concat(String.fromCharCode((index - 65 + 13) % 26 + 65));
        } else {
            deciphered = deciphered.concat(str[i])
        }
    }

    return deciphered;
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");