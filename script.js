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




//calling form
const weatherInput = document.querySelector(".weather--input")
const searchBtn = document.querySelector(".search--btn")
const form = document.querySelector("form")
const showCity = document.querySelector(".showCity")
const showTemp = document.querySelector(".showTemp")
const showDesc = document.querySelector(".showDesc")
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
let city =weatherInput.value;
const cityName =city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()
console.log(cityName)
const myApi = async()=>{
    try{
        // https://timeapi.io/api/time/current/zone?timeZone=Australia%2FSydney
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b684260b3402287eb6ef73bb539697b2`);
        if (!res.ok) {
            throw new Error("Cannot get data");
        }
        const data = await res.json();
        console.log(data)
        showDesc.innerText = `Description: ` +data.weather[0].description;
        const tempInKel = data.main.temp;
        const tempInCel = tempInKel-273.15;
        showTemp.innerText = `Temperature in Celcius: `+tempInCel.toFixed(2);
        showCity.innerText = data.name + " City";
        
        //showTemp.innerText = data.wind.deg;
    }
    catch(error){
        console.error("Error fetching Data:", error);
        showDesc.innerText= "Error fetching time";

    }
}
myApi()
})

// Defining Api function..

//Calling API for displaying Time


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


//weather app opening.

const weatherImage= document.querySelector('.weather--icon')
weatherImage.addEventListener('dblclick', ()=>{
  form.style.display="block"
})

//input focus
weatherInput.addEventListener('focus',()=>{
    weatherInput.value = ""
    showCity.innerText = ""
    showDesc.innerText = ""
    showTemp.innerText = ""
})

//closing form
const formClose = document.querySelector('.formClose')
formClose.addEventListener('click', ()=>{
    form.style.display="none"
})