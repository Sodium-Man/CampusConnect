const managedEvents = [
				{
					id: 1,
					title: 'Annual Career & Networking Fair',
					date: '2026-05-10T10:00',
					displayDate: 'Saturday, 10 May 2026 · 10:00 AM',
					organiser: 'University Careers Centre',
					status: 'Confirmed',
					image:
						'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop',
					description:
						'Connect with over 80 top employers from industries including tech, finance, health, and engineering. Bring your CV, dress professionally, and come ready to impress. Attend workshops on interview skills, personal branding, and LinkedIn optimisation. Open to all current students and recent graduates this is your chance to land internships, graduate roles, and invaluable industry connections in a single afternoon.',
				},
				{
					id: 2,
					title: 'Spring Cultural Festival',
					date: '2026-04-05T12:00',
					displayDate: 'Sunday, 5 April 2026 · 12:00 PM',
					organiser: 'Student Cultural Society',
					status: 'Confirmed',
					image:
						'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop',
					description:
						'Celebrate the rich tapestry of cultures represented across our campus at this vibrant spring festival. Enjoy live performances of traditional music, dance, and spoken word from over 20 cultural student groups. Sample authentic cuisines from around the world, browse handcrafted goods at the market stalls, and participate in interactive cultural workshops. A wonderful opportunity to broaden your horizons and meet fellow students from all walks of life.',
				},
				{
					id: 3,
					title: 'Tech Synapse 2026',
					date: '2026-03-15T09:00',
					displayDate: 'Sunday, 15 March 2026 · 9:00 AM',
					organiser: 'Computing & IT Club',
					status: 'Confirmed',
					image:
						'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop',
					description:
						"Tech Synapse is the campus's premier technology symposium, bringing together students, academics, and industry leaders for a day of inspiring keynote addresses, hands-on hackathon challenges, and showcase presentations. Explore the latest trends in AI, cybersecurity, cloud infrastructure, and software engineering. Whether you are a seasoned developer or just beginning your journey in tech, there is something here for every level of experience and curiosity.",
				},
				{
					id: 4,
					title: "Freshers' Welcome Night",
					date: '2026-02-20T18:00',
					displayDate: 'Friday, 20 February 2026 · 6:00 PM',
					organiser: 'Student Union',
					status: 'Draft',
					image:
						'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=600&auto=format&fit=crop',
					description:
						"Kick off your university journey at the official Freshers' Welcome Night, hosted by the Student Union in the main campus hall. This lively evening features icebreaker games, live DJ sets, free refreshments, and stalls from over 40 clubs and societies eager to recruit new members. A fantastic way to make friends, discover your interests, and get a feel for the amazing community waiting for you here at CampusConnect University. All first-year students warmly welcome.",
				},
			];

			function renderManagedEvents() {
				const container = document.getElementById('eventsContainer');

				const sorted = [...managedEvents].sort(
					(a, b) => new Date(b.date) - new Date(a.date),
				);

				container.innerHTML = '';

				sorted.forEach((event) => {
					const statusClass =
						{
							Confirmed: 'status-confirmed',
							Draft: 'status-draft',
							Cancelled: 'status-cancelled',
						}[event.status] || 'status-draft';

					const card = document.createElement('div');
					card.className = 'event-card';
					card.innerHTML = `
                    <div class="event-card-img">
                        <img src="${event.image}" alt="${event.title}" onerror="this.src='https://via.placeholder.com/220x200?text=Event'">
                        <span class="status-badge ${statusClass}">${event.status}</span>
                    </div>
                    <div class="event-card-body">
                        <div class="event-card-header">
                            <div class="event-title">${event.title}</div>
                            <div class="event-meta">
                                <span>📅 ${event.displayDate}</span>
                            </div>
                            <p class="event-description">${event.description}</p>
                        </div>
                        <div class="event-footer">
                            <div class="organiser">👤 Organised by <strong>&nbsp;${event.organiser}</strong></div>
                            <div class="card-actions">
                                <button class="btn-edit" onclick="handleEdit('${event.title}')">✏️ Edit</button>
                                <button class="btn-delete" onclick="handleDelete('${event.title}')">🗑 Delete</button>
                            </div>
                        </div>
                    </div>
                `;
					container.appendChild(card);
				});
			}

			function handleEdit(title) {
				alert(`✏️ Edit Event\n\nYou are about to edit "${title}".`);
			}

			function handleDelete(title) {
				alert(
					`🗑 Delete Event\n\nYou are about to delete "${title}".\nNo changes have been made.`,
				);
			}

document.addEventListener('DOMContentLoaded', () => {
    renderManagedEvents();
});