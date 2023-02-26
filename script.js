// Assignment code here
//write variables here
//created a button with query selector
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLowerCase;
var confirmUpperCase;
var confirmNumber;
var confirmSymbol;
var userPreference;

//these variables are in correlation to the upper and lower case letters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);

//these lines of code are variables for the special symbols and numbers
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


//This function will write the password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// This starts the function
function generatePassword() {
  // will ask for the user's input
  passwordLength = prompt("How many characters do you want your password to have? Pick from 8 and 128");
  console.log("Password length " + passwordLength);

  if (!passwordLength) {
    alert("Required value");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You need to pick from 8 and 128");
    console.log("Password length " + passwordLength);

  } else {
    confirmLower = confirm("Is this gonna have lower case letters?");
    console.log("Lower case " + confirmLower);
    confirmUpper = confirm("Is this gonna have upper case letters?");
    console.log("Upper case " + confirmUpper);
    confirmNumber = confirm("Is this gonna have numbers?");
    console.log("Number " + confirmNumber);
    confirmSpecial = confirm("Is this gonna have characters?");
    console.log("Special Character " + confirmSpecial);

  };

  //If there is no response
  if (!confirmLowerCase && !confirmUpperCase && !confirmNumber && !confirmSpecial) {
    userChoices = alert("You need to match the criteria!");
    //when there's four true options
  } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, numbers, special);
    console.log(userChoices);
  }
  // when there's three true options
  else if (confirmLower && confirmUpper && confirmNumber) {
    userChoices = lowerCase.concat(upperCase, numbers);
    console.log(userChoices);
  }
  else if (confirmLowerCase && confirmUpper && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, special);
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(numbers, special);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = upperCase.concat(numbers, special);
    console.log(userChoices);
  }
  // when there's two true options
  else if (confirmLower && confirmUpper) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumber) {
    userChoices = lowerCase.concat(numbers);
    console.log(userChoices);
  }
  else if (confirmLower && confirmSpecial) {
    userChoices = lowerCase.concat(special);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmNumber) {
    userChoices = upperCase.concat(numbers);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmSpecial) {
    userChoices = upperCase.concat(special);
    console.log(userChoices);
  }
  else if (confirmNumber && confirmSpecial) {
    userChoices = numbers.concat(special);
    console.log(userChoices);
  }
  // when there's only one true option
  else if (confirmLower) {
    userChoices = lowerCase;
    console.log(userChoices);
  }
  else if (confirmUpper) {
    userChoices = blankUpper.concat(upperCase);
    console.log(userChoices);
  }
  else if (confirmNumber) {
    userChoices = numbers;
    console.log(userChoices);
  }
  else if (confirmSpecial) {
    userChoices = special;
    console.log(userChoices);
  };

  // Here's an empty variable set for the password's length
  var passwordBlank = [];

  //A for loop is set of random selections
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  //This returns the password to the user
  var password = passwordBlank.join("");
  console.log("The pasword is: " + password);
  return password;

}
