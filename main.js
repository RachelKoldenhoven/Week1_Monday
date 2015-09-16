//JS Workshop Monday 9/14

// Log all answers to the console and write them to document
// =======================================================

//1. Log your name to the console (as a string).
console.log("Rachel Koldenhoven");
//2. Declare a variable called name, log it to the console.
var name = "Rachel Koldenhoven"
console.log(name)
//3. Declare two variables with number values. Add, subtract, multiply and divide them.
var x = 69;
var y = 007;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x/y);
//4. Declare two variables with string values. Create a third variable that concatenates them.
var str1 = "Rachel ";
var str2 = "loves ";
var str3 = "volcanoes!"
var res = str1.concat(str2,str3);
console.log(res);
//5. Add, subract, multiply and divide the strings '5' and '3'. Observe and explain the results.
var str4 = "5";
var str5 = "3";
console.log(str4 + str5);
//(program):253//53
//undefined
console.log(str4 - str5);
//(program):22//2
//undefined
console.log(str4 * str5);
//(program):215//15
//undefined
console.log(str4/str5);
//(program):21.6666666666666667//1.6666666666666667
//undefined
//The result is an example of "type coercion" in which JS changes the string to
//a number.  Still, why is 5 + 3 + 53?
//6. Create a prompt that asks a user to pick a number. Double the answer.
var number = prompt("Pick a number, 1");
number;
number*2;
//7. Create a custom alert.
alert("I love volcanoes!");
//8. Declare three variables called length, width and height. Calculate area and volume.
var length = 5;
var width = 3;
var height = 11;
console.log(length*width);
console.log(length*width*height);
//9. Ask for a user's name, age and city. In a single command display/log the sentence:
// "My name is...I'm....years old, and I live in....."
var name = prompt("What is your name?");
var age = prompt("How old are you?");
var city = prompt("What city do you live in?");
console.log("My name is " + name + ", I'm " + age +"years old, and I live in " + city);
//10. Create an alert that uses the response from a prompt.
var volcano = prompt("What is your favorite volcano?");
alert(volcano);
