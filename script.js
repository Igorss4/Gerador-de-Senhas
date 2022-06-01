
let slider = document.querySelector("#slider");
let button = document.querySelector("#button");

let tamanhoSenha = document.querySelector("#valor");
let senha = document.querySelector("#senha");

let containerSenha = document.querySelector("#container-senha");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!";
let novaSenha = "";

tamanhoSenha.innerHTML = slider.value;

slider.oninput = function () {
    tamanhoSenha.innerHTML = this.value;
}

function gerarSenha() {
    let pass = "";
    for (let i = 0, n = charset.length; i < slider.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerSenha.style.opacity = '1';
    senha.innerHTML = pass;
    novaSenha = pass;
}

function copiarSenha() {
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(novaSenha)
}