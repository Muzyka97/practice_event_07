const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
let counterValue = document.querySelector('#value');

const counter= { 
    value: 0,
    decrement(){
        this.value -=1
    },
    
    increment(){
        this.value +=1
    },
};

decrement.addEventListener("click", BtnDecrementClick);
increment.addEventListener("click", BtnIncrementClick);

function BtnDecrementClick (){
    counter.decrement();
    counterValue.textContent = counter.value
};

function BtnIncrementClick (){
    counter.increment();
    counterValue.textContent = counter.value
};


