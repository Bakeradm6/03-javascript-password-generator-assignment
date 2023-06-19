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

// When I select the button to generate a new password,
// I am given 2 prompts, each with a list of criteria to confirm
// Then the password is displayed in an alert or on screen

// When I select the button to generate a new password
// I am given 2 prompts, each with a list of criteria to confirm

// Prompt for password length:
 // select min length (at least 8)
 // select max length (at most 128)
// at least one character type must be selected
// input should be validated

// Prompt for character types :
// confirm whether to include(and/or):
 //lowercase 
 //uppercase 
 //numeric
 //special characters
// at least one character type must be selected
// input should be validated

//Once prompts are entered:
 // password is generated
 // password is displayed on page or in an alert


 //Variables

 // Assignment Code
var generateBtn = document.querySelector("#generate");

//characters used to generate password
 var lowerChar= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
 var upperChar=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
 var numChar=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
 var specialChar=['!','@','#','$','%','^','&','*','(',')','_','+','-','=','[',']','{','}','|',';',':',',','.','<','>','/','?','"'] 
 var charType=[] //blank array, push char types when confirmed into this array, use this array to pull characters from when gereating password

 //Functions

//creates prompt to enter password lenth, converts the string to a numeric value so it caa be used in the if statement, if less than 8 or more than 128 is entered, alerts the user and restarts the function
 function getPasswordLength() {
  var length= 0
  length= parseInt(
  prompt("Enter the length of the password: \n(Note: Must be between 8 and 128 characters)"))
  if (length<8 || length>128) {
    alert("Must be between 8 and 128 characters")
    return getPasswordLength()
  } else (

  )
 }

//set which char types are included, use char variables
 function getCharTypes() {
  var lower= confirm('Use lowercase letters?')
  var upper= confirm('Use uppercase letters?')
  var num= confirm('Include numeric characters?')
  var spec= confirm('Include special characters?')

  if (lower=true) {
   charType.concat(lowerChar)
  }

  if (upper=true) {
   charType.concat(upperChar)
  }

  if (num=true) {
   charType.concat(numChar)
  }

  if (spec=true) {
   charType.concat(specChar)
  }

  if (charType.length === 0) {
    alert("At least one option must be selected")
    return getCharTypes()
  }
 }
 

//function incorporating previous 2 functions and generates password based off their criteria
 function generatePassword() {
  var passLength= getPasswordLength()
  var charType= getCharTypes()
  var password= ""
  var randomChar= charType[Math.floor(Math.random()*charType.length)]

  while (password.length<passLength) {
    password+=randomChar
  }
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
