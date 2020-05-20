function transformArray(arr) {
    var numbers = []
    numbers = arr
    .filter(function(n) {
        return n % 2 !== 0;
    })
    .map(function(n) {
        if (n % 2 !== 0) {
            return n **2;
        }
    });
    return numbers;
} 
console.log(transformArray([1, 2, 3, 4])); // треба да врати [1, 9]
console.log(transformArray([2, 4, 10, 20])); // треба да врати []

function removeVowels(str) {
    var vowels = 'aeiou';
    var arr = str.split('');
    var newArr = arr.filter(function(letter) {
        if (!vowels.includes(letter)) {
            return letter;
        }
    });
    var newString = '';
    newArr.map (function(letter) {
        newString += letter;
    });
    return newString;
}
console.log(removeVowels('Hello World'));
