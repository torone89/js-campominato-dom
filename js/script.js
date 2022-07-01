
// VERIFICA COLLEGAMENTO JAVA
console.log("JS")

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
    let cell;

    switch (selezione) {
        case 'easy': riga = 10
            cell = 10
            // code block
            break;
        case 'medium': riga = 9
            cell = 9
            // code block
            break;
        case 'hard': riga = 7
            cell = 7
            break
        // code block
    }

    const totalecelle = riga * cell

    // FUNZIONE

    // Gebertore Celle
    function creatCell(numero, cellaPerRiga) {
        const celle = document.createElement('div');
        celle.className = 'cella';
        celle.innerText = numero
        // Calcolare le misure delle celle
        const side = `calc(100% / ${cellaPerRiga} - 1px)`
        celle.style.height = side;
        celle.style.width = side;

        return celle;
    }
    // // FUNZIONE
    // Genero 16 bombe tramite un ciclo FOR e le inserisco nell'Array Bombs
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


        // Creo cella  (Passo i valori alla funzione  dal ciclo I per numero , 
        //   e cell Cellperiga della funzione)

        const cella = creatCell(i, cell)

        // Appendo la cella alla griglia
        griglia.appendChild(cella)

        cella.addEventListener('click', function (event) {


            //             # MILESTONE 1/3
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
                    // Aumento di 1 il punteggio utente e Calcolo il punteggio
                    risultato++;
                    contatore.innerText = `Punteggio: ${risultato}`;
                    console.log("il tuo risultato è" + risultato)
                }

                // Decreto la vittoria se finisco le celle o la Sconfitta se piglio la Bomba
                if (risultato === totalecelle.length - bombe.length) {
                    alert('hai vinto')
                } else if (event.target.classList.contains("bomb")) { alert("Mi dispiace hai perso") }
            }

        })
    }
})









