var nasc = 2009;
let nome  = "pedrina";
const viva = true;

function calcIdade(ano=2026){
    let idade  = ano - nasc;
    alert (`dentro de função - idade ${idade}`);
    return idade;
}

calcIdade();
alert (`fora da funcao  :  idade ${idade}`);
alert(`fora da funcao  : chamando calcIdade ${calcIdade(2027)}`)
alert(`fora da funcao  : chamando calcIdade ${calcIdade(2028)}`)