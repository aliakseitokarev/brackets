module.exports = function check(str, bracketsConfig) {
    let count = [];
    let bracket = bracketsConfig.flat().join('');
    for (let i = 0; i < str.length; i++) {
        let index = count.findIndex(el => str[i] === el);
        let configIndex = bracket.indexOf(str[i]);
        // if (configIndex !== bracket.lastIndexOf(str[i]))
        if (index >= 0 && configIndex % 2 === 0) {
            count[index + 1] += 1
        } else if (index < 0 && configIndex % 2 === 0) {
            count[count.length] = str[i];
            count[count.length] = 1;
        }
        
        if (configIndex % 2 !== 0) {
            openIndex = count.findIndex(el => bracket[configIndex-1] === el);
            count[openIndex + 1] -= 1;
              if (count[openIndex + 1] < 0) return false;
        }   
        
    }
    for (let index = 1; index < count.length; index +=2) {
        if (count[index] > 0) return false;
        
    }
    return true;
}

// check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]);
