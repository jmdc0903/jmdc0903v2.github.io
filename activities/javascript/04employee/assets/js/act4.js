let Items = [];
document.getElementById("log").addEventListener('click', function() {
    if (!validateForm()) {
        return;
    }
    let ID = document.getElementById("id").value;
    let Name = document.getElementById("name").value;
    let Hours = document.getElementById("hours").value;
    Items.push([ID, Name, Hours]);
    DrawList();
});
function remove(index) {
    Items.splice(index, 1);
    DrawList();
}
function DrawList() {
    let table = "<table class='table'>";
    table += "<thead><tr><th>ID</th><th>Name</th><th>Hours</th><th>Action</th></tr></thead>";
    table += "<tbody>";
    for (let x = 0; x < Items.length; x++) {
        table += "<tr>";
        table += "<td>" + Items[x][0] + "</td>";
        table += "<td>" + Items[x][1] + "</td>";
        table += "<td>" + Items[x][2] + "</td>";
        table += "<td><button class='btn btn-danger' onclick='remove(" + x + ")'>Remove</button></td>";
        table += "</tr>";
    }
    table += "</tbody></table>";
    document.getElementById("table-list").innerHTML = table;
}
function validateForm() {
    let x = document.forms["empID"]["inputID"].value;
    let y = document.forms["empName"]["inputName"].value;
    let z = document.forms["empHours"]["inputHours"].value;
    if (x == "") {
        alert("Employee ID must be filled out");
        return false;
    } else if (y == "") {
        alert("Employee Name must be filled out");
        return false;
    } else if (z == "") {
        alert("Employee Hours must be filled out");
        return false;
    } 
    return true;
}
function computeTotalHours() {
    let totalHours = 0;
    for (let i = 0; i < Items.length; i++) {
        totalHours += parseInt(Items[i][2]);
    }
    alert("Total Hours: " + totalHours);
}