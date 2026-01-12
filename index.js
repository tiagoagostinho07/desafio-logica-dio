const herois = [
    { nome: "Bob Esponja", xp: 999 },
    { nome: "Stars", xp: 1000 },
    { nome: "Thunder", xp: 5000 },
    { nome: "Brow", xp: 8500 },
    { nome: "Djow", xp: 12000 }
];

// Laço de repetição
for (let i = 0; i < herois.length; i++) {
    let nome = herois[i].nome;
    let xp = herois[i].xp;
    let nivel = "";


    if (xp < 1000) {
        nivel = 'Ferro'
    } else if (xp > 1000 && xp <= 2000) {
        nivel = 'Bronze'
    } else if (xp > 2000 && xp <= 5000) {
        nivel = 'Prata'
    } else if (xp > 5000 && xp <= 7000) {
        nivel = 'Ouro'
    } else if (xp > 7000 && xp <= 8000) {
        nivel = 'Platina'
    } else if (xp > 8000 && xp <= 9000) {
        nivel = 'Ascendente'
    } else if (xp > 9000 && xp <= 10000) {
        nivel = 'Imortal'
    } else if (xp >= 10001) {
        nivel = 'Radiante'
    } else {
        nivel = 'Indefinido'
    }

    console.log("O Herói de nome " + nome + " está no nível de " + nivel)
}