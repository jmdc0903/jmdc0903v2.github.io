

let btnMorning = document.getElementById("btn-morning");
btnMorning.addEventListener('click', function() {

    let FullName = document.getElementById("txt-fullname").value;
    
    document.getElementById("h1-output").innerText = "Good Morning!  " + FullName;
    console.log(Output);
});



// let btnConcat = document.getElementById("btn-concat");
// btnConcat.addEventListener('click', function() {

//     let FullName = document.getElementById("txt-fullname").value;
     
//     document.getElementById("h1-output").innerText = "Welcome back, " + FullName;
//     console.log(Output);
// });