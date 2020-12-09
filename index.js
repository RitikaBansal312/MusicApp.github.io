window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const color = [
        "burlywood",
        "rgb(73, 197, 228)",
        "rgb(189, 233, 181)",
        "rgb(228, 204, 216)",
        "rgb(160, 141, 173",
        "rgb(210, 218, 170)",
    ];

 // Lets get going with the sound here
 pads.forEach((pad, index) => {
    pad.addEventListener('click', function(){
        sounds[index].currentTime = 0;
        sounds[index].play();
        
        createBubbles(index);
    });
 });
 
 // Create a function that makes bubbles
 const createBubbles = (index) => {
     const bubble = document.createElement("div");
     visual.appendChild(bubble);
     bubble.style.backgroundColor = color[index];
     bubble.style.animation = 'jump 1s ease';
     bubble.addEventListener('animationend', function(){
         visual.removeChild(this);
     });
    };
});

