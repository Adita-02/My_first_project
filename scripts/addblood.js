
      let menuToggle = document.querySelector('.toggle');
      let menu = document.querySelector('.menu');

      menuToggle.onclick = function () {
        menuToggle.classList.toggle('active');
        menu.classList.toggle('active');
      };
      const heartsContainer = document.getElementById('hearts-container');

      function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.animationDuration = `${Math.random() * 4 + 2}s`;
        heartsContainer.appendChild(heart);

        setTimeout(() => {
          heart.remove();
        }, 6000); 
      }
      setInterval(createHeart, 500); 
      const letters = document.querySelectorAll('header h1 span');
      letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.2}s`; 
      });
   