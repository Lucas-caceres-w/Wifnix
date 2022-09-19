const modal = document.querySelector(".modal-contact"),
  describ2 = document.querySelector(".descripcion2"),
  describ = document.querySelector(".descripcion"),
  text = document.querySelector(".text-contact"),
  titulo = document.querySelectorAll(".titulo"),
  texten = document.querySelector(".textarrow"),
  img = document.querySelector(".img-portada"),
  contact = document.querySelector(".contact"),
  español = document.querySelectorAll(".es"),
  languaje = document.querySelector(".lang"),
  ingles = document.querySelectorAll(".en"),
  arrow = document.querySelector(".arrow"),
  PR = document.querySelector(".prflag");
  US = document.querySelector(".usflag");

const Cerrar = () => {
  modal.classList.remove("visible");
  text.textContent = "CONTÀCTENOS";
};

const Modal = () => {
  modal.classList.toggle("visible");
  modal.style.transform = "scale(1.05)";
  img.style.transform = "scale(.9)";
  describ.style.opacity = "0";
  describ2.style.opacity = "0";
  arrow.style.transform = "rotate(0)";
  if (innerWidth < 500) {
    contact.style.marginTop = "100px";
  }
  if (innerWidth > 1000) {
    anime({
      targets: titulo,
      translateX: -100,
      rotate: -90,
      scale: 0.6,
      easing: "easeInOutQuad",
      duration: 300,
    });
  }
  if (innerWidth > 1200) {
    anime({
      targets: titulo,
      translateX: -150,
      rotate: -90,
      scale: 0.6,
      easing: "easeInOutQuad",
      duration: 300,
    });
  }
  if (texten.textContent == "CONTACT US") {
    if (innerWidth < 600) {
      texten.textContent = " ";
    } else {
      texten.textContent = "BACK";
    }
  }
  if (text.textContent == "CONTÁCTENOS") {
    if (innerWidth < 600) {
      text.textContent = " ";
    } else {
      text.textContent = "VOLVER";
    }
  } else {
    texten.textContent = "CONTACT US";
    modal.style.transform = "scale(.9)";
    img.style.transform = "scale(1)";
    text.textContent = "CONTÁCTENOS";
    describ.style.opacity = "1";
    describ2.style.opacity = "1";
    arrow.style.transform = "rotate(180deg)";
    contact.style.margin = "0";
    anime({
      targets: titulo,
      translateX: 0,
      rotate: 0,
      scale: 1,
      easing: "easeInOutQuad",
      duration: 300,
    });
  }
};

const Languaje = () => {
  languaje.classList.toggle("idioma");
  español.forEach((en) => {
    if (en.style.display === "none") {
      en.style.display = "block";
      location.hash = "lang?es";
      PR.style.marginTop = "40px";
      US.style.marginTop = "0";
    } else {
      en.style.display = "none";
      PR.style.marginTop = "0";
      US.style.marginTop = "40px";
    }
  });

  ingles.forEach((es) => {
    if (es.style.display === "block") {
      es.style.display = "none";
    } else {
      es.style.display = "block";
      location.hash = "lang?en";
    }
  });
};

document.addEventListener("click", (e) => {
  if (e.target.matches(".contact")) {
    e.stopPropagation();
    Modal();
  }
  if (e.target.matches(".close")) {
    e.stopPropagation();
    Modal();
  }
  if (e.target.matches(".lang")) {
    Languaje();
  }
});
