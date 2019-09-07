const log = require('../utils/log.util');

class DateTimeUtil {

    today(){
        return new Date().toDateString();
    }
    
    setYear(date , year){
        log.info(`set year value: ${year}`);
        date.setFullYear(year);
    } 
    
    daysDifference(dateLeft, dateRight){
        var timeDiff = Math.abs(dateLeft.getTime() - dateRight.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return diffDays;
    }
}

module.exports = new DateTimeUtil();