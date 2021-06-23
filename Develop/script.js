// Assignment Code
var generateBtn = document.querySelector("#generate");

var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// Password variable values: 
// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is for the Uppercase conversion
space = [];
// Choices declared outside the if statement so they can be concatenated upon condition
var choices;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// creates a variable for uppercase conversion
alpha2 = alpha.map(toUpper);


// Start function to generate password
function generatePassword() {
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    // First if statement for user validation 
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        // User input prompts
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // Continues once user input is validated
        confirmNumber = confirm("Will this contain numbers?");
        confirmCharacter = confirm("Will this contain special characters?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmLowercase = confirm("Will this contain Lowercase letters?");
    };

    // Else if for 4 negative options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");

    }
    // First if statement that uses user input prompts to determine choices
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alpha, alpha2);
    }
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alpha2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alpha);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alpha, alpha2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alpha2);
    }
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alpha);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alpha2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alpha2);
    }
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alpha;
    }
    else if (confirmUppercase) {
        choices = space.concat(alpha2);
    };

    // password variable is an array placeholder for user generated amount of length
    var password = [];

    // Random selection for all variables: 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // Converts password to a string
    var ps = password.join("");
    UserInput(ps);
    return ps;
}

// This puts the password value into the textbox
function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
