const body = document.body;
console.log(body);
body.innerHTML = '<b>make</b> love';
console.log(body.innerHTML);
console.log(body.childNodes); // [b, text]

document.body.textContent = '<b>make</b> love';
console.log(document.body.innerHTML); // "&lt;b&gt;make&lt;/b&gt; love"