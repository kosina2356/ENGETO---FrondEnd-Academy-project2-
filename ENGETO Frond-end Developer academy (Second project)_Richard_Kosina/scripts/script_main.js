const icon = document.getElementById('icon');

window.addEventListener('scroll', () => {
if(window.scrollY >= 500 && window.innerWidth > 768) {
    icon.classList.add('visible');
    icon.classList.remove('hidden')
} 
else {
    icon.classList.add('hidden');
    icon.classList.remove('visible')
}
})


