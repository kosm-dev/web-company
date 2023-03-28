"use strict";
document.addEventListener("DOMContentLoaded", () => {


  // dropdowns
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select'),
      caret = dropdown.querySelector('.caret'),
      menu = dropdown.querySelector('.menu'),
      options = dropdown.querySelectorAll('.menu li'),
      selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
      select.classList.toggle('select-clicked');
      caret.classList.toggle('caret-rotate');
      menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
      option.addEventListener('click', () => {
        selected.innerText = option.innerText;

        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');

        options.forEach(option => {
          option.classList.remove('active');
        });
        option.classList.add('active');
      });
    });
  });

  // button ontop

  const onTop = document.querySelector(".ontop__btn"),
    header = document.querySelector(".header");

  window.onscroll = () => {
    if (window.scrollY > 700) {
      onTop.classList.remove('ontop__btn-hide');
    }
    if (window.scrollY > 0) {
      header.classList.add('header--scroll');
    }
    else if (window.scrollY < 700) {
      onTop.classList.add('ontop__btn-hide');
      header.classList.remove('header--scroll');
    }
    
  }

  onTop.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });

  // burger-menu

  const burger = document.querySelector('.burger'),
    menu = document.querySelector('.header__menu'),
    body = document.querySelector('body'),
    langMobile = document.querySelector('.language-mobile'),
    socialsMobile = document.querySelector('.socials-mobile');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__menu--active');
    body.classList.toggle('lock');
    langMobile.classList.toggle('language-mobile--active');
    socialsMobile.classList.toggle('socials-mobile--active');
  });










































});
