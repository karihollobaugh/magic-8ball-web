document.getElementById("askButton").addEventListener("click", function() {
    const question = document.getElementById("question").value;
    const answerElement = document.getElementById("answer");

    // Alien responses
    const alienResponses = [
        "Unlikely, Earthling.",
        "Yes, if the stars align.",
        "No, we do not approve. The aliens have spoken.",
        "Maybe... the galaxy is full of mysteries.",
        "It is a mystery, even to us.",
        "The answer is too intelligent for you to comprehend.",
        "Beep boop.. beats me.",
        "Yes - the universe is on your side.",
        "Definitely - just don't tell the space police.",
        "Sure, but we will make a meme of you later.",
        "Nah, not this time. Try asking your cat.",
        "No, the universe is too busy right now.",
        "Try again in 5 light years.",
        "Not in a million years. Even aliens have boundaries.",
        "I'm sorry, I've forgotten the question already.",
        "Yes. That'll be 800 space bucks."
    ];

    // Pick a random response
    let randomResponse = alienResponses[Math.floor(Math.random() * alienResponses.length)];

    // Show the response
    answerElement.textContent = randomResponse;
});
