
// Dark and Light Theme

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    localStorage.setItem(
        "portfolio-theme",
        isDark ? "dark" : "light"
    );

    themeToggle.innerHTML = isDark
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
});


// Typing Animation

const typingText = document.getElementById("typingText");

const roles = [
    ".NET Full Stack Developer",
    "React.js Developer",
    "Web Developer",
    "MCA Graduate"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {
        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();


// Contact Form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields.");
        return;
    }

    const emailAddress = "chhabijena337@gmail.com";

    const mailBody = `
Name: ${name}
Email: ${email}

Message:
${message}
    `;

    const mailURL =
        "mailto:" + emailAddress +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(mailBody);

    window.location.href = mailURL;

    contactForm.reset();
});


// Navbar Auto Close on Mobile

const navLinks = document.querySelectorAll(".nav-link");

const navbarCollapse = document.getElementById("navbarNav");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbarCollapse.classList.contains("show")) {

            bootstrap.Collapse
                .getOrCreateInstance(navbarCollapse)
                .hide();
        }
    });
});


// Current Year

const footerText = document.querySelector("footer p:last-of-type");

if (footerText) {
    footerText.textContent =
        `© ${new Date().getFullYear()} All Rights Reserved.`;
}
