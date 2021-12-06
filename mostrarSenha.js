let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
    let inputSenha = document.getElementById('senha')
    if(inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    } 
}) 

/* let btn2 = document.querySelector('#eye2')

btn2.addEventListener('click', ()=>{
    
    let inputSenha2 = document.getElementById('confirmarSenha')
    if(inputSenha2.getAttribute('type') == 'password') {
        inputSenha2.setAttribute('type', 'text')
    } else {
        inputSenha2.setAttribute('type', 'password')
    } 
})  */



 