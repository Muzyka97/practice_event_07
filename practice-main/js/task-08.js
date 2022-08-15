const form = document.querySelector(".login-form");


form.addEventListener("submit", handleSubmit);

function handleSubmit(e){
    e.preventDefault();
    
    const {email, password} = e.currentTarget.elements;

    if(email.value === "" || password.value === ""){
       alert("Please fill in all the fields!")
    }else{
        console.log(`Login: ${email.value}, Password: ${password.value}`);
    };
    e.currentTarget.reset();
};












