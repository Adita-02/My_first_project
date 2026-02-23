
        // Update the current time
        function updateTime() {
            const now = new Date();
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            };
            document.getElementById('update-time').textContent = now.toLocaleDateString('en-US', options);
        }
        updateTime();
        setInterval(updateTime, 60000); // Update every minute

        // Toggle dropdown function
        function toggleDropdown(dropdownId) {
            const dropdown = document.getElementById(dropdownId);
            const header = dropdown.previousElementSibling;
            
            dropdown.classList.toggle('active');
            header.classList.toggle('active');
            
            if (dropdown.classList.contains('active')) {
                dropdown.style.display = 'block';
                setTimeout(() => {
                    dropdown.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            } else {
                dropdown.style.display = 'none';
            }
        }

        // Form submission handling for receiver form
        document.getElementById('bloodRequestForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const urgency = document.getElementById('urgencyLevel').value;
            const message = urgency === 'critical' 
                ? "Emergency blood request received! Our team is contacting you immediately to coordinate."
                : "Thank you for your blood request. Our team will contact you shortly to arrange delivery.";
                
            alert(message);
            this.reset();
            
            // Close the dropdown after submission
            const dropdown = document.getElementById('receiver-dropdown');
            const header = dropdown.previousElementSibling;
            dropdown.classList.remove('active');
            header.classList.remove('active');
            dropdown.style.display = 'none';
        });

        // Simulate network status check
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(() => {
                const statusIndicator = document.querySelector('.status-indicator');
                statusIndicator.classList.add('pulse');
                
                setTimeout(() => {
                    statusIndicator.classList.remove('pulse');
                }, 1500);
            }, 2000);
        });
 