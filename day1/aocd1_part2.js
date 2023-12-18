import fs from 'fs';

fs.readFile('./example2.txt' , 'utf8' , (err ,data)=>{
    if (err){
        console.error(err);
        return;
    }
    const input = data;
    const array = input.split('\n');
    console.log(array);
    const numberWords = ['one' , 'two' , 'three' , 'four' , 'five' , 'six', 'seven'];
    console.log(numberWords);

    array.map((line) =>{
        let firstNumber = line.match((v) => numberWords[v]);
        console.log(firstNumber);
    })


    // for(let i=0 ; i<numberWords.length ; i++){
    //     if 
    // }


    array.map((line)=>{
        let first = line.split('').findIndex((v) => Number(v));
        let second = line.split('').findLastIndex((v)=> Number(v));
    })

});