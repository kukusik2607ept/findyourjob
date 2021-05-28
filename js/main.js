const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.navbar');
const closeMenuButton = document.querySelector('.close-button');

const toggleMenu = (event) => {
  menu.classList.toggle('is-open');
}

menuButton.addEventListener('click', (event) => {
  toggleMenu();
})

closeMenuButton.addEventListener('click', (event) => {
  toggleMenu();
})