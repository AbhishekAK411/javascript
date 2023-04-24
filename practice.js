var array = [23, 6, 42, 8, 16, 37, 10];


function QuickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    var pivot = array[0];
    var left = [];
    var right = [];
    for (var i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return [...QuickSort(left), pivot, ...QuickSort(right)];

    
}
console.log(QuickSort(array));