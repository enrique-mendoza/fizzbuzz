const fs = require('fs');

class Reader {
    static readJsonFile(filePath) {
        const rawData = fs.readFileSync(filePath);
        return JSON.parse(rawData);
    }
}

module.exports = Reader;