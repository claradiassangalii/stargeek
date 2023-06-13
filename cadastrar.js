var novoUsuarios = []

novoUsuarios= JSON.parse(localStorage.getItem('bdCadastro'))

if(novoUsuarios == null)
{
    novoUsuarios = []
}
function entrar1(){

    var conta = document.getElementById("conta").value
    var senha = document.getElementById("senha").value

     var usuarios = {
        email: conta,
        senha: senha
     }
     novoUsuarios.push(usuarios)
     localStorage.setItem  ('bdCadastro', JSON.stringify(novoUsuarios))
     location.href = "login.html"
     alert ('Usuario cadastrado com sucesso, faça o login ') 
}
