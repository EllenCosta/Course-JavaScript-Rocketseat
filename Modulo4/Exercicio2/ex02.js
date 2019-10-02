// referenciar div
var divApp = document.querySelector('#app');
// criar input
var campo = document.createElement('input');
// tipo texto
campo.setAttribute('type', 'text');
// name user
campo.setAttribute('name', 'user');
// adicionando campo na div
divApp.appendChild(campo);
// criar botão
var btn = document.createElement('button');
// texto do botão
var txtbnt = document.createTextNode('Adicionar');
// posicionando texto dentro do botão
btn.appendChild(txtbnt);
// adicionando botão na div
divApp.appendChild(btn);
// margem da esquerda de 5px
btn.style.marginLeft = '5px';
// criando lista não ordenada (ul)
var ul = document.createElement('ul');
// adicionando ul na div
divApp.appendChild(ul);
btn.onclick = function() {
    // prgando valor ddigitado no campo
    var usuario = campo.value;
    // pegar a url da api com a biblioteca axio
    axios.get(`https://api.github.com/users/${usuario}/repos`)
        .then(function(response) {
            // capturando os repositórios
            busca(response.data);
            // limpando o campo
            campo.value = '';
            // focando no campo
            campo.focus();
        })
        .catch(function(error) {
            // alertando erro
            alert('Erro na busca');
            // limpando o campo
            campo.value = '';
            // focando no campo
            campo.focus();
        });
}

// criando a função para preencher os itens da lista
function busca(repositorio) {
    // limpando o interior da lista
    ul.innerHTML = '';
    // percorrer os dados (para cada item do dado)
    for (repos of repositorio) {
        // criando itens de lista (li)
        var li = document.createElement('li');
        // texto do item → nomes de cada repositório (na api é referenciado por 'name')
        var txtli = document.createTextNode(repos.name);
        // posicionar texto dentro do li
        li.appendChild(txtli);
        // adicionando li dentro da ul
        ul.appendChild(li);
        // colocando divisória
        var hr = document.createElement('hr');
        ul.appendChild(hr);
    }
}