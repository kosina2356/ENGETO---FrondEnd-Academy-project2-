const password1 = document.getElementById('input_registration1');
const password2 = document.getElementById('input_registration2');

password2.addEventListener('input', () => {
if (password1.value === "" || password2.value === "") {
    password2.classList.add('no_change')
    password2.classList.remove('change_error')
    password1.classList.add('no_change')
    password1.classList.remove('change_error')
}

else if (password1.value === password2.value){
    password2.classList.add('change_true')
    password2.classList.remove('no_change')
    password1.classList.add('change_true')
    password1.classList.remove('no_change')
}

else{
    password2.classList.add('change_error')
    password2.classList.remove('change_true')
    password1.classList.add('change_error')
    password1.classList.remove('change_true')
}
})

password1.addEventListener('input', () => {
if (password1.value === "" || password2.value === "") {
    password1.classList.add('no_change')
    password1.classList.remove('change_error')
    password2.classList.add('no_change')
    password2.classList.remove('change_error')
}

else if (password1.value === password2.value){
    password1.classList.add('change_true')
    password1.classList.remove('no_change')
    password2.classList.add('change_true')
    password2.classList.remove('no_change')
}

else{
    password1.classList.add('change_error')
    password1.classList.remove('change_true')
    password2.classList.add('change_error')
    password2.classList.remove('change_true')
}
})