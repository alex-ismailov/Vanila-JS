// Классические приёмы программирования во фронтенде — Игорь Алексеенко
// src: https://www.youtube.com/watch?v=mc7EMdyawBk

class UXComponent {
  static State = {
    DISABLED: 1,
    FOCUSED: 2,
    HOVERED: 4,
    ACTIVE: 8,
    HAS_ICON: 16,
  };

  static StateClassName = {
    '1': 'item-disabled',
    '2': 'item-focused',
    '4': 'item-hovered',
    '8': 'item-active',
    '16': 'item-hasicon',
  };

  constructor() {
    this.state =
      UXComponent.State.DISABLED |
      UXComponent.State.HAS_ICON;
    console.log(`state: ${this.state}`);
    this.element = document.createElement('button');
    this.getClassName();
  }

  getClassName() {
    Object.keys(UXComponent.State)
    .forEach((stateName) => {
      const stateValue = UXComponent.State[stateName];
      if (Boolean(this.state & UXComponent.State[stateName])) {
        this.element.classList.add(UXComponent.StateClassName[stateValue]);
      }
    }, this);
  }
  // getClassName() {
  //   this.element.className = UXComponent.StateClassName[this.state];
  // }
}

// UXComponent.State = {
//   DISABLED: 1,
//   FOCUSED: 2,
//   HOVERED: 4,
//   ACTIVE: 8,
//   HAS_ICON: 16,
// }

// UXComponent.StateClassName = {
//   '1': 'item-disabled',
//   '2': 'item-focused',
//   '4': 'item-hovered',
//   '8': 'item-active',
//   '16': 'item-hasicon',
// };

// UXComponent.StateClassName[1 | 16] = 'item-hasicon item-disabled';

const myButton = new UXComponent();
myButton.element.textContent = 'Button';
document.body.append(myButton.element);