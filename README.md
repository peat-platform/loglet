## Logger Experiment for the Cloudlet Platform

[Bunyan](https://github.com/trentm/node-bunyan) is a simple and fast JSON logging library for node.js services.
This repo defines the logger instance to be used across the various cloudlet-platform repos.

### Log Levels
Bunyan supports multiple logging levels. We have it configured so that anything logged at level `info` and above is written to
`'/opt/openi/cloudlet_platform/logs/cloudletPlatform.log'`

* trace
  * level 10
* debug
  * level 20
* info
  * level 30
* warn
  * level 40
* error
  * level 50
* fatal
  * level 60

### Associating the logger with particular components of the platform
Bunyan has a concept of a child logger to specialize a logger for a sub-component of your application.
Say we wanted to implement logging for the filter function of the object-api.
You simply require the logger and then name the child logger accordingly.

```javascript
var loglet = require('loglet');
loglet = loglet.child({component: 'filter'});
```

### Logging Usage
Logging is as straightforward as

```javascript
function (error, response) {
  if (error) {
    loglet.error(error);
  }
}
```