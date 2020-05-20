// const el = document.getElementById('root;')

// console.log(el);


// const el2 = document.querySelectorAll('#img-cnt img')

// console.log([...el2])



// const makeTable = async () => {
//     const user = await getUser()
//     try {
//         const printedUser = user.





//     } catch (err) {

//     }



    // let rows = csv.split('\n'),
    // table = document.createElement('table'),
    // tr = null, td = null,
    // tds = null;

    // for ( let i = 0; i < rows.length; i++ ) {
    //     tr = document.createElement('tr');
    //     tds = rows[i].split(',');
    //     for ( let j = 0; j < tds.length; j++ ) {
    //        td = document.createElement('td');
    //        td.innerHTML = tds[j];
    //        tr.appendChild(td);
    //     }
    //     table.appendChild(tr);
    // }

    // document.appendChild(table);

// }


// const makeTable = async() => {
//     try {
//     const user = await getUsers();
//     const rows = user.split('\n'),
//     table = document.createElement('table'),
//     tr = null, td = null,
//     tds = null;

//     for ( var i = 0; i < rows.length; i++ ) {
//         tr = document.createElement('tr');
//         tds = rows[i].split(',');
//         for ( var j = 0; j < tds.length; j++ ) {
//            td = document.createElement('td');
//            td.innerHTML = tds[j];
//            tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }

//     document.appendChild(table);
//     }catch (err) {
//         console.error(err)
//     }   

// }

// makeTable();

const run = async () => {
    const d = document;
    const users = await getUsers();

    const columns = ['id', 'birthYear', 'firstName', 'lastName'];

    const t = d.createElement('table');
    t.style.width = '100%';

    const th = d.createElement('thead');
    t.appendChild(th);

    const thRow = d.createElement('tr');
    th.appendChild(thRow);

    columns.forEach(key => {
        const th = d.createElement('th');
        th.style.textAlign = 'left';

        th.textContent = key;

        thRow.appendChild(th);
    });

    const tb = d.createElement('tbody');

    users.forEach(user => {
        const tr = d.createElement('tr');

        columns.forEach(key => {
            const td = d.createElement('td');

            td.textContent = user[key];

            tr.appendChild(td);
        });

        tb.appendChild(tr);
    });

    t.appendChild(tb);

    d.getElementById('root').appendChild(t);
}

run();