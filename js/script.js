//alert("Olá mundo")
//console.log("Só quem é Dev vai descobrir!")//Histórico de registro
let nome = document.querySelector("#nome")

function exibirNome(){
    console.log(nome.value)
    if(nome.value = ""){
        nome.style.border = "2px solid red"
}
else{
    nome.style.border = "2px solid green"
}
}
nome.addEventListener("blur",exibirNome)// o addEventListener cria um evento para algum elemento, no caso estamos utilizando o evento 'blur', que é quando o foco sai de um campo.

// nome.addEventListener("focus", function(){
//     nome.value = "Este campo não deve ficar vazio"
// })

