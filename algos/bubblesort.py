# https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/


def bubblesort(arrInput):
    for j in range(len(arrInput)):
        for i in range(len(arrInput)-1-j):
            #if the value at current index is greaterr than value at next index, then its out of order and we swap
            if(arrInput[i]> arrInput[i+1]):
                arrInput[i], arrInput[i+1] = arrInput[i+1], arrInput[i]

    print(arrInput)




bubblesort([4,7,2,3,1,9,8])