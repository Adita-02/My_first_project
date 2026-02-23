 
        document.getElementById('donationForm').addEventListener('submit', function(event) {
            event.preventDefault();

            // Get form values
            const fullName = document.getElementById('fullName').value;
            const age = parseInt(document.getElementById('age').value);
            const gender = document.getElementById('gender').value;
            const bloodType = document.getElementById('bloodType').value;
            const weight = parseInt(document.getElementById('weight').value);
            const donatedBefore = document.querySelector('input[name="donatedBefore"]:checked').value;
            const travelHistory = document.querySelector('input[name="travelHistory"]:checked').value;
            const medications = document.querySelector('input[name="medications"]:checked').value;
            const chronicConditions = document.querySelector('input[name="chronicConditions"]:checked').value;
            const surgeries = document.querySelector('input[name="surgeries"]:checked').value;
            const infections = document.querySelector('input[name="infections"]:checked').value;
            const tattoos = document.querySelector('input[name="tattoos"]:checked').value;
            const alcohol = document.querySelector('input[name="alcohol"]:checked').value;
            const vaccinations = document.querySelector('input[name="vaccinations"]:checked').value;
            const exposure = document.querySelector('input[name="exposure"]:checked').value;

            // Display summary
            document.getElementById('summaryFullName').textContent = fullName;
            document.getElementById('summaryAge').textContent = age;
            document.getElementById('summaryGender').textContent = gender;
            document.getElementById('summaryBloodType').textContent = bloodType;
            document.getElementById('summaryWeight').textContent = weight;
            document.getElementById('summaryDonatedBefore').textContent = donatedBefore;
            document.getElementById('summaryTravelHistory').textContent = travelHistory;
            document.getElementById('summaryMedications').textContent = medications;
            document.getElementById('summaryChronicConditions').textContent = chronicConditions;
            document.getElementById('summarySurgeries').textContent = surgeries;
            document.getElementById('summaryInfections').textContent = infections;
            document.getElementById('summaryTattoos').textContent = tattoos;
            document.getElementById('summaryAlcohol').textContent = alcohol;
            document.getElementById('summaryVaccinations').textContent = vaccinations;
            document.getElementById('summaryExposure').textContent = exposure;

            // Check eligibility
            let isEligible = true;
            const eligibilityMessage = document.getElementById('eligibility');

            if (age < 18 || age > 65) {
                isEligible = false;
                eligibilityMessage.textContent = "You are not eligible to donate blood. Age must be between 18 and 65.";
                eligibilityMessage.className = "eligibility not-eligible";
            } else if (weight < 50) {
                isEligible = false;
                eligibilityMessage.textContent = "You are not eligible to donate blood. Weight must be at least 50 kg.";
                eligibilityMessage.className = "eligibility not-eligible";
            } else if (chronicConditions === "yes" || surgeries === "yes" || infections === "yes" || tattoos === "yes" || alcohol === "yes" || vaccinations === "yes" || exposure === "yes") {
                isEligible = false;
                eligibilityMessage.textContent = "You are not eligible to donate blood based on your responses.";
                eligibilityMessage.className = "eligibility not-eligible";
            } else {
                eligibilityMessage.textContent = "You are eligible to donate blood!";
                eligibilityMessage.className = "eligibility eligible";
            }

            // Show summary section
            document.getElementById('summary').style.display = 'block';
            document.getElementById('message').textContent = 'Form submitted successfully!';
        });
        
  