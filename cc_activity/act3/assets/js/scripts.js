

let weight = parseFloat(prompt("Please enter your weight in kilograms:"));

let height = parseFloat(prompt("Please enter your height in meters:"));

let bmiResult = weight / (height * height);


let bmiCategory;
if (bmiResult < 16) {
    bmiCategory = "Severely Underweight";
} else if (bmiResult >= 16 && bmiResult <= 18.4) {
    bmiCategory = "Underweight";
} else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
    bmiCategory = "Normal Weight";
} else if (bmiResult >= 25.0 && bmiResult <= 29.9) {
    bmiCategory = "Overweight";
} else if (bmiResult >= 30.0 && bmiResult <= 34.9) {
    bmiCategory = "Moderately Obese";
} else if (bmiResult >= 35.0 && bmiResult <= 39.9) {
    bmiCategory = "Severely Obese";
} else {
    bmiCategory = "Morbidly Obese";
}


console.log("BMI Result: " + bmiResult);
console.log(bmiCategory);
