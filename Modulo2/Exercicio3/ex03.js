// Criando vetor com os nomes
var nomes = ["Diego", "Gabriel", "Lucas","Tasha", "Kate","Ellen"];
// Referenciando a div
var divApp = document.querySelector('#app');
// Criando a tag ul
var ulElement = document.createElement('ul');
// Adicionando a tag dentro da div
divApp.appendChild(ulElement);
// Percorrendo os valores do vetor
for (nome of nomes) {
    // Criando a tag li
    var liElement = document.createElement('li');
    // Capturando cada nome percorrido no vetor
    var litxt = document.createTextNode(nome);
    // Adicionando cada nome em cada li
    liElement.appendChild(litxt);
    // Adicionando cada li dentro da ul
    ulElement.appendChild(liElement);
}