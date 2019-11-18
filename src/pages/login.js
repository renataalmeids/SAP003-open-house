import Input from '../components/input.js'
import Button from '../components/button.js'
import Register from './register.js';
//Funcao para fazer login

const signIn = () => {
  const email = document.querySelector('.input-email').value;
  const password = document.querySelector('.input-password').value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location = '#home';
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/wrong-password') {
        document.querySelector('.error').textContent = 'Senha Incorreta';
      } else if (errorCode === 'auth/user-not-found') {
        document.querySelector('.error').textContent = 'Email não registrado!';
      } else if (errorCode === 'auth/invalid-email') {
        document.querySelector('.error').textContent = 'Formato de email inválido';
      }
    });
};

// Funcao ir pagina de registro - chamar no botao registar-se

const register = () => {
  window.location = '#Register';
}

const Login = () => {
  const template = `
  <main class="login-main">
  <section class= "login-section">
    <img class="login-logo" src="./images/logo.png" alt="logo autofalante escrito live In Sampa">
    <form class="login-form" class="form">
    ${Input({
      class: 'input-email',
      placeholder: 'Email',
      type:'email',
    })}
    ${Input({
      class: 'input-password',
      placeholder: 'Senha',
      type:'password',
    })}
    <div class="login-buttons">
    ${Button({
      class: 'button-login',
      title: 'Entrar',
      onClick: signIn,
    })}
    ${Button({
      class: 'button-register',
      title: 'Novo Cadastro',
      onClick: register,
    })}
    </div>
    <p class="error"></p>
    </form>
  </section>
  </main>
  `;

  return template;
};

export default Login;