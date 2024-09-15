function acessarPagina() {
    var login = document.getElementById("fname").value;
    var senha = document.getElementById("lname").value;
    var errorMessage = document.getElementById("error-message");
    
    if (login === "projeto" && senha === "@dados@") {
        errorMessage.textContent = "";
        window.location.href = "https://projetodados.netlify.app/";
    } else {
        errorMessage.textContent = "Acesso negado!";
    }
}