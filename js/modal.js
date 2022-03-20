const modalBtn = document.querySelectorAll('.more'),
      modal = document.querySelector('.modal'),
      modalBtnClose = modal.querySelector('.modal__close'),
      overlay = modal.querySelector('.overlay');

modalBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });
});

overlay.addEventListener('click', () => {
    modal.classList.add('hidden');
});

modalBtnClose.addEventListener('click', () => {
    modal.classList.toggle('hidden');
});