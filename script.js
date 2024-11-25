const puzzles = [
    {
        question: "Which of these three emails is a phishing attempt? Select the two phishing emails.",
        options: [
            "Email from 'support@yourbank.com' with a link asking you to verify your account.",
            "Email from 'bankservices@youremail.com' with a 'too good to be true' offer, directing you to a URL with 'verify-youraccount-now.com'.",
            "Email from 'officialbank@securebank.com' with a suspicious attachment from 'bank-alerts@support'."
        ],
        correct: [1, 2],
        feedback: "Phishing emails often use fake sender addresses or URLs that closely resemble legitimate ones. Always verify suspicious links directly with the company."
    },
    {
        question: "Create the most secure password by choosing the correct components.",
        options: [
            "a mix of letters, numbers, and special characters like @, #, and !",
            "The password 'password1234!'",
            "A random string of letters, numbers, and symbols with a minimum length of 12 characters"
        ],
        correct: 2,
        feedback: "Secure passwords should have at least 12 characters, including a combination of letters (upper and lower case), numbers, and special characters."
    },
    {
        question: "Which social media post is **safe to share publicly**?",
        options: [
            "A photo of you at your vacation hotel, with the hotel's location tagged.",
            "A post with your birthday, including the year, location, and a family picture.",
            "A message about your plans for dinner at a public restaurant, but without any personal details."
        ],
        correct: 2,
        feedback: "Avoid sharing location details, birthdates, and other sensitive information online. Always think before posting!"
    },
    {
        question: "Which of the following is **the most secure** for two-factor authentication?",
        options: [
            "Text message-based verification (SMS)",
            "Using Google Authenticator or similar authentication apps",
            "Using a physical hardware key like YubiKey"
        ],
        correct: 2,
        feedback: "SMS-based 2FA is vulnerable to attacks such as SIM swapping. Authentication apps and hardware keys provide much higher security."
    }
];

let currentPuzzle = 0;
const startBtn = document.getElementById("start-btn");
const scenarioText = document.getElementById("scenario-text");
const storyline = document.getElementById("storyline");

startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    storyline.style.display = "none";
    loadPuzzle();
});

function loadPuzzle() {
    if (currentPuzzle < puzzles.length) {
        const puzzle = puzzles[currentPuzzle];
        let optionsHtml = "";
        puzzle.options.forEach((option, index) => {
            optionsHtml += `<button class="option-btn" onclick="checkAnswer(${index})">${option}</button><br>`;
        });
        scenarioText.innerHTML = `<h2>${puzzle.question}</h2>` + optionsHtml;
    } else {
        scenarioText.innerHTML = "<h2>Congratulations! You've escaped the digital trap!</h2>";
    }
}

function checkAnswer(selectedIndex) {
    const puzzle = puzzles[currentPuzzle];
    
    if (Array.isArray(puzzle.correct)) {
        if (puzzle.correct.includes(selectedIndex)) {
            alert("Correct! " + puzzle.feedback);
            currentPuzzle++;  
            loadPuzzle();  
        } else {
            alert("Incorrect. " + puzzle.feedback + " Try again!");
        }
    } else if (selectedIndex === puzzle.correct) {
        alert("Correct! " + puzzle.feedback);
        currentPuzzle++;  
        loadPuzzle();  
    } else {
        alert("Incorrect. " + puzzle.feedback + " Try again!");
    }
}
