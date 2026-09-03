document.getElementById('submit-input-btn').addEventListener('click', function() {
    const input = document.getElementById('user-input');
    if (input.value !== '') {
        document.getElementById('main-title').textContent = input.value;
        input.value = '';
    }
});

document.getElementById('toggle-theme-btn').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
});

document.getElementById('bmw-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('like-btn') || e.target.parentElement.classList.contains('like-btn')) {
        const btn = e.target.classList.contains('like-btn') ? e.target : e.target.parentElement;
        const countSpan = btn.querySelector('.likes-count');
        countSpan.textContent = parseInt(countSpan.textContent) + 1;
    }
});

document.getElementById('add-car-btn').addEventListener('click', function() {
    const name = document.getElementById('car-name').value;
    const img = document.getElementById('car-img').value;
    const desc = document.getElementById('car-desc').value;

    if (name && img && desc) {
        const li = document.createElement('li');
        li.innerHTML = `
            <h2>${name}</h2>
            <img src="${img}" alt="${name}">
            <p>${desc}</p>
            <button class="like-btn">❤️ Likes: <span class="likes-count">0</span></button>
        `;
        document.getElementById('bmw-list').appendChild(li);
        document.getElementById('car-name').value = '';
        document.getElementById('car-img').value = '';
        document.getElementById('car-desc').value = '';
    }
});

/* Drag Race Game Logic */
let startTime;
let timerTimeout;
const redLight = document.getElementById('red-light');
const greenLight = document.getElementById('green-light');
const startBtn = document.getElementById('start-game-btn');
const gasBtn = document.getElementById('gas-btn');
const gameResult = document.getElementById('game-result');
const car = document.getElementById('player-car');

startBtn.addEventListener('click', function() {
    car.style.left = '10px';
    redLight.classList.add('active');
    greenLight.classList.remove('active');
    gameResult.textContent = 'Get ready...';
    startBtn.disabled = true;
    gasBtn.disabled = false;

    const delay = Math.floor(Math.random() * 3000) + 2000;

    timerTimeout = setTimeout(() => {
        redLight.classList.remove('active');
        greenLight.classList.add('active');
        startTime = Date.now();
        gameResult.textContent = 'GO GO GO!';
    }, delay);
});

gasBtn.addEventListener('click', function() {
    if (!startTime) {
        clearTimeout(timerTimeout);
        redLight.classList.remove('active');
        gameResult.textContent = 'FALSE START! You launched too early!';
        startBtn.disabled = false;
        gasBtn.disabled = true;
    } else {
        const reactionTime = (Date.now() - startTime) / 1000;
        car.style.left = '85%';
        gameResult.textContent = `Finish time: ${reactionTime.toFixed(3)}s! 🏆`;
        startTime = null;
        startBtn.disabled = false;
        gasBtn.disabled = true;
    }
});
