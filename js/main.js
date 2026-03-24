// ===== RUN AFTER PAGE LOAD =====
document.addEventListener('DOMContentLoaded', function () {

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // ===== ACTIVE NAV LINK =====
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');

        const linkPage = link.getAttribute('href').split('/').pop();

        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // Extra safety for home page (from main)
    if (currentPage === '' || currentPage === 'index.html') {
        document.querySelector('.nav-links a[href="index.html"]')?.classList.add('active');
    }

    // ===== AUTH BUTTONS =====
    document.querySelectorAll('.auth-buttons a').forEach(link => {
        if (link.getAttribute('href').split('/').pop() === currentPage) {
            link.classList.add('active');
        }
    });

    // ===== LOAD EVENTS =====
    if (document.querySelector('.events-grid')) {
        loadFeaturedEvents();
    }
});


// ===== DUMMY EVENTS =====
const dummyEvents = [
	{
		title: 'Tech Synapse 2026',
		date: 'March 15, 2026',
		price: '$25',
		image:
			'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop',
	},
	{
		title: 'Cultural Fest',
		date: 'April 5, 2026',
		price: '$15',
		image:
			'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop',
	},
	{
		title: 'Career Fair',
		date: 'May 10, 2026',
		price: 'Free',
		image:
			'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop',
	},
];


// ===== LOAD EVENTS =====
function loadFeaturedEvents() {
    const grid = document.querySelector('.events-grid');
    if (!grid) return;

    grid.innerHTML = '';

    dummyEvents.forEach(event => {
        grid.appendChild(createEventCard(event));
    });
}


// ===== CREATE EVENT CARD =====
function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';

    card.innerHTML = `
        <div class="event-image">
            <img src="${event.image}" alt="${event.title}">
        </div>
        <div class="event-details">
            <h3>${event.title}</h3>
            <div class="event-meta">
                <span>📅 ${event.date}</span>
            </div>
            <div class="event-price">${event.price}</div>
            <button class="btn-ticket" onclick="buyTicket('${event.title}')">
                Buy Ticket
            </button>
        </div>
    `;

    return card;
}

// ===== BUY TICKET =====
function buyTicket(title) {
    alert(`You clicked Buy Ticket for: ${title}\nThis will redirect to ticket purchase in Assignment 2.`);
}


// ===== VALIDATION PATTERNS =====
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;


// ===== ERROR HANDLING =====
function showError(groupId, errorId, msg) {
    document.getElementById(groupId).classList.add('error');
    document.getElementById(errorId).textContent = msg;
}

function clearError(groupId) {
    document.getElementById(groupId).classList.remove('error');
}


// ===== REGISTER VALIDATION =====
function validateRegister() {
    let valid = true;

    const role = document.querySelector('input[name="role"]:checked');
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirmPassword').value;

    ['nameGroup','emailGroup','passwordGroup','confirmGroup'].forEach(clearError);
    const roleError = document.getElementById('roleError');
    if (roleError) roleError.classList.remove('show');

    if (!role) {
        document.getElementById('roleError').classList.add('show');
        valid = false;
    }

    if (!name) {
        showError('nameGroup','nameError','Full name is required');
        valid = false;
    }

    if (!email || !email.match(emailPattern)) {
        showError('emailGroup','emailError','Valid email required');
        valid = false;
    }

    if (!password.match(passwordPattern)) {
        showError('passwordGroup','passwordError','Weak password');
        valid = false;
    }

    if (password !== confirm) {
        showError('confirmGroup','confirmError','Passwords do not match');
        valid = false;
    }

    if (valid) {
        alert('Registration successful!');
        window.location.href = '../index.html';
    }

    return false;
}


// ===== LOGIN VALIDATION =====
function validateLogin() {
    let valid = true;

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    clearError('emailGroup');
    clearError('passwordGroup');

    if (!email || !email.match(emailPattern)) {
        showError('emailGroup','emailError','Valid email required');
        valid = false;
    }

    if (!password) {
        showError('passwordGroup','passwordError','Password required');
        valid = false;
    }

    if (valid) {
        alert('Login successful!');
        window.location.href = '../index.html';
    }

    return false;
}


// ===== RESET FUNCTIONS =====
function resetForm() {
    document.getElementById('registerForm').reset();
}

function resetLogin() {
    document.getElementById('loginForm').reset();
}

