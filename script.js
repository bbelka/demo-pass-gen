// Assignment Code
var generateBtn = document.querySelector("#generate");

// declared var = array of lowercase
// declared var = array of uppercase
// declared var = array of numbers
// declared var = array of specials

//declare generatePassword function

//declare options array

//promt for length
  //8<length<128
  //check that length fulfills 8-128 requirement

//prompt for criteria
//var confirmUppercase = confirm uppercase
//confirm lowercase
//confirm numbers
//confirm specials

//handle validation last
//validate that I chose at least 1 character type
  //if not at least 1 start over
  //handling recursion might get wonky -- may not be able to just call generate again
  //maybe just alert you didn't choose anything

//add chose character types to options array
// if confirm{characterType} === true then concatenate the {characterType} array onto the options array
  //conditional for each {characterType}

//declare passwordArray 

//generate password from chosen characters
  //run for loop as many times as user selected for password length
    //generate a random index
    //use random index to select a character from options array
    //push random character into passwordArray

//declare passwordString = passwordArray join

//return passwordString



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page