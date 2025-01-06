// function to open a menu
const openMenu= ()=>{
    //menu.classList.toggle('show')
    menu.style.display = "block"
}
const startIcon = document.querySelector(".bottom--start--icon");
const menu = document.querySelector(".menu");
const show= document.querySelector('.show')
const hide = document.querySelector('.hide')

// calling openMenu function to open menu 
startIcon.addEventListener('click', openMenu)


// to close menu if we click

const closeMenu = document.querySelector('#menuCloseSpan')
closeMenu.addEventListener('click', ()=>{
    if(menu.style.display="block")
    {
        menu.style.display="none"
    }
})

const showTime = document.querySelector(".showTime")

// Defining Api function..
 const myApi = async()=>{
    try{
        const res = await fetch(`https://timeapi.io/api/time/current/zone?timeZone=Australia%2FSydney`);
        if (!res.ok) {
            throw new Error("Cannot get data");
        }
        const data = await res.json();
        const finalTime = new Date(data.dateTime).toLocaleTimeString(); // Convert to a readable time format
        showTime.textContent = finalTime; // Set the time in the HTML
    }
    catch(error){
        console.error("Error fetching time:", error);
        showTime.textContent = "Error fetching time";
    }
}
//Calling API for displaying Time
myApi()

const modal = document.querySelector('.modal')
const close= document.querySelector('.close')
const titleDisc = document.querySelector('.titleDescription')
close.addEventListener('click', ()=>{
modal.style.display="none"
})

// declaring myFunc to dynamically display content in modal.
function myfunc(a,b){
    const text =  document.querySelector('.text');
    text.textContent = `${a}`
    modal.style.display= "block"
    titleDisc.textContent = `${b}`
}
