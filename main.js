const syotettyNimi = document.querySelector("#nimi input");
const listanTulostus = document.querySelector("#nimet");
const lista = [];
let laskuri =0;

document.getElementById("#form button").addEventListener("submit", listalle);
document.getElementById("#form button2").addEventListener("submit", listaltaPois)

function listalle(event) {
    event.preventDefault();

    //Kenttä tyhjä vai ei. Jos ei niin lisää arrayyn
    if (syotettyNimi.value.length < 1) {
        return alert("Kenttä tyhjä! Syötä nimi");

    } if (lista.length >= 10) {
        alert("Lista täynnä!");

    } else {
        lista[laskuri++] = syotettyNimi.value;
        lisaa();

    }
}

function lisaa() {
    listanTulostus.innerHTML = "";
    lista.forEach(n => { 
        let li = document.createElement("li");
        li.innerHTML = n;
        listanTulostus.appendChild(li);
    });

}

function listaltaPois(event) {
    event.preventDefault();

    lista.forEach(poista);
    
}

function poista(syotettyNimi) {
    listanTulostus.innerHTML = "";

}