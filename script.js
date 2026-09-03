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