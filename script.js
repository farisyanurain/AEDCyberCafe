document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById('main-header');
    
    // Header Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shadow-lg', 'bg-dark/95');
            header.classList.remove('bg-transparent');
        } else {
            header.classList.remove('shadow-lg');
            // Keep bg-dark/95 for consistency, or toggle transparency if desired
        }
    });

    // Active Link Highlighter (Scroll Spy)
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                
                navLinks.forEach((link) => {
                    // Reset classes
                    link.classList.remove("text-accent");
                    link.classList.add("text-muted");
                    
                    // Add active class if matches
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("text-accent");
                        link.classList.remove("text-muted");
                    }
                });
            }
        });
    }, { rootMargin: "-30% 0px -70% 0px" });

    sections.forEach((section) => {
        observer.observe(section);
    });
});