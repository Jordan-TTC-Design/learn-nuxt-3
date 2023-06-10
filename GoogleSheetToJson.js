// GoogleSheetToJson.js
const fs = require('fs-extra');
const unflatten = require('flat').unflatten;
const { extractSheets } = require('spreadsheet-to-json');
const path = require('path');
extractSheets(
  {
    spreadsheetKey: '1OJVnu7ACj682kZMYqhwDNPV9BzYyuCG4JMu9Ie9Lv-A',
    credentials: require('./google/goog-361215-1622d0ed45c7.json'),
    sheetsToExtract: ['index', 'about'],
  },
  (err, data) => {
    if (err) throw err;
    const read = [...data['index'], ...data['about']];
    const result = {};
    const files = [];

    for (const key in read[0]) {
      if (key !== 'key') {
        files.push(key);
        result[key] = {};
      }
    }
    read.forEach(el => {
      for (const file of files) {
        result[file][el['key']] = el[file] ? el[file] : '';
      }
    });
    for (const fileName of files) {
      fs.ensureDirSync(
        path.dirname(path.resolve(__dirname, './language', `${fileName}.json`)),
      );
      fs.writeJSONSync(
        path.resolve(__dirname, './language', `${fileName}.json`),
        unflatten(result[fileName], { object: true }),
        { spaces: 2 },
      );
    }
  },
);
