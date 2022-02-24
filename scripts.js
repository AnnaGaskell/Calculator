/*DONE*/   //1.contain functions for all of the basic math operators
//creating functions for add subtract multiply divide

function add(x,y) {
	return x + y
};

function subtract(x,y) {
	return x - y
};

function multiply (x,y) {
    return x * y
};

function divide(x,y) {
    return x / y
};
/*DONE*/  //2. create function operate that takes an operator and 2 numbers 
// and then calls one of the above functions on the numbers

function operate (x, operation, y) {
    if (operation === '+') return add(x, y);
    if (operation === '-') return subtract(x, y);
    if (operation === '*') return multiply(x, y);
    if (operation === '/') return y === 0 ? "Can't divide by 0!" : divide(x, y);
}

console.log(operate(10,"*", 4));

/*DONE*/  //3. HTML and CSS

//4. Create the functions that populate the display when you click the number buttons
// you should be storing the ‘display value’ 

//5.Make the calculator work! You’ll need to store the first number that is input into 
//the calculator when a user presses an operator, and also save which operation has been chosen 
//and then operate() on them when the user presses the “=” key.

    //a.You should already have the code that can populate the display, so once operate() 
    //has been called, update the display with the ‘solution’ to the operation.

    //b. You need to figure out how to store all the values and 
    //call the operate function with them.

//Gotchas: watch out for and fix these bugs if they show up in your code:
    //a. Users should be able to string together several operations and 
    //get the right answer, with each pair of numbers being evaluated at a time. 
    //For example, 12 + 7 - 5 * 3 = should yield 42.

    //b. Your calculator should not evaluate more than a single pair of numbers at a time.
    // Example evaluate the first pair of numbers (12 + 7), second, display the result of 
    // that calculation (19), and finally, use that result (19) as the first number in your new calculation, 
    //along with the next operator (-).

    //c. You should round answers with long decimals so that they don’t overflow the screen.

    //d.Pressing = before entering all of the numbers or an operator could cause problems!

    //e. Pressing “clear” should wipe out any existing data.. make sure the user is 
    //really starting fresh after pressing “clear”

    //f.Display a snarky error message if the user tries to divide by 0… 
    //don’t let it crash your calculator!