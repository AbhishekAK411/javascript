let arr = [64,25,12,22,11];
n = arr.length;

function swap(arr, x, y){
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

function selectionSort(arr, n){
    let i, j, min_index;

    for(i=0;i<n-1;i++){
        min_index = i;
        for(j=i+1;j<n;j++){
            if(arr[j] < arr[min_index]){
                min_index = j;
            }
        }
        swap(arr, min_index, i);
    }

    return arr;
}

let ans = selectionSort(arr, n);
console.log(ans);
