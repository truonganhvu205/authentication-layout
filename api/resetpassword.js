import {
    password_isValid,
    password_isMatch,
    inputErr,
    clearInputErr,
} from '../utils/index.js'

const password = document.getElementById('password')
const passwordConfirm = document.getElementById('password_confirm')
const resetpasswordForm = document.getElementById('resetpassword_form')

document.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(() => {
        password?.focus()
    })
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

resetpasswordForm.addEventListener('submit', e => {
    e.preventDefault()
    e.stopPropagation()

    if(!password.value.trim() || !passwordConfirm.value.trim()) {
        inputErr(password)
        inputErr(passwordConfirm)

        requestAnimationFrame(() => {
            password?.focus()
            password?.select()
        })
        return
    }
})
