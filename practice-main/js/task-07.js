const input = document.querySelector("input");
const span = document.querySelector("span");

function changeSize(e){
    span.style.fontSize = `${e.currentTarget.value}px`
};

input.addEventListener('input', changeSize);