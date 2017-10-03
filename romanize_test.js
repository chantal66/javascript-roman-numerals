const assert = require('chai').assert;
const romanizer = require('../romanize');

describe('Roman numeral converter', function () {
   it('converts a number to a roman numeral', function () {
       let number = 20;
       assert.equal(romanizer.oldRoman(number), 'XX')
   });
});


