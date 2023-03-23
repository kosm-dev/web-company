// Получаем все дропдауны

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