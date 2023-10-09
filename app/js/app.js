const button = document.querySelector('#button')
const userName = document.querySelector('#username')
const userEmail = document.querySelector('#email')
const telephoneNumber = document.querySelector('#number')

button.addEventListener('click', () => {
  name()
  validEmail()
  validNumber()
})

function showError(input, message) {
  const formControl = input.parentElement
  input.classList.add('error')

  const small = formControl.querySelector('small')
  small.textContent = message
  small.classList.add('error')
}

function showSucess(input) {
  const formControl = input.parentElement
  const small = formControl.querySelector('small')
  input.classList.remove('error')
  small.textContent = ''
}

function name() {
  if (userName.value === '') {
    showError(userName, 'This field is required')
  } else {
    showSucess(userName)
  }
}

function isValidEmail(email) {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  return regex.test(email)
}

function validEmail() {
  if (userEmail.value === '') {
    showError(userEmail, 'This field is required')
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Invalid Email')
  } else {
    showSucess(userEmail)
  }
}

function validNumber() {
  if (telephoneNumber.value === '') {
    showError(telephoneNumber, 'This field is required')
  } else {
    showSucess(telephoneNumber)
  }
}

const monthly = document.querySelector('#monthly')
const yearly = document.querySelector('#yearly')
const checkbox = document.querySelector('#checkbox')

checkbox.addEventListener('click', () => {
  if (checkbox.checked) {
    monthly.classList.add('hide')
    yearly.classList.remove('hide')
  } else {
    monthly.classList.remove('hide')
    yearly.classList.add('hide')
  }
})
