// let phrase = "Hello World";
// let phraseLength = phrase.length;

// console.log(phraseLength);

// let oldYellar = "Old Yellar says \"Timmy has fell down a well\"";
// console.log(oldYellar.toLowerCase());

// let name = "Betty Jo Smalltree";

// let pos = name.lastIndexOf("e");
// console.log(pos);

// let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin nisl leo, eu blandit ligula lobortis ut. Praesent id dignissim lectus. Praesent quis congue ligula. Morbi augue nibh, pharetra vel volutpat condimentum, interdum cursus nisl. Phasellus ultrices mi vitae purus imperdiet condimentum. Sed placerat non tellus ac tempus. In vitae gravida est. Nulla efficitur auctor dapibus. Proin eget egestas neque. Vestibulum aliquam eget ipsum a convallis. Curabitur est leo, porttitor sed pretium nec, pretium at urna. Aenean viverra blandit nunc quis scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur tristique tempor congue. Aliquam eget lacus vitae enim volutpat mattis. \n Ut consectetur lectus sit amet pharetra vulputate. Nulla facilisi. Maecenas erat libero, tincidunt varius feugiat gravida, rhoncus vitae diam. Nam eget mauris commodo, porta eros non, tristique nulla. Proin consequat bibendum turpis id egestas. Phasellus quis enim in lacus gravida laoreet quis non mi. Pellentesque ultrices sit amet est eget molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean sed eleifend ante. Sed lacinia, magna vitae dictum gravida, dolor massa cursus felis, sed volutpat quam eros vitae est. Curabitur sagittis felis mauris, sed posuere neque molestie sit amet. In ut mollis dui, at pellentesque lacus. Phasellus risus ligula, elementum ut placerat vel, volutpat id enim. Sed ac sapien fermentum, tempus ipsum in, scelerisque mauris. Integer mattis maximus maximus.";

// let sampleSubStr = description.substring(0, 50) + "...";
// let sampleSlice = description.slice(0, 50) + "...";

// console.log(sampleSlice);

// function parseTelephoneNumber(phoneNumber){
//     let areaCode = phoneNumber.substring(1,4);
//     let subscriberNumberPart1 = phoneNumber.substring(5, 8);
//     let subscriberNumberPart2 = phoneNumber.substring(9);
//     console.log(areaCode + subscriberNumberPart1 + subscriberNumberPart2);
// }
// let phone = "(212)555-5555";
// let parsedNumber = parseTelephoneNumber(phone);


// let firstNameInput = "gReGoRiO";

// // PseudoCode

// // Create a function that capitalizes the first character and lowercases everything else
// // Accepts a string and returns a capitalized string

// // .toUpperCase, .toLowerCase, .slice/.substring
// function capitalizeStr(str){
//     // Access the first character in the given string and raise the case and store in a variable
//     // let firstChar = str.charAt(0);
//     // let firstChar = str[0];
//     let firstChar = str.slice(0, 1);

//     // Access all characters after the first character and lower the case
//     let restOfStr = str.slice(1);

//     // return string after combining the first raised first character and the rest of the string that has been lower cased
//     return firstChar.toUpperCase() + restOfStr.toLowerCase();
// }

// let capitalizedFirstName = capitalizeStr(firstNameInput);

// console.log(capitalizedFirstName);

// let inputs = "San Francisco,Dallas,Atlanta,Hartford";
// let array = inputs.split(",");
// // The array resembles the following
// //     position 0  -  value "San Francisco"
// //     position 1  -  value "Dallas"
// //     position 2  -  value "Atlanta"
// //     position 3  -  value "Hartford"

// console.log(array);