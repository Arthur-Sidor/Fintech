// Selecionando o formulário e o contêiner de planejamentos
const goalForm = document.getElementById("goal-form");
const goalContainer = document.getElementById("goals-list");

// Array para armazenar os planejamentos
let goals = [];

// Função para adicionar um planejamento
function addGoal(event) {
    event.preventDefault();

    // Coletando os valores dos campos de entrada
    const description = document.getElementById("goal-description").value;
    const targetValue = parseFloat(document.getElementById("goal-target-value").value);
    const initialValue = parseFloat(document.getElementById("goal-initial-value").value);
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;

    // Verificando se todos os campos estão preenchidos
    if (!description || !targetValue || !initialValue || !startDate || !endDate) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Criando o objeto do planejamento
    const newGoal = {
        id: Date.now(),
        description,
        targetValue,
        initialValue,
        startDate,
        endDate
    };

    // Adicionando o planejamento ao array e exibindo
    goals.push(newGoal);
    displayGoals();

    // Limpando o formulário
    goalForm.reset();
}

// Função para exibir os planejamentos na tela
function displayGoals() {
    goalContainer.innerHTML = "";

    goals.forEach((goal) => {
        // Criando o elemento do planejamento
        const goalElement = document.createElement("div");
        goalElement.classList.add("goal-item");
        goalElement.innerHTML = `
            <h5>${goal.description}</h5>
            <p><strong>Valor Alvo:</strong> R$ ${goal.targetValue.toFixed(2)}</p>
            <p><strong>Valor Inicial:</strong> R$ ${goal.initialValue.toFixed(2)}</p>
            <p><strong>Data de Início:</strong> ${goal.startDate}</p>
            <p><strong>Data de Término:</strong> ${goal.endDate}</p>
            <button class="btn btn-danger" onclick="deleteGoal(${goal.id})">Excluir</button>
        `;

        // Adicionando o elemento ao contêiner
        goalContainer.appendChild(goalElement);
    });
}

// Função para excluir um planejamento pelo ID
function deleteGoal(id) {
    goals = goals.filter((goal) => goal.id !== id);
    displayGoals();
}

// Adicionando evento de submissão ao formulário
goalForm.addEventListener("submit", addGoal);
// Dados estáticos para o gráfico
const performanceData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'], // Meses
    datasets: [{
        label: 'Receitas',
        data: [2000, 2500, 2200, 2700], // Valores das receitas
        backgroundColor: 'rgba(40, 167, 69, 0.7)', // Cor do gráfico
        borderColor: 'rgba(40, 167, 69, 1)',
        borderWidth: 1
    }, {
        label: 'Despesas',
        data: [1500, 2000, 1800, 2100], // Valores das despesas
        backgroundColor: 'rgba(255, 99, 132, 0.7)', // Cor do gráfico
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }]
};

// Configuração do gráfico
const config = {
    type: 'bar', // Tipo de gráfico (barra)
    data: performanceData,
    options: {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true
            }
        }
    }
};

// Inicializando o gráfico
const ctx = document.getElementById('performanceChart').getContext('2d');
const performanceChart = new Chart(ctx, config);
