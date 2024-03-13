function greet() {

    let Total = 5 + 5;

    return Total;

}

document.getElementById("btn-alert").addEventListener("click", function(){
    let Total = greet();
    alert(Total);



});
