// function binominalSquare(x, y) {
//     var result = x * x - 2 * x * y + y * y
//     return result;
// }
// console.log(binominalSquare(2, 2))


// function ex(x, y) {
//     result = 9 * x * x  + 12 * x * y + 4 * y * y
//     return result;
// }
// console.log(ex(4, 2))

// function exx(x, y, z) {
//     var result = (16 * x * x * x * x) + (2 * x * x * x * y * y * z) + (4 * x * x * y * y * y * z) + (2 * y * y * y * y) + (7 * x * y * y * z * z * z) + (3 * z * z * z *z)
//     return result
// }

// console.log(exx(30, -20, 1))



// function polinomial(x, y, z) {
//     return (
//         (16 * x**4) + 
//         (2 * x**3 * y**2 * z) +
//         (4 * x**2 * y**3 * z) +
//         (2 * y**4) +        
//         (7 * x * y**2 * z**3) +
//         (3 * z**4)
//     )
// }
// function callPolinomial (x, y, z) {
//     console.log(`f(${x}, ${y}, ${z}) -> `, polinomial(x, y, z))
// }
// callPolinomial(1, 2, 3);
// callPolinomial(2, 1, 3);
// callPolinomial(3, 2, 1);
// callPolinomial(3, -2, 1);
// callPolinomial(30, -20, 1);


// function isTriangle(p1, p2, p3) {
//     var x1 = p1[0];
//     var y1 = p1[1];
//     var x2 = p2[0];
//     var y2 = p2[1];
//     var x3 = p3[0];
//     var y3 = p3[1];

//     var a1 = (x1 - x2) ** 2 + (y1 - y2) ** 2;
//     var b2 = (x2 - x3) ** 2 + (y2 - y3) ** 2;
//     var c3 = (x1 - x3) ** 2 + (y1 - y3) ** 2;

//     var ab = Math.sqrt(a1);
//     var bc = Math.sqrt(b2);
//     var ca = Math.sqrt(c3);


//     if (ab + bc > ca && ab + ca > bc && bc + ca > ab) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// console.log(isTriangle([0, 1], [0, 3], [0, 4]))


// function transformString (str) {
//     return str.replace(/[aeiou]/gi, '');
// }



function transformString(str){
    var newWord = '';
    for(var i = 0; i < str.length; i++){
        if(str[i] != 'a' && str[i] != 'e' && str[i] != 'i' && str[i] != 'o' && str[i] != 'u' && str[i] != 'A' && str[i] != 'E' && str[i] != 'I' && str[i] != 'O' && str[i] != 'U'){
            newWord += str[i];
        }
    }
    return newWord
}

console.log(transformString('hello world'))
console.log(transformString('foO bar'))
console.log(transformString('oui'))


// function swap(str){
//     var newWord = '';
//     for (var i = 0; i < str.length; i +=2){
//         if (str[i + 1]) {
//             newWord += str[i + 1]
//         }
//     }
//     newWord += str[i]
// }




// console.log(swap('abcde'))
function switchWords (str) {
    newWord = '';
    for (var i = 0; i < str.length; i+=2) {
        if (str[i + 1]) {
            newWord += str[i +1]
        }
        newWord += str[i]
    }
    return newWord;
}
console.log(switchWords('AaAaA'))