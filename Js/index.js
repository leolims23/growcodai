var nome = 'Leonardo Lima';
var cargo = 'CEO GrowDev';
var nomeHtml = document.getElementById("nome-no-html");
var cargoHtml = document.getElementById("cargo-no-html");
var text1=document.getElementById('text1');
var text2=document.getElementById('text2');

function colocarNomeNoHtml(nome) {
    nomeHtml.innerHTML = nome;
}

function colocarCargoNoHtml(cargo) {
    cargoHtml.innerHTML = cargo;
}


function clickNoProjeto(){
    console.log('clicou no botão projeto');
    text2.style.display='block';
    text1.style.display="none";
}


function clickNoSobre(){
    console.log('clicou no botão projeto');
    text2.style.display='none';
    text1.style.display="block";
}



colocarNomeNoHtml(nome);

colocarCargoNoHtml(cargo);


