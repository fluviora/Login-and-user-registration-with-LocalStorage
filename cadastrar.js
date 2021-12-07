
let nome = document.getElementById('nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmarSenha = document.querySelector('#confirmarSenha')
let labelConfimarSenha = document.querySelector('#labelConfimarSenha')
let validConfirmarSenha = false

let msgError = document.querySelector('#msgError')
let msgSucess = document.querySelector('#msgSucess')


nome.addEventListener('keyup', () => {   
    if(nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome  -  Insira no mínimo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})

usuario.addEventListener('keyup', () => {   
    if(usuario.value.length <= 4) {
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Usuário  -  Insira no mínimo 5 caracteres'
        usuario.setAttribute('style', 'border-color: red')
        validUsuario = false
    } else {
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = 'Usuário'
        usuario.setAttribute('style', 'border-color: green')
        validUsuario = true
    }
})

senha.addEventListener('keyup', () => {   
    if(senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha  -  Insira no mínimo 6 caracteres'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
        validSenha = true
    }
})

confirmarSenha.addEventListener('keyup', () => {     
    if(confirmarSenha.value != senha.value) {
        labelConfimarSenha.setAttribute('style', 'color: red')
        labelConfimarSenha.innerHTML = 'Senha não confere'
        confirmarSenha.setAttribute('style', 'border-color: red')
        validConfirmarSenha = false
    } else {
        labelConfimarSenha.setAttribute('style', 'color: green')
        labelConfimarSenha.innerHTML = 'Senhas conferem'
        confirmarSenha.setAttribute('style', 'border-color: green')
        validConfirmarSenha = true
    }
})

function cadastrar(){
    if(validNome && validUsuario && validSenha && validConfirmarSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                senhaCad: senha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser));

        msgSucess.setAttribute('style', 'display: block')
        msgSucess.innerHTML = '<strong>Cadastando usuario<strong>'
        msgError.setAttribute('style', 'display: nome')
        msgError.innerHTML = ''

        setTimeout(()=> {
            window.location.href = 'index.html'
            }, 3000
        )
        

    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastar<strong>'
        msgSucess.innerHTML = ''
        msgSucess.setAttribute('style', 'display: nome')
    }
}