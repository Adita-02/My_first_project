
   
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
       
const modalContent = {
        'kid-care-krew': `
            <h2> Kids Hero Program </h2>

            <div class="modal-scroll">
                <h4>Join our junior ambassador program for children aged 8-14:</h4>
           
                <h3>🖍️ Color Your Kindness</h3>
                <ul>
                    <h5>Join our Crayon Crusaders team! Download free activity sheets to:</h5>

                 <p>~ Color superhero plasma cells fighting germs</p>
                 <p> ~ Solve puzzles about blood type </p>
                 <p>~ Design "Thank You" cards for blood donors</p>
                    </li>
                <h3>🎁 Craft Care Packages</h3>
                <h5>Make hospital smile-boxes for blood recipients:</h5>

                 <p>~ Fold origami red blood cells</p>
                 <p> ~ Create "Get Well Soon" comic strips </p>
                 <p>~ String bead DNA bracelets.
                       We deliver them to children needing transfusions!</p>
                    </li>

                <h3>📸 Junior Ambassador Program</h3>
                <h5>Take our 3-step challenge:</h5>

                 <p>~ Learn: Complete our Blood Basics cartoon quiz</p>
                 <p> ~ Teach: Record a 60-second video explaining blood donation</p>
                 <p>~ Cheer: Organize a neighborhood chalk art celebration
                   Earn digital badges & a printable certificate!</p>
                    </li>

                      <h3>🎉 Community Projects</h3>
                <h5>Give proper attension to:</h5>

                 <p>~ Organize neighborhood chalk art events</p>
                 <p> ~ Start a "Buddy Blood Drive" with school friends</p>
                 <p>~ Host a virtual crafting party with friends</p>
                    </li>


            </ul>
        `,
        
    'success-stories': `
        <h2>Stories of Hope</h2>
        <div class="modal-scroll">
            <div class="story-card">
                <h3>🎀 The Ribbon Miracle</h3>
                <h5 class="quote">"Every ribbon reminds me how donors wrote my future"</h5>
                <p>5-year-old Ayesha needed 7 transfusions during leukemia treatment. She started tying ribbon bows on donor chairs - 
                    <span class="highlight">200+ ribbons</span> later, she's cancer-free and inspiring others through her #RibbonHope campaign.</p>
            </div>

               <div class="story-card">
                <h3>🫂 The Unseen Bond</h3>
                <h5 class="quote">"Although I had never met Mariam, the thought that our lives 
                    would become intertwined through the simple act of blood donation touched me deeply.I’ve come 
                    to understand that blood donation is a gift that not only saves lives but also brings comfort to families,
                     hope to patients and gratitude to those who witness its profound effects."</h5>
                <p>When I donated blood on a routine Tuesday not thinking much of it. Years later, 
                    I got a letter with a photo - a mother holding the medical bag that used my blood for her daughter Mariam’s
                     fight with blood cancer. Her shaky letter said:  
                    <span class="highlight"> "You gave us happy evenings with her laughter before she passed." </span>. 1Now, every time I donate, 
                        I feel like I’m connecting with strangers I’ll never meet,
                         Mariam’s story quietly part of every blood bag, linking lives in ways we can’t see but deeply matter.</p>
            </div>

            <div class="story-card">
                <h3>🚑 Highway Heroes</h3>
                <h5 class="quote">"Strangers gave me tomorrows with my babies"</h5>
                <p>After a devastating crash, mother-of-twins Sara required 
                    <span class="highlight">22 units of blood</span>. 19 anonymous donors answered the emergency call. 
                    Today her twins' drawings feature in donor thank-you kits nationwide.</p>
            </div>

            <div class="story-card">
                <h3>🌍 Nation Chain Reaction</h3>
                <h5 class="quote">"My rare blood type connected continents"</h5>
                <p>When Aditya needed rare AB- blood during a crutial road accident in Mirpur, a 
                    <span class="highlight">24-hour nation donor chain</span> delivered:
                    <ul>
                        <p>~ 1 donor in Comilla</p>
                        <p>~ 3 students in Gajipur</p>
                        <p>~ 2 nurses in Chittagong</p>
                    </ul>
                    Their united effort inspired the CrossBorderDonors network.</p>
            </div>

            <div class="story-card">
                <h3>🎂 Birthday Paradox</h3>
                <h5 class="quote">"I celebrate two birthdays now"</h5>
                <p>Thalassemia warrior Arjun received his 
                    <span class="highlight">100th transfusion</span> on his 10th birthday. 
                    The hospital surprised him with a "Blood Birthday Cake" made from donor thank-you notes - 
                    now an annual tradition in pediatric wards.</p>
            </div>

            <div class="story-card">
                <h3>🩸 The Circle of Hope</h3>
                <h5 class="quote">"My donors became my family"</h5>
                <p>Orphaned at 8, Anika received blood from 12 strangers during burns treatment. At 18, she tracked down 9 donors - 
                    together they've organized 
                    <span class="highlight">27 blood drives</span>, collecting 289 units to date.</p>
            </div>
        </div>
    `,
    'partnerships': `
        <h2>✊ Become a Lifesaving Partner </h2>
        <div class="modal-scroll">
            <div class="story-card">
                <h3>🌱 Growing Together</h3>
                <h4>As a new initiative born in Chittagong, we're building partnerships to:</h4><br>
                <ul>
                    <p>👉 Support 5+ hospitals in Dhaka , Chittagong  and main citys of other divisions</p><br>
                    <p> 👉 Mobilize 100+ units monthly through community networks</p><br>
                    <p>👉 Educate 500+ citizens(including children) about blood donation safety</p><br>
                </ul>
            </div>

            <div class="story-card">
                <h3>🤝 Why Collaborate With Us?</h3><br>
                <h4>Your partnership helps build Bangladesh's blood safety network:</h4><br>
                <ul>
                    <p>📈 <span class="highlight">Local Impact Tracking</span> - See exactly how your support helps your community</p><br>
                    <p>📢 Free workshop materials in Bangla & English</p><br>
                    <p>🏆 Featured in our "Stories of Hope" social media series</p><br>
                    <p>🎯 Volunteer opportunities for your team</p><br>
                </ul>
            </div>

            <div class="story-card">
                <h3>🤲 Simple Ways to Help</h3>
                <div class="quote">"Even small actions save lives - our first corporate partner collected 87 units in one day!"</div>
                
                <h4>For Businesses:</h4>
                <ul>
                    <p>🏢 Host a tea stall blood drive (we provide setup)</p><br>
                    <p>📅 Sponsor a rickshaw awareness campaign</p><br>
                    <p>📊 Match employee donations with corporate gifts</p><br>
                </ul>

                <h4>For Community Groups:</h4>
                <ul>
                    <p>🏫 School poster competitions (we provide templates)<p/li><br>
                    <p>🛍️ Mosque/Church/Temple announcement partnerships</p><br>
                    <p>🎪 Volunteer at our Khulshi donation center</p><br>
                </ul>
            </div>

            <div class="story-card">
                <h3>BD Our Local Progress</h3>
                <h4>Recent milestones:</h4>
                <ul>
                    <p>🚀 Trained 75+ university volunteers in 2025, January</p><br>
                    <p>🏫 Partnered with 10+ college blood clubs</p><br>
                    <p>🛍️ Supported flood relief efforts in Sunamganj</p><br>
                </ul>
            </div>

            <div class="story-card">
                <h3>📞 Start Blood, Be a Part of Bud</h3>
                <h4>We make partnership easy:</h4>
                <ol>
                    <p>📞 15-minute introductory call</p><br>
                    <p>🎯 Choose your activity scale (1 day - 1 month)</p><br>
                    <p>🙌 Our team handles implementation</p><br>
                </ol>
                <div class="highlight">বাংলা Support: ০১৩০৫-৯৯১৪১৮<br>
                Email: hello@awinnovation-bd.org</div>
                <p>Let's build Bangladesh's blood safety network - one partnership at a time!</p>
            </div>
        </div>
    `,
};



    document.querySelectorAll('.foot-panel2 a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Convert link text to lowercase with hyphens
        const modalType = link.textContent.toLowerCase().replace(/ /g, '-');
        showModal(modalType);
    });
});

    function showModal(type) {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                ${modalContent[type]}
            </div>
        `;

        overlay.querySelector('.close-modal').addEventListener('click', () => {
            document.body.removeChild(overlay);
        });

        overlay.addEventListener('click', (e) => {
            if(e.target === overlay) {
                document.body.removeChild(overlay);
            }
        });

        document.body.appendChild(overlay);
        overlay.style.display = 'flex';
    }
    
    
