

        
document.getElementById("playVideoButton").addEventListener("click", function () {
            const videoContainer = document.getElementById("videoContainer");
            videoContainer.innerHTML = `
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/jmhiHKsEUXU?si=HqvebpBC0AGR10k7&autoplay=1"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            `;
        });
    
