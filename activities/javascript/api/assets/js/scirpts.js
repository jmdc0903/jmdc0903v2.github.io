

    // function ListOfProfessionals() {
    //     let professionalsxhr = new XMLHttpRequest();
    //     professionalsxhr.onreadystatechange = function() {
    //         if (xhr.readyState == 4) {
    //             if (xhr.status == 200)
    //             {
    //                 let professionalsinfo = JSON.parse(professionalsxhr.responseText);
    //                 let ProTable = ` 
    //                 <table class="table">
    //                 <thead>
    //                   <tr>
    //                     <th scope="col">ID Number</th>
    //                     <th scope="col">Title</th>
    //                     <th scope="col">First Name</th>
    //                     <th scope="col">Last Name</th>
    //                     <th scope="col">Practice Name</th>
    //                     <th scope="col">Provider Specialty</th>
    //                     <th scope="col">Contact Number</th>
    //                     <th scope="col">Email</th>
    //                   </tr>
    //                 </thead>
    //                 <tbody>`;
    //             for(const professionals in result) {
    //                 divs += `<tr>
    //                             <th scope="row">${result[professionals].id}</th>
    //                             <td>${result[professionals].title}</td>
    //                             <td>${result[professionals].firstname}</td>
    //                             <td>${result[professionals].lastname}</td>
    //                             <td>${result[professionals].practice_name}</td>
    //                             <td>${result[professionals].provider_specialty}</td>
    //                             <td>${result[professionals].contact_number}</td>
    //                             <td>${result[professionals].email}</td>
    //                         </tr>`;
    //             }
                    
    //                             divs += `</tbody></table>`;
    
    //                 document.querySelector("#div-table").innerHTML = ProTable;
    //             } else {
    //                 alert("failed to fetch data");
    //             }
    //         }
    //     }
    //     dogsxhr.open("GET", "https://api.mydrsappt.com/api/v1/doctors", true);
    //     dogsxhr.send();
    // }
    
    // CallDogsApi();
    // setInterval("CallDogsApi()", 5000);





    // function ListOfProfessionals() {
    //     let professionalsxhr = new XMLHttpRequest();
    //     professionalsxhr.onreadystatechange = function() {
    //         if (professionalsxhr.readyState == 4) {
    //             if (professionalsxhr.status == 200) {
    //                 let professionalsinfo = JSON.parse(professionalsxhr.responseText);
    //                 let ProTable = ` 
    //                     <table class="table">
    //                         <thead>
    //                             <tr>
    //                                 <th scope="col">ID Number</th>
    //                                 <th scope="col">Title</th>
    //                                 <th scope="col">First Name</th>
    //                                 <th scope="col">Last Name</th>
    //                                 <th scope="col">Practice Name</th>
    //                                 <th scope="col">Provider Specialty</th>
    //                                 <th scope="col">Contact Number</th>
    //                                 <th scope="col">Email</th>
    //                             </tr>
    //                         </thead>
    //                         <tbody>`;
    
    //                 for(const professional of professionalsinfo) {
    //                     ProTable += `<tr>
    //                                     <th scope="row">${professional.id}</th>
    //                                     <td>${professional.title}</td>
    //                                     <td>${professional.firstname}</td>
    //                                     <td>${professional.lastname}</td>
    //                                     <td>${professional.practice_name}</td>
    //                                     <td>${professional.provider_specialty}</td>
    //                                     <td>${professional.contact_number}</td>
    //                                     <td>${professional.email}</td>
    //                                 </tr>`;
    //                 }
                    
    //                 ProTable += `</tbody></table>`;
    
    //                 document.querySelector("#div-table").innerHTML = ProTable;
    //             } else {
    //                 alert("Failed to fetch data");
    //             }
    //         }
    //     }
    
    //     professionalsxhr.open("GET", "https://api.mydrsappt.com/api/v1/doctors?page=1", true);
    //     professionalsxhr.send();
    // }









// Function to generate the table
function generateTable(data) {
    const table = document.createElement('table');
    table.className = 'table';

    // Create table header
    const header = table.createTHead();
    const headerRow = header.insertRow();
    for (const key in data[0]) {
        const th = document.createElement('th');
        th.textContent = key.replace('_', ' ');
        headerRow.appendChild(th);
    }

    // Create table body
    const body = table.createTBody();
    data.forEach(obj => {
        const row = body.insertRow();
        for (const key in obj) {
            const cell = row.insertCell();
            cell.textContent = obj[key];
        }
    });

    return table;
}

// Render the table
const tableContainer = document.getElementById('div-table');
tableContainer.appendChild(generateTable(jsonData.data));