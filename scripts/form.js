

document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const forgotPasswordLink = document.querySelector('.forgot-password');
    const forgotPasswordModal = document.getElementById('forgot-password-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const closeFormBtn = document.getElementById('close-form');
    
    // Form switching
    registerLink.addEventListener('click', function(e) {
        e.preventDefault();
        wrapper.classList.add('active');
    });
    
    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        wrapper.classList.remove('active');
    });
    
    // Forgot password modal
    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        forgotPasswordModal.style.display = 'flex';
    });
    
    closeModalBtn.addEventListener('click', function() {
        forgotPasswordModal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === forgotPasswordModal) {
            forgotPasswordModal.style.display = 'none';
        }
    });
    
    // Close form button - uses the Django URL from the template
    closeFormBtn.addEventListener('click', function() {
        window.location.href = window.MAIN_URL || '/';  // Fallback to root if MAIN_URL isn't set
    });
    
    // Form submissions
    const loginForm = document.querySelector('.formbox.login form');
    const registerForm = document.querySelector('.formbox.register form');
    const forgotPasswordForm = document.getElementById('forgot-password-form');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        const rememberMe = document.getElementById('remember-me').checked;
        
        console.log('Login attempt:', { username, password, rememberMe });
        alert('Login successful for: ' + username);
    });
    
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('register-username').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        
        console.log('Registration attempt:', { username, email, password });
        alert('Registration successful for: ' + username);
    });
    
    forgotPasswordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('forgot-email').value;
        
        console.log('Password reset requested for:', email);
        alert('If an account exists with that email, we will send password reset instructions.');
        forgotPasswordModal.style.display = 'none';
    });
});
