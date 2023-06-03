
const inputValue = document.querySelector('#em');
const submitBtn = document.getElementById("submit-btn");
const errorMessage = document.querySelector('.error');
const signup = document.getElementById('home');


function emailValue(){
    let emailEntered = inputValue.value;
    let emailFormate =
      /^[A-za-z0-9]+([\.-]?[A-za-z0-9]+)*@\w+([\.-]?[A-za-z0-9]+)*(\.[A-za-z0-9]{2,3})+$/;
    console.log(emailEntered.length)
    if(emailFormate.test(emailEntered)){
        signup.setAttribute("href", "http://127.0.0.1:5500/thankyou.html");
        submitBtn.setAttribute("aria-disabled", "false");
        localStorage.setItem("emailAddress", emailEntered)
        return;
    }
    inputValue.setAttribute("required", "");
    inputValue.classList.add("edit");
    errorMessage.removeAttribute("hidden", "");

    setTimeout(() => {
      inputValue.removeAttribute("required", "");
      inputValue.classList.remove("edit");
      errorMessage.setAttribute("hidden", "");
    }, 2000);
}

inputValue.addEventListener("change", emailValue)
inputValue.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        submitBtn.click()
        return;
    }
    
})

