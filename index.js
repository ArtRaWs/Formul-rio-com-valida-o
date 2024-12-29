const form = document.getElementById("form");
const nome = document.getElementById("username");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const password = document.getElementById("senha");
const passwordconfirmar = document.getElementById("confirmarSenha");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    const usernameValue = nome.value;
    const emailValue = email.value;
    const telefoneValue = telefone.value;
    const passwordValue = password.value;
    const passwordconfirmarValue = passwordconfirmar.value;

    if (usernameValue === '') {
        setErrorFor(nome, 'O nome de usuário é Obrigatório.');
    } else {
        setSuccessFor(nome);
    }

    if (emailValue === '') {
        setErrorFor(email, 'O email é Obrigatório.');
    }
    else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, insira um email válido.");
    } else {
        setSuccessFor(email);
    }

    if (telefoneValue === '') {
        setErrorFor(telefone, 'O número de Telefone é Obrigatório.');
    }
    else if (!checkTelefone(telefoneValue)) {
        setErrorFor(telefone, 'Insira no padrão correto.')
    } else {
        setSuccessFor(telefone);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'A senha é Obrigatória.');
    } else if (passwordValue.length < 6) {
        setErrorFor(password, 'A senha é no minimo 6 digitos.');
    }
    else {
        setSuccessFor(password);
    }

    if (passwordconfirmarValue === '') {
        setErrorFor(passwordconfirmar, 'Confirme a senha.');
    } else if (passwordconfirmarValue !== passwordValue) {
        setErrorFor(passwordconfirmar, 'As senhas não se coincidem.');
    } else if (passwordValue.length < 6) {
        setErrorFor(password, 'A senha é no minimo 6 digitos.');
    }
    else {
        setSuccessFor(passwordconfirmar);
    }

    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === "form-control success";
    });

    if (formIsValid) {
        console.log(`O formulário está 100% válido! Bem Vindo ${usernameValue}`);
    }
}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
    formControl.className = "form-control error";
}


function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function checkTelefone(telefone) {
    return /^\(\d{2}\) \d{5}-\d{4}$/.test(telefone);
}
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email);
}