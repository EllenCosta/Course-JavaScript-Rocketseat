// Referenciando a div
var divApp = document.querySelector('#app');
// Criando um input
var inputElement = document.createElement('input');
// Input com tipo text
inputElement.setAttribute('type','text');
// Adicionando input na div
divApp.appendChild(inputElement);
// Criando botão
var btnElement = document.createElement('button');
// Criando texto do botão
var txtbtn = document.createTextNode('Adicionar');
// Adicionando texto dentro do botão
btnElement.appendChild(txtbtn);
// Adicionando botão dentro da div
divApp.appendChild(btnElement);
// Margem na esquerda do botão
btnElement.style.marginLeft = '15px';
// Criando a tag ul
var ulElement = document.createElement('ul');
// Adicionando ul na div
divApp.appendChild(ulElement)
// Função no botão 
btnElement.onclick = function() {
    // Recuperando valor do input
    var nome = inputElement.value;
    // Criando itens de lista (tag li)
    var liElement = document.createElement('li');
    // Todo item de lista terá o texto capitalizado.
    liElement.style.textTransform = 'capitalize';
    // Cada input será um item
    var txtli = document.createTextNode(nome);
    // Adicionando o texto na tag li
    liElement.appendChild(txtli);
    // Adicionando o li dentro da ul
    ulElement.appendChild(liElement);
    // Limpando o input
    inputElement.value = "";
    // Focando no input
    inputElement.focus();
}