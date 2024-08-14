var textInput = document.querySelector("#input-texto");
var textOutput = document.querySelector("#conteudo-mensagem");

function criptografar() {
    var texto = textInput.value;
    var resultadoCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    document.getElementById('conteudo-mensagem').innerHTML = '<textarea readonly id="output-texto">' + resultadoCripto + '</textarea>' + '<button class="button-group" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar() {
    var texto = textInput.value;
    var resultadoDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById('conteudo-mensagem').innerHTML = '<textarea readonly id="output-texto">' + resultadoDescripto +
        '</textarea>' + '<button class="button-group" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
    var textoCop = document.querySelector("#output-texto");
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
    resetarCampos();
}

function resetarCampos() {
    textInput.value = "";
    textOutput.innerHTML = '<img src="/assets/High quality products 1 1.svg" alt="imagem ilustrativa da mensagem" class="conteudo__mensagem__img">' + '<h2>Nenhuma mensagem encontrada</h2>' + '<p>Insira uma mensagem para criptografar ou descriptografar.</p>';
}