const fs = require('fs');

function getSum(string){
    let digitsOnly = string.replace(/\D/g, '');
    
    if(digitsOnly.length == 0){return 0;}

    let len = digitsOnly.length;
    let first = digitsOnly.charAt(0);
    let last = digitsOnly.charAt(len - 1);
    let num = first + last
    
    return parseInt(num)
}

fs.readFile('input.txt', (err, data) => {
    if (err) throw err;
    let text = data.toString();
    let lines = text.split(/\n/);

    let calibrationSum = 0;
    let numberOfRows = lines.length;
    for(let i = 0; i < numberOfRows; i++){
        calibrationSum += getSum(lines[i]);
    }

    console.log("Answer:", calibrationSum);
})

// Answer found - 56108