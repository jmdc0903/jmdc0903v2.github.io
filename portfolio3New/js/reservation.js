document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var datetime = document.getElementById("datetime").value;
    var people = document.getElementById("select1").value;
    var message = document.getElementById("message").value;

    // Construct reservation object
    var reservation = {
        name: name,
        email: email,
        datetime: datetime,
        people: people,
        message: message
    };
    // Save reservation to JSON file
    fetch("reservations.json", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reservation)
    })
    .then(response => {
        if (response.ok) {
            alert("Reservation successful!");
            // Optionally, redirect the user to a confirmation page
            // window.location.href = "/confirmation";
        } else {
            alert("Reservation failed. Please try again later.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
    });
});



