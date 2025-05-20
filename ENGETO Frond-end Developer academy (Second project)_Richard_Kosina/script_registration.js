const password1 = document.querySelector('.input_registration1');
const password2 = document.querySelector('.input_registration2');

password2.addEventListener('input', () => {
if (password1.value === "" || password2.value === "") {
    password1.style.color = 'white';
    password1.style.borderColor = 'white';
    password2.style.color = 'white';
    password2.style.borderColor = 'white';
}

else if (password1.value === password2.value){
    password1.style.color = 'green';
    password1.style.borderColor = 'green';
    password2.style.color = 'green';
    password2.style.borderColor = 'green';
}

else{
    password1.style.color = 'red';
    password1.style.borderColor = 'red';
    password2.style.color = 'red'; 
    password2.style.borderColor = 'red';
}
})

password1.addEventListener('input', () => {
if (password1.value === "" || password2.value === "") {
    password1.style.color = 'white';
    password1.style.borderColor = 'white';
    password2.style.color = 'white';
    password2.style.borderColor = 'white';
}
    
else if (password1.value === password2.value){
    password1.style.color = 'green';
    password1.style.borderColor = 'green';
    password2.style.color = 'green';
    password2.style.borderColor = 'green';
}
    
else{
    password1.style.color = 'red';
    password1.style.borderColor = 'red';
    password2.style.color = 'red'; 
    password2.style.borderColor = 'red';
}
})