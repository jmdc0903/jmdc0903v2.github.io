//Loop Activity
let Multiply = document.getElementById("btnMultiply");
Multiply.addEventListener("click", function() {
    let rowNumber = document.getElementById("rownumber").value;
    let columnNumber = document.getElementById("columnnumber").value;
    let Divs = "";
    for(let x = 1; x <= rowNumber; x++) {
        let cols = "";
        for(let y = 1; y <= columnNumber; y++) {
            cols += "<div class='col text-center m-1 border-bottom border-white px-0' style='width: fit-content; '>" + (x * y) + "</div>";
            console.log(Divs)
            console.log(x * y)
        }
         Divs += "<div class='row no-gutters'>"+ cols +"</div>"
    }
    document.getElementById("divdata").innerHTML = Divs;
});
