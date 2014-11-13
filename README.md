# Logger Experiment for the Cloudlet Platform

[Bunyan](https://github.com/trentm/node-bunyan) is a simple and fast JSON logging library for node.js services.
This repo defines the logger instance to be used across the various cloudlet-platform repos.

## Log Levels
The current configuration specifies three logging levels

* info
  * logs to `stdout`, preferable to excessive uses of `console.log()`
* error
  * logs to `/opt/openi/cloudlet_platform/logs/cloudletPlatformError.log`
* debug
  * logs to `/opt/openi/cloudlet_platform/logs/cloudletPlatformDebug.log`


## Associating the logger with particular components of the platform
Bunyan has a concept of a child logger to specialize a logger for a sub-component of your application.
Say we wanted to implement logging for the filter function of the object-api.
You simply require the logger and then name the child logger accordingly.

```javascript
logger = logger.child({component: 'filter'});
```

## Logging Usage
Logging is as straightforward as

```javascript
function (error, response) {
  if (error) {
    logger.error(error);
  }
}
```