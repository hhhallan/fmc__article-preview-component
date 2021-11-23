const share = document.querySelector('.card-profil-share');
const shareList = document.querySelector('.hover-card');
const arrow = document.querySelector('.arrow');


share.addEventListener('click', () => {

    let width = window.innerWidth;

    if (width <= 470) {
        shareList.classList.toggle('active');

    } else {
        shareList.classList.toggle('active');
        arrow.classList.toggle('active');
    }
})