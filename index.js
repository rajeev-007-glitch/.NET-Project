const submitBtn = document.getElementById('submitBtn');
const email = document.getElementById('email');
const password = document.getElementById('password');


submitBtn.addEventListener('click', (e)=>{
    var passwordValue = password.value;
    var emailValue = email.value;
    
    console.log(emailValue);
    console.log(passwordValue);
    e.preventDefault();
})