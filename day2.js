// Array methods
// .map(), .reduce(), .filter(), .forEach()

// .map()
let myNums = [1,2,3,4]

// myNums = myNums.map((x) => x * 2)

// console.log(myNums)

function customMap(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i])
    }

    return arr
}

console.log(customMap(myNums, (x) => x * 3))
console.log(customMap(myNums, (x) => x * 2))


// .reduce()
// let sum = myNums.reduce((x, y) => x + y)

function customReduce(arr, callback, initialValue=0) {
    let acc = arr[0]

    for (let i = 0; i < arr.length; i++) {
        acc = callback(acc, arr[i])
    }

    return acc
}

let myNumsReduce = [1,2,3,4,5]
let sum = customReduce(myNumsReduce, (x, y) => x + y)
console.log(sum)

sum = myNumsReduce.reduce((x, y) => x + y, 10)

console.log(sum)


/* console.log(sum) */

// .filter()

let myNums2 = [1,2,3,4,5,6]

let evens = myNums2.filter((x) => x % 2 == 0)

/* console.log(evens) */

function customFilter(arr, callback) {
    let resultArr = []

    /* for (let curr in arr) {
        if (callback(arr[curr])) {
            resultArr.push(arr[curr])
        }
    } */

    arr.forEach((val) => {
        if (callback(val)) {
            resultArr.push(val)
        }
    })

    return resultArr
}

/* console.log(myNums2)
console.log(customFilter(myNums2, (x) => x > 4)) */

// .forEach()

let myNums3 = [1,2,3,4,5,6]

myNums3.forEach((val, idx) => {
    console.log(`The current value is ${val} and the current index is ${idx}`)
})

/* 
* Exercises
*/

// Map:
// Take in an array of names, and convert each index to the string, "Hello NAME" using the map method
let names = ["Lucas", "John", "Charles", "Brendan", "Devon", "Hayden"]

console.log(names.map((name) => `Hello ${name}`))

// Filter:
// Take in an array of words and filter out any alphabetically AFTER the word "Coding Temple"
let words = ["Apple", "Banana", "Chicken", "Zebra", "Coding Temple"]

console.log(words.filter((word) => word <= "Coding Temple"))

// Reduce:
// Use reduce to multiply each number in a list and find the total product
let nums = [1,2,4,5,6,7,8]

console.log(nums.reduce((x,y) => x * y))