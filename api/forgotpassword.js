import {
    email_isValid,
    inputErr,
    clearInputErr,
} from '../utils/index.js'

const email = document.getElementById('email')
const forgotPasswordForm = document.getElementById('forgotPassword_form')

document.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(() => {
        email?.focus()
    })
})

email.addEventListener('input', () => {
    if (email.value.trim() && !email_isValid(email.value.trim())) {
        inputErr(email)
    } else {
        clearInputErr(email)
    }
})

forgotPasswordForm.addEventListener('submit', e => {
    e.preventDefault()
    e.stopPropagation()

    if(!email.value.trim()) {
        inputErr(email)

        requestAnimationFrame(() => {
            email?.focus()
            email?.select()
        })
        return
    }
})
