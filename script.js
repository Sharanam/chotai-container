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

// request full screen, on load.
window.onload = function () {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
        document.documentElement.msRequestFullscreen();
    }
};