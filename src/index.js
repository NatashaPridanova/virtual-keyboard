import './assets/style.css';

const { body } = document;

function createDiv(container) {
  const div = document.createElement('div');
  div.className = 'div';

  container.appendChild(div);
}
createDiv(body);
