
document.addEventListener('DOMContentLoaded', function() {
  // Dashboard toggle functionality
  const dashboardToggle = document.getElementById('dashboard-toggle');
  const sidebarItems = document.querySelector('.sidebar-items');
  const toggleIcon = dashboardToggle.querySelector('.toggle-icon');
  
  // Initialize sidebar as collapsed
  sidebarItems.classList.add('collapsed');
  toggleIcon.classList.add('rotated');
  
  dashboardToggle.addEventListener('click', function(e) {
    e.preventDefault();
    sidebarItems.classList.toggle('collapsed');
    toggleIcon.classList.toggle('rotated');
  });
  
  // Theme toggler
  const themeToggler = document.querySelector('.theme-toggler');
  themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
  });
  
  // Menu button for mobile
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-btn');
  const sidebar = document.querySelector('aside');
  
  menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
  });
  
  closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
  });
  
  // Animated counters
  animateValue("total-donation", 0, 25024, 2000);
  animateValue("total-requests", 0, 14160, 2000);
  animateValue("total-benefactors", 0, 10864, 2000);
  
  // Show All functionality
  const showAllLink = document.querySelector('.show-all');
  const expandedData = document.querySelector('.expanded-data');
  
  showAllLink.addEventListener('click', function(e) {
    e.preventDefault();
    expandedData.style.display = expandedData.style.display === 'none' ? 'block' : 'none';
    
    // If showing, load the charts
    if (expandedData.style.display === 'block') {
      loadCharts();
    }
  });
  
  // Reports Popup functionality
  const reportsLink = document.getElementById('reports-link');
  const reportsPopup = document.getElementById('reportsPopup');
  const closePopupBtn = document.querySelector('.close-popup');
  
  reportsLink.addEventListener('click', function(e) {
    e.preventDefault();
    reportsPopup.style.display = 'flex';
    setTimeout(() => {
      reportsPopup.classList.add('active');
    }, 10);
  });
  
  function closePopup() {
    reportsPopup.classList.remove('active');
    setTimeout(() => {
      reportsPopup.style.display = 'none';
    }, 300);
  }
  
  closePopupBtn.addEventListener('click', closePopup);
  
  // Close when clicking outside popup
  reportsPopup.addEventListener('click', function(e) {
    if (e.target === reportsPopup) {
      closePopup();
    }
  });
  
  // Close with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && reportsPopup.style.display === 'flex') {
      closePopup();
    }
  });
  
  // Make report options clickable
  document.querySelectorAll('.report-option').forEach(option => {
    option.addEventListener('click', function() {
      // Add your action here when a report option is clicked
      alert(`Opening: ${this.querySelector('h4').textContent}`);
      closePopup();
    });
  });
  
  // Print all reports button
  document.querySelector('.print-all').addEventListener('click', function() {
    alert('Printing all reports...');
    closePopup();
  });
  
  // Load charts with Orders data
  function loadCharts() {
    // Process Orders data to get analytics
    const bloodGroupCounts = {};
    const statusCounts = {
      Completed: 0,
      Pending: 0,
      Declined: 0
    };
    const monthlyData = {};
    
    // Process all orders
    Orders.forEach(order => {
      // Count by blood group
      bloodGroupCounts[order.BloodGroup] = (bloodGroupCounts[order.BloodGroup] || 0) + 1;
      
      // Count by status
      statusCounts[order.shipping]++;
      
      // Group by month
      const month = order.date.substring(0, 7); // YYYY-MM
      if (!monthlyData[month]) {
        monthlyData[month] = {
          requests: 0,
          completed: 0
        };
      }
      monthlyData[month].requests++;
      if (order.shipping === 'Completed') {
        monthlyData[month].completed++;
      }
    });
    
    // Prepare data for charts
    const months = Object.keys(monthlyData).sort();
    const requestsData = months.map(month => monthlyData[month].requests);
    const completedData = months.map(month => monthlyData[month].completed);
    const bloodGroups = Object.keys(bloodGroupCounts);
    const bloodGroupValues = bloodGroups.map(group => bloodGroupCounts[group]);
    
    // Blood Group Distribution Chart (Pie)
    new Chart(
      document.getElementById('requestsChart'),
      {
        type: 'pie',
        data: {
          labels: bloodGroups,
          datasets: [{
            label: 'Requests by Blood Group',
            data: bloodGroupValues,
            backgroundColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)',
              'rgba(255, 159, 64, 0.7)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'right',
            },
            title: {
              display: true,
              text: 'Requests by Blood Group'
            }
          }
        }
      }
    );
    
    // Monthly Trends Chart (Line)
    new Chart(
      document.getElementById('donationsChart'),
      {
        type: 'line',
        data: {
          labels: months,
          datasets: [
            {
              label: 'Total Requests',
              data: requestsData,
              borderColor: 'rgba(255, 99, 132, 1)',
              backgroundColor: 'rgba(255, 99, 132, 0.1)',
              borderWidth: 2,
              tension: 0.4
            },
            {
              label: 'Completed Requests',
              data: completedData,
              borderColor: 'rgba(54, 162, 235, 1)',
              backgroundColor: 'rgba(54, 162, 235, 0.1)',
              borderWidth: 2,
              tension: 0.4
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Monthly Request Trends'
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      }
    );
    
    // Status Distribution Chart (Doughnut)
    const statusCtx = document.createElement('canvas');
    statusCtx.id = 'statusChart';
    document.querySelector('.chart-container').appendChild(statusCtx);
    
    new Chart(
      statusCtx,
      {
        type: 'doughnut',
        data: {
          labels: Object.keys(statusCounts),
          datasets: [{
            label: 'Request Status',
            data: Object.values(statusCounts),
            backgroundColor: [
              'rgba(75, 192, 192, 0.7)',  // Completed - green
              'rgba(255, 206, 86, 0.7)',   // Pending - yellow
              'rgba(255, 99, 132, 0.7)'    // Declined - red
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'right',
            },
            title: {
              display: true,
              text: 'Request Status Distribution'
            }
          }
        }
      }
    );
  }
});

// Counter animation function
function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    obj.innerHTML = value.toLocaleString();
    obj.classList.add('count-animate');
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      setTimeout(() => {
        obj.classList.remove('count-animate');
      }, 300);
    }
  };
  window.requestAnimationFrame(step);
}
// Print all reports button
document.querySelector('.print-all').addEventListener('click', function() {
  // Simulate printing process with random success/failure
  const isSuccess = Math.random() > 0.2; // 80% success rate
  
  // Show status notification
  showPrintStatus(isSuccess);
  
  // Close popup after delay if successful
  if (isSuccess) {
    setTimeout(closePopup, 1500);
  }
});

function showPrintStatus(isSuccess) {
  const status = document.createElement('div');
  status.className = `print-status ${isSuccess ? 'success' : 'error'}`;
  
  if (isSuccess) {
    status.innerHTML = `
      <span class="material-symbols-sharp">check_circle</span>
      <span>Reports printed successfully!</span>
    `;
  } else {
    status.innerHTML = `
      <span class="material-symbols-sharp">error</span>
      <span>Printing failed! Please try again.</span>
    `;
  }
  
  document.body.appendChild(status);
  
  // Show status
  setTimeout(() => {
    status.classList.add('active');
    if (!isSuccess) {
      setTimeout(() => status.classList.add('shake'), 100);
    }
  }, 50);
  
  // Hide after delay
  setTimeout(() => {
    status.classList.remove('active');
    setTimeout(() => status.remove(), 500);
  }, 3000);
}
