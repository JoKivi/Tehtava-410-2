const syotettyNimi = document.querySelector("#nimi input");
const listanTulostus = document.querySelector("#nimet");
let lista = [];
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
        tulosta();
    }
}

function listaltaPois(event) {
    event.preventDefault();

    if (syotettyNimi.value.length < 1) {
        return alert("Kenttä tyhjä! Syötä nimi");

    } if (lista.length >= 10) {
        alert("Lista täynnä!");

    } else {
        const suodatettuLista = lista.filter(nimi => {
            return nimi != syotettyNimi;
        }) 
        lista[laskuri--] = suodatettuLista;
        tulosta();
    }
}

function tulosta() {
    listanTulostus.innerHTML ="";
    lista.forEach(name => { 
        let li = document.createElement("li");
        li.innerHTML = name;
        listanTulostus.appendChild(li);
    });
}

