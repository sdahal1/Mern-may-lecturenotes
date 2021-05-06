const combine = (arr1, arr2)=>{
    //we need a third array to put values in
    var result = [];
    var i = 0;
    var j = 0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]> arr2[j]){
            result.push(arr2[j])
            j++
        }else{
            result.push(arr1[i])
            i++
        }
    }

    //figure out which array we have not yet completely gone through the length of
    while(i<arr1.length){
        result.push(arr1[i])
        i++
    }
    
    while(j<arr2.length){
        result.push(arr2[j])
        j++
    }

    // console.log(result)
    return result

}


function mergeSort(arr){
    if(arr.length<=1){
        // console.log(arr)
        return arr
    }else{
        //breaking down into half until you have single element arrays, then recursively merging those results using the combine function above
        let mid = Math.floor(arr.length/2)
        // console.log(mid)

        let lefthalf = arr.slice(0,mid)
        
        
        let righthalf = arr.slice(mid)
        // console.log("left half is this: ", lefthalf)
        // console.log("right half is this: ", righthalf)
        // console.log("mergesort with left half: ", mergeSort(lefthalf))
        // console.log("mergesort with right half: ",mergeSort(righthalf))
        return combine(mergeSort(lefthalf), mergeSort(righthalf))
    }


}


console.log(mergeSort([7,4,8,5,3,2,9]))



// combine([4,6,7], [1,3,6,9])



// var fruits = ["Banana", "Orange", "Potato", "Lemon", "Apple", "Mango"];
// var lefthalf = fruits.slice(0,3);
// var righthalf = fruits.slice(3,fruits.length)

// console.log(lefthalf)
// console.log(righthalf)