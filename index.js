/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
//var votingAge = 18;

//if (votingAge >= 18)  
//  {console.log("True")}
//else
// {console.log("False")}


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

//var votingAge = age > 18 ? true : false;


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

//String str="1999";
//int inum = Integer.valueOf(str);


//Task d: Write a function to multiply a*b 

//function myCode(a, b) {
  //return a * b;



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function myAge(age) {
    var dogYears = 7*age;
    console.log("You are " + dogYears + " years old in dog years!");
}

myAge(29);


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
var dogAge = prompt("How old is your dog")

function food(a) {
  var dogLbs = prompt("How big is your dog")
  if (a >=12) {
    if (dogLbs <=5) {
      console.log("Your doggo should eat " + dogLbs*.05 + " pounds a day!")
    } 
    else if (dogLbs <=10) {
      console.log("Your doggo should eat " + dogLbs*.04 + " pounds a day!")
    } 
    else if (dogLbs <=15) {
      console.log("Your doggo should eat " + dogLbs*.03 + " pounds a day!")
    } 
  else {
    console.log("Your doggo should eat " + dogLbs*.02 + " pounds a day!")
  }
    
} else {
    if (dogAge <4) {
      console.log("Your doggo should eat " + dogLbs*.1 + " pounds a day!")
    }
    else if (dogAge <=7) {
      console.log("Your doggo should eat " + dogLbs*.05 + " pounds a day!")
    } 
    else if (dogAge >7) {
      console.log("Your doggo should eat " + dogLbs*.04 + " pounds a day!")
    }
  }
}
food(dogAge);



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function rps(){
  let random = Math.random()
  if (random < .3) { console.log("Rock")}
  if (random < .3 && random <.6) {console.log("Paper")}
  if (random > .6) { console.log("Scissors")}
}
rps()


/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function km(num1) {
  var mi = 0.621371 * num1;
  console.log("The object is " + mi + " miles long!")
}
km(1)



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function ft(num) {
  var cm = 30.48 * num;
  console.log("The object is " + cm + " cm long!")
}
ft(1)


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

var annoyingSong;
for (counter = 99; counter >= 1; counter = counter - 1) 
{
    if (counter === 1) {
        annoyingSong = 'bottle';
    } else {
        annoyingSong = 'bottles';
    }
    console.log(counter+" "+annoyingSong+" of beer on the wall.");
    if (counter < 99) {
        console.log("");
        console.log(counter+" "+annoyingSong+" of beer on the wall.");
    }
    console.log(counter+" "+annoyingSong+" of beer.");
    console.log("Take one down.");
    console.log("Pass it around.");
    if (counter === 1) {
        console.log("No more bottles of beer on the wall.");
    }
}



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function gradeCalculator(mark) {
  if (mark >= 90) return "A";
  if (mark >= 80) return "B";
  if (mark >= 70) return "C";
  if (mark >= 60) return "D";    
  if (mark <= 59) return "F";   
}

var output = gradeCalculator(75)
console.log(output)
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method


/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





