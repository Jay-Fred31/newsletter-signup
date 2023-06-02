
const emailAddress = document.getElementById("address");
let userEmail = localStorage.getItem("emailAddress");
emailAddress.innerText = userEmail;

localStorage.clear();