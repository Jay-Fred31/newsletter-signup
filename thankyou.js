
const emailAddress = document.getElementById("address");
let userEmail = localStorage.getItem("emailAddress");
localStorage.clear();

emailAddress.innerText = userEmail;