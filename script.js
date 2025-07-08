const form = document.getElementById("my-form"); //get form element
const firstNameInput = document.getElementById("first-name"); //get first name
const lastNameInput = document.getElementById("last-name"); 
const emailInput = document.getElementById("email");
const generalInquiryRadioButton = document.getElementById("general-inquiry");
const supportRequestRadioButton = document.getElementById("support-request");
const messageInput = document.getElementById("message");
const checkbox = document.getElementById("checkbx");

const firstNameError = document.getElementById("first-name-error");
const lastNameError = document.getElementById("last-name-error");
const emailError = document.getElementById("email-error");
const radioButtonError = document.getElementById("radio-button-error");
const messageError = document.getElementById("message-error");
const checkboxError = document.getElementById("checkbox-error");



form.addEventListener("submit", function (e) {
  // check all the inputs if they are correct
  e.preventDefault();

  // First Name
  // check if its false, and then show error msg when false
  if (firstNameInput.checkValidity() && firstNameInput.value.trim().length >= 1) {
    firstNameInput.classList.remove("error");
    // remove error message
    firstNameError.textContent = ""
    firstNameError.style.display = "none";
  } else {
    firstNameInput.reportValidity();
    // how to put input is red in css
    console.log("Adding error class to first name input");
    firstNameInput.classList.add("error");
    // give red error message
    firstNameError.textContent = "This field is a required"
    firstNameError.style.display = "block";

  }

  // Last Name
  if (lastNameInput.checkValidity() && lastNameInput.value.trim().length >= 1) {
    lastNameInput.classList.remove("error");
    lastNameError.textContent = "";
    lastNameError.style.display = "none";
  } else {
    lastNameInput.reportValidity();
    console.log("Adding error class to last name input");
    lastNameInput.classList.add("error");
    lastNameError.textContent = "This field is a required";
    lastNameError.style.display = "block";
  }

  // Email
  if (emailInput.checkValidity() && emailInput.value.trim().length > 0) { //and you type atleast 1 letter
    emailInput.classList.remove("error");
    emailError.textContent = "";
    emailError.style.display = "none";
  } else {
    emailInput.reportValidity();
    console.log("Adding error class to email input");
    emailInput.classList.add("error");
    emailError.textContent = "Please enter a valid email address";
    emailError.style.display = "block";
  }

  //Query Type
  if (generalInquiryRadioButton.checked || supportRequestRadioButton.checked){ //if atleast 1 radio button is clicked return true
    radioButtonError.textContent = "";
    radioButtonError.style.display = "none";
  } else {
      radioButtonError.textContent = "Please select a query type";
      radioButtonError.style.display = "block";
  }

  // Message
  if (messageInput.checkValidity() && messageInput.value.trim().length >= 50) {
    messageInput.classList.remove("error");
    messageError.textContent = "";
    messageError.style.display = "none";
  } else {
    messageInput.reportValidity();
    console.log("Adding error class to message input");
    messageInput.classList.add("error");
    messageError.textContent = "This field is a required";
    messageError.style.display = "block";
  }

  //Checkbox
  if (checkbox.checked){ //if checkbox is clicked return true
    checkbox.classList.remove("error");
    checkboxError.textContent = "";
    checkboxError.style.display = "none";
  } else {
      checkbox.reportValidity();
      console.log("Adding error class to checkbox input");
      checkbox.classList.add("error");
      checkboxError.textContent = "To submit this form, please consent to being contacted";
      checkboxError.style.display = "block";
  }
});
