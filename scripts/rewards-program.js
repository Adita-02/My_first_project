
        
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

