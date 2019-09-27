// Referenciando a div →
var divApp = document.querySelector('#app');
// Criando o botão →
var btn = document.createElement('button');
// Criando o texto do botão →
var txt = document.createTextNode('Add Box');
// Adicionando o texto dentro do botão →
btn.appendChild(txt);
// Adicionadno o botão dentro da div →
divApp.appendChild(btn);
//Função no botão
btn.onclick = function() {
    var div = document.createElement('div');
    div.setAttribute('class','caixa');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.backgroundColor = '#f00';
    div.style.border = '3px solid black';
    div.style.marginTop = '20px';
    div.style.marginLeft = '20px';
    div.style.float = 'right';
    divApp.appendChild(div);
}