import HTMLElement from './HTMLElement.js';

// Anchor – это ссылка. Класс HTMLAnchorElement описывает тег "a".
// Наследование выполняется через ключевое слово extends
export default class HTMLAnchorElement extends HTMLElement {
  toString() {
    // Родительский метод
    const attrLine = this.stringifyAttributes();
    console.log(attrLine);
    // Родительский метод
    const body = this.getTextContent();
    return `<a ${attrLine}>${body}</a>`;
  }
}
