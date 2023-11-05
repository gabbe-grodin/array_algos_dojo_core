// Write functions using the JavaScript language for all challenges. Use only a single JavaScript file for this assignment. Do not use built-in methods (unless otherwise instructed) or create any additional arrays. (.length is a property, and is allowed.)

//? push front: Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

function pushFront(arr, num) {
    arr.push(num)
    // loops backwards through array, shifting last left until arr[0]
    for (let i = arr.length-1; i > 0; i--){
        arr[i] = arr[i-1];
    }
    // after shifting num all the way to the left, reassign it to num
    arr[0] = num
    console.log(arr);
}
// test:
pushFront([5,7,2,3], 8) // => [8,5,7,2,3]
pushFront([99], 7) // => [7,99]


//? pop front: Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

function popFront(arr){
    //preserve the first:
    let willGetPopped = arr[0];
    // shift first to last then pop/remove and print
    for (let i = 0; i < arr.length - 1; i++){
        // each loop i swapped with i + 1 and reassign it with preserved first
        arr[i] = arr[i+1]
        arr[i+1] = willGetPopped
    }
    arr.pop()
    console.log(willGetPopped ,arr)
    return(willGetPopped)
}
// test:
popFront([0,5,10,15]) // => 0 returned, with [5,10,15] printed in the function
popFront([4,5,7,9]) // => 4 returned, with [5,7,9] printed in the function


//? insert at: Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!
// preserve the original value at the given index
// tack on given num and shift left until position of original (this way uses push)
// or... reassign arr[i] to num and swap num for [i+1] (set arr[i+1] = ... or loop through from i to length-1 swapping like in pushFront (this way does not use push)

function insertAt(arr, x, num){
    let og = arr[x]
    arr.push(num)
    for (let i = arr.length-1; i > x; i--){
        arr[i] = arr[i-1];
        arr[i-1] = og;
    }
    arr[x] = num;
console.log(arr)
}
// test:
insertAt([100,200,5], 2, 311) // => [100,200,311,5]
insertAt([9,33,7], 1, 42) // => [9,42,33,7]