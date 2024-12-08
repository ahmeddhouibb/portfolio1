// Liste des matières et projets
const matieres = [
    {
        nom: "Développement Web",
        description: "Apprentissage des bases du HTML, CSS, et JavaScript, ainsi que des frameworks modernes.",
        projets: [
            { titre: "Portfolio Personnel", description: "Création d'un site web pour présenter mon parcours." },
            { titre: "Application e-commerce", description: "Développement d'une application avec gestion de panier et produits." }
        ]
    },
    {
        nom: "Algorithmes et Structures de Données",
        description: "Étude des algorithmes classiques et structures de données (listes, arbres, graphes).",
        projets: [
            { titre: "Résolution de Graphes", description: "Implémentation de l'algorithme de Dijkstra." },
            { titre: "Jeu de Sudoku", description: "Création d'un solveur de Sudoku avec backtracking." }
        ]
    },
    {
        nom: "Bases de Données",
        description: "Conception et gestion de bases de données relationnelles avec SQL.",
        projets: [
            { titre: "Gestion d'un Parc Automobile", description: "Développement d'une base pour le suivi des véhicules." },
            { titre: "Analyse des Ventes", description: "Création de rapports à partir de données transactionnelles." }
        ]
    }
];

// Fonction pour afficher les matières et projets
function afficherMatieres() {
    const container = document.getElementById('matieres-container');
    matieres.forEach(matiere => {
        const matiereDiv = document.createElement('div');
        matiereDiv.classList.add('matiere');

        const projetsHTML = matiere.projets.map(projet => `
            <li><strong>${projet.titre}:</strong> ${projet.description}</li>
        `).join('');

        matiereDiv.innerHTML = `
            <h3>${matiere.nom}</h3>
            <p>${matiere.description}</p>
            <ul>${projetsHTML}</ul>
        `;

        container.appendChild(matiereDiv);
    });
}

// Appel de la fonction après le chargement de la page
window.onload = afficherMatieres;
