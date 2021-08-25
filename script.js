const currencyEleOne = document.getElementById('currency-one');
const amountEleOne = document.getElementById('amount-one');
const currencyEleTwo = document.getElementById('currency-two');
const amountEleTwo = document.getElementById('amount-two');


const rateElement = document.getElementById('rate');
const swap = document.getElementById('swap');

 
// Fetch exchange rate and update DOM
function calculate(){
    const currency_one = currencyEleOne.value;
    const currency_two = currencyEleTwo.value;

    fetch(`https://v6.exchangerate-api.com/v6/7f8c38ae08534eafe5320ce1/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
        const rate = data.conversion_rates[currency_two];

        rateElement.innerText = `1 ${currency_one} = ${rate} ${currency_two}`

        amountEleTwo.value = (amountEleOne.value * rate).toFixed(2);
    });
}

// Event listeners 
currencyEleOne.addEventListener('change',calculate);
amountEleOne.addEventListener('input',calculate);
currencyEleTwo.addEventListener('change',calculate);
amountEleTwo.addEventListener('change',calculate);
swap.addEventListener('click', ()=>{
    const temp = currencyEleOne.value;
    currencyEleOne.value = currencyEleTwo.value;
    currencyEleTwo.value = temp;
    calculate();
});


calculate()