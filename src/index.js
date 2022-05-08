import './assets/normalize.css';
import './assets/style.css';
import Key from './keyclass';
import i18Obj from './typesOfKeys';

let langMode = 'en';
let capsLockOn = false;

function drawKeyboard(lang) {
  const keysToDraw = document.querySelectorAll('[data-i18]');
  keysToDraw.forEach((el) => {
    const btn = el;
    btn.innerText = i18Obj[lang][el.dataset.i18];
  });
  langMode = lang;
}
drawKeyboard(langMode);

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

const inputField = document.createElement('textarea');
inputField.className = 'text';

keyboardWrapper.appendChild(inputField);

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
const keyBackspace = new Key('div', 'key key_backspace key_special', 'Backspace');
keyboardBtns.appendChild(keyBackspace.getElement);

const keyTab = new Key('div', 'key key_tab key_special', 'Tab');
keyboardBtns.appendChild(keyTab.getElement);
const keyQ = new Key('div', 'key', 'q');
keyboardBtns.appendChild(keyQ.getElement);
const keyW = new Key('div', 'key', 'w');
keyboardBtns.appendChild(keyW.getElement);
const keyE = new Key('div', 'key', 'e');
keyboardBtns.appendChild(keyE.getElement);
const keyR = new Key('div', 'key', 'r');
keyboardBtns.appendChild(keyR.getElement);
const keyT = new Key('div', 'key', 't');
keyboardBtns.appendChild(keyT.getElement);
const keyY = new Key('div', 'key', 'y');
keyboardBtns.appendChild(keyY.getElement);
const keyU = new Key('div', 'key', 'u');
keyboardBtns.appendChild(keyU.getElement);
const keyI = new Key('div', 'key', 'i');
keyboardBtns.appendChild(keyI.getElement);
const keyO = new Key('div', 'key', 'o');
keyboardBtns.appendChild(keyO.getElement);
const keyP = new Key('div', 'key', 'p');
keyboardBtns.appendChild(keyP.getElement);
const keyBrL = new Key('div', 'key', '[');
keyboardBtns.appendChild(keyBrL.getElement);
const keyBrR = new Key('div', 'key', ']');
keyboardBtns.appendChild(keyBrR.getElement);
const keyBSlash = new Key('div', 'key key_bslash', '\\');
keyboardBtns.appendChild(keyBSlash.getElement);

const keyCapslock = new Key('div', 'key key_capslock key_special', 'CapsLock');
keyboardBtns.appendChild(keyCapslock.getElement);
const keyA = new Key('div', 'key', 'a');
keyboardBtns.appendChild(keyA.getElement);
const keyS = new Key('div', 'key', 's');
keyboardBtns.appendChild(keyS.getElement);
const keyD = new Key('div', 'key', 'd');
keyboardBtns.appendChild(keyD.getElement);
const keyF = new Key('div', 'key', 'f');
keyboardBtns.appendChild(keyF.getElement);
const keyG = new Key('div', 'key', 'g');
keyboardBtns.appendChild(keyG.getElement);
const keyH = new Key('div', 'key', 'h');
keyboardBtns.appendChild(keyH.getElement);
const keyJ = new Key('div', 'key', 'j');
keyboardBtns.appendChild(keyJ.getElement);
const keyK = new Key('div', 'key', 'k');
keyboardBtns.appendChild(keyK.getElement);
const keyL = new Key('div', 'key', 'l');
keyboardBtns.appendChild(keyL.getElement);
const keySemicolon = new Key('div', 'key', ';');
keyboardBtns.appendChild(keySemicolon.getElement);
const keyTick = new Key('div', 'key', "'");
keyboardBtns.appendChild(keyTick.getElement);
const keyEnter = new Key('div', 'key key_enter key_special', 'Enter');
keyboardBtns.appendChild(keyEnter.getElement);

