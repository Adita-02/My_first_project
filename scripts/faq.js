 
        document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const menuToggle = document.querySelector('.faq-menu-toggle');
            const nav = document.querySelector('.faq-nav');
            
            menuToggle.addEventListener('click', function() {
                nav.classList.toggle('active');
            });

            // FAQ accordion functionality
            const faqItems = document.querySelectorAll('.faq-item');
            
            // Open first item by default
            if (faqItems.length > 0) {
                faqItems[0].classList.add('active');
            }
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                
                question.addEventListener('click', function() {
                    // Close other open items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle current item
                    item.classList.toggle('active');
                });
            });

            // FAQ category filtering
            const categoryButtons = document.querySelectorAll('.faq-categories button');
            
            categoryButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Update active button
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    const category = this.getAttribute('data-category');
                    filterFAQs(category);
                });
            });

            function filterFAQs(category) {
                const allItems = document.querySelectorAll('.faq-item');
                
                if (category === 'all') {
                    allItems.forEach(item => {
                        item.style.display = 'block';
                    });
                } else {
                    allItems.forEach(item => {
                        const categories = item.getAttribute('data-categories');
                        if (categories.includes(category)) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                }
            }

            // FAQ search functionality
            const searchInput = document.getElementById('searchInput');
            const searchButton = document.getElementById('searchButton');
            
            searchButton.addEventListener('click', function() {
                performSearch();
            });
            
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });
            
            function performSearch() {
                const searchTerm = searchInput.value.trim();
                if (searchTerm) {
                    // Redirect to Google search with site-specific query
                    window.open(`https://www.google.com/search?q=site:awblood.org+${encodeURIComponent(searchTerm)}`, '_blank');
                }
            }

            // Nutrition section interaction
            const nutritionButton = document.querySelector('[data-category="nutrition"]');
            nutritionButton.addEventListener('click', function() {
                // Scroll to nutrition section when clicked
                document.querySelector('.nutrition-section').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
   