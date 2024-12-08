// Liste initiale de témoignages
const temoignages = [
    {
        nom: "Amine Ben Ali",
        message: "L’IIT a changé ma perspective sur l'apprentissage avec des cours interactifs et un encadrement de qualité."
    },
    {
        nom: "Sarah Trabelsi",
        message: "Une expérience enrichissante ! Les projets pratiques m'ont beaucoup aidé à développer mes compétences."
    },
    {
        nom: "Prof. Karim Ahmed",
        message: "L’IIT offre un environnement dynamique qui motive les étudiants à se surpasser."
    }
];

// Fonction pour afficher les témoignages
function afficherTemoignages() {
    const container = document.getElementById('temoignages-container');
    container.innerHTML = ""; // Efface le contenu existant

    temoignages.forEach(temoignage => {
        const div = document.createElement('div');
        div.classList.add('temoignage');
        div.innerHTML = `
            <h3>${temoignage.nom}</h3>
            <p>${temoignage.message}</p>
        `;
        container.appendChild(div);
    });
}

// Gestion de l'ajout d'un nouveau témoignage
document.getElementById('temoignage-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche le rechargement de la page

    const nom = document.getElementById('nom').value;
    const message = document.getElementById('message').value;

    if (nom && message) {
        temoignages.push({ nom, message });
        afficherTemoignages(); // Met à jour l'affichage
        document.getElementById('temoignage-form').reset(); // Réinitialise le formulaire
    } else {
        alert("Veuillez remplir tous les champs !");
    }
});

// Afficher les témoignages au chargement de la page
window.onload = afficherTemoignages;
