// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var numChars = "1234567890";
var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function generatePassword() {
  var passwordLength = parseInt (prompt("How long would you like your password to be?"));

  if (passwordLength > 8 && passwordLength < 128) {
    var includeUpper = confirm("Would you like to include UPPERCASE characters?");
    var includeLower = confirm("Would you like to include lowercase characters?");
    var includeNumbers = confirm("Would you like to include numeric characters?");
    var includeSpecial = confirm("Would you like to include special characters?");

    console.log(includeUpper);
    console.log(includeLower);
    console.log(includeNumbers);
    console.log(includeSpecial);
    
    } else {
      alert("Please enter a length between 8 and 128");
    }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
//did this work to commit
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
