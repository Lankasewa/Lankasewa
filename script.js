// Tab Switching Logic
function openTab(evt, tabName) {
    let i, tabContent, tabBtn;

    // Hide all tab content
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
        tabContent[i].classList.remove("active");
    }

    // Remove active class from all buttons
    tabBtn = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabBtn.length; i++) {
        tabBtn[i].className = tabBtn[i].className.replace(" active", "");
    }

    // Show the current tab and add active class
    document.getElementById(tabName).style.display = "block";

    // Add animation class
    setTimeout(() => {
        document.getElementById(tabName).classList.add("active");
    }, 10);

    evt.currentTarget.className += " active";
}

// Form Handling
document.addEventListener('DOMContentLoaded', () => {

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Booking Form Submission
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            // Get Values
            const name = document.getElementById('b-name').value;
            const phone = document.getElementById('b-phone').value;
            const service = document.getElementById('b-service').value;
            const location = document.getElementById('b-location').value;
            const date = document.getElementById('b-date').value;

            // Construct Message
            const message = `*New Service Booking*%0A------------------%0AName: ${name}%0APhone: ${phone}%0AService: ${service}%0ALocation: ${location}%0ARequired Date: ${date}`;

            // WhatsApp URL (Use web.whatsapp.com for desktop or wa.me for mobile/general)
            const whatsappUrl = `https://wa.me/94787943454?text=${message}`;

            // Open WhatsApp in new tab
            window.open(whatsappUrl, '_blank');

            // Redirect to status page (give valid time for pop-up to trigger)
            setTimeout(() => {
                window.location.href = 'status.html';
            }, 1000);
        });
    }

    // Registration Form Submission
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get Values
            const name = document.getElementById('r-name').value;
            const phone = document.getElementById('r-phone').value;
            const service = document.getElementById('r-service').value;
            const exp = document.getElementById('r-exp').value;
            const area = document.getElementById('r-area').value;

            // Construct Message
            const message = `*New Provider Registration*%0A--------------------------%0AName: ${name}%0AContact: ${phone}%0AService: ${service}%0AExperience: ${exp} Years%0AArea: ${area}`;

            // WhatsApp URL
            const whatsappUrl = `https://wa.me/94787943454?text=${message}`;

            // Open WhatsApp
            window.open(whatsappUrl, '_blank');

            alert('Redirecting to WhatsApp to complete your registration...');
            registrationForm.reset();
        });
    }

    // Mobile Menu Toggle (Optional but good to have)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(13, 27, 42, 0.95)';
                navLinks.style.padding = '1rem';
            }
        });
    }
});
