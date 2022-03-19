const burger = document.querySelector('.humburger-menu'),
      menu = document.querySelector('.menu'),
      menuList = document.querySelectorAll('.menu-list__item');

burger.addEventListener('click', () => {
    menu.classList.toggle('menu-active');
});

menuList.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.toggle('menu-active');    
    });
});

document.addEventListener('click', (e) => {
    if (!(e.target.closest('.menu') || e.target.closest('.humburger-menu'))) {
        menu.classList.remove('menu-active');
    }
});