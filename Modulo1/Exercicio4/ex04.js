function experiencia(anos) {
    switch(true) {
        case anos >= 0 && anos < 1:
            return 'Iniciante';
            
        case anos >= 1 && anos < 3:
            return 'Intermediário';
            
        case anos >= 3 && anos <= 6:
            return 'Avançado';
            
        default:
            return 'Jedi Master';
            
    }
}
var anosEstudo = 7;
console.log(experiencia(anosEstudo));