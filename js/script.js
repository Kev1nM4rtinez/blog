'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');


// navToggle function
const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);



// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');


for (let i = 0; i < themeBtn.length; i++) {

  themeBtn[i].addEventListener('click', function () {

    // toggle `light-theme` & `dark-theme` class from `body`
    // when clicked `theme-btn`
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    for (let i = 0; i < themeBtn.length; i++) {

      // When the `theme-btn` is clicked,
      // it toggles classes between `light` & `dark` for all `theme-btn`.
      themeBtn[i].classList.toggle('light');
      themeBtn[i].classList.toggle('dark');

    }

  })

}
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header'); // Selecciona el header
    if (window.scrollY > 50) { // Cambia el valor 50 según lo que necesites
      header.classList.add('header-scrolled'); // Agrega la clase
    } else {
      header.classList.remove('header-scrolled'); // Quita la clase
    }
  });

  // Selecciona el botón "Leer más"
  const loadMoreButton = document.querySelector('.load-more');
  // Selecciona las tarjetas ocultas
  const hiddenCards = document.querySelectorAll('.blog-card-large.hidden');

  // Maneja el evento click en el botón "Leer más"
  loadMoreButton.addEventListener('click', () => {
    // Muestra cada tarjeta oculta
    hiddenCards.forEach(card => {
      card.classList.remove('hidden');
    });

    // Opcional: oculta el botón "Leer más" si no hay más tarjetas ocultas
    if (hiddenCards.length > 0) {
      loadMoreButton.style.display = 'none'; // Oculta el botón si no hay más tarjetas
    }
  });
