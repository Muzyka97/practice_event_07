const inputValue = document.querySelector('input')

  function changeBorderColor(e){

if(e.currentTarget.value.length === +inputValue.dataset.length){
    removeClass("valid", "invalid") 
}else
    removeClass("invalid", "valid") 
};

inputValue.addEventListener("blur", changeBorderColor);

function removeClass(add, remove){
    inputValue.classList.add(add)

    inputValue.classList.remove(remove)
};
