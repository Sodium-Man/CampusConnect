// ===== ADMIN DATA =====
const users = [
  { name: 'Alice Nguyen', email: 'alice@campus.edu', role: 'Organiser' },
  { name: 'Ben Carter', email: 'ben@campus.edu', role: 'Attendee' }
];

const events = [
  { title: 'Tech Synapse 2026', date: '15 Mar 2026', organiser: 'IT Club', status: 'Confirmed' }
];

const activities = [
  { text: 'User registered', time: '2 min ago' }
];

// ===== USERS =====
function renderUsers() {
  const tbody = document.getElementById('usersTableBody');
  if (!tbody) return;

  tbody.innerHTML = '';

  users.forEach(user => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${user.name}</td>
      <td>${user.role}</td>
      <td><button onclick="alert('Edit ${user.name}')">Edit</button></td>
    `;
    tbody.appendChild(tr);
  });
}
// ===== EVENTS =====
function renderEvents() {
  const tbody = document.getElementById('eventsTableBody');
  if (!tbody) return;

  tbody.innerHTML = '';

  events.forEach(event => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${event.title}</td>
      <td>${event.date}</td>
      <td>${event.organiser}</td>
      <td>${event.status}</td>
      <td><button onclick="alert('Delete ${event.title}')">Delete</button></td>
    `;
    tbody.appendChild(tr);
  });
}
// ===== ACTIVITY =====
function renderActivity() {
  const feed = document.getElementById('activityFeed');
  if (!feed) return;

  feed.innerHTML = '';

  activities.forEach(a => {
    const li = document.createElement('li');
    li.textContent = `${a.text} (${a.time})`;
    feed.appendChild(li);
  });
}