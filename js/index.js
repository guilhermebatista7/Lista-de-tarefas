function adicionaTarefa() {
    let input = document.getElementById('tarefa').value;
    let lista = document.getElementById('tarefas_adicionadas');
    lista.innerHTML += '<div class="conteudo"><p><input type="checkbox"/>'+input+'<button id=deleta onclick="deletar()">Deletar</button></p></div>';
}