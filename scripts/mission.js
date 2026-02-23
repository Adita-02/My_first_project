

let camps = [
    {
        lat: 22.3569,
        lng: 91.7832,
        name: "CDA Avenue Camp",
        status: "ongoing",
        address: "East Nasirabad, Chattogram",
        slots: "32/50",
        time: "Daily 09:00 - 18:00",
        donorsPresent: 28
    },
    {
        lat: 22.3635,
        lng: 91.8033,
        name: "Agrabad Blood Center",
        status: "upcoming",
        address: "Agrabad Commercial Area",
        slots: "0/40",
        time: "Tomorrow 10:00 - 16:00",
        donorsPresent: 0
    }
];

        // Scroll animation for cards
        const cards = document.querySelectorAll('.card');
        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        cards.forEach(card => observer.observe(card));

        // Parallax effect for hero image
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            document.querySelector('.hero-image').style.transform = 
                `translateY(${scrolled * 0.4}px)`;
        });

        const contentGrid = document.getElementById('content-grid');
        const heroDescription = document.querySelector('.hero-description');

        const gridObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    heroDescription.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });

        gridObserver.observe(contentGrid);

       // Back to Top Button
       // Back to Top Button Logic
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add("visible");
    } else {
        backToTopButton.classList.remove("visible");
    }
});

if (backToTopButton) {
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
  }
// Footer Animation
const footer = document.querySelector(".new-footer");
const footerObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.animation = "slideInFooter 1s ease-out forwards";
        }
    });
}, { threshold: 0.1 });

footerObserver.observe(footer);
    




// Then update initCampMap to use this global camps array
function initCampMap() {
    map = L.map('campMap').setView([22.3569, 91.7832], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    const ongoingIcon = L.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41]
    });


    
}

// Initialize only when tracker is visible
const trackerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !map) {
            initCampMap();
            generateCampCards();
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

// Replace the existing DOMContentLoaded listener with this
document.addEventListener('DOMContentLoaded', () => {
    // Add this event delegation for view-profile buttons
    document.body.addEventListener('click', (e) => {
        if (e.target.closest('.view-profile')) {
            const button = e.target.closest('.view-profile');
            const doctorId = button.dataset.doctorId;
            showDoctorProfile(doctorId);
        }
    });
    
    // Keep other initialization code...
    trackerObserver.observe(document.getElementById('campTracker'));
    initCampMap();
    generateCampCards();
    // ...rest of your initialization code
});
// Camp filtering functions
function filterCamps(e) {
    const status = e.target.value;
    document.querySelectorAll('.camp-card').forEach(card => {
        card.style.display = status === 'all' || card.classList.contains(status) 
            ? 'flex' : 'none';
    });
}

function searchCamps(e) {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll('.camp-card').forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(term)
            ? 'flex' : 'none';
    });
}

// Update the generateCampCards function
function generateCampCards() {
    const campList = document.querySelector('.camp-list');
    const camps = [
        {
            name: "CDA Avenue Camp",
            status: "ongoing",
            time: "Daily 09:00 - 18:00",
            location: "East Nasirabad, Chattogram",
            slots: "32/50",
            donorsPresent: 28
        },
        {
            name: "Agrabad Blood Center",
            status: "upcoming",
            time: "Tomorrow 10:00 - 16:00",
            location: "Agrabad Commercial Area",
            slots: "0/40",
            donorsPresent: 0
        }
    ];

    campList.innerHTML = ''; // Clear existing cards
    
    camps.forEach(camp => {
        const card = document.createElement('div');
        card.className = `camp-card ${camp.status}`;
        card.innerHTML = `
            <div class="camp-status"></div>
            <div class="camp-info">
                <h3>${camp.name}</h3>
                <div class="camp-meta">
                    <span class="camp-time"><i class="fas fa-clock"></i> ${camp.time}</span>
                    <span class="camp-location"><i class="fas fa-map-marker-alt"></i> ${camp.location}</span>
                </div>
                <div class="camp-stats">
                    <div class="stat">
                        <i class="fas fa-tint"></i>
                        <span>Slots: ${camp.slots}</span>
                    </div>
                    <div class="stat">
                        <i class="fas fa-users"></i>
                        <span>Donors Present: ${camp.donorsPresent}</span>
                    </div>
                </div>
                <button class="tracker-button register-btn">
                    <i class="fas fa-ambulance"></i> Join Now
                </button>
            </div>
        `;
        campList.appendChild(card);
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initCampMap();
    generateCampCards();

    document.getElementById('campFilter').addEventListener('change', (e) => {
        const status = e.target.value;
        document.querySelectorAll('.camp-card').forEach(card => {
            card.style.display = (status === 'all' || card.classList.contains(status)) 
                ? 'flex' : 'none';
        });
    });
    
    document.getElementById('campSearch').addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        document.querySelectorAll('.camp-card').forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(searchTerm) ? 'flex' : 'none';
        });
    });
});


