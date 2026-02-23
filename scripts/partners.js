
        document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const menuToggle = document.querySelector('.partners-menu-toggle');
            const nav = document.querySelector('.partners-nav');
            const header = document.querySelector('.partners-header');
            
            menuToggle.addEventListener('click', function() {
                nav.classList.toggle('active');
                this.innerHTML = nav.classList.contains('active') ? 
                    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });

            // Header scroll effect
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    header.classList.add('header-scrolled');
                } else {
                    header.classList.remove('header-scrolled');
                }
            });

            // Partner category filtering
            const categoryBtns = document.querySelectorAll('.category-btn');
            const partnerCards = document.querySelectorAll('.partner-card');
            
            categoryBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    // Remove active class from all buttons
                    categoryBtns.forEach(b => b.classList.remove('active'));
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    const category = this.dataset.category;
                    
                    // Filter partner cards
                    partnerCards.forEach(card => {
                        if (category === 'all' || card.dataset.category === category) {
                            card.style.display = 'flex';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });

            // Improved animated counter for stats
            function animateCounter(element, target, duration = 2000) {
                const start = 0;
                const increment = target / (duration / 16); // 60fps
                let current = start;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        element.textContent = Math.floor(current).toLocaleString();
                        requestAnimationFrame(updateCounter);
                    } else {
                        element.textContent = target.toLocaleString();
                    }
                };
                
                // Initial animation
                element.style.animation = 'countUp 0.5s ease-out forwards';
                updateCounter();
            }
            
            // Start counter animation when stats section is in view
            const statsSection = document.querySelector('.partners-stats');
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    const counters = document.querySelectorAll('.stat-number');
                    counters.forEach(counter => {
                        const target = parseInt(counter.getAttribute('data-target'));
                        animateCounter(counter, target);
                    });
                    observer.unobserve(statsSection);
                }
            }, { threshold: 0.5 });
            
            observer.observe(statsSection);

            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Partner card hover effect enhancement
            partnerCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.boxShadow = '0 15px 40px rgba(122, 58, 78, 0.2)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.boxShadow = '0 10px 30px rgba(122, 58, 78, 0.1)';
                });
            });
        });
  