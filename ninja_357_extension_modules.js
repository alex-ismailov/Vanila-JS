const MouseCounterModule = function() {
    let numClick = 0;
    const handleClick = () => {
        // alert(++numClick);
        console.log(`numClick: ${++numClick}`);
    };

    return {
        countClicks: () => {
            document.addEventListener('click', handleClick);
        }
    };
}();

(function(module) {
    let numScroll = 0;
    const handleScroll = () => {
        // alert(++numScroll);
        console.log(`numScroll: ${++numScroll}`);
    };
    
    module.countScrolls = () => {
        document.addEventListener('wheel', handleScroll);
    };
})(MouseCounterModule);

MouseCounterModule.countClicks();
MouseCounterModule.countScrolls();