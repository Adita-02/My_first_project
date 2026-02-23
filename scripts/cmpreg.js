
        
document.addEventListener('DOMContentLoaded', function() {
            const container = document.querySelector('.form-container');
            const colors = ['#ff6b9d', '#ff8fab', '#ffc2d1', '#fb6f92'];
            
            for (let i = 0; i < 10; i++) {
                const heart = document.createElement('div');
                heart.className = 'floating-heart';
                heart.innerHTML = '❤';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = Math.random() * 100 + '%';
                heart.style.animationDuration = (Math.random() * 5 + 3) + 's';
                heart.style.animationDelay = (Math.random() * 3) + 's';
                heart.style.color = colors[Math.floor(Math.random() * colors.length)];
                container.appendChild(heart);
            }
            
            const inputs = document.querySelectorAll('input, select, textarea');
            inputs.forEach(input => {
                input.addEventListener('focus', function() {
                    this.parentElement.querySelector('label').style.color = 'var(--primary-color)';
                });
                
                input.addEventListener('blur', function() {
                    this.parentElement.querySelector('label').style.color = 'var(--text-color)';
                });
            });
            
            document.getElementById('go-home').addEventListener('click', function() {
                window.location.href = 'v.html'; 
            });
            
            const weatherContent = document.getElementById('weather-content');
            const weatherLoading = document.getElementById('weather-loading');
            
            weatherContent.classList.add('hidden');
            weatherLoading.classList.add('hidden');
            
            document.getElementById('check-weather').addEventListener('click', function() {
                weatherContent.classList.add('hidden');
                weatherLoading.classList.remove('hidden');
                
                setTimeout(() => {
                    const weatherTypes = [
                        { icon: '🌧', desc: 'Rainy', temp: Math.floor(Math.random() * 10) + 15, suggestion: 'It\'s raining! Perfect time to enjoy some warm khichuri!' },
                        { icon: '☀', desc: 'Sunny', temp: Math.floor(Math.random() * 15) + 25, suggestion: 'Hot outside! Drink plenty of water and stay hydrated.' },
                        { icon: '⛅', desc: 'Partly Cloudy', temp: Math.floor(Math.random() * 10) + 20, suggestion: 'Nice weather for your camp activities!' },
                        { icon: '❄', desc: 'Cold', temp: Math.floor(Math.random() * 10) + 5, suggestion: 'It\'s chilly! Bring some warm clothes.' }
                    ];
                    
                    const currentWeather = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
                    
                    if (currentWeather.temp > 38) {
                        currentWeather.suggestion = 'Extreme heat warning! Stay in shade, drink lots of water, and avoid strenuous activities during peak hours.';
                    }
                    
                    document.getElementById('weather-icon').textContent = currentWeather.icon;
                    document.getElementById('temperature').textContent = currentWeather.temp + '°C';
                    document.getElementById('weather-description').textContent = currentWeather.desc;
                    document.getElementById('weather-location').textContent = 'Demo Weather Data';
                    document.getElementById('weather-suggestion').textContent = currentWeather.suggestion;
                    
                    weatherLoading.classList.add('hidden');
                    weatherContent.classList.remove('hidden');
                }, 1500);
            });
            
            document.getElementById('temperature').addEventListener('click', function() {
                weatherContent.classList.add('hidden');
            });
        });
    
