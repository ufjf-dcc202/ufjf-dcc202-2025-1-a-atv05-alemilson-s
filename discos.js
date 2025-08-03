const tabuleiro = ['branco', 'branco', 'branco', '', 'preto', 'preto', 'preto'];
let selecionado = null;

export function getTabuleiro() {
    return [...tabuleiro];
}

export function selciona(posicao) {
    if (selecionado == null) {      // Se nenhum disco está selecionado
        if (!validaSelecaoOrigem(posicao)) {
            console.log(`Seleção inválida na posição: ${posicao}`);
            return;
        }
        selecionado = posicao;
        console.log(`Disco selecionado na posição: ${posicao}`);
    } else {            // Se já existe um disco selecionado
        if (!validaSelecaoDestino(posicao)) {
            console.log(`Seleção inválida na posição: ${posicao}`);
            return;
        }
        if (posicao === selecionado) {
            console.log(`Disco na posição ${posicao} já está selecionado.`);
            selecionado = null; // Deseleciona o disco
            return;
        }
        mover(selecionado, posicao);
        console.log(`Disco movido de ${selecionado} para ${posicao}`);
        selecionado = null; // Reseta a seleção após o movimento
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
    if (origem < 0 || origem >= tabuleiro.length || destino < 0 || destino >= tabuleiro.length) return false; // Verifica se as posições estão dentro do tabuleiro
    if (tabuleiro[origem] === '' || tabuleiro[destino] !== '') return false; // Verifica se a origem está vazia ou se o destino já tem um disco
    return true; 
}

function validaSelecaoOrigem(posicao) {
    if (posicao < 0 || posicao >= tabuleiro.length) return false; // Verifica se a posição está dentro do tabuleiro
    if (tabuleiro[posicao] === '') return false; // Verifica se a posição selecionada tem um disco
    return true;
}
function validaSelecaoDestino(posicao) {
    if (posicao < 0 || posicao >= tabuleiro.length) return false; // Verifica se a posição está dentro do tabuleiro
    if (tabuleiro[posicao] !== '') return false; // Verifica se a posição selecionada já tem um disco
    return true;
}