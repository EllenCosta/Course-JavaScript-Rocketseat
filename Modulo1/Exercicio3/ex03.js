function temHabilidade(skills) {
    if (skills.indexOf('JavaScript') != -1) {
        console.log(true);
    } else {
        console.log(false);
    }
}
var skills = ['JavaScript', 'ReactJS', 'React Native'];
temHabilidade(skills);