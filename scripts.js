const modal = document.querySelector(".modal-contact"),
  text = document.querySelector(".text-contact"),
  img = document.querySelector(".img-portada"),
  titulo = document.querySelectorAll(".titulo"),
  describ = document.querySelector(".descripcion"),
  describ2 = document.querySelector(".descripcion2"),
  languaje = document.querySelector(".lang"),
  español = document.querySelectorAll(".es"),
  ingles = document.querySelectorAll(".en"),
  arrow = document.querySelector('.arrow');

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
  arrow.style.transform = 'rotate(0)'
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
  if (text.textContent == "CONTÀCTENOS") {
    text.textContent = "VOLVER";
  } else {
    modal.style.transform = "scale(.9)";
    img.style.transform = "scale(1)";
    text.textContent = "CONTÀCTENOS";
    describ.style.opacity = "1";
    describ2.style.opacity = "1";
    arrow.style.transform = 'rotate(180deg)'
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

const href = location.pathname;

const Languaje = () => {
  languaje.classList.toggle("idioma");
  español.forEach((en) => {
    if (en.style.display === "none") {
      en.style.display = "block";
      location.hash = 'lang?es'
    } else {
      en.style.display = "none";
    }
  });
  
  ingles.forEach((es) => {
    if (es.style.display === "block") {
      es.style.display = "none";
    } else {
      es.style.display = "block";
      location.hash = 'lang?en'
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
