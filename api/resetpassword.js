import {
    password_isValid,
    password_isMatch,
    err,
    clearErr,
} from '../utils/index.js'

const password = document.getElementById('password')
const passwordConfirm = document.getElementById('password_confirm')
const resetpasswordForm = document.getElementById('resetpassword_form')

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

resetpasswordForm.addEventListener('submit', e => {
    e.preventDefault()

    if(!password.value.trim() || !passwordConfirm.value.trim()) {
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
