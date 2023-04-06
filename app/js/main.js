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

  };

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

  // button socialmedia
  const socialmediaBtnOpen = document.querySelector('.sociamedia__btn-open'),
    socialmediaBtnClose = document.querySelector('.sociamedia__btn-close'),
    sociamediaList = document.querySelector('.sociamedia__list');

  socialmediaBtnOpen.addEventListener('click', () => {
    sociamediaList.classList.add('active');
    socialmediaBtnOpen.classList.add('active');
    socialmediaBtnClose.classList.add('active');
  });

  socialmediaBtnClose.addEventListener('click', () => {

    sociamediaList.classList.remove('active');
    socialmediaBtnOpen.classList.remove('active');
    socialmediaBtnClose.classList.remove('active');
  });

  // spoiler
  const spoilerContent = document.querySelectorAll(".spoiler__content");

  spoilerContent.forEach((item) => {
    let spoilerHead = item.querySelector(".spoiler__head");
    spoilerHead.addEventListener("click", () => {
      item.classList.toggle("open");

      let spoilerArrow = item.querySelector(".spoiler__icon"),
        spoilerDescr = item.querySelector(".spoiler__descr");

      spoilerArrow.classList.toggle("open");

      if (item.classList.contains("open")) {
        spoilerDescr.style.height = `${spoilerDescr.scrollHeight}px`;
        spoilerDescr.classList.add('active');
      } else {
        spoilerDescr.style.height = "0px";
        spoilerDescr.classList.remove('active');
      }
    });

  });





  // tabs

  const tabs = document.querySelectorAll('.tabs__head-item'),
    tabsContent = document.querySelectorAll('.tabs__content-item'),
    tabsParent = document.querySelector('.tabs__head');
  // Нужно скрыть все ненужные нам табы
  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show');
    });

    tabs.forEach(tab => {
      tab.classList.remove('tabs__head-item--active');
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabs__head-item--active');
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('tabs__head-item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });



  // filter

  const filterList = document.querySelector('.filter-list'),
    items = document.querySelectorAll('.filter-list__block'),
    filterListItems = document.querySelectorAll('.filter-list__item');

  function filter() {

    filterList.addEventListener('click', (event) => {
      const targetId = event.target.dataset.id;

      const target = event.target;

      if (target.classList.contains('filter-list__item')) {
        filterListItems.forEach(listItem => {
          listItem.classList.remove('active');

        });
      }
      target.classList.add('active');

      switch (targetId) {
        case 'all':
          getItems('filter-list__block');
          break;
        case 'shop':
          getItems(targetId);
          break;

        case 'landing':
          getItems(targetId);
          break;

        case 'business':
          getItems(targetId);
          break;

        case 'design':
          getItems(targetId);
          break;
        case 'other':
          getItems(targetId);
          break;
      }
    });
  }

  filter();

  function getItems(className) {
    items.forEach(item => {
      if (item.classList.contains(className)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }




































});
