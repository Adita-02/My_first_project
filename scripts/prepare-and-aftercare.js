
   
      
        document.getElementById("downloadGuide").addEventListener("click", function () {
            const guidanceSection = document.getElementById("guidanceSection");
            if (guidanceSection.style.display === "none" || guidanceSection.style.display === "") {
                guidanceSection.style.display = "block"; 
                guidanceSection.style.opacity = "1";
                guidanceSection.style.transform = "translateY(0)";
            } else {
                guidanceSection.style.display = "none"; 
            }
        });
   
