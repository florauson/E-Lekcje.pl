var r_przed = document.querySelector("select[name='przedmiot']");
var ilosc = document.querySelector('#ilosc');
var cena = document.querySelector('#cena');
var cena_poj = document.querySelector('#cena_poj');
r_przed.addEventListener('change', oblicz);
ilosc.addEventListener('change', oblicz);
ilosc.addEventListener('keyup', oblicz);
var cena_podstawowy = 45;
var cena_specjalny = 57;

function oblicz(e) {
  if (r_przed.value == 'pod') {
    cena_poj.value = cena_podstawowy;
    cena.value = cena_podstawowy * ilosc.value;
  } else if (r_przed.value == 'spec') {
    cena_poj.value = cena_specjalny;
    cena.value = cena_specjalny * ilosc.value;
  }
}
