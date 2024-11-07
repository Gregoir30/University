document.getElementById('dark-mode-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    const icon = this.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('bi-moon');
        icon.classList.add('bi-sun');
    } else {
        icon.classList.remove('bi-sun');
        icon.classList.add('bi-moon');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const messageStatus = document.getElementById('messageStatus');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nom = contactForm.nom.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        if (nom === '' || email === '' || message === '') {
            messageStatus.textContent = 'Veuillez remplir tous les champs.';
            return;
        }

        // Envoyer le message par email ou le sauvegarder dans la base de données
        // Exemple d'affichage d'un message de confirmation
        messageStatus.textContent = 'Message envoyé avec succès! Nous vous répondrons bientôt.';
        contactForm.reset();
    });
});
