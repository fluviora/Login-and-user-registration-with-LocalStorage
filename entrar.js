function entrar() {     
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#userLabel')

    let senha = document.querySelector('#senha')
    let senhaLable = document.querySelector('#senhaLabel')

    let msgError = document.querySelector('#msgError')
    let listaUser = []

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
    listaUser.forEach((item) => {
       
        if(usuario.value == item.userCad && senha.value == item.senhaCad){
            
            userValid= {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
             
        }                   
    })

    if(usuario.value !=='' && senha.value !==''){
        if(usuario.value == userValid.user && senha.value == userValid.senha ){
            window.location.href = 'aftersignin.html'

            let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
            localStorage.setItem('token', token)
            console.log(token)

            localStorage.setItem('userLogado', JSON.stringify(userValid))
        } else{
            userLabel.setAttribute('style', 'color: red')
            usuario.setAttribute('style', 'border-color: red')
            senhaLable.setAttribute('style', 'color: red')
            senha.setAttribute('style', 'border-color: red')
            msgError.setAttribute('style', 'display: block')
            msgError.innerHTML = 'Usuário ou senha incorretos'
            usuario.focus()
        }       

    } else{
        userLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhaLable.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Digite nos campos os dados corretos'
        usuario.focus()
    }
}

