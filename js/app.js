let nasc = prompt("Digite o ano do seu nascimento: ");
nasc = parseInt(nasc);

let  viva = confirm("Você está vivo?");

if (viva) {
    alert(`Você tem ${2026- nasc} anos de idade.`);
}else{
    alert("Que pena! Você não está mais entre nós.");
}