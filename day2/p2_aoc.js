import fs from 'fs';

const data = fs.readFileSync('input.txt' , 'utf-8').split('\n');


const array = [];
data.forEach(el => {
    const maxCubes = { red : 0, blue : 0, green : 0};
     el.split(': ')[1].split('; ').forEach((v)=> {
          const pull = v.split(', ');
        //   console.log(pull);
        pull.forEach((e) => {
            const [count , color] = e.split(' ');
            // console.log(count, color);
            if (maxCubes[color] < Number(count)){
                   maxCubes[color] =  Number(count);
            }
        });
    });
    array.push(maxCubes);  

});

const sum = [];
// console.log(array);
array.forEach((game) => {
    const values = (`${game.red}`*`${game.green}`*`${game.blue}`);
    sum.push(values);
  });

  console.log(sum);
  const j = sum.reduce((s ,v) => s+v, 0); 
  console.log("Sum of Powers " ,j);