const keyShiftL = new Key('div', 'key key_shiftl key_left key_special', 'Shift');
keyboardBtns.appendChild(keyShiftL.getElement);
const keyZ = new Key('div', 'key', 'z');
keyboardBtns.appendChild(keyZ.getElement);
const keyX = new Key('div', 'key', 'x');
keyboardBtns.appendChild(keyX.getElement);
const keyC = new Key('div', 'key', 'c');
keyboardBtns.appendChild(keyC.getElement);
const keyV = new Key('div', 'key', 'v');
keyboardBtns.appendChild(keyV.getElement);
const keyB = new Key('div', 'key', 'b');
keyboardBtns.appendChild(keyB.getElement);
const keyN = new Key('div', 'key', 'n');
keyboardBtns.appendChild(keyN.getElement);
const keyM = new Key('div', 'key', 'm');
keyboardBtns.appendChild(keyM.getElement);
const keyComma = new Key('div', 'key', ',');
keyboardBtns.appendChild(keyComma.getElement);
const keyPoint = new Key('div', 'key', '.');
keyboardBtns.appendChild(keyPoint.getElement);
const keyUp = new Key('div', 'key key_arrow', '▲');
keyboardBtns.appendChild(keyUp.getElement);
const keySlash = new Key('div', 'key', '/');
keyboardBtns.appendChild(keySlash.getElement);
const keyShiftR = new Key('div', 'key key_shiftr key_special key_special', 'Shift');
keyboardBtns.appendChild(keyShiftR.getElement);

const keyCtrlL = new Key('div', 'key key_ctrl key_special key_left', 'Ctrl');
keyboardBtns.appendChild(keyCtrlL.getElement);
const keyWin = new Key('div', 'key key_special', 'Win');
keyboardBtns.appendChild(keyWin.getElement);
const keyAltL = new Key('div', 'key key_special key_left', 'Alt');
keyboardBtns.appendChild(keyAltL.getElement);
const keySpace = new Key('div', 'key key_space', '');
keyboardBtns.appendChild(keySpace.getElement);
const keyAltR = new Key('div', 'key key_special', 'Alt');
keyboardBtns.appendChild(keyAltR.getElement);
const keyLeft = new Key('div', 'key key_arrow', '◀');
keyboardBtns.appendChild(keyLeft.getElement);
const keyDown = new Key('div', 'key key_arrow', '▼');
keyboardBtns.appendChild(keyDown.getElement);
const keyRight = new Key('div', 'key key_arrow', '▶');
keyboardBtns.appendChild(keyRight.getElement);
const keyCtrlR = new Key('div', 'key key_ctrl key_special', 'Ctrl');
keyboardBtns.appendChild(keyCtrlR.getElement);

const paragraph1 = document.createElement('p');
paragraph1.innerText = 'Комбинация для переключения языковой раскладки: левые ctrl + alt';
paragraph1.className = 'paragraph';
wrapper.appendChild(paragraph1);
const paragraph2 = document.createElement('p');
paragraph2.innerText = 'Клавиатура создана в операционной системе Windows';
paragraph2.className = 'paragraph';
wrapper.appendChild(paragraph2);

const keys = document.querySelectorAll('.key');
const capsKey = document.querySelector('.key_capslock');

function makeCaps(isCapsLock) {
  if (!isCapsLock) {
    keys.forEach((key) => {
      if (key.classList.contains('key_special') || key.classList.contains('key_arrow') || key.classList.contains('key_space')) {
        return;
      }
      const btn = key;
      btn.innerText = key.innerText.toUpperCase();
    });
    capsLockOn = true;
    capsKey.classList.toggle('active');
    return;
  }
  capsLockOn = false;
  capsKey.classList.toggle('active');
  keys.forEach((key) => {
    if (key.classList.contains('key_special') || key.classList.contains('key_arrow') || key.classList.contains('key_space')) {
      return;
    }
    const btn = key;
    btn.innerText = key.innerText.toLowerCase();
  });
}

function ctrlListener(e) {
  if (e.code === 'AltLeft') {
    if (langMode === 'en') {
      drawKeyboard('ru');
    } else if (langMode === 'ru') {
      drawKeyboard('en');
    }
  } else {
    document.removeEventListener('keyup', ctrlListener);
  }
}

