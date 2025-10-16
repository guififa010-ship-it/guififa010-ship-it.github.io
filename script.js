const form = document.getElementById('formRegistro');
const inputs = form.querySelectorAll('input');
const btn = document.getElementById('btnRegistrar');

function validarCampos() {
    let preenchidos = true;
    inputs.forEach(input => {
        if (!input.value.trim()) {
            preenchidos = false;
        }
    });
    btn.disabled = !preenchidos;
}

inputs.forEach(input => {
    input.addEventListener('input', validarCampos);
});


form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const email = document.getElementById('email').value;
    const confirma = document.getElementById('confirma').value;


    
    console.log("Nome:", nome);
    console.log("Sobrenome:", sobrenome);
    console.log("Usuario:", usuario);
    console.log("Senha:", senha);
    console.log("Email:", email);
    console.log("Confirma:", confirma);

    if(confirma == senha) {
        alert("Formulário concluido")
        form.reset();
        btn.disabled = true;
    }
    else {
        alert("As senhas estão incorretas")
    }  
});