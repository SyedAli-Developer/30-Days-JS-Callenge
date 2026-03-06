function playsound(e) {
    // Check karein ke input event se aa raha hai ya manual trigger se
    const keyCode = e.keyCode || e.currentTarget.getAttribute('data-key');
    
    const key = document.querySelector(`div[data-key="${keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const txt = document.querySelector(`span[data-key="${keyCode}"]`)
    if (!audio) return;

    // Sound play 
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
    const TclassMap = {
        65: 'K-txt', 83: 'E-txt', 68: 'Y-txt', 70: 'P-txt',
        74: 'I-txt', 75: 'A-txt', 76: 'N-txt', 186: 'O-txt'
    };

    const TclassName = TclassMap[keyCode];
    if (TclassName && key) {
        txt.classList.add(TclassName);
        setTimeout(() => txt.classList.remove(TclassName), 100);
    }

}

// 1. Keyboard support ke liye
window.addEventListener('keydown', playsound);

// 2. Mobile/Click support ke liye
const keys = document.querySelectorAll('.key'); 
keys.forEach(key => {
    key.addEventListener('click', playsound);
});