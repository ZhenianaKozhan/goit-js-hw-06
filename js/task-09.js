function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  nameColor: document.querySelector('.color'),
  changeColorBtn: document.querySelector('.change-color')
}

refs.changeColorBtn.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.nameColor.textContent = getRandomHexColor();
}
