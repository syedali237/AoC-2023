import fs from 'fs';

fs.readFile('./input.txt' , 'utf8' , (err ,data)=>{
    if (err){
        console.error(err);
        return;
    }

// console.log(data);

const input = data;
const array = input.split('\n');
// console.log(array);

//getting numbers from values
const values = array
.map((line)=> {
    let first = line.split('').find((v)=> !Number.isNaN(Number(v)));
    let second = line.split('').findLast((v)=> !Number.isNaN(Number(v)))
    return Number(first + second);
})

// console.log(values);

// sum of array elements

const j = values.reduce((s ,v) => s+v, 0);

// let j = 0;
// for(let i=0 ; i < values.length ; i++){
//     j += values[i];
// }

console.log(j);

}) ;

