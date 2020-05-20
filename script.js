// Given an array of words (strings), write a function called findLongestWord(words) which prints out the longest word in the array and its length, and then returns it.
function findLongestWord(words) {
    var longestWord;
    for (var i = 0; i < words.length; i++) {
        // your code here
        if (!longestWord) {
            longestWord = words[i];
        }
        if (longestWord.length < words[i].length) {
            longestWord = words[i]
        }
    }
    console.log('The longest word is \'%s\', %s chars long!', longestWord, longestWord.length);
    return longestWord;
}
findLongestWord(['nenad', 'slavica', 'chak', 'dsdsadsadsadsdsdsdsadsadsads'])
// if (!longestWord || longestWord.length < words[i].length) {
//     longestWord = words[i]
// }
// Given a string as an argument, write a function called isPalindrome(word) which returns `true` if teh word is palindrome, and `false` if not.


// function isPalindrome(word) {
//     var palindrome = true;
//     var half = Math.floor(word.length / 2);
//     for (i = 0; i < half; i++) {
//         var leftIx = i;
//         var rightIx = word.length - i - 1;
//         if (word[leftIx] !== word[rightIx]) {
//             palindrome = false;
//             break;
//         }
//     }
//     console.log(palindrome)
// }
function isPalindrome(word) {
    var palindrome = true;
    var half = Math.floor(word.length / 2);
    for (i = 0; i < half; i++) {
        var leftIx = i;
        var rightIx = word.length - i - 1;
        if (word[leftIx] !== word[rightIx]) {
            palindrome = false;
            break;
        }
    }
    console.log(palindrome)
}

// function isPalindrome(word) {
//     var palindrome = true;
//     var half = Math.floor(word.length / 2);
//     console.log('Is ' + word + ' palindrome?');
//     for (i = 0; i < half; i++) {
//         var leftIx = i;
//         var rightIx = word.length - i - 1;
//         console.log(
//             'checking,',
//             'word[' + leftIx + '](' + word[leftIx] + ')',
//             ' === ',
//             'word[' + rightIx + '](' + word[rightIx] + ')',
//             '?'
//         );
//         if (word[i] !== word[word.length - i - 1]) {
//             palindrome = false;
//             break;
//         }
//     }
//     if (palindrome) {
//         console.log('YES', word + ' is palindrome')
//     } else {
//         console.log('NO', word + ' is not palindrome')
//     }
//     console.log('-----------');
//     return palindrome;
// }
function isPalindrome(word) {
    var palindrome = true;
    var half = Math.floor(word.length / 2);
    console.log('Is ' + word + ' palindrome?');
    for (i = 0; i < half; i++) {
        var leftIx = i;
        var rightIx = word.length - i - 1;
        console.log(
            'checking,',
            'word[' + leftIx + '](' + word[leftIx] + ')',
            ' === ',
            'word[' + rightIx + '](' + word[rightIx] + ')',
            '?'
        );
        if (word[i] !== word[word.length - i - 1]) {
            palindrome = false;
            break;
        }
    }
    if (palindrome) {
        console.log('YES', word + ' is palindrome')
    } else {
        console.log('NO', word + ' is not palindrome')
    }
    console.log('-----------');
    return palindrome;
}


// isPalindrome('oto')
isPalindrome('oto')


// HOMEWOK
 function reverseWord(word) {

    var newWord='';

    for (i = word.length -1; i >= 0; i--) {
    for (i = word.length - 1; i >= 0; i--) {
      newWord += word[i];
    } if (newWord === word) {
         return true;
    } 

    if (newWord === word) {
        return true;
    }
      return false;

    return false;
  }

 console.log(reverseWord('racecad'))
