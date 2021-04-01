// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var pwdLength = parseInt (prompt ("How long would you like your password to be?"));

  if (pwdLength > 8 && pwdLength < 128) {
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
