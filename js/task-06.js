const input = document.getElementById('validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(this.dataset.length)) {
        input.classList.remove('invalid')
        input.classList.add('valid')
    } else {
        input.classList.add('invalid')
    }
}