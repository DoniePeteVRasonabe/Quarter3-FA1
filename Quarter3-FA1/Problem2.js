document.getElementById('problem2Button').addEventListener('click', function() {
    let firstName = prompt("Enter your first name:");
    let lastName = prompt("Enter your last name:");
    let birthYear = parseInt(prompt("Enter your birth year:"));
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;

    document.body.innerHTML += `<p>Hello ${firstName} ${lastName}! How does it feel to be ${age} years old?</p>`;
});
