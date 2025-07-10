let mioForm = document.querySelector("#mioForm");
let destinazione = document.querySelector("destinazione");
let prezzo = document.querySelector("prezzo");
let disponibilita = document.querySelector("switchCheckDefault");

function inserisciViaggio(viaggio) {
    const URL = "http://localhost:3000/viaggi";

    fetch(URL)
        .then(data => {
            return data.json();
        })
        .then(response => {
            console.log(response.length);
            fetch(URL, {
                method: "POST"
            })
            .then()
        })
}



document.addEventListener("DOMContentLoaded", inserisciViaggio);