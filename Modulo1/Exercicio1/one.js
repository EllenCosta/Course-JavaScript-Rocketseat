var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};
    
function frase(endereco) {
    return `O usuário mora em ${endereco.cidade} / ${endereco.uf}, `+
    `no bairro ${endereco.bairro}, na rua "${endereco.rua}" ` +
    `com o número ${endereco.numero}`
}
    
console.log(frase(endereco))