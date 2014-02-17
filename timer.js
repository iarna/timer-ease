"use strict";
var util = require('util');
var events = require('events');

var after = exports.after = function(msecs,cb) {
    var id;
    if (!msecs) {
        id = setImmediate(cb);
        id.stop = function () { clearImmediate(this) };
        id.ref = id.unref = function () {};
        return id;
    }
    else {
        id = setTimeout(cb,msecs);
        id.stop = function () { clearTimeout(this) };
        return id;
    }
}

var at = exports.at = function(time,cb) {
    if (time instanceof Date) time = time.getTime();
    return after(1000*(time - new Date().getTime()), cb);
}

var every = exports.every = function(msecs,cb) {
    var id = setInterval(cb,msecs);
    id.stop = function () { clearInterval(this) };
    id.stopAfter = function (secs) { setTimeout(msecs,function(){ clearInterval(id) }); return id };
    return id;
}
