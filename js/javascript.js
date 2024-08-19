// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const switchFormButton = document.getElementById('switch-form');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const formTitle = document.getElementById('form-title');
    
    switchFormButton.addEventListener('click', function() {
        if (loginForm.classList.contains('hidden')) {
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
            formTitle.textContent = 'Login';
            switchFormButton.textContent = 'Register';
        } else {
            loginForm.classList.add('hidden');
            registerForm.classList.remove('hidden');
            formTitle.textContent = 'Register';
            switchFormButton.textContent = 'Login';
        }
    });

    document.getElementById('auth-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const isRegister = registerForm.classList.contains('hidden') === false;
        const password = document.getElementById(isRegister ? 'password-reg' : 'password').value;
        const confirmPassword = document.getElementById(isRegister ? 'confirm-password-reg' : 'confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        alert(isRegister ? 'Registration successful!' : 'Login successful!');
    });
});
