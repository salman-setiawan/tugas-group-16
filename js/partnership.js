const formPartnership = document.querySelector("#form-partnership");

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
}