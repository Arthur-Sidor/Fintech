const goalForm = document.getElementById('goal-form');
const goalsList = document.getElementById('goals-list');
const performanceChartCtx = document.getElementById('performanceChart').getContext('2d');

let goals = [];
let performanceData = {
    labels: [],
    datasets: [{
        label: 'Despesas',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }, {
        label: 'Receitas',
        data: [],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

const performanceChart = new Chart(performanceChartCtx, {
    type: 'bar',
    data: performanceData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Adiciona uma meta
goalForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const goalName = document.getElementById('goal-name').value;
    const goalAmount = parseFloat(document.getElementById('goal-amount').value);
    
    const goal = {
        name: goalName,
        amount: goalAmount,
        progress: 0
    };
    
    goals.push(goal);
    updateGoalsList();
    goalForm.reset();
});

// Atualiza a lista de metas
function updateGoalsList() {
    goalsList.innerHTML = '';
    
    goals.forEach((goal, index) => {
        const goalItem = document.createElement('div');
        goalItem.className = 'goal-item';
        goalItem.innerHTML = `
            <h5>${goal.name}</h5>
            <p>Meta: R$ ${goal.amount.toFixed(2)}</p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: ${((goal.progress / goal.amount) * 100).toFixed(2)}%; background-color: #28a745;" aria-valuenow="${goal.progress}" aria-valuemin="0" aria-valuemax="${goal.amount}"></div>
            </div>
        `;
        goalsList.appendChild(goalItem);
    });
    
    // Atualiza o gráfico de desempenho
    updatePerformanceChart();
}

// Atualiza o gráfico de desempenho
function updatePerformanceChart() {
    // Exemplo de dados fictícios para despesas e receitas
    performanceData.labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril'];
    performanceData.datasets[0].data = [1500, 2000, 1800, 2100]; // Despesas
    performanceData.datasets[1].data = [2000, 2500, 2200, 2700]; // Receitas
    performanceChart.update();
}