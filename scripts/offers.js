
        
document.addEventListener('DOMContentLoaded', function() {
            // Predefined valid donor IDs
            const validDonorIDs = [
                "DONOR001",
                "DONOR007",
                "DONOR042",
                "DONOR123",
                "DONOR456",
                "DONOR789",
                "HERO2023",
                "LIFESAVER",
                "BLOODHERO",
                "SAVIOR2024"
            ];

            // Animation for cards
            const cards = document.querySelectorAll('.animate-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 200 * index);
            });
           
            // Create floating particles
            const particlesContainer = document.getElementById('particles');

            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
            
                const size = Math.random() * 5 + 2;
                const duration = Math.random() * 10 + 5;
                const delay = Math.random() * 5;
            
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;
                particle.style.animation = `floatUp ${duration}s infinite alternate ease-in-out`;
                particle.style.animationDelay = `${delay}s`;
            
                particlesContainer.appendChild(particle);
            }
            
            
            // Handle claim buttons
            const buttons = document.querySelectorAll('.claim-btn, #goBackBtn');
            buttons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    if (this.classList.contains('claim-btn')) {
                        // Special handling for the Loyal Donor card
                        if (this.closest('.old-donor')) {
                            handleLoyalDonorClaim(this);
                        } else {
                            // Regular claim button behavior
                            createConfetti(this);
                            this.textContent = 'Offer Claimed!';
                            this.style.backgroundColor = '#5cb85c';
                            setTimeout(() => {
                                this.innerHTML = '<i class="fas fa-check"></i> Thank You!';
                            }, 1000);
                        }
                    } else {
                        window.location.href = 'v.html';
                    }
                });
            });
            
            // Handle Loyal Donor claim specifically
            function handleLoyalDonorClaim(claimBtn) {
                const card = claimBtn.closest('.offer-card');
                const verificationDiv = card.querySelector('.id-verification');
                const errorMsg = card.querySelector('.error-msg');
                
                // Check if already verified
                if (localStorage.getItem('donorIdVerified')) {
                    const storedId = localStorage.getItem('donorIdVerified');
                    if (validDonorIDs.includes(storedId)) {
                        // If already verified, show claimed state
                        createConfetti(card);
                        claimBtn.textContent = 'Offer Claimed!';
                        claimBtn.style.backgroundColor = '#5cb85c';
                        setTimeout(() => {
                            claimBtn.innerHTML = '<i class="fas fa-check"></i> Thank You!';
                        }, 1000);
                        return;
                    }
                }
                
                // Show verification form
                verificationDiv.style.display = 'block';
                claimBtn.style.display = 'none';
                errorMsg.style.display = 'none';
                
                // Handle verification
                card.querySelector('.verify-btn').addEventListener('click', function() {
                    const donorId = card.querySelector('#donorIdInput').value.trim().toUpperCase();
                    
                    if (!donorId) {
                        errorMsg.textContent = 'Please enter your Donor ID';
                        errorMsg.style.display = 'block';
                        return;
                    }
                    
                    if (validDonorIDs.includes(donorId)) {
                        // Successful verification
                        createConfetti(card);
                        verificationDiv.style.display = 'none';
                        claimBtn.textContent = 'Offer Claimed!';
                        claimBtn.style.backgroundColor = '#5cb85c';
                        claimBtn.style.display = 'inline-block';
                        setTimeout(() => {
                            claimBtn.innerHTML = '<i class="fas fa-check"></i> Thank You!';
                        }, 1000);
                        
                        // Store verification in localStorage
                        localStorage.setItem('donorIdVerified', donorId);
                    } else {
                        errorMsg.textContent = 'Invalid Donor ID. Please check your ID or contact support.';
                        errorMsg.style.display = 'block';
                    }
                });
                
                // Handle cancel
                card.querySelector('.cancel-btn').addEventListener('click', function() {
                    verificationDiv.style.display = 'none';
                    claimBtn.style.display = 'inline-block';
                    card.querySelector('#donorIdInput').value = '';
                    errorMsg.style.display = 'none';
                });
            }
            
            // Reset button functionality
            document.getElementById('resetBtn').addEventListener('click', function() {
                localStorage.removeItem('donorIdVerified');
                location.reload();
            });
            
            // Confetti effect
            function createConfetti(element) {
                const rect = element.getBoundingClientRect();
                const x = rect.left + rect.width / 2;
                const y = rect.top;
            
                for (let i = 0; i < 30; i++) {
                    const confetti = document.createElement('div');
                    confetti.classList.add('confetti');
                    confetti.style.position = 'absolute';
                    confetti.style.left = `${x}px`;
                    confetti.style.top = `${y}px`;
                    confetti.style.backgroundColor = getRandomColor();
                    
                    const size = Math.random() * 8 + 4;
                    confetti.style.width = `${size}px`;
                    confetti.style.height = `${size}px`;
                    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
            
                    document.body.appendChild(confetti);
            
                    setTimeout(() => {
                        confetti.remove();
                    }, 5000);
                }
            }
            
            
            function getRandomColor() {
                const colors = ['#ff2e63', '#08d9d6', '#ff9a3c', '#9c4dff', '#5cb85c'];
                return colors[Math.floor(Math.random() * colors.length)];
            }
            
            // Card hover effects
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.zIndex = '10';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.zIndex = '1';
                });
            });
        });
    
