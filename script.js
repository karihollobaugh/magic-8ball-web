function shake8Ball() {
    let responses = [
        "Yes",
        "No",
        "No way Jose",
        "Not a chance",
        "Without a doubt",
        "Absolutely",
        "100000%",
        "Nobody knows"
    ];

    let question = document.getElementById("question").value;
    let responseElement = document.getElementById("response");

    if (question.trim() === "") {
        responseElement.innerText = "You must ask a question!";
        return;
    }

    // Pick a random response
    let randomIndex = Math.floor(Math.random() * responses.length);
    responseElement.innerText = "🎱 " + responses[randomIndex];

    // Play sound effect
    let sound = document.getElementById("sound");
    sound.play();
}
