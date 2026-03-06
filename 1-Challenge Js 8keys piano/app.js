function playsound(e) {
    // Check karein ke input event se aa raha hai ya manual trigger se
    const keyCode = e.keyCode || e.currentTarget.getAttribute('data-key');
    
    const key = document.querySelector(`div[data-key="${keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

    if (!audio) return;

    // Sound play karein
    audio.currentTime = 0;
    audio.play();

    // Classes add/remove karne ka logic (Shortened)
    const classMap = {
        65: 'a-btn', 83: 's-btn', 68: 'd-btn', 70: 'f-btn',
        74: 'j-btn', 75: 'k-btn', 76: 'l-btn', 186: 'colon-btn'
    };

    const className = classMap[keyCode];
    if (className && key) {
        key.classList.add(className);
        setTimeout(() => key.classList.remove(className), 100);
    }
}

// 1. Keyboard support ke liye
window.addEventListener('keydown', playsound);

// 2. Mobile/Click support ke liye
const keys = document.querySelectorAll('.key'); // Maan lijiye aapki divs ki class 'key' hai
keys.forEach(key => {
    key.addEventListener('click', playsound);
});