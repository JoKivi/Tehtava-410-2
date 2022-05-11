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
        lista[laskuri--] = syotettyNimi.value;
        const suodatettuLista = lista.filter(nimi => {
            return nimi != syotettyNimi;
        })        
        tulosta();
    }

    function tulosta() {
        listanTulostus.innerHTML ="";
        lista.forEach(n => { 
            let li = document.createElement("li");
            li.innerHTML = n;
            listanTulostus.appendChild(li);
        });
    }
}

