var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid white }";
  document.body.appendChild(css);
};

var mat = document.querySelector(".matematyka");
var fiz = document.querySelector(".fizyka");
var niem = document.querySelector(".niemiecki");
var ang = document.querySelector(".angielski");
var inny = document.querySelector(".inny");
var infor = document.querySelector(".informatyka");
var boksy_all = document.querySelectorAll(".opis");
backgrounds = [mat, fiz, ang, inny, infor, niem];

function lighton(e) {
  boksy_all.forEach((elem) => {
    elem.style.display = "none";
  });
  if ($(window).width() > 768) {
    e.stopPropagation();
    let przedmiot = e.currentTarget.classList.item(4);
    let boks = ".opis.".concat(przedmiot);
    let boks_elem = document.querySelector(boks);
    if (e.currentTarget.classList.contains("clicked")) {
      e.currentTarget.classList.remove("clicked");
      document.querySelector(".opis.przedmioty").style.display = "initial";
    } else {
      backgrounds.forEach((elem) => {
        elem.classList.remove("clicked");
      });
      e.currentTarget.classList.add("clicked");
      boks_elem.style.display = "initial";
    }
  } else {
    if (e.currentTarget.classList.contains("clicked")) {
      e.currentTarget.classList.remove("clicked");
    } else {
      backgrounds.forEach((elem) => {
        elem.classList.remove("clicked");
      });
      e.currentTarget.classList.add("clicked");
    }
    document.querySelector(".opis.przedmioty").style.display = "initial";
  }
}

mat.addEventListener("click", lighton);
fiz.addEventListener("click", lighton);
ang.addEventListener("click", lighton);
inny.addEventListener("click", lighton);
infor.addEventListener("click", lighton);
niem.addEventListener("click", lighton);

document.querySelector("body").addEventListener("click", (e) => {

  backgrounds.forEach((elem) => {
    elem.classList.remove("clicked");
  });

  boksy_all.forEach((elem) => {
    elem.style.display = "none";
  });
  document.querySelector(".opis.przedmioty").style.display = "initial";
});