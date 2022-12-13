const employeesEl = document.getElementById('employees') 

function addEmployee(name, jobTitle) {
    const employeeEl = document.createElement('div')
    employeeEl.classList.add('employee-card')

    employeeEl.innerHTML = `
        <h2>${name}</h2>
        <p>${jobTitle}</p>
    `

    employeesEl.appendChild(employeeEl)
}


const formEl = document.getElementById('employeeForm')
formEl.addEventListener('submit', (event) => {
    event.preventDefault() // Prevents refresh

    let nameInput = document.getElementsByName('name')[0]
    let jobTitleInput = document.getElementsByName('jobTitle')[0]

    addEmployee(nameInput.value, jobTitleInput.value)

    nameInput.value = ''
    jobTitleInput.value = ''
})

const clearBtn = document.getElementById('clear')
clearBtn.addEventListener('click', (event) => {
    employeesEl.innerHTML = ''
})