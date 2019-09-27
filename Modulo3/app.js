//Referenciar a div App
var divApp = document.querySelector('#app');
//Criar a lista não-ordenada (ul)
var ulElement = document.createElement('ul');
//Adicionar ul na div
divApp.appendChild(ulElement);
//Criar campo de digitação
var campoElement = document.createElement('input');
//Adicionar atributo → campo do tipo texto
campoElement.setAttribute('type', 'text');
//Adicionar atributo → placeholder
campoElement.setAttribute('placeholder', 'Adicione um item');
//Adicionar campo na div
divApp.appendChild(campoElement);
//Criar botão
var btnElement = document.createElement('button');
//Criar texto do botão
var txtbtn = document.createTextNode('ADD');
//Posicionar texto dentro do botão
btnElement.appendChild(txtbtn);
//Adicionar botão na div
divApp.appendChild(btnElement);
//Margem de 5px no lado esquerdo
btnElement.style.marginLeft = '5px';

/*
//Armazenar lista / itens (apenas strings) → Array
var lista = [
    'Fazer compras',
    'Planejar Viagem',
    'Arrumar Mala'
];*/

//Usando o Storage e convertendo o JSON
var lista = JSON.parse(localStorage.getItem('lista')) || 
['Fazer compras', 
'Planejar Viagem', 
'Arrumar Mala'];

//Função para renderizar os itens e mostrar em tela
function render() {
    //innerHtml → tudo que estiver dentro
    //Apagando toda vez antes de exibir novamente
    ulElement.innerHTML = '';
    //Percorrendo cada item da lista
    for (opc of lista) {
        //Criando a tag li
        var liElement = document.createElement('li');
        //Texto do li com cada item percorrido → um a um 
        var txtli = document.createTextNode(opc + ' → ');
        //Posicionar texto dentro da tag li
        liElement.appendChild(txtli);
        //Criar a tag link
        var aElement = document.createElement('a');
        //Criar atributo do link
        aElement.setAttribute('href','#');
        //Criar texto do link
        var txtlink = document.createTextNode('Excluir');
        //Posicionar dentro da tag link
        aElement.appendChild(txtlink);
        //Adicionar link dentro do li
        liElement.appendChild(aElement);
        //Remover decoração do link
        aElement.style.textDecoration = 'none';
        //Cursor de hand → pointer
        aElement.style.cursor = 'pointer';
        //Posição do item no array pelo index
        var pos = lista.indexOf(opc);
        aElement.setAttribute('onclick', 'remove('+pos+')');
        //Adicionar o li dentro da ul
        ulElement.appendChild(liElement);
    }
}
//Exibindo os itens em tela
render();

//Ao clicar no botão ativar a função add (adicionar)
btnElement.onclick = function add() {
    //Recuperando o valor digitado no campo
    var digitado = campoElement.value;
    //Adicionando o valor no fim da lista
    lista.push(digitado);
    //Limpar o campo
    campoElement.value = '';
    //Focar no campo
    campoElement.focus();
    //Exibir na tela a alteração
    render();
    //Chamando a função storage → função que altera
    storage();
}

//Passar a posição do item para a função excluir
function remove(pos) {
    //array.splice(index, howmany, item1, ..., itemX);
    //(...items to be add or removed)
    //(2,2) → (at position 2, remove 2 items)
    lista.splice(pos,1);
    //Exibir na tela a alteraçãp
    render();
    //Chamando a função storage → função que altera
    storage();
}

//Usando local storage → 
//Armazenar dados para não serem apagados ao fechar o navegador
//Pegar itens da lista e salvar no storage com a function
function storage() {
    //('Key', 'value') → ('qualquer váriavel', 'valor a ser armazenado')
    //Não grava vetores → converter em string
    localStorage.setItem('lista', JSON.stringify(lista));
}