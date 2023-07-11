// let arr = [64,25,12,22,11];
// n = arr.length;

// function swap(arr, x, y){
//     let temp = arr[x];
//     arr[x] = arr[y];
//     arr[y] = temp;
// }

// function selectionSort(arr, n){
//     let i, j, min_index;

//     for(i=0;i<n-1;i++){
//         min_index = i;
//         for(j=i+1;j<n;j++){
//             if(arr[j] < arr[min_index]){
//                 min_index = j;
//             }
//         }
//         swap(arr, min_index, i);
//     }

//     return arr;
// }

// let ans = selectionSort(arr, n);
// console.log(ans);


// a = [1,2,2,4,5];

// const [first, second, third] = a;

// console.log(a[1] === a[2]);


let n = 4;

let flag = false;
for(let i=2;i<!n;i++){
    if(i===2){
        console.log(i);
    }else if(n%i === 0){
        console.log(i);
    }
}