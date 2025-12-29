import {
    username_isValid,
    email_isValid,
    password_isValid,
    password_isMatch,
    inputErr,
    clearInputErr,
} from '../utils/index.js'

const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirm = document.getElementById('password_confirm')
const registerForm = document.getElementById('register_form')

document.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(() => {
        username?.focus()
    })
})

username.addEventListener('input', () => {
    if (username.value.trim() && !username_isValid(username.value.trim())) {
        inputErr(username)
    } else {
        clearInputErr(username)
    }
})

email.addEventListener('input', () => {
    if (email.value.trim() && !email_isValid(email.value.trim())) {
        inputErr(email)
    } else {
        clearInputErr(email)
    }
})

password.addEventListener('input', () => {
    if(password.value.trim() && !password_isValid(password.value.trim())) {
        inputErr(password)
    } else {
        clearInputErr(password)
    }
    
    if (passwordConfirm.value.trim()) {
        if (!password_isMatch(password.value.trim(), passwordConfirm.value.trim())) {
            inputErr(passwordConfirm)
        } else {
            clearInputErr(passwordConfirm)
        }
    }
})

passwordConfirm.addEventListener('input', () => {
    if(!passwordConfirm.value.trim()) {
        clearInputErr(passwordConfirm)
    }

    if(!password_isMatch(password.value.trim(), passwordConfirm.value.trim())) {
        inputErr(passwordConfirm)
    } else {
        clearInputErr(passwordConfirm)
    }
})

registerForm.addEventListener('submit', e => {
    e.preventDefault()
    e.stopPropagation()

    if(!username.value.trim() || !email.value.trim() || 
    !password.value.trim() || !passwordConfirm.value.trim()) {
        inputErr(username)
        inputErr(email)
        inputErr(password)
        inputErr(passwordConfirm)

        requestAnimationFrame(() => {
            username?.focus()
            username?.select()
        })
        return
    }
})
