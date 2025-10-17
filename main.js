
// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            console.log('Hamburger clicked, active:', navLinks.classList.contains('active'));
        });

        // Close menu when clicking on a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navLinks.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // Read More functionality for project descriptions
    const descriptions = document.querySelectorAll('.project-description');
    
    descriptions.forEach(desc => {
        const text = desc.getAttribute('data-full-text');
        const p = desc.querySelector('p');
        
        if (text && text.length > 100) {
            const shortText = text.substring(0, 100);
            let isExpanded = false;
            
            // Create collapsed version
            desc.innerHTML = `
                <p>${shortText}...</p>
                <button class="read-more-btn">Read More</button>
            `;
            
            const btn = desc.querySelector('.read-more-btn');
            const para = desc.querySelector('p');
            
            btn.addEventListener('click', function() {
                isExpanded = !isExpanded;
                
                if (isExpanded) {
                    para.textContent = text;
                    btn.textContent = 'Read Less';
                } else {
                    para.textContent = shortText + '...';
                    btn.textContent = 'Read More';
                }
            });
        }
    });
});
