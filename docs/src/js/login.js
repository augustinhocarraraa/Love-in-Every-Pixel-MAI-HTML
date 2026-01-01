// 1. Aqui a gente chama o Firebase para o seu site
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

  // 2. AQUI VOCÊ COLA AS SUAS INFORMAÇÕES DO PASSO 1
  const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_PROJETO.firebaseapp.com",
    projectId: "SEU_PROJETO",
    storageBucket: "SEU_PROJETO.appspot.com",
    messagingSenderId: "ID",
    appId: "APP_ID"
  };

  // 3. Inicializa o segurança (Firebase)
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // 4. Quando clicar no botão, ele tenta entrar
  document.getElementById('btnLogin').addEventListener('click', () => {
    const email = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    const erroMsg = document.getElementById('erro');

    signInWithEmailAndPassword(auth, email, pass)
      .then(() => {
        // Se deu certo, ele abre a porta (mural)
        window.location.href = "index.html";
      })
      .catch((error) => {
        // Se deu errado (senha errada), ele avisa
        erroMsg.style.display = "block";
        erroMsg.innerText = "E-mail ou senha errados! ❤️";
      });
  });