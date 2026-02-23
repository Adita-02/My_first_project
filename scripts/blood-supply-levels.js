
        
        document.getElementById("subscribeForm").addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const message = document.getElementById("subscriptionMessage");

            if (email && email.includes("@")) {
                message.textContent = "Thank you for subscribing!";
                message.classList.remove("error");
                message.classList.add("success");
            } else {
                message.textContent = "Please enter a valid email address.";
                message.classList.remove("success");
                message.classList.add("error");
            }
            message.classList.remove("hidden");
        });
  