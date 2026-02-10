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

// Hynena SL Provider Booking
function bookHynena() {
    // Construct pre-filled message
    const message = `*Booking Inquiry for Hyena SL Creations*%0A--------------------------%0AService: Video/Photography%0ACoverage: Event, Videography, Photography, Photo Editing%0AArea: Around Northwest Province%0A%0AHi, I am interested in booking Hyena SL Creations for my event. Please let me know the availability and package details.`;

    // WhatsApp URL
    const whatsappUrl = `https://wa.me/94787943454?text=${message}`;

    // Open in new tab
    window.open(whatsappUrl, '_blank');
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
            e.preventDefault();

            // Auto-generate Username (e.g., USER + Random 4 digits)
            const randomID = Math.floor(1000 + Math.random() * 9000);
            const username = `User${randomID}`;

            // Initialize Dummy Data (For Demo Only)
            if (!localStorage.getItem('allBookings')) {
                const initialData = [
                    {
                        id: '00001',
                        service: 'Electrician',
                        location: 'Kurunegala',
                        date: '2026-02-11',
                        status: 'Pending'
                    }
                ];
                localStorage.setItem('allBookings', JSON.stringify(initialData));
            }

            // Get Values
            const name = document.getElementById('b-name').value;
            const phone = document.getElementById('b-phone').value;
            const service = document.getElementById('b-service').value;
            const location = document.getElementById('b-location').value;
            const date = document.getElementById('b-date').value;

            // Save Booking to LocalStorage (Simulating Database)
            const bookingData = {
                id: username,
                service: service,
                location: location,
                date: date,
                status: 'Pending'
            };

            // Get existing bookings or init empty array
            const currentBookings = JSON.parse(localStorage.getItem('allBookings')) || [];
            currentBookings.push(bookingData);
            localStorage.setItem('allBookings', JSON.stringify(currentBookings));

            // Construct Message with Username for Admin
            const message = `*New Service Booking*%0A------------------%0A*Booking ID: ${username}*%0AName: ${name}%0APhone: ${phone}%0AService: ${service}%0ALocation: ${location}%0ARequired Date: ${date}%0A%0A*Please use Booking ID to update status.*`;

            // WhatsApp URL
            const whatsappUrl = `https://wa.me/94787943454?text=${message}`;

            // Open WhatsApp
            window.open(whatsappUrl, '_blank');

            // Refresh Table & Redirect
            renderBookings();
            setTimeout(() => {
                window.location.href = 'status.html';
            }, 1000);
        });
    }

    // Function to Render Bookings Table
    function renderBookings() {
        const tableBody = document.getElementById('bookings-table-body');
        if (!tableBody) return;

        const bookings = JSON.parse(localStorage.getItem('allBookings')) || [];
        tableBody.innerHTML = ''; // Clear current rows

        bookings.forEach(booking => {
            const statusColor = booking.status === 'Completed' ? '#25D366' : '#fca311';

            const row = `
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 1rem; color: #555;">#${booking.id}</td>
                    <td style="padding: 1rem; color: #555;">${booking.service}</td>
                    <td style="padding: 1rem; color: #555;">${booking.location}</td>
                    <td style="padding: 1rem; color: #555;">${booking.date}</td>
                    <td style="padding: 1rem; text-align: center;">
                        <span style="background: ${statusColor}; color: #fff; padding: 5px 10px; border-radius: 15px; font-size: 0.85rem;">${booking.status}</span>
                    </td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    }

    // Initial Fake Data for Demo
    if (!localStorage.getItem('allBookings')) {
        const initialData = [
            {
                id: '00001',
                service: 'Electrician',
                location: 'Kurunegala',
                date: '2026-02-11',
                status: 'Completed'
            }
        ];
        localStorage.setItem('allBookings', JSON.stringify(initialData));
    }

    // Force Update Existing Data for ID 00001
    const allBookings = JSON.parse(localStorage.getItem('allBookings')) || [];
    const booking01 = allBookings.find(b => b.id === '00001');
    if (booking01) {
        booking01.status = 'Completed';
        localStorage.setItem('allBookings', JSON.stringify(allBookings));
    }

    // Initial Render
    renderBookings();

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

            // Save to LocalStorage for Profile Page
            localStorage.setItem('p_name', name);
            localStorage.setItem('p_phone', phone);
            localStorage.setItem('p_service', service);
            localStorage.setItem('p_exp', exp);
            localStorage.setItem('p_area', area);

            // Open WhatsApp
            window.open(whatsappUrl, '_blank');

            // Redirect to Login Page
            setTimeout(() => {
                alert('Your application is submitted! Once approved, you will receive your login details via WhatsApp.');
                window.location.href = 'login.html';
            }, 1000);

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