document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        const modal = e.target;
        modal.style.display = 'none';
        
        // Check if any modals remain open
        const remainingModals = [...document.querySelectorAll('.modal')]
            .filter(m => m.style.display === 'block');
        
        if (remainingModals.length === 0) {
            document.body.style.overflow = 'auto';
        }
    }
});

let activeModal = null;


// Carousel functionality
let currentSlide = 0;
let autoSlideInterval;
const totalSlides = document.querySelectorAll('.carousel-item').length;



function generateCampCards() {
    const camps = [/*...*/];
function initCarousel() {
    // Create dots
    const dotsContainer = document.getElementById('carouselDots');
    dotsContainer.innerHTML = '';
    
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = `carousel-dot${i === 0 ? ' active' : ''}`;
        dot.addEventListener('click', () => moveToSlide(i));
        dotsContainer.appendChild(dot);
    }

    autoSlideInterval = setInterval(() => moveCarousel(1), 5000);
}
function moveToSlide(index) {
    currentSlide = (index + totalSlides) % totalSlides;
    updateCarousel();
}
}

function moveCarousel(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateCarousel();
}

function updateCarousel() {
    const track = document.getElementById('carouselTrack');
    const dots = document.querySelectorAll('.carousel-dot');
    
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Report Search
function filterReports(searchTerm) {
    const reports = document.querySelectorAll('.report-item');
    searchTerm = searchTerm.toLowerCase();
    
    reports.forEach(report => {
        const text = report.textContent.toLowerCase();
        report.style.display = text.includes(searchTerm) ? 'flex' : 'none';
    });
}

// Simulated Download Progress
function downloadAllReports() {
    let progress = 0;
    const progressBar = document.getElementById('downloadProgress');
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if(progress >= 100) {
            clearInterval(interval);
            progress = 100;
        }
        progressBar.style.width = `${progress}%`;
    }, 200);
}

// Dynamic Content Loading
function loadMorePhotos() {
    const photoGrid = document.querySelector('.photo-grid');
    // Add logic to load more photos when scrolling
}

function moveCarousel(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateCarousel();
}
// Touch support for carousel
let touchStartX = 0;
const carouselContainer = document.querySelector('.carousel-container');

carouselContainer.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    clearInterval(autoSlideInterval);
});

carouselContainer.addEventListener('touchend', e => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > 50) {
        moveCarousel(diff > 0 ? 1 : -1);
    }
    
    autoSlideInterval = setInterval(() => moveCarousel(1), 5000);
});

// Modal functionality

let previousModalId = null; // Track previous modal

// Modified openModal function
function openModal(modalId) {
    // Close any open modals first
    document.querySelectorAll('.modal').forEach(modal => {
        if (modal.style.display === 'block') {
            previousModalId = modal.id; // Store currently open modal
        }
        modal.style.display = 'none';
    });
    
    // Show requested modal
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Reopen previous modal if available
    if (previousModalId && previousModalId !== modalId) {
        document.getElementById(previousModalId).style.display = 'block';
    }
    previousModalId = null; // Reset previous modal
}


function downloadAllReports() {
    let progress = 0;
    const progressBar = document.getElementById('downloadProgress');
    progressBar.style.width = '0%';
    
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
            clearInterval(interval);
            progress = 100;
            setTimeout(() => progressBar.style.width = '0%', 1000);
        }
        progressBar.style.width = `${progress}%`;
    }, 200);
}


