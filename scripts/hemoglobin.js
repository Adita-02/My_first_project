
        function checkHemoglobin() {
            let hb = parseFloat(document.getElementById("hbLevel").value);
            let resultText = document.getElementById("result");

            if (isNaN(hb)) {
                resultText.style.color = "#d9534f";
                resultText.innerHTML = "Please enter a valid number.";
            } else if (hb < 12) {
                resultText.style.color = "#d9534f";
                resultText.innerHTML = "Your Hb level is LOW. Consult a doctor.";
            } else if (hb >= 12 && hb <= 16) {
                resultText.style.color = "#28a745";
                resultText.innerHTML = "Your Hb level is NORMAL. Keep maintaining your health!";
            } else {
                resultText.style.color = "#d9534f";
                resultText.innerHTML = "Your Hb level is HIGH. Check with a doctor.";
            }
        }

        function goToHome() {
            window.location.href = "head.html";
        }
  