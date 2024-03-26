
function processNumbers() {
    let input = prompt("Enter a number (0 to stop):");
    
    if (input === null || input === "") {
        alert("Invalid input. Please enter a valid number.");
        processNumbers();
        return;
    }
    
    const number = parseInt(input);
    
    if (isNaN(number)) {
        alert("Invalid input. Please enter a valid number.");
        processNumbers();
        return;
    }

    if (number === 0) {
        return;
    }

    if (number % 2 === 0) {
        evenNumbers.push(number);
    } else {
        oddNumbers.push(number);
    }
    
    processNumbers();
}

const evenNumbers = [];
const oddNumbers = [];

processNumbers();

console.log("***Result***")
console.log("");
console.log("Even numbers: " + evenNumbers.join(", "));
console.log("Odd numbers: " + oddNumbers.join(", "));
console.log("");
console.log("***End of Program***")
