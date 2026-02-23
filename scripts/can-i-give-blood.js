document.getElementById("showEligibilityForm").addEventListener("click", function () {
    const form = document.querySelector(".eligibility-form");
    form.style.display = "block"; 
    form.classList.add("show"); 
});

document.getElementById("checkEligibility").addEventListener("click", function () {
    const age = parseInt(document.getElementById("age").value);
    const weight = parseInt(document.getElementById("weight").value);
    const health = document.getElementById("health").value;
    const lastDonation = parseInt(document.getElementById("lastDonation").value);

    const result = document.getElementById("eligibilityResult");

    if (age >= 18 && weight >= 50 && health === "yes" && lastDonation >= 8) {
        result.innerHTML = `
            <p>🎉 You are eligible to donate blood!</p>
            <a href="/donoform/" class="register-button">Register as a Donor</a>
        `;
    } else {
        result.innerHTML = "<p>❌ Unfortunately, you are not eligible to donate blood at this time.</p>";
        if (age < 18) result.innerHTML += "<p>You must be at least 18 years old.</p>";
        if (weight < 50) result.innerHTML += "<p>You must weigh at least 50 kg.</p>";
        if (health !== "yes") result.innerHTML += "<p>You must be in good general health.</p>";
        if (lastDonation < 8) result.innerHTML += "<p>You must wait at least 8 weeks between donations.</p>";
    }

    result.classList.remove("hidden");
    result.classList.add("show"); 
});