function createHeart(){
    let heart = document.createElement('div');

    heart.classList = 'heart';

    heart.style.left = Math.random() * 100 + '%';

    heart.style.animationDuration = Math.random() * 2 + 3 + 's';

    heart.innerHTML = "💔";
    
    document.body.appendChild(heart)
}

setInterval(createHeart, 200);