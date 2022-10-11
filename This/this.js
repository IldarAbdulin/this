//1
// function test() {
//     console.log(this)
// }
// test()

//2
// "use strict"
// function test() {
//     console.log(this)
// }
// test()


//3
// let obj1 = {
//     name: 'test 1',
//     printContectValue: function() {
//         console.log(this)
//     }
// }
// let obj2 = {
//     name: 'test 2'
// }
// let obj3 = new Object();
// obj3.name = 'test 3';

// obj2.printContectValue = obj1.printContectValue;
// obj3.printContectValue = obj1.printContectValue;

// obj1.printContectValue();
// obj2.printContectValue();
// obj3.printContectValue();


//4
// "use strict";

// function User(login , email) {  
//     console.log(this);  
// }
// class Client {
//     constructor(firstName , lastName) {
//         console.log(this);
//     }
// }

// let u1 = new User();
// let c1 = new Client();

// let u2 = User();
// let c2 = Client();


//5
// let obj1 = {
//     prop1: 'test',
//     prop2: 123,
// }

// let obj2 = {
//     prop1: 'hello',
//     prop2: 'world',
// }

// function show() {
//     console.log(this.prop1);
//     console.log(this.prop2);
// }
// show();

// show.apply(obj1);
// show.apply(obj2);

// let newFunction = show.bind(obj1);
// newFunction();



//6
// let obj1 = {
//     prop1: 'hello',
//     prop2: 'world',
// }
// function show(elementSelector, color) {
//     let element = document.querySelector(elementSelector);
//     element.style.color = color;
//     element.innerHTML += this.prop1 + '';
//     element.innerHTML += this.prop2;
// }
// show.apply(obj1 , ['#elem1' , 'red']);
// show.apply(obj1 , ['#elem2' , 'green']);

// let f = show.bind(obj1, '#elem3' , 'blue')
// f();


//7
// let div = document.querySelector('div')
// let h1 = document.createElement('h1')
// h1.style.color = 'red'
// div.append(h1)
// function showWithDelay1(array) {
//     let current = 0;
//     let timer = setInterval(() => {
//         h1.innerHTML = (array[current] + '<br />');
//         current++;

//         if(current == array.length)
//         clearInterval(timer);
//     }, 1000);
// }
// let testArray = [1, 2, 3, 4, 5, 6, 7, 8];
// showWithDelay1(testArray)