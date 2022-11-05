// database
const users = JSON.parse(localStorage.getItem('users'))
const tBody = document.querySelector('tbody')
// loading database to table
users !== null &&
    users.forEach((data, i) => {
        const row = document.createElement('tr')
        row.innerHTML = `<td>${data.firstname} ${data.lastname}</td>
        <td>${data.phone}</td>
        <td>${data.email}</td>
        <td id=${i}>
            <button>
                <i class="edit" title='Edit'>Edit</i>
            </button>
            <button>
                <i class="trash" title='Delete'>Delete</i>
            </button>
        </td>`
        return tBody.append(row)
    })

const button = document.querySelectorAll('button')

// activating the Edit and delete and delete buttons
button.forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.parentElement.id
        btn.querySelector('i').title === 'Edit'
            ? window.location.replace(`/views/details.html?id=${id}`)
            : users.splice(id, 1) && localStorage.setItem('users', JSON.stringify(users))
        btn.querySelector('i').title === 'Delete' && window.location.reload()
    })
})