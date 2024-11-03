let transactions = []; // Array para armazenar as transações

function addTransaction() {
    const date = prompt("Insira a data da transação (DD/MM/AAAA):");
    const description = prompt("Insira a descrição da transação:");
    const amount = parseFloat(prompt("Insira o valor da transação (ex: 150 para receita ou -200 para despesa):"));

    if (isNaN(amount)) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    // Adiciona a nova transação ao array
    transactions.push({ date, description, amount });
    
    updateTransactionList();
    updateBalances();
}

function updateTransactionList() {
    const transactionContainer = document.getElementById("transaction-container");
    transactionContainer.innerHTML = ""; // Limpa a lista atual

    transactions.forEach((transaction, index) => {
        const transactionItem = document.createElement('div');
        transactionItem.classList.add('transaction-item');

        const transactionDateElement = document.createElement('div');
        transactionDateElement.classList.add('transaction-date');
        transactionDateElement.textContent = transaction.date;

        const transactionDescriptionElement = document.createElement('div');
        transactionDescriptionElement.classList.add('transaction-description');
        transactionDescriptionElement.textContent = transaction.description;

        const transactionAmountElement = document.createElement('div');
        transactionAmountElement.classList.add('transaction-amount', transaction.amount < 0 ? 'text-danger' : 'text-success');
        transactionAmountElement.textContent = `R$ ${transaction.amount.toFixed(2)}`;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteButton.textContent = 'Excluir';
        deleteButton.onclick = () => deleteTransaction(index);

        transactionItem.appendChild(transactionDateElement);
        transactionItem.appendChild(transactionDescriptionElement);
        transactionItem.appendChild(transactionAmountElement);
        transactionItem.appendChild(deleteButton);

        transactionContainer.appendChild(transactionItem);
    });
}

function deleteTransaction(index) {
    transactions.splice(index, 1); // Remove a transação pelo índice
    updateTransactionList(); // Atualiza a lista
    updateBalances(); // Atualiza os saldos
}

function updateBalances() {
    const currentBalanceElement = document.getElementById('current-balance');
    const monthlyBalanceElement = document.getElementById('monthly-balance');

    const currentBalance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
    const monthlyBalance = currentBalance; // Modifique conforme necessário para calcular o balanço mensal

    currentBalanceElement.textContent = `R$ ${currentBalance.toFixed(2)}`;
    monthlyBalanceElement.textContent = `R$ ${monthlyBalance.toFixed(2)}`;

    calculateMonthlySummary(); // Chama a função para atualizar o resumo mensal
}

function calculateMonthlySummary() {
    let totalRevenues = 0;
    let totalExpenses = 0;
    const currentMonth = new Date().getMonth() + 1; // Mês atual (1-12)
    const currentYear = new Date().getFullYear(); // Ano atual

    transactions.forEach(trans => {
        const transDate = new Date(trans.date.split("/").reverse().join("-")); // Converte para YYYY-MM-DD
        const transMonth = transDate.getMonth() + 1;
        const transYear = transDate.getFullYear();

        if (transYear === currentYear && transMonth === currentMonth) {
            if (trans.amount > 0) {
                totalRevenues += trans.amount;
            } else {
                totalExpenses += Math.abs(trans.amount);
            }
        }
    });

    const totalBalance = totalRevenues - totalExpenses;

    // Atualizar o DOM
    document.getElementById("total-revenues").textContent = `R$ ${totalRevenues.toFixed(2)}`;
    document.getElementById("total-expenses").textContent = `R$ ${totalExpenses.toFixed(2)}`;
    document.getElementById("total-balance").textContent = `R$ ${totalBalance.toFixed(2)}`;

    // Comparação com meses anteriores
    compareWithPreviousMonths();
}

function compareWithPreviousMonths() {
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    const lastMonthSummary = calculateMonthlyData(lastMonth.getFullYear(), lastMonth.getMonth() + 1);

    const comparisonDiv = document.getElementById("previous-comparison");
    comparisonDiv.innerHTML = '';

    const comparisonHTML = `
        <p>Receitas: R$ ${lastMonthSummary.revenues.toFixed(2)} (${lastMonthSummary.revenuesChange > 0 ? '↑' : '↓'})</p>
        <p>Despesas: R$ ${lastMonthSummary.expenses.toFixed(2)} (${lastMonthSummary.expensesChange > 0 ? '↑' : '↓'})</p>
    `;
    comparisonDiv.innerHTML = comparisonHTML;
}

function calculateMonthlyData(year, month) {
    let revenues = 0;
    let expenses = 0;

    transactions.forEach(trans => {
        const transDate = new Date(trans.date.split("/").reverse().join("-")); // Converte para YYYY-MM-DD
        if (transDate.getFullYear() === year && transDate.getMonth() + 1 === month) {
            if (trans.amount > 0) {
                revenues += trans.amount;
            } else {
                expenses += Math.abs(trans.amount);
            }
        }
    });

    return {
        revenues,
        expenses,
        revenuesChange: revenues - expenses,
        expensesChange: expenses - revenues,
    };
}

// Chame a função para calcular e atualizar o resumo mensal
document.addEventListener('DOMContentLoaded', () => {
    updateTransactionList(); // Atualiza a lista de transações ao carregar a página
    updateBalances(); // Atualiza os saldos ao carregar a página
});
