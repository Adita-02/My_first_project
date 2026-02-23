
   

    $(document).ready(function () {
    // Toggle mobile menu
    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Close mobile menu on scroll or load
    $(window).on('load scroll', function () {
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });

    // Add a "bounce" effect to the "Donate Now" button
    $('.home button').hover(
        function () {
            $(this).addClass('animated bounce');
        },
        function () {
            $(this).removeClass('animated bounce');
        }
    );

    // Add a "pulse" effect to the "Contact Us" button
    $('.service .btn').hover(
        function () {
            $(this).addClass('animated pulse');
        },
        function () {
            $(this).removeClass('animated pulse');
        }
    );

    // Add a "shake" effect to the "Get Involved" button
    $('.community-reachout .btn').hover(
        function () {
            $(this).addClass('animated shake');
        },
        function () {
            $(this).removeClass('animated shake');
        }
    );

    // Add a "tada" effect to the "Support Logistics" button
    $('.transport-logistics .btn').hover(
        function () {
            $(this).addClass('animated tada');
        },
        function () {
            $(this).removeClass('animated tada');
        }
    );

    // Add smooth scrolling for "Back to Top" button
    $('.btn-top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
    });

    // Add a "falling blood drops" animation
    function createBloodDrop() {
        const bloodDrop = $('<div class="blood-drop"></div>');
        const size = Math.random() * 30 + 10; // Random size between 10px and 40px
        const left = Math.random() * 100; // Random horizontal position
        const duration = Math.random() * 5 + 3; // Random animation duration

        bloodDrop.css({
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            animationDuration: `${duration}s`,
        });

        $('body').append(bloodDrop);

        // Remove the blood drop after animation ends
        setTimeout(() => {
            bloodDrop.remove();
        }, duration * 1000);
    }

    // Create blood drops every 500ms
    setInterval(createBloodDrop, 500);

    // Add a "confetti" effect on button clicks
    $('button').click(function () {
        const colors = ['#e75c73', '#5a4dbf', '#ffcc00', '#00ccff'];
        for (let i = 0; i < 50; i++) {
            const confetti = $('<div class="confetti"></div>');
            const color = colors[Math.floor(Math.random() * colors.length)];
            const left = Math.random() * 100;
            const rotation = Math.random() * 360;

            confetti.css({
                backgroundColor: color,
                left: `${left}%`,
                transform: `rotate(${rotation}deg)`,
                animationDuration: `${Math.random() * 2 + 1}s`,
            });

            $('body').append(confetti);

            // Remove confetti after animation ends
            setTimeout(() => {
                confetti.remove();
            }, 2000);
        }
    });
});

