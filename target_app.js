'use strict';

const gplay = require('google-play-scraper');
const json2csv = require('json2csv').parse;
const fs = require('fs');

gplay.app({
  appId: 'com.dxco.pandavszombies' // set android appId
}).then(writeCSV, console.log);

function writeCSV(res) {
  var header = Object.keys(res).join();

  try {
    const csv = json2csv(res, { header });
    fs.appendFile("target_app.csv", csv);
  } catch (err) {
    console.error(err);
  }
}
