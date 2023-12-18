import fs from 'fs';

const data = fs.readFileSync('./example2.txt' , 'utf-8').split('\n');
console.log(data);

const numberWords = {
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


data.forEach(element=> {
    const numbers = element.split('').filter(e => !isNaN(parseInt(e)));
    const total = numbers[0] + numbers[numbers.length -1];
    console.log(numbers);
    console.log(total);
})
