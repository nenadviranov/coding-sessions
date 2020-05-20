// function delayedUpperCase(input) {
//     const promise = new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             if (typeof input === 'string') {
//                 resolve((input.toUpperCase())
//                 )
//             } else {
//                 reject(input);
//             }
//         }, 500)
//     })
//     return promise;
// }

// const promise = delayedUpperCase(2)
// promise.then(function(input) {
//     console.log(input)
// })
// .catch(function(error) {
//     console.error(error)
// })

function getUserWithHighestSalary() {

    return getUsers()
        .then(function (users) {
           return users.reduce(function (acc, val) {
                if (acc.salary < val.salary) {
                    return val
                } else {
                    return acc
                }
           }, {salary: 0})
        })
}

const promise = getUserWithHighestSalary()
promise.then(console.log)


// const findUserWithHighestSalary = () => {
//     return getUsers().then(users => {
//       users.sort((a, b) => b.salary - a.salary)
//       return users.slice(0, 1)[0]
//     });
//   };
//   let salary = findUserWithHighestSalary();
//   salary.then(function(input) {
//     console.log(input);
//   });