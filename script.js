// Define the response display element
const answerElement = document.getElementById("response");

// Array of sounds (make sure these are in your sounds folder)
const sounds = [
    'sounds/soundwave.wav',
    'sounds/doododoo.wav',
    'sounds/tone.wav',
    'sounds/signal.wav',
    'sounds/fingers.wav'
];

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

// Handle the button click event
document.getElementById("ask-button").addEventListener("click", function() {
    // Get a random response
    const response = alienResponses[Math.floor(Math.random() * alienResponses.length)];

    // Show the random response in the response element
    answerElement.textContent = response;

    // Play a random sound
    playSound();
});

// Function to play a random sound
function playSound() {
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    const audio = new Audio(randomSound);
    audio.play();
}
