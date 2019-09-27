// Referenciando a div →
var divApp = document.querySelector('#app');
// Criando o botão →
var btn = document.createElement('button');
// Criando o texto do botão →
var txt = document.createTextNode('Caixa');
// Adicionando o texto dentro do botão →
btn.appendChild(txt);
// Adicionando o botão dentro da div →
divApp.appendChild(btn);
// Função no botão
btn.onclick = function() {
    var div = document.createElement('div');
    div.setAttribute('class','caixa');
    div.style.width = '100px';
    div.style.height = '100px'
    div.style.backgroundColor = getRandomColor();
    div.style.border = '3px solid' + getRandomColor(); // Mudando as cores da borda
    div.style.marginTop = '10px';
    div.style.marginLeft = '10px';
    div.style.float = 'right';
    divApp.appendChild(div);
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}