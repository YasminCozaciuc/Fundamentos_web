const nome = window.document.getElementById('nome')

function lerNome() {
    const txtNome = document.querySelector('#txtNome')
	//console.log(nome.value.lenght)
    if(nome.value.length <= 3){
        //console.log('Nome inválido');
        txtNome.innerHTML = '<small>Nome inválido</small>'
    }else {
        txtNome.innerHTML = '<small>Nome válido</small>'
    }
}