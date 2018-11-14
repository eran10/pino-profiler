'use strict';

function addProfiler(logger) {
    const profilers = {};
    function profile(id, details = false) {
        const time = Date.now();
        if (profilers[id]) {
            const timeEnd = profilers[id];
            delete profilers[id];
            if (details) {
                logger['info']({id, start: time, end: timeEnd}, `Completed ${id} in ${time - timeEnd} ms`);
            }
            else {
                logger['info'](`Completed ${id} in ${time - timeEnd} ms`);
            }
        } else {
            profilers[id] = time;
        }
    }

    logger.profile = profile;
    return logger;
}

module.exports = addProfiler;