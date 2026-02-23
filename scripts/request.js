 
        // Create floating hearts animation
        document.addEventListener('DOMContentLoaded', function() {
            const heartsContainer = document.getElementById('hearts-container');
            const colors = ['#f88787', '#ffbb55', '#be3c42', '#ffb5c5'];
            
            function createHeart() {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.innerHTML = '❤';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = Math.random() * 100 + 'vh';
                heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
                heart.style.color = colors[Math.floor(Math.random() * colors.length)];
                heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
                heartsContainer.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 5000);
            }
            
            // Create initial hearts
            for (let i = 0; i < 15; i++) {
                setTimeout(createHeart, i * 300);
            }
            
            // Keep creating hearts periodically
            setInterval(createHeart, 800);
            
            // Add hover effect to the title
            const title = document.querySelector('h1');
            title.addEventListener('mouseover', function() {
                this.style.transform = 'scale(1.05)';
                for (let i = 0; i < 5; i++) {
                    setTimeout(createHeart, i * 200);
                }
            });
            
            title.addEventListener('mouseout', function() {
                this.style.transform = 'scale(1)';
            });

            // NEW: Form submission handling
            const form = document.getElementById('bloodRequestForm');
            const successMessage = document.getElementById('successMessage');
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Here you would normally send the data to a server
                // For this example, we'll just show the success message
                
                // Scroll to show the message
                successMessage.style.display = 'block';
                successMessage.scrollIntoView({ behavior: 'smooth' });
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    form.reset();
                    successMessage.style.display = 'none';
                }, 5000);
            });

            // NEW: Set minimum date to today for the date input
            const dateInput = document.getElementById('required-date');
            const today = new Date().toISOString().split('T')[0];
            dateInput.min = today;
        });
  
