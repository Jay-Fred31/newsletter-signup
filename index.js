
const inputValue = document.querySelector('#em');
const submitBtn = document.getElementById("submit-btn");
const errorMessage = document.querySelector('.error');

function submitForm (){
   
   if(submitBtn.getAttribute("aria-disabled") === "true"){
     inputValue.setAttribute("required", "");
     inputValue.classList.add("edit");
     errorMessage.removeAttribute("hidden", "")

     setTimeout(() =>{
        inputValue.removeAttribute("required", "");
        inputValue.classList.remove("edit");
        errorMessage.setAttribute("hidden", "");
     }, 2000)
   }else{
    location.replace("http://127.0.0.1:5500/thankyou.html");
     
   }
}

function emailValue(){
    let emailEntered = inputValue.value;
    let emailFormate =
      /^[A-za-z0-9]+([\.-]?[A-za-z0-9]+)*@\w+([\.-]?[A-za-z0-9]+)*(\.[A-za-z0-9]{2,3})+$/;
    console.log(emailEntered.length)
    if(emailFormate.test(emailEntered)){
        console.log('correct')
        submitBtn.setAttribute("aria-disabled", "false");
        localStorage.setItem("emailAddress", emailEntered)
        return;
    }
    submitBtn.setAttribute("aria-disabled", "true");
}

submitBtn.addEventListener("click", submitForm)
inputValue.addEventListener("change", emailValue)

