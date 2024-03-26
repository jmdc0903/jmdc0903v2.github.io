
function displayEvenNumbers(min, max) {
   
    if (isNaN(min) || isNaN(max) || min >= max) {
        console.log("Invalid input. Please enter valid minimum and maximum values.");
        return;
    }
    
    if (min % 2 !== 0) {
        min++;
    }

    for (let x = min; x <= max; x += 2) {
        console.log(x);
    }
}

let min = parseInt(prompt("Please enter the minimum value:"));
let max = parseInt(prompt("Please enter the maximum value:"));

displayEvenNumbers(min, max);