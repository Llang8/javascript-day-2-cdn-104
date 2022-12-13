// Object Constructor Functions
function Person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.eyeColor = eyeColor

    // Create a "haveBirthday" method that increments the age by 1
    this.haveBirthday = function(ageIncrement=1) {
        this.age += ageIncrement
    }

    // Create a method to return the person's full name
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

let dylan = new Person("Dylan", "Smith", 30, "brown")

// Accessing attributes:
console.log(dylan.firstName)

// Updating attributes directly
dylan.age += 1

console.log(dylan.age)

dylan.haveBirthday(4)

console.log(dylan.age)

console.log(dylan.getFullName())

let mary = new Person("Mary", "Gene", 52, "blue")

console.log(mary.firstName, dylan.firstName)

function Car(make, model, color, miles) {
    this.make = make
    this.model = model
    this.color = color
    this.miles = miles

    this.drive = function(milesDriven) {
        this.miles += milesDriven
    }

    // Write a method that paints the car a provided color
    this.newColor = function(newPaint) {
        this.color = newPaint
    }
}

let accord = new Car('Honda', 'Accord', 'Green', 1000)

console.log(accord)

accord.drive(150)
accord.newColor('Pink')

console.log(accord)

// Classes 
class PersonC {
    constructor(firstName, lastName, age, eyeColor) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.eyeColor = eyeColor
    }

    haveBirthday() {
        this.age += 1    
    }
}

let harry = new PersonC("Harry", "Liam", 13, "Blue")

console.log(harry)

harry.haveBirthday()

console.log(harry)