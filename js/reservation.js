var mat = document.querySelector(".matematyka");
var fiz = document.querySelector(".fizyka");
var niem = document.querySelector(".niemiecki");
var ang = document.querySelector(".angielski");
var lac = document.querySelector(".lacina");
var geo = document.querySelector(".geografia");
var bio = document.querySelector(".biologia");
var chem = document.querySelector(".chemia");
var pol = document.querySelector(".polski");
var button = document.querySelector(".but_reserv");
var poziom = document.querySelector(".poziom");
var brak = document.querySelector(".brak");
// var clicked = document.querySelector(".poziom");
backgrounds = [mat, fiz, ang, lac, geo, niem, bio, chem, pol];
var wybrana;
var adres = "https://rezerwacja.e-lekcje.com/wizyta/krok3//";
// [ 0,       1,         2,       3,      4,        5,       6]
// [probna, podstawowa, liceum, lic-pod, lic-roz, studia, indywidualny]
// [ 0,       1,         2,       3,      4,          5,       ]
// [probna, podstawowa, lic-pod, lic-roz, studia, indywidualny]
var bio_adr = ["7742", "7723", "0", "7668", "7737", "0"];
var chem_adr = ["7741", "7738", "0", "7739", "7740", "0"];
var mat_adr = ["7758", "7667", "7721", "7768", "0", "0"];
var fiz_adr = ["7772", "7769", "0", "7770", "7771", "0"];
var geo_adr = ["7775", "7774", "0", "7776", "0", "0"];
var lac_adr = ["7784", "0", "0", "7783", "7785", "7786"];
var pol_adr = ["7793", "7794", "7795", "7796", "7798", "7797"];
var ang_adr = ["7777", "7778", "7779", "7780", "7781", "7782"];
var niem_adr = ["7787", "7788", "7789", "7790", "0", "7792"];
var wys = "display:initial;";
var nie_wys = "display:none;";
var adr2;

function lighton(e) {
  poziom.value = "wybierz";
  poziom.options[1].style = nie_wys;
  poziom.options[2].style = nie_wys;
  poziom.options[3].style = nie_wys;
  poziom.options[4].style = nie_wys;
  poziom.options[5].style = nie_wys;
  poziom.options[6].style = nie_wys;

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
    switch (przedmiot) {
      case "biologia":
        wybrana = bio_adr;
        poziom.options[1].style = wys;
        poziom.options[2].style = wys;
        poziom.options[4].style = wys;
        poziom.options[5].style = wys;
        break;
      case "chemia":
        wybrana = chem_adr;
        poziom.options[1].style = wys;
        poziom.options[2].style = wys;
        poziom.options[4].style = wys;
        poziom.options[5].style = wys;
        break;
      case "matematyka":
        wybrana = mat_adr;
        poziom.options[1].style = wys;
        poziom.options[2].style = wys;
        poziom.options[3].style = wys;
        poziom.options[4].style = wys;
        // poziom.options[5].style = wys;
        break;
      case "fizyka":
        wybrana = fiz_adr;

        poziom.options[1].style = wys;
        poziom.options[2].style = wys;
        poziom.options[4].style = wys;
        // poziom.options[5].style = wys;
        break;
      case "geografia":
        wybrana = geo_adr;
        poziom.options[1].style = wys;
        poziom.options[2].style = wys;
        poziom.options[4].style = wys;

        break;
      case "lacina":
        wybrana = lac_adr;
        poziom.options[1].style = wys;
        poziom.options[4].style = wys;
        poziom.options[5].style = wys;
        poziom.options[6].style = wys;
        break;
      case "polski":
        wybrana = pol_adr;
        poziom.options[1].style = wys;
        poziom.options[2].style = wys;
        poziom.options[3].style = wys;
        poziom.options[4].style = wys;
        poziom.options[5].style = wys;
        poziom.options[6].style = wys;
        break;
      case "angielski":
        wybrana = ang_adr;
        poziom.options[1].style = wys;
        poziom.options[2].style = wys;
        poziom.options[3].style = wys;
        poziom.options[4].style = wys;
        poziom.options[5].style = wys;
        poziom.options[6].style = wys;
        break;
      case "niemiecki":
        wybrana = niem_adr;
        poziom.options[1].style = wys;
        poziom.options[2].style = wys;
        poziom.options[3].style = wys;
        poziom.options[4].style = wys;
        poziom.options[6].style = wys;
        break;
      default:
        break;
    }
  }
}

