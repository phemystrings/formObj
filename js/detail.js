// Using localhost as Database
const users = JSON.parse(localStorage.getItem('users'))
const data = []
users !== null && data.push(...users)

const form = document.querySelector('form')
const id = new URLSearchParams(window.location.search).get('id')

// Dynamically creating table rows
let index = 0
for (item in users[id]) {
    const objVal = Object.values(users[id])
    const article = document.createElement('article')
    article.className = 'form__input'
    const input = document.createElement('input')
    input.name = item
    input.value = objVal[index]
    const label = document.createElement('label')
    label.textContent = item
    article.append(input, label)
    form.append(article)
    index++
}
// Appending table rows
const div = document.createElement('div')
const emptyDiv = document.createElement('div')
div.className = 'step__button'
const button = document.createElement('button')
button.type = 'submit'
button.textContent = 'Update'
div.append(button)
form.append(div)

// Editing item on the table with respect to rows
const handleEdit = (e) => {
    e.preventDefault()
    data.splice(parseInt(id), 1)
    const obj = Object.fromEntries(new FormData(form))
    data.push(obj)
    localStorage.setItem('users', JSON.stringify(data))
    window.location.replace('/views/index.html')
}

form.addEventListener('submit', handleEdit)