// store the person's name in a variable, and print a message to that the person
var a = "Merium Arafat";
console.log(a);
// store a person's name in a variable, and then print the person's name in lowercase,uppercase and titlecase
var b = "Merium Arafat";
var c = b.toLowerCase();
console.log(c);
var d = "Merium Arafat";
var e = d.toUpperCase();
console.log(e);
// Find a quote from a famous person you admire. print the quote and the name of the authother
console.log('albert elinstein once said,"A person who never made a mistake never tired anything news."');
// Use a variable to represent your favorite number. Then, using that variable, create a message that reveals your favorite number.
var f = 100;
console.log(f);
// Use a variable to represent a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, “\t” and “\n”, at least once
var g = "Merium";
var h = "Arafat";
console.log(" " + g + "\n" + h);
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
console.log("4+4=", "4+4");
console.log("4*4=", "4*4");
console.log("4/4=", "4/4");
console.log("4-4=", "4-4");
// You should create four lines that look like this:
console.log(4 + 4);
console.log(4 - 4);
console.log(4 * 4);
console.log(4 / 4);
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var i = 10;
console.log("my favourite number is:".concat(i));
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
var username = "Merium Arafat";
var date = new Date();
console.log(username);
console.log(date);
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var arr = [, "Merium Arafat", "Fizza", "Sumayya", "Maryam", "Menahil", "Affaf"];
console.log(arr + "\n");
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var k = ["Merium Arafat", "Fizza Azam", "ifrah", "sabhat"];
for (var n = 0; n < k.length; n++) {
    console.log("Hello," + k[n]);
}
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var models = [
    {
        1: "Honda motorycle",
        2: "Yamaha motorycle",
        3: "BMW motorycle",
    },
    {
        1: "Civic Car",
        2: "Fortuner Car",
        3: "City Car",
    },
];
for (var i = 0; i < models.length; i++) {
    for (var j = 1; j < models.length; j++) {
        console.log("I would like to own a " + models[i][j]);
    }
}
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var list = ['"fatima"', '"Ayesha"', '"HAZRAT ALI R.A"'];
for (var i = 0; i < list.length; i++) {
    var message = "DEAR, ".concat(list[i], ", I would like to invite to dinner.");
    console.log(message);
}
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var invitation = ["Arisha", "Komal"];
console.log(invitation[0] + " I Would like to invite on dinner at 8:00pm clock");
console.log("I found  a bigger dinner table that's why i invited more guest");
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests
var invitation = ["Arisha", "Komal"];
invitation.unshift("Sumayya");
invitation.splice(2, 0, "Sulmana");
invitation.push("zubia");
console.log(invitation[0] + " I Would like to invite on dinner at 8:00pm clock");
console.log("I invite only two people for dinner.");
console.log(invitation.shift(), "sorry you can’t invite them to dinner.");
console.log(invitation.pop(), "sorry you can’t invite them to dinner.");
console.log(invitation.pop(), "sorry you can’t invite them to dinner.");
console.log(invitation[0], invitation[1], "you are still invited");
invitation.pop();
invitation.shift();
console.log(invitation);
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
var car = "grey";
console.log(car == car);
console.log(car == "black");
console.log("grey" == car);
console.log("silver" != car);
console.log(car != "blue");
console.log(car != car);
console.log(car == "blue");
console.log("blue" == car);
console.log(car != "black");
console.log("black" != car);
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
//  Tests for equality and inequality with strings:-
// Equality
var string1 = "hello";
var string2 = "world";
console.log(string1 === string2); // False
// Inequality
console.log(string1 !== string2); // True
// Tests using the lower case function
var text = "Hello World";
var lowerCaseText = text.toLowerCase();
console.log(lowerCaseText === "hello world"); // True
//Numerical test involving equality, inequality, greater than and less than.....
var num1 = 34;
var num2 = 55;
console.log(num1 === num2); //false
console.log(num1 !== num2); //true
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
//Test using and and or operator
var marks = 10;
console.log(marks >= 0 && marks <= 100); //true
console.log(marks <= 0 && marks <= 100); //false
console.log(marks > 0 || marks > 100);
console.log(marks < 0 || marks > 100);
//Test whether an item is in a array or not
var fruit = ["Apple", "Banana", "Orange"];
for (var index = 0; index < fruit.length; index++) {
    if (fruit[index] === "Orange") {
        console.log("true");
    }
}
var fuit = ["Apple", "Banana", "Orange"];
for (var i_1 = 0; i_1 < fuit.length; i_1++) {
    if (fuit[i_1] === "Peach") {
        console.log("true");
    }
    else {
        console.log("not in array");
    }
}
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
var alien_color = 'green';
if (alien_color == "green") {
    console.log("You just earned 5 points!");
}
//failing version with no output.
var alien_color = 'red';
if (alien_color == 'green') {
    console.log("You just earned 5 points!");
}
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
var alien_color = 'green';
if (alien_color == 'green') {
    console.log("You just earned 5 points!");
}
else {
    console.log("You just earned 10 points!");
}
var alien_color = 'yellow';
if (alien_color == 'green') {
    console.log("You just earned 5 points!");
}
else {
    console.log("You just earned 10 points!");
}
/* //Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.
 */
