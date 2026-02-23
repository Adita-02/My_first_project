
        
let next = document.querySelector('.next');
        let prev = document.querySelector('.prev');
        let items = document.querySelectorAll('.item');
        let currentIndex = 0;

        function showSlide(index) {
            items.forEach((item, i) => {
                item.classList.toggle('active', i === index);
            });
        }

        next.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % items.length;
            showSlide(currentIndex);
        });

        prev.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            showSlide(currentIndex);
        });

        showSlide(currentIndex);

        // Generate floating blood groups
        const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
        for (let i = 0; i < 10; i++) {
            let bg = document.createElement('div');
            bg.classList.add('blood-group');
            bg.innerText = bloodGroups[Math.floor(Math.random() * bloodGroups.length)];
            bg.style.left = Math.random() * window.innerWidth + 'px';
            bg.style.animationDuration = (Math.random() * 5 + 5) + 's';
            document.body.appendChild(bg);
        }
    
