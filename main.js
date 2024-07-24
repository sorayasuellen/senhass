const numeroSenha = document.querySelector(',parametro-senha_texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letraMinuscula = 'abcdefghijklnopqrstuvwxyz'
const numeros = '123456789'
const simbolos = '!@%?';
const botoes = document.querySelectorAll('.parametro-senha_botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho