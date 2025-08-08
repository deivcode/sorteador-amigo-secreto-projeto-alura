 
 let amigos = [];


 function adicionarAmigo(){
    let nome = document.getElementById("amigo").value
    amigos.push(nome);
    document.getElementById("amigo").value = "";
    console.log(amigos);
    atualizarLista()

 }

 //adiciona os amigos embaixo ali para vermos
 function atualizarLista(){
    let lista= document.getElementById("listaAmigos");
    lista.innerHTML= "";
    amigos.forEach(function(nome){
     let item = document.createElement("li");
      item.textContent = nome;
      lista.appendChild(item);

    })
 }

// agora ele tem que pegar esses nomes embaralhar e fazer duplas , como faremos ? ainda nao sei kkk
function embaralhar(lista) {
  for (let i = lista.length - 1; i > 0; i--) {
    // Sorteia um índice aleatório
    const j = Math.floor(Math.random() * (i + 1));
    // Troca os elementos de lugar
    [lista[i], lista[j]] = [lista[j], lista[i]];
  }
}

function sortearAmigo() {
    // Primeiro, chamamos a função para embaralhar a nossa lista de amigos
    embaralhar(amigos);

    // Pegamos o elemento da tela onde vamos mostrar o resultado
    let listaSorteio = document.getElementById("listaAmigos");
    listaSorteio.innerHTML = ""; // Limpa qualquer sorteio anterior

    // Agora, percorremos a lista JÁ EMBARALHADA para formar as duplas
    // Note que corrigi de 'nomes.length' para 'amigos.length'
    for (let i = 0; i < amigos.length; i += 2) {
        const pessoa1 = amigos[i];
        
        // Verifica se existe uma segunda pessoa para formar a dupla
        if (i + 1 < amigos.length) {
            const pessoa2 = amigos[i + 1];
            // Cria um item de lista e adiciona na tela
            let item = document.createElement("li");
            item.textContent = `${pessoa1} e ${pessoa2}`;
            listaSorteio.appendChild(item);
        } else {
            // Se sobrou alguém, também mostra na tela
            let item = document.createElement("li");
            item.textContent = `${pessoa1} (sobrou)`;
            listaSorteio.appendChild(item);
        }
    }
}