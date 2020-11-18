import HTMLAnchorElement from './HTMLAnchorElement.js';

// Конструктор родителя
const anchor = new HTMLAnchorElement({ href: 'https://ru.hexlet.io' });
anchor.setTextContent('Hexlet@#$@#$');
console.log(`Anchor: ${anchor}`); // toString() вызывается автоматически
// Anchor: <a href="https://ru.hexlet.io">Hexlet</a>

