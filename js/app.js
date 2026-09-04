let num = Number(prompt("Digite um número: "));

if (num % 2 != 0){
    alert(`${num} é ímpar`);
}else if(num == 0){
    alert(`${num} é ZERO!`);
}else{
    alert(`${num} é par`);
}