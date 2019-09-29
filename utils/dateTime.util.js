class DateTimeUtil {
    
    setYear(date , year){
        return date.setFullYear(year);
    }
    
    getDaysDiffs(dateLeft, dateRight){
        var timeDiff = Math.abs(dateLeft.getTime() - dateRight.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return diffDays;
    }

    getDate(daysOffset = 0){
        var date = new Date();
        date.setDate(date.getDate() + daysOffset);
        return date;
    }

    toYYYYMMdd(date){
        return date.toISOString().slice(0,10);
    }
}

module.exports = new DateTimeUtil();