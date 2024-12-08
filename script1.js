// Liste des événements
const evenements = [
    {
        titre: "Conférence sur l'Intelligence Artificielle",
        date: "15 mars 2022",
        description: "Participation à une conférence internationale sur les avancées en IA.",
       
    },
    {
        titre: "Journée de Formation en Développement Web",
        date: "10 juin 2023",
        description: "Formation intensive sur les technologies modernes du web.",
       
    },
    {
        titre: "Hackathon Universitaire",
        date: "5 décembre 2023",
        description: "Compétition de programmation en équipe, avec un focus sur les solutions innovantes.",
      
    },
    {
        titre: "Séminaire sur la Cybersécurité",
        date: "20 février 2024",
        description: "Participation à un séminaire pour découvrir les dernières tendances en cybersécurité.",
     
    }
];

// Fonction pour afficher les événements
function afficherEvenements() {
    const container = document.getElementById('evenements-container');
    evenements.forEach(evenement => {
        const evenementDiv = document.createElement('div');
        evenementDiv.classList.add('evenement');

        evenementDiv.innerHTML = `
           
            <div class="evenement-text">
                <h3>${evenement.titre}</h3>
                <p><strong>Date :</strong> ${evenement.date}</p>
                <p>${evenement.description}</p>
            </div>
        `;
        container.appendChild(evenementDiv);
    });
}

// Appel de la fonction après le chargement de la page
window.onload = afficherEvenements;
