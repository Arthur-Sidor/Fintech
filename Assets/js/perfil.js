function navigateToModule(module) {
    alert('Navegando para: ' + module);
}

function toggleAddMenu() {
    const dropdown = document.getElementById('addDropdown');
    dropdown.style.display = dropdown.style.display === 'none' || dropdown.style.display === '' ? 'block' : 'none';
}

function addTransaction() {
    alert('Adicionando Transação...');
}

function addCard() {
    alert('Adicionando Cartão...');
}

function toggleEdit(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input');
    const editButton = form.querySelector('button');

    const isEditing = Array.from(inputs).some(input => !input.readOnly);

    inputs.forEach(input => {
        input.readOnly = isEditing; // Alterna entre editável e não editável
    });

    editButton.textContent = isEditing ? 'Editar' : 'Salvar';
    editButton.classList.toggle('btn-primary', !isEditing);
    editButton.classList.toggle('btn-success', isEditing);
}

// Adiciona os eventos de clique aos botões de edição
document.getElementById('edit-personal-info').addEventListener('click', () => toggleEdit('personal-info-form'));
document.getElementById('edit-account-info').addEventListener('click', () => toggleEdit('account-info-form'));
document.getElementById('edit-user-preferences').addEventListener('click', () => toggleEdit('user-preferences-form'));
