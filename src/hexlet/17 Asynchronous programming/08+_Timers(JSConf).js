


function sleep(ms) {
  ms += new Date().getTime();
  while (new Date() < ms){}
}


/* Этот forEach блокирует поток выполнения скрипта до того пока он полностью не
закончит свое выполнение (т.е. пока он не освободит call stack вызовов). */ 
[1, 2, 3].forEach((n) => {
  console.log(n);
  sleep(1000);
});

/* Чтобы forEach работал "параллельно" напишем его асинхронный вариант. */
const asyncForEach = (arr, cb) => {
  arr.forEach((n) => setTimeout(() => cb(n), 0));
}

/* Текущий вызов asyncForEach не блокирует основной поток выполнения программы
до конца своего выполнения, вместо этого он помещает эти вызовы в очередь
Event Loop, которая начнет выполнятся только после того выполнится основной код,
т.е. Call Stack будет пуст */
asyncForEach([1, 2, 3, 4], (n) => {
  console.log(n);
  sleep(1000);
});

console.log('last string');

