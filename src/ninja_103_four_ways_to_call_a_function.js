'use strict'

// *** Call like function ***
function whatsMyContext() {
    return this;
}
document.write('Call like function in "use strict" - whatsMyContext(): ' + whatsMyContext() + '<br>');

let getMyThis = whatsMyContext;
document.write('Call like function - getMyThis(): ' + getMyThis() + '<br>');

// *** Call like method ***
const ninja1 = {
    getMyThis: whatsMyContext
};
document.write('Call like method - ninja1.getMyThis() === ninja1: ' + (ninja1.getMyThis() === ninja1) + '<br>');

// *** Call like constructor ***
function Ninja() {
    this.skulk = function() {
        return this;
    };
}

const ninja3 = new Ninja();
const ninja4 = new Ninja();
document.write('ninja3.skulk === ninja3: ' + (ninja3.skulk() === ninja3) + '<br>');
document.write('ninja4.skulk === ninja4: ' + (ninja4.skulk() === ninja4) + '<br>');


