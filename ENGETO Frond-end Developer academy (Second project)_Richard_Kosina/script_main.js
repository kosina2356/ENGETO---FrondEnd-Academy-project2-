const icon = document.querySelector('.icon');

window.addEventListener('scroll', () => {
if(window.scrollY >= 500 && window.innerWidth > 768) {
    icon.style.display = 'flex' 
} 
else {
    icon.style.display = 'none' 
}
})
