let istr = document.getElementById("instructions")

let numeri = document.getElementById("numbers-list")

let numero = {}

let containerafter = document.getElementById("answers-form")

let numin = document.getElementsByClassName("form-control")

let p = document.getElementsByClassName("message")

let btn = document.getElementsByClassName(`btn`)

for (let i = 1; i < 6; i++) {

    const li = document.createElement(`li`);

    numero [i] = Math.floor(Math.random() * 50) + 0 ;

    li.append(numero[i]);

    numeri.appendChild(li);
    
}

setTimeout(timer, 3000 );

function timer() {
    istr.className = 'd-none';

    numeri.className = 'd-none';

    containerafter.className = `d-block`;  

}

btn.addEventListener("click", function(){

    console.log (ciao)
    
    let win = {}

    for (let i = 0; i < numero.length; i++) {
        for (let x = 0; x < numin.length; x++) {
            if (numin[x] == numero[i]) {
                win[x] == numin [x]
            }
        
        }
    }

    if (win.length > 0) {
        p.textContent = `Hai ricordato ${win.length} numeri e i numeri sono ${win}`
    } else {
        p.textContent = `Non hai ricordato nulla`                
    }

})
