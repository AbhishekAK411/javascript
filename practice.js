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
// var target=238;

// var flag = true;

// for(i=0;i<num.length;i++){
//     for(j=num.length-1;j>i;j--){
//         if(num[i] + num [j] == target){
//             flag = true;
//             console.log(num[i],num[j]);
//             break;
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
var array = [4,3,2,1];
var str = "";
var final = [];
var ans, ans1=[];

for(var i=0;i<array.length;i++){
    str += array[i].toString();
}

var num = parseInt(str);
num = num + 1;

var numStr = num.toString();

for(i=0;i<numStr.length;i++){
    final.push(numStr[i]);
}

for(i=0;i<final.length;i++){
    ans = parseInt(final[i]);
    ans1.push(ans);
}

console.log(ans1);




