// let Tagabilang = 1;
// while (Tagabilang < 10) {
//     // console.log(Tagabilang + " : Hello from While JS");
//     Tagabilang++;
// }

//For Loop

//1. initialization
//2. condition
//3. statement
//4. incrementation/decrementation
// for (var counter = 1; counter < 10; counter++ ) {
//     console.log(counter + " : Hello from While JS");
// }

//Nested loop

let Execute = document.getElementById("btnExecute");

Execute.addEventListener('click', function() {
    let Limit = document.getElementById('txtLimit').value;
    let Divs = "";

    for(var x = 1; x <= Limit; x++) {
        Divs +=  x + " horse " + "<br />";
    }

    document.getElementById("div-wrapper").innerHTML = Divs;

});  