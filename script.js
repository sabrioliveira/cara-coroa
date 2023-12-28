let cara = 0;
let coroa = 0;
let coin = document.querySelector('#coin');
let flipBt = document.querySelector('#flip');
let resetBt = document.querySelector('#reset');

function updateScore() {
    document.querySelector("#cara-count").textContent = `Cara: ${cara}`;
    document.querySelector("#coroa-count").textContent = `Coroa: ${coroa}`;
}

function disableButton() {
    flipBt.disabled = true;
    setTimeout(function () {
        flipBt.disabled = false;
    }, 3000);
}

flipBt.addEventListener('click', () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = 'none';
    if (i) {
        setTimeout(function () {
            coin.style.animation = 'spin-cara 3s forwards';
        }, 100);
        cara++;
    } else {
        setTimeout(function () {
            coin.style.animation = 'spin-coroa 3s forwards';
        }, 100);
        coroa++;
    }
    setTimeout(updateScore, 3000);
    disableButton();
});

resetBt.addEventListener('click', () => {
    coin.style.animation = 'none';
    cara = 0;
    coroa = 0;
    updateScore();
});