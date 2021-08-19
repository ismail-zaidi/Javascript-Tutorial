// String, Numbers , Boolean , null , undefined

/*
const name = 'John';

const age = 30 ;

const rating=4.5;

const isCool = true;

const x=null;

const y = undefined ;

let z ;

console.log (typeof(name));



// Concatenation 


const name = 'John';

const age = 30 ;

console.log ( 'My name is ' + name + ' and I am ' + age);

//Template String
const hello =`My name is ${name} and I am ${age}`
console.log ( hello)
 



const s ='technology, computers, it, code';
console.log(s.split(', '));

//Arrays - variables that hold multiple values


const numbers = new Array (1,2,3,4,5);
const fruits = ['apples','oranges','pears', 1, true];
fruits[3]='grapes';
fruits.push('mangos');
fruits.unshift('strawberries') ;
fruits.pop();
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'));

console.log (fruits);



const person ={
    firstname :'john',
    lastname : 'doe',
    age:30,
    hobbies :['music','movies','sports'],
    address: {
        street:'50 main st',
        city :'Boston',
        state:'MA'
    }

}

console.log(person.firstname ,person.lastname);
console.log(person.hobbies[1]);
const {firstname , lastname} =person;
console.log(firstname);
person.email ='john@gmail.com';
console.log(person);


const todos =[
   { id:1,
    text: 'take a trash',
    isCompleted : true
   },

   { id:2,
    text: 'meeting with boss',
    isCompleted : false
   },
   { id:3,
    text: 'dentist appt',
    isCompleted : true
   }
];




console.log(todos);
console.log(todos[1].text)

const todoJSON =JSON.stringify(todos);
console.log(todoJSON);

//for loop
for (let i =0; i<=10 ; i++) {
    console.log(`For Loop Number: ${i}`);
}
//While 

let i=0;
while (i<10) {
    console.log(`while loop Number ${i}`);
    i++;
}



for (let i =0; i<todos.length; i++) {
    console.log(todos[i].text);
}



for (let todo of todos) {
    console.log(todo.id);
}

//for each , map , filter 


todos.forEach (function(todo) {
    console.log(todo.text);
}); 

const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);


const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted===true;
}).map(function(todo){
    return todo.text;
})
console.log(todoCompleted);




//Conditionals

const x=9;

if (x===10) {
    console.log ('x is 10');
} else if (x>10)  {
    console.log ('x is greater than 10');
}else  {
    console.log ('x is less than 10');
}

const x=6;
y=11

if (x>5 && y  >10) {
    console.log ('x is greater than 5 and y is greater than 10');
} 

const x= 11;
const color = x>10 ? 'red' : 'blue';
console.log (color);

switch(color) {
    case 'red' : console.log('color is red');
    break;

    case 'blue' : console.log('color is blue');
    break;
    default: console.log('color is other');
    break;
}

// functions

function addNums(num1=1,num2=1){
    return (num1+num2);
}

console.log(addNums(5,5));


// Arrow function

const addNums = (num1=1,num2=1) => num1+num2 ;

console.log(addNums(5,5));

//Constructor function

function Person(firstName ,lastName ,dob) {
    this.firstName =firstName;
    this.lastName =lastName;
    this.dob=new Date (dob);
  
}

Person.prototype.getBirthYear =function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName =function() {
    return (`${this.firstName} ${this.lastName}`);

}*/

//Class

class Person {
    constructor(firstName ,lastName ,dob){
        this.firstName =firstName;
        this.lastName =lastName;
        this.dob=new Date (dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName () {
        return (`${this.firstName} ${this.lastName}`);
    }
}

//Instantiate object 

const person1 =new Person('John','Doe','4-3-1980');
const person2 =new Person('Mary','Smith','4-3-1989');
console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person1);

