// Referenciando div caixa →
var caixa = document.querySelector('.caixa');
// Estilizando
caixa.style.width = '100px';
caixa.style.height = '100px';
caixa.style.backgroundColor = '#f00';
caixa.style.border = '3px solid #000';

// Função ao passar o mouse
caixa.onmouseover = function() {
    caixa.style.backgroundColor = getRandomColor()
    caixa.style.border = '3px solid' + getRandomColor();
}

// Função ao retirar o mouse
caixa.onmouseout = function() {
    caixa.style.backgroundColor = getRandomColor()
    caixa.style.border = '3px solid' + getRandomColor();
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}