import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Suas configurações do Firebase
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO",
  appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Escuta o clique do botão diretamente pelo ID
document.getElementById('btnLogin').addEventListener('click', () => {
    const email = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    
    signInWithEmailAndPassword(auth, email, pass)
        .then(() => {
            window.location.href = "index.html";
        })
        .catch((error) => {
            alert("Erro ao entrar: " + error.message);
        });
});