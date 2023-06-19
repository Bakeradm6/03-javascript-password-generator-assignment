//Variables

// Assignment Code
var generateBtn = document.querySelector("#generate");

//characters used to generate password
 var lowerChar= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
 var upperChar=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
 var numChar=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
 var specialChar=['!','@','#','$','%','^','&','*','(',')','_','+','-','=','[',']','{','}','|',';',':',',','.','<','>','/','?','"'] 
 var charType=[] //blank array, push char types when confirmed into this array, use this array to pull characters from when generating password

 //Functions

//creates prompt to enter password length
 function getPasswordLength() {
  var length= 0
  length= parseInt(
  prompt("Enter the length of the password: \n(Note: Must be between 8 and 128 characters)")) //converts the string to a numeric value so it can be used in the if statement
  if (length<7 || length>129 || isNaN(length)) {
    alert("Must be between 8 and 128 characters and use only numbers") //if less than 8 or more than 128 is entered, alerts the user and restarts the function
    return getPasswordLength()
 }
 return length
}

//set which char types are included, use char variables
 function getCharTypes() {
  var lower= confirm('Use lowercase letters?')
  var upper= confirm('Use uppercase letters?')
  var num= confirm('Include numeric characters?')
  var spec= confirm('Include special characters?')

  charType=[]
 
  if (lower) {
   charType= charType.concat(lowerChar)
  } //should add lowerChar values to the charType array

  if (upper) {
   charType= charType.concat(upperChar)
  }

  if (num) {
   charType= charType.concat(numChar)
  }

  if (spec) {
   charType= charType.concat(specialChar)
  }

   console.log(charType)
  if (charType.length === 0) {
    alert("At least one option must be selected")
    return getCharTypes()
  } //if none selected, will make user select again
 }

//function incorporating previous 2 functions and generates password based off their criteria
 function generatePassword() {
  var passLength= getPasswordLength()
  getCharTypes()
  var password= "" //blank value to be filled and display as the generated password
  
  while (password.length<passLength) {
    var randomChar= charType[Math.floor(Math.random()*charType.length)] //pulls random character from charType array
    password+=randomChar
  } //adds a random character to the password variable until the length is equal to the user selected amount from getPasswordLength
  return password

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);