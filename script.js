const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const sectionId = link.getAttribute('href');
        const section = document.querySelector(sectionId);

        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    });
});