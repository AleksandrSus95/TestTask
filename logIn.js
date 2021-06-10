let LogIn = document.querySelector('.LogIn-button');
let emailGet = document.getElementById('getemail');
let passwGet = document.getElementById('psw');
let messageEmail = document.querySelector('.validDataEmail');
let messagePassw = document.querySelector('.validDataPass');

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email==0){
        messageEmail.textContent='Поле не м.б пустым';
        return false;
    }
    else if(re.test(String(email).toLowerCase())){
        messageEmail.textContent= ' ';
        return true;
    }else{
        messageEmail.textContent='Не корректный Email';
        return false;
    }
}
function validationPassw(pasw){
    const lowerCaseLetters = /[a-z]/g; 
    const upperCaseLetters = /[A-Z]/g;
    const specsymbols = /[~!@#$%^&*_|?]/g;
    const RussLow = /[а-яё]/g; 
    const RussHugh = /[А-ЯЁ]/g;
    const numbers = /[0-9]/g;

    let checRusLow = pasw.value.match(RussLow);
    let checRusHigh = pasw.value.match(RussHugh);
    if(pasw.value==0){
        messagePassw.textContent='Поле не м.б пустым';
        return false;
    }else if(checRusLow || checRusHigh){
        messagePassw.textContent='Пароль не может содержать Кириллицу';
        return false;
    }else if(!(pasw.value.match(lowerCaseLetters))){
        messagePassw.textContent='Пароль должен содеражть символы разных регистров';
        return false;
    }else if(!(pasw.value.match(upperCaseLetters))){
        messagePassw.textContent='Пароль должен содеражть символы разных регистров';
        return false;
    }else if(!(pasw.value.match(specsymbols))){
        messagePassw.textContent='Пароль должен содержать спец символы';
        return false;
    }else if(!(pasw.value.match(numbers))){
        messagePassw.textContent='Пароль должен содержать числа';
        return false;
    }else if(!(pasw.value.length >= 6)){
        messagePassw.textContent='Пароль не м.б менее 6 символов';
        return false;
    }else{
        messagePassw.textContent=' ';
        return true;
    }
}
LogIn.onclick = function() {
    let checkPass = validateEmail(emailGet.value);
    let checkEmail = validationPassw(passwGet);
    if(checkPass && checkEmail){
        window.location.href = '404';
    }
};
