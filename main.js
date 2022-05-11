const syotettyNimi = document.querySelector("#nimi input");
const virhe = document.querySelector(".virhe");
const listanTulostus = document.querySelector("#nimet");
const lista = [];
let laskuri =0;
const limit = 10;

document.getElementById("form").addEventListener("submit", listalleArray);

function listalleArray(event) {
    event.preventDefault();

    //Kenttä tyhjä vai ei. Jos ei niin lisää arrayyn
    if (syotettyNimi.value.length < 1) {
        return alert("Kenttä tyhjä! Syötä nimi");

    } if (lista.length >= 10) {
        alert("Lista täynnä!");

    } else {
        lista[laskuri++] = syotettyNimi.value;
        if (laskuri >= limit) {
            listaus();
        }
    }
}

function listaus() {
    listanTulostus.innerHTML = "";
    lista.forEach(n => { 
        let li = document.createElement("li");
        li.innerHTML = n;
        listanTulostus.appendChild(li);
    });

}