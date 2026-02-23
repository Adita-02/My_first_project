
       document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        const label = input.closest('.form-group').querySelector('label');
        const icon = input.closest('.input-wrapper').querySelector('.input-icon');
        
        input.addEventListener('focus', () => {
            label.style.transform = 'translateY(-25px)';
            label.style.fontSize = '12px';
            label.style.color = '#ff3e66';
            
            input.style.boxShadow = '0 0 0 3px rgba(255, 62, 102, 0.2)';
            input.style.borderColor = '#ff3e66';
            
            icon.style.color = '#ff3e66';
            icon.style.transform = 'translateY(-50%) scale(1.2)';
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                label.style.transform = 'translateY(0)';
                label.style.fontSize = '14px';
                label.style.color = '#2c3e50';
            }
            
            input.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
            input.style.borderColor = 'rgba(0, 0, 0, 0.1)';
            
            icon.style.color = '#ff3e66';
            icon.style.transform = 'translateY(-50%) scale(1)';
        });
    });

    // Initialize hearts animation
    createHearts();

    // Form submission handler
    document.getElementById("appointmentForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        document.getElementById('overlay').classList.add('show');
        document.getElementById('successMessage').classList.add('show');
        
        setTimeout(() => {
            this.reset();
    
            document.querySelectorAll('.form-group label').forEach(label => {
                label.style.transform = 'translateY(0)';
                label.style.fontSize = '14px';
                label.style.color = '#2c3e50';
            });
        }, 1000);
    });

    // Random field pulsing
    setInterval(() => {
        const importantFields = ['#name', '#bloodGroup', '#bloodComponent'];
        const randomField = importantFields[Math.floor(Math.random() * importantFields.length)];
        const field = document.querySelector(randomField);
        
        if (field) {
            field.classList.add('pulse');
            setTimeout(() => {
                field.classList.remove('pulse');
            }, 1500);
        }
    }, 5000);
});

function createHearts() {
    const container = document.getElementById('heartsContainer');
    const colors = ['#ff3e66', '#ff6b6b', '#ff9e7d', '#ffb88c'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.width = (10 + Math.random() * 20) + 'px';
        heart.style.height = heart.style.width;
        heart.style.background = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(heart);
        
        animateHeart(heart);
    }
}

function animateHeart(heart) {
    const duration = 10 + Math.random() * 20;
    const delay = Math.random() * 5;
    
    heart.style.opacity = '0';
    
    setTimeout(() => {
        heart.style.transition = `all ${duration}s linear ${delay}s`;
        heart.style.opacity = '0.6';
        heart.style.transform = `rotate(45deg) translate(${-50 + Math.random() * 100}px, -${100 + Math.random() * 300}px)`;
        
        setTimeout(() => {
            heart.style.top = Math.random() * 100 + '%';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.transition = 'none';
            heart.style.transform = 'rotate(45deg)';
            animateHeart(heart);
        }, (duration + delay) * 1000);
    }, 10);
}

function closeSuccess() {
    document.getElementById('overlay').classList.remove('show');
    document.getElementById('successMessage').classList.remove('show');
}
