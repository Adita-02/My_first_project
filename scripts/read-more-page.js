
    // Add hover animation when the "Go Back" button is clicked
    document.getElementById('goBackButton').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Select all elements on the first page (home, login, etc.)
        const firstPageElements = document.querySelectorAll('.header_content, .header_content img, .header_text, .header_text h1, .header_text p');

        // Add the hover animation class to each element
        firstPageElements.forEach(element => {
            element.classList.add('hover-animation');
        });

        // Remove the animation class after the animation completes and redirect
        setTimeout(() => {
            firstPageElements.forEach(element => {
                element.classList.remove('hover-animation');
            });
            window.location.href = 'head.html'; // Redirect after animation
        }, 500); // Match the duration of the hoverEffect animation
    });
