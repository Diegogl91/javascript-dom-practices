/**
 *  getElementById
 *  getElementsByClassName
 *  getElementsByTagName
 *  getElementsByName
 * 
 *  querySelector
 *  querySelectorAll
 * 
 *  createElement
 *  createTextNode
 * 
 *  addEventListener
 */

let webpages = [
    { icon: 'fa-google', text: 'Google', url: 'https://google.co' },
    { icon: 'fa-facebook', text: 'Facebook', url: 'https://facebook.com' },
    { icon: 'fa-twitter', text: 'Twitter', url: 'https://twitter.com' },
    { icon: 'fa-instagram', text: 'Instagram', url: 'https://instagram.com' },
]

let form = document.querySelector('form');


// addEventListener retorna un evento (objeto // {})
// propiedad target me devuelve toda la informacion del elemento que genero el evento
form.addEventListener('submit', function(e){ // definiendo funcion a ejecutar
    e.preventDefault(); // detiene el comportamiento habitual del elemento (submit = enviar los datos)
    console.log(e.target);

    /* let username = document.querySelector('#username');
    if(username.value === ''){
        username.focus();
    } */
    let hasError = false;

    let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,8}$/; // expresion regular Mayuscula, Minuscula, Numero y de 6 a 8 Caracteres

    let { username, password } = form;
    if(username.value === ''){
        username.classList.add('is-invalid');
        /* username.focus(); */
        hasError = true;
    }else {
        username.classList.remove('is-invalid');
        username.classList.add('is-valid');
    }
    
    /* if(password.value === '' || !regexPassword.test(password.value)){
        password.classList.add('is-invalid');
        //password.focus();
        hasError = true;
    } else {
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
    } */
    console.log(password.value.length);
    if(password.value === '' || parseInt(password.value.length) <= 6){
        password.classList.add('is-invalid');
        /* password.focus(); */
        hasError = true;
    } else {
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
    }

    if(!hasError){
        form.submit();
    }

})

function onSubmit(e){}
form.addEventListener('submit', onSubmit); // llamando a funcion externa a ejecutar


form.addEventListener('submit', function(e){ // definiendo funcion y llamando a la funcion externa a ejecutar
    onSubmit(e);
})