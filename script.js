const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

/* MENU TOGGLE */

menuBtn.onclick = () => {
    navbar.classList.toggle("active");
};

/* AUTO CLOSE NAVBAR */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});

/* SCROLL ANIMATION */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

const hiddenElements = document.querySelectorAll(
    ".product-card, .why-card, .stat-box, .contact-box, .industry-card, .process-card, .testimonial-card"
);

hiddenElements.forEach((el) => {

    el.classList.add("hidden");
    observer.observe(el);

});