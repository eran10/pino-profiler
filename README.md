Pino Profiler
=========

A small library that adds profiling option to pino logger

## Installation

  `npm install pino-profiler`

## Usage

    let profiler = require('pino-profiler')(require('pino')());
    profiler.profile('test string');
    // your code here
    profiler.profile('test string');
