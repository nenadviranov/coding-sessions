// async function run() {
//     await createTable()
//     const users = await getUsers();

// }

// const addEventListenerToAllButtons = () => {
//     const btns = document.getElementsByClassName('btn-outline-primary')
//     const btnsArr = [...btns]
//     console.log(btnsArr)
// }


const RUN = async () => {
    await createTable();
    const BTNS = document.getElementsByTagName('button');
    const arrBtns = [...BTNS];
    // console.log(arrBtns);
    const onButtonClick = async event => {
      const btnTarget = event.target;
      const idFromNodeTree = btnTarget.parentNode.parentNode;
      const buttonID = idFromNodeTree.getElementsByTagName('td')[0].innerText;
      const user = await getUser(buttonID * 1);
      console.log(user);
    };

    arrBtns.forEach(btn => btn.addEventListener('click', onButtonClick));
  };
  RUN(); 