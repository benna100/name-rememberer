import { getData } from "./db.js";

let nodes = [];
let edges = [];
let currentQuestion = null;
let currentConnection = null;
const quizContainer = document.getElementById("quiz-container");
const nextBtn = document.getElementById("next-question");

// Load quiz data (nodes and edges) from the database.
async function loadQuizData() {
    const data = await getData();
    nodes = data.nodes;
    edges = data.edges;

    // Filter nodes that appear in at least one connection.
    const connectedNodes = nodes.filter((node) =>
        edges.some((edge) => edge.from === node.id || edge.to === node.id)
    );

    if (connectedNodes.length === 0) {
        quizContainer.innerHTML =
            "<p>No connection data available in your network. Please add connections between people first.</p>";
        nextBtn.disabled = true;
    } else {
        generateQuestion(connectedNodes);
    }
}

// Generate a new quiz question using the provided connected nodes.
function generateQuestion(connectedNodes = null) {
    // If connectedNodes not provided, compute it.
    if (!connectedNodes) {
        connectedNodes = nodes.filter((node) =>
            edges.some((edge) => edge.from === node.id || edge.to === node.id)
        );
    }

    // Pick a random node from those with connections.
    currentQuestion =
        connectedNodes[Math.floor(Math.random() * connectedNodes.length)];

    // Get the connection edge for the current question.
    const connectionEdge = edges.find(
        (edge) =>
            edge.from === currentQuestion.id || edge.to === currentQuestion.id
    );
    if (!connectionEdge) {
        // Fallback: select another question if somehow no connection exists.
        generateQuestion(connectedNodes);
        return;
    }

    // Determine the connected person's id.
    const connectedPersonId =
        currentQuestion.id === connectionEdge.from
            ? connectionEdge.to
            : connectionEdge.from;

    // Get the connected person's node.
    currentConnection = nodes.find((node) => node.id === connectedPersonId);

    // Build question UI.
    quizContainer.innerHTML = "";
    const questionElem = document.createElement("div");

    // Display the current person's name.
    const nameDisplay = document.createElement("h2");
    nameDisplay.textContent = currentQuestion.label;
    questionElem.appendChild(nameDisplay);

    const prompt = document.createElement("p");
    prompt.textContent = `Who is ${currentQuestion.label} connected to?`;
    questionElem.appendChild(prompt);

    const answerInput = document.createElement("input");
    answerInput.type = "text";
    answerInput.id = "answer";
    questionElem.appendChild(answerInput);

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit Answer";
    submitBtn.addEventListener("click", checkAnswer);
    questionElem.appendChild(submitBtn);

    const feedback = document.createElement("div");
    feedback.id = "feedback";
    questionElem.appendChild(feedback);

    quizContainer.appendChild(questionElem);
}

// Check the user's answer.
function checkAnswer() {
    const answerInput = document.getElementById("answer");
    const feedback = document.getElementById("feedback");
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = currentConnection.label.trim().toLowerCase();

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = `Incorrect. The correct answer is "${currentConnection.label}".`;
        feedback.style.color = "red";
    }
}

// Setup event listener for next question.
nextBtn.addEventListener("click", () => generateQuestion());

// Load the quiz data.
loadQuizData();
