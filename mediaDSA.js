// Given a string of 1’s and 2’s, standing at index ‘i’, you can move exactly two steps forward or backward if s[i] == 2, else you can move one step forward or backward if s[i] ==1.
// A string is called a good string if you can reach the end of the string by moving every index exactly once.
// Now, you have been given two Strings A and B (not necessarily good), you have to return the number of possible sub-sequences of swaps available, such that both the strings become good.
// Swap means you can swap A[i] with B[i].
// Example:
// A = 2211
// B = 1111
// ans = 8


// let str1 = "2211"
// let str2 = "1111";

// let l1 = str1.length;
// let l2 = str2.length;

// let count2Step = 0;
// let count1Step = 0;
// for(let i=0;i<str1.length;i++){
//     if(str1[i]==2 || str2[i]==2){
//         count2Step+=2;
//     }
//     if(str1[i]==1 || str2[i]==1){
//         count1Step++;
//     }
// }

// console.log(count2Step+count1Step);