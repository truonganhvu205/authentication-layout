import {
    username_isValid,
    email_isValid,
    password_isValid,
    password_isMatch,
    err,
    clearErr,
} from '../utils/index.js'

const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirm = document.getElementById('password_confirm')
const registerForm = document.getElementById('register_form')

username.addEventListener('input', e => {
    if (username.value.trim() && !username_isValid(username.value.trim())) {
        err(username)
        return
    } else {
        clearErr(username)
        return
    }
})

email.addEventListener('input', () => {
    if (email.value.trim() && !email_isValid(email.value.trim())) {
        err(email)
        return
    } else {
        clearErr(email)
        return
    }
})

password.addEventListener('input', e => {
    if(password.value.trim() && !password_isValid(password.value.trim())) {
        err(password)
        return
    } else {
        clearErr(password)
        return
    }
})

passwordConfirm.addEventListener('input', e => {
    if(!passwordConfirm.value.trim()) {
        clearErr(passwordConfirm)
        return
    }
})

registerForm.addEventListener('submit', e => {
    e.preventDefault()

    if(!username.value.trim() || !email.value.trim() || 
    !password.value.trim() || !passwordConfirm.value.trim()) {
        err(username)
        err(email)
        err(password)
        err(passwordConfirm)
        return
    }

    if(!password_isMatch(password.value.trim(), passwordConfirm.value.trim())) {
        err(passwordConfirm)
        err(password)
        return
    } else {
        clearErr(passwordConfirm)
        clearErr(password)
        return
    }
})
