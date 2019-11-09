(function countClick() {
    let numClick = 0;
    document.addEventListener('click', () => {
        alert(++numClick);
        console.log(numClick);
    });
})();