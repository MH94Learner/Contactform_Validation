// validate theb user name  and return true if it is validated
function validateName(name) {
  const expression = /^[A-Za-z\s]+$/;
  return expression.test(String(name).toLowerCase());
}

//email validation and return true if it is validated
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3}))$/;
  return re.test(String(email).toLowerCase());
}

//phone number  and return true if it is validated
function validatePhone(phone) {
  const expression = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
  return expression.test(phone);
}

//variables required for validation purposes

var name = null;
var mail = null;
var phone = null;
var messsage = null;
// this will run on form submittion
var form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (name == null || mail == null || phone == null || messsage == null) {
    alert("Please fill all feilds as required");
  } else {
    alert(
      "we got your concern " +
        name +
        ". We will contact you back soon on " +
        mail
    );
  }
});

//handle user name Validation
var username = document.getElementById("contactname");
username.addEventListener("input", (e) => {
  if (!validateName(username.value) && username.value.length > 0) {
    var usernameError = document.getElementById("nameError");
    usernameError.style.display = "inline-block";
    usernameError.innerHTML = "please enter  valid user name";
    name = null;
  } else if (username.value.length > 50) {
    var usernameError = document.getElementById("nameError");
    usernameError.style.display = "inline-block";
    usernameError.innerHTML = "field must contain max 50 letters";
    name = null;
  } else {
    if (username.value.length < 4) {
      var usernameError = document.getElementById("nameError");
      usernameError.style.display = "inline-block";
      usernameError.innerHTML = "field must contain at least 4 letters";
      name = null;
    }
    if (username.value.length > 1 || username.value.length == 0) {
      var usernameError = document.getElementById("nameError");
      usernameError.style.display = "none";
      usernameError.innerHTML = "";
      name = username.value;
    }
  }
});

//handle email validation
var emailElement = document.getElementById("contactemail");
emailElement.addEventListener("input", () => {
  console.log(validateEmail(emailElement.value));
  if (validateEmail(emailElement.value)) {
    var emailError = document.getElementById("emailerror");
    emailError.style.display = "inline-block";
    emailError.innerHTML = "";
    mail = emailElement.value;
  } else if (emailElement.value.length == 0) {
    var emailError = document.getElementById("emailerror");
    emailError.style.display = "none";
    emailError.innerHTML = "";
    mail = null;
  } else {
    var emailError = document.getElementById("emailerror");
    emailError.style.display = "inline-block";
    emailError.innerHTML = "please enter a valid email";
    mail = null;
  }
});

//phone number validation
var phoneNoElement = document.getElementById("contactphone");
phoneNoElement.addEventListener("input", () => {
  if (validatePhone(phoneNoElement.value)) {
    if (
      phoneNoElement.value.length >= 10 &&
      phoneNoElement.value.length <= 15
    ) {
      var phoneError = document.getElementById("phonenumerror");
      phoneError.style.display = "none";
      phoneError.innerHTML = "";
      phone = phoneNoElement.value;
    } else if (phoneNoElement.value.length > 15) {
      var phoneError = document.getElementById("phonenumerror");
      phoneError.style.display = "inline-block";
      phoneError.innerHTML = "Enter valid phone no";
      phone = null;
    } else if (phoneNoElement.value.length == 0) {
      var phoneError = document.getElementById("phonenumerror");
      phoneError.style.display = "none";
      phoneError.innerHTML = "";
      phone = null;
    } else {
      var phoneError = document.getElementById("phonenumerror");
      phoneError.style.display = "inline-block";
      phoneError.innerHTML = "Enter atleast 10 numbers";
      phone = null;
    }
  } else {
    var phoneError = document.getElementById("phonenumerror");
    phoneError.style.display = "inline-block";
    phoneError.innerHTML = "Enter valid phone no";
    phone = null;
  }
});

//handle message input
var messageElement = document.getElementById("message");
messageElement.addEventListener("input", () => {
  if (messageElement.value.length == 0) {
    var messageError = document.getElementById("messageerror");
    messageError.style.display = "none";
    messageError.innerHTML = "";

    messsage = null;
  } else if (messageElement.value.length < 30) {
    var messageError = document.getElementById("messageerror");
    messageError.style.display = "inline-block";
    messageError.innerHTML = "Enter atleast 30 words";

    messsage = null;
  } else {
    var messageError = document.getElementById("messageerror");
    messageError.style.display = "none";
    messageError.innerHTML = "";
    messsage = messageElement.value;
  }
});
