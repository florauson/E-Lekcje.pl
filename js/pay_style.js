var r_przed = document.querySelector("select[name='przedmiot']");
var ilosc = document.querySelector("#ilosc");
var cena = document.querySelector("#cena");
var znizka = document.querySelector("#znizka");
var cena_poj = document.querySelector("#cena_poj");
var do_zap = document.querySelector("#do_zap");
r_przed.addEventListener("change", oblicz);
ilosc.addEventListener("change", oblicz);
ilosc.addEventListener("keyup", oblicz);
var cena_podstawowy = 59;
var cena_specjalny = 69;

function oblicz(e) {
  if (r_przed.value == "pod") {
    cena_poj.value = cena_podstawowy;

    if (ilosc.value >= 5) {
      znizka.value = itlosc.value * 5;
    } else {
      znizka.value = 0;
    }

    cena.value = cena_poj.value * ilosc.value;
    do_zap.value = cena.value - znizka.value;
  } else if (r_przed.value == "spec") {
    cena_poj.value = cena_specjalny;
    if (ilosc.value >= 5) {
      znizka.value = ilosc.value * 5;
    } else {
      znizka.value = 0;
    }

    cena.value = cena_poj.value * ilosc.value;
    do_zap.value = cena.value - znizka.value;
  }
  // else if (r_przed.value == 'inny') {
  //   cena_poj.removeAttribute("readonly");
  //   if (ilosc.value >= 5) {
  //     znizka.value = (ilosc.value * 5);
  //   } else {
  //     znizka.value = 0;
  //   }

  //   cena.value = cena_poj.value * ilosc.value;
  //   do_zap.value = cena.value - znizka.value;

  // }
}
