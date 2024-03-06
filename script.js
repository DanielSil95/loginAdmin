function logar(){

    var login = document.getElementById('username').value;
    var senha = document.getElementById('password').value;

    if (login =="admin" && senha=="admin" ){
        alert('sucesso');
        location.href = "home.html";
    }else{
            alert('Usuario ou senha incorretos')
        }
    
}