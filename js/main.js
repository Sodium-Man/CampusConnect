document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        const linkHref = link.getAttribute('href');
        const linkPage = linkHref.split('/').pop();
        
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
    
    if (currentPage === '' || currentPage === 'index.html') {
        document.querySelector('.nav-links a[href="index.html"]')?.classList.add('active');
    }
});

const dummyEvents = [
    {
        title: "Tech Symposium 2026",
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

function loadFeaturedEvents() {
    const eventsGrid = document.querySelector('.events-grid');
    if (!eventsGrid) return;
    
    eventsGrid.innerHTML = '';
    
    dummyEvents.forEach(event => {
        const eventCard = createEventCard(event);
        eventsGrid.appendChild(eventCard);
    });
}

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
                <span><i>📅</i> ${event.date}</span>
            </div>
            <div class="event-price">${event.price}</div>
            <button class="btn-ticket" onclick="buyTicket('${event.title}')">Buy Ticket</button>
        </div>
    `;
    
    return card;
}

function buyTicket(eventTitle) {
    alert(`You clicked Buy Ticket for: ${eventTitle}\nThis will redirect to ticket purchase in Assignment 2.`);
}

if (document.querySelector('.events-grid')) {
    loadFeaturedEvents();
}