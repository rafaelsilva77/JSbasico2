/* Eventos de Mouse
onclick: Ocorre quando o usuário clica em um elemento HTML.
ondblclick: Ocorre em um clique duplo do mouse em um elemento.
onmousedown: Ocorre quando um botão do mouse é pressionado sobre um elemento.
onmouseup: Ocorre quando um botão do mouse é liberado sobre um elemento.
onmouseover: Ocorre quando o ponteiro do mouse se move sobre um elemento ou seus descendentes.
onmouseout: Ocorre quando o ponteiro do mouse se move para fora de um elemento e de todos os seus descendentes.
onmousemove: Ocorre quando o ponteiro do mouse está se movendo enquanto está sobre um elemento.
onmouseenter: Ocorre quando o ponteiro do mouse entra no elemento (diferente de onmouseover por não disparar em descendentes).
onmouseleave: Ocorre quando o ponteiro do mouse sai do elemento (diferente de onmouseout por não disparar em descendentes).

Eventos de Formulário
onsubmit: Ocorre quando um formulário é enviado.
onchange: Ocorre quando o valor de um elemento de entrada (input, select, ou textarea) é alterado.
onfocus: Ocorre quando um elemento (como um campo de formulário) ganha foco.
onblur: Ocorre quando um elemento perde o foco.
oninput: Ocorre quando um elemento recebe entrada do usuário.
oninvalid: Ocorre quando um elemento é inválido.
onreset: Ocorre quando um formulário é redefinido.

Eventos de Carregamento/Janela
onload: Ocorre quando um objeto (como uma imagem ou a página inteira) termina de carregar.
onunload: Ocorre quando um documento ou recurso filho está sendo descarregado.
onresize: Ocorre quando a janela do navegador é redimensionada.
onscroll: Ocorre quando a barra de rolagem de um elemento é manipulada pelo usuário. */

function eventoClick(){
    /* alert('Acionou um evento de click!') */
    document.body.style.backgroundColor = "yellow";
}

function eventoDblClick(){
    alert('Evento de clique duplo.');
}

function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}

function viraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}

/* 
function adicionaText(){
    let p = document.getElementById("texto");
    p.append(`O mouse se mouveu`);
} */

function mudou(){
    console.log("Mudou");
}

function teclaPressionada(){
    let input = document.getElementById("campoTexto").value;
    console.log(input);
}
