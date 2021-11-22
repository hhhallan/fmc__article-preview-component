const share = document.querySelector('.card-profil-share');
const shareList = document.querySelector('.hover-card');
const arrow = document.querySelector('.arrow');

share.addEventListener('mouseenter', () => {
    shareList.style.display = 'flex';
    arrow.style.display = 'block';
})
share.addEventListener('mouseleave', () => {
    shareList.style.display = 'none';
    arrow.style.display = 'none';
})