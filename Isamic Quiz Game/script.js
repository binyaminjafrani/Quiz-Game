const questions = {
    easy: [
        {
            question: "How many pillars of Islam are there?",
            answers: ["3", "4", "5", "6"],
            correct: 2,
        },
        {
            question: "How many Rakats are in the Fajr prayer?",
            answers: ["2", "4", "6", "8"],
            correct: 1,
        },
        {
            question: "During which Islamic month do Muslims fast?",
            answers: ["Muharram", "Dhul-Hijjah", "Ramadan", "Shawwal"],
            correct: 2,
        },
        {
            question: "Who should give Zakah in Islam?",
            answers: ["Only the rich", "Every Muslim who has savings", "Only men", "Only during Ramadan"],
            correct: 1,
        },
        {
            question: "In which city do Muslims perform Hajj?",
            answers: ["Medina", "Cairo", "Mecca", "Istanbul"],
            correct: 2,
        },
        {
            question: "Who was the first prophet in Islam?",
            answers: ["Prophet Muhammad (PBUH)", "Prophet Ibrahim (A.S)", "Prophet Musa (A.S)", "Prophet Adam(A.S)"],
            correct: 3,
        },
        {
            question: "What is the first Surah (chapter) of the Quran?",
            answers: ["Surah Al-Baqarah", "Surah Al-Fatiha", "Surah Al-Ikhlas", "Surah Al-Nas"],
            correct: 1,
        },
        {
            question: "Who was the Prophet Muhammad's (PBUH) mother?",
            answers: ["Aminah", "Fatimah", "Khadijah", "Maryam"],
            correct: 0,
        },
        {
            question: "Which month comes after Ramadan in the Islamic calendar?",
            answers: ["Shawwal", "Dhul-Hijjah", "Muharram", "Safar"],
            correct: 0,
        },
        {
            question: "Who will enter Jannah in Islam?",
            answers: ["Only the rich", "Only the prophets", "Only Muslims who believe in Allah", "Only those who fast"],
            correct: 2,
        },
    ],
    medium: [
        {
            question: "Which of the following is not one of the Five Pillars of Islam?",
            answers: ["Zakah", "Hajj", "Salah", "Sadaqah"],
            correct: 3,
        },
        {
            question: "What does Tawheed mean in Islam?",
            answers: ["Believing in one God (Allah)", "Worshiping idols", "Following all prophets equally", "Praying five times a day"],
            correct: 0,
        },
        {
            question: "How many times a day do Muslims pray (Salah)?",
            answers: ["3", "4", "5", "6"],
            correct: 2,
        },
        {
            question: "What time does fasting (Roza) begin each day during Ramadan?",
            answers: ["At sunrise", "At midnight", "At dawn (Fajr)", "At noon"],
            correct: 2,
        },
        {
            question: "What percentage of a Muslim's eligible wealth must be given as Zakat?",
            answers: ["2%", "2.5% ", "3%", "4%"],
            correct: 1,
        },
        {
            question: "How many days does Hajj last?",
            answers: ["5", "3", "7", "9"],
            correct: 0,
        },
        {
            question: "Which prophet is known as the father of humanity in Islam?",
            answers: ["Prophet Ibrahim", "Prophet Nuh", "Prophet Adam", "Prophet Musa"],
            correct: 2,
        },
        {
            question: "How many Surahs (chapters) are there in the Quran?",
            answers: ["113", "114", "116", "120"],
            correct: 1,
        },
        {
            question: "Why do Muslims give Sadaqah?",
            answers: ["To show off their wealth", "To help others and please Allah", "To gain fame and status", "To follow government rules"],
            correct: 1,
        },
        
        {
            question: "Which of the following is a feature of Jannah?",
            answers: ["Rivers of milk and honey", "Eternal sadness", "Endless work", "Dark and cold"],
            correct: 0,
        },
    ],
    hard: [
        {
            question: "Which pillar of Islam requires both physical and financial ability?",
            answers: ["Shahada", "Salat", "Zakat", "Hajj"],
            correct: 3,
        },
        {
            question: "Which of the following is the longest prayer in terms of rak'ahs?",
            answers: ["Fajr", "Maghrib", "Isha", "Dhuhr"],
            correct: 2,
        },
        {
            question: "What is the name of the pre-dawn meal before fasting begins in Ramadan?",
            answers: ["Iftar", "Suhoor", "Zakat", "Fajr"],
            correct: 0,
        },
        {
            question: "What is the minimum threshold of wealth (Nisab) required for Zakat on gold?",
            answers: ["6 tola", "7.5 tola", "9 tola", "10 tola"],
            correct: 1,
        },
        {
            question: "What is the act of symbolically throwing stones at three pillars during Hajj called?",
            answers: ["Tawaf ", "Sa’i", "Stoning of the Jamarat", "Ihram"],
            correct: 2,
        },
        {
            question: "Which of the following was the first revelation received by Prophet Muhammad (PBUH)?",
            answers: ["Surah Al-Alaq", "Surah Al-Fatiha", "Surah Al-Baqarah", "Surah Al-Ikhlas"],
            correct: 0,
        },
        {
            question: "Which surah of the Quran is known as the 'heart of the Quran'?",
            answers: ["Surah Al-Fatiha", "Surah Yasin", "Surah Al-Baqarah", "Surah Al-Ikhlas"],
            correct: 1,
        },
        {
            question: "Which of the following actions is considered Haram in Islam?",
            answers: ["Giving charity to the poor", "Consuming halal meat", "Charging interest on loans (Riba)", "Performing Salah five times a day"],
            correct: 2,
        },
        {
            question: "Which angel was responsible for bringing revelations to the prophets?",
            answers: ["Jibril", "Mikail", "Israfil", "Azrael"],
            correct: 0,
        },
        {
            question: "When did the Hijra of Prophet Muhammad (PBUH) take place?",
            answers: ["1 AH", "2 AH", "3 AH", "4 AH"],
            correct: 0,
        },
    ],
};

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(difficulty) {
    document.getElementById("difficulty-selector").classList.add("hidden");
    document.getElementById("question-container").classList.remove("hidden");
    currentQuestions = [...questions[difficulty]].sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const questionContainer = document.getElementById("question-container");
    const answersContainer = document.getElementById("answers");
    const currentQuestion = currentQuestions[currentQuestionIndex];

    document.getElementById("question").textContent = currentQuestion.question;

    answersContainer.innerHTML = ""; // Clear previous answers
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("answer-btn");
        button.onclick = () => selectAnswer(index);
        answersContainer.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    const answersContainer = document.getElementById("answers");

    if (selectedIndex === currentQuestion.correct) {
        score++;
        showReward();
    } else {
        const buttons = answersContainer.querySelectorAll("button");
        buttons[selectedIndex].style.backgroundColor = "#e74c3c"; // Red for incorrect
        buttons[currentQuestion.correct].style.backgroundColor = "#2ecc71"; // Green for correct

        buttons.forEach((btn) => (btn.disabled = true));

        alert("Incorrect! The correct answer has been highlighted.");
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        setTimeout(() => {
            resetButtonStyles();
            showQuestion();
        }, 2000);
    } else {
        setTimeout(() => showResult(), 2000);
    }
}

function resetButtonStyles() {
    const buttons = document.getElementById("answers").querySelectorAll("button");
    buttons.forEach((btn) => {
        btn.style.backgroundColor = "";
        btn.disabled = false;
    });
}

function showReward() {
    document.getElementById("reward-container").classList.remove("hidden");
    document.getElementById("question-container").classList.add("hidden");
}

function nextQuestion() {
    document.getElementById("reward-container").classList.add("hidden");
    document.getElementById("question-container").classList.remove("hidden");
    showQuestion();
}

function showResult() {
    document.getElementById("result-container").classList.remove("hidden");
    document.getElementById("question-container").classList.add("hidden");
    document.getElementById("score").textContent = `Your Score: ${score}`;
}

function resetQuiz() {
    document.getElementById("result-container").classList.add("hidden");
    document.getElementById("difficulty-selector").classList.remove("hidden");
}
