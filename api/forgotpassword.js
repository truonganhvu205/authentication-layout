import {
    email_isValid,
    err,
    clearErr,
} from '../utils/index.js'

const email = document.getElementById('email')
const forgotpasswordForm = document.getElementById('forgotpassword_form')

email.addEventListener('input', () => {
    if (email.value.trim() && !email_isValid(email.value.trim())) {
        err(email)
    } else {
        clearErr(email)
    }
})

forgotpasswordForm.addEventListener('submit', e => {
    e.preventDefault()

    if(!email.value.trim()) {
        err(email)
        return
    }
})
