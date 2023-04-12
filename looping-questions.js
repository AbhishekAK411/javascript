// // 1. Print numbers from 1 to 10.

// var rangeStart = 1;
// var rangeEnd = 10;

// function rangePrint(a,b){
//     for(i=a;i<=b;i++){
//         console.log(i);
//     }
// }

// rangePrint(rangeStart,rangeEnd);





// // 2. program to calculate the sum of first 10 natural numbers

// var firstTen=10;
// var sum=0;

// function rangeSum(maxRange){
//     if(maxRange>0){
//         for(i=1;i<=maxRange;i++){
//             sum+=i;
//         }
//         console.log(sum);
//     }
//     else{
//         console.log("Invalid Input");
//     }
// }

// rangeSum(firstTen);




// // 3. multiplication table of a number.

// var multiNum= 5;
// function multiTable(a){
//     for(i=1;i<=10;i++){
//         console.log(a*i);
//     }
// }

// multiTable(multiNum);




// // 4. Factorial of a number

// var factNum = 5;

// function factorialNumber(a){
//     if(a==0 || a==1){
//         return 1;
//     }
//     else{
//         return a * factorialNumber(a-1);
//     }
// }

// var result = factorialNumber(factNum);
// console.log(result);




// // 5. exponential of two numbers entered

// var exp1 = 5;
// var exp2 = 10;

// function exponent(a,b){
//     if(b==0){
//         return 1;
//     }
//     else{
//         return a**b;
//     }
// }

// var result = exponent(exp1, exp2);
// console.log(result);



// function exponentForLoop(base,power){
//     let result=1;
//     if(power==0){
//         return 1;
//     }
//     else{
//         for(i=1;i<=power;i++){
//             result*=base;
//         }
//         return result;
//     }
// }

// var answer = exponentForLoop(3,3);
// console.log(answer);




// // 6. reverse of a number

// var number = 12345;
// let rev = 0;


// for(i=number;i>0;i=Math.floor(i/10)){

//     rev = rev*10 + i % 10;

// }

// console.log(rev);



// 7. reads a set of integers and prints the sum of even and odd numbers


// var array = [1,2,3,4,5,6,7,8,9,10,12];

// var evensum=0;
// var oddsum=0;

// for(i=0;i<=array.length;i++){
//     if(array[i]%2 == 0){
//         evensum+=array[i];
//     }
//     else if(array[i]%2 != 0){
//         oddsum+=array[i];
//     }
// }

// console.log(evensum);
// console.log(oddsum);


// console.log(array.length);


// 8. Number is prime or not

// var prime=3;

// function isPrime(num){
//     if(num<2){
//         return false;
//     }
//     for(i=2;i<num;i++){
//         if(num % i===0){
//             return false;
//         }
//     }
//     return true;
// }

// var ans = isPrime(prime);
// console.log(ans);


// 9. calculate HCF of two numbers

// function calcHCF(num1, num2){
//     let smallNum = Math.min(num1, num2);
//     let largeNum = Math.max(num1, num2);
//     let remainder= largeNum % smallNum;

//     while (remainder!=0){
//         largeNum = smallNum;
//         smallNum = remainder;
//         remainder = largeNum % smallNum;
//     }

//     return smallNum;
// }

// var ans = calcHCF(24,36);
// console.log(ans);


// 10. create do-while loop. Numbers should be added and sum is to be displayed till user says no.

// 11. for the given range, count the number of positive, negative and number of zeroes

// var a = [1,2,5,-10,0,0,4,10,20];
// var countPositive=0;
// var countNegative=0;
// var countZero=0;

// function countNo(num){
//     for(i=0;i<=8;i++){
//         if(num[i]>0){
//             countPositive++;
//         }
//         else if(num[i]<0){
//             countNegative++;
//         }
//         else{
//             countZero++;
//         }   
//     }

//     console.log(countPositive);
//     console.log(countNegative);
//     console.log(countZero);
// }

// countNo(a);


// 12. enter range, at the end, print largest and smallest number in the range.

// var a = [1,2,3,10,20,30,100,-10,-55];

// function largesmall(num){

// }


// 13. armstrong number

// for (let num = 1; num <= 500; num++) {
//     let sum = 0;
//     let temp = num;
//     while (temp > 0) {
//       let digit = temp % 10;
//       sum += digit ** 3;
//       temp = Math.floor(temp / 10);
//     }
//     if (sum === num) {
//       console.log(num);
//     }
//   }


// 14. fibonacci Series 20 range

// let num1 = 0;
// let num2 = 1;
// let nextNum;
// console.log(num1);
// console.log(num2);
// for (let i = 3; i <= 20; i++) {
//   nextNum = num1 + num2;
//   console.log(nextNum);
//   num1 = num2;
//   num2 = nextNum;
// }


// 15. sum of the series

// let n = 10;
// let sum = 0;
// let sign = 1;
// for (let i = 1; i <= n; i++) {
//   sum += sign * (1 / i);
//   sign = -sign;
// }
// console.log(sum);
