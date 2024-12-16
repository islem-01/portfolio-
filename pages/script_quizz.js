let currentQuestionIndex = 0;
let score = 0;
const questions = [
    {
        question: "Que signifie HTML ?",
        options: [
            "Hyper Type Multi Language",
            "Hyper Text Multiple Language",
            "Hyper Text Markup Language",
            "Home Text Multi Language"
        ],
        answer: 2, // Index de la réponse correcte
    },
    {
        question: "Que signifie CSS ?",
        options: [
            "Cascading Style Sheets",
            "Creative Style System",
            "Colorful Style Sheets",
            "Computer Style Syntax"
        ],
        answer: 0,
    },
    {
        question: "Que signifie PHP ?",
        options: [
            "Personal Home Page",
            "PHP: Hypertext Preprocessor",
            "Programming Home Page",
            "Portable Hypertext Processor"
        ],
        answer: 1,
    },
    {
        question: "Que signifie SQL ?",
        options: [
            "Structured Query Language",
            "Simple Query Language",
            "Secure Query Language",
            "Statement Query Language"
        ],
        answer: 0,
    },
    {
        question: "Que signifie XML ?",
        options: [
            "Extensible Markup Language",
            "Executable Markup Language",
            "Extra Markup Language",
            "Example Markup Language"
        ],
        answer: 0,
    },
    {
        question: "Quel est le langage de programmation utilisé\npour créer des pages web ?",
        options: ["Java", "Python", "HTML", "C++"],
        answer: 2,
    },
    {
        question: "Quel langage est utilisé pour le calcul scientifique ?",
        options: ["PHP", "Ruby", "Python", "HTML"],
        answer: 2, 
    },
    {
        question: "Quel langage est le plus utilisé pour le développement\nd'applications Android ?",
        options: ["Swift", "Java", "Kotlin", "JavaScript"],
        answer: 2, 
    },
    {
        question: "Quel langage est connu pour son utilisation dans\nles pages dynamiques ?",
        options: ["HTML", "JavaScript", "CSS", "SQL"],
        answer: 1, 
    },
    {
        question: "Quel langage a été développé par Bjarne Stroustrup ?",
        options: ["C", "C#", "C++", "Java"],
        answer: 2, 
    },
    {
        question: "Lequel de ces langages est orienté objet ?",
        options: ["Python", "Java", "C++", "Tous les précédents"],
        answer: 3, 
    },
    {
        question: "Quel langage est utilisé principalement pour l'analyse de données\net le machine learning ?",
        options: ["Python", "Ruby", "PHP", "Go"],
        answer: 0, 
    },
    {
        question: "Quel langage a été créé par Dennis Ritchie ?",
        options: ["C", "Fortran", "Pascal", "Bash"],
        answer: 0,
    },
    {
        question: "Quel est le langage de programmation principal d'Apple ?",
        options: ["Java", "Swift", "C#", "Python"],
        answer: 1, 
    },
    {
        question: "Quel langage est utilisé pour manipuler les bases\nde données ?",
        options: ["SQL", "HTML", "CSS", "Python"],
        answer: 0,
    }


];


// Fonction pour démarrer le quiz
function startQuiz() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("question-screen").style.display = "block";
    showQuestion();
}

// Fonction pour afficher une question
function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;
    
    const optionsList = document.getElementById("options");
    optionsList.innerHTML = '';  // Réinitialiser les options
    question.options.forEach((option, index) => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);  // Comparer l'index de la réponse
        li.appendChild(button);
        optionsList.appendChild(li);
    });
}

// Fonction pour vérifier la réponse
function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.answer) {  // Comparer l'index sélectionné à la bonne réponse
        score++;
    }
    document.getElementById("score").textContent = score;
    document.getElementById("next-btn").style.display = "block"; // Afficher le bouton "Suivant"
}

// Fonction pour passer à la question suivante
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        document.getElementById("next-btn").style.display = "none"; // Cacher le bouton "Suivant" jusqu'à ce qu'une réponse soit donnée
    } else {
        endQuiz();
    }
}

// Fonction pour terminer le quiz
function endQuiz() {
    document.getElementById("question-screen").style.display = "none";
    document.getElementById("end-screen").style.display = "block";
    document.getElementById("final-score").textContent = score;
}

// Fonction pour redémarrer le quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("score").textContent = score;
    document.getElementById("end-screen").style.display = "none";
    document.getElementById("start-screen").style.display = "block";
}
