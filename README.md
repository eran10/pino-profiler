Pino Profiler
=========

A small library that adds profiling option to pino logger

## Installation

  `npm install pino-profiler`

## Usage
#### basic example :
    let profiler = require('pino-profiler')(require('pino')());
    profiler.profile('test string');
    // your code here
    profiler.profile('test string');
    
#### advanced example :
    const pino = pino({
         name: logName,
         level: config.log.logconsole.level,
         base: null,
         prettyPrint: {
             colorize: true,
             translateTime: 'dd-mm-yyyy\'--\'HH:MM:ss',
             levelFirst: true
        }
     });
     let logger = require('pino-profiler')(pino);
     
     logger.profile('test string');
     // your code here
     logger.profile('test string');
    
#### Notes
- you can pass `true` to profile function to see exact start and end time of the code e.g 
  `logger.profile('test string', true);`
