
function playsound(e) {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio){
        return
    }else{
        
        audio.currentTime = 0;
        audio.play();
        if(e.keyCode == 65){
            key.classList.add('a-btn');
            setTimeout(() => {
                key.classList.remove('a-btn')
            }, 100);
        }else if(e.keyCode == 83){
            key.classList.add('s-btn');
            setTimeout(() => {
                key.classList.remove('s-btn')
            }, 100);
        }else if(e.keyCode == 68){
            key.classList.add('d-btn');
            setTimeout(() => {
                key.classList.remove('d-btn')
            }, 100);
        }else if(e.keyCode == 70){
            key.classList.add('f-btn');
            setTimeout(() => {
                key.classList.remove('f-btn')
            }, 100);
        }else if(e.keyCode == 74){
            key.classList.add('j-btn');
            setTimeout(() => {
                key.classList.remove('j-btn')
            }, 100);
        }else if(e.keyCode == 75){
            key.classList.add('k-btn');
            setTimeout(() => {
                key.classList.remove('k-btn')
            }, 100);
        }else if(e.keyCode == 76){
            key.classList.add('l-btn');
            setTimeout(() => {
                key.classList.remove('l-btn')
            }, 100);
        }else if(e.keyCode == 186){
            key.classList.add('colon-btn');
            setTimeout(() => {
                key.classList.remove('colon-btn')
            }, 100);
        }else{
            console.log("not")
        }
    }
}