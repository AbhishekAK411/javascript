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


// var name = 'navnath';
// var gender = 'male';
// if(gender === 'male'){
//     console.log("Hello Mr.", name);
// } else if(gender === 'female') {
//     console.log("Hello Ms.", name);
// } else {
//     console.log("Invalid gender");
// }


// Write a program that takes in two integers and prints out their sum, difference,
//  product, and quotient

// Write a program that takes in an integer and checks if it's even or odd.

// var num = 156;

// if(num%2 == 0){
//     console.log("Even");
// } else {
//     console.log("odd");
// }

// Write a program that takes in a character and checks if it's an uppercase letter,
//  lowercase letter, or neither.

// var char = 'a';

// if((char>= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')){
//     console.log("Its a character");
// }
//  else if( char >= 0 && char <= 9){
//     console.log("Its a digit");
// } else {
//     console.log("Invalid Input");
// }


// Write a program that takes in an integer and checks if it's a multiple of 3 or 5.

// var num = 2;

// if(num%3 == 0 || num%5 == 0){
//     console.log("Divisible by 3 or 5");
// } else {
//     console.log("Not divisible by 3 or 5");
// }

// var a = 10;
// var b = 12;

// if((a+b)%2==0){
//     console.log("even");
// } else {
//     console.log("odd");
// }

// Write a program that takes in three integers and finds the largest and smallest among them.




// Reverse of a number


// var num = 12345;
// var reversed = 0;

// for(; num!==0 ; num = Math.floor(num/10)){
//     reversed = reversed*10 + num%10;
// }
// console.log(reversed);



// var a = [8,9,21,27,97,339,41];
// var min = a[0];


// for(i=0;i<a.length;i++){
//     if(a[i]<min){
//         min=a[i];
//     }
// }

// console.log(min);


// var arr1 = [1,2,3,4,5,6,7,8,9];
// var arr2 = [4,5,6,7,8,9,1,2,3];
// var combArr = [];

// if(arr1.length === arr2.length){
//     for(var i=0;i<arr1.length;i++){
//         combArr[i] = arr1[i] + arr2[i];
//     }
//     console.log(combArr);
// } else {
//     console.log("lengths are not the same");
// }



// Q1.
// var array = [34,45,65,23,10,676,34,39];
// var target = 68;
// var flag = false;
// for(var i=0;i<array.length;i++){
//     for(j=array.length-1;j>i;j--){
//         if(array[i]+array[j]==target){
//             flag = true;
//             console.log(array[i],array[j]);
//             break;
//         }
//     }
// }

// if(flag){
//     return true;
// } else {
//     console.log("Not Found");
// }


// Q2.
// var start = 5799;
// var end = 78659;
// var sum =0;

// for(i=start;i<=end;i+=3){
//     sum += i;
// }
// console.log(sum);


// Q3.
// var number = 19;
// var array = [3,5,79,45,0,-67,23,77,19,78,12];
// var temp;
// for(var i=0;i<array.length;i++){
//     if(array[i]==number){
//         temp = i;
//         break;
//     }
// }

// for(i=1;i<=10;i++){
//     console.log(temp*i);
// }


// Q.4

// var array = [34,45,567,78,89,34,67,87,34,78,89];
// var object = {};

// for(i=0;i<array.length;i++){
//     object[i] = array[i];
// }

// console.log(object);


// switch(expression){
//     case 1:
//         //code block
//         break;
//     case 2:
//         //code block
//         break;
//     case 3:
//         //code block
//         break;
//     case 4:
//         //code block
//         break;
//     default:
//         //code block
//         break;
// }


// var array = ['Mon','Tue','Wed','Thurs','Fri','Sat','Sun'];
// var num = 6;
// switch(num){
//     case 1:
//         console.log(array[0]);
//         break;
//     case 2:
//         console.log(array[1]);
//         break;
//     case 3:
//         console.log(array[2]);
//         break;
//     case 4:
//         console.log(array[3]);
//         break;
//     case 5:
//         console.log(array[4]);
//         break;
//     case 6:
//         console.log(array[5]);
//         break;
//     case 7:
//         console.log(array[6]);
//         break;
//     default:
//         console.log("Invalid Input");
// }