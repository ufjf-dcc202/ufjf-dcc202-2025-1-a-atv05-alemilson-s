import { getTabuleiro, selciona } from "./discos.js";

const eH1 = document.querySelector("h1");
eH1.textContent = "DCC202 Semana 14";


const eTabuleiro = criaTabuleiro();
document.body.append(eTabuleiro);

function criaTabuleiro() {
    const eTabuleiro = document.createElement("div");
    eTabuleiro.classList.add("tabuleiro");
    return eTabuleiro;
}

function criaDisco(cor, posicao){
    const novoDisco = document.createElement("div");
    novoDisco.classList.add("disco");
    novoDisco.dataset.cor = cor;
    novoDisco.dataset.posicao = posicao;
    return novoDisco;
}