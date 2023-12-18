import fs from 'fs';

const data = fs.readFileSync('./example.txt' , 'utf-8');

const input = data.split('\n');
// console.log(input);

let array = [];

input.forEach(element => {
   const numbers = element.split('').filter(v => !isNaN(parseInt(v)));
//    console.log(numbers);
    const total = numbers[0] + numbers[numbers.length -1];
    // console.log(total);
    array.push(total);    
});

console.log(array);

const values = array.map(e => parseInt(e));

console.log(values);

let j = 0;
for(let i=0 ; i < values.length ; i++){
    j += values[i];
}
console.log(j);