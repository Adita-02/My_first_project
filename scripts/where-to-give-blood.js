
       
        const scheduleButton = document.getElementById("scheduleAppointment");
        const modal = document.getElementById("scheduleModal");
        const closeModalButton = document.querySelector(".close-modal");

      
        scheduleButton.addEventListener("click", () => {
            modal.style.display = "flex";
        });

       
        closeModalButton.addEventListener("click", () => {
            modal.style.display = "none";
        });

       
        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });

       
        document.getElementById("appointmentForm").addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Appointment scheduled successfully!");
            modal.style.display = "none";
        });
  
