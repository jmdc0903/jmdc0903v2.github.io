//FUNCTION ACTIVITY
// function add(num1, num2) {
//     let num1Value = document.getElementById("num-first-number").value;
//     let num2Value = document.getElementById("num-second-number").value;
//     let total = parseInt(num1Value) + parseInt(num2Value);
//     document.getElementById("num-total").value = total;
//     return total;
// }

// function sub(num1, num2) {
//     let num1Value = document.getElementById("num-first-number").value;
//     let num2Value = document.getElementById("num-second-number").value;
//     let total = parseInt(num1Value) - parseInt(num2Value);
//     document.getElementById("num-total").value = total;
//     return total;
// }

// function mul(num1, num2) {
//     let num1Value = document.getElementById("num-first-number").value;
//     let num2Value = document.getElementById("num-second-number").value;
//     let total = parseInt(num1Value) * parseInt(num2Value);
//     document.getElementById("num-total").value = total;
//     return total;
// }

// function div(num1, num2) {
//     let num1Value = document.getElementById("num-first-number").value;
//     let num2Value = document.getElementById("num-second-number").value;
//     let total = parseInt(num1Value) / parseInt(num2Value);
//     document.getElementById("num-total").value = total;
//     return total;
// }


function operations(operation) {
    let num1Value = parseInt(document.getElementById("num-first-number").value);
    let num2Value = parseInt(document.getElementById("num-second-number").value);
    let total;

    if (operation === 'add') {
        total = num1Value + num2Value;
    } else if (operation === 'sub') {
        total = num1Value - num2Value;
    } else if (operation === 'mul') {
        total = num1Value * num2Value;
    } else if (operation === 'div') {
        total = num1Value / num2Value;
    } else {
        console.error('Invalid operation');
        return;
    }

    document.getElementById("num-total").value = total;
}




