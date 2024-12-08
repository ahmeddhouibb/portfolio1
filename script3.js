// Données des passions, sports et qualités
const passions = [
  
    {
        nom: "Voyages",
        description: "Découvrir de nouvelles cultures et paysages est ma plus grande source d'inspiration.",
        image: "/image/1.jpg"
    },
 
];

const sports = [
    {
        nom: "Football",
        description: "J'aime jouer et regarder des matchs avec mes amis.",
        image: "/image/2.jpg"
    },
   
    {
        nom: "Natation",
        description: "Un sport complet qui m'aide à me détendre et rester en forme.",
        image: "/image/3.jpg"
    }
];

const qualites = [
    "Curiosité intellectuelle",
    "Esprit d'équipe",
    "Créativité",
    "Persévérance",
    "Sens de l'organisation",
    "Empathie"
];

// Fonction pour afficher les passions
function afficherPassions() {
    const container = document.getElementById('passions-container');
    passions.forEach(passion => {
        const passionDiv = document.createElement('div');
        passionDiv.classList.add('card');

        passionDiv.innerHTML = `
            <img src="${passion.image}" alt="${passion.nom}">
            <div class="card-text">
                <h3>${passion.nom}</h3>
                <p>${passion.description}</p>
            </div>
        `;
        container.appendChild(passionDiv);
    });
}

// Fonction pour afficher les sports
function afficherSports() {
    const container = document.getElementById('sports-container');
    sports.forEach(sport => {
        const sportDiv = document.createElement('div');
        sportDiv.classList.add('card');

        sportDiv.innerHTML = `
            <img src="${sport.image}" alt="${sport.nom}">
            <div class="card-text">
                <h3>${sport.nom}</h3>
                <p>${sport.description}</p>
            </div>
        `;
        container.appendChild(sportDiv);
    });
}

// Fonction pour afficher les qualités
function afficherQualites() {
    const container = document.getElementById('qualites-container');
    const qualitesList = document.createElement('ul');

    qualites.forEach(qualite => {
        const listItem = document.createElement('li');
        listItem.textContent = qualite;
        qualitesList.appendChild(listItem);
    });

    container.appendChild(qualitesList);
}

// Appel des fonctions après le chargement de la page
window.onload = function () {
    afficherPassions();
    afficherSports();
    afficherQualites();
};
