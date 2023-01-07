const refs = {
    inputRange: document.getElementById('font-size-control'),
    text: document.getElementById('text')
}

refs.inputRange.addEventListener('input', onInputRange);

function onInputRange(event) {
    text.style.fontSize = `${event.currentTarget.value}px`
}