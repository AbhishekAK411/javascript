// var array = [23, 6, 42, 8, 16, 37, 10];


// function QuickSort(array) {
//     if (array.length <= 1) {
//         return array;
//     }

//     var pivot = array[0];
//     var left = [];
//     var right = [];
//     for (var i = 1; i < array.length; i++) {
//         if (array[i] < pivot) {
//             left.push(array[i]);
//         } else {
//             right.push(array[i]);
//         }
//     }
//     return [...QuickSort(left), pivot, ...QuickSort(right)];


// }
// console.log(QuickSort(array));



// Q1. Two Sum.
// var num = [5,9,2,7,1,8,3,6,4,233];
// var target=8;

// var flag;

// for(i=0;i<num.length;i++){
//     for(j=num.length-1;j>i;j--){
//         if(num[i] + num [j] == target){
//             flag = true;
//             console.log(num[i],num[j]);
//             break;
//         } else {
//             flag = false;
//         }
//     }
// }


// Q2. Remove dupes

// var array = [0,0,0,1,1,1,1,2,2,3,4,4,4,5,5,5];
// var obj = [];
// var dupe = [];
// for(var i=0;i<array.length;i++){
//     if(array[i]==array[i+1]){
//         dupe.push(array[i]);
//     }
//     else {
//         obj.push(array[i]);
//     }
// }
// console.log(obj);


// Q3. Remove Element

// var array = [3,2,2,3,4,6,7,3,5,3,7,9];
// var remove = 3;

// function removeNum(array,remove){
//     var i = 0;
//     while(i<array.length){
//         if(array[i]===remove){
//             array.splice(i,1);
//         } else {
//             i++;
//         }
//     }
//     console.log(array);
//     console.log(array.length);
// }

// removeNum(array,remove);


// Q4. Search Insert Position

// var array = [1,2,3,9,11,21,45,69,771,1023,2044,5055];
// var target = 2044;

// for(var i=0;i<array.length;i++){
//     if(array[i]==target){
//         console.log(i);
//     } else if(array[i]<target && array[i+1]>target) {
//         console.log("position if not found",i+1);
//         }
// }


// Q5. plus one

// var array = [4,3,2,1];
// n = array.length;
// var end = n-1;
// var final_arr = [];
// for(var i=0;i<=end;i++){
//     if(array[i]!=array[end]){
//         final_arr.push(array[i]);
//     } else {
//         final_arr.push(array[i]+1);
//     }
// }
// console.log(final_arr);



// Proper Solution https://leetcode.com/problems/plus-one/
// var array = [9];
// var str="";
// var final = [];
// var ans, ans1=[];

// for(var i=0;i<array.length;i++){
//     str += array[i].toString();
// }

// var num = parseInt(str);
// num =num + 1;

// var numStr = num.toString();

// for(i=0;i<numStr.length;i++){
//     final.push(numStr[i]);
// }


// for(i=0;i<final.length;i++){
//     ans = parseInt(final[i]);
//     ans1.push(ans);
// }

// console.log(ans1);



// Q. Contains Duplicate 2 https://leetcode.com/problems/contains-duplicate-ii/
// var arr = [1,0,1,1];
// var k = 2;
// var start,end, n;
// n= arr.length;
// start=0;
// end=n-1;
// var flag;

// for(i=start;i<=end;i++){
//     for(j=end;j>=start;j--){
//         if(arr[i]==arr[j] && (i-j<=k || j-i <=k)){
//             flag = true;
//         } else {
//             flag = false;
//         }

//     }
// }

// if(flag){
//     console.log("True");
// } else {
//     console.log("False");
// }


// Q. pascal's triangle
// var n = 4;
// function pascalTri(n){
//     var t = [];
//     for(i=0;i<n;i++){
//         t[i] = [];
//         for(j=0;j<=i;j++){
//             if(j==0 || j==i){
//                 t[i][j] = 1;
//             } else {
//                 t[i][j] = t[i-1][j-1] + t[i-1][j];
//             }
//         }
//     }
//     return t;
// }

// var ans = pascalTri(n);
// console.log(ans);



// Q. Pascal's triangle 2

// var n = 4;
// function pascalTri(n){
//     var t = [];
//     for(var i=0;i<n;i++){
//         t[i] = [];
//         for(j=0;j<=i;j++){
//             if(j==0 || j==i){
//                 t[i][j]=1;
//             } else {
//                 t[i][j] = t[i-1][j-1] + t[i-1][j];
//             }
//         }
//     }
//     return t[n-1];
// }

// var final = pascalTri(n);
// console.log(final);


// Q. Best time to buy and sell stock.
// var stock = [7,1,5,3,6,4];

// function maxProf(p) {
//     let minPrice = p[0];
//     let maxProfit = 0;

//     for (let i = 1; i < p.length; i++) {
//       if (p[i] < minPrice) {
//         minPrice = p[i];
//       } else {
//         var currentProfit = p[i] - minPrice;
//         if (currentProfit > maxProfit) {
//           maxProfit = currentProfit;
//         }
//       }
//     }

//     return maxProfit;
//   }

// var ans = maxProf(stock);
// console.log(ans);


// Q. single number

// var array = [2,2,1];
// var result = 0;
// for(var i=0;i<array.length;i++){
//     result ^= array[i];
// }
// console.log(result);




// Q. Majority element

var array = [2, 2, 1, 1, 1, 2, 2];
// var obj = {};

// for(var i=0;i<array.length;i++){
//         if(obj[array[i]]){
//             obj[array[i]] += 1;
//         } else {
//             obj[array[i]] = 1;
//         }
// }

// for(var value in obj){
//     if(obj[value]){
//         console.log(value);
//     }
// }

// var array = [2,2,1,1,1,2,2];
// var result = 0;

// for(var i=0;i<array.length;i++){
//     result ^= array[i];
// }

// console.log(result);

var array = [2,2,1,1,1,2,2];
var result;
var count = 0;


for(var i=0;i<array.length;i++){
    if(count===0){
        result = array[i];
        count=1;
    } else {
        if(array[i]===result){
            count++;
        } else {
            count--;
        }
    }
}
console.log(result);














