/*
Conditional Statements - allows us to control the flow of our program. It allows us to run a statement/instruction if a condition is met or run another set of instruction if otherwise.'

(if, else if. else)
*/

let numA = 1;

//(if) statement executes a statement if a specified condition is true

if (numA < 0) {
    console.log(`Hello`);
}
else
    console.log(`Hi`);

/*
syntax:
if (condition) {
    statement/s;
}
    The result of the expression added in the (if) condition must result to true, else, the statement inside will not run.
*/

let city = "New York";

if (city === "New York") {
    console.log(`Welcome to NY!`);
}
else if (city == 'New york') {
    console.log(`Welcome to New York!`);
}
else {
    console.log(`Again`);
}

/**
 (else if) executes a statement if previous conditions are false and if the specified condition is true. *optional: can be added to capture additional conditions to change the flow of a program.

 if the (if) condition was passed and run, we will no longer evaluate to (else if) and end the process there.
 */

/*
(else) executes a statement if all other conditions are false.
optional and can be added to capture any result to change the flow of the program.
*/

//return statement can be utilized with conditional statement in combination with functions to change values to be used for other features of our application.

let message = "No message";

function determineTyphoonIntensity(windSpeed) {
    if (windSpeed < 30) {
        return "Not a typhoon yet.";
    }
    else if (windSpeed <= 61) {
        return "Tropical depression detected.";
    }
    else if (windSpeed >= 62 && windSpeed <= 88) {
        return "Tropical storm detected.";
    }
    else if (windSpeed >= 89 || windSpeed <= 117) {
        return "Severe tropical storm detected.";
    }
    else
        return "Typhoon detected.";
}

//returns the string to the variable 'message' that invoked it.

message = determineTyphoonIntensity(30);
console.log(message);

//console.warn() is a good way to print warnings in our console that could help us developer act on certain output within our code.

console.warn(message);

/*
Section Truthy and Falsy

In JS, a "Truthy" value is a value that is considered true when encountered in a Boolean context.
-values are considered true unless defined otherwise.
-Falsy values/exeptions for truthy

1. false
2. 0
3. -0
4. ""
5. null
6. undefined
7. NaN
*/

if (true) {
    console.log(`Truthy`);
}

if ("") {
    console.log(`Truthy`);
}

if ([]) {
    console.log(`Truthy`)
}

//Conditional (Ternary) Operator
/*
The conditional (Ternary) operator takes in three operands:
1. condition
2. expression to execute if the condition is truthy
3. expression to execute if the condition is falsy

-can be used as an alternate to an (if-else) statement

-Ternary operators have implicit 'return' statement, meaning without 'return' keyword, the resulting expression can be stored in a variable

syntax: (expression) ? ifTrue : ifFalse;
*/

let ternaryResult = (1 < 23) ? true : false;
console.log(ternaryResult);

let result = (numA < 0) ? `Hello` : `Hello Again`;
console.log(result);

let wind = 30;

let typhoonIntensity =
    (wind < 30) ? `Not a typhoon yet.` :
        (wind <= 61) ? `Tropical depression detected.` :
            (wind < 88) ? `Tropical storm detected.` :
                (wind <= 117) ? `Severe tropical storm detected.` :
                    console.log(typhoonIntensity);

//Try-Catch-Finally Statement
/**
 (try-catch) statements are commonly used for error handling.
 -there are instances when the application returns an error/warning that is not necessarily an error in the context of our code.
 -these errors are the result of an attempt of the application to execute a statement that is not possible.
 */

function showIntensityAlert(windSpeed) {
    try {
        alertat(determineTyphoonIntensity(windSpeed));
        //error/err are commonly used variable names to store the error message.
    }
    catch (err) {
        //typeof operator is used to check the data type of the variable and returns a string value that represents the data type.
        console.log(typeof err);
        //catch errors within try statement
        //In this care, the error is an unknown function 'alertat' that is not defined.
        console.warn(`error.message`);
        //error.message is used to access the information about the error.
    }
    finally {
        alert(`Intensity alert will show new alert.`);
        //continues to run the code after the try-catch block.
    }
}

showIntensityAlert(115);