var alien_color = 'red';
if (alien_color == 'green') {
    console.log("You just earned 5 points!");
}
else if (alien_color == 'yellow') {
    console.log("You just earned 10 points!");
}
else {
    console.log("You just earned 15 points!");
}
var alien_color = 'green';
if (alien_color == 'green') {
    console.log("You just earned 5 points!");
}
else if (alien_color == 'yellow') {
    console.log("You just earned 10 points!");
}
else {
    console.log("You just earned 15 points!");
}
var alien_color = 'yellow';
if (alien_color == 'green') {
    console.log("You just earned 5 points!");
}
else if (alien_color == 'yellow') {
    console.log("You just earned 10 points!");
}
else {
    console.log("You just earned 15 points!");
}
/*Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.
• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
• If the person is age 65 or older, print a message that the person is an elder. */
var age = 17;
if (age < 2) {
    console.log("You're a baby!");
}
else if (age >= 2 && age < 4) {
    console.log("You're a toddler!");
}
else if (age >= 4 && age < 13) {
    console.log("You're a kid!");
}
else if (age >= 13 && age < 20) {
    console.log("You're a teenager!");
}
else if (age >= 20 && age < 65) {
    console.log("You're an adult!");
}
else {
    console.log("You're an elder!");
}
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits
*/
var favorite_fruits = ['blueberries', 'apples', 'peaches'];
for (var index = 0; index < favorite_fruits.length; index++) {
    var element = favorite_fruits[index];
    if (favorite_fruits[index] == 'bananas') {
        console.log("You really like bananas!");
    }
    if (favorite_fruits[index] == 'blueberries') {
        console.log("You really like blueberries!");
    }
    if (favorite_fruits[index] == 'apples') {
        console.log("You really like apples!");
    }
    if (favorite_fruits[index] == 'kiwis') {
        console.log("You really like kiwis!");
    }
    if (favorite_fruits[index] == 'peaches') {
        console.log("You really like peaches!");
    }
}
/*Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again. */
var usernames = ['eric', 'admin', 'sana', 'omer', 'hamna'];
for (var index = 0; index < usernames.length; index++) {
    if (usernames[index] == 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello " + usernames[index] + ", thank you for logging in again!");
    }
}
/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
var usernames1 = [];
if (usernames1.length > 0) {
    for (var index = 0; index < usernames1.length; index++) {
        if (usernames1[index] == 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello " + usernames1[index] + ", thank you for logging in again!");
        }
    }
}
else {
    console.log("we need to find some users");
}
/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
var current_users = ['omer', 'ali', 'ahmed', 'saad', 'maaz'];
var new_users = ['sara', 'fatima', 'ALI', 'anus', 'saad'];
var current_users_upper;
for (var num1_1 = 0; num1_1 < current_users.length; num1_1++) {
    current_users_upper = current_users.map(function (user) { return user.toUpperCase(); });
}
for (var num2_1 = 0; num2_1 < current_users.length; num2_1++) {
    for (var num3 = 0; num3 < current_users_upper.length; num3++) {
        if (new_users[num2_1] === current_users[num3]) {
            console.log("Sorry " + new_users[num2_1] + ", that name is taken.");
            break;
        }
        else if (new_users[num2_1] === current_users_upper[num3]) {
            console.log("Sorry " + new_users[num2_1] + ", that name is taken.");
            break;
        }
        //else {console.log ("This name " + new_users[num2]   +  " is still available")
    }
    console.log("This name " + new_users[num2_1] + " is still available");
}
/*Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.
• Loop through the array.
• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
*/
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i_2 = 0; i_2 < +10; i_2++) {
    if (numbers[i_2] == 1) {
        console.log("1st");
    }
    else if (numbers[i_2] == 2) {
        console.log("2nd");
    }
    else if (numbers[i_2] == 3)
        console.log("3rd");
    else
        console.log(+numbers[i_2] + "th");
}
/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
*/
var favorite_pizzas = ['pepperoni', 'tikka', 'afghani'];
for (var index = 0; index < favorite_pizzas.length; index++) {
    console.log(favorite_pizzas[index]);
}
for (var index = 0; index < favorite_pizzas.length; index++) {
    console.log("I really like " + favorite_pizzas[index] + " pizza");
}
console.log("I really like pizza");
/*Animals: Think of at least three different animals that have a common characteristic.
 Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
  • Modify your program to print a statement about each animal, such as A dog would make a great pet.
 • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
 */
