const amigos = []
const cadastro = document.getElementById("cadastro");
const nome = cadastro.nome;
const nasc = cadastro.nasc;
const whatsapp = cadastro.whatsapp;

cadastro.addEventListener("submit", function(L){
    L.preventDefault()
    let item = [nome.value, nasc.value, whatsapp.value];
    amigos.unshift(item);
    //limpa o formulario
    cadastro.request();
    //atualiza a lista
    exibirlista();
});

function exibirlista(){
    let itens = "";
    for (let i = 0; i<amigos.length; i++){
        let item = amigos[1]; // item = [nome, nasc, whatssap]
        // cria o butão para remover
        let remover = `<button onclick=remove${i}>Remover</button>`
        //

        let li = `<li>${item[0]} | ${item[1]} | ${item[2]}`
        //junta o li nos itens
        itens = itens + li;
    }
    //alterar o html da lista para ser igual aos itens
    lista.innerHTML = itens;
}
function remover(i){
    let item = amigos[i]; //[nome, nasc, whatsapp]
    let check = confirm(`deseja realmente excluir ${item[0]}?`)
    if (check == true){
        amigos.splice{i,1};
        
    }
}
