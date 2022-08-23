let sliderElement = document.querySelector('#slide');
let buttonElement = document.querySelector('#button');

let sizePass = document.querySelector('#valor');
let password = document.querySelector('#password');

let containerPassword =document.querySelector('#container-password')

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@?"
let newPass = '';

sizePass.innerHTML = sliderElement.value;

slide.oninput = function() {
    sizePass.innerHTML = this.value
}
function generatePass(){
    
    let pass = '';
    for (let i = 0, n = charset.length; i < sliderElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random()*n))
    }

    containerPassword.classList.remove('hide');
    password.innerHTML = pass;
    newPass = pass;

}

function copyPass() {
    navigator.clipboard.writeText(newPass)
}