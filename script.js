const section = document.querySelector('.js-sectionUnfortune');
const btnStart = document.querySelector('.js-tellUnfortune');

function start() {
    section.classList.add('unfortune-teller--active');
}

btnStart.addEventListener('click', start);