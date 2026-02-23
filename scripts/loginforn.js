
        var log = document.getElementById("login");
        var reg = document.getElementById("register");
        var button = document.getElementById("btn");
        var swirlContainer = document.getElementById("swirl-container");
        var swirls = [];
        var isLoginActive = true;
        
        function createSwirls() {
            swirlContainer.innerHTML = '';
            swirls = [];
            for (let i = 0; i < 10; i++) {
                createSwirl();
            }
        }

        function createSwirl() {
            const swirl = document.createElement('div');
            swirl.className = 'swirl';
            const size = Math.random() * 50 + 30; 
            const posX = Math.random() * 400; 
            const posY = Math.random() * 750; 
            const delay = Math.random() * 5; 
            const duration = Math.random() * 5 + 10; 
            const opacity = Math.random() * 0.5 + 0.1; 
            swirl.style.width = `${size}px`;
            swirl.style.height = `${size}px`;
            swirl.style.left = `${posX}px`;
            swirl.style.top = `${posY}px`;
            swirl.style.animationDuration = `${duration}s`;
            swirl.style.animationDelay = `${delay}s`;
            swirl.style.opacity = opacity;
            swirl.style.borderWidth = `${Math.random() * 2 + 1}px`; 
            swirl.style.borderColor = `rgba(255, 255, 255, ${opacity})`;
            const borderRadius = `${Math.random() * 60 + 20}% ${Math.random() * 60 + 20}% ${Math.random() * 60 + 20}% ${Math.random() * 60 + 20}%`;
            swirl.style.borderRadius = borderRadius;
            
            swirlContainer.appendChild(swirl);
            swirls.push(swirl);
            setTimeout(() => {
                if ((isLoginActive || !isLoginActive) && swirlContainer.contains(swirl)) {
                    swirlContainer.removeChild(swirl);
                    createSwirl(); 
                }
            }, (delay + duration) * 1000);
        }
        
        function toggleSwirls(showSwirls) {
            swirlContainer.style.display = showSwirls ? 'block' : 'none';
            
            if (showSwirls && swirls.length === 0) {
                createSwirls();
            }
        }

        window.onload = function() {
            login(); 
            createSwirls(); 
        }

        function register() {
            log.style.left = "-400px";
            reg.style.left = "50px";
            button.style.left = "110px";
            toggleSwirls(true); 
        }

        function login() {
            log.style.left = "50px";
            reg.style.left = "450px";
            button.style.left = "0";
            toggleSwirls(true); 
        }

        const newPassword = document.getElementById("new-password");
        const confirmPassword = document.getElementById("confirm-password");
        const passwordError = document.getElementById("password-error");
        const confirmError = document.getElementById("confirm-error");

        newPassword.addEventListener("input", () => {
            const password = newPassword.value;
            if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
                passwordError.style.display = "block";
            } else {
                passwordError.style.display = "none";
            }
        });

        confirmPassword.addEventListener("input", () => {
            if (confirmPassword.value !== newPassword.value) {
                confirmError.style.display = "block";
            } else {
                confirmError.style.display = "none";
            }
        });
        
        window.addEventListener('resize', () => {
            createSwirls();
        });
        
        function goToHomePage() {
            window.location.href = "index.html"; 
        }
   