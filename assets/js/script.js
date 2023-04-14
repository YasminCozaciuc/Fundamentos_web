/*
Case Sensitive = Reconhece letras maiusculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByNome()
por Classe: getElementByClassName() - pq pode ser usada em várias tags
por Seletor: querySelector()
 */


const nome = window.document.getElementById('nome')

nome.style.width = '100%'

function lerNome() {
    const txtNome = document.querySelector('#txtNome')
	//console.log(nome.value.lenght)
    if(nome.value.length < 3){
        //console.log('Nome inválido');
        txtNome.innerHTML = '<small>Nome inválido</small>'
        txtNome.style.color = 'red'
    }else {
        txtNome.innerHTML = '<small>Nome válido</small>'
        txtNome.style.color = 'green'
    }
}

const email = document.querySelector('#email')

email.style.width = '100%'

function validaEmail() {
    const yxyEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = '<small>E-mail inválido!</small>'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = '<small>E-mail válido!</small>'
        txtEmail.style.color = 'green'
    }
    
}

const assunto = document.querySelector('#assunto')

function validaAssunto() {
    const txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = '<small>Texto é muito grande, digite no máximo 100 caracteres</small>'
        txtAssunto.style.color = 'red'
    } else {
        txtAssunto.innerHTML = '<small>E-mail válido!</small>'
        txtAssunto.style.color = 'green'
    }
}