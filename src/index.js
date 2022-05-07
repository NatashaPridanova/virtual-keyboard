import './assets/normalize.css';
import './assets/style.css';
import Key from './keyclass';

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.appendChild(wrapper);

const title = document.createElement('h1');
title.innerText = 'Virtual keyboard';
title.className = 'title';
wrapper.appendChild(title);

function createDiv(container, className) {
  const div = document.createElement('div');
  div.className = className;
  container.appendChild(div);
  return div;
}
const keyboardWrapper = createDiv(wrapper, 'keyboard-wrapper');
const keyboardBtns = createDiv(keyboardWrapper, 'keyboard-btns');

const keyBctc = new Key('div', 'key', '`');
keyboardBtns.appendChild(keyBctc.getElement);
const key1 = new Key('div', 'key', '1');
keyboardBtns.appendChild(key1.getElement);
const key2 = new Key('div', 'key', '2');
keyboardBtns.appendChild(key2.getElement);
const key3 = new Key('div', 'key', '3');
keyboardBtns.appendChild(key3.getElement);
const key4 = new Key('div', 'key', '4');
keyboardBtns.appendChild(key4.getElement);
const key5 = new Key('div', 'key', '5');
keyboardBtns.appendChild(key5.getElement);
const key6 = new Key('div', 'key', '6');
keyboardBtns.appendChild(key6.getElement);
const key7 = new Key('div', 'key', '7');
keyboardBtns.appendChild(key7.getElement);
const key8 = new Key('div', 'key', '8');
keyboardBtns.appendChild(key8.getElement);
const key9 = new Key('div', 'key', '9');
keyboardBtns.appendChild(key9.getElement);
const key0 = new Key('div', 'key', '0');
keyboardBtns.appendChild(key0.getElement);
const keyLine = new Key('div', 'key', '-');
keyboardBtns.appendChild(keyLine.getElement);
const keyEqual = new Key('div', 'key', '=');
keyboardBtns.appendChild(keyEqual.getElement);
const keyBackspace = new Key('div', 'key key_backspace', '←');
keyboardBtns.appendChild(keyBackspace.getElement);

const keyTab = new Key('div', 'key key_tab', 'Tab');
keyboardBtns.appendChild(keyTab.getElement);
const keyQ = new Key('div', 'key', 'Q');
keyboardBtns.appendChild(keyQ.getElement);
const keyW = new Key('div', 'key', 'W');
keyboardBtns.appendChild(keyW.getElement);
const keyE = new Key('div', 'key', 'E');
keyboardBtns.appendChild(keyE.getElement);
const keyR = new Key('div', 'key', 'R');
keyboardBtns.appendChild(keyR.getElement);
const keyT = new Key('div', 'key', 'T');
keyboardBtns.appendChild(keyT.getElement);
const keyY = new Key('div', 'key', 'Y');
keyboardBtns.appendChild(keyY.getElement);
const keyU = new Key('div', 'key', 'U');
keyboardBtns.appendChild(keyU.getElement);
const keyI = new Key('div', 'key', 'I');
keyboardBtns.appendChild(keyI.getElement);
const keyO = new Key('div', 'key', 'O');
keyboardBtns.appendChild(keyO.getElement);
const keyP = new Key('div', 'key', 'P');
keyboardBtns.appendChild(keyP.getElement);
const keyBrL = new Key('div', 'key', '[');
keyboardBtns.appendChild(keyBrL.getElement);
const keyBrR = new Key('div', 'key', ']');
keyboardBtns.appendChild(keyBrR.getElement);
const keySlash = new Key('div', 'key key_bslash', '\\');
keyboardBtns.appendChild(keySlash.getElement);

const paragraph = document.createElement('p');
paragraph.innerText = 'Комбинация для переключения языковой раскладки: левые ctrl + alt';
paragraph.className = 'paragraph';
wrapper.appendChild(paragraph);
