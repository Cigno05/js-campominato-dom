console.log('JS funziona');

//richiamo button play
const playButton = document.getElementById('play-btn');

// faccio click sul bottone play
playButton.addEventListener('click', playTheGame)

//creare la funzione per l'event listner
function playTheGame() {
    //richiamo l'elemento in cui andrá il div .cell
    let gridElement = document.querySelector('.grid-cells');
    // console.log(gridElement);
    const difficultyChoice = document.getElementById('difficult-select');
    // console.log(difficultyChoice.value)

    //stabilisco quante celle sono presenti in una riga
    // let size = parseInt(difficultyChoice.value);
    let size = levelGame(difficultyChoice.value);


    // stabilisco il numero di celle presenti nella griglia
    let numberOfCells = size * size;

    let bombs = bombsGenerator(1, numberOfCells, 16);
    console.log(bombs) //array


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
        cellElement.addEventListener('click', function () {
            // console.log('click on ', number)

            //aggiungo/tolgo la classe all'elemento cliccato
            cellElement.classList.add('bg-dark');
            // console.log(cellElement)

            //conteggio celle selezionate prima della bomba
            let howManySelectedCell = document.getElementsByClassName('bg-dark').length
            console.log(howManySelectedCell);
            //mettere le celle che hanno la classe 'bg-dark' in un array

            // se l'array includ() il numero della cella 
            if (bombs.includes(number)) {
                // tutte le celle diventano rosse
                cellElement.classList.remove('bg-dark');


                //assegnare la classe 'bg-alert' a tutti gli elementi che hanno number uguale a bombs[i]


                gridElement.classList.add('finish-game');
                gridElement.innerHTML += `
                <div>
                    <h1>HAI PERSO!</h1>
                    <h2>Il tuo punteggio é ${howManySelectedCell - 1}</h2>
                </div>
                `;

                alert('BOOM!!!');
                const cellDomElements = document.querySelectorAll('.cell');

                for (let index = 0; index < cellDomElements.length; index++) {
                    const cellValue = parseInt(cellDomElements[index].innerHTML)
                    if (bombs.includes(cellValue)) {
                        cellDomElements[index].classList.add('bg-alert');
                    }
                }

                // for (let index = 0; index < bombs.length; index++) {

                //     const bomb = bombs[index]
                //     cellDomElements[bomb - 1].classList.add('bg-alert');
                // }


            }

        })
    }
}



// valuta il livello del gioco in base alla scelta dell'utente
function levelGame(value) {
    let level = 10

    if (parseInt(value) === 10) {
        level = 10
    } else if (parseInt(value) === 9) {
        level = 9
    } else {
        level = 7
    }

    return level

}

// funzione genera array lungo lenght con numeri diversi da min a max e return array
function bombsGenerator(min, max, lenght) {

    const randomViwed = [];

    // devo ripetere le interazioni fino ad avere "randomNumers" elementi nell'array

    //lughezza dell'array < a quanti numeri voglio nell'array 
    while (randomViwed.length < lenght) {

        // genero numero casuale
        const randomNumber = Math.floor(Math.random() * max) + min;

        //cerco se il numero generato e gia presente  tra i numeri generati

        let found = false;
        //scorro tra i numeri generati in precedenza
        for (let index = 0; index < randomViwed.length; index++) {
            if (randomViwed[index] === randomNumber) {
                found = true;
            }
        }

        //se il numero generato (found) risulta false allora lo pusho
        if (found === false) {
            randomViwed.push(randomNumber)
        }
        // inserisco il numero nell'array

    }
    // ritorna l'array
    return randomViwed
}

// aggiungere class2 agli elementi che hanno class1


























