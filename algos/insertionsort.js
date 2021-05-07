// https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/


function insertionSort(arr){
    for(let i = 0; i<arr.length; i++ ){
        console.log(i)
        //storing the element we want to check into temp
        let temp = arr[i]
        let j = i
        //see if the element we want to sort has an eleement to the left that is greater than it, if so, enter the while loop
        while (j>0 && temp < arr[j-1]){
            //replace the element at the current index with the element to the left of it
            arr[j] = arr[j-1]
            j = j-1
        }
        //at the point, we have found a position where its appropriate to put the elemtn we want to sort into
        arr[j] = temp
    }
    return arr
}

console.log(insertionSort([6,8,3,2,4,1,9]))