var animals = ["cow", "goat", "horse"];
for (var index = 0; index < animals.length; index++) {
    console.log(animals[index]);
}
for (var index = 0; index < animals.length; index++) {
    console.log(animals[index] + " is a herbivores and have four legs");
}
console.log("All these animals are Herbivores");
/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
*/
var make_shirt = function (size, text_of_shirt) {
    console.log('The size of the shirt is:' + size, 'and the text printed on it is ' + text_of_shirt);
};
var size = 'large';
var text_of_shirt = 'tiger';
make_shirt(size, text_of_shirt);
/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/
var make_shirt1 = function (size, text_of_shirt) {
    if (size === void 0) { size = 'Large'; }
    if (text_of_shirt === void 0) { text_of_shirt = 'I Love Typescript'; }
    console.log('The size of the shirt is:' + size, 'and the text printed on it is ' + text_of_shirt);
};
make_shirt1();
make_shirt1('Medium');
make_shirt1('small', 'I Love Pets');
/*Cities: Write a function called describe_city() that accepts the name of a city and its country.
 The function should print a simple sentence, such as Karachi is in Pakistan.
 Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the default country.
*/
var describe_city = function (city, country) {
    console.log(city + ' is in ' + country);
};
var city = 'Karachi';
var country = 'Pakistan';
describe_city(city, country);
describe_city('Islamabad', country);
describe_city('chennai', 'India');
/*City Names: Write a function called city_country() that takes in the name of a city and its country.
 The function should return a string formatted like this:

"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.
*/
var city_country = function (city, country) {
    return "".concat(city, ",").concat(country, " ");
};
console.log(city_country('chennai', 'India'));
console.log(city_country('Istanbul', 'Turkey'));
console.log(city_country('Malbourne', 'Australia'));
/*Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title,
and it should return a Object containing these two pieces of information.
 Use the function to make three dictionaries representing different albums.
 Print each return value to show that Objects are storing the album information correctly.
  Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
   If the calling line includes a value for the number of tracks, add that value to the album’s Object.
    Make at least one new function call that includes the number of tracks on an album.

*/
function make_album(artist, title) {
    var album = { artist: artist, title: title };
    return album;
}
var album1 = make_album('Eminem', 'joy');
console.log(album1);
var album2 = make_album('Nusrat', 'Jani');
console.log(album2);
var album3 = make_album('Atif', 'Afreen');
console.log(album3);
function make_albumN(artist, title, tracks) {
    var album = { artist: artist, title: title, tracks: tracks };
    return album;
}
var album4 = make_albumN('Atif', 'Afreen', 4);
console.log(album4);
//Magicians: Make a array of magician’s names. 
//Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.
var magicians_Names = ['Darren Brown', 'Penn & Teller', 'David Copperfield', 'Criss Angel'];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var items = magicians_1[_i];
        console.log(items);
    }
}
show_magicians(magicians_Names);
//Great Magicians: Start with a copy of your program from Exercise 39. 
//Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
//Call show_magicians() to see that the list has actually been modified.
function make_great(magicians) {
    var great_magicians = magicians.map(function (magician) { return "The Great  ".concat(magician); });
    return great_magicians;
}
show_magicians(make_great(magicians_Names));
//Unchanged Magicians: Start with your work from Exercise 40. 
//Call the function make_great() with a copy of the array of magicians’ names. 
//Because the original array will be unchanged, return the new array and store it in a separate array.
//Call show_magicians() with each array to show that you have one array of the original names 
//and one array with the Great added to each magician’s name.
console.log(" \n Magician's Names");
show_magicians(magicians_Names);
var greatmagician_names = make_great(magicians_Names);
console.log("\n The Great Magicians NAmes");
show_magicians(greatmagician_names);
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. 
//Call the function three times, using a different number of arguments each time.
function Sandwitch() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    if (items.length === 0) {
        console.log("Please provide items for sandwitch");
    }
    else {
        items.forEach(function (item, i) {
            console.log("   ".concat(i + 1, ") ").concat(item, "  "));
        });
    }
    console.log("\n");
}
Sandwitch();
Sandwitch('Cheese', 'mayo sauce', 'cucumber');
Sandwitch('Tomato', 'Garlicsauce', 'Lettuce');
Sandwitch('Cheese', 'jaelpenos');
//Cars: Write a function that stores information about a car in a Object. 
//The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments. 
//Call the function with the required information and two other name-value pairs,
// such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly.
function Car(manufacturer, model) {
    var properties = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        properties[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model, };
    for (var _a = 0, properties_1 = properties; _a < properties_1.length; _a++) {
        var _b = properties_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
var mycar = Car('suzuki', 'Mehran', ['color', 'red'], ['doors', 4]);
console.log(mycar);
