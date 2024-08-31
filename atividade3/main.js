let ListaViagem = ["Brasil","Noruega", "Italia"]

let Usuario = prompt("qual seu nome?")
const Opcoes = `Selecione uma opção ${Usuario}
1-Adicionar
2-Remover
3-Listar
4-Mostrar
5-Sair`;
let resposta = window.prompt(Opcoes);


while(resposta !== '4' && resposta !== '5'){
    

if(resposta === '1'){
    let novoLugar = prompt("Adicione um Lugar?");
    ListaViagem.push(novoLugar);
    alert("Lugar Adicionado! "+ ListaViagem.join(" , "))
    console.log(ListaViagem.join(" , "));
    resposta = window.prompt(Opcoes);

}else if(resposta === '2'){
   let lugarRemover = prompt("Qual lugar deseja remover?" + ListaViagem.join(" , "));
        const index = ListaViagem.indexOf(lugarRemover);
        if (index > -1) {
            ListaViagem.splice(index, 1);
            alert("Lugar Removido! " + ListaViagem.join(" , "));
            console.log(ListaViagem.join(" , "));
        } else {
            alert("Lugar não encontrado na lista.");}
            resposta = window.prompt(Opcoes);
}
else if(resposta === '3'){
    alert(ListaViagem.join(" , "))
    resposta = window.prompt(Opcoes);
}}

 if(resposta === '4'){
    let lista = document.getElementById("lista");
    lista.textContent = ListaViagem.join(` , `);
    alert("Lista mostrada no HTML.");
  
}
else if(resposta ==='5'){
//sair
window.location.reload();

}else{
    alert("Aqui não é a casa da mãe Joana!")
};

