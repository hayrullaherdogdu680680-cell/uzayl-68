function blowCandles() {
  const cake = document.querySelector('.cake');
  cake.textContent = '🎂✨';
  
  createConfetti();
  
  setTimeout(() => {
    alert("Mumlar söndü! 🎉 Mutlu yıllar yine!");
    cake.textContent = '🎂';
  }, 800);
}

function createConfetti() {
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement('div');
    confetti.textContent = ['🎉', '✨', '🎈', '❤️', '⭐'][Math.floor(Math.random()*5)];
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-50px';
    confetti.style.fontSize = '1.5rem';
    confetti.style.zIndex = '1000';
    confetti.style.transition = 'all 4s';
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.style.transform = `translateY(${window.innerHeight + 100}px) rotate(${Math.random()*720}deg)`;
    }, 50);

    setTimeout(() => confetti.remove(), 5000);
  }
}

// Sayfa açılırken hafif efekt
window.onload = () => {
  setTimeout(() => {
    document.body.style.transition = 'all 1s';
  }, 500);
};