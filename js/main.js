// // ===== RUN AFTER PAGE LOAD =====
// document.addEventListener('DOMContentLoaded', function () {

//     // ===== ACTIVE NAV LINK =====
//     const currentPage = window.location.pathname.split('/').pop() || 'index.html';

//     // Main nav links
//     document.querySelectorAll('.nav-links a').forEach(link => {
//         link.classList.remove('active');
//         if (link.getAttribute('href').split('/').pop() === currentPage) {
//             link.classList.add('active');
//         }
//     });

//     // Auth buttons (Login/Register)
//     document.querySelectorAll('.auth-buttons a').forEach(link => {
//         if (link.getAttribute('href').split('/').pop() === currentPage) {
//             link.classList.add('active');
//         }
//     });

//     // Load events if present
//     if (document.querySelector('.events-grid')) {
//         loadFeaturedEvents();
//     }
// });


// // ===== DUMMY EVENTS =====
// const dummyEvents = [
//     {
//         title: "Tech Synapse 2026",
//         date: "March 15, 2026",
//         price: "$25",
//         image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop"
//     },
//     {
//         title: "Cultural Fest",
//         date: "April 5, 2026",
//         price: "$15",
//         image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop"
//     },
//     {
//         title: "Career Fair",
//         date: "May 10, 2026",
//         price: "Free",
//         image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop"
//     }
// ];


// // ===== LOAD EVENTS =====
// function loadFeaturedEvents() {
//     const grid = document.querySelector('.events-grid');
//     grid.innerHTML = '';

//     dummyEvents.forEach(event => {
//         grid.appendChild(createEventCard(event));
//     });
// }


// // ===== CREATE EVENT CARD =====
// function createEventCard(event) {
//     const card = document.createElement('div');
//     card.className = 'event-card';

//     card.innerHTML = `
//         <div class="event-image">
//             <img src="${event.image}" alt="${event.title}">
//         </div>
//         <div class="event-details">
//             <h3>${event.title}</h3>
//             <div class="event-meta">
//                 <span>📅 ${event.date}</span>
//             </div>
//             <div class="event-price">${event.price}</div>
//             <button class="btn-ticket" onclick="buyTicket('${event.title}')">
//                 Buy Ticket
//             </button>
//         </div>
//     `;

//     return card;
// }


// // ===== BUY TICKET =====
// function buyTicket(title) {
//     alert(`You clicked Buy Ticket for: ${title}`);
// }


// // ===== VALIDATION PATTERNS =====
// const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
// const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;


// // ===== ERROR HANDLING =====
// function showError(groupId, errorId, msg) {
//     document.getElementById(groupId).classList.add('error');
//     document.getElementById(errorId).textContent = msg;
// }

// function clearError(groupId) {
//     document.getElementById(groupId).classList.remove('error');
// }


// // ===== REGISTER VALIDATION =====
// function validateRegister() {
//     let valid = true;

//     const role = document.querySelector('input[name="role"]:checked');
//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const password = document.getElementById('password').value;
//     const confirm = document.getElementById('confirmPassword').value;

//     ['nameGroup','emailGroup','passwordGroup','confirmGroup'].forEach(clearError);
//     document.getElementById('roleError').classList.remove('show');

//     if (!role) {
//         document.getElementById('roleError').classList.add('show');
//         valid = false;
//     }

//     if (!name) {
//         showError('nameGroup','nameError','Full name is required');
//         valid = false;
//     }

//     if (!email || !email.match(emailPattern)) {
//         showError('emailGroup','emailError','Valid email required');
//         valid = false;
//     }

//     if (!password.match(passwordPattern)) {
//         showError('passwordGroup','passwordError','Weak password');
//         valid = false;
//     }

//     if (password !== confirm) {
//         showError('confirmGroup','confirmError','Passwords do not match');
//         valid = false;
//     }

//     if (valid) {
//         alert('Registration successful!');
//         window.location.href = '../index.html';
//     }

//     return false;
// }


// // ===== LOGIN VALIDATION =====
// function validateLogin() {
//     let valid = true;

//     const email = document.getElementById('email').value.trim();
//     const password = document.getElementById('password').value.trim();

//     clearError('emailGroup');
//     clearError('passwordGroup');

//     if (!email || !email.match(emailPattern)) {
//         showError('emailGroup','emailError','Valid email required');
//         valid = false;
//     }

//     if (!password) {
//         showError('passwordGroup','passwordError','Password required');
//         valid = false;
//     }

//     if (valid) {
//         alert('Login successful!');
//         window.location.href = '../index.html';
//     }

//     return false;
// }


// // ===== RESET FUNCTIONS =====
// function resetForm() {
//     document.getElementById('registerForm').reset();
// }

// function resetLogin() {
//     document.getElementById('loginForm').reset();
// }

// // ===== DATA =====
// const users = [
//   { name: 'Alice Nguyen', email: 'alice@campus.edu', role: 'Organiser' },
//   { name: 'Ben Carter', email: 'ben@campus.edu', role: 'Attendee' }
// ];

// const events = [
//   { title: 'Tech Synapse 2026', date: '15 Mar 2026', organiser: 'IT Club', status: 'Confirmed' }
// ];

// const activities = [
//   { text: 'User registered', time: '2 min ago' }
// ];


// // ===== USERS =====
// function renderUsers() {
//   const tbody = document.getElementById('usersTableBody');
//   if (!tbody) return;

//   tbody.innerHTML = '';

//   users.forEach(user => {
//     const tr = document.createElement('tr');

//     tr.innerHTML = `
//       <td>${user.name}</td>
//       <td>${user.role}</td>
//       <td>
//         <button onclick="alert('Edit ${user.name}')">Edit</button>
//       </td>
//     `;

//     tbody.appendChild(tr);
//   });
// }


// // ===== EVENTS =====
// function renderEvents() {
//   const tbody = document.getElementById('eventsTableBody');
//   if (!tbody) return;

//   tbody.innerHTML = '';

//   events.forEach(event => {
//     const tr = document.createElement('tr');

//     tr.innerHTML = `
//       <td>${event.title}</td>
//       <td>${event.date}</td>
//       <td>${event.organiser}</td>
//       <td>${event.status}</td>
//       <td><button onclick="alert('Delete ${event.title}')">Delete</button></td>
//     `;

//     tbody.appendChild(tr);
//   });
// }


// // ===== ACTIVITY =====
// function renderActivity() {
//   const feed = document.getElementById('activityFeed');
//   if (!feed) return;

//   feed.innerHTML = '';

//   activities.forEach(a => {
//     const li = document.createElement('li');
//     li.textContent = `${a.text} (${a.time})`;
//     feed.appendChild(li);
//   });
// }


// // ===== EXTRA =====
// function showReport() {
//   alert("Reports coming in Assignment 2");
// }


// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  if (typeof renderUsers === "function") renderUsers();
  if (typeof renderEvents === "function") renderEvents();
  if (typeof renderActivity === "function") renderActivity();
});


// ===== GLOBAL INIT =====
document.addEventListener('DOMContentLoaded', function () {

    // ===== ACTIVE NAV LINKS =====
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Main nav
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');

        const linkPage = link.getAttribute('href').split('/').pop();

        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // Auth buttons (Login/Register)
    document.querySelectorAll('.auth-buttons a').forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();

        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

});