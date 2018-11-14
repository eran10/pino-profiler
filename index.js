'use strict';

function addProfiler(logger) {
    const profilers = {};
    function profile(id) {
        const time = Date.now();
        if (profilers[id]) {
            const timeEnd = profilers[id];
            delete profilers[id];
            logger['info']({id, start: time, end: timeEnd}, `Completed ${id} in ${time - timeEnd} ms`);
        } else {
            profilers[id] = time;
        }
    }

    logger.profile = profile;
    return logger;
}

module.exports = addProfiler;