// read form element
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const phone = document.getElementById('phone');
const birth = document.getElementById('birth');
const checkbox = document.getElementById('agbs');


// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show input error message
function showErrorCheckbox(input, message) {
  const formControl = input.parentElement;
   formControl.className = 'form-control error';
  const small = formControl.parentElement.querySelector('small');
  small.style.visibility = "visible";
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

// Check phone is valid
function checkPhone(input) {
  const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  if(re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Phone is not valid');
  }
}

// Check required fields
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });

  return isRequired;
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input,
        `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(input,
        `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}
// Check birth
function checkBirth(option, min) {
  console.log(option.value)
  if (option.value > min) {
    showError(option,
        `${getFieldName(option)} must be before ${min}`
    );
  } else {
    showSuccess(option);
  }
}

// Check checkbox
function checkCheckbox(input) {
  if (input.checked) {
    showSuccess(input);
    const formControl = input.parentElement;
    const small = formControl.parentElement.querySelector('small');
    small.style.visibility = "hidden";
  } else {
     showErrorCheckbox(input, `AGBs must be checked`);
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Validate form input elements
function validateForm(){
  if(!checkRequired([username, email, phone, password, birth, checkbox])){
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkBirth(birth, 2006);
    checkPhone(phone);
    checkCheckbox(checkbox);
  }
}

// Event listeners
form.addEventListener('submit', function(e) {
  //https://www.w3schools.com/jsref/event_preventdefault.asp
  e.preventDefault();
  //First validate form
  validateForm();
})