document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observers
    const trackerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (!map) initCampMap();
            }
        });
    }, { threshold: 0.1 });

    trackerObserver.observe(document.getElementById('campTracker'));

    // Event delegation for register buttons
    document.addEventListener('click', (e) => {
        if (e.target.closest('.register-btn')) {
            const card = e.target.closest('.camp-card');
            const isUpcoming = card.classList.contains('upcoming');
            showJoinModal(isUpcoming);
        }
    });

    // Rest of your initialization code...
    document.getElementById('campFilter').addEventListener('change', filterCamps);
    document.getElementById('campSearch').addEventListener('input', searchCamps);
    document.getElementById('backToTop').addEventListener('click', scrollToTop);
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) closeActiveModal();
    });

    // Initialize components
    initCarousel();
    generateCampCards();
});

// Helper functions
function filterCamps(e) {
    const status = e.target.value;
    document.querySelectorAll('.camp-card').forEach(card => {
        card.style.display = status === 'all' || card.classList.contains(status) 
            ? 'flex' : 'none';
    });
}

function searchCamps(e) {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll('.camp-card').forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(term)
            ? 'flex' : 'none';
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initCampMap() {
    map = L.map('campMap').setView([22.3569, 91.7832], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    const ongoingIcon = L.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41]
    });

    // Use the global camps array
    camps.forEach(camp => {
        L.marker([camp.lat, camp.lng], { icon: ongoingIcon })
            .addTo(map)
            .bindPopup(`
                <b>${camp.name}</b><br>
                Status: ${camp.status.toUpperCase()}<br>
                Slots: ${camp.slots}<br>
                ${camp.time}
            `);
    });

    window.addEventListener('resize', () => {
        map.invalidateSize();
        map.setView([22.3569, 91.7832], 13);
    });
}
// Preload images
// Add doctor images to preloading
window.onload = () => {
    ['camp1.jpg', 'camp2.jpg', 'camp3.jpg', 
     'dr-ayesha.jpg', 'dr-farhan.jpg', 'dr-nusrat.jpg'].forEach(src => {
        new Image().src = src;
    });
};


window.onload = preloadImages;

document.querySelectorAll('.modal').forEach(modal => {
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('role', 'dialog');
});

