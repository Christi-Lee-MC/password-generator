// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var numChars = "1234567890";
var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

var characterSet = "";

function generatePassword() {
  var passwordLength = parseInt(
    prompt(
      "How long would you like your password to be? Pick a number between 8 and 128"
    )
  );

  if (passwordLength > 8 && passwordLength < 128) {
    var includeUpper = confirm(
      "Would you like to include UPPERCASE characters? Click OK for YES or click CANCEL for NO"
    );
    var includeLower = confirm(
      "Would you like to include lowercase characters? Click OK for YES or click CANCEL for NO"
    );
    var includeNumbers = confirm(
      "Would you like to include numeric characters? Click OK for YES or click CANCEL for NO"
    );
    var includeSpecial = confirm(
      "Would you like to include special characters? Click OK for YES or click CANCEL for NO"
    );

    console.log(includeUpper);
    console.log(includeLower);
    console.log(includeNumbers);
    console.log(includeSpecial);

    //put in if statement for true var in 16-19
    if (includeUpper === true) {
      characterSet = characterSet + upperChars;
    }

    if (includeLower === true) {
      characterSet = characterSet + lowerChars;
    }

    if (includeNumbers === true) {
      characterSet = characterSet + numChars;
    }

    if (includeSpecial === true) {
      characterSet = characterSet + specialChars
          }

    console.log(characterSet);
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
