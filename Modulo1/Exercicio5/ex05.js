//Adicionando sexo
var usuarios = [
    {
        nome: "Diego",
        sexo: "M",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        sexo: "M",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    },
    {
        nome: "Ellen",
        sexo: "F",
        habilidades: ["HTML e CSS", "PHP", "Python", "Javascript"]
    }
];
function msg(usuarios) {
    for (i of usuarios) {
        if(i.sexo == 'F') { // Se o sexo for F → o artigo definido será A
            var art = 'A'
        } else { // Caso contrário → será O
            var art = 'O'
        }
        console.log(`${art} ${i.nome} possui as habilidades: ${i.habilidades.join(', ')}`);
    }
}

msg(usuarios);
