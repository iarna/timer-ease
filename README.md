timer-ease
----------

Sugar for JavaScript's ugly, ugly timer functions

Synopsis
--------

    var timer = require('timer-ease');

    // Call after 200 msec
    timer.after(200, function(){ console.log('hi') });

    // Call on 1st Jan 2017
    timer.at( new Date(2017, 1), function() { console.log('Happy new year!') });

    // Call every 3 seconds
    timer.every(3000, function(){ console.log('tick tock') });

    // Call every minute for 10 minutes
    timer.every(60*1000, function(){ console.log('goes the clock') })
         .stopAfter(10*60*1000);

Functions
---------

* after(msecs, cb) -> timerobj

After msecs delay, call cb.

* at(date, cb) -> timerobj

At date, call cb.  date can be a Date object or seconds since 1970.
At timestamp (in seconds since 1970, aka date.getTime()).

* every(msecs, cb) -> timerobj

Every msecs, call cb.

Methods
-------

* stop()

Stops the timer from triggering further.

* stopAfter(msecs) **(objects produced by `every` only)**

Stops the timer from triggering further after msecs.

* unref()

As per setInterval/setTimeout ids, this makes it so that having this timer
outstanding won't keep the event loop from terminating.

* ref()

As per setInterval/setTimeout ids, this undoes a previous call to unref().


Prior Art
---------

[timer](https://github.com/markussieber/timer) - Almost the API I wanted, but not quite.

[ONE::Timer](https://metacpan.org/pod/ONE::Timer) - The API this models
