// 1. Name and Age

var firstName = "Paul";
var lastName = "Tenorio";
var birthYear = 2005;

var currentYear = new Date().getFullYear();
var age = currentYear - birthYear;

console.log("Hi, my name is " + firstName + " " + lastName + ". I'm " + age + " years old and I'm learning Javascript.");


// 2. Telephone Number Validation

var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;

function checkPhone(phone) {
    if (String(phone).length === 9) {
        return "Valid";
    } else {
        return "Invalid";
    }
}

console.log("Phone 1: " + checkPhone(phone1));
console.log("Phone 2: " + checkPhone(phone2));
console.log("Phone 3: " + checkPhone(phone3));


// 3. Valid and Invalid Variable Names

console.log("var NAME; - Valid");
console.log("var $num1; - Valid");
console.log("var typeof; - Invalid");
console.log("var first-name; - Invalid");
console.log("var attempt_2; - Valid");
console.log("var 2ndAttempt; - Invalid");
console.log("var full name; - Invalid");


// 4. URL Transformation

var website = "www.smtwo.com";

console.log("The website URL is: https://" + website);