import fs from 'fs';

const input = fs.readFileSync('input.txt' ,'utf-8');

let total = 0 ;

const numberMappings = {
    one : 'one1one',
    two : 'two2two',
    three : 'three3three',
    four : 'four4four',
    five : 'five5five',
    six : 'six6six',
    seven : 'seven7seven',
    eight : 'eight8eight',
    nine : 'nien9nine'
}

for (let line of input.split('\n')){
    for (let num of Object.keys(numberMappings)){
        line = line.replaceAll(num, numberMappings[num]);
    }

    const numbers = line.split('').filter(v=> !isNaN(parseInt(v)));
    total += parseInt(`${numbers[0]}${numbers[numbers.length -1]}`);
}

console.log(total);