// const run = async () => {
//     let sortBy = 'id'
//     let sortOrder = 'asc'
//     await createTable(sortBy, sortOrder)
//     const ths = document.querySelectorAll('th')
//     const thsArray = [...ths]

//     // const item = async (event) => {
//     //     console.log(event.target)
//     // }
//     // thsArray.forEach(click => {
//     //     click.addEventListener('click', item)
//     // });


//     await createTable(sortOrder, sortBy);                    
//     const trs = document.querySelectorAll('tbody tr')
//     const trArray = [...trs]
//     const onMouseEnter = async (event) => {
//         event.target.style.backgroundColor = 'red'    
//     };

//     const onMouseLeave = async (event) => {
//         event.target.style.backgroundColor = 'white'
//     }


//     trArray.forEach(change => {
//         change.addEventListener('mouseenter', onMouseEnter)
//         change.addEventListener('mouseleave', onMouseLeave)

//     });
// }

// run();


const run = async () => {
    let sortBy = 'id'
    let sortOrder = 'asc'
    await createTable(sortOrder, sortBy);    


    const ths = document.querySelectorAll('th')
    const thsArray = [...ths]

    thsArray.forEach(click => {
        click.addEventListener('click', item)
    });

    const item = async (event) => {
        console.log(event.target)
    }



    const trs = document.querySelectorAll('tbody tr')
    const trArray = [...trs]
    const onMouseEnter = async (event) => {
        event.target.style.backgroundColor = 'red'    
    };
    const onMouseLeave = async (event) => {
        event.target.style.backgroundColor = 'white'
    }
    trArray.forEach(change => {
        change.addEventListener('mouseenter', onMouseEnter)
        change.addEventListener('mouseleave', onMouseLeave)
    });
}
run();
