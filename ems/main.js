const employeesEl = document.getElementById('employees') 

// console.log(JSON.parse(localStorage.getItem('employees')))

let employees = []

if (localStorage.getItem('employees')) {
    employees = JSON.parse(localStorage.getItem('employees'))
    
    for (const employee of employees) {
        addEmployee(employee.name, employee.jobTitle)
    }
}

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

    employees.push({
        name: nameInput.value,
        jobTitle: jobTitleInput.value
    })

    localStorage.setItem('employees', JSON.stringify(employees))

    nameInput.value = ''
    jobTitleInput.value = ''
})

const clearBtn = document.getElementById('clear')
clearBtn.addEventListener('click', (event) => {
    employeesEl.innerHTML = ''
    localStorage.removeItem('employees')
    employees = []
    // OR employees.length = 0
})