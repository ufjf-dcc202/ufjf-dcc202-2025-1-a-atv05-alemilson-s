const tabuleiro = ['branco', 'branco', 'branco', '', 'preto', 'preto', 'preto'];
let selecionado = null;

export function getTabuleiro() {
    return [...tabuleiro];
}

export function selciona(posicao) {
    if (selecionado == null) {      
        if (!validaSelecaoOrigem(posicao)) {
            console.log(`Seleção inválida na posição: ${posicao}`);
            return;
        }
        selecionado = posicao;
        console.log(`Disco selecionado na posição: ${posicao}`);
    } else {            
        if (!validaSelecaoDestino(posicao)) {
            console.log(`Seleção inválida na posição: ${posicao}`);
            return;
        }
        if (posicao === selecionado) {
            console.log(`Disco na posição ${posicao} já está selecionado.`);
            selecionado = null; 
            return;
        }
        mover(selecionado, posicao);
        console.log(`Disco movido de ${selecionado} para ${posicao}`);
        selecionado = null; 
    }
}

function mover(origem, destino) {
    if (!validaMovimento(origem, destino)){
        console.error("Movimento inválido");
        return;
    }   

    tabuleiro[destino] = tabuleiro[origem];
    tabuleiro[origem] = '';
}

function validaMovimento(origem, destino) {
    if (origem < 0 || origem >= tabuleiro.length || destino < 0 || destino >= tabuleiro.length) return false; 
    if (tabuleiro[origem] === '' || tabuleiro[destino] !== '') return false; 
    return true; 
}

function validaSelecaoOrigem(posicao) {
    if (posicao < 0 || posicao >= tabuleiro.length) return false; 
    if (tabuleiro[posicao] === '') return false; 
    return true;
}
function validaSelecaoDestino(posicao) {
    if (posicao < 0 || posicao >= tabuleiro.length) return false;
    if (tabuleiro[posicao] !== '') return false; 
    return true;
}