function wyswietl(e) {
  let sprawdz = backgrounds.some((elem) => {
    return elem.classList.contains("clicked");
  });
  let elem = document.querySelector(".clicked");

  switch (poziom.value) {
    case "probna":
      adr2 = wybrana[0];
      break;
    case "podstaw":
      adr2 = wybrana[1];
      break;
    case "liceum_pod":
      adr2 = wybrana[2];
      break;
    case "liceum_roz":
      adr2 = wybrana[3];
      break;
    case "studia":
      adr2 = wybrana[4];
      break;
    case "indyw":
      adr2 = wybrana[5];
      break;
    case "wybierz":
      adr2 = "0";
      break;
  }

  let fin_adres = adres.concat(adr2);
  button.setAttribute("href", fin_adres);

  if (poziom.value != "wybierz" && sprawdz && adr2 != "0") {
    button.style.display = "inline-block";
    brak.style.display = "none";
  } else if (adr2 == "0" && poziom.value != "wybierz") {
    brak.style.display = "initial";
    button.style.display = "none";
  } else if (adr2 == "0" && poziom.value == "wybierz" && !sprawdz) {
    button.style.display = "none";
    brak.style.display = "none";
  } else {
    button.style.display = "none";
    brak.style.display = "none";
  }
}

// function make_adres(e) {
//     let elem = document.querySelector(".clicked");
//     let przedmiot = elem.classList.item(4);

//     switch (poziom.value) {
//         case 'probna':
//             adr2 = wybrana[0];
//             break;
//         case 'podstaw':
//             adr2 = wybrana[1];
//             break;
//         case 'liceum':
//             adr2 = wybrana[2];
//             break;
//         case 'liceum_pod':
//             adr2 = wybrana[3];
//             break;
//         case 'liceum_roz':
//             adr2 = wybrana[4];
//             break;
//         case 'studia':
//             adr2 = wybrana[5];
//             break;
//         case 'podstawowy':
//             adr2 = wybrana[1];
//             break;
//         case 'rozszerzony':
//             adr2 = wybrana[2];
//             break;
//         case 'indyw':
//             adr2 = wybrana[6];
//             break;
//     }

//     let fin_adres = adres.concat(adr2);
//     button.setAttribute("href", fin_adres);
// }

mat.addEventListener("click", lighton);
fiz.addEventListener("click", lighton);
ang.addEventListener("click", lighton);
lac.addEventListener("click", lighton);
geo.addEventListener("click", lighton);
niem.addEventListener("click", lighton);
bio.addEventListener("click", lighton);
chem.addEventListener("click", lighton);
pol.addEventListener("click", lighton);

mat.addEventListener("click", wyswietl);
fiz.addEventListener("click", wyswietl);
ang.addEventListener("click", wyswietl);
lac.addEventListener("click", wyswietl);
geo.addEventListener("click", wyswietl);
niem.addEventListener("click", wyswietl);
bio.addEventListener("click", wyswietl);
chem.addEventListener("click", wyswietl);
pol.addEventListener("click", wyswietl);
poziom.addEventListener("change", wyswietl);
// button.addEventListener("mouseenter", make_adres);

// document.querySelector("body").addEventListener("click", (e) => {

//     backgrounds.forEach((elem) => {
//         elem.classList.remove("clicked");
//     });
//     boksy_all.forEach((elem) => {
//         elem.style.display = "none";
//     });
//     document.querySelector(".opis.przedmioty").style.display = "initial";
// });