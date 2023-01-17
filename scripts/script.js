// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let passwordArray = [];
let passwordLength = 0;
let useLowerCase = true;
let useUpperCase = true;
let useNumeric = true;
let useSpecial = true;


// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = parseInt(prompt("Enter the Length of password (between 8 and 128 chars): "));
  // If length input is not a number, or it is less than 8 or more than 18, alert and stop. Otherwise, continue.
  if((Number.isInteger(passwordLength)) && (passwordLength >= 8) && passwordLength <=128){

    useLowerCase = confirm("Use Lowercase chars");
    useUpperCase = confirm("Use Uppercase chars");
    useNumeric = confirm("Use Numeric chars");                
    useSpecial = confirm("Use Special chars ($@%&*, etc)");

    console.log(useLowerCase);

      if ((useLowerCase === false) && (useUpperCase === false) && (useNumeric === false) && useSpecial === false){

        alert("Sorry, you must select at least one option in Lowercase, Uppercase, Numeric or Special Characters")
      }
      else {

        passwordArray = useLowerCase ? passwordArray.concat(lowerCasedCharacters): passwordArray;
        console.log(passwordArray);
        passwordArray = useUpperCase ? passwordArray.concat(upperCasedCharacters): passwordArray;
        console.log(passwordArray);
        passwordArray = useNumeric ? passwordArray.concat(numericCharacters): passwordArray;
        console.log(passwordArray);
        passwordArray = useSpecial ? passwordArray.concat(specialCharacters): passwordArray;
        console.log(passwordArray);
      }
    
  }
  else{
    alert("Sorry, the length must be a number between 8 and 128");
  }

}

// Function for getting a random element from an array
function getRandom(arr) {


  let selectedElements = [];
  for(let i = 0; i < passwordLength; i++){

    selectedElements += arr[Math.floor(Math.random() * arr.length)];

  }

  return selectedElements;

}

// Function to generate password with user input
function generatePassword() {

  getPasswordOptions();
    if(passwordArray.length != 0){
      let password = getRandom(passwordArray);
      console.log(password);
      return password;
    }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

