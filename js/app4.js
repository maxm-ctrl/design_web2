let vezes = Number(prompt("Digite a quantidade de vezes"));
for (let i = 1; i <= vezes; i++){
    if (vezes > 100){
        alert("Valor invalido, regidite um valor menor que 100");
        break;
    }
    alert(`Contei ${i} vezes`);
    if (i%2!=0){
        continue;
    }
    alert (`${i} é par`);
}