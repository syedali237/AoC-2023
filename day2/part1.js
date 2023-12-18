import fs from 'fs';

const data = fs.readFileSync('input.txt' , 'utf-8').split('\n');
// console.log(data);
const maxCubes ={
    red : 12,
    blue : 14,
    green : 13
}
const array = [];

data.forEach(el => {
    // separating each elements
    const sets = el.split(': ')[1].split('; ').map((v)=> {
        const pull = v.split(', ');
        // console.log(pull);
        return pull.every((e) => {
            // separating number of cubes and color
            const [count , color] = e.split(' ');
            // console.log(count, color);
            // checking max cubes with color
            return maxCubes[color] >= count;
        })
    });
    const values = sets.every(a => a === true);
    // console.log(values);
    array.push(values);
});
// console.log(array);

//finding true elements of only arrays
const trueIndexes = array.reduce((indexes, element, index) => {
    if (element === true) {
      indexes.push(index+1); 
      // indexes : empty array
      // +1 because game starts from 1 so index of 0 means GAME 1
    }
    return indexes;
  }, []);

  console.log("Indexes of true elements:", trueIndexes);
   const j = trueIndexes.reduce((s ,v) => s+v, 0); // sum of indexes of true values
    console.log("Sum of Game IDs: " ,j);