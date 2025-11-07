const names = [{
    "mmlht": "શરણમ ચોટાઈ",
    "avcot": "પ્રિયંકા પટેલ",
    "kamleshmasa": "કમલેશ કારિયા",
    "sureshbhai": "સુરેશભાઈ પટેલ",
    "jayshreeben": "જયશ્રીબેન પટેલ",
    "family": "પ્રિય પરિવાર અને મિત્રો"
}]

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

if (id && names[0][id]) {
    const recipientElement = document.getElementById('recipient-name');
    if (recipientElement) {
        recipientElement.textContent = names[0][id];
    }
} else {
    const p = document.getElementById('invitation-recipient');
    if (p) {
        p.remove()
    }
}

const headerAnimation = lottie.loadAnimation({
    container: document.getElementById('header-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://lottie.host/4d5b5c8d-9f8a-4a1a-8b2a-3c4d5e6f7g8h/data.json' // Wedding rings animation
});

const day1Animation = lottie.loadAnimation({
    container: document.getElementById('day1-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://lottie.host/1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p/data.json' // Mandap/ceremony animation
});

const venueAnimation = lottie.loadAnimation({
    container: document.getElementById('venue-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://lottie.host/7g8h9i0j-1k2l-3m4n-5o6p-7q8r9s0t1u2v/data.json' // Location/venue animation
});

const closingAnimation = lottie.loadAnimation({
    container: document.getElementById('closing-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://lottie.host/3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r/data.json' // Blessing/namaste animation
});


// load each section with animation as the user scrolls down
const sections = document.querySelectorAll('section');
const options = { threshold: 0.1 };

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const section = entry.target;
            section.classList.add('revealed');
            observer.unobserve(section);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const pageSizeScrollIndicator = document.querySelector('.page-size-scroll-indicator');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.offsetHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
    pageSizeScrollIndicator.style.width = scrollPercent + '%';
});