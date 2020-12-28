
const prompt = require('prompt-sync')();

// function declarations

function validateDigit(number, stringRep) {
  if (Number.isNaN(number) || stringRep.length !== 4) {
    return true;
  } else {
    return false;
  }
}

function generateRandomNumber(fourDigitString) {
  const fourDigits = Number.parseInt(fourDigitString);
  // Validate digit
  if (validateDigit(fourDigits, fourDigitString)) {
    const error = new Error('Please input a four digit number');
    console.error(error);
  } else {
    // Square four digits
    b = Math.pow(fourDigits, 2);

    // Convert square digit to string
    let sqareString = b.toString();

    // Validate length of square
    if (sqareString.length != 8) {
      // Append zero if length is not 8
      for (let i = sqareString.length; i < 8; i++) {
        sqareString = '0' + sqareString;
      }
    }

    // Obtain middle four digits
    const middleFour = sqareString.substr(2, 4);
    console.log(`${fourDigitString}\t|.${middleFour}\t|${sqareString}`);

    if(middleFour === '0000') {
      return console.log('Program terminated with random number ' + middleFour);
    } else {
      generateRandomNumber(middleFour);
    }
  }
}


console.log('****************************************************');
console.log('RANDOM NUMBER GENERATION USING LEAST SQUARE METHOD');
console.log('****************************************************');

let fourDigitString, b, c;

fourDigitString = prompt('Enter 4 digit number: ');
console.log('  Z\t|  U\t|  Z^2\n______________________________');
generateRandomNumber(fourDigitString);

