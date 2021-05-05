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

    console.log(result)
    return result

}


combine([4,6,7], [1,3,6,9])