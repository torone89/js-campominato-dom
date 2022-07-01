
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

    // Recuperto il risulato finale
    const contatore = document.getElementById("risultato");

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

    function creatCell(numero, cellaPerRiga) {
        const celle = document.createElement('div');
        celle.className = 'cella';
        celle.innerText = numero
        // Calcolare le misure delle celle
        const side = `calc(100% / ${cellaPerRiga})`
        celle.style.height = side;
        celle.style.width = side;

        // #MILESTONE 3
        // In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;

        return celle;

    }

    // // FUNZIONE
    // Genero 17 bombe tramite un ciclo FOR e le inserisco nell'Array Bombs
    // Creo una funzione che generi i numeri che diventeranno le bombe
    function createBomb(min, max) {

        return Math.floor(Math.random() * (max - min)) + min;
    };


    let bombe = [];
    for (let i = 1; i <= 16; i++) {

        // Creo il numero della "Bomba"
        bombe.push(createBomb(1, totalecelle))
        console.log(createBomb(1, totalecelle))
    }


    let risultato = 0
    // Creo una variabile che tenga conto del punteggio dell'utente
    contatore.innerText = `Punteggio: ${risultato}`;

    for (let i = 1; i <= totalecelle; i++) {


        // Creo cella 
        const cella = creatCell(i)


        // Appendo la cella alla griglia
        griglia.appendChild(cella)




        // Al click sulla cella, stampiamo il numero della cella cliccata i
        // n console, poi coloriamo la cella d'azzurro!


        //  # MILESTONE 1
        // Prepariamo "qualcosa" per tenere il punteggio dell'utente.
        // Quando l'utente clicca su una cella, incrementiamo il punteggio.
        // Se riusciamo, facciamo anche in modo da non poter più cliccare la stessa cella.



        cella.addEventListener('click', function (event) {


            //             # MILESTONE 3
            // Quando l'utente clicca su una cella, verifichiamo se ha calpestato una bomba,
            //  controllando se il numero di cella è presente nell'array di bombe. Se si, la cella diventa rossa 
            // (raccogliamo il punteggio e e scriviamo in console che la partita termina
            // ) altrimenti diventa azzurra e dobbiamo incrementare il punteggio.

            if (event.target.classList.contains("clicked")) {
                return;
            } else {
                // Aggiungo "Clicked" alla cella
                event.target.classList.add("clicked");
                // Stampo il numero della cella cliccata in console
                console.log("Cell: " + event.target.innerText);

                // Verifico se l'utente ha cliccato una Bomba o meno
                if (bombe.includes(parseInt(event.target.innerText))) {
                    event.target.classList.add("bomb");
                    console.log("BOMBA, Hai perso mi dispiace")
                } else {
                    event.target.classList.add("nobomb");
                    console.log("SALVO,Continua così")
                    // Aumento di 1 il punteggio utente
                    risultato++;
                    contatore.innerText = `Punteggio: ${risultato}`;
                    console.log("il tuo risultato è" + risultato)
                }

            }

        })
    }
})









