'use strict';

class Profiler {
    constructor(logger) {
        this.profilers = {};
        this.logger = logger;
    }

    profile(id) {
        const time = Date.now();
        if (this.profilers[id]) {
            const timeEnd = this.profilers[id];
            delete this.profilers[id];
            return this.logger['info']({ id, start : time, end:  timeEnd}, `Completed ${id} in ${time - timeEnd} ms`);
        }

        this.profilers[id] = time;
        return this.logger;
    }
}

module.exports = Profiler;