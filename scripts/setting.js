
        document.addEventListener('DOMContentLoaded', function() {
        
            const menuLinks = document.querySelectorAll('.settings-menu a');
            const sections = document.querySelectorAll('.setting-section');
            
            menuLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    menuLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                    
                    sections.forEach(section => {
                        section.style.display = 'none';
                    });
                    
                    const sectionId = this.getAttribute('data-section') + '-section';
                    document.getElementById(sectionId).style.display = 'block';
                    document.getElementById(sectionId).style.animation = 'fadeInUp 0.6s ease-out';
                });
            });
            
       
            const saveButtons = document.querySelectorAll('.save-btn');
            saveButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                
                    const ripple = document.createElement('span');
                    ripple.classList.add('ripple');
                    this.appendChild(ripple);
                    const rect = this.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    ripple.style.left = `${x}px`;
                    ripple.style.top = `${y}px`;
    
                    setTimeout(() => {
                        ripple.remove();
                    }, 600);
   
                    const spinner = this.querySelector('.spinner');
                    if (spinner) {
                        spinner.style.display = 'block';
                    }
                    const successMessage = this.nextElementSibling;
                    if (successMessage && successMessage.classList.contains('success-message')) {
                        successMessage.style.display = 'none';
                    }
                
                    setTimeout(() => {
                        if (spinner) {
                            spinner.style.display = 'none';
                        }
                        if (successMessage && successMessage.classList.contains('success-message')) {
                            successMessage.style.display = 'block';
                        }
                        
                        setTimeout(() => {
                            if (successMessage && successMessage.classList.contains('success-message')) {
                                successMessage.style.display = 'none';
                            }
                        }, 3000);
                    }, 1500);
                });
            });
       
            const toggleSwitches = document.querySelectorAll('.toggle-switch input');
            toggleSwitches.forEach(switchEl => {
                switchEl.addEventListener('change', function() {
                    const slider = this.nextElementSibling;
                    if (this.checked) {
                        slider.style.background = 'linear-gradient(135deg, var(--primary), var(--pink-accent))';
                    } else {
                        slider.style.background = '#ccc';
                    }
                });
            });
            
            const passwordInput = document.getElementById('new-password');
            const passwordStrength = document.getElementById('passwordStrength');
            const passwordHint = document.getElementById('passwordHint');

            passwordInput.addEventListener('focus', function() {
                passwordHint.style.display = 'block';
            });

            passwordInput.addEventListener('blur', function() {
                if (this.value.length === 0) {
                    passwordHint.style.display = 'none';
                }
            });

            passwordInput.addEventListener('input', function() {
                const password = this.value;
                let strength = 0;
            
                if (password.length > 0) strength += 1;
                if (password.length >= 8) strength += 1;
                if (/[A-Z]/.test(password)) strength += 1;
                if (/[0-9]/.test(password)) strength += 1;
                if (/[^A-Za-z0-9]/.test(password)) strength += 1;
                
                passwordStrength.className = 'password-strength';
                if (password.length === 0) {
                    passwordStrength.className = 'password-strength';
                } else if (strength <= 2) {
                    passwordStrength.className = 'password-strength weak';
                } else if (strength <= 4) {
                    passwordStrength.className = 'password-strength medium';
                } else {
                    passwordStrength.className = 'password-strength strong';
                }
            });

            // Reset notifications button
            const resetNotificationsBtn = document.getElementById('reset-notifications');
            if (resetNotificationsBtn) {
                resetNotificationsBtn.addEventListener('click', function() {
                    const notificationToggles = document.querySelectorAll('#notifications-section .toggle-switch input');
                    notificationToggles.forEach(toggle => {
                        toggle.checked = true;
                        const slider = toggle.nextElementSibling;
                        slider.style.background = 'linear-gradient(135deg, var(--primary), var(--pink-accent))';
                    });
                    
                    const originalText = this.innerHTML;
                    this.innerHTML = '<i class="fas fa-check"></i> Reset Complete';
                    
                    setTimeout(() => {
                        this.innerHTML = originalText;
                    }, 2000);
                });
            }
            
            // Theme toggle
            const themeToggle = document.getElementById('themeToggle');
            themeToggle.addEventListener('click', function() {
                document.body.classList.toggle('dark-mode');
                
                const icon = this.querySelector('i');
                if (document.body.classList.contains('dark-mode')) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                } else {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                }
            });

            // Profile picture upload
            const profilePicContainer = document.getElementById('profilePicContainer');
            const fileUpload = document.getElementById('profile-upload');
            const fileName = document.getElementById('fileName');

            fileUpload.addEventListener('change', function(e) {
                if (e.target.files.length > 0) {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    
                    // Show file name
                    fileName.textContent = file.name;
                    fileName.style.display = 'inline';
                    
                    // Preview image
                    reader.onload = function(event) {
                        profilePicContainer.innerHTML = '';
                        profilePicContainer.style.backgroundImage = url(`${event.target.result}`);
                        profilePicContainer.style.backgroundSize = 'cover';
                        profilePicContainer.style.backgroundPosition = 'center';
                        
                        // Auto-save
                        document.getElementById('saveProfile').click();
                    };
                    
                    reader.readAsDataURL(file);
                }
            });
            
            // Click on profile picture container
            profilePicContainer.addEventListener('click', function() {
                fileUpload.click();
            });
            
            // Donation frequency selection
            const frequencyOptions = document.querySelectorAll('.frequency-option');
            frequencyOptions.forEach(option => {
                option.addEventListener('click', function() {
                    frequencyOptions.forEach(opt => opt.classList.remove('active'));
                    this.classList.add('active');
                });
            });
            
            // Location tags selection
            const locationTags = document.querySelectorAll('.location-tag');
            locationTags.forEach(tag => {
                tag.addEventListener('click', function() {
                    this.classList.toggle('active');
                });
            });
            
            // Availability toggle
            const availabilityToggle = document.getElementById('availabilityToggle');
            const availabilityBadge = document.querySelector('.availability-text .badge');
            
            availabilityToggle.addEventListener('change', function() {
                if (this.checked) {
                    availabilityBadge.textContent = 'Active';
                    availabilityBadge.className = 'badge badge-available';
                } else {
                    availabilityBadge.textContent = 'Inactive';
                    availabilityBadge.className = 'badge badge-unavailable';
                }
            });

            // Update blood type badge when select changes
            const bloodTypeSelect = document.getElementById('blood-type');
            const bloodTypeBadge = document.querySelector('.blood-type-badge span');
            
            bloodTypeSelect.addEventListener('change', function() {
                bloodTypeBadge.textContent = this.value;
            });
        });
   
