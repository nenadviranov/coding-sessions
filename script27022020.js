// function getUserWithHighestSalary() {

//     return getUsers()
//         .then(function (users) {
//            return users.reduce(function (acc, val) {
//                 if (acc.salary < val.salary) {
//                     return val
//                 } else {
//                     return acc
//                 }
//            }, {salary: 0})
//         })
//         .then(user => {
//             return Promise.all(user.friends.map(id => getUser(id)))
//         }) 
// }

// const promise = getUserWithHighestSalary()
// promise.then(console.log)


// function getUserWithHighestSalary() {

//     return getUsers()
//         .then(function (users) {
//            return users.reduce(function (acc, val) {
//                 if (acc.salary < val.salary) {
//                     return val
//                 } else {
//                     return acc
//                 }
//            }, {salary: 0})
//         })
//         .then(user => {
//             return Promise.all([
//                 user,
//                 ...user.friends.map(id => getUser(id))])
//         }).then(([user, ...friends]) => {
//             console.log(user);
//             console.log(friends);
//         })
// }

// const promise = getUserWithHighestSalary()
// promise.then(console.log)


// async function asd() // sekojpat vrake promise

// const findUserWithHighestSalary = async() => {
//     try {
//         const users = await getUsers();

//         const userWithHighestSalary = users.reduce((acc, user) => {
//             return !acc || acc.salary < user.salary
//             ? user
//             : acc
//         });
//         const friends = await Promise.all(
//             userWithHighestSalary.friends.map(id => getUser(id))
//         );

//         return {User : userWithHighestSalary, Friends: friends}

//     } catch (err) {
//         console.log(err)
//     }
// }

const findUserWithHighestSalary = async() => {
    try {
        const users = await getUsers();

        const userWithHighestSalary = users.reduce((acc, user) => {
            return !acc || acc.salary < user.salary
            ? user
            : acc
        });
        const friends = [];
        for (let i = 0; i < userWithHighestSalary.friends.length; i++) {
            const friend = await getUser(userWithHighestSalary.friends[i]);
            friends.push(friend)
        }

        return {User : userWithHighestSalary, Friends: friends}

    } catch (err) {
        console.log(err)
    }
}

findUserWithHighestSalary()
    .then(console.log) 