const button = document.getElementById('button');
const email = document.getElementById('email');
const senha =  document.getElementById('senha');

const validaLogin = () => {
    if (email === "tryber@teste.com" && senha === "123456") {
        window.alert = "Olá, Tryber!";
    } else {
        window.alert = "Email ou senha inválidos.";
    }
};

button.addEventListener('click', validaLogin());

validaLogin();