let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')

logado.innerHTML = `ola ${userLogado.nome}`

if(localStorage.getItem('token') == null){
   alert('Voce precisa estar logado para acessar essa página')
   window.location.href = '/' 
}

function sair(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = '/'       
}