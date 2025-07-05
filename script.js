const form = document.getElementById("myForm"); //get form element
const firstNameInput = document.getElementById("firstName"); //get first name
const lastNameInput = document.getElementById("lastName"); 
const emailInput = document.getElementById("email");

form.addEventListener("submit", function (e) {
  // check all the inputs if they are correct
  e.preventDefault();

  // check if its false, and then show error msg when false
  if (firstNameInput.checkValidity() && firstNameInput.value.trim().length > 1) {
    firstNameInput.classList.remove("error");
  } else {
    firstNameInput.reportValidity();
    // how to put input is red in css
    firstNameInput.classList.add("error");
  }

  if (lastNameInput.checkValidity() && lastNameInput.value.trim().length > 1) {
    lastNameInput.classList.remove("error");
  } else {
    lastNameInput.reportValidity();
    lastNameInput.classList.add("error");
  }
    
  if (emailInput.checkValidity()) {
    emailInput.classList.remove("error");
  } else {
    emailInput.reportValidity();
    emailInput.classList.add("error");
  }
});
