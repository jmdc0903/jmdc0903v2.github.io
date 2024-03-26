
function displayEvenNumbers(min, max) {
    if (isNaN(min) || isNaN(max) || min >= max) {
        console.log("Invalid input. Please enter valid minimum and maximum values.");
        return;
    }

    if (min % 2 !== 0) {
        min++;
    }

    const numEvenNumbers = Math.floor((max - min) / 2) + 1;
    const evenNumbers = Array.from({ length: numEvenNumbers }, (_, index) => min + index * 2);
    console.log(evenNumbers.join('\n'));
}

let min = parseInt(prompt("Please enter the minimum value:"));
let max = parseInt(prompt("Please enter the maximum value:"));

displayEvenNumbers(min, max);
