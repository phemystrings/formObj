// My Database using Local Storage
const users = JSON.parse(localStorage.getItem('users'))
const data = []
users !== null && data.push(...users)

// form initializations
const navigationBtn = document.querySelectorAll('.step__button')
const myForm = navigationBtn[0].parentElement.parentElement
const inputs = myForm.querySelectorAll('input')
myForm.querySelectorAll('.next').forEach(next => next.disabled = true)

// Submitting the form
const handleSubmit = (e) => {
    e.preventDefault();
    if (myForm.checkValidity() === false) {
        navigationBtn[0].parentElement.classList.add('active')
    } else {
        const obj = Object.fromEntries(new FormData(myForm))
        data.push(obj)
        localStorage.setItem('users', JSON.stringify(data))
        window.location.replace('/views/index.html')
    }
}
// Multi-step navigation
navigationBtn.forEach((btn => {
    btn.addEventListener('click', (e) => {
        const formStep = e.currentTarget.parentElement
        formStep.classList.remove('active')
        e.target.textContent === 'Next'
            ? formStep.nextElementSibling.classList.add("active")
            : e.target.textContent === 'Prev'
                ? formStep.previousElementSibling.classList.add("active")
                : e.target.addEventListener('submit', handleSubmit(e))
    })
}))
//Validation section
inputs.forEach(input => {
    input.addEventListener('input', (e) => {
        // Activate next buttons on valid inputs
        const formStep = input.parentElement.parentElement
        const isInvalid = formStep.querySelector('.validation');
        let stepInvalid = []
        formStep.querySelectorAll('input').forEach(inp => {
            // checking validity on inputs
            (inp.name !== 'confirmPwd') ? stepInvalid.push(inp.checkValidity())
                : (inp.value !== '' && inputs[10].value === inp.value)
                    ? stepInvalid.push(inp.checkValidity())
                    : stepInvalid.push(!inp.checkValidity())
            // Activating next buttons
            stepInvalid.includes(false)
                && (formStep.querySelector('.next').disabled = true)
            !stepInvalid.includes(false)
                && (formStep.querySelector('.next').disabled = false)
        })
        // Validation message
        isInvalid.textContent = `${input.validationMessage}\n${input.dataset.info ?? ''}`
        const invalidStyle = isInvalid.style;
        (e.target.checkValidity() || e.target.value === '')
            ? (invalidStyle.display = 'none') : (invalidStyle.display = 'block')
    })
})