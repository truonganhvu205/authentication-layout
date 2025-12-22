import {
    err,
    clearErr,
} from '../utils/index.js'

const username = document.getElementById('username')
const password = document.getElementById('password')
const loginForm = document.getElementById('login_form')

document.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(() => {
        username?.focus()
    })
    
    username.addEventListener('input', e => {
        clearErr(username)
    })

    password.addEventListener('input', e => {
        clearErr(password)
    })

    loginForm.addEventListener('submit', e => {
        e.preventDefault()
        e.stopPropagation()

        if(!username.value.trim() || !password.value.trim()) {
            err(username)
            err(password)

            requestAnimationFrame(() => {
                username?.focus()
                username?.select()
            })
            return
        }
    })
})
