
        // Count Up Animation
        function animateValue(id, start, end, duration) {
            const obj = document.getElementById(id);
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        // Initialize values when page loads
        document.addEventListener('DOMContentLoaded', function() {
            // Animate the card values
            animateValue("totalBlood", 0, 1248, 1500);
            animateValue("activeDonors", 0, 428, 1500);
            animateValue("bloodRequests", 0, 87, 1500);
            animateValue("expiringSoon", 0, 24, 1500);
           
            // Initialize all charts and modals
            initCharts();
            initModernModalCharts();
            setupModernTabs();
            setupModernModal();
            setupHospitalsModal();
            setupViewAll();
        });

        // Initialize Charts
        function initCharts() {
            // Blood Collection Chart
            const collectionCtx = document.getElementById('collectionChart').getContext('2d');
            const collectionChart = new Chart(collectionCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    datasets: [
                        {
                            label: 'Blood Collected',
                            data: [120, 190, 170, 210, 230, 250, 280],
                            borderColor: '#e63946',
                            backgroundColor: 'rgba(230, 57, 70, 0.1)',
                            borderWidth: 2,
                            tension: 0.3,
                            fill: true
                        },
                        {
                            label: 'Blood Used',
                            data: [80, 120, 150, 180, 200, 210, 240],
                            borderColor: '#457b9d',
                            backgroundColor: 'rgba(69, 123, 157, 0.1)',
                            borderWidth: 2,
                            tension: 0.3,
                            fill: true
                        }
                    ]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false,
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            // Blood Demand Chart
            const demandCtx = document.getElementById('demandChart').getContext('2d');
            const demandChart = new Chart(demandCtx, {
                type: 'doughnut',
                data: {
                    labels: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
                    datasets: [{
                        data: [25, 10, 18, 8, 30, 12, 5, 2],
                        backgroundColor: [
                            '#e63946', '#ef476f', '#ffd166', '#06d6a0',
                            '#118ab2', '#073b4c', '#7209b7', '#f15bb5'
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'right',
                        }
                    }
                }
            });
        }

        // Modern Modal Charts
        function initModernModalCharts() {
            // Hb Trend Chart
            const hbTrendCtx = document.getElementById('hbTrendChart').getContext('2d');
            const hbTrendChart = new Chart(hbTrendCtx, {
                type: 'line',
                data: {
                    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
                    datasets: [{
                        label: 'Average Hb Level (g/dL)',
                        data: [12.5, 12.2, 11.9, 11.7, 11.4, 11.2],
                        borderColor: '#e63946',
                        backgroundColor: 'rgba(230, 57, 70, 0.1)',
                        borderWidth: 2,
                        tension: 0.3,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': ' + context.raw + ' g/dL';
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: false,
                            min: 10,
                            max: 13,
                            ticks: {
                                callback: function(value) {
                                    return value + ' g/dL';
                                }
                            }
                        }
                    }
                }
            });

            // Daily Intake Chart
            const intakeCtx = document.getElementById('intakeChart').getContext('2d');
            const intakeChart = new Chart(intakeCtx, {
                type: 'bar',
                data: {
                    labels: ['Iron', 'Vitamin B12', 'Folate', 'Vitamin C'],
                    datasets: [{
                        label: 'Recommended Daily Intake',
                        data: [8, 1.2, 200, 45],
                        backgroundColor: [
                            'rgba(230, 57, 70, 0.7)',
                            'rgba(69, 123, 157, 0.7)',
                            'rgba(42, 157, 143, 0.7)',
                            'rgba(233, 196, 106, 0.7)'
                        ],
                        borderColor: [
                            'rgba(230, 57, 70, 1)',
                            'rgba(69, 123, 157, 1)',
                            'rgba(42, 157, 143, 1)',
                            'rgba(233, 196, 106, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    let unit = 'μg';
                                    if (context.label === 'Iron') unit = 'mg';
                                    if (context.label === 'Vitamin C') unit = 'mg';
                                    return context.raw + ' ' + unit;
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Amount (mg/μg)'
                            }
                        }
                    }
                }
            });
        }

        // Modern Tab Functionality
        function setupModernTabs() {
            const tabs = document.querySelectorAll('.modern-tab');
           
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    // Get the parent modal section
                    const modalSection = this.closest('.modern-modal-section');
                   
                    // Remove active class from all tabs and contents in this section
                    modalSection.querySelectorAll('.modern-tab').forEach(t => t.classList.remove('active'));
                    modalSection.querySelectorAll('.modern-tab-content').forEach(c => c.classList.remove('active'));
                   
                    // Add active class to clicked tab
                    this.classList.add('active');
                   
                    // Show corresponding content
                    const tabId = this.getAttribute('data-tab');
                    modalSection.querySelector('#' + tabId + '-tab').classList.add('active');
                });
            });
        }

        // Modern Modal Toggle
        function setupModernModal() {
            const modal = document.getElementById("analyticsModal");
            const btn = document.getElementById("insightBtn");
            const span = document.querySelector("#analyticsModal .modern-close");

            btn.onclick = function() {
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            }

            span.onclick = function() {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }

            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                    document.body.style.overflow = "auto";
                }
            }
        }

        // Hospitals Modal Toggle
        function setupHospitalsModal() {
            const modal = document.getElementById("hospitalsModal");
            const btn = document.getElementById("hospitalsLink");
            const span = document.querySelector("#hospitalsModal .modern-close");

            btn.onclick = function(e) {
                e.preventDefault();
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            }

            span.onclick = function() {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }

            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                    document.body.style.overflow = "auto";
                }
            }
        }

        // View All Activity functionality
        function setupViewAll() {
            const viewAllLink = document.querySelector('.chart-header a[href="#"]');
            if (viewAllLink) {
                viewAllLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    const activityList = document.querySelector('.activity-list');
                    activityList.classList.toggle('expanded');
                   
                    if (activityList.classList.contains('expanded')) {
                        // Add more activity items
                        const additionalActivities = [
                            {
                                type: 'donation',
                                title: 'New blood donation from John Smith',
                                details: '2 units of AB+ • 5 hours ago'
                            },
                            {
                                type: 'request',
                                title: 'Blood request from City Medical',
                                details: '3 units of B- • 6 hours ago'
                            },
                            {
                                type: 'donation',
                                title: 'New blood donation from Sarah Johnson',
                                details: '1 unit of O+ • 8 hours ago'
                            },
                            {
                                type: 'request',
                                title: 'Blood request from Regional Hospital',
                                details: '5 units of O- • 10 hours ago'
                            },
                            {
                                type: 'donation',
                                title: 'Self fresh blood donation from Red Crecent Hospital',
                                details: '5 units of O- • 2 hours ago'
                            }
                        ];
                       
                        additionalActivities.forEach(activity => {
                            const activityItem = document.createElement('div');
                            activityItem.className = 'activity-item';
                            activityItem.innerHTML = `
                                <div class="activity-icon ${activity.type}">
                                    <i class="ri-${activity.type === 'donation' ? 'drop-fill' : 'heart-pulse-fill'}"></i>
                                </div>
                                <div class="activity-details">
                                    <div class="activity-title">${activity.title}</div>
                                    <div class="activity-time">${activity.details}</div>
                                </div>
                            `;
                            activityList.appendChild(activityItem);
                        });
                       
                        this.textContent = 'Show Less';
                    } else {
                        // Remove the additional items (keep only the first 3)
                        const items = activityList.querySelectorAll('.activity-item');
                        for (let i = 3; i < items.length; i++) {
                            activityList.removeChild(items[i]);
                        }
                        this.textContent = 'View All';
                    }
                });
            }
        }
 