// Dados simulados de transações
const transactions = {
    "2024-10": { balance: 3010, revenues: 1000, expenses: 500, accountSpending: 200 },
    "2024-09": { balance: 2500, revenues: 800, expenses: 400, accountSpending: 150 },
    "2024-08": { balance: 2000, revenues: 600, expenses: 300, accountSpending: 100 },
    "2024-07": { balance: 1500, revenues: 400, expenses: 200, accountSpending: 50 }
};

// Função para filtrar por mês
function filterMonth() {
    const selectedValue = document.getElementById('month-select').value;
    const monthData = transactions[selectedValue];

    document.getElementById('current-balance').innerText = `R$ ${monthData.balance.toFixed(2)}`;
    document.getElementById('revenues').innerText = `R$ ${monthData.revenues.toFixed(2)}`;
    document.getElementById('expenses').innerText = `R$ ${monthData.expenses.toFixed(2)}`;
    document.getElementById('account-spending').innerText = `R$ ${monthData.accountSpending.toFixed(2)}`;
}

// Expandir e recolher visão geral financeira
function toggleExpand() {
    const balanceInfo = document.getElementById('balance-info');
    const expandBtn = document.querySelector('.expand-btn');
    balanceInfo.style.display = balanceInfo.style.display === 'none' ? 'flex' : 'none';
    expandBtn.innerText = balanceInfo.style.display === 'none' ? '▼' : '▲';
}

// Alternar visibilidade da seção "Meus Cartões"
function toggleCards() {
    const cardsContent = document.getElementById('cards-content');
    const toggleCardsBtn = document.querySelector('.toggle-cards-btn');
    const isHidden = cardsContent.style.display === 'none';
    cardsContent.style.display = isHidden ? 'block' : 'none';
    toggleCardsBtn.innerText = isHidden ? '▲' : '▼';
}

// Função para alternar a visibilidade do pop-up de adicionar cartão
function toggleAddCardPopup() {
    const popup = document.getElementById('addCardPopup');
    popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
}

// Função para adicionar um novo cartão
function addCard() {
    const cardName = document.getElementById('cardName').value;
    const cardLimit = document.getElementById('cardLimit').value;

    if (cardName && cardLimit) {
        // Criação do novo cartão dinamicamente
        const cardContent = document.getElementById('cards-content');
        const newCard = document.createElement('div');
        newCard.className = 'card-item bg-success mb-2 p-3';
        newCard.innerHTML = `
            <div class="card-logo"></div>
            <div class="card-info">
                <strong>${cardName}</strong><br>
                <span>Limite: R$ ${Number(cardLimit).toFixed(2)}</span>
            </div>
            <button class="btn btn-danger btn-sm" onclick="removeCard(this)">Excluir</button>
        `;
        cardContent.appendChild(newCard);

        // Limpar campos e fechar o pop-up
        document.getElementById('addCardForm').reset(); // Limpa o formulário
        toggleAddCardPopup(); // Fecha o pop-up
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

// Função para remover um cartão
function removeCard(button) {
    const card = button.parentElement;
    card.remove();
}

// Função de logout (opcional, para remover itens do armazenamento)
function logout() {
    // localStorage.removeItem('token'); // Caso tenha token em localStorage
    // sessionStorage.removeItem('token'); // Caso tenha token em sessionStorage

    // Opcional: Se quiser limpar tudo no armazenamento
    // localStorage.clear();
    // sessionStorage.clear();

    // Redirecionar para a página de login ou qualquer outra página
    window.location.href = 'login.html'; // Substitua pela URL desejada
}

// Navegar entre os módulos
function navigateToModule(module) {
    switch (module) {
        case 'home':
            window.location.href = 'telainicial.html'; // Navegar para a tela inicial
            break;
        case 'Transações':
            window.location.href = 'transacoes.html'; // Navegar para a tela de transações
            break;
        case 'Adicionar':
            // Aqui você pode adicionar a navegação para a tela de adição de transações
            alert('Navegando para adicionar uma nova transação.');
            break;
        case 'Planejamento':
            // Aqui você pode adicionar a navegação para a tela de planejamento
            alert('Navegando para o planejamento.');
            break;
        case 'Perfil':
            // Aqui você pode adicionar a navegação para a tela de perfil
            alert('Navegando para o perfil.');
            break;
        default:
            alert('Módulo desconhecido!');
    }
}
