// let inputEnglish = document.getElementById("english");
// inputEnglish.addEventListener('keyup', function(){
// });

// let inputMath = document.getElementById("math");
// inputMath.addEventListener('keyup', function(){
// });

// let inputDataStructures = document.getElementById("data-structures");
// inputDataStructures.addEventListener('keyup', function(){
// });

// let inputComputerProgramming = document.getElementById("computer-programming");
// inputComputerProgramming.addEventListener('keyup', function(){
// });

// let inputWebProgramming = document.getElementById("web-programming");
// inputWebProgramming.addEventListener('keyup', function(){
// });




document.addEventListener('keyup' , function() {
let inputEnglish = document.getElementById("english").value;
let inputMath = document.getElementById("math").value;
let inputDataStructures = document.getElementById("data-structures").value;
let inputComputerProgramming = document.getElementById("computer-programming").value;
let inputWebProgramming = document.getElementById("web-programming").value;

});


// document.getElementById("english").value = "";
// document.getElementById("math").value = "";


// inputEnglish.addEventListener('keyup', function() {
// let total = parseFloat(inputEnglish.value) + parseFloat(inputMath.value) + parseFloat(inputDataStructures.value) + parseFloat(inputComputerProgramming.value);
// document.getElementById("total-grades").value = total;
// });



// inputEnglish.addEventListener('keyup', function() {
//     let total = parseFloat(inputEnglish.value) + parseFloat(inputMath.value) + parseFloat(inputDataStructures.value) + parseFloat(inputComputerProgramming.value) + parseFloat(inputWebProgramming.value);
//     document.getElementById("total-grades").value = total;
// });

// inputMath.addEventListener('keyup', function() {
//     let total = parseFloat(inputMath.value) + parseFloat(inputEnglish.value) + parseFloat(inputDataStructures.value) + parseFloat(inputComputerProgramming.value) + parseFloat(inputWebProgramming.value);
//     document.getElementById("total-grades").value = total;
// });

// inputDataStructures.addEventListener('keyup', function() {
//     let total = parseFloat(inputDataStructures.value) + parseFloat(inputEnglish.value) + parseFloat(inputMath.value) + parseFloat(inputComputerProgramming.value) + parseFloat(inputWebProgramming.value);
//     document.getElementById("total-grades").value = total;
// });

// inputComputerProgramming.addEventListener('keyup', function() {
//     let total = parseFloat(inputComputerProgramming.value) + parseFloat(inputDataStructures.value) + parseFloat(inputEnglish.value) + parseFloat(inputMath.value) + parseFloat(inputWebProgramming.value);
//     document.getElementById("total-grades").value = total;
// });

// inputWebProgramming.addEventListener('keyup', function() {
//     let total = parseFloat(inputWebProgramming.value) + parseFloat(inputComputerProgramming.value) + parseFloat(inputDataStructures.value) + parseFloat(inputEnglish.value) + parseFloat(inputMath.value);
//     document.getElementById("total-grades").value = total;
// });


// let btnFloor = document.getElementById("btn-floor");
// btnFloor.addEventListener('click', function() {
//     //string
//     let FirstNumber = document.getElementById("num-first-number").value;
//     let SecondNumber = document.getElementById("num-second-number").value;
//     let total = parseFloat(FirstNumber) + parseFloat(SecondNumber);

//     document.getElementById("p-total").innerText = Math.floor(total);
// });


// id="total-grades"
// id="average"




// document.addEventListener("DOMContentLoaded", function() {
//     // Get references to all input fields
//     const englishInput = document.getElementById("english");
//     const mathInput = document.getElementById("math");
//     const dataStructuresInput = document.getElementById("data-structures");
//     const computerProgrammingInput = document.getElementById("computer-programming");
//     const webProgrammingInput = document.getElementById("web-programming");
//     const totalGradesInput = document.getElementById("total-grades");
//     const averageInput = document.getElementById("average");

//     // Function to calculate total grades and average
//     function calculateGradesAndAverage() {
//         // Get input values and convert them to numbers
//         const englishGrade = parseFloat(englishInput.value) || 0;
//         const mathGrade = parseFloat(mathInput.value) || 0;
//         const dataStructuresGrade = parseFloat(dataStructuresInput.value) || 0;
//         const computerProgrammingGrade = parseFloat(computerProgrammingInput.value) || 0;
//         const webProgrammingGrade = parseFloat(webProgrammingInput.value) || 0;

//         // Calculate total grades
//         const totalGrades = englishGrade + mathGrade + dataStructuresGrade + computerProgrammingGrade + webProgrammingGrade;

//         // Calculate average
//         const average = totalGrades / 5;

//         // Update input fields with calculated values
//         totalGradesInput.value = totalGrades.toFixed(2);
//         averageInput.value = average.toFixed(2);
//     }

//     // Add event listeners to input fields to recalculate grades when inputs change
//     [englishInput, mathInput, dataStructuresInput, computerProgrammingInput, webProgrammingInput].forEach(function(input) {
//         input.addEventListener("input", calculateGradesAndAverage);
//     });
// });