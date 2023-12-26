import fs from 'fs';

const data = fs.readFileSync('input.txt' , 'utf-8').split('\n');
// console.log(data);

let winningCards =[];
let drawnCards = [];

data.map(element => {
    const number = element.split(": ")[1];
    // console.log(number);
    const [winning , yourCards] = number.split(' | ');
    winningCards.push(winning);
    drawnCards.push(yourCards);
})

let winningNumbers = [];
for(let i = 0 ; i<drawnCards.length ; i++){
    const elementsA = winningCards[i].split(' ').filter(v => v !== '');
    const elementsB = drawnCards[i].split(' ').filter(v => v !== '');
    // console.log(elementsA);
    // console.log(elementsB); 

    let matchingCounter = 0;
    for (let j = 0; j < elementsA.length; j++) {

        if (elementsB.includes(elementsA[j])) {
          matchingCounter++;
        }
    }
    // console.log(matchingCounter);
    winningNumbers.push(matchingCounter);
}
// console.log(winningNumbers);
const points = winningNumbers.map(v => {
    const powers = Math.pow(2 , v-1 );
    const value = Math.floor(powers);
    return value;
})
console.log(points);
const sum = points.reduce((s,v) => s+v , 0);
console.log(sum);