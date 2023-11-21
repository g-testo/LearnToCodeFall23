// Most common helper methods

// ****************************************

// Arrays

// Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Methods: 

let numArr = [9, 8, 7, 6, 5, 4, 3, 2];
let strArr = ["Lions", "Tigers", "And", "Bears"];

// .forEach

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// What are the inputs?
// Acts upon: Array 
// Arguments: Callback function

// What are the outputs? (What does it return?) : undefined

// Does it change the original? (Is it destructive?) No

numArr.forEach((num)=>{
    console.log(num);
})

strArr.forEach((str)=>{
    console.log(str);
})