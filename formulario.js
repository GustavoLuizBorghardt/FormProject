function formulario(){
    var nome = document.getElementById('nome').value;
    
    var telefone = document.getElementById('telefone').value;
    var cep = document.getElementById('cep').value;
    var cnpj = document.getElementById('cnpj').value;
    var senha = document.getElementById('senha').value;
    var confirmSenha = document.getElementById('confirmSenha').value;

    if (!nome) {
        document.getElementById('erro').style.display = 'block';
        document.getElementById('erro').innerHTML = 'Preencha o campo Nome da Empresa'
        return false;
    }
    if(!cnpj){
        document.getElementById('erro').style.display = 'block';
        document.getElementById('erro').innerHTML = 'Preencha o campo CNPJ'
        return false;
    }
    if(!telefone){
        document.getElementById('erro').style.display = 'block';
        document.getElementById('erro').innerHTML = 'Preencha o campo telefone'
        return false;
    }
    if(!cep){
        document.getElementById('erro').style.display = 'block';
        document.getElementById('erro').innerHTML = 'Preencha o campo CEP'
        return false;
  
}
if(!senha){
    document.getElementById('erro').style.display = 'block';
    document.getElementById('erro').innerHTML = 'Preencha o campo senha'
    return false;
}
if(!confirmSenha){
    document.getElementById('erro').style.display = 'block';
    document.getElementById('erro').innerHTML = 'Preencha o campo Confirmar Senha'
    return false;
}
if(senha != confirmSenha){
    document.getElementById('erro').style.display = 'block';
    document.getElementById('erro').innerHTML = 'Senhas erradas'
    return false;
}
}