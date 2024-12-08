// Liste des diplômes en format JSON
const diplomes = [
    {
        titre: "Baccalauréat Scientifique",
        annee: 2020,
        description: "Diplôme obtenu avec mention Bien au Lycée IBN rachik.",
        image: "/image/ib2.jpeg"
    },
    {
        titre: "Licence en Informatique",
        annee: 2021,
        description: "Licence en informatique à Institut International de Technologie.",
        image: "/image/iit.jpeg"
    },
  
];


// Fonction pour générer les diplômes dans le DOM
function afficherDiplomes() {
    const container = document.getElementById('diplomes-container');
    diplomes.forEach(diplome => {
        const diplomeDiv = document.createElement('div');
        diplomeDiv.classList.add('diplome');

        diplomeDiv.innerHTML = `
            <img src="${diplome.image}" alt="${diplome.titre}">
            <div class="diplome-text">
                <h3>${diplome.titre}</h3>
                <p><strong>Année :</strong> ${diplome.annee}</p>
                <p>${diplome.description}</p>
            </div>
        `;
        container.appendChild(diplomeDiv);
    });
}

// Appel de la fonction après le chargement de la page
window.onload = afficherDiplomes;
