document.getElementById('bbqReservationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validate the form (additional validation can be added here)
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log(data);

    // Show success message
    document.getElementById('successMessage').classList.remove('hidden');

    // Optionally, you can send the data to a server here
    // fetch('/api/reservations', {
    //     method: 'POST',
    //     body: JSON.stringify(data),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }).then(response => {
    //     if (response.ok) {
    //         document.getElementById('successMessage').classList.remove('hidden');
    //     } else {
    //         // Handle errors here
    //     }
    // });
alert("thank you for reservation DANA PANI BBQ");    
});