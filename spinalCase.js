/** 
 * TODO: 
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  const reg = /[A-Z]/g;
  const whiteSpace = /\s/g;
  const nonLetter = /[^a-zA-Z]/g
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (reg.test(str[i])) {
      result.push(`.${str[i]}`);
    } else if (nonLetter.test(str[i]) || whiteSpace.test(str[i])) {
      result.push(str[i].replace(str[i], '-'));
    } else {
      result.push(str[i]);
    }
  }

  const res = result.join('').toLowerCase();
  const resp = res.replace(nonLetter, '-');
  const ress = resp.replace(/--/g, '-')

  if (ress.startsWith('-')) {
    return(ress.replace('-', ''));
  }
  
  return ress;
}

spinalCase('TheAndy_Griffith_Show');