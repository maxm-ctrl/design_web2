let hoje = new Date();

const cadastro = document.getElementById("Cadastro")
const nome = cadastro.nome;

const saudacao = document.getElementById("Saudacao")

cadastro.addEventListener("submit",function(e){
    e.preventDefault();
    let data_aniv = new Data(2026,this.namespaceURI.value.getMonth(), this.namespaceURI.value.getDate());
    let data_fortada = `${hoje.getDate()}/${hoje.getMonth()+1}/${hoje.getFullYear()}`;
    saudacao.innerHTML = `Olá, ${nome.value}! Hoje é ${data_fortada}`;
    cadastro.reset();
});