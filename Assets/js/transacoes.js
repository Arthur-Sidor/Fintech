let transactions = []; // Array para armazenar as transações

// Função para adicionar uma nova transação
function addTransaction() {
    // Perguntar ao usuário apenas pelo tipo, descrição e valor
    const transactionType = prompt("Insira o tipo da transação (receita/despesa):");
    const description = prompt("Insira a descrição da transação:");
    const amount = parseFloat(prompt("Insira o valor da transação (ex: 150 para receita ou -200 para despesa):"));

    if (isNaN(amount)) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    // Aqui não incluímos userId e categoryId no frontend, pois o backend vai lidar com isso.
    // Adiciona a nova transação ao array (sem userId e categoryId no frontend)
    transactions.push({ transactionType, description, amount });

    // Atualiza a lista de transações e os saldos
    updateTransactionList();
    updateBalances();
}

// Função para atualizar a lista de transações na tela
function updateTransactionList(filteredTransactions = transactions) {
    const transactionContainer = document.getElementById("transaction-container");
    transactionContainer.innerHTML = ""; // Limpa a lista atual

    // Exibe cada transação na tela
    filteredTransactions.forEach((transaction, index) => {
        const transactionItem = document.createElement('div');
        transactionItem.classList.add('transaction-item');

        // Descrição da transação
        const transactionDescriptionElement = document.createElement('div');
        transactionDescriptionElement.classList.add('transaction-description');
        transactionDescriptionElement.textContent = `${transaction.description}`;

        // Valor da transação
        const transactionAmountElement = document.createElement('div');
        transactionAmountElement.classList.add('transaction-amount', transaction.amount < 0 ? 'text-danger' : 'text-success');
        transactionAmountElement.textContent = `R$ ${transaction.amount.toFixed(2)}`;

        // Botão de excluir
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteButton.textContent = 'Excluir';
        deleteButton.onclick = () => deleteTransaction(index);

        // Adiciona a descrição, valor e botão de excluir à transação
        transactionItem.appendChild(transactionDescriptionElement);
        transactionItem.appendChild(transactionAmountElement);
        transactionItem.appendChild(deleteButton);

        // Adiciona a transação ao contêiner
        transactionContainer.appendChild(transactionItem);
    });
}

// Função para excluir uma transação
function deleteTransaction(index) {
    transactions.splice(index, 1); // Remove a transação pelo índice
    updateTransactionList(); // Atualiza a lista de transações
    updateBalances(); // Atualiza os saldos
}

// Função para atualizar os saldos (total e mensal)
function updateBalances() {
    const currentBalanceElement = document.getElementById('current-balance');
    const monthlyBalanceElement = document.getElementById('monthly-balance');

    // Calcula o saldo atual
    const currentBalance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
    const monthlyBalance = currentBalance; // Pode-se modificar conforme necessário para calcular o balanço mensal

    // Atualiza os elementos da tela
    currentBalanceElement.textContent = `R$ ${currentBalance.toFixed(2)}`;
    monthlyBalanceElement.textContent = `R$ ${monthlyBalance.toFixed(2)}`;
}

// Função para buscar transações
function searchTransactions() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();

    // Filtra as transações de acordo com a descrição
    const filteredTransactions = transactions.filter(transaction => {
        return transaction.description.toLowerCase().includes(searchQuery);
    });

    // Atualiza a lista com as transações filtradas
    updateTransactionList(filteredTransactions);
}

// Função para filtrar transações por mês (para futuro uso)
function filterMonth() {
    const selectedMonth = document.getElementById('month-select').value;
    alert(`Mês selecionado: ${selectedMonth}`);
}

// Inicializa a tela com as transações vazias
updateTransactionList();
updateBalances();
