 
         // Enhanced form validation and submission with show/hide functionality
         document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('corporateForm');
            const registerForm = document.getElementById('register-form');
            const showFormBtn = document.getElementById('showFormBtn');
            const closeFormBtn = document.querySelector('.close-form-btn');
            
            // Show form when Sign Up button is clicked
            showFormBtn.addEventListener('click', function() {
                registerForm.style.display = 'block';
                registerForm.scrollIntoView({ behavior: 'smooth' });
            });
            
            // Hide form when close button is clicked
            closeFormBtn.addEventListener('click', function() {
                registerForm.style.display = 'none';
            });
            
    
    // Add animation to leaderboard rows
    const leaderboardRows = document.querySelectorAll('.leaderboard tbody tr');
    leaderboardRows.forEach((row, index) => {
        row.style.animationDelay = `${index * 0.1}s`;
    });
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            const formData = {
                companyName: document.getElementById('companyName').value,
                employees: document.getElementById('employees').value,
                contactName: document.getElementById('contactName').value,
                email: document.getElementById('email').value
            };
            
            // Show success message
            showSuccessMessage(formData.companyName);
            
            // Reset form
            form.reset();
        }
    });
    
    function validateForm() {
        let isValid = true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Validate company name
        const companyName = document.getElementById('companyName');
        if (!companyName.value.trim()) {
            showError(companyName, 'Company name is required');
            isValid = false;
        } else {
            clearError(companyName);
        }
        
        // Validate employees
        const employees = document.getElementById('employees');
        if (!employees.value || parseInt(employees.value) < 1) {
            showError(employees, 'Please enter a valid number of employees');
            isValid = false;
        } else {
            clearError(employees);
        }
        
        // Validate contact name
        const contactName = document.getElementById('contactName');
        if (!contactName.value.trim()) {
            showError(contactName, 'Contact person is required');
            isValid = false;
        } else {
            clearError(contactName);
        }
        
        // Validate email
        const email = document.getElementById('email');
        if (!email.value.trim()) {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        } else {
            clearError(email);
        }
        
        // Validate terms checkbox
        const terms = document.getElementById('agreeTerms');
        if (!terms.checked) {
            showError(terms, 'You must agree to the terms and conditions');
            isValid = false;
        } else {
            clearError(terms);
        }
        
        return isValid;
    }
    
    function showError(input, message) {
        const errorId = input.id + '-error';
        const errorElement = document.getElementById(errorId);
        if (errorElement) {
            errorElement.textContent = message;
            input.setAttribute('aria-invalid', 'true');
            input.classList.add('error');
        }
    }
    
    function clearError(input) {
        const errorId = input.id + '-error';
        const errorElement = document.getElementById(errorId);
        if (errorElement) {
            errorElement.textContent = '';
            input.removeAttribute('aria-invalid');
            input.classList.remove('error');
        }
    }
    
    function showSuccessMessage(companyName) {
        // Create success message
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <div class="success-content">
                <button class="close-success" aria-label="Close success message">
                    <i class="fas fa-times"></i>
                </button>
                <i class="fas fa-check-circle" aria-hidden="true"></i>
                <h3>Thank you, ${companyName}!</h3>
                <p>Your application has been received. Our team will contact you within 2 business days.</p>
            </div>
        `;
        
        const formSection = document.getElementById('register-form');
        formSection.insertBefore(successDiv, formSection.firstChild);
        
        // Add click handler for close button
        const closeBtn = successDiv.querySelector('.close-success');
        closeBtn.addEventListener('click', function() {
            closeSuccessMessage(successDiv);
        });
        
        // Scroll to the success message
        successDiv.scrollIntoView({ behavior: 'smooth' });
        
        // Remove the message after 5 seconds
        const autoCloseTimer = setTimeout(() => {
            closeSuccessMessage(successDiv);
        }, 5000);
        
        // Clear timer if manually closed
        closeBtn.addEventListener('click', function() {
            clearTimeout(autoCloseTimer);
        });
    }
    
    function closeSuccessMessage(element) {
        element.style.opacity = '0';
        setTimeout(() => {
            element.remove();
        }, 500);
    }
});
