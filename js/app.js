console.log('JS funziona');

//richiamo button play
const playButton = document.getElementById('play-btn');

// faccio click sul bottone play
playButton.addEventListener('click', playTheGame)

//creare la funzione per l'event listner
function playTheGame () {
    //richiamo l'elemento in cui andrá il div .cell
let gridElement = document.querySelector('.grid-cells');
// console.log(gridElement);
const difficultyChoice = document.getElementById('difficult-select');
console.log(difficultyChoice.value)


//stabilisco quante celle sono presenti in una riga
// let size = parseInt(difficultyChoice.value);
let size = levelGame()

function levelGame() {
    let level = 10

    if (parseInt(difficultyChoice.value) === 10) {
        level = 10
    } else if (parseInt(difficultyChoice.value) === 9) {
        level = 9
    } else {
        level = 7
    }

    return level

}
// stabilisco il numero di celle presenti nella griglia
const numberOfCells = size * size;

// // gridElement vuoto per non accumulare la generazione di cartelle
   gridElement.innerHTML = '';

//uso un ciclo for per richiamare i singolei elementi
for (let index = 0; index < numberOfCells; index++) {
    const number = index + 1;
    // console.log(number);
    
     // creo l'elemento che andró a mettere dentro gridElement
    const cellElement = document.createElement('div');
    // aggiungo la classe al div
    cellElement.className = 'cell';
    // aggiungo la classe per modificare la riga della griglia
    cellElement.className += ` cell-${size}`;
    //aggiungo il numero a ogni cell
    cellElement.innerHTML = number;
    
    //aggiungo l'elemento creato al gridElement
    gridElement.append(cellElement);
    
    //assegno una classe cambia colore all'elemento al momento del click
    cellElement.addEventListener('click', function() {
        // console.log('click on ', number)
        
        //aggiungo/tolgo la classe all'elemento cliccato
        cellElement.classList.toggle('bg-dark');
        // console.log(cellElement)
    }   
    )
}
}























