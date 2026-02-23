document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("backToTop");

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

function applyForJob(jobTitle) {
    alert(`Thank you for applying for the ${jobTitle} position! We will contact you shortly.`);
}

document.getElementById("eligibilityTool").addEventListener("click", function () {
    const result = document.getElementById("eligibilityResult");
    result.textContent = "You are eligible to donate blood!";
    result.classList.remove("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".content-section");
    sections.forEach((section, index) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        setTimeout(() => {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }, index * 300);
    });
});

document.getElementById("ironCheck").addEventListener("click", function () {
    const result = document.getElementById("ironResult");
    result.textContent = "Your iron levels are sufficient for donation!";
    result.classList.remove("hidden");
});

document.getElementById("downloadGuide").addEventListener("click", function () {
    alert("Downloading the aftercare guide...");
});

document.getElementById("scheduleAppointment").addEventListener("click", function () {
    alert("Redirecting to the appointment scheduling page...");
});

document.getElementById("subscribeForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const message = document.getElementById("subscriptionMessage");
    message.textContent = `Thank you, ${email}! You are now subscribed to blood supply updates.`;
    message.classList.remove("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search-open-button");
    const searchClose = document.getElementById("search-close");
    const searchContent = document.getElementById("search-content");
    const searchInput = document.querySelector(".search-input");
    
    if (searchButton && searchContent && searchInput) {
        searchButton.addEventListener("click", (e) => {
            e.preventDefault(); 
            searchContent.classList.add("show-search");
            searchInput.focus(); 
        });
    }
    
    if (searchClose && searchContent) {
        searchClose.addEventListener("click", () => {
            searchContent.style.opacity = "0";
            setTimeout(() => {
                searchContent.classList.remove("show-search");
                searchContent.style.opacity = "1";
            }, 200);
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && searchContent && searchContent.classList.contains("show-search")) {
            searchContent.style.opacity = "0";
            setTimeout(() => {
                searchContent.classList.remove("show-search");
                searchContent.style.opacity = "1";
            }, 200);
        }
    });
});