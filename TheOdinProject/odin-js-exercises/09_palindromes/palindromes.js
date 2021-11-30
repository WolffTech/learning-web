// function that checks if a string is a palindrome
const palindromes = function (input) {
    let string = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reverse = string.split('').reverse().join('');
    return string === reverse;
    }
// Do not edit below this line
module.exports = palindromes;
