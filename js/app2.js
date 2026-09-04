let dia = prompt("Digite um dia da semana\n 1 - Domingo\n 2 - Segunda-feira\n 3 - Terça-feira\n 4 - Quarta-feira\n 5 - Quinta-feira\n 6 - Sexta-feira\n 7 - Sábado");
dia = Number(dia);  

if (dia <=0 || dia >=8){
    alert("Dia inválido");
}else if(dia == 1){
    alert("Domingo");
}else if(dia == 2){
    alert("Segunda-feira");
}else if(dia == 3){
    alert("Terça-feira");
}else if(dia == 4){
    alert("Quarta-feira");
}else if(dia == 5){
    alert("Quinta-feira");
}else if(dia == 6){
    alert("Sexta-feira");
}else if(dia == 7){
    alert("Sábado");
}else{
    alert("Dia inválido");
}