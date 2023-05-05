const nameInput = document.getElementById('name');
const balanceInput = document.getElementById('balance');
const depositInput = document.getElementById('deposit');
const depositBtn = document.getElementById('deposit-btn');
const withdrawInput = document.getElementById('withdraw');
const withdrawBtn = document.getElementById('withdraw-btn');
const balanceText = document.getElementById('balance-text');
const finalizar = document.getElementById('finalizar-btn');

let balance = 0;

function updateBalance() {
balanceText.innerText = `R$ ${balance.toFixed(2)}`;
}

function deposit() {
const amount = parseFloat(depositInput.value);
if (!isNaN(amount)) {
balance += amount;
updateBalance();
depositInput.value = '';
}
}

function withdraw() {
const amount = parseFloat(withdrawInput.value);
if (!isNaN(amount) && balance >= amount) {
balance -= amount;
updateBalance();
withdrawInput.value = '';
} else{
    alert('O valor solicitado para retirada é maior que o disponível no momento.');
    updateBalance();
    withdrawInput.value = '';
}
}

function showAlert() {
    alert("Aviso: A operação foi finalizada com sucesso!!");
    nameInput.value = '';
    withdrawInput.value = '';
    balanceInput.value = '';
    depositInput.value = '';
  }

depositBtn.addEventListener('click', deposit);
withdrawBtn.addEventListener('click', withdraw);

nameInput.addEventListener('input', () => {
const name = nameInput.value.trim();
if (name.length > 0) {
document.title = `${name} - Banco`;
}
});

balanceInput.addEventListener('input', () => {
const value = parseFloat(balanceInput.value);
if (!isNaN(value)) {
balance = value;
updateBalance();
}
});

updateBalance();
