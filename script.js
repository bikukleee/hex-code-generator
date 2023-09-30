const hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const autputi = document.getElementById('aqanedawerehexi');
const gilaki = document.getElementById('dasaklikigilakidzma');
const body = document.body;

function generateRandomHexColor() {
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
        hexColor += hex[Math.trunc(Math.random() * hex.length)];
    }

    return hexColor;
}

gilaki.addEventListener('click', function() {
    const randomColor = generateRandomHexColor();
    autputi.textContent = randomColor;

    body.style.backgroundColor = randomColor;
});
