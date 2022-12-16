// var obj={name:"hello1",age:"19"}

// function fun(a) {
//   console.log(a)

//   a.name="hello2"
//   return a
// }

// console.log(fun(obj))

// console.log(obj)
   

// function sum(num1, num2 = num1) {
//     console.log(num1 + num2);
// }
  
// sum(10);

// let arr = [1,2,3,4,5,6,7,8,9,10,"12"];

// let ans = arr.filter((ele)=>{
//     return ele%2==0;
// })

// console.log(ans);
// console.log(5=='5');


// var a = 100;
// var X = 0;
// do{
//     let p = 10;
//     a=a/p;
//     X++;
// }
// while(a >10);

// console. log(a, X);


// var x = 1;
// var y = 10;
// do{
//     let x = y;
//     x = x-1;
//     var result = x+y;
// }
// while(x==0);

// console. log(result);



// const person = {
//     name : 'Raj',
//     age : 26
// };

// person.name = 'Rohan';
// console.log(person.name, person.age);



// const myobj = {
//     message : 'Lets, Go',
//     printMessage(){
//         console.log(this.message);
//     }
// };

// setTimeout(myobj.printMessage, 1000);



// const result = [];
// const arr = ['a','b','c'];
// for(const [index, value] of arr.entries()){
//     if(index>1) break;
//     result.push(value);
// }

// console.log(result);



// function sayHi(){
//     return (()=>0)();
// }
// console.log(typeof sayHi());


// ((()=>{
//     console.log("Hi");
//     }
// ))();



// for(const i in "String('123')"){
//     console.log(i);
// }


// a = [1,2,3]
// a[10] = 45;
// console.log(a.length, a[2], a[5]);


// console.log(Math.max()>Math.min())

// console.log(console.log());


// for(var i=0; i<7; i++){
//     setTimeout(()=>{
//         console.log(i);
//     } ,1000*i);
// }




// var person = {
//     details: function(city, country){
//         console.log(this.name, city, country);
//     }
// }

// var person1 = {
//     name: 'Raj',
// }

// console.log(person.details.apply(person1, ['Delhi', 'India']));


// console.log(process.env);


// console.log([...Array(5)]);



// let arr = [1,2,2,3,4,4,4,5];
// let res = []

// let occurance = {}

// for(let i=0;i<arr.length;i++){
//     occurance[arr[i]] = (occurance[arr[i]] || 0) + 1;
// }


// for(let item in occurance){
//     if(occurance[item] >= 3){
//         res.push(item);
//     }
// }


// console.log(occurance);

// console.log(res);
