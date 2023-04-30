// Assignment code here
// some of the code below is a mix adapted from:
// https://stackoverflow.com/questions/59340866/random-password-generator-javascript-not-working
// https://stackoverflow.com/questions/59340866/random-password-generator-javascript-not-working
// https://dev.to/code_mystery/random-password-generator-using-javascript-6a
// https://www.youtube.com/watch?v=x4HUaiazDes
// https://www.youtube.com/watch?v=duNmhKgtcsI&t=33s
// https://javascript.plainenglish.io/vanilla-js-simple-password-generator-87e02e5c506a
// https://github.com/jamierachael/Password-Generator

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Define a function to generate a new password
function generatePassword() {
  // Prompt the user for password criteria
  let includeLowercase = confirm("Include lowercase characters?");
  let includeUppercase = confirm("Include uppercase characters?");
  let includeNumeric = confirm("Include numeric characters?");
  let includeSpecial = confirm("Include special characters?");
  let passwordLength = Number(
    prompt("Choose a password length between 8 and 128 characters.")
  );

  // Validate the user input
  if (
    Number.isNaN(passwordLength) ||
    passwordLength < 8 ||
    passwordLength > 128
  ) {
    alert(
      "Please choose a valid password length between 8 and 128 characters."
    );
    return; // Exit the function if input is invalid
  }

  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumeric &&
    !includeSpecial
  ) {
    alert(
      "Please select at least one type of character to include in the password."
    );
    return; // Exit the function if no character types are selected
  }

  // Define character sets based on selected criteria
  let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numericChars = "0123456789";
  let specialChars = "!@#$%^&*()_-+={}[]|:;\"'<>,.?/";

  let charSet = "";
  if (includeLowercase) {
    charSet += lowercaseChars;
  }
  if (includeUppercase) {
    charSet += uppercaseChars;
  }
  if (includeNumeric) {
    charSet += numericChars;
  }
  if (includeSpecial) {
    charSet += specialChars;
  }

  // Generate a random password in the for loop
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  // Return the generated password and display in the text box
  return password;
}

// function to generate the password and display it in the HTML page
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
