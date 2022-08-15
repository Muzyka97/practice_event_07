function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");

createButton.addEventListener('click', buttonCreate);
destroyButton.addEventListener('click', destroyBoxes);

function buttonCreate(){
  divBoxes.innerHTML = createBoxes(input.value)
};


function createBoxes(amount){
  let str = '';
  let counter = 30;
  for(let i = 1; i <= amount; i +=1){
    str += `<div style="height:${counter}px; width:${counter}px; background-color: ${getRandomHexColor()};"></div>`
    counter += 10
  };
  return str
};


function destroyBoxes(){
  divBoxes.innerHTML = '';
  input.value = "";
};



