const navIcon = document.querySelectorAll('i')
const urlParams = new URLSearchParams(window.location.search)

navIcon[1].addEventListener('click', (auth) => {
    auth = urlParams.delete('auth')
    navIcon[1].style.display = 'none'
    setIcon(auth)
})

setIcon(urlParams.get('auth'))

function setIcon(auth) {
    let el = navIcon[0].parentElement
    el.href = (auth !== null && auth !== undefined) ? '#' : '/views/login.html'
    auth
        ? navIcon[1].style.display = 'flex'
        : navIcon[0].style.display = 'flex'
    auth &&
        (el.previousElementSibling.firstElementChild.style.display = 'flex')
    document.querySelector('.title').textContent = `Welcome ${auth ?? 'Home'}`
}