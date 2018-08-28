'use strict';

class Profiler {
    constractor(logger) {
        this.profilers = {};
        this.logger = logger;
    }

    profile(id) {
        const time = Date.now();
        if (this.profilers[id]) {
            const timeEnd = this.profilers[id];
            delete this.profilers[id];
            return this.logger['info'](`${id} -- durationMs -- ${time - timeEnd}`);
        }

        this.profilers[id] = time;
        return this.logger;
    }
}

module.exports = Profiler;