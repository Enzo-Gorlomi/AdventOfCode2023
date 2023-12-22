const fs = require('fs');

let numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", 1, 2, 3, 4, 5, 6, 7, 8, 9];

function findSpelledNumbers(string){
    if(string.length == 0){return 0;}
    let lowestIndex = string.length;
    let highestIndex = 0;
    let firstNum;
    let lastNum;

    for(let i = 0; i < numbers.length; i++){
        
        let index = string.indexOf(numbers[i]);
        if((index >= 0) && (index <= lowestIndex)){
            lowestIndex = index;
            firstNum = numbers[i];
        }
        
        index = string.lastIndexOf(numbers[i])
        if((index >= 0) && (index >= highestIndex)){
            highestIndex = index;
            lastNum = numbers[i];
        }
    }

    if(typeof(firstNum) == "string"){
        firstNum = numbers.indexOf(firstNum) + 1;
    }
    if(typeof(lastNum) == "string"){
        lastNum = numbers.indexOf(lastNum) + 1;
    }

    foundValue = "" + firstNum + lastNum;

    return parseInt(foundValue);

}

fs.readFile('input.txt', (err, data) => {
    if (err) throw err;
    let text = data.toString();
    let lines = text.split(/\n/);

    let calibrationSum = 0;
    let numberOfRows = lines.length;
    for(let i = 0; i < numberOfRows; i++){
        calibrationSum += findSpelledNumbers(lines[i]);
    }

    console.log("Answer:", calibrationSum);
})

// Answer found - 55652