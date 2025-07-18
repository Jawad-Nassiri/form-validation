

const usernameInput = document.querySelector('input[type=text]')
const passwordInput = document.querySelector('input[type=password]')
const usernameMessage = document.querySelector('.username-message')
const passwordMessage = document.querySelector('.password-message')
const loginBtn = document.querySelector('.login-button')
const modalScreen = document.querySelector('.modal-screen')
const modalBtn = document.querySelector('.modal-button')

let isUsernameValid = false
let isPasswordValid = false
const usernameMinLength = 3
const passwordMinLength = 6



function validateForm(inputElement, minLength, messageElement, fieldName) {
    if(inputElement.value.length < minLength) {
        messageElement.textContent = `${fieldName} is not valid!`
        messageElement.style.color = 'red'
        inputElement.style.borderColor = 'red'
        messageElement.classList.remove('hidden')
        return false
    } else {
         messageElement.textContent = `${fieldName} is valid!`
        messageElement.style.color = 'lime'
        inputElement.style.borderColor = 'lime'
        messageElement.classList.remove('hidden')
        return true
    }
}


function checkFormValidity() {
    loginBtn.disabled = !(isUsernameValid && isPasswordValid)
}

usernameInput.addEventListener('keyup', () => {
    isUsernameValid = validateForm(usernameInput, usernameMinLength, usernameMessage, 'Username')
    checkFormValidity()
})

passwordInput.addEventListener('keyup', () => {
    isPasswordValid = validateForm(passwordInput, passwordMinLength, passwordMessage, 'Password')
    checkFormValidity()
})

usernameInput.addEventListener('blur', () => {
    validateForm(usernameInput, usernameMinLength, usernameMessage, 'Username')
})

passwordInput.addEventListener('blur', () => {
    validateForm(passwordInput, passwordMinLength, passwordMessage, 'Password')
})


loginBtn.addEventListener('click', (evt) => {
    evt.preventDefault()

    if(isUsernameValid && isPasswordValid) {
        modalScreen.classList.remove('hidden')
    }
})



modalBtn.addEventListener('click', () => {
    modalScreen.classList.add('hidden')
    usernameMessage.classList.add('hidden')
    passwordMessage.classList.add('hidden')

    usernameInput.value = ''
    passwordInput.value = ''
})


