
const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');

let valueConverted = 0;

function handleSubmit(e) {
    e.preventDefault();

    if (!inputValue.value || Number(inputValue.value) <= 0) {
        alert('Informe um valor correto!');
        return;
    }

    if (!selectedCurrency.value) {
        alert('Escolha uma moeda!');
        return;
    }

    converter();

    inputValue.value = '';
    selectedCurrency.value = '';

    animateResult();
}

function converter() {
    const value = Number(inputValue.value);

    if (selectedCurrency.value === 'usd') {
        valueConverted = value / 5.0383;
    } else if (selectedCurrency.value === 'eur') {
        valueConverted = value / 5.6650;
    }

    valueFormatter();
}

function valueFormatter() {
    const currency = selectedCurrency.value === 'usd' ? 'USD' : 'EUR';

    result.textContent = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: currency
    }).format(valueConverted);
}

function animateResult() {
    result.animate([
        { transform: 'translateY(-150px)' },
        { transform: 'translateY(0)' }
    ], {
        duration: 500
    });
}
