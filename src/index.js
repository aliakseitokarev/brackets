// module.exports = function check(str, bracketsConfig) {
//     let count = [];
//     let bracket = bracketsConfig.flat().join('');  //join('').replace(/,/g, '');
//     for (let i = 0; i < str.length; i++) {
//         let index = count.findIndex(el => str[i] === el);
//         let configIndex = bracket.indexOf(str[i]);
//         let configSame = bracket.lastIndexOf(str[i]);``
//         if (index >= 0 && configIndex % 2 === 0) {
//             count[index + 1] += 1
//             if ((configIndex !== configSame) && (count[index + 1] % 2 === 0)) count[index + 1] = 0;
//         } else if (index < 0 && configIndex % 2 === 0) {
//             count[count.length] = str[i];
//             count[count.length] = 1;
//         }
        
//         if (configIndex % 2 !== 0) {
//             openIndex = count.findIndex(el => bracket[configIndex-1] === el);
//             // if (count[count.length - 2] !== bracket[configIndex-1] && count[count.length - 1] !== 0) return false;
//             count[openIndex + 1] -= 1;
//               if (count[openIndex + 1] < 0) return false;
//         }   
        
//     }
//     for (let index = 1; index < count.length; index +=2) {
//         if (count[index] > 0) return false;
        
//     }
//     return true;
// }

// check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]);

module.exports = function check(str, bracketsConfig) {
   
    let bracket = bracketsConfig.flat().join('');                       
        let count = [];
    for (let elem of str) {
            let bracketIndex = bracket.indexOf(elem)

            if (bracketIndex % 2 === 0) {
                
                if (elem === bracket[bracketIndex + 1] && count[count.length - 1] === bracketIndex) {
                    count.pop();
                } else if (elem === bracket[bracketIndex + 1] && count[count.length - 1] !== bracketIndex) {
                    count.push(bracketIndex)
                }
                else {
                    count.push(bracketIndex)
                }
            } 
            else {
                if (count.pop() !== bracketIndex-1) {
                    return false;
                }
            }
            
        }
        return count.length === 0
    
}
