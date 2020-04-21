class Money {
  constructor(value, currency) {
    this.value = value;
    this.currency = currency;
  }

  exchangeTo(newCurrency) {
    if (this.currency === newCurrency) {
      return new Money(this.value, this.currency);
    }
    const newValue = this.value * this.constructor.rates[this.currency][newCurrency];
    return new Money(newValue, newCurrency);
  }
}

Money.rates = {
  usd: {
    eur: 0.7,
  },
  eur: {
    usd: 1.2,
  },
};

/* testing */
const money1 = new Money(100, 'usd');
console.log(money1);
console.log(money1.exchangeTo('eur'));

/* Таким подходом мы разделили ответственности.
Сам объект Money отвечает только за свои данные. За общие вещи отвечает конструктор.
Это позволяет изменять параметры Money сразу для всех объектов: */
Money.rates.usd.eur = 0.71;
console.log(money1.exchangeTo('eur'));

Money.setRate = function setRate(from, to, value) {
  this.rates[from][to] = value;
}

Money.setRate('usd', 'eur', 0.80);
console.log(money1);
console.log(money1.exchangeTo('eur'));

/* Во многих других языках подобная функциональность реализуется с помощью статических свойств и методов.
Прямо сейчас они находятся в процессе добавления в JavaScript. Если установлен необходимый плагин Babel,
то появится возможность пользоваться ими в своем коде. Вот как это выглядит: */

class Money2 {
  // Определение статического свойства
  static rates = {
    usd: {
      eur: 0.7,
    },
    eur: {
      usd: 1.2,
    },
  };

  // Определение статического метода
  static setRate(from, to, value) {
    this.rates[from][to] = value;
  }

  constructor(value, currency) {
    this.value = value;
    this.currency = currency;
  }

  exchangeTo(newCurrency) {
    if (this.currency === newCurrency) {
      return new Money(this.value, this.currency);
    }
    const newValue = this.value * this.constructor.rates[this.currency][newCurrency];
    return new Money(newValue, newCurrency);
  }
}

/* testing ES6 features */
const money2 = new Money2(100, 'usd');
console.log(money2);
console.log(money2.exchangeTo('eur'));
