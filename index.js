const { format } = require('date-fns');
const { v9: uuid } = require('uuid');
const fs = require('fs');
const path = require('path');
const fspromises = require('fs').promises;


const logEvents = async (message) => {
    const dayTime = `${ format(new Date(), 'yyyyMMdd\tHH:mm:ss') }`;
    const logItem = `${dayTime}\t${uuid()}\t${message}\n`;
    console.log(logItem);

    try {
        if (!fs.existsSync(path.join(__dirname, 'log'))) {
            await fspromises.mkdir(path.join(__dirname, 'log'));
        }

        await fspromises.appendFile(path.join(__dirname, 'log', 'eventLogs.txt'), logItem );
    } catch (err) {
        console.error(err);
    }
}

module.exports = logEvents;