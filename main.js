const syotettyNimi = document.querySelector("#nimi input");
const listanTulostus = document.querySelector("#nimet");
let lista = [];

document.getElementById("button").addEventListener("click", listalle);
document.getElementById("button2").addEventListener("click", listaltaPois);
document.getElementById("button3").addEventListener("click", jarjesta);


function listalle(event) {
    event.preventDefault();
    
    if (testInput() === true) {
        lista.push(syotettyNimi.value);
        tulosta();
    }
}

function listaltaPois(event) {
    event.preventDefault();
    const suodatettuLista = lista.filter(nimi => {
        return nimi != syotettyNimi.value;
    }) 
    lista = suodatettuLista;
    tulosta();
}

function jarjesta(event) {
    event.preventDefault();
    lista.sort();
    tulosta();
}

function tulosta() {
    listanTulostus.innerHTML ="";
    lista.forEach(name => { 
        let li = document.createElement("li");
        li.innerHTML = name;
        listanTulostus.appendChild(li);
    });
}

function testInput() {
    if (syotettyNimi.value.length < 1) {
        alert("Kenttä tyhjä! Syötä nimi");
        return false;

    } if (lista.length >= 10) {
        alert("Lista täynnä!");
        return false;
    
    } else {
        return true;
    }
}
