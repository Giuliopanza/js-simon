let istr = document.getElementById("instructions")

let numeri = document.getElementById("numbers-list")

let numbers = {}

let containerafter = document.getElementById("answers-form")

let numin = document.getElementsByClassName("form-control")

let p = document.getElementById("message")

let btn = document.querySelector(".btn")

for (let i = 1; i < 6; i++) {

    const li = document.createElement(`li`);

    numbers [i] = Math.floor(Math.random() * 50) + 0 ;

    li.append(numbers[i]);

    numeri.appendChild(li);
    
}

setTimeout(timer, 3000 );

function timer() {
    istr.className = 'd-none';

    numeri.className = 'd-none';

    containerafter.className = `d-block`;  

}


btn.addEventListener("click", function(){

    let win = {}

    for (let i = 0; i < numin.length; i++) {
        for (let x = 0; x < numbers.length; x++) {
            if (numin[x].value == numbers[i]) {
                win.push (numin[x].value)
            }
        
        }
    }

    if (win.length > 0) {
        p.textContent = `Hai ricordato ${win.length} numeri e i numeri sono ${win}`
    } else {
        p.textContent = `Non hai ricordato nulla`                
    }

})