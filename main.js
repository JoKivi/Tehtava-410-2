const syotettyNimi = document.querySelector("#nimi input");
const listanTulostus = document.querySelector("#nimet");
const lista = [];
let laskuri =0;

document.getElementById("button").addEventListener("click", listalle);
document.getElementById("button2").addEventListener("click", listaltaPois)

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

    if (syotettyNimi.value.length < 1) {
        return alert("Kenttä tyhjä! Syötä nimi");

    } if (lista.length >= 10) {
        alert("Lista täynnä!");

    } else {
        lista[laskuri--] = syotettyNimi.value;
        lista.forEach(n => {
            
        })        

    }

    
}

