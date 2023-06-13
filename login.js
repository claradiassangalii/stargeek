var novoUsuarios = []
novoUsuarios = JSON.parse(localStorage.getItem('bdCadastro'))
if (novoUsuarios == null) {
    novoUsuarios = []
}
function entrar2() {
    var user = document.getElementById("user").value
    var senh = document.getElementById("senh").value

    if (validarAcesso(user, senh)) {
        return
    }
    for (var i in novoUsuarios) {
        if (novoUsuarios[i].email == user && novoUsuarios[i].senha == senh) {
            
            location.href = "bemvindo.html"
            return
        }
    }
    alert("As senhas não conferem")

}

function validarAcesso(user, senh) {
    if (user == "" || senh == "") {
        alert("Preencha todos os campos")
        return true
    }
}