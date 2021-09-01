 
/*
var firstName = "john" ;


console.log(firstName);

var lastName = 'smith';
var age = 28;

var fullAge = true;

console.log(fullAge);


var job;

console.log(job);

job = 'Teacher';
console.log(job);


var firstName = "John";
var age = 28;
console.log(firstName + ' ' + age);


var job, isMarried;
job = "Teacher";
isMarried = false;

console.log(firstName + " is a " + age +" years old " + job + " Is he married? " + isMarried);


age = "tweny eight";
job = "driver";

alert(firstName + " is a " + age +" years old " + job + " Is he married? " + isMarried);

var lastName = prompt("what is his last name? ");
console.log(firstName + " " + lastName);

*/

/*
var year, yearJohn, yearMark;
year = 2020;
ageJohn = 28;
ageMark = 33;

//math operators

yearJohn = year - 28;
yearMark = year - 33;

console.log(yearJohn);

console.log(year + 2);

console.log(year * 2);

console.log(year / 10);


//logic operators

var johnOlder = ageJohn < ageMark;

console.log(johnOlder);




//typeof operator

console.log(typeof johnOlder);

console.log(typeof year);
console.log(typeof "hello world")

var x;
console.log(typeof x);

*/
//operators precedence




/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;

console.log(isFullAge);




var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);





//Multiple assignment

var x, y;

x = y = (3 + 5) * 4 - 6;

console.log(x, y);



*/


/*
var massMark, massJohn, heightMark, heightJohn;

massMark = 78;
massJohn = 92;
heightMark = 1.69;
heightJohn = 1.95;


var BmiMark = massMark / (heightMark * heightMark );
console.log(BmiMark);

var BmiJohn = massJohn / (heightJohn * heightJohn);
console.log(BmiJohn);

var markJohnHeight = BmiMark > BmiJohn;
console.log("Mark\'s has heigher height than John\'s? " + markJohnHeight);


*/

/*

var firstName = "john";
var civilStatus = "single";

if (civilStatus === "married") {
    console.log(firstName + " is married!");
}   else {
    console.log(firstName + " will hopefully marry soon ;)");
}



var isMarried = true;
if (isMarried) {
    console.log(firstName + " is married!");
}   else {
    console.log(firstName + " will hopefully marry soon ;)");
}






var massMark, massJohn, heightMark, heightJohn;

massMark = 78;
massJohn = 92;
heightMark = 1.69;
heightJohn = 1.95;


var BmiMark = massMark / (heightMark * heightMark );
console.log(BmiMark);

var BmiJohn = massJohn / (heightJohn * heightJohn);
console.log(BmiJohn);


if (BmiMark > BmiJohn){
    console.log("Marks\'s BMI is higher than john\'s.")
}   else{
    console.log("John\'s BMI is higher than Mark\'s.")
}
*/


//boolean logic
/*
var firstName = "John";
var age = 5;

if (age < 13){
    console.log(firstName + " is a boy.");
}   else if (age >= 13 && age <20){
    console.log(firstName + ' is a teenager.');
}   else if (age >= 20 && age < 30){
    console.log(firstName + " is a yaung man");
}   else{
    console.log(firstName + " is a man");
}

*/


//truthy values
/*
var height = 23;

if (height || height === 0){
    console.log('variable is defined');
}   else{
    console.log("variable has NOT beed defined")
}

// Equality operators

if (height == "23"){
    console.log('the == does type coercion!')
}

*/

// coading challenge 2
/*
var John, Mike, averageJohn, averageMike;
John = 89 + 120 + 103;
Mike = 116 + 94 + 123;

averageJohn = John / 3;
averageMike = Mike / 3;
console.log("John\'s score = " + averageJohn);
console.log("mike\'s score = " + averageMike);
if (averageJohn > averageMike){
    console.log("John\'s win\'s the match with the score of " + John)
}   else if(averageJohn === averageMike){
    console.log(averageJohn + " the both team draw " + averageMike)
}   else{
    console.log("Mike\'s win\'s the match with the score of " + Mike)

}

var Mary = 97 + 134 + 105;

var averageMary = Mary /3;

if (averageJohn > averageMike && averageJohn > averageMary){
    console.log("John win\'s the game" + averageJohn)
}   else if(averageMike > averageJohn && averageMike > averageMary){
    console.log("Mike win\'s the game" + averageMike)
}   else{
    console.log("Mary win\'s the game " + averageMary)
}

*/


