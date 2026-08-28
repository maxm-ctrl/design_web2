let nasc= prompt("Digite o ano do seu nascimento: ");
nasc = parseInt(nasc);

let fds = confirm("final de semana?");
let idade = 2026 - nasc;

alert (`você é maior de idade: ${idade >= 18}`)
alert (`é final de semana: ${fds}`)

if (idade >= 18 && fds) {
    alert("Pode tomar uma");
}else if (idade >= 18 && !fds) {
    alert("Não vai n");
}