let isPlayerOne = true;
const cells = document.getElementsByClassName("cell");
let X = 0;
let O = 0;
const results = document.querySelector('#results');
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', userMove);
}

function userMove(e) {
    results.style.border='solid transparent';
    let cellValue = e.target.innerHTML;
    if (!cellValue.length) {
        e.target.innerHTML = isPlayerOne? "X" : "O";

        isPlayerOne = !isPlayerOne;
        //horizontales
        checkLine(0, 1, 2)
        checkLine(3, 4, 5)
        checkLine(6, 7, 8)
        // verticales
        checkLine(0, 3, 6)
        checkLine(1, 4, 7)
        checkLine(2, 5, 8)
        // las diagonales
        checkLine(0, 4, 8)
        checkLine(6, 4, 2)
    };
};

function checkLine(c1, c2, c3){
    if(
        cells[c1].innerHTML.length &&
        cells[c1].innerHTML === cells[c2].innerHTML &&
        cells[c2].innerHTML === cells[c3].innerHTML
    ){
        showWinner(cells[c1].innerHTML);
    }
};

function showWinner(winner){
   results.innerText = winner + " WIN";

    Swal.fire(`gano el ${winner}`);
    clear(winner);
}

function clear(winner){
    setTimeout(miFuncion, 3000);
   
    if(winner == "O"){
        O = O + 1;
        results.style.border= 'solid 1px blue';
    }
    if(winner== "X"){
        X = X + 1;
        results.style.border= 'solid 1px red';

    }
    const counter=  document.querySelector('.counter');
    counter.innerText= `X have: ${X} and O have ${O} `;
}
function miFuncion() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML="";
    }
}
  
