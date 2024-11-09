function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const userType = document.querySelector('input[name="userType"]:checked').value; // Pega o valor do tipo de usuário selecionado

    // Credenciais corretas
    const usuarioCorreto = "arthur.sidor@gmail.com";
    const senhaCorreta = "teste";
    const usuarioAdmin = "admin@fintech.com";  // Exemplo de email de admin
    const senhaAdmin = "admin123";  // Exemplo de senha de admin

    // Verifica se as credenciais estão corretas
    if (userType === "admin" && username === usuarioAdmin && password === senhaAdmin) {
        window.location.href = "telainicial.html"; // Redireciona para a página de admin
    } else if (userType === "normal" && username === usuarioCorreto && password === senhaCorreta) {
        window.location.href = "telainicial.html"; // Redireciona para a página normal
    } else {
        alert("Usuário, senha ou tipo de usuário incorretos!"); // Mensagem de erro
    }
}

function criarConta() {
    window.location.href = 'cadastro.html'; // Substitua 'pagina_de_login.html' pelo caminho correto da sua página de login
}

function redefinirSenha() {
    window.location.href = 'forgotSenha.html'; // Substitua 'pagina_de_login.html' pelo caminho correto da sua página de login
}
