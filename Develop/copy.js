function generatePassword() {
    var passwordLength = parseInt(
        var validLength = function() {
            // ask user for password length
            var promptLength = window.prompt('How long would you like your password to be? Pick a number between 8 and 128.');
          
            // if user picks a number 8-128(true) 
            if (promptLength > 8 && promptLength < 128) {
             
              var confirmLength = window.confirm("Your password will be " + password.Length + ".");
              // if the length is valid break loop
              break;
              //but this isn't the end of my function???  or should it be??  or do I need another
              // function for confirmLength?
          
              // if user picks outside of 8-128  (false) conditional recursive
              if (promptLength < 8 && promptLength > 128) {
                window.alert("Please enter a length between 8 and 128.");
          
                //if true, restart writePassword
                return generatePassword();
              }
            }
          }
    );




//anything below this is not part of the code it is me trying to figure out how to type what I am 
//working on


// //I think this solves asking user for pw length, evaluating if valid, prompt on invalid
// //and loop/return writePassword() for user to select again.  
// //I am not sure how to tell it to move forward with selecting the characters from here
// // I am not sure if the previously created writePassword needs reworking due to this being 
// //created
// //does this need a return true to answer this?  I am not sure when that is used but I think
//I need to use it to tell the loop to stop?
var validLength = function() {
    // ask user for password length
    var promptLength = window.prompt('How long would you like your password to be? Pick a number between 8 and 128.');
  
    // if user picks a number 8-128(true) 
    if (promptLength > 8 && promptLength < 128) {
     
      var confirmLength = window.confirm("Your password will be " + password.Length + ".");
      // if the length is valid break loop
      break;
      //but this isn't the end of my function???  or should it be??  or do I need another
      // function for confirmLength?
  
      // if user picks outside of 8-128  (false) conditional recursive
      if (promptLength < 8 && promptLength > 128) {
        window.alert("Please enter a length between 8 and 128.");
  
        //if true, restart writePassword
        return writePassword();
      }
    }
  }
  
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
        characterSet = characterSet + specialChars;
            }
  
      console.log(characterSet);
    } else {
      alert("Please enter a length between 8 and 128");


      




  // var test = function () {
  //   var response = prompt("Question?");
  //   if (response === "" || response === null) {
  //     window.alert("You need to provide a valid answer! Please try again.");
  //     test();
  //   }
  //   return response;
  };

  //   do I put a reset() here to make the alert quit but the generator to ask again for length
  //  I think a function getPasswordLength with a loop
  //  var getPasswordLength = function() {
  //   var length = "";
  //   if (passwordLength < 8 && passwordLength > 128) {
  // alert("Please enter a length between 8 and 128");
  // return length;
  //  //generatePassword();

  //then I need an alert if they are outside the 8 & 128 and loop to begin the question again
  //how do I get things to a var randomPassword
  // use the math.random  to randomize characterSet.length-1 then loop it for each character the user picked
  // Write password to the #password input