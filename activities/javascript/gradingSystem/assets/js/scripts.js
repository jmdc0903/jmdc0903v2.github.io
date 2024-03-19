

document.querySelector("#btn-add").addEventListener('click', function() {
  let GradeName = document.querySelector("#txt-grade-name").value;
  let Input = document.createElement("input");
  Input.className = "form-control form-control-sm";
  Input.type = "number";
  // Input.placeholder = `Enter Grade $(GradeName) `;
  Input.placeholder = "Enter " + GradeName +" grade";
  

  let Li = document.createElement("li");
  Li.className = "mt-2";

  Li.prepend(Input);

  console.log(Li);
  

  document.querySelector("#ul-parent").append(Li);

  document.querySelector("#txt-grade-name").value = "";
  document.querySelector("#txt-grade-name").focus();

});



document.querySelector("#btn-remove").addEventListener('click', function() {
  document.querySelector("li:last-child").remove();

});


document.querySelector("#btn-calculate").addEventListener('click', function() {
  let inputs = document.querySelectorAll("#ul-parent input");
  let totalMarks = 0;
  let count = 0;

  inputs.forEach(function(input) {
    if (input.value !== "") {
      let grade = parseFloat(input.value);
      totalMarks += grade;
      count++;
    }
  });

  let averageGrade = totalMarks / count;
  
  // Create a span element to hold the result
  let resultSpan = document.createElement("span");
  resultSpan.textContent = " " + averageGrade.toFixed(2); // Displaying average grade with 2 decimal places

  // Append the span element to the "gradeResult" div
  document.getElementById("result").appendChild(resultSpan);
});