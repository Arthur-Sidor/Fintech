function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Credenciais corretas
    const usuarioCorreto = "arthur.sidor@gmail.com";
    const senhaCorreta = "teste";

    // Verifica se as credenciais estão corretas
    if (username === usuarioCorreto && password === senhaCorreta) {
        window.location.href = "telainicial.html"; // Redireciona para a página principal
    } else {
        alert("Usuário ou senha incorretos!"); // Mensagem de erro
    }
}

function criarConta() {
    window.location.href = 'cadastro.html'; // Substitua 'pagina_de_login.html' pelo caminho correto da sua página de login
}

function redefinirSenha() {
    window.location.href = 'forgotSenha.html'; // Substitua 'pagina_de_login.html' pelo caminho correto da sua página de login
}

// Inicializa o particles.js
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 96,
            "density": {
                "enable": true,
                "value_area": 320
            }
        },
        "color": {
            "value": "#0bd639"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 1,
                "color": "#1fe819"
            },
            "polygon": {
                "nb_sides": 3
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
