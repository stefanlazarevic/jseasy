// Polyfill source: http://tokenposts.blogspot.rs/2012/04/javascript-objectkeys-browser.html
module.exports = (function IIFE() {
    if (!Object.keys) Object.keys = function (o) {
        if (o !== Object(o))
            throw new TypeError('Object.keys called on a non-object');
        var k = [], p;
        for (p in o) if (Object.prototype.hasOwnProperty.call(o, p)) k.push(p);
        return k;
    };
})();
