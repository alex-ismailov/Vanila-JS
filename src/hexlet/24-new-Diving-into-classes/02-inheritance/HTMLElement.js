export default class HTMLElement {
  constructor(attributes = {}) {
    this.attributes = attributes;
  }

  setAttribute(key, value) {
    this.attributes[key] = value;
  }

  getAttribute(key) {
    return this.attributes[key];
  }

  getTextContent() {
    return this.body;
  }

  setTextContent(body) {
    this.body = body;
  }

  stringifyAttributes() {
    // build: key="value" key2="value2"
    const attrKeys = Object.keys(this.attributes);
    const attrString = attrKeys.map((key) => `${key}="${this.attributes[key]}"`).join(' ');
    return attrString;
  }
}