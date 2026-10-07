document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");


    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();
            const status = document.getElementById("formStatus");
            status.textContent =
                "This static site is not connected to a message service. Your message has not been sent.";

        });

    }

});