const tabBtns = document.querySelectorAll('.design-list__item'),
      tabDescrs = document.querySelectorAll('.design__descr'),
      tabImgs = document.querySelectorAll('.design-images'),
      tabTitle = document.querySelectorAll('.design__title'),
      tabTitleImg = document.querySelectorAll('.design-block__img');


const changeContent = (array, value) => {
    array.forEach(e => {
        if (e.dataset.tabsField === value) {
            e.classList.remove('hidden');
        } else {
            e.classList.add('hidden');
        }
    });
};

tabBtns.forEach(tabBtn => {
    tabBtn.addEventListener('click', (event) => {
        const dataValue = tabBtn.dataset.tabsHandler;

        tabBtns.forEach((btn) => {
            if (btn === event.target) {
                btn.classList.add('design-list__item_active');
            } else {
                btn.classList.remove('design-list__item_active');
            }
        });

        changeContent(tabTitle, dataValue);
        changeContent(tabTitleImg, dataValue);
        changeContent(tabImgs, dataValue);
        changeContent(tabDescrs, dataValue);
    });
});

