var przedmiot = document.querySelector(".przedmiot");
var bufor = document.querySelector(".bufor");
przedmiot.addEventListener("change", wyswietl);
var korepetytor = document.querySelectorAll(".korepetytor");

function laduj() {
    let przed = przedmiot.value;
    bufor.classList.remove("d-initial");
    bufor.classList.add("d-none");
    for (i = 0; i < korepetytor.length; i++) {
        if (korepetytor[i].classList.contains(przed)) {
            korepetytor[i].classList.remove("d-none");
            korepetytor[i].classList.add("d-initial");
        } else if (przed == "dowolny") {
            korepetytor[i].classList.remove("d-none");
            korepetytor[i].classList.add("d-initial");
        } else {
            korepetytor[i].classList.remove("d-initial");
            korepetytor[i].classList.add("d-none");
        }
    }

}

function wyswietl(e) {
    korepetytor = document.querySelectorAll(".korepetytor");
    for (i = 0; i < korepetytor.length; i++) {
        korepetytor[i].classList.remove("d-initial");
        korepetytor[i].classList.add("d-none");
    }
    bufor.classList.remove("d-none");
    bufor.classList.add("d-initial");


    setTimeout(laduj, 700);


}