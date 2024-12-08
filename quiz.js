let currentQuestion = 1;
const totalQuestions = 10; // Nombre total de questions

function showQuestion(questionNumber) {
    for (let i = 1; i <= totalQuestions; i++) {
        const question = document.getElementById(`q${i}`);
        question.style.display = (i === questionNumber) ? 'block' : 'none';
    }

    // Affiche le bouton "Valider" après la dernière question
    if (questionNumber === totalQuestions) {
        document.getElementById("validateBtn").style.display = 'inline-block';
    } else {
        document.getElementById("validateBtn").style.display = 'none';
    }
}

function nextQuestion(questionNumber) {
    const selectedOption = document.querySelector(`input[name="q${questionNumber}"]:checked`);
    if (!selectedOption) {
        // Si aucune option n'est sélectionnée, afficher un message d'erreur
        alert("Veuillez sélectionner une réponse avant de passer à la question suivante.");
    } else {
        if (questionNumber < totalQuestions) {
            currentQuestion = questionNumber + 1;
            showQuestion(currentQuestion);
        }
    }
}

function prevQuestion(questionNumber) {
    if (questionNumber > 1) {
        currentQuestion = questionNumber - 1;
        showQuestion(currentQuestion);
    }
}

function calculateScore() {
    let score = 0;
    let correctAnswersList = [];
    let isLastQuestionAnswered = false; // Pour vérifier si la dernière question a été répondu

    // On boucle sur toutes les questions pour vérifier les réponses
    for (let i = 1; i <= totalQuestions; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);

        if (i === totalQuestions && !selectedOption) {
            alert("Veuillez répondre à la dernière question avant de valider.");
            return; // Empêche la validation si la dernière question n'est pas répondue
        }

        // Si une option est sélectionnée et que la réponse est correcte (ici 'b' comme bonne réponse)
        if (selectedOption && selectedOption.value === 'b') {
            score++;
            correctAnswersList.push(`Question ${i}: ${selectedOption.nextElementSibling.textContent}`);
        }
    }

    // Affichage du score dans l'élément avec l'id "result"
    document.getElementById("result").innerHTML = `Votre score est : ${score} / ${totalQuestions}`;

    // Affichage des questions correctes
    const correctAnswersListElement = document.getElementById("correctAnswersList");
    correctAnswersListElement.innerHTML = ''; // Réinitialiser la liste avant de l'afficher

    correctAnswersList.forEach(answer => {
        const listItem = document.createElement("li");
        listItem.textContent = answer;
        correctAnswersListElement.appendChild(listItem);
    });

    // Masquer les questions et afficher les résultats
    document.getElementById("resultContainer").style.display = 'block';
    document.getElementById("validateBtn").style.display = 'none'; // Masquer le bouton après validation
    hideQuestions(); // Cache les questions après la validation des résultats
}

// Masquer toutes les questions après la validation
function hideQuestions() {
    for (let i = 1; i <= totalQuestions; i++) {
        const question = document.getElementById(`q${i}`);
        question.style.display = 'none';
    }
}

// Initialisation
showQuestion(currentQuestion);
