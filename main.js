// Accessing HTML elements
console.log(document)

// Get an element by it's ID
const app = document.getElementById('app')

console.log(app)

// Get elements by a tag name
const paragraphs = document.getElementsByTagName('p')

console.log(paragraphs)

// Get elements by a class name
const boxes = document.getElementsByClassName('box')

console.log(boxes)

// querySelector, querySelectorAll 
// querySelector returns the first item only
// querySelectorAll returns a list of all items
const appParagraph = document.querySelector('#app p')
console.log(appParagraph)

const appParagraphs = document.querySelectorAll('#app p')
console.log(appParagraphs)

// console.log(document.querySelectorAll('#app'))

// The style attribute
// app.style.backgroundColor = 'black';
// app.style.backgroundColor = '#DDDDDD';
app.style.backgroundColor = 'rgb(200,200,200)';

for (const box of boxes) {
    box.style.width = '200px';
    box.style.height = '200px';
    box.style.backgroundColor = 'red';
    box.style.marginBottom = '10px';
}

// Adding elements to our page

// Let's create a heading tag and add it to our app element
/* const appHeading = document.createElement('h1')
appHeading.innerText = 'Welcome to our app!'
// app.appendChild(appHeading)
// app.prepend(appHeading)

app.insertBefore(appHeading, appParagraphs[2]) */

// innerHTML
boxes[0].innerHTML = '<h2>This is a box</h2>'

// EventListeners
boxes[0].addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'green'
})