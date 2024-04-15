function salvarDados(){

    var nome = document.getElementById('nome').value;
    var nome = document.getElementById('email').value;
    var nome = document.getElementById('senha').value;
    var nome = document.getElementById('idade').value;
    var nome = document.getElementById('cidade').value;

    var usuario ={
        nome: nome,
        email: email,
        senha: senha,
        idade: idade,
        cidade: cidade
    }

    console.log(usuario);
}