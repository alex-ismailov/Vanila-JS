const el = document.getElementById('aboutPage')
console.log(el.getAttribute('class')); // simple
console.log(el.getAttribute('className')); // null
console.log(el.getAttribute('ClasS')); // simple
console.log(el.hasAttribute('className')); // false

console.log(el.classList);
// el.setAttribute('class', 'newClassName');
el.classList.add('newClassName');
console.log(el.classList);
console.log(el.className);

// const body = document.body;
// console.log(body);