import {
    inputErr,
    clearInputErr,
    errMessages,
} from '../utils/index.js'

const username = document.getElementById('username')
const password = document.getElementById('password')
const loginErr = document.getElementById('login_err')
const loginForm = document.getElementById('login_form')

document.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(() => {
        username?.focus()
    })
})

username.addEventListener('input', () => {
    clearInputErr(username)
})

password.addEventListener('input', () => {
    clearInputErr(password)
})

loginForm.addEventListener('submit', e => {
    e.preventDefault()
    e.stopPropagation()

    if(!username.value.trim() || !password.value.trim()) {
        inputErr(username)
        inputErr(password)

        requestAnimationFrame(() => {
            username?.focus()
            username?.select()
        })
        return
    }
})
