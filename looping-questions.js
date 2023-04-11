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

