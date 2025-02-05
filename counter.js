const count = document.getElementById('count');


let number = 0;


function increase(){
    number = number + 1;
    count.innerText = number;
}

function decrease(){
    if(number == 0){
        number = number
    }else{
    number = number - 1
    }
    count.innerText = number;
}

function reset(){
    number = 0
    count.innerText = number
}

function changeColor(el, color){
    el.style.backgroundColor = color;
}