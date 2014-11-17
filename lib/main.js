'use strict';

var bunyan        = require('bunyan');

var logger = bunyan.createLogger({
   name: "cloudlet-platform",
   streams: [
      {
         level: 'info',
         stream: '/opt/openi/cloudlet_platform/logs/cloudletPlatformInfo.log'
      },
      {
         level: 'error',
         path: '/opt/openi/cloudlet_platform/logs/cloudletPlatformError.log'
      },
      {
         level: 'debug',
         path: '/opt/openi/cloudlet_platform/logs/cloudletPlatformDebug.log'
      }
   ]
});

module.exports = logger;