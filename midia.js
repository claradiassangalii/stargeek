var listaFilmes = []
listaFilmes = JSON.parse(localStorage.getItem('bdStar'))
if (listaFilmes == null){
    listaFilmes = []
}

function validarCadastro(nomeFilme, imagemFilme){

    if (nomeFilme != '' && imagemFilme != '') {
        return true
    } else {
        return false
    }
}

function concluir(){

    var nomeFilme = document.getElementById("link").value


    var possoCadastrar = validarCadastro(nomeFilme)
    if (possoCadastrar == false) {
        alert ('Verifique os dados antes de cadastrar')
        return 
    }
    
    var filme = {
       
        link: nomeFilme    
    }

    listaFilmes.push(filme)

    localStorage.setItem('bdStar', JSON.stringify(listaFilmes) )

    exibirFilmes()

    location.href = "assistir.html"
    document.getElementById("link").value = ''
}

function exibirNovo(){
    document.getElementById('assistindo').innerHTML = ''
    //debugger
    for (var i in listaFilmes) {
        document.getElementById('assistindo').innerHTML +=
            `<img src='${listaFilmes[i].link}' class='img'>`
            
    }
}

function exibirFilmes(){
    document.getElementById('imagem').innerHTML = ''
    
    for (var i in listaFilmes) {
        document.getElementById('imagem').innerHTML +=
            `<div>
                <img src='${listaFilmes[i].link}' class='img'> 
            </div>`
    }
}

function limpar(){
    listaFilmes = []
    localStorage.setItem( 'bdStar', JSON.stringify(listaFilmes) )
    exibirNovo()
}

function limpar2(){
    listaFilmes = []
    localStorage.setItem( 'bdStar', JSON.stringify(listaFilmes) )
    exibirNovo()
}