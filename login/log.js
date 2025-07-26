document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Simple demo credentials
    if (username === 'admin' && password === 'password') {
        message.style.color = 'green';
        message.textContent = 'Login successful!';
    } else {
        message.style.color = '#e74c3c';
        message.textContent = 'Invalid username or password.';
    }
}); 