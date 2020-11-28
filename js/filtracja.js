var przedmiot = document.querySelector(".przedmiot");
var korepetytor = document.querySelectorAll(".korepetytor");
przedmiot.addEventListener("change", wyswietl);




function wyswietl(e) {
    let przed = przedmiot.value;



    for (i = 0; i < korepetytor.length; i++) {
        if (korepetytor[i].classList.contains(przed))
        {
            korepetytor[i].classList.remove("d-none");
            korepetytor[i].classList.add("d-initial");
        }
        else if (przed=="dowolny"){
             korepetytor[i].classList.remove("d-none");
            korepetytor[i].classList.add("d-initial");
        }
        
        else {
            korepetytor[i].classList.remove("d-initial");
            korepetytor[i].classList.add("d-none");
        }
    }




}


