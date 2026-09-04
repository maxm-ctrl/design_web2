let dia = prompt("Digite um dia da semana\n 1 - Domingo\n 2 - Segunda-feira\n 3 - Terça-feira\n 4 - Quarta-feira\n 5 - Quinta-feira\n 6 - Sexta-feira\n 7 - Sábado");
dia = Number(dia);
switch(dia){
    case 1: alert("você escolheu Domingo");
        break;
    case 2: alert("você escolheu Segunda-feira");
        break;
    case 3: alert("você escolheu Terça-feira");
        break;
    case 4: alert("você escolheu Quarta-feira");
        break;
    case 5: alert("você escolheu Quinta-feira");
        break;
    case 6: alert("você escolheu Sexta-feira");
        break;
    case 7: alert("você escolheu Sábado");
        break;
    default: alert("Opção inválida");
}