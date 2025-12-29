import {
    inputErr,
    clearInputErr,
} from '../utils/index.js'

const username = document.getElementById('username')
const password = document.getElementById('password')
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