for (let i = 0; i < keys.length; i += 1) {
  keys[i].setAttribute('keyName', keys[i].innerText);
  keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
  if (keys[i].getAttribute('keyname') === '') {
    keys[i].setAttribute('keyName', 'Space');
  }
  if (keys[i].getAttribute('keyname') === 'Ctrl') {
    if (keys[i].classList.contains('key_left')) {
      keys[i].setAttribute('keyName', 'ControlLeft');
    } else {
      keys[i].setAttribute('keyName', 'ControlRight');
    }
  }
  if (keys[i].getAttribute('keyname') === 'Alt') {
    if (keys[i].classList.contains('key_left')) {
      keys[i].setAttribute('keyName', 'AltLeft');
    } else {
      keys[i].setAttribute('keyName', 'AltRight');
    }
  }
  if (keys[i].getAttribute('keyname') === 'Shift') {
    if (keys[i].classList.contains('key_left')) {
      keys[i].setAttribute('keyName', 'ShiftLeft');
    } else {
      keys[i].setAttribute('keyName', 'ShiftRight');
    }
  }
  if (keys[i].getAttribute('keyname') === 'Win') {
    keys[i].setAttribute('keyName', 'Meta');
  }
  if (keys[i].getAttribute('keyname') === '▶') {
    keys[i].setAttribute('keyName', 'ArrowRight');
  }
  if (keys[i].getAttribute('keyname') === '◀') {
    keys[i].setAttribute('keyName', 'ArrowLeft');
  }
  if (keys[i].getAttribute('keyname') === '▲') {
    keys[i].setAttribute('keyName', 'ArrowUp');
  }
  if (keys[i].getAttribute('keyname') === '▼') {
    keys[i].setAttribute('keyName', 'ArrowDown');
  }
  if (keys[i].getAttribute('keyname') === 'A') {
    keys[i].setAttribute('data-i18', 'a');
  }
}

document.addEventListener('keypress', (event) => {
  event.preventDefault();
  if (event.key !== 'Enter') {
    inputField.value += event.key;
  } else if (event.key === 'Enter') {
    inputField.value += '\n\r';
  }
  keys.forEach((key) => {
    if (event.key === key.getAttribute('keyname') || event.key === key.getAttribute('lowerCaseName') || event.code === key.getAttribute('keyname') || event.key === key.getAttribute('keyru') || event.key === key.getAttribute('ruLowerCase')) {
      key.classList.add('active');
    }
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace') {
    inputField.value = inputField.value.slice(0, -1);
  } else if (event.key === 'ArrowUp') {
    inputField.value += '▲';
  } else if (event.key === 'ArrowDown') {
    inputField.value += '▼';
  } else if (event.key === 'ArrowRight') {
    inputField.value += '▶';
  } else if (event.key === 'ArrowLeft') {
    inputField.value += '◀';
  } else if (event.key === 'CapsLock') {
    makeCaps(capsLockOn);
    return;
  }
  keys.forEach((key) => {
    if (event.key === key.getAttribute('keyname') || event.key === key.getAttribute('lowerCaseName') || event.code === key.getAttribute('keyname')) {
      key.classList.add('active');
    }
  });
  if (event.shiftKey) {
    if (langMode === 'en') {
      drawKeyboard('enShift');
    } else if (langMode === 'ru') {
      drawKeyboard('ruShift');
    }
  }
  if (event.ctrlKey) {
    document.addEventListener('keyup', ctrlListener(event));
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'CapsLock') return;
  keys.forEach((key) => {
    if (event.key === key.getAttribute('keyname') || event.key === key.getAttribute('lowerCaseName') || event.code === key.getAttribute('keyname') || event.key === key.getAttribute('keyru') || event.key === key.getAttribute('ruLowerCase')) {
      key.classList.remove('active');
      key.classList.add('remove');
    }
    setTimeout(() => { key.classList.remove('remove'); }, 500);
  });
  if (event.key === 'Shift') {
    capsKey.classList.remove('active');
    capsLockOn = false;
    if (langMode === 'enShift') {
      drawKeyboard('en');
    } else { drawKeyboard('ru'); }
  }
});
keys.forEach((key) => {
  if (key.classList.contains('key_special') || key.classList.contains('key_arrow') || key.classList.contains('key_space')) return;
  key.setAttribute('data-i18', `${key.getAttribute('lowerCaseName')}`);
  const RU_VAL = i18Obj.ru;
  const RU_SHIFT_VAL = i18Obj.ruShift;
  key.setAttribute('keyru', `${RU_VAL[key.dataset.i18]}`);
  key.setAttribute('ruLowerCase', `${RU_SHIFT_VAL[key.dataset.i18]}`);
});

function setLocalStorage() {
  localStorage.setItem('langMode', langMode);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('langMode')) {
    const lang = localStorage.getItem('langMode');
    drawKeyboard(lang);
  }
}
window.addEventListener('load', getLocalStorage);
