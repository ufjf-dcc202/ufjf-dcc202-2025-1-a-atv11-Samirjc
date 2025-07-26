import { getLista, limpaLista, adicionaItemLista } from "./lista.js";

const olItens = document.querySelector('#itens');
const pEntrada = document.querySelector('#entrada');
const btnAdicionar = document.querySelector('#adicionar');
const btnLimpar = document.querySelector('#limpar');

atualizarLista();

function atualizarLista() {
    olItens.innerHTML = "";
    let lista = getLista();
    for(let i=0; i < lista.length; i++) {
        const li = document.createElement('li');
        li.textContent = lista[i];
        olItens.appendChild(li);
    }
}

function limparItensDaLista() {
    limpaLista();
    atualizarLista();
}

function adicionarItemNaLista() {
    const item = pEntrada.textContent;
    adicionaItemLista(item);
    atualizarLista();
}

btnLimpar.addEventListener('click', limparItensDaLista);
btnAdicionar.addEventListener('click', adicionarItemNaLista);
