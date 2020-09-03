var mat = document.querySelector(".matematyka");
var fiz = document.querySelector(".fizyka");
var niem = document.querySelector(".niemiecki");
var ang = document.querySelector(".angielski");
var inny = document.querySelector(".inny");
var infor = document.querySelector(".informatyka");
var bio = document.querySelector(".biologia");
var chem = document.querySelector(".chemia");
var pol = document.querySelector(".polski");
var button = document.querySelector(".but_reserv");
var poziom = document.querySelector(".poziom");
// var clicked = document.querySelector(".poziom");
backgrounds = [mat, fiz, ang, inny, infor, niem, bio, chem, pol];
var wybrana;
var adres = "https://e-lekcje.asysto.pl/wizyta/krok3//"
var bio_adr = ["7723", "7668", "7737"];
var chem_adr = ["7741", "7738", "7739", "7740"];

function lighton(e) {


    e.stopPropagation();
    let przedmiot = e.currentTarget.classList.item(4);

    if (e.currentTarget.classList.contains("clicked")) {
        e.currentTarget.classList.remove("clicked");
        wybrany = null;
    } else {
        backgrounds.forEach((elem) => {
            elem.classList.remove("clicked");
        });
        e.currentTarget.classList.add("clicked");
    }

    switch (przedmiot) {
        case 'biologia':
            wybrana = bio_adr;
            break;
        case 'chemia':
            wybrana = chem_adr;
            break;
    }
}



function wyswietl(e) {
    let sprawdz = backgrounds.some(elem => {
        return elem.classList.contains("clicked");
    })

    if (poziom.value != "wybierz" && sprawdz)
        button.style.display = 'inline-block'
    else
        button.style.display = 'none'


}

function make_adres(e) {
    let elem = document.querySelector(".clicked");
    let przedmiot = elem.classList.item(4);

    let adr2;

    switch (poziom.value) {
        case 'probna':
            adr2 = wybrana[0];
            break;
        case 'podstaw':
            adr2 = wybrana[1];
            break;
        case 'liceum':
            adr2 = wybrana[2];
            break;
        case 'studia':
            adr2 = wybrana[3];
            break;
    }

    let fin_adres = adres.concat(adr2);
    button.setAttribute("href", fin_adres);
}

mat.addEventListener("click", lighton);
fiz.addEventListener("click", lighton);
ang.addEventListener("click", lighton);
inny.addEventListener("click", lighton);
infor.addEventListener("click", lighton);
niem.addEventListener("click", lighton);
bio.addEventListener("click", lighton);
chem.addEventListener("click", lighton);
pol.addEventListener("click", lighton);

mat.addEventListener("click", wyswietl);
fiz.addEventListener("click", wyswietl);
ang.addEventListener("click", wyswietl);
inny.addEventListener("click", wyswietl);
infor.addEventListener("click", wyswietl);
niem.addEventListener("click", wyswietl);
bio.addEventListener("click", wyswietl);
chem.addEventListener("click", wyswietl);
pol.addEventListener("click", wyswietl);
poziom.addEventListener("change", wyswietl);
button.addEventListener("mouseenter", make_adres);





// document.querySelector("body").addEventListener("click", (e) => {

//     backgrounds.forEach((elem) => {
//         elem.classList.remove("clicked");
//     });
//     boksy_all.forEach((elem) => {
//         elem.style.display = "none";
//     });
//     document.querySelector(".opis.przedmioty").style.display = "initial";
// });