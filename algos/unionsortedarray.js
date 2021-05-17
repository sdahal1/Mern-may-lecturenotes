//arr1 [1,2,2,2,7,7,7]
//arr2 [2,2,6,6,7,7,7,7]

//output --> [1,2,2,2,6,6,7,7,7,7]




//arr1 [1,1,3,4,4,4,6]
//arr2 [1,4,7,7]

//output [1,1,3,4,4,4,6,7,7]

function unionArrays(arr1,arr2){
    result = []
    let idx1 = 0;
    let idx2 = 0;

    while(idx1<arr1.length && idx2 < arr2.length){
        if(arr1[idx1] < arr2[idx2]){
            result.push(arr1[idx1])
            idx1++
        }else if(arr1[idx1] == arr2[idx2]){
            result.push(arr1[idx1])
            idx1++
            idx2++
        }else{
            result.push(arr2[idx2])
            idx2 ++
        }

    }

    // console.log(result)
    // console.log(arr1[idx1])
    // console.log(arr2[idx2])

    while(idx1<arr1.length){
        result.push(arr1[idx1])
        idx1++
    }
    while(idx2<arr2.length){
        result.push(arr2[idx2])
        idx2++
    }

    console.log(result)
    return result


}

unionArrays([1,2,2,2,7,7,7, 9, 10], [2,2,6,6,7,7] ) //[1,2,2,2,6,6,7,7,7,7]

//[1, 2, 2, 2, 6, 6, 7, 7]
