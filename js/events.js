const requiredFields = [
    'eventTitle',
    'eventDescription',
    'startDate',
    'endDate',
    'location',
    'capacity',
    'price',
    'status',
];

// ERROR HANDLING
function showError(id, msg) {
    const input = document.getElementById(id);
    const errEl = document.getElementById(id + 'Error');
    input.classList.add('error');
    if (errEl) {
        errEl.textContent = msg;
        errEl.classList.add('visible');
    }
}

function clearError(id) {
    const input = document.getElementById(id);
    const errEl = document.getElementById(id + 'Error');
    input.classList.remove('error');
    if (errEl) errEl.classList.remove('visible');
}

// FIELD VALIDATION
function validateField(id) {
    const el = document.getElementById(id);
    const val = el.value.trim();

    if (val === '' || val === null) {
        showError(id, getDefaultMsg(id));
        return false;
    }

    if (id === 'endDate') {
        const start = document.getElementById('startDate').value;
        if (start && val <= start) {
            showError('endDate', 'End date must be after start date.');
            return false;
        }
    }

    clearError(id);
    return true;
}

// DEFAULT MESSAGES
function getDefaultMsg(id) {
    const msgs = {
        eventTitle: 'Please enter an event title.',
        eventDescription: 'Please enter a description.',
        startDate: 'Please select a start date.',
        endDate: 'Please select an end date.',
        location: 'Please enter a location.',
        capacity: 'Please enter the capacity.',
        price: 'Please enter a price (use 0 for free).',
        status: 'Please select a status.',
    };
    return msgs[id] || 'This field is required.';
}

// INIT
document.addEventListener('DOMContentLoaded', () => {
    requiredFields.forEach((id) => {
        const el = document.getElementById(id);

        el.addEventListener('blur', () => validateField(id));

        el.addEventListener('input', () => {
            if (el.classList.contains('error')) validateField(id);
        });
    });

    // FORM SUBMIT
    document.getElementById('createEventForm')
        .addEventListener('submit', function (e) {
            e.preventDefault();

            let valid = true;

            requiredFields.forEach((id) => {
                if (!validateField(id)) valid = false;
            });

            if (!valid) return;

            alert('New event has been created');
            window.location.href = 'event-management.html';
        });

    // RESET BUTTON
    document.getElementById('resetBtn')
        .addEventListener('click', function () {
            document.getElementById('createEventForm').reset();
            requiredFields.forEach((id) => clearError(id));
        });
});