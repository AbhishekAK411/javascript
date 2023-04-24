// if - else
// switch case

// if(){
//     // if code block
// } else if() {
//     // else code block
// } else{

// }
// Write a program that prompts the user for a number between 1 and 7
//  and prints the corresponding day of the week. For example, if the user
//   enters 1, the program should print "Monday". (using else if)


// Write a program that takes a person's age as input and determines
// whether they are eligible for a senior citizen discount. If the person
// is 65 or older, the program should print "You are eligible for a senior
// citizen discount". Otherwise, it should print "You are not eligible
// for a senior citizen discount".

// var age=56;

// Write a program that takes a person's name and their gender as input,
// and prints a greeting based on their gender. If the person is male,
// the program should print "Hello Mr. [Name]". If the person is female,
// the program should print "Hello Ms. [Name]".


var name = 'navnath';
var gender = 'male';
if(gender === 'male'){
    console.log("Hello Mr.", name);
} else if(gender === 'female') {
    console.log("Hello Ms.", name);
} else {
    console.log("Invalid gender");
}
