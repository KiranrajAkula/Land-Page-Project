document.addEventListener("DOMContentLoaded", function () {
    // ... (existing code) ...

    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const formData = {
            name: name,
            email: email,
            message: message
        };

        // Store data in "database" (JSON)
        const database = localStorage.getItem("feedbacks") ? JSON.parse(localStorage.getItem("feedbacks")) : [];
        database.push(formData);
        localStorage.setItem("feedbacks", JSON.stringify(database));

        alert("Thank you for your feedback!");

        // Clear form fields
        contactForm.reset();
    });
});