function showDoctorProfile(doctorId) {
  
    const profiles = {
        'dr-ayesha': {
            name: "Dr. Ayesha Rahman",
            specialization: "Cardiology",
            qualifications: "MBBS (DMC), FCPS (Cardiology)",
            contact: "+880-1756-728635",
            email: "dr.ayesha@54.bd",
            bio: "12+ years experience. Specializes in preventive cardiology and hypertension management.",
            awards: ["Best Cardiologist 2022 - CMA", "Gold Medalist in Internal Medicine"],
           
        },
        'dr-farhan': {
            name: "Dr. Farhan Ahmed",
            specialization: "General Physician",
            qualifications: "MBBS (CMC), MPH",
            contact: "+880-1719-932356",
            email: "dr.farhan@jh.bd",
            bio: "Community health specialist with 8 years experience in mobile medical services.",
            awards: ["Public Health Pioneer Award 2021"],
            // photo: "dr-farhan.jpg"
        },
        'dr-nusrat': {
            name: "Dr. Nusrat Jahan",
            specialization: "Pediatrician",
            qualifications: "MBBS (DMC)",
            contact: "+880-1721-933457",
            email: "dr.nusrat@ped.bd",
            bio: "Pediatric specialist focusing on child nutrition and vaccination programs.",
            awards: ["Child Health Advocate Award 2023"],
            // photo: "dr-nusrat.jpg"
        },

        'dr-shamim': {
            name: "Prof. Dr. Shamim Ahmed",
            specialization: "Cardiology",
            qualifications: "MBBS (DMC), FCPS (Medicine), MD (Cardiology)",
            contact: "+880-1711-234567",
            email: "dr.shamim@cardio-care.bd",
            bio: "Head of Cardiology at Chattogram Medical College Hospital. 15+ years experience in interventional cardiology.",
            awards: ["National Medical Award 2020", "Best Researcher in Cardiology 2022"],
            // photo: "dr-shamim.jpg"
        },
        'dr-tasnim': {
            name: "Dr. Tasnim Rahman",
            specialization: "Pediatrics",
            qualifications: "MBBS (DU), DCH (BSMMU), MRCP (UK)",
            contact: "+880-1812-345678",
            email: "dr.tasnim@dhakachildrens.org",
            bio: "Senior Consultant Pediatrician at Dhaka Children's Hospital. Specializes in neonatal care and childhood nutrition.",
            awards: ["Best Pediatrician Award 2021 (DMA)"],
            // photo: "dr-tasnim.jpg"
        },
        'dr-jamil': {
            name: "Dr. Jamil Hossain",
            specialization: "Orthopedic Surgery",
            qualifications: "MBBS (CMC), MS (Ortho), Fellowship in Joint Replacement (India)",
            contact: "+880-1913-456789",
            email: "jamil.ortho@orthocarebd.com",
            bio: "Lead orthopedic surgeon at Evercare Hospital Dhaka. Expertise in sports injuries and joint replacements.",
            awards: ["Young Surgeon Award 2023"],
            // photo: "dr-jamil.jpg"
        },
        'dr-nadia': {
            name: "Dr. Nadia Sultana",
            specialization: "Gynecology",
            qualifications: "MBBS (SSMC), FCPS (Obs & Gynae), Ultrasonography Training (BIRDEM)",
            contact: "+880-1614-567890",
            email: "nadia.gyno@womenshealthbd.org",
            bio: "Senior Consultant at Popular Diagnostic Center. Specializes in high-risk pregnancies and laparoscopic surgery.",
            awards: ["Best Women's Health Practitioner 2022"],
            // photo: "dr-nadia.jpg"
        }

    };

   const profile = profiles[doctorId];
    const modalContent = `
        <div class="doctor-profile-expanded">
            <h3>${profile.name}</h3>
            <div class="doctor-info-box">
                <p><strong>Specialization:</strong> ${profile.specialization}</p>
                <p><strong>Qualifications:</strong> ${profile.qualifications}</p>
                <p><i class="fas fa-phone"></i> ${profile.contact}</p>
                <p><i class="fas fa-envelope"></i> ${profile.email}</p>
            </div>
            <p class="doctor-bio">${profile.bio}</p>
            <div class="doctor-awards">
                <h4>Awards & Recognitions:</h4>
                <ul>
                    ${profile.awards.map(award => `<li>🏆 ${award}</li>`).join('')}
                </ul>
            </div>
            <button class="tracker-button" onclick="closeModal('doctorProfileModal')">
                Close Profile
            </button>
        </div>
    `;
    
    document.getElementById('doctorProfileContent').innerHTML = modalContent;
    previousModalId = 'healthCheckupModal';
    openModal('doctorProfileModal');
}


function closeActiveModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
    document.body.style.overflow = 'auto';
}

document.body.addEventListener('click', (e) => {
    if (e.target.closest('.view-profile')) {
        const button = e.target.closest('.view-profile');
        const doctorId = button.dataset.doctorId;
        showDoctorProfile(doctorId);
    }
});


function showJoinModal(isUpcoming) {
    const modal = document.getElementById('joinModal');
    const title = document.getElementById('joinModalTitle');
    const message = document.getElementById('joinModalMessage');
    const emailForm = document.getElementById('emailForm');
    
    if (isUpcoming) {
        title.textContent = "Thank You for Your Interest!";
        message.textContent = "This camp is upcoming. We'll notify you when it starts.";
        emailForm.style.display = 'block';
    } else {
        title.textContent = "Thank You for Joining!";
        message.textContent = "We appreciate your willingness to donate blood.";
        emailForm.style.display = 'none';
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeJoinModal() {
    document.getElementById('joinModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    document.getElementById('userEmail').value = '';
}

function submitEmail() {
    const email = document.getElementById('userEmail').value;
    if (email && email.includes('@')) {
        alert(`Thank you! We'll send updates to ${email}`);
        closeJoinModal();
    } else {
        alert('Please enter a valid email address');
    }
}

    
