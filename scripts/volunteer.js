   
        // Scroll animation for cards
        const cards = document.querySelectorAll('.card');
        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        cards.forEach(card => observer.observe(card));

        // Parallax effect for hero image
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            document.querySelector('.hero-image').style.transform = 
                `translateY(${scrolled * 0.4}px)`;
        });

        const contentGrid = document.getElementById('content-grid');
        const heroDescription = document.querySelector('.hero-description');

        const gridObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    heroDescription.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });

        gridObserver.observe(contentGrid);

       // Back to Top Button
       // Back to Top Button Logic
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add("visible");
    } else {
        backToTopButton.classList.remove("visible");
    }
});

if (backToTopButton) {
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
  }
// Footer Animation
const footer = document.querySelector(".new-footer");
const footerObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.animation = "slideInFooter 1s ease-out forwards";
        }
    });
}, { threshold: 0.1 });

footerObserver.observe(footer);

     // Add this JavaScript to handle modal
     function showRequirements() {
            const modal = document.getElementById('requirementsModal');
            modal.style.display = 'flex';
        }

        function closeModal() {
            const modal = document.getElementById('requirementsModal');
            modal.style.display = 'none';
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('requirementsModal');
            if (event.target === modal) {
                closeModal();
            }
        }

        // Update the existing volunteer requirements link
        document.querySelector('a[href="events.html"]').addEventListener('click', function(e) {
            e.preventDefault();
            showRequirements();
        });

// Update the individual registration link handler
document.querySelector('a[href="individual_form.html"]').addEventListener('click', function(e) {
    e.preventDefault();
    showIndividualModal();
});

// Individual Registration Modal Functions
function showIndividualModal() {
    const modal = document.getElementById('individualModal');
    modal.style.display = 'flex';
}

function closeIndividualModal() {
    const modal = document.getElementById('individualModal');
    modal.style.display = 'none';
}

// Handle form submission
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form handling logic here
    alert('Thank you for your registration! We will contact you soon.');
    closeIndividualModal();
});

// Update window click handler to close both modals
window.onclick = function(event) {
    const reqModal = document.getElementById('requirementsModal');
    const indModal = document.getElementById('individualModal');
    
    if (event.target === reqModal) closeModal();
    if (event.target === indModal) closeIndividualModal();
}



// Update the group registration link handler
document.querySelector('a[href="group_form.html"]').addEventListener('click', function(e) {
        e.preventDefault();
        showGroupModal();
    });

    // Group Modal Functions
    function showGroupModal() {
        const modal = document.getElementById('groupModal');
        modal.style.display = 'flex';
    }

    function closeGroupModal() {
        const modal = document.getElementById('groupModal');
        modal.style.display = 'none';
    }

    // Update window click handler
    window.onclick = function(event) {
        const reqModal = document.getElementById('requirementsModal');
        const indModal = document.getElementById('individualModal');
        const grpModal = document.getElementById('groupModal');
        
        if (event.target === reqModal) closeModal();
        if (event.target === indModal) closeIndividualModal();
        if (event.target === grpModal) closeGroupModal();
    }

    // Handle group form submission
    document.getElementById('groupRegistrationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your group form handling logic here
        alert('Thank you for your group application! We will contact you shortly.');
        closeGroupModal();
    });

   
