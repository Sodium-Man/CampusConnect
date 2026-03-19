// ===== HOMEPAGE SCRIPT =====

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedEvents();
});


// ===== EVENTS DATA =====
const dummyEvents = [
    {
        title: "Tech Synapse 2026",
        date: "March 15, 2026",
        price: "$25",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop"
    },
    {
        title: "Cultural Fest",
        date: "April 5, 2026",
        price: "$15",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop"
    },
    {
        title: "Career Fair",
        date: "May 10, 2026",
        price: "Free",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop"
    }
];


// ===== LOAD EVENTS =====
function loadFeaturedEvents() {
    const grid = document.querySelector('.events-grid');

    if (!grid) return; // safety (important)

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
    alert(`You clicked Buy Ticket for: ${title}`);
}

// ===== HOMEPAGE SCRIPT =====

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedEvents();
});

