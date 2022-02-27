const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to the password validator tool!")

reader.question("Please provide your password:", function(input){
    if (input.length >= 10 && input.includes("0") === true){
        console.log("Password accepted.")
    } else if (input.length >= 10 && input.includes("0") === false){
        console.log("Password rejected. Your password must contain a 0.")
    } else {
        console.log("Password rejected. Your password must contain at least 10 characters.")
    }
    reader.close()
})