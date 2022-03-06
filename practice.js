console.group('Excersise: Turn pounds into kilograms');

//First way

const multiplying = (pound)=>{
    return pound*0.454;
};

//Second way

const dividing = (pound)=>{
    return pound/2.2046;
};

console.log(multiplying(65));
console.log(dividing(20));

console.groupEnd()

console.group('Excersise: Turn pounds into kilograms');

//First way 

const toKilometers=(milles)=>{
    return milles*(8/5);
};

const toMilles=(kilometers)=>{
    return kilometers/(8/5);
};

console.log(toKilometers(50));
console.log(toMilles(80));

console.groupEnd()

console.group('Excersise: Calculate area of right triangle');

const area = (base,heigth)=>(1/2)*base*heigth;

console.log(area(3,5));

console.groupEnd()

console.group('Excersise: The major number');

const numbers = [1,6,8,4,2,7,10,3,5];

numbers.sort((a,b)=>a-b);

console.log(numbers[numbers.length-1]);

console.groupEnd()

console.group('Excersise: Even or Odd number');

numbers.forEach(item=>item%2==0?console.log(`${item} is even`):console.log(`${item} is Odd`));

console.groupEnd()

console.group('Excersise: Sort numbers by each multiplies from 2 to 5');

const table = (number)=>{
    let array = [];
    for(i=1;i<=5;i++){
        array.push(number*i);
    };
    console.log(array.join(" "));
};

table(1);
table(2);
table(3);
table(4);
table(5);

console.groupEnd()

console.group('Excersise: Funtion to calculate major number');

const max = (a,b,c)=>{
    let array = [a,b,c].sort((acc,item)=>acc-item);
    console.log(array[array.length-1]);
};

max(5,2,6);

console.groupEnd()

console.group('Excersise: Largest name');

let heroes = ['Deadpool','Ciclope','Magneto','Profesor Charles Xavier'];

const largestName = (array)=>{
    let length = {};
    
    heroes.forEach(item=>{
        length[item] = item.length;
    });
    
    const result = Object.entries(length).sort((a,b)=>a[1]-b[1]);
    
    console.log(result[result.length-1][0]);
};

largestName(heroes);

console.groupEnd()

console.group('Excersise: Names that his first letter is "S".');

const heroes2 = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk','Spiderman','Captain Marvel'];


const heroesWithS = (names)=>{
    let array = [];
    names.forEach(item=>{
        if(item[0].toLocaleLowerCase()=='s'){
            array.push(item);
        }
    })
    console.log(array.join(", "));
};

heroesWithS(heroes2);

console.groupEnd()





