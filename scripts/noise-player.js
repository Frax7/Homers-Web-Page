document.addEventListener("DOMContentLoaded", () => {
    const audio = new Audio('assets/noise.mp3');

    function playAudio() {
        audio.play();
        audio.loop = true;
        document.body.style.cursor = "auto";
        document.removeEventListener("click", playAudio);
    }

    document.addEventListener("click", playAudio);
});