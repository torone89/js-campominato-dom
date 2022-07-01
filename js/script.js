
// VERIFICA COLLEGAMENTO JAVA
console.log("JS")

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora 
// di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// # MILESTONE 1
// Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.



// # BONUS
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;





// #MILESTONE 2
// Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click
//  del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.





// Recupero il bottone
const btn = document.getElementById('genera');
console.log("Ho recuperato il " + btn)


// Mi creo un addlistner per generarmi le celle grazie alla funzione 
// precendemente creata grazie a un bottone 

btn.addEventListener('click', () => {

    btn.innerHTML = "Ricomincia";
    //1 recupero l'elemento dal Dom (griglia)

    const griglia = document.getElementById('grid')
    console.log("Ho recuperato la" + griglia)

    griglia.innerHTML = "";


    // BONUS
    // Mi recupero il livello 
    let selezione = document.getElementById('livello').value

    console.log(selezione)

    // Variabili per crearmi le celle con il ciclo for
    let riga;
    let cella;

    switch (selezione) {
        case 'easy': riga = 10
            cella = 10
            // code block
            break;
        case 'medium': riga = 9
            cella = 9
            // code block
            break;
        case 'hard': riga = 7
            cella = 7
            break
        // code block
    }

    const totalecelle = riga * cella

    // FUNZIONE

    function creatCell(numero) {
        const celle = document.createElement('div');
        celle.className = 'cella';

        // #MILESTONE 3
        // In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;

        celle.innerText = numero
        return celle;

    }



    for (let i = 1; i <= totalecelle; i++) {


        // Creo cella 
        const cella = creatCell(i)


        // Appendo la cella alla griglia
        griglia.appendChild(cella)

        console.log(cella)

        // #MILESTONE 4
        // Al click sulla cella, stampiamo il numero della cella cliccata i
        // n console, poi coloriamo la cella d'azzurro!

        cella.addEventListener('click', function (clicca) {

            cella.classList.add('clicked');


            // Se è già cliccato non procede
            if (cella.classList.contains('clicked')) {
                return
            }



            console.log(cella)
        })

    }

})








