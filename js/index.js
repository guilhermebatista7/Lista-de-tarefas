function adicionaTarefa() {
    let input = document.getElementById('tarefa').value;
    let lista = document.getElementById('tarefas_adicionadas');
    let novoItem = document.createElement('div');
    novoItem.className = 'conteudo';
    novoItem.innerHTML = '<p id="item_lista"><input type="checkbox"/>'+input+'<button onclick="deletar(this)" style="margin-left: 7px;">Deletar</button></p>';
    lista.appendChild(novoItem);
}

function deletar(elementoDeleta) {
    let conteudo = elementoDeleta.parentNode.parentNode;
    conteudo.parentNode.removeChild(conteudo);
}