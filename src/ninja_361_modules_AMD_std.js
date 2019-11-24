define('MouseCounterModule', ['./dependencies/jquery-3.4.1.min.js'], $ => {
    let numClick = 0;
    const cilckHandle = () => {
        console.log(`numClick: ${++numClick}`);
    };

    return {
        countClick: () => {
            $(document).on('click', cilckHandle);
        }
    };
});

MouseCounterModule.countClick();