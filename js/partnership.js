const formPartnership = document.querySelector("#form-partnership");
const alertPop = document.querySelector(".alert-pop");
const textAlert = document.querySelector(".text-alert");
const partnershipText = document.getElementById(".partnership-text");
const closeButton = document.getElementById("closeButton");

formPartnership.onsubmit = function(e){ 
    let firstName = document.getElementById("grid-first-name").value
    let lastName = document.getElementById("grid-last-name").value;
    let description = document.getElementById("grid-description").value;
    let email = document.getElementById("grid-email").value;

    e.preventDefault();
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('username', email);
    localStorage.setItem('description', description);

    if (description != "" && firstName != "" && lastName != "" && email != ""){
        alertPop.classList.remove("invisible")
        alertPop.classList.remove("bg-pink-500")
        alertPop.classList.add("bg-green-500")
        textAlert.innerHTML = "Thank You for filling out this form"
    }
    else {
        alertPop.classList.remove("invisible")
        alertPop.classList.remove("bg-green-500")
        alertPop.classList.add("bg-pink-500")
        textAlert.innerHTML = "Please fill out the form"
    }
}

closeButton.onclick = function (event){
    let element = event.target;
    while(element.nodeName !== "BUTTON"){
        element = element.parentNode;
    }
    alertPop.classList.add("invisible")
}