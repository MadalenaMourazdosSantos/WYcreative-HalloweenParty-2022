const phrases = [
    "video/FRASES/FRASE_1.mp4",
    "video/FRASES/FRASE_2.mp4",
    "video/FRASES/FRASE_3.mp4",
    "video/FRASES/FRASE_4.mp4",
    "video/FRASES/FRASE_5.mp4",
    "video/FRASES/FRASE_6.mp4",
    "video/FRASES/FRASE_7.mp4",
    "video/FRASES/FRASE_8.mp4",
    "video/FRASES/FRASE_9.mp4",
    "video/FRASES/FRASE_10.mp4",
    "video/FRASES/FRASE_11.mp4",
    "video/FRASES/FRASE_12.mp4",
    "video/FRASES/FRASE_13.mp4",
    "video/FRASES/FRASE_14.mp4",
    "video/FRASES/FRASE_15.mp4",
    "video/FRASES/FRASE_16.mp4",
    "video/FRASES/FRASE_17.mp4",
    "video/FRASES/FRASE_18.mp4",
    "video/FRASES/FRASE_19.mp4",
]

const section = document.querySelector('.js-sectionUnfortune');
const btnStart = document.querySelector('.js-start');
const cristalBall = document.querySelector('.js-cristalBall');
const phrase = document.querySelector('.js-phrase');

function start() {
    section.classList.add('unfortune-teller--active');

    setTimeout(function() {
        cristalBall.play();
        phrase.src = phrases[Math.floor(Math.random() * 18)];
        phrase.play();  
        cristalBall.onended = function() {
            phrase.src = '';
        }
    }, 1500);
}

btnStart.addEventListener('click', start);