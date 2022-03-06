//1. concatenacion

// const fullName = (name,LastName)=>{
//     return `${name} ${LastName}`
// };

// console.log(fullName("Alex","Beltran"));

// 2. Suma de numeros:

// const addition = (num1,num2)=>{
//     return num1+num2
// };

// console.log(addition(10,20));

// 3. Booleanos:

// let  yes = true;//true = 1;
// let  no = false;//false = 0;

// console.log((true+false),(true+true),(false+false));

// //si se suma un string con un Booleano, el booleano se transforma a texto

// console.log(("true"+false),("true"+"true"),(false+"true"));

//EJEMPLO APLICADO:

//Calculador de edad:

// const age =(name,lastName,year)=>{
//     return `${fullName(name,lastName)} tiene ${2022-year} anios de edad.`
// };

// console.log("Ingresar nombre, primer apellido y anio de nacimiento");

// let input = process.argv;

// (()=>{
//     for(i=0;i<2;i++){
//         input.shift();
//     };
// })();

// console.log(age(input[0],input[1],input[2]));



//-------------------------------------------------------------------------

//ESTRUCTURA DE CONTROL

// 1. if/else

//Programa de votaciones

// const age = 17;

// const canOrCant = (age)=>{
//     if(age<18){
//         return("No puede votar. Menor de edad.");
//     }else{
//         return("Si puede votar. Mayor de edad.");
//     };
// }

// console.log(canOrCant(age));


/*

Si el numero es multiplo de 3 decir "bip"
Si el numero es multiplo de 5 decir "bop"
Si el numero es multiplo de 3 y de 5 decir "bipbod"
Si el numero NO es multiplo de 3 y de 5 mostrar el numero

*/

// let num = 15;

// const multiplo = (num)=>{
//     if(num%3 == 0){
//         if(num%5 == 0){
//             console.log("bipbop")
//         }else{
//             console.log("bip")
//         }
//     }else if(num%5 == 0){
//         console.log("bop")
//     }else{
//         console.log(num)
//     };
// };

// multiplo(num);


//SWITCH

// const week = [
//     'monday',
//     'tuesday',
//     'wednesday',
//     'thursday',
//     'friday',
//     'saturday',
//     'sunday'
// ];

// const randomDay = week[Math.floor(Math.random()*7)];

// switch(randomDay){
//     case 'monday':
//         console.log("Es lunes");
//     break;
//     case 'tuesday':
//         console.log("Es Martes");
//     break;
//     case 'wednesday':
//         console.log("Es Miercoles");
//     break;
//     case 'thursday':
//         console.log("Es Jueves");
//     break;
//     case 'friday':
//         console.log("Es Viernes");
//     break;
//     case 'saturday':
//         console.log("Es Sabado");
//     break;
//     case 'sunday':
//         console.log("Es Domingo");
//     break;
// };

//CICLOS

//1.While


// let loading = 0;

// while(loading<=100){
//     console.log(`Carga al ${loading}%.`)
//     loading++;
// };


//2.FOR

//Tablas de multiplicar

// const tabla = (num)=>{
//     for(i=1;i<=10;i++){
//         console.log(`${num} * ${i} = ${num*i}\n`);
//     };
// };

// tabla(9);


//funciones


//Ejercicio para calular la nota del estudiante



// const calcularNota = (nota)=>{
//     if(nota>=3){
//         return("el estudiante pasa");
//     }else{
//         return("el estudiante reprueba");
//     }
// };

// console.log(calcularNota(3.0));


//Arrays

// const people = ["Fernando", "Melissa", "Maria"];
// const salaries = [1000,1200,3000];

// people.forEach((item,index)=>{
//     console.log(`${item} tiene un salario de $${salaries[index]}.`)
// });


// const people = [
//     {
//         'nombre':'Fernando',
//         'edad':'18',
//     },
//     {
//         'nombre':'Melissa',
//         'edad':'36',
//     },
//     {
//         'nombre':'Maria',
//         'edad':'21',
//     }
// ];

// people.forEach((item)=>{
//     console.log(`${item.nombre} tiene ${item.edad} anios de edad.`)
// });


//CLASES    


// class Carro {
//     constructor(marca, tipo, puertas){
//         this.marca = marca;
//         this.tipo = tipo;
//         this.puertas = puertas;
//         this.creadoEn = 'Hoy';
//         this.encendido = false;
//         this.gasolina = 100;
//     };
//     onOff(){
//         this.encendido = !this.encendido;
//         if(this.encendido){
//             return `El carro esta encendido.`
//         }else{
//             return `El carro esta apagado.`
//         };
//     };
//     travel(consumo=0){
//         if(this.encendido){
//             if(consumo<this.gasolina){
//                 this.gasolina = this.gasolina-consumo;
//                 return `Nivel de gasolina: ${this.gasolina}%.`
//             }else{
//                 if(this.gasolina!=0){
//                     return `El nivel de consumo supera la cantidad actual. No hay gasolina suficiente.`
//                 }else{
//                     return `El nivel de gasolina se agoto por completo.`
//                 };
//             };
//         }else{
//             return `Debes encender el carro para viajar.`
//         };
//     };
//     fill(quantity){
//         const capacidad = this.gasolina+quantity;
//         if(capacidad>100){
//             return `El tanque se encuentra en nivel: ${this.gasolina}%. Debes cargar menos gasolina, no puedes cargaar esa cnatidad.`
//         }else{
//             this.gasolina += quantity;
//             return `El tanque se encuentra en nivel: ${this.gasolina}%.`
//         };
//     };
// };


// let carro = new Carro("Masda","Sedan",2);








