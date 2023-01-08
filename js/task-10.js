function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divControls = document.getElementById('controls');
const divBoxes = document.getElementById('boxes')
const refs = {
  input: divControls.firstElementChild,
  btnCreate: divControls.children[1],
  btnDestroy: divControls.children[2]
}

refs.btnCreate.addEventListener('click', createBoxes)
refs.btnDestroy.addEventListener('click', destroyBoxes)

function createBoxes(event) {
  createBoxess(refs.input.value)
}

function createBoxess(amount) {
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div')
    div.style.height = `${30 + 10 * i}px`
    div.style.width = `${30 + 10 * i}px`
    div.style.backgroundColor = getRandomHexColor()
    divBoxes.append(div)
  }
}

function destroyBoxes() {
  divBoxes.innerHTML = ''
}
