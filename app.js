/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
	if (x >= y) {
		return x;
	} else {
		return y;
	}
};

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

const isAdult = (age) => {
	if (age >= 18) {
		return 'Adult';
	} else {
		return 'Minor';
	}
};

console.log('Exercise 2 Result:', isAdult(21));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

// Ref @ https://stackoverflow.com/questions/26926994/javascript-check-if-character-is-a-vowel

const isCharAVowel = (x) => {
	if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
		return true;
	} else {
		return false;
	}
};

console.log('Exercise 3 Result:', isCharAVowel('a'));
console.log('Exercise 3 Result:', isCharAVowel('y'));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/
const generateEmail = (name, domain) => {
	return `${name} @ ${domain}`;
};

console.log('Exercise 4 Result:', generateEmail('johnsmith', 'example.com'));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

const greetUser = (name, timeOfTheDay) => {
	return `Good ${timeOfTheDay}, ${name}!`;
};

console.log('Exercise 5 Result:', greetUser('Sam', 'morning'));

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

const maxThree = (num1, num2, num3) => {
	if (num1 >= num2 || num1 >= num3) {
		return num1;
	} else if (num2 >= num1 || num2 >= num3) {
		return num2;
	} else {
		return num3;
	}
};
console.log('Exercise 6 Result:', maxThree(5, 10, 8));

//  OR

// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
const maxOfThree = (num1, num2, num3) => {
	return Math.max(num1, num2, num3);
};

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

const calculateTip = (bill, tip) => {
	// return `${bill}` * (`${tip}` / 100);
	return bill * (tip / 100);
};

console.log('Exercise 7 Result:', calculateTip(50, 20));

/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/
// Ref: https://www.shecodes.io/athena/9670-convert-fahrenheit-to-celsius-in-javascript#:~:text=let%20fahrenheit%20%3D%20prompt(%22Enter,toFixed(2)%7D%60)%3B

const convertTemperature = (temp, scale) => {
	if (scale === 'C') {
		return (temp * 9) / 5 + 32;
	} else {
		scale === 'F';
		return ((temp - 32) * 5) / 9;
	}
};

console.log('Exercise 8 Result:', convertTemperature(32, 'C'));
console.log('Exercise 8 Result:', convertTemperature(32, 'F'));

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

// Ref: https://generalassembly.instructure.com/courses/573/pages/javascript-control-flow?module_item_id=46057

const basicCalculator = (num1, num2, operation) => {
	switch (operation) {
		case 'add':
			return num1 + num2;
		case 'subtract':
			return num1 - num2;
		case 'multiply':
			return num1 * num2;
		case 'divide':
			if (num2 !== 0) {
				return num1 / num2;
			} else {
				return 'Error';
			}
	}
};

console.log('Exercise 9 Result:', basicCalculator(10, 5, 'subtract'));

//  Level Up
