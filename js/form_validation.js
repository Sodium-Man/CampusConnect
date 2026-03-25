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

// ===== REGISTER =====
function validateRegister() {
    let valid = true;

    const role = document.querySelector('input[name="role"]:checked');
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirmPassword').value;

    ['nameGroup','emailGroup','passwordGroup','confirmGroup'].forEach(clearError);
    document.getElementById('roleError').classList.remove('show');

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

// ===== LOGIN =====
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

// ===== RESET =====
function resetForm() {
    document.getElementById('registerForm')?.reset();
}

function resetLogin() {
    document.getElementById('loginForm')?.reset();
}