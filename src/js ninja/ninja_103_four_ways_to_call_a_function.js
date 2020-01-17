'use strict'

// *** Call like function ***
function whatsMyContext() {
    return this;
}
console.log('Call like function in "use strict" - whatsMyContext(): ' + whatsMyContext());

let getMyThis = whatsMyContext;
console.log('Call like function - getMyThis(): ' + getMyThis());

// *** Call like method ***
const ninja1 = {
    getMyThis: whatsMyContext
};
console.log('Call like method - ninja1.getMyThis() === ninja1: ' + (ninja1.getMyThis() === ninja1));

// *** Call like constructor ***
function Ninja() {
    this.skulk = function() {
        return this;
    };
}

const ninja3 = new Ninja();
const ninja4 = new Ninja();
console.log('ninja3.skulk === ninja3: ' + (ninja3.skulk() === ninja3));
console.log('ninja4.skulk === ninja4: ' + (ninja4.skulk() === ninja4));


