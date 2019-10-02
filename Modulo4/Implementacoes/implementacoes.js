// referenciar div
var divApp = document.querySelector('#app');
// criar input
var campo = document.createElement('input');
// tipo texto
campo.setAttribute('type','text');
// nome user
campo.setAttribute('name','user');
// adicionando campo na div
divApp.appendChild(campo);
// criar botão
var btn = document.createElement('button');
// texto do botão
var txtbtn = document.createTextNode('Adicionar');
// posicionar texto no botão
btn.appendChild(txtbtn);
// adicionar botão na div
divApp.appendChild(btn);
// margem da esquerda de 5px
btn.style.marginLeft = '5px';
// criar tabela
var tb = document.createElement('table');
// adicionar tabela na div
divApp.appendChild(tb);
// margem do topo de 5px
tb.style.marginTop = '5px';
// declarar vaiável nome
var nome = ''; 
// função no botão
btn.onclick = function() {
    // capturar valor digitado no campo
    var usuario = campo.value;
    // chamar função carregando
    carregando();
    // pegar a url da api com a biblioteca axio
    axios.get(`https://api.github.com/users/${usuario}/repos`)
        .then(function(response) {
            // nome do dono do repositório
            nome = response.data[0].owner.login;
            // chamar função para buscar dados
            busca(response.data);
            // limpar campo
            campo.value = '';
            // focar no campo
            campo.focus();
        })
        .catch(function(error) {
            // chamar função para alertar erro
            erroBusca();
            // limpar campo
            campo.value = '';
            // focar no campo
            campo.focus();
        });
}

//função carregando
function carregando() {
    //limpar tabela
    tb.innerHTML = '';
    // adicionando gif de carregamento
    tb.innerHTML = '<img src="https://media1.tenor.com/images/8ac12962c05648c55ca85771f4a69b2d/tenor.gif" width="100px" height="100px"/>'
}

//função erro
function erroBusca() {
    // limpar tabela
    tb.innerHTML = '';
    // criar div
    var div = document.createElement('div');
    // estilizando div → largura
    div.style.width = '170px';
    // estilizando div → espaçamento interno
    div.style.padding = '10px';
    // estilizando div → sombra
    div.style.boxShadow = '5px 3px 18px #c10c0c';
    // adicionar div na tabela
    tb.appendChild(div);
    // capturar valor digitado no campo
    usuario = campo.value;
    var erro = !usuario ? "Campo Obrigatório" : "Repositório Inexistente";
    // criar parágrafo
    var p = document.createElement('p');
    // margem automática
    p.style.margin = 'auto';
    // texto do parágrafo
    var txt = document.createTextNode(erro);
    // posicionando texto no parágrafo
    p.appendChild(txt);
    // adicionando parágrafo na div
    div.appendChild(p);
}

// função busca
function busca(repositorio) {
    // limpar tabela
    tb.innerHTML = '';
    // criar caption para tabela
    var cap = document.createElement('caption');
    // texto do caption → nome do dono do repositório
    var txtcap = document.createTextNode(nome);
    // posicionar texto dentro do caption
    cap.appendChild(txtcap);
    // adicionar cap dentro da tabela
    tb.appendChild(cap);
    // laço for → criar uma nova linha a cada 3 colunas
    for (i = 0; i < repositorio.length; i++) {
        if(i % 3 == 0) {
            // inserindo linha e direcionando para nova posição
            var linha = tb.insertRow(-1);
        }
        // inserir células na linha e direcionar nova posição
        var celula = linha.insertCell(-1);
        // criando a tag a (link)
        var a = document.createElement('a');
        // texto do link → nome do repositório
        var txta = document.createTextNode(repositorio[i].name);
        // adicionando o link
        a.setAttribute('href',`https://github.com/${nome}/${repositorio[i].name}`);
        // título do link
        a.setAttribute('title',`Repositório ${repositorio[i].name} de ${nome}`);
        // abrir link em nova página
        a.setAttribute('target','_blank');
        // adicionando texto no link
        a.appendChild(txta);
        // adicionando link na célula
        celula.appendChild(a);
    }
}