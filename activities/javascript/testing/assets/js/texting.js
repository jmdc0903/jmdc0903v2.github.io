// let AdultAge = 18;
// let Age = 15;

// if (Age >= AdultAge) {
//   console.log("Minor");
// } else {
//   console.log("Adult");
// }

// let Grade = 81;
// let TransmutedGrade = 0;

// if (Grade >= 90) {
//   TransmutedGrade = 1;
// } else if (Grade >= 80) {
//   TransmutedGrade = 2;
// } else if (Grade >= 75) {
//   TransmutedGrade = 3;
// } else {
//   TransmutedGrade = 5;
// }

// console.log(TransmutedGrade);

// let Operation = "aaa";
// let FirstNum = 10;
// let SeconNum = 30;
// let Total = 0;

// if (Operation == "add") {
//   Total = FirstNum + SeconNum;
// } else if (Operation == "sub") {
//   Total = FirstNum - SeconNum;
// } else if (Operation == "mul") {
//   Total = FirstNum * SeconNum;
// } else if (Operation == "div") {
//   Total = FirstNum / SeconNum;
// } else {
//   console.log("Invalid Operation");
// }

// console.log(Total);

document.getElementById("btn-calculate").addEventListener("click", function () {
  let FirstNum = document.getElementById("num-first-number").value;
  let SeconNum = document.getElementById("num-second-number").value;
  let Operation = document.getElementById("sel-operation").value;
  let Total = 0;

  if (FirstNum == "" || SeconNum == "") alert("Please enter the numbers");
  else if (Operation == "") alert("Invalid Operation");
  else {
    if (Operation == "add") Total = parseFloat(FirstNum) + parseFloat(SeconNum);
    else if (Operation == "sub")
      Total = parseFloat(FirstNum) - parseFloat(SeconNum);
    else if (Operation == "mul")
      Total = parseFloat(FirstNum) * parseFloat(SeconNum);
    else if (Operation == "div")
      Total = parseFloat(FirstNum) / parseFloat(SeconNum);
  }

  document.getElementById("num-total").value = Total;
});
