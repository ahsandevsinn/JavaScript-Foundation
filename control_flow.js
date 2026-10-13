// IF
// if statement exceutes a code when condition is true
let age = 18;
if(age >= 18){
    console.log("You are eligible to vote.");
}

// else
// else statement executes a code when condition is false
let age1 = 15;
if(age1 >= 18){
    console.log("You are eligible to vote.");
}else{
    console.log("You are not eligible to vote.");
}

// else if
// else if statement executes a code when condition is true and false
let age2 = 20;
if(age2 < 18){
    console.log("You are not eligible to vote.");
}else if(age2 === 18){
    console.log("You are eligible to vote but you need to register first.");
}else{
    console.log("You are eligible to vote.");
}

// switch
// switch statement executes a code when condition is true and false
let day =4;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day"); 
}

// for
// for loop exceutes code based on a specified number of iterations
for(let age = 0; age <= 5 ;age++){
    console.log(`You are a Kid ${age} years old`);
}

// while loop
// while loop runs when condition is true and stops when condition is false
let age3 = 0;
while(age3 <= 5){
    console.log(`You are a Kid ${age3} years old`);
    age3++;
}

// do while loop
// do while loop runs at least once and then checks the condition
let age4 = 0;
do{
    console.log(`You are a Kid ${age4} years old`);
    age4++;
}while(age4 <= 5);


// break
// break statement is used to exit a loop or switch statement before it has completed all its iterations.
for(let age = 0; age <= 10 ;age++){
    if(age === 5){
        break;
    }
    console.log(`You are a Kid ${age} years old`);
}

// continue
// continue statement is used to skip the current iteration of a loop and move on to the next iteration.
for(let age = 0; age <= 10 ;age++){
    if(age === 5){
        continue;
    }
    console.log(`You are a Kid ${age} years old`);
}