// functions
/*
function calculateAge(birthYear){
    return 2018 - birthYear;
}
var ageJohn = calculateAge(1990);
var ageMark = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMark, ageJane);


function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement > 0){
        console.log(firstName + " retires in " + retirement + " year\'s")
    }else{
        console.log("Already retired")
    }
}

yearsUntilRetirement(1990 , "John");
yearsUntilRetirement(1948 , "Mike");
yearsUntilRetirement(1969 , "Jane");


*/


/////////////Function Statements and Expressions

/*
var whatDoYouDo = function(job, firstName){
    switch(job){
        case "teacher":
            return firstName + " teach kids how to code";
        case "driver":
            return firstName + " drives cab in LA";
        case "designer":
            return firstName + " designs beautiful websites";
        default:
            return firstName + " does something else";
    }
}

console.log(whatDoYouDo("teacher", "John"))
console.log(whatDoYouDo("retire", "Mike"))
console.log(whatDoYouDo("designer", "Jane"))

*/


//////////arrays


/*
// After eid //Function

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn , ageMike, ageJane);


function yearsUntilRetirement(year, firstName)
{
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement > 0){
        console.log(firstName + " retires in " + retirement + " years.");
    } else{
        console.log(firstName + " is already retired.");
    }
}

yearsUntilRetirement(1990, "John");
yearsUntilRetirement(1948, "Mike");
yearsUntilRetirement(1969, "Jane");
*/








// Function Statements and Expressions


//function declaration

//function whatDoYouDo(job, firstName){}


// function epression


/*
var whatDoYouDo = function(job, firstName){
    switch(job){
        case "teacher":
            return firstName + " teaches kids how to code";
        case "driver":
            return firstName + " drives a cab in Lisbon";
        case "designer":
            return firstName + " design beautiful website";
        default:
            return firstName + " does something else";
        
        
    }
}

console.log(whatDoYouDo("teacher", "John"));
console.log(whatDoYouDo("driver", "mike"));
console.log(whatDoYouDo("nothing", "Jane"));

*/







// arry

/*
var names = ["john", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

names[1] = "Ben";
names[names.length] = "Mary";
console.log(names);


// different data types

var john = ["john", "smith", 1990, "teacher", "designer", false,];

john.push("blue");
john.unshift("Mr.");

console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);


console.log(john.indexOf(23));


var isDesigner = john.indexOf("designer") === -1 ? " John is NOT a designer" : " John IS a designer";

console.log(isDesigner);



*/



/*
function restaurant(bill){
    var percentage;
    if(bill < 50){
        percentage = .2;
    } else if (bill >= 50 && bill < 200){
        percentage = .15;
    }else {
        percentage = .1;
    }
    return percentage * bill;
}


var bills = [124, 48, 268];
var tips = [restaurant(bills[0]),
            restaurant(bills[1]),
            restaurant(bills[2])];

var finalValue = [bills[0] + tips[0],
                bills[1] + tips[1],
                bills[2] + tips[2]];

console.log(tips, finalValue);


*/


/*
//object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.job);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);




john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//new object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);



*/


/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);


*/
/*
//14

var john = { 
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Millar',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

john.calcBMI();
mark.calcBMI();
console.log(john, mark);


if (john.bmi > mark.bmi) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
}else if (mark.bmi>john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);

}else {
    console.log('They have the same BMI');
}


*/


/*
//15
//loop

for (var i = 1; i <= 20; i++){
    console.log(i);
}


var john = ['john', 'smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++){
    console.log(john[i]);
}



while(i < john.lenght){
    console.log(john[i]);
    i++;
}

*/



/*
// loop
var john = ['john', 'smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

//looping break
for (var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

//looping backword
for (var i = john.length - 1; i>= 0; i--){
    console.log(john[i]);
}

*/








//16 exm

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValue = [];

        for (var i = 0; i < this.bills.length; i++)
        {
            var percentage;
            var bill = this.bills[i]
            if (bill < 50){
                percentage = .15;
            }else if (bill >= 50 && bill < 200){
                percentage = .15;
            }else {
                percentage = .1;
            }

            this.tips[i] = bill * percentage;
            this.finalValue[i] = bill + bill * percentage;
            }
        }
    
}


var mark = {
    fullName: 'Mark Millar',
    bills: [77, 5, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValue = [];

        for (var i = 0; i < this.bills.length; i++)
        {
            var percentage;
            var bill = this.bills[i]
            if (bill < 100){
                percentage = .2;
            }else if (bill >= 100 && bill < 300){
                percentage = .1;
            }else {
                percentage = .25;
            }

            this.tips[i] = bill * percentage;
            this.finalValue[i] = bill + bill * percentage;
            }
        }
    
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}
//do athe calculation


john.calcTips();
mark.calcTips();



john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays heigher tips, with an average of $ ' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays heigher tips, with an average of $ ' + mark.average);
}



















