const MouseCounterModule = function() {
    let numClick = 0;
    const handleClick = () => {
        alert(++numClick);
        console.log(numClick);
    };

    return {
        countClicks: () => {
            document.addEventListener('click', handleClick);
        }
    };
}();

MouseCounterModule.countClicks();