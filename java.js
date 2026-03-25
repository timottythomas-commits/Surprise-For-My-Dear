onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
}

// Add sound code here
const bgMusic = document.getElementById('bgMusic');
const muteBtn = document.createElement('button');
muteBtn.textContent = '🔊 Mute';
muteBtn.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 1000; padding: 10px 15px; cursor: pointer;';
document.body.appendChild(muteBtn);

muteBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        muteBtn.textContent = '🔊 Mute';
    } else {
        bgMusic.pause();
        muteBtn.textContent = '🔇 Unmute';
    }
});
