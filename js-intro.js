// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// --------------------------- Consider the following variable:

var mantra = "Be the dev"

// 1a. Write the code that determines if there is a 'B' in mantra.

console.log(mantra.includes("B"))
// console.log(mantra.match(/B/))

// 1b. Write the code that determines if there is an 'x' in mantra.

console.log(mantra.includes("x"))

// 1c. Write the code that determines if there is a 'v' in mantra.

console.log(mantra.includes("v"))

// 1d. STRETCH: Write a function that can take two arguments - a string and a letter and returns a sentence telling the user if the letter exists within the string.

// var str1 = "appl"
// var str2 = "e"
// console.log(str1.concat(str2))

var myName = ("apple" || "q") 
if (myName.includes("e")){
    console.log("The letter exists in the string!")
} else {
    console.log("the letter does NOT exist in the string!")
}

// ------------------------------ Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"

var longerWord = () =>{
  if (myDog.length < myCat.length){
    return "Garfield"
  } else {
    return "Snoopy"
  }
}
console.log(longerWord());

// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]

var arr = [myDog, myCat]
console.log(arr)

// 2c. STRETCH: Write a function that accepts two variables and returns a string in all lowercase letters. Expected output: "snoopy garfield"

let name = (myDog + " " + myCat)
console.log(name.toLowerCase())

// ------------------------------ Consider the following variable:

// var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.
//hint: "logs" in this case means "prints to the terminal console."  This is typically done with a console.log(x), where x is the string, function, etc that you wish to see in the terminal.

var myMessage = "Learning is fun!";
for (var i = 0; i < myMessage.length; i++)
console.log(myMessage.charAt(i))

// 3b. Write the code that logs each letter of the message using map.

// var myMessage = "Learning is fun!";
var letters = myMessage.split("")
letters.map(value => value.letters)
console.log(letters)


// 3c. STRETCH: Write the code that logs each letter of the message using a while loop.

// var myMessage = "Learning is fun!";
var i = 0
while (i < myMessage.length) {
    console.log(myMessage[i]);
    i++
}


// 3d. SUPER STRETCH: Write the code that logs each letter of the message using forEach().

// var myMessage = "Learning is fun!"

myMessage.split("").forEach((letter) => {
  console.log(letter);
})


// ---------------------------- Consider the following variable:

var testString = "thisisateststring"

// 4a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"

// var testString = "thisisateststring"
var vowRemover = testString.split("").filter((letter) =>
"aeiou".includes(letter.toLowerCase()) === false).join("")
console.log(vowRemover)


// 4b. STRETCH: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.

// const devowelifier = (string) = {
//     if(typeof string != "string"){
//         raise "Booom!"
//     } else {
        
//     }
// }

// console.log(devowelifier(222))
// console.log(testString)



// ------------------------------- Consider the following variable:

// var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// 5a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var toonimals = [ 
    {name: "Itchy", animal: "mouse"}, 
    {name: "Stimpy", animal: "cat"}, 
    {name: "Daffy", animal: "duck"}, 
    {name: "Scratchy", animal: "cat"}, 
    {name: "Ren", animal: "dog"}, 
    {name: "Felix", animal: "cat"},
    ]

var animal = toonimals.filter(value => value.animal === "cat")
console.log(animal);



var noCats = toonimals.filter(value => value.animal !== "cat").map(value => value.name) 
console.log(noCats)


//5c. STRETCH: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"

    
const describeAnimal = (array) =>{
    return array.map(value => `${value.name} is a ${value.animal}`).join("\n")
}
console.log(describeAnimal(toonimals))