const form = document.querySelector('form')
const userName = document.querySelector('#username')
const userEmail = document.querySelector('#email')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  name()
  validEmail()
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

function isValidEmail(input, email) {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  let correctEmail = regex.test(input.value)
}

function validEmail() {
  if (userEmail.value === '') {
    showError(userEmail, 'This field is required')
  } else {
    showSucess(userEmail)
  }

  if (!correctEmail) {
    showError(userEmail, 'Invalid Email')
  }
}
