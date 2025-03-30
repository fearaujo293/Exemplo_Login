const carrossel = document.querySelector('.carrossel');
const btnAnterior = document.querySelector('.anterior');
const btnProximo = document.querySelector('.proximo');

let indiceAtual = 0;

btnProximo.addEventListener('click', () => {
    if (indiceAtual < carrossel.children.length - 1) {
        indiceAtual++;
    } else {
        indiceAtual = 0; 
    }
    console.log("Próximo: Índice atual =", indiceAtual); 
    atualizarCarrossel();
});

btnAnterior.addEventListener('click', () => {
    if (indiceAtual > 0) {
        indiceAtual--;
    } else {
        indiceAtual = carrossel.children.length - 1; 
    }
    console.log("Anterior: Índice atual =", indiceAtual); 
    atualizarCarrossel();
});

function atualizarCarrossel() {
    const offset = -indiceAtual * 100;
    carrossel.style.transform = `translateX(${offset}%)`;
    console.log("Transformação aplicada:", carrossel.style.transform);
}

const loginModal = document.getElementById("loginModal");
const cadastroModal = document.getElementById("cadastroModal");
const loginButton = document.querySelector(".auth .button:first-child");
const cadastreButton = document.querySelector(".auth .button:last-child");
const closeButtons = document.querySelectorAll(".close");

loginButton.addEventListener("click", (e) => {
    e.preventDefault(); 
    loginModal.style.display = "block";
});

cadastreButton.addEventListener("click", (e) => {
    e.preventDefault(); 
    cadastroModal.style.display = "block";
});

closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        loginModal.style.display = "none";
        cadastroModal.style.display = "none";
    });
});

window.addEventListener("click", (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target === cadastroModal) {
        cadastroModal.style.display = "none";
    }
});

function enviarDados(tipo) {
    const email = document.getElementById(tipo + "Email").value;
    const senha = document.getElementById(tipo + "Senha").value;

    fetch(`http://localhost:8080/api/usuario/${tipo}`, {
        method: "POST", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.mensagem);
        if (data.sucesso) {
            loginModal.style.display = "none";
            cadastroModal.style.display = "none";
        }
    })
    .catch(error => console.error("Erro ao enviar dados:", error));
}

document.getElementById("loginSubmit").onclick = () => enviarDados("login");
document.getElementById("cadastroSubmit").onclick = () => enviarDados("cadastro");
