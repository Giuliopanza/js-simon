const numeri = document.getElementById("numbers-list")

let numbers = []

const numin = document.getElementsByClassName("form-control")

function numrandom(min, max) {

    Math.floor(Math.random() * max) + min ;
    
}

for (let i = 0; numbers.length < 5; i++) {

    let numerorand = numrandom(1, 50) ;

    if (!(numbers.includes(numerorand))) {

        numbers.push(numerorand)
        
    }

}

for (let i = 0; i < numbers.length; i++) {
    
    numeri.innerHTML += `<li>${ numbers (i)}<li>`
    
}

const countdown = document.getElementById("countdown")

let istr = document.getElementById("instructions")

let containerafter = document.getElementById("answers-form")

let counter = 30

const timer = setInterval(function(){

    countdown.innerHTML = counter--

    if (counter < 0){
        clearInterval (timer)

        istr.className = 'd-none';

        numeri.className = 'd-none';

        containerafter.className = `d-block`;
    }
    
}, 1000);

let p = document.getElementById("message")

let btn = document.querySelector(".btn")

let win = []

btn.addEventListener(`click`, function(event){

    event.preventDefault()

    for (let i = 0; i < numin.length; i++) {
        
        if (numbers.includes( parseInt(numin[i].value))) {

            win.push(parseInt(numin[i].value))
            
        }
        
    }

    if (win.length > 0) {

        p.textContent = `Hai ricordato ${win.length} numeri e i numeri sono ${win}`

    } else {

        p.textContent = `Non hai ricordato nulla`    

    }

})