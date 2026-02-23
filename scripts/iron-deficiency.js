 
        const symptomCheckboxes = document.querySelectorAll('input[name="symptoms"]');
        const noneCheckbox = document.querySelector('input[name="symptoms"][value="none"]');
    
        
        symptomCheckboxes.forEach(checkbox => {
            checkbox.addEventListener("change", function () {
                if (this.value === "none" && this.checked) {
                 
                    symptomCheckboxes.forEach(cb => {
                        if (cb.value !== "none") cb.checked = false;
                    });
                } else if (this.value !== "none" && this.checked) {
                   
                    noneCheckbox.checked = false;
                }
            });
        });
    
       
        document.getElementById("ironCheck").addEventListener("click", function () {
            const ironDeficiencyChart = document.getElementById("ironDeficiencyChart");
            const quizSection = document.querySelector(".quiz-section");
    
           
            ironDeficiencyChart.classList.remove("hidden");
    
           
            quizSection.classList.add("hidden");
        });
    
      
        document.getElementById("showQuizButton").addEventListener("click", function () {
            const ironDeficiencyChart = document.getElementById("ironDeficiencyChart");
            const quizSection = document.querySelector(".quiz-section");
    
          
            quizSection.classList.remove("hidden");
    
          
            ironDeficiencyChart.classList.add("hidden");
        });
    
      
        document.getElementById("ironQuiz").addEventListener("submit", function (e) {
            e.preventDefault();
            const quizResult = document.getElementById("quizResult");
    
           
            const ageGroup = document.querySelector('select[name="ageGroup"]').value;
            const gender = document.querySelector('input[name="gender"]:checked')?.value;
            const symptoms = document.querySelectorAll('input[name="symptoms"]:checked');
            const ironIntake = document.querySelector('input[name="ironIntake"]:checked')?.value;
            const bloodDonation = document.querySelector('input[name="bloodDonation"]:checked')?.value;
    
          
            let score = 0;
    
           
            if (ageGroup === "14-18" && gender === "female") score += 2; 
            if (ageGroup === "19-50" && (gender === "female" || gender === "pregnant")) score += 3; 
    
          
            if (noneCheckbox.checked) {
                score += 0; 
            } else if (symptoms.length >= 2) {
                score += 2; 
            }
    
            
            if (ironIntake === "no") score += 1; 
    
           
            if (bloodDonation === "yes") score += 1; 
    
         
            if (score >= 5) {
                quizResult.textContent = "You may be at high risk of iron deficiency. Please consult a doctor.";
                quizResult.classList.remove("success");
                quizResult.classList.add("error");
            } else if (score >= 3) {
                quizResult.textContent = "You may have a moderate risk of iron deficiency. Consider increasing your iron intake.";
                quizResult.classList.remove("success");
                quizResult.classList.add("error");
            } else {
                quizResult.textContent = "You do not appear to have significant symptoms of iron deficiency.";
                quizResult.classList.remove("error");
                quizResult.classList.add("success");
            }
            quizResult.classList.remove("hidden");
        });
   