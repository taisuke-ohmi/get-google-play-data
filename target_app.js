'use strict';

const gplay = require('google-play-scraper');
const json2csv = require('json2csv').parse;
const fs = require('fs');
require('date-utils');

gplay.app({
  appId: 'com.dxco.pandavszombies' // set android appId
}).then(writeCSV, console.log);

function writeCSV(res) {
  var header = Object.keys(res).join();
  var dt = new Date();
  var formatted = dt.toFormat("YYYYMMDDHH24MISS");

  try {
    const csv = json2csv(res, { header });
    fs.appendFile("target_app_" + formatted + ".csv", csv);
  } catch (err) {
    console.error(err);
  }
}
