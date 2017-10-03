let pry = require('pryjs');
let oldValues = {
    1000: 'M',
    500 : 'D',
    100 : 'C',
    50  : 'L',
    10  : 'X',
    5   : 'V',
    1   : 'I'
};

function oldRoman(number) {
    let roman = '';

    while (number > 0) {
        Object.keys(oldValues)
            .sort((a,b) => { return b - a })
            .forEach((key) => {
                while (number % key !== number) {
                    roman += oldValues[key];
                    number -= key
                }
            })
    }
    return roman
}

module.exports = { oldRoman };