document.addEventListener("DOMContentLoaded", () => {
    // Handle booking
    const bookingForm = document.getElementById("bookingForm");
    if (bookingForm) {
        bookingForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const train = document.getElementById("train").value;
            const seats = document.getElementById("seats").value;

            const passenger = { name, train, seats };
            const passengers = JSON.parse(localStorage.getItem("passengers")) || [];
            passengers.push(passenger);
            localStorage.setItem("passengers", JSON.stringify(passengers));

            alert(`Ticket booked successfully for ${name}!`);
            bookingForm.reset();
        });
    }

    // Handle canceling
    const cancelForm = document.getElementById("cancelForm");
    if (cancelForm) {
        cancelForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const cancelName = document.getElementById("cancelName").value;
            const cancelSeats = document.getElementById("cancelSeats").value;

            let passengers = JSON.parse(localStorage.getItem("passengers")) || [];
            passengers = passengers.filter((passenger) => passenger.name !== cancelName);
            localStorage.setItem("passengers", JSON.stringify(passengers));

            alert(`Ticket canceled for ${cancelName}!`);
            cancelForm.reset();
        });
    }

    // Display passenger list
    const passengerList = document.getElementById("passengerList");
    if (passengerList) {
        const passengers = JSON.parse(localStorage.getItem("passengers")) || [];
        passengers.forEach((passenger) => {
            const li = document.createElement("li");
            li.textContent = `${passenger.name} - ${passenger.train} (${passenger.seats} seats)`;
            passengerList.appendChild(li);
        });
    }
});

