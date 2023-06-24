/**
 * TODO:
 * Convert the given number into a roman numeral.
*/

function convertToRoman(num) {
    const units = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    const thousands = ['', 'M', 'MM', 'MMM'];

    let digits = num.toString().split("");
    let romanNumeral = "";

    switch (digits.length) {
        case 4:
            romanNumeral = thousands[digits[0]] + hundreds[digits[1]] + tens[digits[2]] + units[digits[3]]
            break;
        case 3:
            romanNumeral = hundreds[digits[0]] + tens[digits[1]] + units[digits[2]];
            break;
        case 2:
            romanNumeral = tens[digits[0]] + units[digits[1]];
            break;
        case 1:
            romanNumeral = units[digits[0]];
            break;
    }

    return romanNumeral;

}

convertToRoman(891);