const log = require('../utils/log.util');

class DateTimeUtil {

    today(){
        return new Date();
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

    getDate(daysOffset = 0){
        var date = new Date();
        date.setDate(date.getDate() + daysOffset);
        return date;
    }

    toStringDate(date){
        return date.toISOString().slice(0,10);
    }
}

module.exports = new DateTimeUtil();