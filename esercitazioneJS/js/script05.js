let num1 = document.querySelector("#numero1");
let num2 = document.querySelector("#numero2");
let num3 = document.querySelector("#numero3");
let addizione = document.querySelector("#addizione");
let moltiplicazione = document.querySelector("#moltiplicazione");

let n1 = prompt("Inserisci il primo numero:");
let n2 = prompt("Inserisci il secondo numero:");
let n3 = prompt("Inserisci il terzo numero:");

num1.innerHTML = n1;
num2.innerHTML = n2;
num3.innerHTML = n3;

function somma() {
    let risultato = parseFloat(n1) + parseFloat(n2) + parseFloat(n3);
    addizione.innerHTML = `La somma tra i numeri è: ${risultato}`;
}

function moltiplica(){
    let risultato = parseFloat(n1) * parseFloat(n2) * parseFloat(n3);
    moltiplicazione.innerHTML = `Il prodotto tra i numeri è: ${risultato}`;
}