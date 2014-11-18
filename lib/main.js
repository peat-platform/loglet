'use strict';

var bunyan        = require('bunyan');

var logger = bunyan.createLogger({
   name: "cloudlet-platform",
   src: true,
   streams: [
      {
         level: 'info',
         path: '/opt/openi/cloudlet_platform/logs/cloudletPlatform.log'
      }
   ]
});

module.exports = logger;