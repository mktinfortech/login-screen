const formularioDados = document.getElementById("formularioDados");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");


formularioDados.addEventListener("submit", (event) => {
    event.preventDefault();

    //Validação de campos vazios
    if(username.value === "") {
        alert("Campo " + "username" + " obrigatorio");
        return;
    }

    else if(email.value === ""){
        alert("Campo " + "email" + " obrigatorio");
        return;
    }

   if(password.value === ""){
    alert("Campo" + " password" + " obrigatorio!")
   }

    else if(!ValidatePassword(password.value, 8)){
        alert("O Campo " + "password" + " precisa ter no minimo 8 digitos");
        return;
    }
})

//Função Valida Senha

function ValidatePassword(password, minDigits){
    if(password.lenght >= minDigits){
        return true
    }
    return false
}

