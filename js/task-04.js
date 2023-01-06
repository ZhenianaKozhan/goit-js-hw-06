const Ref = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    valueSpn: document.getElementById('value')
}

let counterValue = 0;

const onIncrementBtn = event => {
    counterValue += 1;
    Ref.valueSpn.textContent = counterValue;
}
const onDecrementBtn = event => {
    counterValue -= 1;
    Ref.valueSpn.textContent = counterValue;
}

Ref.incrementBtn.addEventListener('click', onIncrementBtn);
Ref.decrementBtn.addEventListener('click', onDecrementBtn);