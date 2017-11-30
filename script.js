// create variables
let happyNumbers = []; 
let unhappyNumbers = [];
let alreadyChecked = [];
let originalNum = 1;//Integer that is being tested for happy/unhappiness.
let currentNum = originalNum;//Current square of sum of orignalInteger that the program is running through.

// add together the squares of each digit
function sumOfSquares(number) {
    let digits = number.toString().split("");
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        let square = digits[i] * digits[i];
        sum += parseInt(square);
    }
    return sum;
}

// checks for the 4, 16 sequence found in unhappy numbers
function containsUnhappySequence(sequence){
    let containsSixteen = alreadyChecked[alreadyChecked.length-1] === 16;
    let containsFour = alreadyChecked[alreadyChecked.length-2] === 4;
    if (containsSixteen && containsFour){
        return true;
    } else {
        return false;
    }
}

// test the next number and empty out the array of already checked numbers
function reset() {
    originalNum++;
    currentNum = originalNum;
    alreadyChecked = [];
}


function findHappiness() {
    while (happyNumbers.length <= 143) {
        let sum = sumOfSquares(currentNum);
        currentNum = sum;
        alreadyChecked.push(currentNum);

        if (sum === 1) {
            happyNumbers.push(originalNum)
            reset();
        } else if(containsUnhappySequence(alreadyChecked)) { 
            unhappyNumbers.push(originalNum);
            reset();
        }
    }
    console.log(happyNumbers);
    console.log(unhappyNumbers);
}



findHappiness();



    



   




