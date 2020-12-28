// jshint esversion:8
const prompt = require('prompt-sync')({ sigint: true }); // For collecting user input
const chalk = require('chalk'); // For setting colors on console

// Generate random number function
function generateRN(multiplier, constant, seed) {
  /**
   * @params
   * a - multiplier
   * c - constant
   * Zn - seed or input
   * m - 2^p-1, where p is the wordlength of the computer
   */

  // Declare random number
  let Zn;

  // Convert function parameters from string to numbers and save them to formula parameters (a, c, Zn)
  const a = Number.parseInt(multiplier);
  const c = Number.parseInt(constant);
  const p = 64;
  const m = Math.pow(2, p - 1);
  Zn = Number.parseInt(seed);

  // Check if all parameters are zero
  if(a === 0 && Zn === 0 && c === 0) {
    const error = new Error(`All parameters cannot be zero`);
    console.error(chalk.red(error));
    return -1;
  }

  // condition if any parameter is greater than m
  if ((a > m || Number.isNaN(a)) || (c > m || Number.isNaN(c)) || (Zn > m || Number.isNaN(Zn)) || Number.isNaN(m)) {
    // Create error
    const error = new Error(`No number should be higher than m: ${m}`);

    // Log error to console
    console.error(chalk.red(error));
    return -1;
  } else {
    // Create random numbers array
    const z = [];

    // Assign n to be zero
    let n = 0;

    // Declare loop condition
    let condition;

    // Initiate loop
    do {
      // Set seed (Zn) to the first element in random numbers array
      z[0] = Zn;

      // Perform random number calculation
      const Rn = ((a * z[n]) + c) % m;

      // Log formula and parameters for each loop
      console.log(chalk.blue('Formula: Zn+1 = (a*Zn + c) % m'));
      console.log(`Parameters:\na: ${a}\nZn: ${z[n]}\nc: ${c}\nm: ${m}`);

      // Check for duplicate random number
      const duplicateRn = z.find((x) => x === Rn);
      if (duplicateRn) {
        // Change loop condition
        condition = duplicateRn;
      } else {
        // Save new random number
        z[n + 1] = Rn;
      }

      // Log random number
      console.log(chalk.green('Random Number: ' + Rn));
      console.log('---------------------------------------');

      // Increment n
      n++;
    } while (condition === undefined); // Condition for loop

    if (condition) { // Duplicate exists
      // Log duplicate to console
      console.log(chalk.red('Duplicate Random number found: ' + condition));

      // Log all random numbers
      console.log('Random Numbers: ');
      for (let i = 0; i < z.length; i++) {
        console.log(`(${i + 1}). ${chalk.green(z[i])}`);
      }
    }
  }
}

console.log('************************************************************');
console.log('RANDOM NUMBER GENERATION USING LINEAR CONGRUENTIAL METHOD');
console.log('************************************************************');

// Declare function parameters
let multiplier, constant, seed;

console.log(chalk.blue('Formula: Zn+1 = (a*Zn + c) % m'));

// Input parameters
multiplier = prompt('Enter a: ');
seed = prompt('Enter Zn: ');
constant = prompt('Enter c: ');

// Call generate random number function
generateRN(multiplier, constant, seed);