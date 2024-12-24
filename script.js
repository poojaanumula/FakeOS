const startIcon = document.getElementsByClassName('bottom--start--icon__text');
const menu = document.getElementsByClassName('menu');
startIcon.addEventListener('click', openMenu)
const openMenu= ()=>{
    menu.style.display = "block"
}