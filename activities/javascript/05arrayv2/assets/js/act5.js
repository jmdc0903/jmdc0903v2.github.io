let Items = [];
let editingIndex = -1;
document.getElementById("log").addEventListener('click', function() {
    if (!validateForm()) {
        return;
    }
    let ID = document.getElementById("id").value;
    let Name = document.getElementById("name").value;
    let Hours = document.getElementById("hours").value;
    if (IDExists(ID)) {
        alert("Employee ID already exists!");
        return;
    }
    if (editingIndex > -1) { 
        Items[editingIndex] = [ID, Name, Hours];
        editingIndex = -1;
    } else {
        Items.push([ID, Name, Hours]);
    }
    DrawList();
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("hours").value = "";
});
function IDExists(id) {
    for (let i = 0; i < Items.length; i++) {
        if (Items[i][0] === id) {
            return true;
        }
    }
    return false;
}
function remove(index) {
    Items.splice(index, 1);
    DrawList();
}
function edit(index) {
    editingIndex = index;
    document.getElementById("id").value = Items[index][0]; 
    document.getElementById("name").value = Items[index][1];
    document.getElementById("hours").value = Items[index][2];
    document.getElementById("log").innerText = "Update Details";
}
function DrawList() {
    let table = "<table class='table'>";
    table += "<thead><tr><th>ID</th><th>Name</th><th>Hours</th><th colspan='2' class='text-center'>Action</th></tr></thead>";
    table += "<tbody>";
    for (let x = 0; x < Items.length; x++) {
        table += "<tr>";
        table += "<td>" + Items[x][0] + "</td>";
        table += "<td>" + Items[x][1] + "</td>";
        table += "<td>" + Items[x][2] + "</td>";
        table += "<td><button class='btn btn-danger' onclick='remove(" + x + ")'>Remove</button></td>";
        table += "<td><button class='btn btn-primary' onclick='edit(" + x + ")'>Edit</button></td>";
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