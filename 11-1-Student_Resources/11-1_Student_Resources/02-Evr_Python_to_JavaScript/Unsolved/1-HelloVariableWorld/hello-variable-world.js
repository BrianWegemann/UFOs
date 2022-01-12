// Create a variable called "fullName" that holds a string
let fullname = "Homer Simpson";
// Create a variable called "country" that holds a string
let country = "United States";
// Create a variable called "age" that holds an integer
let age = 26;
// Create a variable called "hourlyWage" that holds an integer
let hourly_wage = 15;
// Calculate the "dailyWage" for the user
let daily_wage = hourly_wage * 8;
// Create a variable that holds a number as a string
let weekly_hours = "40";
// Create a variable called 'weeklyWage' that converts a string into an integer
let weekly_wage = hourly_wage * parseInt(weekly_hours);
// Create a variable called "satisfied" that holds a boolean
let satisfied = True;
// Print out "Hello <name>!"
console.log(`Hello ${fullname}!`);
// Print out what country the user entered
console.log(`You live in ${country}.`);
// Print out the user's age
console.log(`You are  ${age} years old.`);
// Print out the daily wage that was calculated
console.log(`You make ${daily_wage} dollars per day.`);
// Print out the weekly wage that was calculated
console.log(`You make ${weekly_wage} dollars per week.`);
// Using an IF statement to print out whether the users were satisfied
if (satisfied) {
    console.log("You are satisfied with your pay.")
}
else {
    console.log("You are not satisfied with your pay.")
}