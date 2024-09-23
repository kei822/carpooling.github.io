function toggleForm(formType) {
    var selection = document.getElementById('selection');
    var registerForm = document.getElementById('register-form');
    var loginForm = document.getElementById('login-form');
    var forgotPasswordForm = document.getElementById('forgot-password-form');
    var rideList = document.getElementById('ride-list');
    var welcomeMessage = document.getElementById('welcome-message');

    selection.style.display = 'none';

    if (formType === 'register') {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
        forgotPasswordForm.style.display = 'none';
        rideList.style.display = 'none';
        welcomeMessage.style.display = 'none';
    } else if (formType === 'login') {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
        forgotPasswordForm.style.display = 'none';
        rideList.style.display = 'none';
        welcomeMessage.style.display = 'none';
    } else if (formType === 'forgot') {
        registerForm.style.display = 'none';
        loginForm.style.display = 'none';
        forgotPasswordForm.style.display = 'block';
        rideList.style.display = 'none';
        welcomeMessage.style.display = 'none';
    }
}

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('register-username').value;
    var email = document.getElementById('register-email').value;
    var password = document.getElementById('register-password').value;

    var users = JSON.parse(localStorage.getItem('users')) || [];
    var userExists = users.some(user => user.username === username || user.email === email);

    if (userExists) {
        alert('El usuario o correo electrónico ya está registrado');
    } else {
        users.push({ username: username, email: email, password: password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Usuario registrado exitosamente');
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('welcome-message').style.display = 'block';
        document.getElementById('ride-list').style.display = 'block';
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;

    var users = JSON.parse(localStorage.getItem('users')) || [];
    var user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Inicio de sesión exitoso');
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('welcome-message').style.display = 'block';
        document.getElementById('ride-list').style.display = 'block';
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
});

document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('forgot-email').value;

    var users = JSON.parse(localStorage.getItem('users')) || [];
    var user = users.find(user => user.email === email);

    if (user) {
        alert('Se ha enviado un enlace de recuperación a tu correo electrónico');
        document.getElementById('forgot-password-form').style.display = 'none';
        document.getElementById('selection').style.display = 'block';
    } else {
        alert('El correo electrónico no está registrado');
    }
});