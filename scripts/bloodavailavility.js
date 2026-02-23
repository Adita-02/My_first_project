
        function toggleStatus(element) {
            let status = element.querySelector(".availability");
            if (status.innerText === "Available") {
                status.innerText = "Low Stock";
                status.classList.add("low-stock");
            } else {
                status.innerText = "Available";
                status.classList.remove("low-stock");
            }
        }
        
        function openModal(modalId) {
            document.getElementById(modalId).classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal(modalId) {
            document.getElementById(modalId).classList.remove('active');
            document.body.style.overflow = 'auto';
        }

       
        document.querySelectorAll('.modal-overlay').forEach(modal => {
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    closeModal(this.id);
                }
            });
        });

      
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelector('a[href="#"]').addEventListener('click', function(e) {
                e.preventDefault();
                openModal('bloodTypeModal');
            });
            
            
            document.querySelectorAll('a[href="#"]')[1].addEventListener('click', function(e) {
                e.preventDefault();
                openModal('locationModal');
            });
        });
         
         function filterLocations() {
            const input = document.getElementById('locationSearch');
            const filter = input.value.toUpperCase();
            const locationList = document.getElementById('locationList');
            const cards = locationList.getElementsByClassName('location-card');
            let hasResults = false;
            
            const isBloodTypeSearch = /(A|B|AB|O)[+-]?/i.test(filter);
            
            for (let i = 0; i < cards.length; i++) {
                const card = cards[i];
                const name = card.getAttribute('data-name').toUpperCase();
                const address = card.getAttribute('data-address').toUpperCase();
                const bloodTypes = card.getAttribute('data-bloodtypes').toUpperCase();
                
                if (isBloodTypeSearch) {
                    const bloodTypeElements = card.querySelectorAll('.blood-types');
                    bloodTypeElements.forEach(el => {
                      
                        el.innerHTML = el.innerHTML.replace(/<span class="search-highlight">|<\/span>/g, '');
                        
                  
                        if (filter && bloodTypes.includes(filter)) {
                            const regex = new RegExp(filter, 'gi');
                            el.innerHTML = el.innerHTML.replace(regex, match => 
                                `<span class="search-highlight">${match}</span>`);
                        }
                    });
                }
                
                if (name.includes(filter) || 
                    address.includes(filter) || 
                    (isBloodTypeSearch && bloodTypes.includes(filter))) {
                    card.style.display = "";
                    hasResults = true;
                    
                    if (filter) {
                        const nameElement = card.querySelector('.location-name');
                        const addressElement = card.querySelector('.location-address');
                        
                        const highlightText = (element, text) => {
                            const regex = new RegExp(text, 'gi');
                            element.innerHTML = element.textContent.replace(regex, 
                                match => `<span class="search-highlight">${match}</span>`);
                        };
                        
                        highlightText(nameElement, filter);
                        highlightText(addressElement, filter);
                    }
                } else {
                    card.style.display = "none";
                }
            }
            
            const noResults = document.getElementById('noResults');
            if (!hasResults) {
                if (!noResults) {
                    const noResultsDiv = document.createElement('div');
                    noResultsDiv.id = 'noResults';
                    noResultsDiv.className = 'no-results';
                    noResultsDiv.innerHTML = `
                        <i class="fas fa-map-marked"></i>
                        <h3>No matching locations found</h3>
                        <p>Try searching for a different area or blood type</p>
                        <a href="https://www.google.com/maps/search/blood+donation+center+near+Chattogram" 
                           target="_blank" class="btn btn-primary" style="margin-top: 20px;">
                            <i class="fas fa-external-link-alt"></i> Search Google Maps
                        </a>
                    `;
                    locationList.appendChild(noResultsDiv);
                }
            } else if (noResults) {
                noResults.remove();
            }
        }
        
        document.getElementById('locationModal').addEventListener('click', function(e) {
            if (e.target.classList.contains('close-btn') || e.target === this) {
                
                document.getElementById('locationSearch').value = '';
                filterLocations();
            }
        });
    