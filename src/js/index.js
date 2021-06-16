// const container = document.querySelector('.container');
const sliders = document.querySelectorAll('.slide');

/*
// Delegating events
const hideAll = () => {
    sliders.forEach(item => {
        item.classList.remove('active');
    })
}

container.addEventListener('click', (e) => {
    let targer = e.target;

    if (targer.classList.contains('slide')) {
        if (!targer.classList.contains('active')) {
            hideAll();
            targer.classList.add('active');
        }
    }
})
*/

sliders.forEach(item => {
    item.addEventListener('click', (e) => {
        sliders.forEach(elem => {
            elem.classList.remove('active');
        })
        item.classList.toggle('active');
    })
})