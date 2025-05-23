document.addEventListener("DOMContentLoaded", function () {
    fetch("/data/reservationdata.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data.reservations.length > 0) {
                displayReservation(data.reservations[0]);
            }
        })
        .catch(error => console.error("Error loading JSON data:", error));
});

document.getElementById("reservationForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const persons = document.getElementById("persons").value;
    const time = document.getElementById("time").value;
    const date = document.getElementById("date").value;
    const reservation = {
        name: name,
        email: email,
        persons: persons,
        time: time,
        date: date
    };

    displayReservation(reservation);

    document.getElementById("reservationForm").reset();
});

function displayReservation(reservation) {
    document.getElementById("resName").innerText = reservation.name;
    document.getElementById("resEmail").innerText = reservation.email;
    document.getElementById("resPersons").innerText = reservation.persons;
    document.getElementById("resTime").innerText = reservation.time;
    document.getElementById("resDate").innerText = reservation.date;

    document.getElementById("reservationDetails").style.display = "block";
}
