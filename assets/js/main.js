/*L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.*/


//L'utente indica un livello di difficoltà
const user_choice_difficult = parseInt(prompt("Inserisci un livello di difficoltà compreso tra 1 e 3:"));
//console.log(user_choice_difficult);

let cell_number;
if (user_choice_difficult == 1) {
    cell_number = 100;
} else if (user_choice_difficult == 2) {
    cell_number = 81;
} else if (user_choice_difficult == 3) {
    cell_number = 49;
}

console.log(cell_number);

const containerElement = document.querySelector(".container")

function createGrid(cell_number) {
    for (let i = 0; i < cell_number; i++) {
        let gridElement = document.createElement("div");
        gridElement.className = "grid_cell"
        containerElement.append(gridElement)

    }
}

createGrid(cell_number)