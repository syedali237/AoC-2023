import fs from 'fs';

const data = fs.readFileSync('example.txt' , 'utf-8').split('\n');


const array = [];
data.forEach(el => {
    const maxCubes = { red : 0, blue : 0, green : 0};
    const sum = el.split(': ')[1].split('; ').forEach((v)=> {
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
    const power = (`${maxCubes.red}`*`${maxCubes.green}`*`${maxCubes.blue}`);
    array.push(power);  
});

console.log(array);
  const j = array.reduce((s ,v) => s+v, 0); 
  console.log("Sum of Powers " ,j);
