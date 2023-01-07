const Ref = {
    inputEl: document.getElementById('name-input'),
    outputEl: document.getElementById('name-output')
}

Ref.inputEl.addEventListener('input', onNameInput);

function onNameInput(event) {
    Ref.outputEl.textContent = event.currentTarget.value;
    if (event.currentTarget.value.length === 0) {
        Ref.outputEl.textContent = "Anonymous"
    };
};

