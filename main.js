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
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if (tamanhoSenha>1){
        //tamanhosenha = tamanhosenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha
    gerasenha();
}
function aumentaTamanho() {
    if (tamanhoSenha < 20){
        //tamanhosenha = tamanhosenha+1;
        tamanhoSenha ++;
    }
    numeroSenha.textContent = tamanhoSenha;
    gerasenha();
}


for (i = 0; i< checkbox. length;i++){
    checkbox[i].onclick = gerasenha;
}

gerasenha() ;

function gerasenha() {
    let alfabeto = '';
    if (checkbox[0].checked) {
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked) {
        alfabeto = alfabeto + letraMinuscula
    }
    if (checkbox[2].checked){
    }
    if (checkbox[3].checked){
        alfabeto = alfabeto + simbolos;
    }
    let senha = '';
    for(let i = 0; i < tamanhoSenha; 1++) {
        let numeroAleatorio = Math.rondom()* alfabeto.length;
        numeroAleatorio = math.floor(numeroAleatorio);

    } 
    campoSenha.value = senha;
    classificasenha(alfabeto.length);

}

function classificasenha(tamanhoalfabeto){
    let entropia = tamanhoSenha * math.log2(tamanhoalfabeto);
    console.log(entropia);
    forcaSenha.classList.remove('fraca', 'media','forte');
    if (entropia > 57){
        forcaSenha.classList.add ('forte');
    } else if (entropia> 35 && entropia < 57) {
        forcaSenha.classList.add('media');
    } else if (entropia <= 35){
        forcaSenha.classList.add('fraca');
    }
    const valorEntropia = document.queryselector ('.entropia');
    valorEntropia.textContent = "um computador pode levar até" + math.floor(2**entropia/(100e6*60*60*24)) + "dias para descobrir essa senha.";
}