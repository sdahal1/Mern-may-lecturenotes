const selectionSort = (arr)=>{
    for(let i =0; i<arr.length; i++){
        let big = arr[0]
        let bigidx = 0
        for(let j = 0; j<arr.length-i; j++){
            if(arr[j]> big ){
                big = arr[j] 
                bigidx = j
            }
        }
        let temp = arr[bigidx]
        arr[bigidx] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp

    }
    return arr
    

}



console.log(selectionSort([6,8,4,5,3,9,1]))