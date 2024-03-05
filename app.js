// Assignment 19

// Array


// 1.


// var studentNames = [];

// 2.

// var studentNamesObject = {
//     names: []
//   };

// 3.

// var fruits  = ["banana", "strawberry", "peach", "watermelon"];

// 4.

// var numbers = [1, 2, 3, 4, 5];


// 5.

// var boolean = [true, false];


// 6.


// var mixed = ["chocolate", 42, true];

// 7.


// var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

//    document.write("<h1>QUALIFICATIONS<h1>", "SSC</br>", "HSC</br>", "BCS</br>", "BS</br>", "BCOM</br>", "MS</br>", "M. Phil.</br>", "PhD");


// 8.

//  var studentNames = ["Micheal" , "John" , "Tony"];

//  var studentScore = [320 , 230 , 480];


// var studentNames = ["Micheal", "John", "Tony"];


// var studentScores = [320, 230, 480];


// document.write("Score of "+studentNames[0] + " is " + studentScores[0] + ". Percentage : " + (studentScores[0] / 500 * 100) + "%</br>");
// document.write("Score of "+studentNames[1] + " is " + studentScores[1] + ". Percentage : " + (studentScores[1] / 500 * 100) + "%</br>");
// document.write("Score of "+studentNames[2] + " is " + studentScores[2] + ". Percentage : " + (studentScores[2] / 500 * 100) + "%</br>");



// 9.



// var colors = ["Red", "Green", "Blue"];


// document.write("<b>Original Array:</b> " + colors.join(", ") + "<br>");


// var colorToAddAtBeginning = prompt("Enter a color to add to the beginning of the array:");
// colors.unshift(colorToAddAtBeginning);


// document.write("<b>After adding color at the beginning:</b> " + colors.join(", ") + "<br>");


// var colorToAddAtEnd = prompt("Enter a color to add to the end of the array:");
// colors.push(colorToAddAtEnd);


// document.write("<b>After adding color at the end:</b> " + colors.join(", ") + "<br>");


// colors.unshift("Purple", "Yellow");


// document.write("<b>After adding two colors at the beginning:</b> " + colors.join(", ") + "<br>");


// colors.shift();


// document.write("<b>After deleting the first color:</b> " + colors.join(", ") + "<br>");


// colors.pop();


// document.write("<b>After deleting the last color:</b> " + colors.join(", ") + "<br>");


// var indexToAdd = parseInt(prompt("Enter the index where you want to add a color:"));
// var colorToAddAtIndex = prompt("Enter the color to add at index " + indexToAdd + ":");
// colors.splice(indexToAdd, 0, colorToAddAtIndex);


// document.write("<b>After adding color at index " + indexToAdd + ":</b> " + colors.join(", ") + "<br>");


// var indexToDelete = parseInt(prompt("Enter the index from where you want to delete color(s):"));
// var deleteCount = parseInt(prompt("Enter the number of colors you want to delete:"));
// colors.splice(indexToDelete, deleteCount);


// document.write("<b>After deleting " + deleteCount + " color(s) from index " + indexToDelete + ":</b> " + colors.join(", ") + "<br>");


// 10.


// var studentScores = [85, 92, 78, 95, 88];


// studentScores.sort(function(a, b) {
//     return a - b;
// });

// // Displaying the sorted array
// console.log("Sorted student scores (ascending order):", studentScores);


// 11.


// var cities = ["karachi", "Lahore", "islamabad", "quetta", "Peshawar"];


// var selectedCities = cities.slice(2, 4);

// console.log("Selected cities:", selectedCities);


// 12.

// var arr = ["This ", " is ", " my ", " cat"];
// var singleString = arr.join("");
// console.log(singleString);


// 13.



// var devices = [];


// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("moniter");


// console.log(devices.shift());
// console.log(devices.shift());
// console.log(devices.shift());




// 14.



// var devices = [];


// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("moniter");


// console.log(devices.pop());
// console.log(devices.pop());
// console.log(devices.pop());
// console.log(devices.pop());


// 15.




// var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];


// document.write("<select>");
// for (var i = 0; i < phones.length; i++) {
//     document.write("<option value='" + phones[i] + "'>" + phones[i] + "</option>");
// }
// document.write("</select>");



// QUESTION 14   16

// chapter 15

// array(1)


// 1.


// var emptyArray = [];


// 2.


// var string = ["Hello, World!"];

// 3.

// var alphabet = ["h", "i", "j", "k"];
// alert(alphabet[2]);

// 4.


// var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
// var totalLength = alphabet.length;
// console.log("Total length of the array:", totalLength);


// 5.



// var myArray = ["First element"];


// myArray[1] = "Second element";


// alert(myArray[1]);


// chapter 16

// (Array II)


// 1.



// var myArray = ["First element"];


// myArray.push("Second element");


// alert(myArray[myArray.length - 1]);





// 2.



// var Alphabet = ["h", "i", "j", "k"];


// Alphabet.pop();


// console.log("Array after removing the last element:", Alphabet);



// 3.



// var Alphabet = ["h", "i", "j", "k"];


// Alphabet.push(10);


// console.log("Array after adding a number to the end:", Alphabet);


// chapter 16

// (Array III)



// 1.


// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.shift();

// console.log(sizes);



// 2.


// var sizes = ["S", "M", "XL", "XXL", "XXXL"];


// sizes.unshift(1, 2, 3);


// console.log("Array after adding three number elements to the beginning:", sizes);


// 3.



// var myArray = ["First element"];


// myArray.unshift("Second element");


// alert(myArray[0]);


// 4.


// var sizes = ["S", "M", "XL", "XXL", "XXXL"];


// var regSizes = sizes.slice(0, 3);


// console.log("Regular Sizes:", regSizes);




// 5.


// var pets = ["dog", "cat", "crocodile", "panda", "elephant"];


// pets.splice(1, 0, "lion", "bear");


// pets.splice(2, 3);


// console.log("Updated pets array:", pets);



// 6.



// var pets = ["dog", "cat", "crocodile", "panda", "elephant"];


// var catIndex = pets.indexOf("horse");
// var oxIndex = pets.indexOf("zebra");


// pets.splice(catIndex, 1);
// pets.splice(oxIndex, 1);


// console.log("Updated pets array:", pets);


// 7.


// var pets =["dog", "cat", "crocodile", "panda", "elephant"];


// var reducedPets = pets.slice(3, 5);


// console.log("Reduced pets array:", reducedPets);






