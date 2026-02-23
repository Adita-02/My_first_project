

document.addEventListener("DOMContentLoaded", function() {
  // ==================== Dropdown Functionality ====================
  const servicesToggle = document.querySelector('.services-toggle');
  const loginToggle = document.querySelector('.login-toggle');
  
 
  if (servicesToggle) {
    servicesToggle.addEventListener('click', function(e) {
      e.preventDefault();
      const dropdown = document.getElementById('servicesDropdown');
      
      
      document.querySelectorAll('.login-dropdown-menu, .services-dropdown-menu').forEach(d => {
        if (d !== dropdown) d.classList.remove('show');
      });
      
      
      dropdown.classList.toggle('show');
      this.classList.toggle('active');
    });
  }
  
  
  if (loginToggle) {
    loginToggle.addEventListener('click', function(e) {
      e.preventDefault();
      const dropdown = document.getElementById('loginDropdown');
      
   
      document.querySelectorAll('.login-dropdown-menu, .services-dropdown-menu').forEach(d => {
        if (d !== dropdown) d.classList.remove('show');
      });
      
      
      dropdown.classList.toggle('show');
      this.classList.toggle('active');
    });
  }

  
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.login-dropdown') && !e.target.closest('.services-dropdown')) {
      document.querySelectorAll('.login-dropdown-menu, .services-dropdown-menu').forEach(d => {
        d.classList.remove('show');
      });
      
      document.querySelectorAll('.login-toggle, .services-toggle').forEach(t => {
        t.classList.remove('active');
      });
    }
  });

  // ==================== Modern Search Functionality ====================
  const searchOpenButton = document.getElementById('search-open-button');
  const searchModal = document.getElementById('searchModal');
  const closeSearchModal = document.getElementById('closeSearchModal');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  const searchData = [
      
      {
          title: "O+ Blood Type",
          description: "O+ can donate to O+, A+, B+, AB+ and receive from O+, O-",
          link: "blood-group.html#O+"
      },
      {
          title: "A- Blood Type",
          description: "A- can donate to A+, A-, AB+, AB- and receive from A-, O-",
          link: "blood-group.html#A-"
      },
      {
          title: "Blood Type Compatibility Chart",
          description: "Complete guide to which blood types can donate to and receive from others",
          link: "blood-group.html#compatibility"
      },
      
      
      {
          title: "Iron-Rich Foods for Hemoglobin",
          description: "Top foods to increase hemoglobin levels: spinach, red meat, lentils, and more",
          link: "iron-deficiency.html#foods"
      },
      {
          title: "Vitamin C for Iron Absorption",
          description: "How citrus fruits and bell peppers help your body absorb iron better",
          link: "iron-deficiency.html#vitamin-c"
      },
      {
          title: "Foods to Avoid Before Donation",
          description: "Fatty foods, alcohol, and other items to avoid 24 hours before donating",
          link: "prepare-and-aftercare.html#foods-to-avoid"
      },
      {
          title: "Post-Donation Nutrition",
          description: "Best foods to eat after donating blood to recover quickly",
          link: "prepare-and-aftercare.html#recovery-foods"
      },
      
      
      {
          title: "Blood Pressure Requirements",
          description: "Ideal blood pressure range for donors (between 90/50 and 180/100)",
          link: "blood-pressure.html#requirements"
      },
      {
          title: "Foods to Lower Blood Pressure",
          description: "Bananas, leafy greens, and other foods that help maintain healthy BP",
          link: "blood-pressure.html#foods"
      },
      
      
      {
          title: "Hemoglobin Requirements",
          description: "Minimum levels needed to donate (12.5 g/dL for women, 13.0 g/dL for men)",
          link: "hemoglobin.html#requirements"
      },
      {
          title: "Natural Hemoglobin Boosters",
          description: "Beets, pomegranate, and other natural ways to increase hemoglobin",
          link: "hemoglobin.html#boosters"
      },
      
      
      {
          title: "Whole Blood Donation",
          description: "The standard donation process that takes about 10 minutes",
          link: "howtogiveblood.html#whole-blood"
      },
      {
          title: "Platelet Donation",
          description: "Special donation that takes 2 hours but helps cancer patients",
          link: "howtogiveblood.html#platelets"
      },
      {
          title: "Double Red Cell Donation",
          description: "Donate two units of red blood cells in one session",
          link: "howtogiveblood.html#double-red"
      },
      
      
      {
          title: "Find a Donation Center",
          description: "Locate the nearest blood donation facility with real-time availability",
          link: "where-to-give-blood.html"
      },
      {
          title: "Current Blood Supply Levels",
          description: "See which blood types are most needed right now",
          link: "blood-supply-levels.html"
      },
      
     
      {
          title: "Donating with Diabetes",
          description: "How diabetes affects your eligibility to donate blood",
          link: "can-i-give-blood.html#diabetes"
      },
      {
          title: "Donating After Travel",
          description: "Waiting periods required after visiting certain countries",
          link: "can-i-give-blood.html#travel"
      },
      {
          title: "Rare Blood Types",
          description: "Information for donors with rare blood types like Rh-null",
          link: "blood-group.html#rare-types"
      }
  ];

  
  if (searchOpenButton) {
      searchOpenButton.addEventListener('click', function(e) {
          e.preventDefault();
          searchModal.style.display = 'block';
          searchInput.focus();
          document.body.style.overflow = 'hidden';
      });
  }

  
  if (closeSearchModal) {
      closeSearchModal.addEventListener('click', function() {
          searchModal.style.display = 'none';
          document.body.style.overflow = '';
      });
  }

  
  window.addEventListener('click', function(e) {
      if (e.target === searchModal) {
          searchModal.style.display = 'none';
          document.body.style.overflow = '';
      }
  });

 
  if (searchInput) {
      searchInput.addEventListener('input', function() {
          const searchTerm = this.value.toLowerCase();
          
          if (searchTerm.length === 0) {
              showPlaceholder();
              return;
          }
          
          const results = searchData.filter(item => 
              item.title.toLowerCase().includes(searchTerm) || 
              item.description.toLowerCase().includes(searchTerm)
          );
          
          displayResults(results);
      });
  }

  function showPlaceholder() {
      searchResults.innerHTML = `
          <div class="search-placeholder">
              <p>Type to search for information</p>
          </div>
      `;
  }

  function displayResults(results) {
      if (results.length === 0) {
          searchResults.innerHTML = `
              <div class="search-no-results">
                  <h4>No results found</h4>
                  <p>Try searching for:</p>
                  <div class="search-suggestions">
                      <div class="suggestion-category">
                          <h5>Blood Types</h5>
                          <p>O+, A-, B+, AB-, etc.</p>
                      </div>
                      <div class="suggestion-category">
                          <h5>Health Topics</h5>
                          <p>hemoglobin, iron, blood pressure</p>
                      </div>
                      <div class="suggestion-category">
                          <h5>Donation Info</h5>
                          <p>eligibility, process, locations</p>
                      </div>
                  </div>
              </div>
          `;
          return;
      }

      let html = '';
      results.forEach(item => {
          
          let icon = 'fa-droplet';
          if (item.title.includes('Food') || item.description.includes('food')) {
              icon = 'fa-utensils';
          } else if (item.title.includes('Pressure') || item.description.includes('Pressure')) {
              icon = 'fa-heart-pulse';
          } else if (item.title.includes('Hemoglobin') || item.description.includes('Hemoglobin')) {
              icon = 'fa-vial';
          }
          
          html += `
              <a href="${item.link}" class="search-result-item">
                  <div class="result-icon">
                      <i class="fas ${icon}"></i>
                  </div>
                  <div class="result-content">
                      <h4>${item.title}</h4>
                      <p>${item.description}</p>
                      <span class="result-link">Learn more <i class="fas fa-arrow-right"></i></span>
                  </div>
              </a>
          `;
      });

      searchResults.innerHTML = html;
  }

  
  showPlaceholder();

  // ==================== Password Protected Dashboard ====================
  const correctPassword = "2AFW69";
  const dashboardLink = document.getElementById('dashboardLink');
  const passwordModal = document.getElementById('passwordModal');
  const adminPass = document.getElementById('adminPass');
  const submitPass = document.getElementById('submitPass');
  const passError = document.getElementById('passError');

  if (dashboardLink) {
    dashboardLink.addEventListener('click', function(e) {
      e.preventDefault();
      if (passwordModal) passwordModal.style.display = 'block';
      if (adminPass) adminPass.focus();
    });
  }

  function checkPassword() {
    if (adminPass && adminPass.value === correctPassword) {
      window.location.href = 'dashboard.html';
    } else {
      if (passError) passError.style.display = 'block';
      if (adminPass) adminPass.value = '';
    }
  }

  if (submitPass) {
    submitPass.addEventListener('click', checkPassword);
  }

  if (adminPass) {
    adminPass.addEventListener('keyup', function(e) {
      if (e.key === 'Enter') {
        checkPassword();
      }
    });
  }

  window.addEventListener('click', function(e) {
    if (passwordModal && e.target === passwordModal) {
      passwordModal.style.display = 'none';
      if (passError) passError.style.display = 'none';
      if (adminPass) adminPass.value = '';
    }
  });

  // ==================== Back to Top Button ====================
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ==================== Scroll Reveal Animations ====================
  if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal().reveal('.hero-content', {
      duration: 1000,
      distance: '50px',
      origin: 'left'
    });

    ScrollReveal().reveal('.card', {
      duration: 1000,
      distance: '50px',
      origin: 'bottom',
      interval: 200
    });
  }
});

const themeToggle = document.getElementById('themeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');


const currentTheme = localStorage.getItem('theme') || 
                    (prefersDarkScheme.matches ? 'dark' : 'light');

if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
  themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

themeToggle.addEventListener('click', function() {
  const isDark = document.body.classList.toggle('dark-mode');
  
  if (isDark) {
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem('theme', 'light');
  }
});
