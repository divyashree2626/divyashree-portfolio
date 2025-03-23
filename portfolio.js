// Navbar Toggle for Mobile
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Close menu when clicking on a navbar link
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

// Active Navigation Link Highlight on Scroll
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector(".navbar a[href*=" + id + "]").classList.add("active");
            });
        }
    });
};

// Scroll-to-Top Button
let scrollTopBtn = document.querySelector(".footer-icon a");

scrollTopBtn.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Contact Form Validation
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.querySelector("input[placeholder='Full Name']").value;
    let email = document.querySelector("input[placeholder='Email Address']").value;
    let mobile = document.querySelector("input[placeholder='Mobile Number']").value;
    let description = document.querySelector("input[placeholder='Description']").value;

    if (name === "" || email === "" || mobile === "" || description === "") {
        alert("Please fill in all the fields!");
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address!");
    } else if (!validateMobile(mobile)) {
        alert("Please enter a valid 10-digit mobile number!");
    } else {
        alert("Form Submitted Successfully!");
        this.reset(); // Reset form after submission
    }
});

// Email Validation Function
function validateEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Mobile Number Validation Function
function validateMobile(mobile) {
    let mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(mobile);
}
