const menuButton = document.getElementById('menu-button');
const menuElement = document.querySelector('.menu');
const menuBrand = document.querySelector('.menu__brand');
const categoriesTitle = document.querySelector('.categories');
const sideBar = document.querySelector('.sidebar');
const optionItem = document.querySelectorAll(".options__item__text");

menuButton.addEventListener('click', function(){
    menuElement.classList.toggle('hide-item-element');
    menuBrand.classList.toggle('hide-element')
    categoriesTitle.classList.toggle('hide-element');
    sideBar.classList.toggle('active');
    optionItem.forEach((item) => {
        item.classList.toggle('hide-element');
    })
    
})
