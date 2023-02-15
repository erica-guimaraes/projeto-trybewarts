const button = document.getElementById('button');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btnEnviar = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');

const validaLogin = (event) => {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
};
button.addEventListener('click', validaLogin);

const habilite = () => {
  btnEnviar.disabled = !checkbox.checked;
};
checkbox.addEventListener('change', habilite);
