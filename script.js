//your JS code here. If required.
// List of sounds (replace names as per your sound files)
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttonsDiv = document.getElementById("buttons");

// Create button for each sound
sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopSounds();
        document.getElementById(sound).play();
    });

    buttonsDiv.appendChild(btn);

    // Create audio element
    const audio = document.createElement("audio");
    audio.src = `./sounds/${sound}.mp3`; 
    audio.id = sound;
    document.body.appendChild(audio);
});

// Function to stop all sounds
function stopSounds() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    });
}
