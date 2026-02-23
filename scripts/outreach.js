 

      // Intersection Observers
      const initObservers = () => {
            const observerOptions = { threshold: 0.1 };
            
            // Hero Description
            const heroDescObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => entry.target.classList.toggle('visible', entry.isIntersecting));
            }, observerOptions);
            heroDescObserver.observe(document.querySelector('.hero-description'));

// Footer Observer
const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });
footerObserver.observe(document.querySelector('.new-footer'));


            // Cards
            const cardObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => entry.target.classList.toggle('visible', entry.isIntersecting));
            }, observerOptions);
            document.querySelectorAll('.card').forEach(card => cardObserver.observe(card));

            // Timeline Items
            const timelineObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if(entry.isIntersecting) {
                        setTimeout(() => entry.target.classList.add('visible'), index * 300);
                    }
                });
            }, observerOptions);
            document.querySelectorAll('.timeline-item').forEach(item => timelineObserver.observe(item));

            // Schedule Container
            const scheduleObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => entry.target.classList.toggle('visible', entry.isIntersecting));
            }, observerOptions);
            scheduleObserver.observe(document.querySelector('.schedule-container'));
        };

        // Schedule System
        const initSchedule = () => {
            let currentDate = new Date();
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const scheduleGrid = document.querySelector('.schedule-grid');
            const weekDisplay = document.querySelector('.current-week');

            const updateWeekDisplay = () => {
                const start = new Date(currentDate);
                start.setDate(start.getDate() - start.getDay());
                weekDisplay.textContent = `Week of ${start.toLocaleDateString()}`;
            };

            const generateSchedule = () => {
                scheduleGrid.innerHTML = '';
                const weekDates = Array.from({ length: 7 }, (_, i) => {
                    const date = new Date(currentDate);
                    date.setDate(date.getDate() - date.getDay() + i);
                    return date;
                });

                weekDates.forEach((date, i) => {
                    const dayElement = document.createElement('div');
                    dayElement.className = 'schedule-day';
                    dayElement.innerHTML = `
                        <div class="day-header">
                            <h3>${days[i]}</h3>
                            <div class="date">${date.toLocaleDateString()}</div>
                        </div>
                        <div class="events">${generateEvents()}</div>
                    `;
                    scheduleGrid.appendChild(dayElement);
                });
            };

            const generateEvents = () => {
                const eventCount = Math.floor(Math.random() * 2) + 1;
                return Array.from({ length: eventCount }, () => `
                    <div class="event">
                        <div class="event-time">${getRandomTime()}</div>
                        <div class="event-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${getRandomLocation()}
                        </div>
                        <div class="event-slots ${getSlotStatus(Math.random() * 100)}">
                            <div class="slot-progress" style="width: ${Math.random() * 100}%"></div>
                            <span>${Math.floor(Math.random() * 60)}/60 Slots</span>
                        </div>
                    </div>
                `).join('');
            };

            // Helper functions
            const getRandomTime = () => {
                const hour = Math.floor(Math.random() * 4) + 8;
                return `${hour}:00 AM - ${hour + 3}:00 PM`;
            };

            const getRandomLocation = () => [
                'CDA Avenue, East Nasirabad , Chattogram, Bangladesh.', 
                'Chittagong University Campus', 
                'Community Health Center'
            ][Math.floor(Math.random() * 3)];

            const getSlotStatus = (percentage) => 
                percentage >= 75 ? 'available' : percentage >= 25 ? 'limited' : 'full';

            // Event Listeners
            document.getElementById('prevWeek').addEventListener('click', () => {
                currentDate.setDate(currentDate.getDate() - 7);
                updateWeekDisplay();
                generateSchedule();
            });

            document.getElementById('nextWeek').addEventListener('click', () => {
                currentDate.setDate(currentDate.getDate() + 7);
                updateWeekDisplay();
                generateSchedule();
            });

            // Initial setup
            updateWeekDisplay();
            generateSchedule();
        };

        // Initialize all components
        document.addEventListener('DOMContentLoaded', () => {
            initObservers();
            initSchedule();
            
            // Back to Top
            const backToTop = document.getElementById('backToTop');
            window.addEventListener('scroll', () => {
                backToTop.classList.toggle('visible', window.scrollY > 300);
            });
            backToTop.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });


   