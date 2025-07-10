class Utente {
    constructor(cognome, nome, matricola) {
        this.cognome = cognome;
        this.nome = nome;
        this.matricola = matricola;
    }
}

let user = new Utente();

let cognome = document.querySelector("#cognome");
let nome = document.querySelector("#nome");
let matricola = document.querySelector("#matricola");
let send = document.querySelector("#invia");
let res = document.querySelector("#reset");
let utenteLS = document.querySelector("#utentiLS");
let resLS = document.querySelector("#resetLS");
let demo = document.querySelector("#demo");

function invia() {
    user.cognome = cognome.value;
    user.nome = nome.value;
    user.matricola = matricola.value;

    console.log(user);
    demo.innerHTML = `Cognome: ${user.cognome} <br> Nome: ${user.nome} <br> Matricola: ${user.matricola}`;
}
send.addEventListener("click", function (e) {
    e.preventDefault();
    invia();
});

function reset() {
    cognome.value = "";
    nome.value = "";
    matricola.value = "";

    demo.innerHTML = "";
    console.log("Form resettato");
}
res.addEventListener("click", function (e) {
    e.preventDefault();
    reset();
});

function inviaLS() {
    localStorage.setItem("utente", JSON.stringify(new Utente(cognome.value, nome.value, matricola.value)));
    console.log("Utente inserito correttamente");
    
    let utenteConnesso = JSON.parse(localStorage.getItem("utente")); //ATT: sto recuperando una strintga
    console.log(utenteConnesso);
}
utenteLS.addEventListener("click", function (e) {
    e.preventDefault();
    inviaLS();
});

function resetLS() {
    localStorage.clear();
    console.log("LocalStorage resettato");
}
resLS.addEventListener("click", function (e) {    
    e.preventDefault();
    resetLS();
});