const logWithTag = (tag, text) => {
    console.log(`[${tag}] ${new Date()} ${text} [${tag}]`);
}

class Log{
    info(text){
        logWithTag('INFO', text);
    }

    warning(text){
        logWithTag('WARN', text);
    }

    error(text){
        logWithTag('ERROR', text);
    }
}

module.exports = new Log(); 