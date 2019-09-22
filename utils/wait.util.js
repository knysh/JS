const logger = require("./log.util");

const doWait = (action, interval, expectedValue) => {
    return new Promise((resolve, reject) => {
        if(action() == expectedValue){
            setTimeout(() => resolve(), interval);
        }
        logger.warning(`Reject action value [${action()}]`);
        setTimeout(() => reject(), interval);
    });
};

const waitFor = (action, maxCount, interval, count, waitValue) => {
    count++;
    logger.info(`[${count}] Wait for ${waitValue}`);
    return doWait(action, interval, waitValue).then(() => {
        logger.warning('Was able to reach expected condition!');
        return true;
    }, () => {
        if(maxCount <= count){
            logger.warning(`Was not able to reach expected condition! Action value is [${action()}]`);
            return false;
        }else{
            return waitFor(action, maxCount, interval, count, waitValue);
        }
    });
};

const waitForAwait = async(action, maxCount, interval, count, waitValue) => {
    count++;
    logger.info(`[${count}] Wait for ${waitValue}`);
    try {
        await doWait(action, interval, waitValue);
        logger.warning('Was able to reach expected condition!');
        return true;
    } catch (actionResult) {
        if(maxCount <= count){
            logger.warning(`Was not able to reach expected condition! Action value is [${actionResult}]`);
            return false;
        }else{
            return waitFor(action, maxCount, interval, count, waitValue);
        }
    }
};

class Wait{
    
    forTrue(action, maxCount, interval){
        return waitForAwait(action, maxCount, interval, 0, true);
    }

    forFalse(action, maxCount, interval){
        return waitForAwait(action, maxCount, interval, 0, false);
    }
}

module.exports = Wait;