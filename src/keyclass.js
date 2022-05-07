class Key {
  constructor(tagName, className, value) {
    this.element = document.createElement(tagName);
    this.element.textContent = value;
    this.element.className = className;
  }

  get getElement() {
    return this.element;
  }

  set changeValue(newValue) {
    this.element.textContent = newValue;
  }
}
export default Key;
