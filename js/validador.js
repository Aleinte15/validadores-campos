document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        if (username === "" || password === "") {
            alert("No se permiten espacios en blanco.");
        } else {
            alert("Login exitoso.");
            form.submit();
        }
    });
});
