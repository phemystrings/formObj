// database
const users = JSON.parse(localStorage.getItem('users'))
const form = document.querySelector('form')

// login 
const handleLogin = (e) => {
    e.preventDefault()
    const obj = Object.fromEntries(new FormData(form))
    const foundUser = users.find(
        user => user.email === obj.email
            && user.pwd === obj.pwd)
        ?? 'Email or Password not correct'
    foundUser.firstname ? window.location.replace(`/views/home.html?auth=${foundUser.firstname}`)
        : form.querySelector('span').textContent = foundUser
}

// listens to the submit event
form.addEventListener('submit', handleLogin)