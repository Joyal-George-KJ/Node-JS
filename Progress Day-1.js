// Simple JavaScript Using Node JS
// node execute command : node <filename>.js
// Some Variable Declarations keywords are "var, let, const" we can use it to declare any DataType

var number = 10;
let name = 'Sample Name';
const phone = "+91********00";




// Print Statements

console.log(`Number : ${number}, \nName : ${name}\nPhone : ${phone}`); // Displays All variables that was declared above




// some function declarations 

// Normal Function

function PrintNumber(/* Parameters */) {
    // code...
    console.log(`Number : ${number}`); 
}

// Arrow function
const PrintName = () => {
    console.log(`Name : ${name}`);
}
  
// Anonymous Function
console.log(() => {
    `Phone : ${phone}`
});



// function call

PrintNumber();
PrintName();



// Loops, Condition Statements 
// for Loop
for (let index = 0; index <= 10; index++) {
    console.log(index);
}

// for each Loop
['Name1', 'Name2', 'Name3', 'Name4', 'Name5'].forEach(elements => {
    console.log(elements);
});


let objectSample = {'key1' : 'objectvalue1', 'key2' : 'objectvalue2', 'key3' : 'objectvalue3'}; // sample object

// for in loop
for (const key in objectSample) {
    console.log(objectSample[key]);
}

// while Loop

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// Switch Statement 
let key = 1;
switch (key) {
    case 1:
        console.log('Key Found!: Key == 1');
        break;

    default:
        console.log('Key Not Found!: Key == ?');
        break;
}

// if, if else, if else if, nested if

if (/* condition */ 10 == 10)
    console.log('true');



if (0 > 10) {
    console.log('0 is greater than 10');
} else {
    console.log('0 is less than 10');
}



if (10 != 20) {
    if (10 != 15) {
        console.log('nested if working!');
    }
}



if ('1' === 1) {
    console.log('"1" === 1');
}   else if ('1' == 1) {
    console.log("'1' == 1");
}   else {
    console.log('error : if else if ');
}

/* 
    Note: 
        # Triple equal to means it will check the datatype too and it is also known as stricktly equal to. 
        # We can deside wheather we need to use semi-colon to end the line (expression) or not JavaScript don't care about it.
        # While doing the loops and conditions we can choose either use the curly brases or not.
        # Always remeber to use let or const to declare a variabe.
        # we can use '', "", `` any of this to wrap a string. I prefer using `` because it allow us to concatinate variable display without breaking the '' or "" and adding a + is really not good by using `` we can concatinate variables by adding ${} inside the brases we add variables or any kind of expressions.

        please send me your feedbacks as message 

        social media links
            LinkedIn :
            InstaGram :
            Twitter : Soon 
*/